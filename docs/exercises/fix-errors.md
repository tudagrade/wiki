# Beheben von häufigen Fehlern

=== "Public Tests"
    ### Verstehen der Resultate

    Wenn Sie für eines der in den von uns bereitgestellten Public Tests gegebenen Kriterien nicht die höchstmögliche Punktzahl erreichen,
    ist Ihre Lösung wahrscheinlich nicht vollständig korrekt.

    Keine Sorge!
    Glücklicherweise sind die Resultate unserer Public Tests so aufgebaut,
    dass Sie Ihre Fehler selber verstehen können.
    In Ihrem Resultat finden Sie zu jedem in Ihrer Lösung nicht-erfüllten Kriterium eine Beschreibung sowie einen für Ihre Lösung individuell erstellten Kommentar.
    Beachten Sie die folgenden Hinweise zum Verstehen der Resultate.

    ##### Beschreibung

    Die Beschreibung eines Kriteriums finden Sie in der Spalte *Kriterium*.

    Um einen Fehler beheben zu können,
    müssen Sie die Bedeutung des jeweilige Kriterium verstanden haben.

    !!! info ""
        Ein Kriterium kann auch dann nicht erfüllt sein,
        wenn Ihre Implementation einen Fehler enthält,
        der das Überprüfen Ihrer Lösung verhindert!
        Sie werden im Kommentar auf solche Fehler hingewiesen.

        Informationen zu solchen Fehlern finden Sie aut der Abschnitt [Typische Programmierfehler]

    ##### Kommentar

    Der Kommentar eines Kriteriums startet mit einer kurzen Fehlermeldung darüber,
    wieso das jeweilige Kriterium nicht erfüllt wurde.

    !!! warning ""
        Sie müssen diese Fehlermeldung *unbedingt* verstanden haben,
        bevor Sie diesen Fehler sinnvoll beheben können!


    Nach dieser Fehlerbeschreibung folgen in der Regel Informationen darüber,
    mit welchen Eingabedaten Ihr Programm getestet wurde.
    Diese Informationen können bereits in der Fehlermeldung enthalten sein.

    Versuchen Sie,
    Ihr Programm mit den gegebenen Eingabedaten selber auszuführen und das Verhalten des Programms zu beobachten.
    Hierbei kann es nützlich sein,
    [Debugging] anzuwenden.


    !!! warning "Sind die Public Tests fehlerhaft?"
        Alle von uns bereitgestellten Public Tests wurden selbstverständlich getestet.

        In wenigen Fällen unterstützt ein Public Test nicht alle gängigen mit bis zur Bearbeitung vorgestellten Inhalten aus der Vorlesung umgesetzten Implementationen.
        Solche Probleme könnten mit neuen Versionen der Vorlage behoben sein.
        Beachten Sie die Seite [Aktualisieren der Vorlage].




