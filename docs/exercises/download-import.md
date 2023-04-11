# Herunterladen und Importieren von Hausübungen in IntelliJ

Zum Bearbeiten der Hausübungen benötigen Sie die von uns zur Verfügung gestellten Vorlagen.
Diese erhalten sie entweder, indem sie das zugehörige [Git]-Repository klonen, oder die Zip-Datei von Moodle herunterladen.

## Importieren der Vorlage

=== "Git"

    * Um die Repositories mit Git zu klonen, müssen Sie zunächst Git lokal installieren.

    === "Windows"

        1. Laden Sie sich [Git] herunter, indem Sie rechts auf **"Download for Windows"** drücken.
        2. Führen Sie den soeben heruntergeladenen Installer aus.
        3. Drücken Sie solange auf **"Next"**, bis der Installationsprozess beginnt. Sie können die Standardeinstellungen des Installers übernehmen und müssen nichts weiter auswählen.
        4. Drücken Sie auf **"Finish** um den Installationsprozess abzuschließen.
        5. Sie können nun mit dem Befehl **"git --version"** in einer Konsole überprüfen, ob Git erfolgreich installiert wurde.
           * Sie können ein Terminal öffnen, indem Sie in der Windowssuche (Win+ S) **"cmd"** eingeben.

    === "Linux"

        * Auf Debian/Ubuntu Distributions können Sie Git mit dem folgenden Befehl installieren:
        ```
        sudo apt install git
        ```
        * Auf Arch Based Linux Systemen können Sie Git mit dem folgenden Befehl installieren:
        ```
        sudo pacman -S git
        ```

    === "MacOS"

        1. Sie können Git mit dem package installer Homebrew installieren. Führen Sie dafür folgenden Befehl in einem Terminal aus:
            ```
            brew install git
            ```
            * Sie können ein Terminal öffnen, indem Sie in der Suche (Cmd + Leertaste) **"Terminal"** eingeben
            * Falls Sie Homebrew nicht installiert haben, können Sie es mit folgenden Befehl installieren:
            ```
            /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)
            ```
            * Sie können selbstverständlich auch einen anderen package installer verwenden.
        2. Sie können nun mit dem Befehl **"git --version"** in einem Terminal überprüfen, ob Git erfolgreich installiert wurde.

    #### Repositories klonen
    !!! warning "Achtung"
        Forken Sie nicht die Repositories. Auf Forks hat jeder Zugriff, weshalb diese als Plagiarismus gewertet werden und Ihre Abgabe dann eventuell nicht von uns bewertet werden kann.
    1. IntelliJ bietet Ihnen die Möglichkeit, Git-Repositories automatisch zu klonen. Wählen Sie dafür links oben im **"File"** Reiter **"New" -> "Project From Version Controll..."** aus.
        * Wenn Sie IntelliJ das erste Mal starten oder momentan kein Projekt geöffnet haben, müssen Sie stattdessen rechts oben auf **"Get from VCS"** drücken.
    2. Geben Sie nun bei **"URL"** die URL zum Repository der entsprechenden Hausübungen ein.
        * Ein Link zu den entsprechenden Repositories finden Sie auf Moodle.
    3. Wählen Sie bei **"Directory"** den Ort aus, an dem Sie das Projekt speichern möchten.
    4. Drücken Sie nun auf **"Clone"**, um das Repository zu klonen.
    5. Falls Sie bereits ein Projekt geöffnet hatten, drücken Sie auf **"This Window"**.
    6. Nachdem das Klonen abgeschlossen ist, drücken Sie auf **"Trust Project"**, wodurch sich die Vorlage öffnet.
    7. Nun können Sie die Hausübung bearbeiten.

