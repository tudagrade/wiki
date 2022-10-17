# Installieren von IntelliJ

!!! warning "Warnung"
     Beachten Sie, dass Eclipse von uns nicht mehr unterstützt wird und wir Ihnen nicht garantieren können, dass das Bearbeiten der Hausübungen mit Eclipse funktioniert.
* Sie können entweder die Community Edition oder die Ultimate Edition von IntelliJ zum Bearbeiten der Hausübungen verwenden.
    Die Ultimate Edition bittet Ihnen einige weiter Features und Sie erhalten sie als Student kostenlos. Dafür müssen Sie sich [hier] mit Ihrer studentischen E-Mail registrieren.
    Weitere Information zur studentischen E-Mail finden Sie auf der Seite des [HRZ].

=== "Windows"

     1. Laden Sie sich die [Toolbox] von JetBrains herunter.
     2. Führen Sie den heruntergeladenen Installer aus und drücken Sie auf **"installieren"**.
     3. Wählen Sie **"JetBrains Toolbox ausführen"** aus und drücken Sie zum Schluss auf **"Fertigstellen"**, um den Installationsprozess abzuschließen.
     3. Es öffnet sich automatisch die Toolbox. Drücken Sie nun auf **"Continue"**, akzeptieren Sie die Nutzungsbedingungen und drücken Sie zum Schluss auf **"Get started"**.
        * Falls die Toolbox sich nicht automatisch öffnet, können Sie sie auch manuell über die Windowssuche (Win + S) öffnen.
     4. Installieren sie nun die Community oder Ultimate Edition von IntelliJ.
     5. Nun können Sie die Hausübung mit IntelliJ bearbeiten. Befolgen Sie dafür die Schritte der Anleitungen im Abschnitt **"Hausübung"**.
         * Wenn Sie IntelliJ das erste Mal starten werden Sie möglicherweise noch gefragt, ob Sie Einstellungen importieren möchten. Dies benötigen Sie nicht.
         * Starten Sie die Ultimate Edition, werden Sie beim ersten mal aufgefordert sich mit Ihrem studentischen Account anzumelden.

=== "Arch Based Linux"

    === "AUR-Helper"

        Falls Sie einen [AUR-Helper] installiert haben, können Sie das Paket [intellij-idea-ce], bzw. [intellij-idea-ultimate-edition], installieren.

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
        3. Nun können Sie die Hausübung mit IntelliJ bearbeiten. Befolgen Sie dafür die Schritte der Anleitungen im Abschnitt **"Hausübung"**.
            * Wenn Sie IntelliJ das erste Mal starten werden Sie möglicherweise noch gefragt, ob Sie Einstellungen importieren möchten. Dies benötigen Sie nicht.
            * Starten Sie die Ultimate Edition, werden Sie beim ersten mal aufgefordert sich mit Ihrem studentischen Account anzumelden.

=== "Mac OS"

     1. Laden Sie sich die [Toolbox] von JetBrains herunter.
     2. Öffnen Sie die heruntergeladene .dmg Datei und verschieben Sie die Toolbox per Drag&Drop in den Applications Ordner oder auf den Desktop. Nun können Sie die .dmg Datei wieder schließen und auswerfen.
     3. Starten Sie nun die Toolbox. Drücken Sie nun auf **"Continue"**, akzeptieren Sie die Nutzungsbedingungen und drücken Sie zum Schluss auf **"Get started"**.
     4. Installieren sie nun die Community oder Ultimate Edition von IntelliJ.
     5. Nun können Sie die Hausübung mit IntelliJ bearbeiten. Befolgen Sie dafür die Schritte der Anleitungen im Abschnitt **"Hausübung"**.
         * Wenn Sie IntelliJ das erste Mal starten werden Sie möglicherweise noch gefragt, ob Sie Einstellungen importieren möchten. Dies benötigen Sie nicht.
         * Starten Sie die Ultimate Edition, werden Sie beim ersten mal aufgefordert sich mit Ihrem studentischen Account anzumelden.

[hier]: https://www.jetbrains.com/de-de/community/education/#students
[HRZ]: https://www.hrz.tu-darmstadt.de/services/it_services/linux_mail/index.de.jsp
[Toolbox]: https://www.jetbrains.com/de-de/toolbox-app/
[AUR-Helper]: https://wiki.archlinux.org/title/AUR_helper
[intellij-idea-ce]: https://aur.archlinux.org/packages/intellij-idea-ce
[intellij-idea-ultimate-edition]: "https://aur.archlinux.org/packages/intellij-idea-ultimate-edition
