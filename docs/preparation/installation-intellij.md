# Installieren von IntelliJ

!!! warning "Warnung"
    * Sie können entweder die Community Edition oder die Ultimate Edition von IntelliJ zum Bearbeiten der Hausübungen verwenden.
    Die Ultimate Edition bittet Ihnen einige weiter Features und Sie erhalten sie als Student kostenlos. Dafür müssen Sie sich [hier] mit Ihrer studentischen E-Mail registrieren.
    Weitere Information zur studentischen E-Mail finden Sie auf der Seite des [HRZ].

=== "Windows"
    === "Scoop"

        1. Falls noch nicht geschehen, installieren Sie [Scoop].
        2. Führen Sie folgende Befehle in einem [Terminal] aus, um die Jetbrains Toolbox zu installieren:
            ```
            scoop bucket add extras
            scoop install intellij-idea-community
            ```
        3. Öffnen Sie die Toolbox und installieren Sie die Community oder Ultimate Edition von IntelliJ.

    === "Manuell"
        1. Laden Sie sich die [Toolbox] von JetBrains herunter.
        2. Führen Sie den heruntergeladenen Installer aus und drücken Sie auf **"installieren"**.
        3. Wählen Sie **"JetBrains Toolbox ausführen"** aus und drücken Sie zum Schluss auf **"Fertigstellen"**, um den Installationsprozess abzuschließen.
        3. Es öffnet sich automatisch die Toolbox. Drücken Sie nun auf **"Continue"**, akzeptieren Sie die Nutzungsbedingungen und drücken Sie zum Schluss auf **"Get started"**.
           * Falls die Toolbox sich nicht automatisch öffnet, können Sie sie auch manuell über die Windowssuche (Win + S) öffnen.
        4. Installieren Sie nun die Community oder Ultimate Edition von IntelliJ.

=== "Mac OS"

    === "Homebrew"

        1. Falls noch nicht geschehen, installieren Sie [Homebrew].
        2. Führen Sie in einem [Terminal] folgenden Befehl aus, um IntelliJ zu installieren.
            ```
            brew install --cask jetbrains-toolbox
            ```
        3. Öffnen Sie die Toolbox und installieren Sie die Community oder Ultimate Edition von IntelliJ.

    === "Manuell"

     1. Laden Sie sich die [Toolbox] von JetBrains herunter.
     2. Öffnen Sie die heruntergeladene .dmg Datei und verschieben Sie die Toolbox per Drag&Drop in den Applications Ordner oder auf den Desktop. Nun können Sie die .dmg Datei wieder schließen und auswerfen.
     3. Starten Sie nun die Toolbox. Drücken Sie nun auf **"Continue"**, akzeptieren Sie die Nutzungsbedingungen und drücken Sie zum Schluss auf **"Get started"**.
     4. Installieren Sie nun die Community oder Ultimate Edition von IntelliJ.

=== "Linux"
    === "Alles was nicht Arch ist"
        1. Laden Sie sich die Jetbrains Toolbox von der [Toolbox] Seite herunter.
        2. Öffnen Sie die heruntergeladene .tar.gz Datei und extrahieren Sie den Inhalt in einen Ordner Ihrer Wahl.
        3. Öffnen Sie nun den Ordner und starten Sie die Toolbox mit einem Doppelklick auf die Datei **"jetbrains-toolbox"**.
        4. Installieren Sie nun die Community oder Ultimate Edition von IntelliJ über die Toolbox.

    === "Arch Based Linux"
        === "AUR-Helper"

            Falls Sie einen [AUR-Helper] installiert haben, können Sie das Paket [intellij-idea-ce], bzw. [intellij-idea-ultimate-edition], installieren.

            !!! info "Hinweis"
                Bei größeren Updates von IntelliJ kann es vorkommen, dass ihre Einstellungen beim AUR Paket nicht übernommen werden. Wir empfehlen daher eine Installation über die Toolbox.

        === "Manuell"

            1. Installieren Sie die Abhängigkeiten.
                ```
                pacman -S base-devel git --needed
                ```
                * Für die Community Edition klonen Sie:
                    ```
                    git clone https://aur.archlinux.org/intellij-idea-ce.git
                    ```
                * Für die Ultimate Edition klonen Sie:
                    ```
                    git clone https://aur.archlinux.org/intellij-idea-ultimate-edition.git
                    ```
            2. Wechseln Sie in das jeweilige Verzeichnis und installieren Sie das Paket.
                ```
                cd intellij-idea-* && makepgk -ifs
                ```

* Nun können Sie die Hausübung mit IntelliJ bearbeiten. Befolgen Sie dafür die Schritte der Anleitungen im Abschnitt [Herunterladen und exportieren].
    * Wenn Sie IntelliJ das erste Mal starten, werden Sie möglicherweise noch gefragt, ob Sie Einstellungen importieren möchten. Dies benötigen Sie nicht.
    * Wenn Sie die Ultimate Edition das erste Mal starten, werden Sie aufgefordert sich mit Ihrem studentischen Account anzumelden.

[hier]: https://www.jetbrains.com/de-de/community/education/#students
[HRZ]: https://www.hrz.tu-darmstadt.de/services/it_services/linux_mail/index.de.jsp
[Toolbox]: https://www.jetbrains.com/de-de/toolbox-app/
[AUR-Helper]: https://wiki.archlinux.org/title/AUR_helper
[intellij-idea-ce]: https://aur.archlinux.org/packages/intellij-idea-ce
[intellij-idea-ultimate-edition]: https://aur.archlinux.org/packages/intellij-idea-ultimate-edition
[Herunterladen und Exportieren]: https://wiki.tudalgo.org/exercises/download-import/
[Terminal]: https://wiki.tudalgo.org/preparation/installation-java/
[Homebrew]: https://wiki.tudalgo.org/preparation/packagemanager/
[Scoop]: https://wiki.tudalgo.org/preparation/packagemanager/
