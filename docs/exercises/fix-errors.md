# Beheben von häufigen Fehlern

* Stellen Sie zunächst sicher, dass Sie den richtigen Ordner importiert haben. Der oberste Ordner sollte nach der Hausübung benannt sein (z. B. **"FOP-2223-HXX-Student-master"**) und direkt die build.gradle.kts Datei enthalten sein. Wählen Sie beim Importieren **nicht** einen identisch benannten Oberordner aus.
* Beachten Sie, dass es mit Gradle zu Problemen kommen kann, wenn das Projekt auf einer externen Festplatte gespeichert wurde.
* Anbei finden Sie ein paar mögliche Fehler, welche Ihnen in der Konsole, die sich beim Ausführen der des Programmes oder einer Gradle Task automatisch öffnet, angezeigt werden. Damit Ihnen die vollständigen Fehlermeldungen angezeigt werden, wählen Sie links von der Konsole die zweite Option von oben aus.

## Häufige Fehlermeldungen

   1. !!! error "Fehler"

          [...] finished with non-zero exit value 1

      * Diese Meldung sagt ihnen nur, dass ein Fehler aufgetreten ist. Wenn der eigentliche Fehler nicht angezeigt wird, drücken Sie links neben der Konsolenausgabe auf die zweite Option von oben. Diese sollte **":run"** oder **":<Mainclass\>:main()"** heißen.


   2. !!! error "Fehler"
          A problem occurred configuring root project 'FOP-2223-H00-Student'.
          Could not resolve all files for configuration ':classpath'.
          Could not resolve org.tudalgo:algomate:0.1.0-SNAPSHOT.

          oder

          Execution failed for task ':compileJava'.
          error: invalid source release: 17

          oder

          UnsupportedClassVersionError

          oder

          \[...\] has been compiled by a more recent version of the Java Runtime

      * Es wird eine falsche Java Version benutzt. Siehe [Korrekte Java Version in IntelliJ Einstellen].


   3. !!! error "Fehler"
          Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.

          oder

          org.junit.platform.launcher.core.EngineDiscoveryOrchestrator lambda$logTestDescriptorExclusionReasons$7
            INFO: 0 containers and 1 tests were Method or class mismatch

      * Sie können diese Meldung ignorieren.


   4. !!! error "Fehler"
          Execution failed for task ':mainBuildSubmission'.
          There were some errors preparing your submission. The following required properties were not set:
          studentId
          firstName
          lastName

      * Sie haben vergessen Ihre persönlichen Daten in der build.gradle.kts Datei hinzuzufügen. Siehe [Anleitung zum Exportieren].


   5. !!! error "Fehler"
          execution failed for task ':test'.
          There were failing tests.

      * Ihre selbstgeschriebenen Tests laufen nicht erfolgreich durch. Um dies zu beheben, fixen Sie entweder den Fehler, der in Ihren Tests auftritt, oder ändern Sie in der build.gradle.kts Datei direkt unter Ihren persönlichen Daten requireTests von true auf false:
      ```
      requireTests = false
      ```

   6. !!! error "Fehler"
          execution failed for task ':graderPublicRun'.
          There were failing tests.

      * Die von uns zur Verfügung gestellten public-Tests laufen nicht erfolgreich durch. Um dies zu beheben, fixen Sie entweder den Fehler, den die Tests aufzeigen, oder ändern Sie in der build.gradle.kts Datei direkt unter Ihren persönlichen Daten requirePublicTests von true auf false:
      ```
      requireGraderPublic = false
      ```

   7. !!! error "Fehler"
          Execution failed for task ':compileJava'.
          Compilation failed; see the compiler error output for details.

      * Es befinden sich vermutlich noch Syntaxfehler in Ihren Code, welche Sie vor dem Abgeben beheben müssen. Sie finden unten links am Rand im Reiter **"Problems"** eine Auflistung aller Syntaxfehler.


   8. !!! error "Fehler"
          Note: \[...\] uses unsafe or unchecked operations.

      * Dies ist nur eine Warnung und verhindert nicht die Abgabe der Hausübung. Sie sollten allerdings überprüfen, ob der entsprechende Abschnitt funktioniert.


   9. !!! error  "Fehler"
          failed to delete some children.

      * Dieser Fehler entsteht meistens dadurch, dass der Zugriff auf bestimmte Dateien durch andere Prozesse, wie z. B. den Debugger, blockiert wird. Ein Neustart von IntelliJ oder Ihrem Rechner sollte das Problem beheben.

   10. !!! error "Fehler"
           Java.lang.OutOfMemoryError: java heap space

      * Dieser Fehler kann manchmal beim Ausführen der Public Tests auftretten. Versuchen Sie [Java mehr Speicher zuzuweisen].