=== "Typische Programmierfehler"

    ### NullPointerException

    Dieser Fehler tritt immer dann auf, wenn man auf einer Variable eine Methode aufruft, oder auf ein Attribut zugreift, die Variable aber null ist, also ihr kein Wert zugewiesen wurde. Anbei finden Sie ein paar Beispiele wie dieser Fehler entstehen kann:

    ```` java linenums="1"
    public class MyRobot {
        // robby wird mit null initialisiert, da keine explizite Zuweisung stattfindet
        Robot robby;
        public void nullPointer1() {
            Robot robot = null;
            // Variable robot ist null
            // beim Aufruf von move wird eine eine NullPointerException geworfen
            robot.move();
        }
        public void nullPointer2() {
            // Attribut robby is null
            // beim Aufruf von move wird eine NullPointerException geworfen
            robby.move();
        }
        public void nullPointer3() {
            // neue lokale Variable wird erzeugt anstatt Objektattribut zuzuweisen
            // nullPointer2() würde nach Aufruf von nullPointer3 weiterhin NullPointerException werfen
            Robot robby = new Robot(0,0);
        }
    }
    ````

    Bei allen drei Aufrufen der move Methode ist die Variable, bzw. das Attribut, auf dem die Methode aufgerufen wird null, wodurch effektiv dort steht null.move(). Da null keinem korrekt initialisiertem Objekt entspricht wirft dies eine NullPointerException. Der geworfene Fehler sieht dabei in etwa wie folgt aus:

    ````
    Exception in thread "main" java.lang.NullPointerException: Cannot invoke "example.Robot.move()" because "robot" is null
    at example.MyRobot.nullPointer1(MyRobot.java:6)
    at example.Main.main(Main.java:18)
    ````
    ### Endlose Rekursion bei überschreibenden Methoden

    Beim Überschreiben von Methoden weist man typischerweise einer Methode eine neue Funktionalität zu. Will man in einer abgeleiteten Klasse die Implementation der Methode aus der Basisklasse nutzen, kann man diese mit "super." und dem Methodennamen aufrufen. Wenn man z.B. beim Überschreiben die ursprüngliche Funktionalität nicht komplett abändern, sondern nutzen und erweitern möchte, bietet es sich an, in der überschreibenden Methode die Implementation der Methode aus der Basisklasse mit "super." zu verwenden.

    Dabei passiert es häufig, dass "super." beim Methodenaufruf innerhalb der überschreibenden Methode vergessen wird. Wird die überschriebene Methode nun mit einem Objekt aufgerufen, ruft sie sich selbst erneut auf (statt die Methode der Basisklasse). In diesem Methodenaufruf ruft die Methode sich dann nochmals auf, diese dann auch wieder und so weiter.

    Hier ein Beispiel:

    ```` java linenums="1"
    public class A {
        public int doCalculation(int z) {
            return z*5;
        }
    }
    ````

    ```` java linenums="1"
    public class B1 extends A{
        @Override
        public int doCalculation(int z) {
            int tmp = doCalculation(z); //führt zu Endlosrekursion
            return tmp+1;
        }
    }
    ````

    ```` java linenums="1"
    public class B2 extends A{
        @Override
        public int doCalculation(int z) {
            int tmp = super.doCalculation(z); //berechnet z*5
            return tmp+1; //liefert z*5+1 zurück
        }
    }
    ````
    Wie erkennt man solch einen Fehler? Endlose Rekursion erkennt man gut im Stacktrace: bei jedem Methodenaufruf wird ein neuer Frame auf den Stack gelegt, bis der Stack  vollläuft und ein StackOverflowError geworfen wird. Falls also die letzen Methodenaufrufe auf dem Stack alle identisch sind und ein StackOverflowError angezeigt wird, hat man vermutlich eine endlose Rekursion im Code, d.h. die Methode ruft sich immer wieder selber auf.
    Der obigen Code erzeuget dabei folgende Fehlermeldung:
    ````
    Exception in thread "main" java.lang.StackOverflowError
	at B1.doCalculation(B1.java:4)
	at B1.doCalculation(B1.java:4)
	at B1.doCalculation(B1.java:4)
	at B1.doCalculation(B1.java:4)
	at B1.doCalculation(B1.java:4)
    ...
    ````
    Falls man eigentlich die Methode der Basisklasse aufrufen wollte, kann man einfach "super." einfügen um den Fehler zu lösen.

    ### Methoden eines Interfaces wurde nicht implementiert

    In Interfaces können unter anderem Methoden deklariert werden, welche erst in den implementierenden Klassen implementiert werden. Dafür gibt man bei der Erstellung der implementierenden Klasse mit "implements" an, welche Interfaces implementiert werden sollen.

    Falls noch nicht alle Methoden implementiert wurden, kommt es zu einer Fehlermeldung beim Kompilieren:

    ```` java linenums="1"
    public interface I {
        double foo(int x);
        void bar();
    }
    ````
    ```` java linenums="1"
    public class C implements I{
        //fehlende Implementation der beiden Methoden
    }
    ````

    Java Fehlermedung:
    ````
    java: C is not abstract and does not override abstract method bar() in I
    ````
    Wie kann man diesen Fehler lösen?

    Möchte man nicht alle zu implementierenden Methoden in C implementieren, kann man C als abstract definieren. Dann können keine Objekte mit dem dynamischen Typen C erzeugt werden.
    Wenn man hingegen alle Methoden von I in C implementiert (hierbei auf korrekte Signatur achten!), muss C keine abstrakte Klasse sein, man kann also ganz normal Instanzen erstellen und nutzen.

    ### ArrayIndexOutOfBoundsException

    Führt man ein Programm mit den folgenden zwei Zeilen aus:
    ```` java linenums="1"
    int[] intArray = new int[5];
    for (int i = 0; i <= intArray.length; i++) { //von 0 bis inclusive 5
        System.out.println(intArray[i]);
    }
    ````
    erhält man solch eine Fehlermeldung:
    ````
    Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5
	at Main.main(Main.java:9)
    ````
    Hier ist, wie in der Fehlermeldung beschrieben, das Problem, dass versucht wird auf einen Arrayindex zuzugreifen, welcher außerhalb der Bounds des Arrays liegt.

    Aber was ist eigentlich der Bound eines Arrays und wie hängt dieser mit der Länge zusammen?
    Die Länge eines Arrays wird bei der Erstellung des Arrays in den eckigen Klammern angegeben und ist zur Laufzeit nicht veränderbar. Hier ist die Länge 5, welche auch durch ".length" abgefragt werden kann, wie man in der Schleife sieht.
    Das bedeutet aber nicht, dass man auf intArray[5] zugreifen kann: die Indizes beginnen nicht bei 1, sondern bei 0. Der Bound eines Arrays ist nämlich immer {0,...,arrayName.length-1}, es kann also nur auf Indizes im Intervall [0, length - 1(!)] zugegriffen werden.
    Im Beispiel kann man also auf die Elemente im Array an den Indizes 0,1,2,3 und 4; nicht jedoch 5 zugreifen, weshalb die Exception geworfen wird.

    Um diesen Fehler zu beheben schaut man sich nochmal die in der Fehlermeldung angegebene Stelle im Code an  und überprüft, wo Indizes verwendet werden, die außerhalb des Bounds des Arrays liegen. Im Beispiel wurde in der Schleife bis i<=intArray.length gezählt, also bis inklusive 5. Hier kann also einfach das  Gleichheitszeichen entfernt werden, um das Problem zu lösen.

    ### Klassenmethode mit Objekt aufgerufen

    Klassenmethoden und Klassenattribute werden mit dem Schlüsselwort "static" gekennzeichnet. Klassenmethoden können weder auf Objektattribute zugreifen, noch Objektmethoden aufrufen. Da Klassenmethoden also nicht auf Objekte ihrer Klasse zugreifen dürfen, müssen sie auch nicht mit einem Objekt aufgerufen werden.
    Klassenmethoden sollten immer mit dem Klassenamen aufgerufen werden. Hier ein Beispiel:

    ```` java linenums="1"
    public class Car {

        static int numberOfWheels = 4; //Klassenattribut (ist bei jedem Auto gleich)
        Color color; //Objektattribut, wird im Konstruktor Car initialisiert

        public Car(Color color){
            this.color = color;
        }
        public static int getNumberOfWheels(){ //Klassenmethode
            return numberOfWheels;
        }
        public Color getColor(){ //Objektmethode
            return color;
        }
    }
    ````
    ```` java linenums="1"
    //in Main
    Car myCar = new Car(Color.black);
    Color myCarColor = myCar.getColor();         //korrekt: Objektmethode mit Objekt aufrufen
    int myCarWheels = myCar.getNumberOfWheels(); //schlechte Programmierpraxis: Klassenmethode mit Objekt aufrufen
    Color carColor = Car.getColor();             //inkorrekt: Objektmethode mit Klassennamen aufrufen
    int carWheels = Car.getNumberOfWheels();     //korrekt: Klassenmethode mit Klassennamen aufrufen
    ````

    Bei Zeile 4 in Main wird einem Folgendes angezeigt:
    ````
    Static member 'Car.getNumberOfWheels()' accessed via instance reference
    ````
    Es ist zwar möglich, eine Klassenmethode mit einem Objekt der Klasse aufzurufen, aber eher unschöne Programmierpraxis. Normalerweise ruft man sie einfach mit dem Namen der Klasse auf.

    Beim Kompilieren des oben stehenden Codes bekommt erhält man außerdem diese Fehlermeldung:
    ````
    non-static method getColor() cannot be referenced from a static context
    ````
    Die Objektmethode getColor() gibt normalerweise den Wert des Objektattributs color zurück. Wird sie nun nicht mit einem Objekt, sondern mit dem Klassennamen aufgerufen, kann sie nicht auf color zugreifen: es existiert kein Objekt, dessen color-Wert sie auslesen kann.
    Objektmethoden können nur mit Objekten aufgerufen werden.

    Mehr zu Klassenmethoden kann im Foliensatz 4c) auf den Seiten 34-50 gefunden werden.


    ### isBooleanExpression == false

    In der Bedingung einer if-Verzweigung, der Fortsetzungsbedingung einer while-Schleife und an anderen Stellen verwendet man boolesche Ausdrücke. Diese können zu true oder zu false auswerten. Außer man verwendet keinen booleschen Ausdruck, denn dann kompiliert der Code nicht.

    Was sind also alles boolesche Ausdrücke und was nicht?
    Die booleschen Werte true und false sind die einfachsten booleschen Ausdrücke. Diese können z.B. mit dem logischen Oder (||) bzw. dem logischen Und (&&) oder der Negation (!) zu komplizierteren Ausdrücken kombiniert werden. Vergleiche von Zahlen mit ==, <, >=, != etc. funktionieren auch.

    Was sind häufig verwendete, aber inkorrekte Ausdrücke?
    Oft wird beim Vergleich von z.B. zwei Zahlen nur ein = verwendet, gemeint ist meist der Vergleich mit ==.
    Methoden, die keinen boolean zurückgeben eignen sich nicht direkt, außer man nutzt die Rückgabe und z.B. die equals-Methode, um einen booleschen Ausdruck zu erzeugen.
    Nicht ganz falsch, aber etwas unnötig, ist es, einen boolean mit true oder false zu vergleichen: isOdd(5)==true ist semantisch äquivalent zu isOdd(5). Auch isEven(4) == false kann einfach zu !isEven(4) vereinfacht werden.

    Auch hier nochmal ein paar Beispiele:

    ```` java linenums="1"
    int a = 5;
    if (a = 4){...} // hier wäre == richtig, denn eine Zuweisung ist kein boolescher Ausdruck

    while( isLessThan7(a) == false){ //ist zwar möglich, aber !lessThan7(a) wäre schöner
        a++;
    }

    boolean b = false;
    if (b = true){
        System.out.println("b is true");
    }
    //"b is true" wird ausgegeben, da der Zuweisungsoperator den zugewiesenen Wert zurückgibt

    boolean c = false;
    if (c == true){
        System.out.println("c is true");
    }
    //"c is true" wird nicht ausgegeben, da false==true zu false auswertet

    boolean b = myCar.getColor();
    //falsch, da getColor eine Farbe und keinen boolean zurückgibt

    boolean c = myCar.getColor().equals(Color.green);
    //korrekt, die equals Methode vergleicht die beiden Farben und gibt einen boolean zurück
    ````

    ### Raw use of parameterized class

    Bei der Verwendung von generischen Klassen und Interfaces muss man die Typparameter instanziieren.
    Das geschieht bei der Einrichtung von Objekten: hier müssen die Typparameter festgelegt werden.

    Hier ein Beispiel anhand des generischen Interfaces java.util.List<E\>:
    List ist mit dem Typparameter E parameterisiert (s. Doku von [List]), welcher den Typen der Elemente angibt. Zuerst die inkorrekte Verwendung von List, mit den Warnungen von Intellij als Kommentar. In Zeilen vier bis sechs sieht man die korrekte Verwendung.

    ```` java linenums="1"
    List list = new ArrayList<>(); //Raw use of parameterized class 'List'
    list.add(myCar); //Unchecked call to 'add(E)' as a member of raw type 'java.util.List'

    List<Car> cars = new ArrayList<>();
    // bei der Einrichtung der Liste wurde ihr Typparameter mit Car instanziiert
    cars.add(myCar);
    ````
    Auf der rechten Seite der Zuweisung kann man, wie im Beispiel, die abkürzende Schreibweise des "Diamond-Operators" verwenden. Hierbei werden die spitzen Klammern hingeschrieben, aber der Typparameter nicht erneut (s. Foliensatz 06 Generics S.66f).
    Auf der linken Seite muss der Typparameter aber explizit angegeben werden!

    Falls Sie also die Warnung "Raw use of parameterized class" bekommen, sollten Sie den Typparameter der generischen Klasse instanziieren, indem Sie nach dem Klassen-/ Interfacenamen in spitzen Klammern die zu verwendende Klasse schreiben.

    ###### Weitere Fehler

    Diese Seite wird fortlaufend um weitere Fehler ergänzt. Falls Sie Vorschläge haben, schreiben Sie diese uns gerne.

