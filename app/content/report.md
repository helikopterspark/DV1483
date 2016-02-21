[Kmom01](#Kmom01) | [Kmom02](#Kmom02)

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
Jag lyckades få baddien att göra en [dubbel saltomortal framåt](../../kmom01/somersaultx2/index.php) genom att kombinera funktioner i fransform. Det krävde lite laborerande att få till en någorlunda jämn volt men jag tycker att den blev bra till slut.

[Upp](#)

<a id="Kmom02" class="anchor"></a>Kmom02: Programmera med JS
--------------------------------

Det här kursmomentet kändes som en intensivkurs i Javascript-programmering. Det kändes som att jag började nästan från noll till att till slut faktiskt kunna få till fungerande kod. Det har krävts en hel del läsande på stackoverflow och studerande av kodexempel. Det har varit lärorikt och jag är nöjd med att ha fått till början på något som liknar ett spelbart spel.

Jag börjar också bli lite bättre vän med JSLint och förstår bättre vad den förväntar sig för kod för att bli nöjd. Det blir inte alltid 100% men närapå.

### Funktioner i egen variant av mos.js
Jag skapade modulen `cramse.js` enligt förlagan. Den innehåller i dagsläget funktionen `getRandom()` och `getOffset()` som jag lånade från förlagan för bolluppgiftens räkning.

### Exempelprogram
Exempelprogrammen från övningen har jag till största delen försökt att koda själv utan att titta på förlagorna. Det höll fram till bollövningen som jag gick bet på först. Det känns som att den ligger för tidigt i övningen innan viktiga bitar förklarats. Den kanske skulle vara bättre placerad om den låg näst sist i övningen. I vilket fall som helst så gjorde jag ett försök på extrauppgiften med bollen. Funktionen `onMouseMove()` läser av muspekarens förflyttning över fönstret. Utifrån pekarens placering när musknappen släpps upp beräknas radien till bollens mittpunkt. Radiens storlek bestämmer sedan tiden för transition, dvs ju större radie desto kortare transition-tid. Fysikmodellen är kanske inte perfekt med det fungerar hjälpligt.

Övriga uppgifter är ganska rättframma. Jag har försökt använda mig av funktioner som skapar och manipulerar DOM-objekt istället för att bara skriva HTML-taggar direkt i strängar, t ex i Numbers-exemplet med uppbyggnaden av tabellen.

* [Typeof](../../kmom02/typeof/index.php)

* [Numbers](../../kmom02/numbers/index.php)

* [Strings](../../kmom02/strings/index.php)

* [Dice](../../kmom02/dice/index.php)

* [My ball](../../kmom02/myball/index.php)

* [Spelplan med array](../../kmom02/boulderdash/index.php)

* [Dates](../../kmom02/date/index.php)

* [Regexp](../../kmom02/regexp/index.php)

* [Errors](../../kmom02/errorhandling/index.php)

* [Roulette](../../kmom02/roulette/index.php)

### Extra arbete med spelvariant
Jag utgick ifrån exempelkoden och skapade ett litet fungerande spel där man ska leta sig fram igenom en labyrint. Först måste man hämta nyckeln för att låsa upp utgången och sedan ta sig till utgången. På vägen ska man undvika monstren.

För att få till en spelplan i form av en labyrint så skapade jag modulen `maze.js` utifrån en förlaga på stackoverflow. Den genererar en labyrint som är unik varje gång. Sedan slumpas placeringarna av nyckeln och utgången. Där placeras också två monster som är CSS-sprites animerade mha `setInterval()`. Kommer man för nära någon av dem så blir det game over. AI:n för monstren är mycket primitiv. De går rakt fram tills det tar stopp, sedan byter de riktning. Därför går det att lurpassa i dörröppningar för att smita förbi dem och tar man sats går de att springa rakt igenom. Ett äkta retrospel ska ha lite glitchar.

Lyckas man ta sig till utgången laddas spelet om med en ny labyrint. Med mer tid skulle man kunna utveckla spelet mer med highscore och stigande svårighetsgrad. Sedan funderar jag på om det finns något bättre sätt att få till sprite-kollisioner än att som nu beräkna närheten mellan objekten.

Jag har testat spelet i flertalet webbläsare och olika system och det fungerar i de flesta. Det strular dock lite i Chrome på vissa Windows-system där det inte alltid går att plocka upp nyckeln eller kliva genom utgången. Det kan hjälpa att köra i helskärmsläge. Spelet fungerar bra i Firefox och övriga läsare i den mån jag har kunnat testa.

### Extra arbete med roulettespelet
Jag snyggade till spelet genom att laborera lite mera med grafiken. Jag lade till en bild på ett roulettehjul som är animerat med keyframes. Klickar man på hjulet så börjar det snurra och spelet går igång. I övrigt har jag lagt till kontroller som förhindrar fortsatt spel när pengarna är slut och att det inte går att satsa mer än man har på kontot.

[Upp](#)
