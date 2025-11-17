/* Was zu beachten ist.
1.- Setze den Text in Anführungszeichen, da es sich um einen String handelt. Dies gilt sowohl für die front- als auch für die back der Karte.
2.- Wenn die Karte ein Bild enthält, gebe im Feld „img“ nur „Ja“ ein. Ich kümmere mich darum, das entsprechende Bild mit dem Bild zu verknüpfen, das du auf Google Drive hochgeladen hast.Wenn die Karte kein Bild enthält, lass dieses Feld leer und geb nur die Anführungszeichen ein, wie im Beispiel unten bei cardNumber: 2.

Das ist alles.

*/
cards: [
  {
    cardNumber: 181,
    img: "",
    front:
      "Welche Kommandos oder Werkzeugen kennst du, um unter Linux eine IPv4-Adresse eines Netzwerkadapters anzuzeigen?",
    back: "<b>Grafische Werkzeuge:</b><br> - Netzwerkmanager (Debian, Rocky Linux, SUSE) <br> - nmtui (Rocky Linux), Wicd (Debian), YaST (SUSE) <br><br> <b>Console:</b> <br> - ifconfig <br> - ip addr show <br>- ipa",
  },
  {
    cardNumber: 182,
    img: "",
    front:
      'Netsh ist ein Kommandozeilenwerkzeug für Netzwerkeinstellungen auf windowsbasierten Computern.<br><br>Wie lautet das Kommando zum Einrichten einer IPv4 Netzwerkadresse <b>192.168.0.1/24</b> mit einem Gateway <b>192.168.0.254</b> für den Netzwerkadapter "LAN-Verbindung"?',
    back: '<pre><code>netsh interface ip set address name="LAN-Verbindung" address=192.168.0.1 mask=255.255.255.0 gateway=192.168.0.254</code></pre>',
  },
  {
    cardNumber: 183,
    img: "",
    front:
      "Welche Bedingungen müssen beim Einsatz von Arbeitsspeichern im Dual Channel Mode erfüllt sein?",
    back: "Die Arbeitsspeicher müssen im Dual Channel Mode folgende Bedingungen erfüllen:<br>  - Speichermodule müssen baugleich sein <br>- Speichermodule müssen die gleiche Speicherkapazität besitzen <br>- Speichermodule sollten vom Hersteller für den Einsatz auf dem Motherboard bzw. Prozessor zertifiziert sein <br>- Speichermodule müssen immer paarweise ergänzt bzw. entfernt werden",
  },
  {
    cardNumber: 184,
    img: "",
    front:
      'Welche Aussagen sind zutreffend, wenn ein Netzwerkadapter folgende Informationen anzeigt?<br><br> <img src="../src/img/img-184.jpg" alt="img-184" class="flashcard-img">',
    back: "Folgende Aussagen sind zutreffend:<br><br> - es handelt sich um ein windowsbasiertes Betriebssystem <br>- der Netzwerkadapter hat keine statische IPv4-Adresse <br>- die Eigenschaften des Internetprotokolls, Version 4 (TCP/lPv4) wollen die IP-Adresse automatisch beziehen <br>- ein DHCP-Request des Netzwerkadapters wurde nicht beantwortet <br>- DHCP Server ist zurzeit nicht erreichbar <br>- laut der Internet Assigned Numbers Authority (IANA) wird das Feature Automatic Private IP Addressing (APIPA) aktiviert <br>- es wurde in dem <b>APIPA Adressbereich 169.254.1.0 - 169.254.254.255</b> eine zufällige IPv4 Adresse mit einer <em>/16 Subnetzmaske</em> erzeugt",
  },
  {
    cardNumber: 185,
    img: "",
    front: "Was bedeutet der Begriff <b>UML</b>?",
    back: "<b>UML</b> ist die Abkürzung für <b>Unified Modeling Language</b> (Vereinheitlichte Modellierungssprache). UML ist eine standardisierte grafische Modellierungssprache, die in der Softwareentwicklung und Systemmodellierung zum Einsatz kommt. Ziel ist es, komplexe Systeme in der Softwareentwicklung zu visualisieren, zu spezifizieren, zu konstruieren und zu dokumentieren.",
  },
  {
    cardNumber: 186,
    img: "",
    front: "Nenne einige <b>UML-Verhaltensdiagramme</b> sowie deren Zweck.",
    back: "<b>UML-Verhaltensdiagramme und deren Zweck:</b><br><br> <b>- Aktivitätsdiagramm:</b> Zeigt den Ablauf von Aktivitäten und Prozessen. <br><b>- Zustandsdiagramm:</b> Bildet die Zustände und Zustandsübergänge eines Objekts ab. <br><b>- Use-Case-Diagramm:</b> Wird zur Darstellung von Anwendungsfällen (engl. Use Cases) und deren Beziehungen zu Akteuren verwendet. <br><b>- Sequenzdiagramm:</b> Stellt Interaktionen zwischen Objekten in einer zeitlichen Abfolge dar. <br><b>- Kommunikationsdiagramm:</b> Stellt Interaktionen zwischen Objekten dar, ähnlich wie Sequenzdiagramme, jedoch mit Fokus auf die Beziehungen. <br><b>- Interaktionsübersichtsdiagramm:</b> Dient zur Modellierung von Abläufen und Prozessen und kombiniert Elemente aus Aktivitätsdiagrammen und Interaktionsdiagrammen. <br><b>- Zeitverlaufsdiagramm:</b> Visualisiert die Darstellung von Zustandsänderungen über die Zeit.",
  },
  {
    cardNumber: 187,
    img: "",
    front: "Erkläre den Unterschied zwischen einem Objekt und einer Klasse.",
    back: "Eine <b>Klasse</b> definiert mithilfe von Kategorien Objekte, die gleiche Attribute haben und gleiche Methoden benutzen. Durch Vererbung können neue Subklassen geschaffen werden, bei denen eine Erweiterung oder eine Einschränkung der ursprünglichen Klasse enthalten sein kann.<br><br> Ein <b>Objekt</b> ist eine Instanz einer Klasse, die nach dem Bauplan der zugeordneten Klasse erschaffen wurde. Ein Objekt verfügt damit über die Attribute und Methoden, die in der Klasse festgelegt worden sind.",
  },
  {
    cardNumber: 188,
    img: "",
    front:
      "Welche allgemeinen Anforderungen werden an ein Datenbanksystem gestellt?",
    back: "Folgende allgemeine Anforderungen an ein <b>Datenbanksystem </b> sind: <br> - Datenunabhängigkeit <br>- Effizienter Speicherzugriff <br>- Paralleler Datenzugriff <br>- Datenkonsistenz <br>- Gemeinsame Datenbasis <br>- Datenintegrität <br>- Datensicherheit <br>- Wiederherstellungsverfahren <br>- Abfragesprache <br>- Keine/kontrollierte Redundanz",
  },
  {
    cardNumber: 189,
    img: "",
    front:
      "Die Normalisierung eines Datenbankschemas ist wichtiger Bestandteil des Datenbank Designs. Nenne die ersten drei Normalformen und deren Zweck.",
    back: "Allgemein dient die Normalisierung der Verhinderung von Datenredundanzen.<br><br> Folgende 3 Normalformen gibt es: <br> Die <b>Erste Normalform (INF)</b> ist dann erfüllt, wenn alle Informationen in einer Tabelle atomar vorliegen. <br> Die <b>Zweite Normalform (2NF)</b> liegt dann vor, wenn die Tabelle in der ersten Normalform vorliegt und jedes Nichtschlüsselattribut von jedem Schlüsselkandidaten voll funktional abhängig ist. <br> Die <b>Dritte Normalform (3NF)</b> gilt als erfüllt, wenn er sich bereits in der zweiten Normalform (2NF) befindet und kein Nichtschlüsselattribut transitiv von einem Kandidatenschlüssel abhängt.",
  },
  {
    cardNumber: 190,
    img: "",
    front:
      "Es gibt 5 Typen von SQL Kommandos: DDL, DML, DCL, TCL, und DQL.<br> Nenne bitte jeweils mindestens einen ausführbaren SQL-Befehl.",
    back: "<b>- Data Definition Language (DDL)</b> -> CREATE, ALTER, DROP, TRUNCATE <br><b>- Data Manipulation Language (DML)</b> -> INSERT, UPDATE, DELETE <br><b>- Data Control Language (DCL)</b> -> GRANT, REVOKE <br><b>- Transaction Control Language (TCL)</b> -> COMMIT, ROLLBACK, SAVEPOINT <br><b>- Data Query Language (DQL)</b> -> Select",
  },
  {
    cardNumber: 191,
    img: "",
    front:
      "Dein Ausbildungsbetrieb ist <b>ISO 9001 zertifiziert</b>.<br>Was bedeutet diese Norm für deinen Ausbildungsbetrieb?",
    back: "Die ISO 9001 Norm legt die Anforderungen für <b>Qualitätsmanagementsysteme</b> fest. Ziel ist die <em>Qualitätssicherung durch stetige Optimierung der Prozesse.</em> <br>Diese Zertifizierung ist weltweit anerkannt. <br><b>ISO 9001 orientiert sich unter anderem an diesen Grundprinzipien:</b><br><br>- Kundenorientierung <br>- Prozessorientierung <br>- stetige Verbesserung <br>- Risikomanagement",
  },
  {
    cardNumber: 192,
    img: "",
    front:
      "Beschreibe den <em>PDCA-Zyklus </em> im Bereich des Qualitätsmanagements.",
    back: "Die vier Phasen des <b>PDCA-Zyklus</b> sind Planen (<b>P</b>lan), Umsetzen (<b>D</b>o), Überprüfen (<b>C</b>heck) und Handeln (<b>A</b>ct). <br><br> <b>P:</b> In dieser Phase identifiziert man Probleme, analysiert den aktuellen Zustand und legt Ziele sowie Kennzahlen fest.<br><b>D:</b> Hier wird der Plan ausgeführt. Man führt die geplanten Aktivitäten durch und sammelt dabei relevante Daten und Informationen. <br><b>C:</b> In dieser Phase vergleicht man die erzielten Ergebnisse mit den geplanten Zielen und überprüft, ob die Maßnahmen erfolgreich waren. <br><b>A:</b> Das Ziel dieser Phase ist es, erfolgreiche Maßnahmen zu standardisieren oder den Plan für zukünftige Verbesserungen anzupassen.",
  },
  {
    cardNumber: 193,
    img: "",
    front: 'Was bedeutet das Label <b>„Energy Star"</b>?',
    back: "Der <b>Energy Star</b> bescheinigt z.B. elektrischen Geräten, dass sie die <b>Stromsparkriterien</b> der US-Umweltschutzbehörde EPA (Environmental Protection Agency) und des US-Energieministeriums <b>erfüllen</b>. <br> Ein wichtiges Kriterium dabei ist, dass sich ein eingeschaltetes Gerät nach einiger Zeit selbstständig ausschaltet oder in den Stromsparmodus wechselt. <br>Bei Computern muss die Prozessorleistung heruntergefahren und der Datenträger abgeschaltet werden. Dieser Standby-Modus hat einen sehr niedrigen Stromverbrauch zur Folge.",
  },
  {
    cardNumber: 194,
    img: "",
    front:
      "Im Qualitätsmanagement spricht man oftmals, im Zusammenhang einer Zertifizierung, von einem <b>Audit</b>. <br>Was versteht man unter einem Audit?",
    back: "In einem <b>Audit</b> wird untersucht, ob Prozesse, Anforderungen, Normen und Richtlinien die geforderten Standards während eines Untersuchungsprozesses erfüllen, die im Rahmen eines Qualitätsmanagements turnusmäßig durchgeführt werden. <br>Als <b>Beispiel</b> können hier die <em>Zertifizierung bzw. Re-Zertifizierung der Normen ISO 9001 oder ISO 27001</em> genannt werden.<br> Diese Audits werden in der Regel von speziell geschulten Auditoren durchgeführt und stellen oftmals die finale Phase beim Zertifizierungsprozess dar. <br>Audits haben im Bereich des statischen Qualitätsmanagements Prüfungscharakter, im Bereich der dynamischen Qualitätssicherung dienen sie der Erfassung und der Erkennung von Entwicklungstrends, um anschließend die Wirksamkeit von Maßnahmen zu überprüfen.",
  },
  {
    cardNumber: 195,
    img: "",
    front: "Welchen Qualitätskriterien unterliegt Software?",
    back: "Die <b>Softwarequalitätskriterien</b> werden in verschiedenen Modellen, zum Beispiel in der Norm ISO/IEC 9126, dargestellt. Die <b>Qualitätssicherung (kurz: QS)</b> dient dazu, sicherzustellen, dass die Software den vereinbarten Anforderungen/Kriterien entspricht.<br> Allgemeine Kriterien, die eine Software erfüllen sollte, sind:<br><br>- Funktionalität <br>- Benutzbarkeit <br>- Zuverlässigkeit <br>- Effizienz <br>- Übertragbarkeit <br>- Änderbarkeit",
  },
  {
    cardNumber: 196,
    img: "",
    front:
      'Was bedeutet das Gütesiegel <b>„Geprüfte Sicherheit"</b>? <br><img src="../src/img/img-196.jpg" alt="img-196" class="flashcard-img">',
    back: 'Das Gütesiegel <b>„Geprüfte Sicherheit" (GS)</b> wird seit 1977 von der Deutschen Gesetzlichen Unfallversicherung e.V. (DGUV) für Produkte ausgestellt, die die Anforderungen des Produktsicherheitsgesetzes (ProdSG) erfüllen.<br>Mit dem <b>Gütesiegel</b> „Geprüfte Sicherheit (GS)" soll vor allem sichergestellt werden, dass Produkte einer Prüfung durch eine zugelassene, unabhängige Prüf- und Zertifizierungsstelle unterzogen wurden.',
  },
  {
    cardNumber: 197,
    img: "",
    front:
      'Was steckt hinter dem Zeichen <b>„Blauer Engel"</b>? <br><img src="../src/img/img-197.jpg" alt="img-197" class="flashcard-img">',
    back: 'Der <b>Blaue Engel</b> ist das Umweltzeichen der Bundesregierung.<br> <em>„Unabhängig und glaubwürdig setzt er anspruchsvolle Maßstäbe für umweltfreundliche Produkte und Dienstleistungen. Der Blaue Engel ist die Orientierung beim nachhaltigen Einkauf."</em> <br> (Quelle: https://www.blauer-engel.de/de, Abgerufen am 01.08.2021) <br><br> Das Umweltzeichen wird immer dann verliehen, wenn Produkte und Dienstleistungen umweltfreundlicher sind als vergleichbare, konventionelle Produkte und Dienstleistungen.<br>Die Vergaberegeln legt das Bundesministerium für Umwelt, Naturschutz und nukleare Sicherheit (BMU) als Zeicheninhaber fest.',
  },
  {
    cardNumber: 198,
    img: "",
    front: "Was sollte beim <b>Recyceln von IT-Produkten</b> beachtet werden?",
    back: "Laut der WEEE-Richtlinie (Waste Electrical and Electronic Equipment), in der die Vorgaben für die Entsorgung von Elektro-Altgeräten (EAG) festlegt sind, gibt es ein grundlegendes Prinzip, welches besagt, dass <em>die Hersteller in der abfallwirtschaftlichen Verantwortung für ihre Produkte während der gesamten Lebensdauer verantwortlich sind.</em><br> Dabei wird in verschiedene Kategorien unterschieden, wie zum Beispiel:<br><br>- Informations- und Kommunikationstechnik-Geräte:<br> Computer, Notebooks, Tablets, Datenspeicher, Monitore, Drucker, Handys, Telefone, Netzteile, TK-Anlagen<br>- Unterhaltungselektronik-Geräte (auch braune Ware genannt):<br> Fernseher, Videorecorder, Digitalkameras, Konsolen, HiFi- Anlagen, Boxen, Radios, CD-/DVD-/Blu-ray-Player <br><br> <b>Merke:</b><em> Elektronische Geräte gehören nicht in den Hausmüll und müssen fachgerecht sowie umweltgerecht entsorgt werden.</em>",
  },
  {
    cardNumber: 199,
    img: "",
    front: "Was sollte man beim <b>Verschrotten von Datenträgern</b> unbedingt beachten?",
    back: "Alle Daten sind <b>vor der Verschrottung eines Datenträgers</b> durch technische Verfahren, wie zum Beispiel durch mechanische, magnetische oder thermische Verfahren <em>nach DIN 66399</em> sicher zu löschen. <br>Anschließend sind die Datenträger umwelt- und fachgerecht durch ein zertifiziertes Entsorgungsunternehmen zu entsorgen.",
  },
  {
    cardNumber: 200,
    img: "",
    front: "Was bedeutet der Begriff <b>MFA (Multi-Factor-Authentication)</b> und wo kommt sie zum Einsatz?",
    back: "Die <b>Multi-Factor-Authentication (MFA)</b> ist eine erweiterte Form der Zugangsberechtigung, die durch mehrere unabhängige Merkmale (Faktoren) überprüft wird und erst nach Eingabe eines starken Passworts sowie der Eingabe einer Nummer (via SMS oder App) oder Angabe einer Zertifikatsdatei erteilt wird. <br>Einsatzbereiche sind:<br><br>- Online-Banking <br>- Debit- oder Kreditkartenzahlung <br>- Online-Ausweisfunktion des Personalausweises <br>- Absicherung jeglicher öffentlich zugänglicher Onlinezugänge",
  },
];