=== "Zip-Datei"
    !!! warning "Achtung"
        Wir empfehlen Ihnen für die Hausübungen Git zu verwenden.
    1. Alternativ können Sie auch mit der bereitgestellten Zip-Datei arbeiten. Laden Sie sich dafür aus dem Moodle Kurs die Zip-Datei der Vorlage für die entsprechende Hausübung herunter.
    2. Entpacken Sie die Zip-Datei und speichern Sie den entpackten Ordner an einem Ort Ihrer Wahl.
        * Unter Windows können Sie Zip-Dateien entpacken, indem Sie im File Explorer einen Rechtsklick auf die Datei machen und auf **"Alles extrahieren..."** drücken. Nachdem Sie     einen Speicherort angeben haben, müssen Sie noch auf **"extrahieren"** drücken, um die Datei zu entpacken.
        * Unter Mac OS können Sie Zip-Dateien entpacken, indem Sie im Finder einen Doppelklick auf diese machen.
    3. Gehen Sie nun in IntelliJ links oben im **"File"** Reiter auf **"open..."**
        * Wenn Sie IntelliJ das erste Mal öffnen, drücken Sie stattdessen rechts oben auf **"open"**
    4. Wählen Sie nun den Pfad zu dem Ordner, in dem die Vorlage gespeichert ist, aus und drücken Sie auf **"OK"**.
       * Achten Sie darauf, dass Sie den richtigen Ordner importieren. Der Ordner sollte nach der Hausübung benannt sein (z. B. **"FOP-2223-HXX-Student-master"** oder **"PX-Student-master"**) und direkt die     build.gradle.kts Datei enthalten sein. Wählen Sie beim Importieren **nicht** einen identisch benannten Oberordner aus.
    5. Falls Sie bereits ein Projekt geöffnet hatten, drücken Sie auf **"This Window"**.
    6. Drücken Sie zum Schluss auf **"Trust Project"**, wodurch sich die Vorlage öffnet.
    7. Nun können Sie die Hausübung bearbeiten.

## Aktualisieren der Vorlage

* Es kann vorkommen, dass wir nach der Veröffentlichung der Vorlage noch Änderungen an dieser vornehmen.
* Die Abgabe ist in i.d.R. mit jeder Version der Vorlage möglich.

=== "Git"

    * Wenn Sie die Vorlage mithilfe von Git geklont haben, können Sie sich die neuste Version der Vorlage ganz einfach herunterladen.
    * In IntelliJ gibt es eine Git Integration, die alle benötigten Befehle für Sie ausführt. Die Befehle stehen hier trotzdem nochmal dabei, falls Sie nicht mit IntelliJ arbeiten.
    1. Zunächst müssen Sie Ihre Änderungen commiten. Öffnen Sie dafür in IntelliJ am linken oberen Rand die Commit Ansicht, wählen Sie alle Dateien aus, die Sie bearbeitet haben, geben Sie eine commit Message und drücken Sie auf **"Commit"**.
       * Alternativ können Sie die Commit Ansicht auch über **"View" -> "Tool Windows" -> "Commit"** öffnen.
       * Falls das Commiten fehlschlägt, weil gewisse checks nicht erfolgreich durchlaufen, drücken Sie auf **"Commit Anyway"**.
       * Alternativer Befehl:
          ```
          git commit -am "commit Message"
          ```
    2. Nun können Sie die Änderungen zu Ihrer Version hinzuzufügen, indem Sie links oben in IntelliJ im Git Reiter auf **"Pull..."** drücken. Drücken Sie im Fenster, welches sich nun öffnet erneut auf **"Pull"**.
       * Alternativer Befehl:
          ```
          git pull origin master
          ```
       * Falls sich die Änderungen nicht im master branch befinden, müssen sie stattdessen die Änderungen in Ihren master branch mergen. Drücken Sie dafür im Git Reiter oben links auf **"Fetch"** und danach auf **"Merge"**. Geben Sie in dem Fenster, welches sich nun öffnet, rechts den Branch an, in welchem sich die Änderungen befinden. Drücken Sie dafür rechts auf den Pfeil nach unten oder geben Sie manuell den Namen ein. Drücken Sie zum Schluss auf **"Merge"**.
       * Falls Sie sich unsicher sind, welchen branch Sie auswählen sollen, finden Sie unten links unten in der Git Ansicht eine Übersicht aller branches und mit einem Doppelklick auf diese eine Liste aller commits.
       * Alternative Befehle:
          ```
          git fetch origin
          ```
          und
          ```
          git merge origin <branchName>
          ```
=== "Manuell"

    * Auch, wenn wir es nicht empfehlen, können Sie die Vorlage alternativ manuell updaten. Kopieren Sie dafür entweder Ihre Implementation in die neue Vorlage oder die Änderungen aus der neuen Vorlage in die alte Vorlage.

[Git]: https://git-scm.com/download
