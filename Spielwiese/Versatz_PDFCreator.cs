using NLog;
using pdfforge.CustomScriptAction;
using pdfforge.PDFCreator.Conversion.Jobs.Jobs;
using System;
using System.IO;
using iText.Kernel.Pdf;
using iText.Layout;
using iText.Layout.Element;

public class MovePdfFileInPreConversionScript : IPDFCreatorScript
{
    public ScriptResult PreConversion(Job job, Logger logger)
    {
        logger.Debug("Launched renaming and moving of file template in CS-Script PreConversion");

        try
        {
            // Ändern des Dateinamens basierend auf deinem OCR-Prozess
            job.OutputFileTemplate = GetNewPath(job.OutputFileTemplate);

            // Hier kann der OCR-Prozess aufgerufen werden, um die Datei zu bearbeiten
            MovePdf(job.OutputFileTemplate);

            return ScriptResult.Success;
        }
        catch (Exception e)
        {
            logger.Error(e, "Exception during CS-Script PreConversion");
            return ScriptResult.Abort;
        }
    }

    public ScriptResult PostConversion(Job job, Logger logger)
    {
        logger.Debug("Launched backup in CS-Script PostConversion");

        try
        {
            foreach (var file in job.OutputFiles)
            {
                // Backup der bearbeiteten Datei
                var success = CreateBackUp(file);
                if(!success)
                    logger.Warn("BackUp for \"" + file + "\" already exists.");
            }

            return ScriptResult.Success;
        }
        catch (Exception e)
        {
            logger.Error(e, "Exception during CS-Script PostConversion");
            return ScriptResult.Abort;
        }
    }

    /// <summary>
    /// Bestimmt einen neuen Dateipfad im gleichen Verzeichnis wie die Originaldatei.
    /// </summary>
    /// <param name="originalPath">Vollständiger Pfad zur Originaldatei</param>
    /// <returns>Neuer Dateipfad im Originalverzeichnis</returns>
    public string GetNewPath(string originalPath)
    {
        var originalDir = Path.GetDirectoryName(originalPath);
        return Path.Combine(originalDir, Path.GetFileNameWithoutExtension(originalPath) + "_moved.pdf");
    }

    /// <summary>
    /// Verschiebt die PDF-Datei um 2mm nach oben (oder beliebig, basierend auf iText)
    /// </summary>
    /// <param name="filePath">Der Pfad zur zu bearbeitenden PDF</param>
    private void MovePdf(string filePath)
    {
        float offsetY = 2 * 2.835f;  // 2mm in Punkte umrechnen
        string outputFilePath = Path.Combine(Path.GetDirectoryName(filePath), Path.GetFileNameWithoutExtension(filePath) + "_modified.pdf");

        try
        {
            using (PdfDocument pdfDoc = new PdfDocument(new PdfReader(filePath), new PdfWriter(outputFilePath)))
            {
                int numberOfPages = pdfDoc.GetNumberOfPages();
                for (int i = 1; i <= numberOfPages; i++)
                {
                    var page = pdfDoc.GetPage(i);
                    var pageSize = page.GetPageSize();
                    // Verschiebe die Seite um 2mm
                    page.SetMediaBox(new iText.Kernel.Geom.Rectangle(pageSize.GetX(), pageSize.GetY() + offsetY, pageSize.GetWidth(), pageSize.GetHeight()));
                    page.SetCropBox(new iText.Kernel.Geom.Rectangle(pageSize.GetX(), pageSize.GetY() + offsetY, pageSize.GetWidth(), pageSize.GetHeight()));
                }
            }
        }
        catch (Exception ex)
        {
            throw new Exception("Fehler beim Verschieben der PDF: " + ex.Message);
        }
    }

    /// <summary>
    /// Erstellt ein Backup der Originaldatei.
    /// </summary>
    /// <param name="originalFile">Pfad zur Originaldatei</param>
    /// <returns>True, wenn das Backup erfolgreich erstellt wurde</returns>
    private bool CreateBackUp(string originalFile)
    {
        var fileName = Path.GetFileName(originalFile);
        var backupDir = originalFile + "_BackUp";
        var backupFile = Path.Combine(backupDir, fileName);

        if (File.Exists(backupFile))
            return false;

        Directory.CreateDirectory(backupDir);
        File.Copy(originalFile, backupFile);
        
        return true;
    }
}
