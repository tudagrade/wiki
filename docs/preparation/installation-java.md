# Installieren von Java

!!! warning "Warnung"
    Zum Bearbeiten der Hausübungen benötigen Sie Java 17 oder höher. Beachten Sie, dass Ihre ggf. vorhandene Java 11 Installation dafür nicht ausreicht.

* Überprüfen Sie zunächst, ob Sie bereits Java 17 oder höher installiert haben. Siehe dafür [Überprüfung der Installation]. Falls Sie Java 17 oder höher installiert haben, können Sie mit dem nächsten Abschnitt [Installation von IntelliJ] fortfahren.

=== "Windows"

    === "Scoop"

        1. Falls noch nicht geschehen, installieren Sie [Scoop].
        2. Führen Sie folgende Befehle in einem [Terminal] aus, um Java zu installieren:
            ```
            scoop bucket add java
            ```
            und
            ```
            scoop install java/openjdk
            ```

    === "Manuell"

        1. Öffnen Sie die [Adoptium Website].
        2. Drücken Sie auf **"Latest LTS Release"**. Der Download sollte automatisch starten.
        3. Öffnen Sie den soeben heruntergeladenen Installer und drücken Sie auf **"weiter"**, bzw. **"installieren"**.
            * Wählen Sie im Abschnitt **"Benutzerdefiniertes Setup"** bei **"JAVA_HOME-Variable konfigurieren"** die Option **"Wird auf der lokalen Festplatte installiert"** aus, indem Sie auf das rote Kreuz daneben drücken.
        4. Nachdem die Installation abgeschlossen ist, drücken Sie **"Fertig stellen"**.
    
=== "macOS"
    === "Homebrew"
        1. Falls noch nicht geschehen, installieren Sie [Homebrew].
        2. Führen Sie in einem [Terminal] folgenden Befehl aus, um Java zu installieren.
           ```
           brew install java
           ```
        3. Am Ende der Installation stellt Homebrew einen Befehl bereit, um OpenJDK 17 mit dem Befehl `java` zu verbinden. Kopieren Sie diesen und führen Sie ihn aus. Der Befehl ähnelt dem folgenden, kann sich jedoch leicht unterscheiden:
           ```
           sudo ln -sfn /opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk
           ```

    === "Manuell"
         1. Öffnen Sie die [Adoptium Website].
         2. Drücken Sie auf **"Latest LTS Release"**. Der Download sollte automatisch starten.
         3. Öffnen Sie den soeben heruntergeladenen Installer und drücken Sie auf **"Fortfahren"**, bzw. **"Installieren"**. Sie können die Standardeinstellungen übernehmen und müssen nichts Weiteres im Installer auswählen.

=== "Linux"
    === "Debian/Ubuntu"

        1. Führen Sie folgende Befehle in einem [Terminal] aus, um Java zu installieren:
            ```
            sudo apt update
            ```
            und
            ```
            sudo apt install openjdk-17-jdk
            ```

    === "Fedora"

        1. Führen Sie folgenden Befehl in einem [Terminal] aus, um Java zu installieren:
            ```
            sudo dnf install java-17-openjdk-devel
            ```

    === "Arch Based Linux"

        1. Installieren Sie Java 17 (als Root).
            ```
            pacman -S openjdk17-src --needed
            ```
        2. Setzen Sie diese Java Version als Standard (als Root).
            ```
            archlinux-java set java-17-openjdk
            ```

## Installation Überprüfen

* Zum Überprüfen der Installation von Java können Sie folgenden Befehl in einem [Terminal] ausführen:
```
java --version
```

* Wenn die Ausgabe in etwa so aussieht, ist die Installation erfolgreich. Achten Sie insbesondere darauf, dass es Java 17 oder höher ist.
    ```
    openjdk 21 2023-09-19
    ```
    oder 
    ```
    openjdk 17.0.2 2023-08-24
    ```
## Windows - Umgebungsvariablen einstellen

* Falls bei der [Überprüfung der Installation] eine veraltete Java Version (<17) angezeigt wird, überprüfen Sie wie folgt, ob die Umgebungsvariablen korrekt gesetzt sind.:
    1. Geben Sie in die Windowssuche (Win + S) **"Systemumgebungsvariablen bearbeiten"** ein und öffnen Sie das Fenster.
    2. Drücken Sie rechts unten auf **"Umgebungsvariablen"**.
    3. Überprüfen Sie, ob in der unteren Liste eine Variable namens **"JAVA_HOME"** existiert und auf das Verzeichnis, in welchem Java installiert ist, zeigt.
        * Der Inhalt sollte in etwa wie folgt aussehen:
        ```
        C:\Users\<Username>\scoop\apps\openjdk\current (Wenn Sie Java mit Scoop installiert haben)
        ```
        oder
        ```
        C:\Program Files\Eclipse Adoptium\jdk-21.X.X.X-hotspot\ (Wenn Sie Java manuell installiert haben)
        ```
        * Falls die Variable nicht vorhanden ist oder auf eine falsche Version zeigt, können Sie dies mit den Knöpfen **"Neu..."** bzw. **"Bearbeiten..."** ändern.
    4. Wählen Sie die Variable **"Path"** aus und drücken Sie auf **"Bearbeiten..."**.
    5. In der nun angezeigten Liste sollte der Eintrag **"%JAVA_HOME%\bin"** enthalten sein. Falls nicht, fügen Sie diesen rechts oben mit dem Knopf **"Neu"** hinzu.
        * Weitere Java Installationen sollten nicht enthalten sein.
    6. Schließen Sie mit **"OK"** alle Fenster und öffnen Sie ein neues Terminal. Es sollte nun die korrekte Java Version angezeigt werden.


[Adoptium Website]: https://adoptium.net/de/
[Terminal]: https://wiki.tudalgo.org/preparation/installation-java/
[Überprüfung der Installation]: #installation-überprüfen
[Homebrew]: https://wiki.tudalgo.org/preparation/packagemanager/
[Scoop]: https://wiki.tudalgo.org/preparation/packagemanager/
[Installation von IntelliJ]: https://wiki.tudalgo.org/preparation/installation-intellij/