=== "Debugging"

    Debugging beschreibt unter anderem das Beheben von Fehlern in Quelltexten.

    ### Debugging mit Stil

    IntelliJ bietet Ihnen mit dem Debugger eine sehr hilfreiche Methode Fehler in Ihrem Code zu finden.
    Sie können den Debugger genauso starten, wie Sie Ihren Code mit den Ihnen bekannten Methoden ausführen.
    Der Unterschied ist,
    dass Sie anstatt auf das *grüne Dreieck* `Run ...` auf den *roten Käfer* `Debug ...` drücken.

    ##### Breakpoints

    Wenn Sie den Debugger starten, wird er Ihren Code so lange normal ausführen, bis er an einem Breakpoint ankommt.
    In dem Fall wird das Programm angehalten und Ihnen wird eine Liste der Attribute mit aktuellen Zuweisungen angezeigt.

    Mit einem Linksklick direkt neben der Zeilenangabe können Sie einen solchen Breakpoint erstellen.
    Dieser wird als roter Kreis angezeigt.

    ##### Aktionen

    Alle Aktionen können auch mittels der Tasten am oberen Rand des Debugger-Bereichs ausgeführt werden.

    * Mit `F8` können Sie die momentane Zeile ausführen.
    * Mit `F7` können Sie die in die Methode, die als nächstes ausgeführt wird, hineinspringen.
    * Mit `F9` können Sie das Programm bis zum nächsten Breakpoint weiterlaufen lassen.
    * Mit `Shift + F8` können Sie das Programm weiterlaufen lassen, bis die momentane Methode verlassen wird.

    ### Der Unsaubere

    Für den Fall,
    dass Ihnen das Debugging mittels Debugger zu schwierig erscheint,
    möchten wir Ihnen einen unsauberen Klassiker vorstellen:

    ```java
    System.out.println("my string");
    ```

    Mit diesem Statement teilen Sie mit,
    dass beim Ausführen des Programms an der jeweiligen Stelle im Programm eine Nachricht in der Konsole ausgegeben werden soll.
    Sie können innerhalb der runden Klammern jeden beliebigen String einsetzen.

    #### Warum sollte ich das tun?

    Sie können ein Print-Statement beispielsweise dann benutzen,
    wenn Sie sich eine der folgenden Fragen stellen.

    * Wird dieser Teil meines Programms ausgeführt?
    * Was ist diesem Attribut an dieser Stelle meines Programms zugewiesen?
    * Ist diese Bedingung an dieser Stelle meines Proramms erfüllt?
    * Befindet sich mein Programm in einer Endlosschleife/-rekursion?

    #### Beispiel

    ```java
    public int doStuff(int n) {

        System.out.println("n: " + n);
        System.out.println("crazyness > 1337: "crazyness > 1337)
        while (crazyness <= 9000) {
            System.out.println("current crazyness: " + crazyness);
            doCrazyStuff();
        }
        if (crazyness % 1337 == 42) {
            System.out.println("big red button pressed");
            pressBigRedButton();

        }
        int r = crazyness - n;
        System.out.println("return: " + r)
        return r;
    }
    ```

