# Importieren von Hausübungen in nicht-unterstützten IDEs

!!! warning "Achtung"
    Bis auf dieses Guide wird kein Support für nicht-unterstützte IDEs angeboten und die Verwendung solcher wird nicht empfohlen.
    Wenden Sie sich nicht an das Tutorium, wenn Sie Probleme mit der Verwendung von nicht-unterstützten IDEs haben.

=== "VS Code"
     * Empfohlene Extensions für Java-Entwicklung:
        * [Language Support for Java(TM) by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.java)
        * [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug)
        * [Java Test Runner](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-test)
        * [Gradle for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle)
        * [Gradle Language Support](https://marketplace.visualstudio.com/items?itemName=naco-siren.gradle-language)
        * [Java Dependency Viewer](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-dependency)
        * [IntelliCode](https://marketplace.visualstudio.com/items?itemName=visualstudioexptteam.vscodeintellicode)
        * [Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven)
     
     * Empfohlene Einstellungen
     ```json
     {
         "java.import.gradle.enabled": true,
         "java.import.gradle.wrapper.enabled": true,
         "java.import.maven.enabled": true,
         "java.import.maven.wrapper.enabled": true,
         "java.import.generatesMetadataFilesAtProjectRoot": true,
         "java.configuration.updateBuildConfiguration": "interactive",
         "java.completion.filteredTypes": [
             "java.awt.List",
             "com.sun.*",
             "sun.*",
             "jdk.*",
             "org.graalvm.*",
             "io.micrometer.shaded.*"
         ]
     }
     ```
     * Fix: Grader-Tests werden nicht erkannt
        * Da der Gradle-Support von VS Code noch nicht vollständig ist, müssen Sie für alle Tests außerhalb des `src/test/java`-Ordners manuell die `.classpath`-Datei anpassen. Dazu öffnen Sie die Datei und fügen folgenden Eintrag zu allen classpathentrys hinzu, die auf die Tests verweisen:
        ```xml
        <attribute name="test" value="true"/>
        ```
        Nun sollten alle Tests erkannt werden.
     * Gradle Tasks
        * Für das Ausführen, Debuggen und Abgeben verwenden Sie wie in IntelliJ die entsprechenden Tasks verwenden. Die Übersicht der Tasks finden Sie links im Gradle-Tab. (dieser ist nur sichtbar, wenn Sie ein Gradle-Projekt geöffnet haben)

=== "Eclipse"

     * Importieren
     
        * Sie können die Hausübungen entweder importieren, indem Sie sich die zip Datei von Moodle herunterladen, entpacken und dann über **"File" -> "Import..." -> "Gradle" -> "Existing Gradle Project"** auswählen, oder über **"File" -> "Import..." -> "Git" -> "Projects from Git" -> "Clone URl"** die Daten des Git-Repositories eingeben.
     
     * Gradle Tasks
    
        * Sie können sich die Übersicht über die Gradle Tasks entweder an der rechten Seite des Bildschirms über das Gradle Symbol, oder über **"Window" -> "Show View" -> "Other..." -> "Gradle" -> "Gradle Tasks" -> "Open"** anzeigen lassen.
        Die einzelnen Ordner können Sie über durch einen Doppelklick aufklappen.

=== "Nvim, Emacs"
     * Sie wissen, was Sie tun.

=== "Andere"
     * Wenn Sie einen anderen Editor/ein anderes IDE benutzen und denken ein Guide hier könnte helfen können Sie gerne einen Pull Request aufmachen und dieses ergänzen...
<!-- Vielleicht hilft ihnen [das hier weiter](https://exmatriculate.me). -->
