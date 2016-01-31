[Kmom01](#Kmom01)

<a id="Kmom01" class="anchor"></a>Kmom01: Kom igång med JavaScript
--------------------------------

Första momentet i JavaScript-kursen är avklarat och det känns lite ovant med ett nytt språk som dessutom skiljer sig lite från de jag kommit i kontakt med tidigare. Det var lite krångel att få till några av uppgifterna men inget som gjorde att jag körde fast helt. Både JSLint och JSFiddle kommer jag att behöva pyssla med lite mer för att fullt förstå hur de funkar. Min [JSFiddle-mall](https://jsfiddle.net/helikopterspark/hx2n9mdk/20/) finns länkad i sidfoten på mina sidor.

### Utvecklingsmiljö
Jag använder en Mac Mini från 2012 med senaste versionen av OS X (10.11.3 i dagsläget) och kodar i Atom. Jag kör XAMPP för webbserver och MySQL. Jag har vågat mig på att uppgradera till PHP 7.0.1. Jag testar oftast i Firefox Developer Edition men har även vanliga Firefox, Safari, Chrome och Opera installerat. Jag har Firebug installerat och testade med det i början men efter lite problem har jag använt Firefox egna developer tools mer och mer. Jag använder antingen git eller FileZilla för att lägga filer på studentservern.

Ibland kollar jag hur det ser ut i Ubuntu eller Windows 10 också. Utöver detta har jag en Raspberry Pi som webbserver i hemmanätverket, där jag brukar lägga upp saker jag gjort i kurserna.

### Hur väl känner du till JavaScript?
JavaScript är helt nytt för mig. Jag har klistrat in korta script tidigare men har aldrig kodat i språket tidigare och förväntar mig en hel del arbete och huvudbry under kursens gång.

### Uppfattning så här långt
Min uppfattning så långt är att JavaScript verkar väldigt användbart men att det kommer att orsaka en del förvirring då det inte funkar riktigt som de språk jag är insatt i sedan tidigare. Jag har dock stora förväntningar på möjligheterna. Det känns som en viktig pusselbit till att kunna bygga funktionella och snygga webbapplikationer.

Det kommer nog att ta lite tid att få till koden så att den passerar JSLint bättre. Som det ser ut nu blir det massor med felmeddelanden och man får försöka förstå dem ett i taget och hur man kan konfigurera för att filtrera bort en del meddelanden. Jag ser fram emot nästa kursmoment där det blir lite mer kodande från grunden.

### Exempelprogram
Jag följde exemplen i övningen tämligen slaviskt eftersom allt är nytt för mig.

* [Hello world](helloworld)

* [Mall](../../kmom01/template/index.php)

* [Resize element](../../kmom01/resize-element/index.php)

* [Move baddie](../../kmom01/move-sprite-css3-transitions/index.php)

* [Transform  and transition with CSS](../../kmom01/css3-transforms-transitions/index.php)

* [Somersault](../../kmom01/somersaultx2/index.php)

I Hello World-exemplet har jag lagt till en `parseInt()` på det inmatade värdet för att jämförelsen av det slumpade numret och den inmatade siffran ska kunna jämföras med `===`. Annars jämförs ett tal med en sträng. Förlagan använder `==` men det gillas ju inte av JSLint.

Jag har lagt till den styrbara baddien på [Lekplatssidan](playground) för att öva lite på att få in JS-kod i ramverket, utöver de fristående exemplen. Övriga exempel finns också länkade från sidan men öppnas utanför ramverket.

### Baddien och dess konster
Som sagt, jag följde exemplen så min baddie gör samma sak som dessa. Jag laborerade lite med koden för att förstå hur den funkar. Jag gjorde en egen variant av baddie-spriten i Inkscape.

Jag noterade att det finns något som heter keyframes i CSS3 och det kanske är en bättre teknik att använda för animeringar än transform? Det kan ju vara något att sätta sig in i mera under våren.

### Extrauppgift
Jag lyckades få baddien att göra en dubbel saltomortal framåt genom att kombinera funktioner i fransform. Det krävde lite laborerande att få till en någorlunda jämn volt men jag tycker att den blev bra till slut.

[Upp](#)
