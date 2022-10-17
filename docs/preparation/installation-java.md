# Installieren von Java

!!! warning "Warnung"
    Zum Bearbeiten der Hausübungen benötigen Sie Java 17. Beachten Sie, dass Ihre ggf. vorhandene Java 11 Installation dafür nicht ausreicht.

=== "Windows"

     1. Öffnen Sie die [Adoptium Website].
     2. Drücken Sie auf **"Latest LTS Release"**. Der Download sollte automatisch starten.
     3. Öffnen Sie den soeben heruntergeladenen Installer und drücken Sie auf **"weiter"**, bzw. **"installieren"**.
         * Wählen Sie im Abschnitt **"Benutzerdefiniertes Setup"** bei **"JAVA_HOME-Variable konfigurieren"** die Option **"Wird auf der lokalen Festplatte installiert"** aus,      indem Sie auf das rote Kreuz daneben drücken.
     4. Nachdem die Installation abgeschlossen ist, drücken Sie **"Fertig stellen"**.
     5. Sie können überprüfen, ob Java korrekt installiert wurde, indem Sie im Terminal folgenden Befehl eingeben
         ```
         java --version
         ```
        * Sie können das Terminal öffnen, indem Sie in der Windowssuche (Win + S) **"cmd"** eingeben.
        * Wenn die Ausgabe in etwa so aussieht, ist die Installation erfolgreich. Achten Sie insbesondere darauf, dass es Java 17 ist.
        ```
        openjdk 17.0.2 2022-04-19
        ```
       * Falls Ihnen bei der Ausgabe eine falsche Java Version oder ein Fehler angezeigt wird, überprüfen Sie wie folgt, ob Ihre Umgebungsvariablen korrekt gesetzt sind.
         1. Geben Sie in die Windowssuche (Win + S) **"Systemumgebungsvariablen bearbeiten"** ein und öffnen Sie das Fenster.
         2. Drücken Sie rechts unten auf **"Umgebungsvariablen"**.
         3. Überprüfen Sie, ob in der unteren Liste eine Variable namens **"JAVA_HOME"** existiert und auf das Verzeichnis, in welchem Java 17 installiert ist, zeigt.
             * Der Inhalt sollte in etwa wie folgt aussehen:
             ```
             C:\Program Files\Eclipse Adoptium\jdk-17.0.2.8-hotspot\
             ```
             * Falls die Variable nicht vorhanden ist oder auf eine falsche Version zeigt, können Sie dies mit den Knöpfen **"Neu..."** bzw. **"Bearbeiten..."** ändern.
         4. Wählen Sie die Variable **"Path"** aus und drücken Sie auf **"Bearbeiten..."**.
         5. In der nun angezeigten Liste sollte der Eintrag **"%JAVA_HOME%\bin"** enthalten sein. Falls nicht, fügen Sie diesen rechts oben mit dem Knopf **"Neu"** hinzu.
             * Weitere Java Installationen sollten nicht enthalten sein.
         6. Schließen Sie mit **"OK"** alle Fenster und öffnen Sie ein neues Terminal. Es sollte nun die korrekte Java Version angezeigt werden.

=== "Arch Based Linux"

     1. Installieren Sie Java 17 (Als Root).
         ```
         pacman -S openjdk17-src --needed
         ```
     2. Setzen Sie diese Java Version als Standard (Als Root).
         ```
         archlinux-java set java-17-openjdk
         ```
     3. Prüfen Sie die Java Installation.
         ```
         java --version
         ```
     4. Wenn die Ausgabe in etwa so aussieht, ist die Installation erfolgreich. Achten Sie insbesondere darauf, dass es Java 17 ist.
         ```
         openjdk 17.0.3 2022-04-19
         ```

=== "Mac OS"

     1. Öffnen Sie die <ins> <a href="https://adoptium.net/de/" target="_blank"><span style="color:#349eeb">Adoptium Website</span></a></ins>.
     2. Drücken Sie auf **"Latest LTS Release"**. Der Download sollte automatisch starten.
     3. Öffnen Sie den soeben heruntergeladenen Installer und drücken Sie auf **"Fortfahren"**, bzw. **"Installieren"**. Sie können die Standardeinstellungen übernehmen und müssen      nichts weiteres im Installer auswählen.
     4. Nachdem die Installation abgeschlossen ist, drücken Sie **"Schließen"**.
         * Das Installationsprogramm benötigen Sie nun nicht mehr.
     5. Sie können überprüfen, ob Java korrekt installiert wurde, indem Sie im Terminal folgenden Befehl eingeben
         ```
         java --version
         ```
         * Sie können das Terminal öffnen, indem Sie in der Suche (Cmd + Leertaste) **"Terminal"** eingeben.
        * Wenn die Ausgabe in etwa so aussieht, ist die Installation erfolgreich. Achten Sie insbesondere darauf, dass es Java 17 ist.
        ```
        openjdk 17.0.2 2022-04-19
        ```

[Adoptium Website]: https://adoptium.net/de/