using iText.Kernel.Pdf;
using iText.Layout;
using iText.Layout.Element;

// Beispiel für das Erstellen einer einfachen PDF-Datei
public class Example
{
    public void CreatePdf(string filePath)
    {
        using (PdfWriter writer = new PdfWriter(filePath))
        {
            using (PdfDocument pdf = new PdfDocument(writer))
            {
                Document document = new Document(pdf);
                document.Add(new Paragraph("Hello, iText 7!"));
            }
        }
    }
}
