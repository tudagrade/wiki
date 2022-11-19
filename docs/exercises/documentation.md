# Dokumentation von Java-QuellCode

!!! info "Information"
    In der Softwareentwicklung ist es wichtig, seinen Code ordentlich zu dokumentieren, damit es möglich ist, diesen ohne viel Aufwand zu verstehen.
    Dies hilft sowohl anderen, die mit Ihrem Code arbeiten oder ihn benutzen, als auch Ihnen selber, wenn Sie länger nicht mehr mit diesem gearbeitet haben.
    Die Dokumentation sollte dabei kurz erklären, was der Code macht und wie er zu benutzen ist.
    Es sollte aber nicht erklärt werden, wie genau der Code funktioniert, sondern dieser sollte als eine Blackbox, in welche man nicht genauer hineingucken kann, betrachtet werden.

* In Java werden JavaDoc Kommentare als standardisierte Methode benutzt um Code zu dokumentieren.
    * JavaDoc Kommentare haben dabei den Vorteil, dass IDEs sie automatisch anzeigen können und HTML Seiten aus ihnen generiert werden können.
* Jeder JavaDoc Kommentar beginnt dabei mit **/\*\*** und endet mit **\*/**.
  Jede neue Zeile beginnt mit einem **\***.
* JavaDoc Kommentare werden direkt über die zugehörige Klasse, Methode, etc. geschrieben.
* Wenn Sie in IntelliJ über einer über einer Methode, Klasse, etc. **/\*\*** schreiben und dann **Enter** drücken, wird automatisch eine Vorlage für Sie erstellt.
* Ein JavaDoc Kommentar sieht dabei z.B. wie folgt aus:

!!! example "Beispiel"
    ```java
    /**
    * This method accepts two real numbers belonging to a
    * vector and calculates the euclidean norm of said
    * vector.
    *
    * @param x first component of two-dimensional vector (x, y)
    * @param y second component of two-dimensional vector (x, y)
    * @return Euclidean norm of the vector (x,y)
    */
    double euclid2(float x, float y) {
     return Math.sqrt(x*x + y*y);
    }
    ```

* In der [Dokumentation der Java Standardbibliothek] finden Sie etliche Beispiele, wie gute JavaDoc Kommentare aussehen sollten.

## Aufbau

* Zu Beginn eines JavaDoc Kommentars steht eine allgemeine Beschreibung der Methode, welche auf alle Details der Methode eingeht und beschreibt was sie bewirkt, wie sie zu benutzten ist und was man dabei beachten muss.
* Danach folgen sogenannte Tags, welche mit einem **@** und dem Namen des Tags beginnen.
* Jeder JavaDoc Kommentar muss dabei, falls notwendig, folgende Tags haben:
    * **@param Parametername description** Beschreibt kurz die Bedeutung des Parameters **Parametername**.
      Für jeden Parameter muss ein solcher Tag vorhanden sein.
    * **@return description** Beschreibt kurz die Bedeutung der Rückgabe der Methode.
      Wenn die Methode keine Rückgabe hat, wird dieser Tag weggelassen.
    * **@throws Exceptionname description** Beschreibt kurz, in welchem Fall die Exception **Exceptionname** geworfen wird.
      Für jede Exception, welche in der throws-Klausel der Methode angegeben wird, muss ein solcher Tag vorhanden sein.
        * Optional können Sie diesen Tag auch für Runtimeexceptions hinzufügen, welche geworfen werden können.

## Verpflichtende Dokumentation

* Ab dem dritten Übungsblatt kann es vorkommen, dass von Ihnen gefordert wird, Ihren selbstgeschriebenen Code zu dokumentieren. Wenn dies der Fall ist, müssen alle von Ihnen deklarierten Klassen, Interfaces, Enums und Methoden (inklusive Konstruktoren) mittels JavaDoc dokumentiert werden.
* Private Methoden und Methoden, welche andere, bereits dokumentierte, Methoden überschreiben, sowie private Attribute und Enumerationselemente müssen **nicht** dokumentiert werden.

## Einige weitere Tags
* **@author name** Gibt den Autor an.
  Kann nur in Klassen, Interface und Enums verwendet werden.
*  **@version version** Gibt die Version an.
  Kann nur in Klassen, Interface und Enums verwendet werden.
*  **@since version** Gibt an, seit wann das Objekt verfügbar ist.
*  **@see reference** Erzeugt eine Referenz auf eine andere Dokumentation.
*  **@deprecated** Gibt an, dass die Methode veraltet ist und nicht verwendet werden sollte.
*  Eine vollständige Liste finden Sie [hier].

[hier]: https://de.wikipedia.org/wiki/Javadoc#%C3%9Cbersicht_der_Javadoc-Tags
[Dokumentation der Java Standardbibliothek]: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/module-summary.html
