$ordner = "C:\Temp\AW-Etiketten"  # Ordnerpfad anpassen
$anhang = "_Artikeletikett_2025"  # Anhang, der hinzugefügt werden soll

# Alle Dateien im Ordner durchgehen
Get-ChildItem -Path $ordner -File | ForEach-Object {
    $neuerName = "$($_.BaseName)$anhang$($_.Extension)"
    $alterPfad = $_.FullName
    $neuerPfad = Join-Path -Path $ordner -ChildPath $neuerName
    Rename-Item -Path $alterPfad -NewName $neuerName
}

Write-Host "Umbenennung abgeschlossen."
