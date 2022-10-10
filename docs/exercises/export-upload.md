# Exportieren und Hochladen von Hausübungen in IntelliJ

!!! warning
    Zum Erstellen der Abgabedatei muss die Gradle Task "prepareSubmission" verwendet werden.
* Beachten Sie, dass Ihr Code zum Abgeben kompilierbar sein muss. IntelliJ zeigt Ihnen am unteren Rand im Abschnitt **"Problems"** alle Syntaxfehler in Rot an.
* Falls Ihnen beim Exportieren ein Fehler angezeigt wird, finden Sie im Abschnitt **"Bearbeiten von Hausübungen"** eine Übersicht, wie häufig auftretende Fehler behoben werden können.

## Exportieren

1. Tragen Sie in der **build.gradle.kts** Datei Ihre Tu-ID, sowie Ihren Vor- und Nachnamen ein. Ein Eintrag sieht z.B. wie folgt aus:
   ``` java
   studentID = "ab12cdef"  
   firstName = "Max"  
   lastName = "Mustermann"
   ```
    * Verändern Sie bis auf diese drei Zeilen nichts Weiteres an der Datei.
    * Beachten Sie, dass die Anführungszeichen notwendig sind.


2. Öffnen Sie am rechten oberen Rand die Gradle Übersicht.  
    * Alternativ können Sie sich die Gradle Ansicht auch über den Reiter **"View"** anzeigen lassen, indem Sie auf **"Tool Windows" -> "Gradle"** gehen.  


3. Unter **"<ProjektName\>" -> "Task" -> "build"** finden Sie die Gradle Task **"mainBuildSubmission"**. Führen Sie diese mit einem Doppelklick aus.
    * Wenn unten in der Konsole **"BUILD SUCCESSFUL"** steht, war das Erstellen der Abgabedatei erfolgreich.  


4. In dem Projektordner finden Sie nun im Ordner **"build"** einen weiteren Ordner **"libs"**. In diesem befindet sich die Abgabedatei.
    * Die Datei ist nach dem Schema **"HXX-lastName-firstName-submission.jar"** benannt. Ändern Sie diese Benennung **nicht**.
    * Beachten Sie, dass IntelliJ die Datei nicht unbedingt sofort anzeigt. Suchen Sie die Datei am besten im File Explorer.
    * Um den Inhalt der Abgabedatei zu überprüfen, können Sie die Jar-Datei entweder mit einem Entpackungsprogramm wie z. B. 7Zip oder mit dem Befehl **"jar -xf <Dateiname\>"** in einer Konsole. In der Regel ist dies aber nicht notwendig.
    * Beachten Sie, dass die exportierte Jar-Datei nicht ausführbar ist.

## Matrikelnummer angeben

!!! info
    Damit wir Ihre Abgaben Ihrer Matrikelnummer für die Klausurzulassung und den Bonus korrekt zuordnen können, müssen Sie in ihren Moodle Profil ihre Matrikelnummer hinterlegen

1. Melden Sie sich in [Moodle] an.
2. Drücken Sie rechts oben auf Ihren Namen und dann auf **"Profil"**.
3. Gehen Sie dort im Abschnitt **"Mehr Details"** auf **"Profil bearbeiten"**.
4. Tragen Sie nun unter **"Optional"** im Feld **"ID-Nummer"** ihre Matrikelnummer ein.
    * Sie finden Ihre Matrikelnummer unter anderem auf ihrem Studienausweis.
5. Speichern Sie die Änderungen, indem Sie unten auf der Seite auf **"Profil aktualisieren"** drücken und überprüfen Sie, ob die Daten korrekt übernommen wurden.

## Hochladen
* Laden Sie nun die zuvor erstellte Datei in [Moodle] bei der entsprechenden Abgabe hoch.
    * Sie können bis zum Abgabeende beliebig oft Ihre Abgabe ändern. Wir empfehlen Ihnen daher regelmäßig Ihren Zwischenstand hochzuladen, damit Sie nicht leer dastehen, wenn Sie die Abgabefrist verpassen. 
    * Alle Abgaben, die auf Moodle hochgeladen werden konnten, werden bewertet. Wenn keine Datei nicht hochgeladen werden kann, weil die Abgabefrist überschritten wurde, kann die Aufgabe nicht bewertet werden.

[Moodle]: https://moodle.informatik.tu-darmstadt.de/course/view.php?id=1248