# Exportieren und Hochladen von Hausübungen in IntelliJ

!!! warning "Warnung"
    Zum Erstellen der Abgabedatei muss die [Gradle Task] "build/mainBuildSubmission" verwendet werden.
* Beachten Sie, dass Ihr Code zum Abgeben kompilierbar sein muss. IntelliJ zeigt Ihnen am linken unteren Rand im Abschnitt **"Problems"** alle Syntaxfehler in Rot an.
* Falls Ihnen beim Exportieren ein Fehler angezeigt wird, finden Sie [hier] eine Übersicht, wie häufig auftretende Fehler behoben werden können.

## Exportieren

1. Tragen Sie in der **build.gradle.kts** Datei Ihre Tu-ID, sowie Ihren Vor- und Nachnamen ein. Ein Eintrag sieht z.B. wie folgt aus:
    ```java
    studentId = "ab12cdef"
    firstName = "Max"
    lastName = "Mustermann"
    ```
    * Verändern Sie bis auf diese drei Zeilen nichts Weiteres an der Datei.
    * Beachten Sie, dass die Anführungszeichen notwendig sind.
    * Falls Sie noch eine alte Version verwenden, sehen die Zeilen stattdessen wie folgt aus:
    ``` java
    studentID.set("ab12cdef")
    firstName.set("Max")
    lastName.set("Mustermann")
    ``` 
    * Bei der alten Version müssen Sie die drei Zeilen noch einkommentieren, d.h. die **//** am Anfang der Zeile entfernen. Anschließend einmal auf die Blauen Pfeile oben in der Gradle Übersicht klicken, um die Konfiguration neu zu laden.


2. Öffnen Sie am rechten oberen Rand die Gradle Übersicht (das Elefantensymbol).

3. Unter **"FOP-2324-HXX-Student" -> "Task" -> "build"** finden Sie die Gradle Task **"mainBuildSubmission"**. Führen Sie diese mit einem Doppelklick aus.
    * Wenn unten in der Konsole **"BUILD SUCCESSFUL"** steht, war das Erstellen der Abgabedatei erfolgreich.
    * Achten Sie darauf, dass Sie nicht die Task **"build"** ausführen, da diese nicht die Abgabedatei erstellt. Abgaben, die mit dieser Task erstellt wurden, können nicht bewertet werden.

4. In dem Projektordner finden Sie nun im Ordner **"build"** einen weiteren Ordner **"libs"**. In diesem befindet sich die Abgabedatei.
    * Die Datei ist nach dem Schema **"hXX-TU-ID-firstName-lastName-submission.jar"** benannt. Ändern Sie diese Benennung **nicht**.
    * Beachten Sie, dass IntelliJ die Datei nicht unbedingt sofort anzeigt. Suchen Sie die Datei am besten im File Explorer.
    * Um den Inhalt der Abgabedatei zu überprüfen, können Sie die Jar-Datei entweder mit einem Entpackungsprogramm wie z. B. 7Zip oder mit dem Befehl **"jar -xf <Dateiname\>"** in einer Konsole entpacken. In der Regel ist dies aber nicht notwendig.
    * Beachten Sie, dass die exportierte Jar-Datei nicht ausführbar ist.

## Hochladen
* Laden Sie nun die zuvor erstellte Datei in [Moodle] bei der entsprechenden Abgabe hoch.
    * Sie finden das Abgabemodul auf der selben Seite, wie auch das Übungsblatt, unter dem Namen **"Abgabe zu Übungsblatt X"**
    * Sie können bis zum Abgabeende beliebig oft Ihre Abgabe ändern. Wir empfehlen Ihnen daher regelmäßig Ihren Zwischenstand hochzuladen, damit Sie nicht leer dastehen, wenn Sie die Abgabefrist verpassen.
    * Alle Abgaben, die auf Moodle hochgeladen werden konnten, werden bewertet. Wenn keine Datei hochgeladen werden kann, weil die Abgabefrist überschritten wurde, kann die Aufgabe nicht bewertet werden.

[Moodle]: https://moodle.informatik.tu-darmstadt.de/course/view.php?id=1469&sectionid=18762
[Gradle Task]: https://wiki.tudalgo.org/exercises/edit/#gradle-tasks
[hier]: https://wiki.tudalgo.org/exercises/fix-errors/ 
