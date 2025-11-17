
/* Was zu beachten ist.
1.- Setze den Text in Anführungszeichen, da es sich um einen String handelt. Dies gilt sowohl für die front- als auch für die back der Karte.
2.- Wenn die Karte ein Bild enthält, gebe im Feld „img“ nur „Ja“ ein. Ich kümmere mich darum, das entsprechende Bild mit dem Bild zu verknüpfen, das du auf Google Drive hochgeladen hast.Wenn die Karte kein Bild enthält, lass dieses Feld leer und geb nur die Anführungszeichen ein, wie im Beispiel unten bei cardNumber: 2.

Das ist alles.

*/
cards: [
      {
        cardNumber: 1,
        img: "Ja",
        front: "Hier den Text für die Vorderseite der Karte eingeben",
        back: "Und hier den Text für die Rückseite der Karte eingeben",
      },
      {
        cardNumber: 2,
        img: "",
        front: "Hier den Text für die Vorderseite der Karte eingeben",
        back: "Und hier den Text für die Rückseite der Karte eingeben",
      },
    ]