## Korrekte Java Version in IntelliJ einstellen

1. Überprüfen Sie zunächst in einem Terminal mit **"java --version"**, ob Java 17 benutzt wird (s. [Anleitung zum Installieren von Java])
2. Überprüfen Sie in IntelliJ, ob unter **"File" -> "Project Structure..." -> "Project" -> "SDK"** Java 17 als Version angegeben ist.
    * Falls dies nicht der Fall ist, wählen Sie Java 17 aus und drücken Sie auf **"Apply"**.
3. Gehen Sie ebenfalls sicher, dass unter **"File" -> "Settings" -> "Build, Execution, Deployment" -> "Build Tools" -> "Gradle" -> "Gradle JVM"** als Option **"Project SDK"** ausgewählt ist.

## Java mehr Speicher zuweisen

1. Gehen Sie in Ihrem User Ordner in der Ordner **".gradle"**
    * Unter Windows finden Sie den Ordner unter **"C:\Users\<UserName\>\\.gradle"** und auf Linux und Mac unter **"~/.gradle"**
2. Falls nicht vorhanden, erstellen Sie die Datei **"gradle.properties"**.
3. Fügen Sie in dieser Datei eine Zeile mit folgendem Eintrag hinzu:
    ```
    org.gradle.jvmargs=-Xmx4096M
    ```
    * Sie können auch versuchen die Zahl am Ende zu erhöhen, wenn der Fehler weiterhin auftritt.

!!! info "Information"
    Wenn Sie Ihr Problem nicht selber beheben konnten, können Sie entweder auf unserem Discord Server im Channel **"\#technical-issues"** oder im Moodle Forum für technische Fragen nachfragen. Fügen Sie bei beiden am besten einen Ausschnitt der Konsolenausgabe mit dem Fehler als Screenshot oder Text an.

## Hilfreich Fragen stellen

* Achten Sie darauf, dass Sie beim Fragen stellen bereits alle notwendigen Information mit angeben, damit wir Ihnen helfen können. Dazu gehört unter anderen:
    * Den größeren Kontext bei dem das Problem aufgetaucht ist
    * Wenn vorhanden die ausgegebene Fehlermeldung
    * Wo genau der Fehler aufgetretten ist
    * Was Sie bisher versucht haben um das Problem zu beheben
* Oftmals hilft es auch, bevor man seine Frage stellt, selber im Internet nach dem Problem zu suchen oder zu schauen, ob im Forum, bzw. auf Discord, die selbe Frage bereits beantwortet wurde.

[Korrekte Java Version in IntelliJ Einstellen]: https://wiki.tudalgo.org/exercises/fix-errors/#korrekte-java-version-in-intellij-einstellen
[Anleitung zum Installieren von Java]: https://wiki.tudalgo.org/preparation/installation-java/
[Anleitung zum Exportieren]: https://wiki.tudalgo.org/exercises/export-upload/#exportieren
[Java mehr Speicher zuzuweisen]: https://wiki.tudalgo.org/exercises/fix-errors/#java-mehr-speicher-zuweisen