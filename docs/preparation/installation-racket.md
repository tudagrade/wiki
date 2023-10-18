# Installieren von DrRacket

=== "Windows"

    === "Scoop"

          1. Falls noch nicht geschehen, installieren Sie [Scoop].
          2. Führen Sie folgenden Befehl in einem [Terminal] aus, um Racket zu installieren:
              ```
              scoop install racket
              ```

    === "Manuell"

          1. Laden Sie [hier] DrRacket herunter. Achten Sie darauf, dass Windows als Betriebssystem ausgewählt ist.
          2. Führen Sie den heruntergeladenen Installer aus und drücken Sie auf **"Next"**, bzw. **"Install"**, bis der Installationsprozess abgeschlossen ist und am Ende auf **"Finish"**.

=== "macOS"

    === "Homebrew"

          1. Falls noch nicht geschehen, installieren Sie [Homebrew].
          2. Führen Sie in einem [Terminal] folgenden Befehl aus, um Racket zu installieren.
            ```
            brew install --cask racket
            ```
            
    === "Manuell"
         1. Laden Sie [hier] DrRacket herunter. Achten Sie darauf, dass Mac OS als Betriebssystem ausgewählt ist.
         2. Öffnen Sie die heruntergeladenen .dmg Datei.
         3. Kopieren Sie die Racket Installation in den Applications Ordner.

=== "Linux"
    === "Manuell"
         1. Laden Sie [hier] DrRacket herunter. Achten Sie darauf, dass Linux als Betriebssystem ausgewählt ist.
           * Alternativ können Sie es auch mit dem folgenden Befehl herunterladen:
           ```
           wget https://mirror.racket-lang.org/installers/8.6/racket-8.6-x86_64-linux.sh
           ```
         2. Stellen Sie mit
         ```
         chmod +x racket-8.6-x86_64-linux.sh
         ```
         sicher, dass der Installer ausführbar ist und führen Sie diesen dann mit
         ```
         sudo ./racket-8.6-x86_64-linux.sh
         ```
         aus.
         4. Beantworten Sie die Fragen, die Ihnen im Terminal gestellt werden. Standardmäßig können diese mit **"no"**, **"1"** und **"/usr/local"** beantworten. 

    === "Arch Based Linux"

         1. Installieren Sie Racket (als Root).
            ```
            pacman -S racket --needed
            ```

## DrRacket einrichten

* Öffnen Sie nun DrRacket und gehen Sie auf oben auf **"Language"** -> **"Choose Language"** und wählen Sie unter **"Teaching Languages"** **"Advanced Student"** aus. Bestätigen Sie danach die Auswahl, indem Sie auf **"OK"** drücken.
* Nun können Sie Racket Programme ausführen, indem Sie rechts oben auf **"Run"** drücken.

[hier]: https://download.racket-lang.org/
[Terminal]: https://wiki.tudalgo.org/preparation/installation-java/
[Homebrew]: https://wiki.tudalgo.org/preparation/packagemanager/
[Scoop]: https://wiki.tudalgo.org/preparation/packagemanager/
