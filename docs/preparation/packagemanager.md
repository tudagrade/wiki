# Packet Manger

Ein Packet Manager ist ein Program, welches Ihnen dabei hilft Programme einfach zu installieren, aktualisieren und deinstallieren.
Wir empfehlen Ihnen für die Installation der benötigten Programme einen solchen Packet Manager zu verwenden.

!!! info "Hinweis"
    Nach der Installation eines Programmes müssen Sie u.U. Ihr Terminal schließen und wieder öffnen, damit die Änderungen übernommen werden.

=== "Windows"

    Für Windows empfehlen wir Ihnen [Scoop] zu verwenden.

    1. Öffnen Sie ein Powershell-Fenster.

        * Sie können ein Powershell-Fenster öffnen, indem Sie in der Suche (Win + S) **"Powershell"** eingeben.

    2. Führen Sie folgenden Befehl aus:

    ```powershell
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
    ```
    
    3. Geben Sie in Powershell **"A"** ein und drücken Sie **"Enter"** um die Änderung zu bestätigen.

    4. Führen Sie zum Schluss folgenden Befehl aus:
    ```powershell
    irm get.scoop.sh | iex
    ```
=== "MacOS"

    Für MacOS empfehlen wir Ihnen [Homebrew] zu verwenden.

    1. Öffnen Sie ein Terminal.

    2. Führen Sie folgenden Befehl aus:

    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

=== "Linux"

    Unter Linux können Sie den Packet Manager Ihrer Distribution verwenden.

[Scoop]: https://scoop.sh/
[Homebrew]: (https://brew.sh/)