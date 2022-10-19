# Installieren von DrRacket

=== "Windows"
     1. Laden Sie [hier] DrRacket herunter. Achten Sie darauf, dass Windows als Betriebssystem ausgewählt ist.
     2. Führen Sie den heruntergeladenen Installer aus und drücken Sie auf **"Next"**, bzw. **"Install"**, bis der Installationsprozess abgeschlossen ist und am Ende auf **"Finish"**.
     3. Nachdem Sie DrRacket geöffnet haben, gehen Sie auf oben auf **"Language"** -> **"Choose Language"** und wählen Sie unter **"Teaching Languages"** **"Advanced Student"** aus. Bestätigen Sie danach die Auswahl, indem Sie auf **"OK"** drücken.
     4. Nun können Sie Racket Programme ausführen, indem Sie rechts oben auf **"Run"** drücken.

=== "Linux"
    === "Manuell"
         1. Laden Sie [hier] DrRacket herunter. Achten Sie darauf, dass Linux als Betriebssystem ausgewählt ist.
           * Alternativ können Sie es auch mit dem folgenden Befehl ausführen
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
         4. Beantworten Sie die nun folgenden Fragen. Standardmäßig können Sie mit **"no"**, **"1"** und **"/usr/local"**
         5. Nachdem Sie DrRacket geöffnet haben, gehen Sie auf oben auf **"Language"** -> **"Choose Language"** und wählen Sie unter **"Teaching Languages"** **"Advanced Student"** aus. Bestätigen Sie danach die Auswahl, indem Sie auf **"OK"** drücken.
         6. Nun können Sie Racket Programme ausführen, indem Sie rechts oben auf **"Run"** drücken.

    === "Arch Based Linux"

         1. Installieren Sie Racket (Als Root).
            ```
            pacman -S racket --needed
            ```
         2. Prüfen Sie die Racket Installation.
            ```
            racket --version
            ```
         3. Wenn die Ausgabe in etwa so aussieht, ist die Installation erfolgreich.
            ```
            Welcome to Racket v8.6 [cs].
            ```
         4. Nachdem Sie DrRacket geöffnet haben, gehen Sie auf oben auf **"Language"** -> **"Choose Language"** und wählen Sie unter **"Teaching Languages"** **"Advanced Student"** aus. Bestätigen Sie danach die Auswahl, indem Sie auf **"OK"** drücken.
         5. Nun können Sie Racket Programme ausführen, indem Sie rechts oben auf **"Run"** drücken.

=== "Mac OS"
     1. Laden Sie [hier] DrRacket herunter. Achten Sie darauf, dass Mac OS als Betriebssystem ausgewählt ist.
     2. Öffnen Sie die heruntergeladenen .dmg Datei.
     3. Kopieren Sie die Racket Installation in den Applications Ordner.
     3. Nachdem Sie DrRacket geöffnet haben, gehen Sie auf oben auf **"Language"** -> **"Choose Language"** und wählen Sie unter **"Teaching Languages"** **"Advanced Student"** aus. Bestätigen Sie danach die Auswahl, indem Sie auf **"OK"** drücken.
     4. Nun können Sie Racket Programme ausführen, indem Sie rechts oben auf **"Run"** drücken.




[hier]: https://download.racket-lang.org/