=== "Technische Fehler"

    * Stellen Sie zunächst sicher, dass Sie den richtigen Ordner importiert haben. Der oberste Ordner sollte nach der Hausübung benannt sein (z. B. **"FOP-2223-HXX-Student-master"** bzw. **"PX-Student-master"**) und direkt die build.gradle.kts Datei enthalten sein. Wählen Sie beim Importieren **nicht** einen identisch benannten Oberordner aus.
    * Beachten Sie, dass es mit Gradle zu Problemen kommen kann, wenn das Projekt auf einer externen Festplatte gespeichert wurde.
    * Anbei finden Sie ein paar mögliche Fehler, welche Ihnen in der Konsole, die sich beim Ausführen der des Programmes oder einer Gradle Task automatisch öffnet, angezeigt werden. Damit Ihnen die vollständigen Fehlermeldungen angezeigt werden, wählen Sie links von der Konsole die zweite Option von oben aus.



    ### Häufige Fehlermeldungen

    1. !!! error ""
        ```
        [...] finished with non-zero exit value 1
        ```
        Diese Meldung sagt ihnen nur, dass ein Fehler aufgetreten ist. Wenn der eigentliche Fehler nicht angezeigt wird, drücken Sie links neben der Konsolenausgabe auf die zweite Option von oben. Diese sollte **":run"** oder **":<Mainclass\>:main()"** heißen.


    2. !!! error ""
        ```
        A problem occurred configuring root project ...
        Could not resolve all files for configuration ':classpath'.
        Could not resolve org.tudalgo:algomate:0.1.0-SNAPSHOT.
        ```
        oder
        ```
        Execution failed for task ':compileJava'.
        error: invalid source release: 17
        ```
        oder
        ```
        UnsupportedClassVersionError
        ```
        oder
        ```
        [...] has been compiled by a more recent version of the Java Runtime
        ```
        Es wird eine falsche Java Version benutzt. Siehe [Korrekte Java Version in IntelliJ Einstellen].


    3. !!! error ""
        ```
        Deprecated Gradle features were used in this build, making it incompatible with Gradle 8.0.
        ```
        oder
        ```
        org.junit.platform.launcher.core.EngineDiscoveryOrchestrator lambda$logTestDescriptorExclusionReasons$7
        INFO: 0 containers and 1 tests were Method or class mismatch
        ```
        Sie können diese Meldung ignorieren.


    4. !!! error ""
        ```
        Execution failed for task ':mainBuildSubmission'.
        There were some errors preparing your submission. The following required properties were not set:
        studentId
        firstName
        lastName
        ```
        Sie haben vergessen, Ihre persönlichen Daten in der build.gradle.kts Datei hinzuzufügen. Siehe [Anleitung zum Exportieren].


    5. !!! error ""
        ```
        execution failed for task ':test'.
        There were failing tests.
        ```
        Ihre selbstgeschriebenen Tests laufen nicht erfolgreich durch. Um dies zu beheben, fixen Sie entweder den Fehler, der in Ihren Tests auftritt, oder ändern Sie in der build.gradle.kts Datei direkt unter Ihren persönlichen Daten requireTests von true auf false:
        ```
        requireTests = false
        ```

    6. !!! error ""
        ```
        execution failed for task ':graderPublicRun'.
        There were failing tests.
        ```
        Die von uns zur Verfügung gestellten public-Tests laufen nicht erfolgreich durch. Um dies zu beheben, fixen Sie entweder den Fehler, den die Tests aufzeigen, oder ändern Sie in der build.gradle.kts Datei direkt unter Ihren persönlichen Daten requirePublicTests von true auf false:
        ```
        requireGraderPublic = false
        ```

    7. !!! error ""
        ```
        Execution failed for task ':compileJava'.
        Compilation failed; see the compiler error output for details.
        ```
        Es befinden sich vermutlich noch Syntaxfehler in Ihren Code, welche Sie vor dem Abgeben beheben müssen. Sie finden unten links am Rand im Reiter **"Problems"** eine Auflistung aller Syntaxfehler.


    8. !!! error ""
        ```
        Note: \[...\] uses unsafe or unchecked operations.
        ```
        Dies ist nur eine Warnung und verhindert nicht die Abgabe der Hausübung. Sie sollten allerdings überprüfen, ob der entsprechende Abschnitt funktioniert.


    9. !!! error  ""
        ```
        failed to delete some children.
        ```
        Dieser Fehler entsteht meistens dadurch, dass der Zugriff auf bestimmte Dateien durch andere Prozesse, wie z. B. den Debugger, blockiert wird. Ein Neustart von IntelliJ oder Ihrem Rechner sollte das Problem beheben.

    10. !!! error ""
        ```
        Java.lang.OutOfMemoryError: java heap space
        ```
        Dieser Fehler kann manchmal beim Ausführen der Public Tests auftretten. Versuchen Sie zunächst die Public Tests erneut auszuführen oder IntelliJ neuzustarten. Falls der Fehler weiterhin auftritt, versuchen Sie [Java mehr Speicher zuzuweisen].

    ### Korrekte Java Version in IntelliJ einstellen

    1. Überprüfen Sie zunächst in einem Terminal mit **"java --version"**, ob Java 17 benutzt wird (s. [Anleitung zum Installieren von Java])
    2. Überprüfen Sie in IntelliJ, ob unter **"File" -> "Project Structure..." -> "Project" -> "SDK"** Java 17 als Version angegeben ist.
    * Falls dies nicht der Fall ist, wählen Sie Java 17 aus und drücken Sie auf **"Apply"**.
    3. Gehen Sie ebenfalls sicher, dass unter **"File" -> "Settings" -> "Build, Execution, Deployment" -> "Build Tools" -> "Gradle" -> "Gradle JVM"** als Option **"Project SDK"** ausgewählt ist.

    ### Java mehr Speicher zuweisen

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

=== "Hilfreich Fragen stellen"

    Beachten Sie die Seite [Bevor Sie eine Sprechstunde besuchen].

[Korrekte Java Version in IntelliJ Einstellen]: https://wiki.tudalgo.org/exercises/fix-errors/#korrekte-java-version-in-intellij-einstellen
[Anleitung zum Installieren von Java]: https://wiki.tudalgo.org/preparation/installation-java/
[Anleitung zum Exportieren]: https://wiki.tudalgo.org/exercises/export-upload/#exportieren
[Java mehr Speicher zuzuweisen]: https://wiki.tudalgo.org/exercises/fix-errors/#java-mehr-speicher-zuweisen
[Aktualisieren der Vorlage]: /exercises/download-import/#aktualisieren-der-vorlage
[Typische Programmierfehler]: /exercises/fix-errors/#typische-programmierfehler
[Bevor Sie eine Sprechstunde besuchen]: /support/good-bad-questions
[Debugging]: /exercises/fix-errors/#debugging
[List]: https://docs.oracle.com/javase/8/docs/api/java/util/List.html
