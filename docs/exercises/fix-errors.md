# Beheben von häufigen Fehlern

* Stellen Sie zunächst sicher, dass Sie den richtigen Ordner importiert haben. Der oberste Ordner sollte nach der Hausübung benannt sein (z. B. **"FOP-2223-HXX-Student-master"**) und direkt die build.gradle.kts Datei enthalten sein. Wählen Sie beim Importieren **nicht** einen identisch benannten Oberordner aus.
* Beachten Sie, dass es mit Gradle zu Problemen kommen kann, wenn das Projekt auf einer externen Festplatte gespeichert wurde.
* Anbei finden Sie ein paar mögliche Fehler, welche Ihnen in der Konsole, die sich beim Ausführen der des Programmes oder einer Gradle Task automatisch öffnet, angezeigt werden. Damit Ihnen die vollständigen Fehlermeldungen angezeigt werden, wählen Sie links von der Konsole die zweite Option von oben aus.

## Häufige Fehlermeldungen

   1. !!! error "Fehler"

          [...] finished with non-zero exit value 1

      * Diese Meldung sagt ihnen nur, dass ein Fehler aufgetreten ist. Wenn der eigentliche Fehler nicht angezeigt wird, drücken Sie links neben der Konsolenausgabe auf die zweite Option von oben. Diese sollte **":run"** oder **":<Mainclass\>:main()"**


   2. !!! error "Fehler"
          Execution failed for task ':compileJava'.
          error: invalid source release: 17

          oder

          UnsupportedClassVersionError

          oder

          \[...\] has been compiled by a more recent version of the Java Runtime

      * Es wird eine falsche Java Version benutzt. Überprüfen Sie in einem Terminal mit **"java --version"**, ob Java 17 benutzt wird (s. Anleitung zum Installieren von Java) und überprüfen Sie in IntelliJ, ob unter **"File" -> "Project Structure..." -> "Project" -> "SDK"** sowie unter **"File" -> "Settings" -> "Build, Execution, Deployment" -> "Build Tools" -> "Gradle" -> "Gradle JVM"** Java 17 als Version angegeben ist.


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

      * Sie haben vergessen Ihre persönlichen Daten in der build.gradle.kts Datei hinzuzufügen. Siehe Schritt 1.


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

!!! info "Information"
    Wenn Sie Ihr Problem nicht selber beheben konnten, können Sie entweder auf unserem Discord Server im Channel **"\#technical-issues"** oder im Moodle Forum für technische Fragen nachfragen. Fügen Sie bei beiden am besten einen Ausschnitt der Konsolenausgabe mit dem Fehler als Screenshot oder Text an.