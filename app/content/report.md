[Kmom01](#Kmom01) | [Kmom02](#Kmom02) | [Kmom03](#Kmom03) | [Kmom04](#Kmom04) | [Kmom05](#Kmom05) | [Kmom06](#Kmom06)

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

* [Mall](../../../kmom01/kmom01/template/index.php)

* [Resize element](../../../kmom01/kmom01/resize-element/index.php)

* [Move baddie](../../../kmom01/kmom01/move-sprite-css3-transitions/index.php)

* [Transform  and transition with CSS](../../../kmom01/kmom01/css3-transforms-transitions/index.php)

* [Somersault](../../../kmom01/kmom01/somersaultx2/index.php)

I Hello World-exemplet har jag lagt till en `parseInt()` på det inmatade värdet för att jämförelsen av det slumpade numret och den inmatade siffran ska kunna jämföras med `===`. Annars jämförs ett tal med en sträng. Förlagan använder `==` men det gillas ju inte av JSLint.

Jag har lagt till den styrbara baddien på [Lekplatssidan](ckmom/kmom01) för att öva lite på att få in JS-kod i ramverket, utöver de fristående exemplen. Övriga exempel finns också länkade från sidan men öppnas utanför ramverket.

### Baddien och dess konster
Som sagt, jag följde exemplen så min baddie gör samma sak som dessa. Jag laborerade lite med koden för att förstå hur den funkar. Jag gjorde en egen variant av baddie-spriten i Inkscape.

Jag noterade att det finns något som heter keyframes i CSS3 och det kanske är en bättre teknik att använda för animeringar än transform? Det kan ju vara något att sätta sig in i mera under våren.

### Extrauppgift
Jag lyckades få baddien att göra en [dubbel saltomortal framåt](../../../kmom01/kmom01/somersaultx2/index.php) genom att kombinera funktioner i fransform. Det krävde lite laborerande att få till en någorlunda jämn volt men jag tycker att den blev bra till slut.

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

* [Typeof](../../../kmom02/kmom02/typeof/index.php)

* [Numbers](../../../kmom02/kmom02/numbers/index.php)

* [Strings](../../../kmom02/kmom02/strings/index.php)

* [Dice](../../../kmom02/kmom02/dice/index.php)

* [My ball](../../../kmom02/kmom02/myball/index.php)

* [Spelplan med array](../../../kmom02/kmom02/boulderdash/index.php)

* [Dates](../../../kmom02/kmom02/date/index.php)

* [Regexp](../../../kmom02/kmom02/regexp/index.php)

* [Errors](../../../kmom02/kmom02/errorhandling/index.php)

* [Roulette](../../../kmom02/kmom02/roulette/index.php)

### Extra arbete med spelvariant
Jag utgick ifrån exempelkoden och skapade ett litet fungerande spel där man ska leta sig fram igenom en labyrint. Först måste man hämta nyckeln för att låsa upp utgången och sedan ta sig till utgången. På vägen ska man undvika monstren.

För att få till en spelplan i form av en labyrint så skapade jag modulen `maze.js` utifrån en förlaga på stackoverflow. Den genererar en labyrint som är unik varje gång. Sedan slumpas placeringarna av nyckeln och utgången. Där placeras också två monster som är CSS-sprites animerade mha `setInterval()`. Kommer man för nära någon av dem så blir det game over. AI:n för monstren är mycket primitiv. De går rakt fram tills det tar stopp, sedan byter de riktning. Därför går det att lurpassa i dörröppningar för att smita förbi dem och tar man sats går de att springa rakt igenom. Ett äkta retrospel ska ha lite glitchar.

Lyckas man ta sig till utgången laddas spelet om med en ny labyrint. Med mer tid skulle man kunna utveckla spelet mer med highscore och stigande svårighetsgrad. Sedan funderar jag på om det finns något bättre sätt att få till sprite-kollisioner än att som nu beräkna närheten mellan objekten.

Jag har testat spelet i flertalet webbläsare och olika system och det fungerar i de flesta. Det strular dock lite i Chrome på vissa Windows-system där det inte alltid går att plocka upp nyckeln eller kliva genom utgången. Det kan hjälpa att köra i helskärmsläge. Spelet fungerar bra i Firefox och övriga läsare i den mån jag har kunnat testa.

### Extra arbete med roulettespelet
Jag snyggade till spelet genom att laborera lite mera med grafiken. Jag lade till en bild på ett roulettehjul som är animerat med keyframes. Klickar man på hjulet så börjar det snurra och spelet går igång. I övrigt har jag lagt till kontroller som förhindrar fortsatt spel när pengarna är slut och att det inte går att satsa mer än man har på kontot.

[Upp](#)

<a id="Kmom03" class="anchor"></a>Kmom03: Grunderna i jQuery
--------------------------------
Jag hade inga som helst erfarenheter av jQuery innan detta kursmoment men efter att ha lekt runt en hel del så känns det väldigt användbart och lite roligare än ren JavaScript. Det går betydligt snabbare att få till fungerande saker.

Det var inga direkta svårigheter med att efterlikna exemplen utan att titta på koden. Kurslitteraturen, jQuery-dokumentationen och stackoverflow gav svar på eventuella frågor. Det enda av exemplen som tog lite mera tid var slideshowen men jag fick till en okej sådan också tycker jag. Mina övningar finns under [Kmom03](ckmom/kmom03) på min kurssida.

Jag tycker som sagt att jQuery känns bra och kommer garanterat att använda mig av det i fortsättningen. Jag kan uppleva att koden blir lite rörig ibland men det kanske inte är jQuerys fel egentligen. Det handlar kanske mera om att jag måste hitta ett smart sätt att strukturera och organisera min JS-kod.

### Min plugin: The Lightbox Gallery
Jag har gjort en plugin som kombinerar funktionerna lightbox och galleri. Den läser in en lista med bildlänkar och bygger upp ett galleri av de ingående bilderna. Den väljer första bilden automatiskt att visa i större format. Sedan kan man klicka på de små bilderna för en större version. Klickar man sedan på den stora bilden så visas den i full storlek i en lightbox som lägger sig över sidan. Man klickar på bilden eller trycker på escape-tangenten för att stänga den.

Pluginen skapar sina egna element och stylar dessa så att ingen extra CSS-fil behövs. Det enda man behöver göra är att lägga till en div med rätt id och en lista på filer i attributet data-images, sedan sköter pluginen resten.

Det går även att anropa endast lightbox-funktionen för godtyckliga bilder.

##### Egen sida för pluginen
Jag har gjort en egen sida för pluginen där man kan se hur den fungerar. Jag lade lite extra tid på att styla sidan för att försöka få den att ”se ut som ett proffsjobb”. Där finns även länkar för nedladdning, i form av zip-set eller länk till Github-repot. Slutligen finns en instruktion för hur man gör för att få den att fungera.

[The Lightbox Gallery](plugin)

[Upp](#)

<a id="Kmom04" class="anchor"></a>Kmom04: AJAX och JSON med jQuery
--------------------------------
Det här kursmomentet såg till en början ganska lätt ut men det blev hemskt tidsödande ändå. Det tog inte så lång tid att göra övningen men att integrera webbshopen i Anax MVC blev svårare än jag trodde.

##### Vad tycker du om Ajax, hur känns det att jobba med?
Ajax känns väldigt enkelt att jobba med. Det känns som att man inte behöver ha så djupa kunskaper för att få just den biten att fungera.

##### Vilka är dina erfarenheter av Ajax inför detta kursmoment?
Jag har inga tidigare erfarenheter av Ajax så det var en ny teknik att sätta sig in i. Jag hade däremot erfarenheter av JSON sedan tidigare i samband med att jag gjorde en iOS-app. Det är ett enkelt format att jobba med eftersom det är läsbart även för en människa. Det gör att det är lätt att tyda och enklare att felsöka när man inte tycker sig få rätt värden.

##### Berätta om din webbshop på din sida, hur gjorde du?
Jag gjorde först en separat sida för webbshopen och fick den ganska enkelt att fungera. jQuery-skriptet hämtar in data till shopen när sidan laddas. Tanken är att det ska funka att hämta från en databas. Jag ville inte hårdkoda in tabellen med artiklar. Vid klick på köpknappen så läggs artikeln till i sessionen och en uppdaterad varukorg returneras till jQuery-skriptet som sedan uppdaterar sidan.

Utcheckningssidan hämtar in summan från sessionen och visar den. Först tappade jag bort sessionen men det löste sig när jag lade checkout-filen i samma mapp som shop-filen. Om jag fattade rätt från mina efterforskningar på stackoverflow så räknas det som olika subdomäner när filerna ligger i olika mappar. Jag känner att jag inte tillräckligt insatt i den problematiken. Jag använde CForm till att bygga upp formuläret. Det krånglade lite för mig men till slut fick jag valideringen att funka. När betalningen lyckas så tas sessionen bort.

När jag sedan skulle integrera webbshopen i Anax MVC började jag med att bara köra samma skript i bakgrunden. Det fungerade bra för själva webbshopen. För utcheckningen ville jag dock använda CForm som jag gjort tidigare i Anax MVC till formuläret och då blev det problem både med valideringen och sessionen. Därför bestämde jag mig för att bygga upp sidor och sidkontroller med klasser enligt konstens alla regler. Detta tog mer tid än väntat men till slut så ville det sig. Skam den som ger sig. Klassen ShopController bygger upp webbshopen och klassen CheckoutController hanterar utcheckningen. jQuery-skriptet har jag gjort till en plugin, jquery.jsshop.js.

##### Lyckades du göra extrauppgiften och paketera din kod?
Jag har gjort ett försök till ett separat paket. Det är i princip den fristående övningen jag gjorde. Den kan laddas ner från github [här](https://github.com/helikopterspark/JSShop).

En fungerande demo finns [här](http://www.student.bth.se/%7Ecarb14/javascript/kmom04/JSShop/shoppingcart/shop-frontpage.php).

[Upp](#)

<a id="Kmom05" class="anchor"></a>Kmom05: HTML5 och Canvas
--------------------------------
Detta var ett intressant kursmoment med ett ämne som egentligen kunde ha fyllt en hel kurs. Det var mycket att läsa, även om det var en hel del upprepning i de olika texterna. Sedan hade jag behövt en kurs i linjär algebra också. Det var längesen jag gick i gymnasiet och räknade naturvetarmatte. Det var i alla fall en bra introduktion till vad som går att göra i HTML5 Canvas.

##### Vilka möjligheter ser du med HTML5 Canvas?
Det verkar finnas stora möjligheter för att skapa rörlig grafik på webbsidor. I takt med att datorerna får bättre prestanda och att webbläsarna blir bättre så kan man göra mer och mer avancerade spel och animeringar. Video och mer interaktiva webbapplikationer är andra möjligheter.

##### Hur avancerad gjorde du din spelfysik (om du överhuvudtaget har någon i ditt spel)?
Jag utgick ifrån exempelkoden och lade in vektorer och krafter som objekt. Rymdskeppet i mitt spel använder acceleration och inbromsning. Jag har inte byggt ut fysikmodellen i så stor utsträckning pga att det hade behövts mer tid för att kunna sätta sig in i matematiken. Men jag fick till ett lite mjukare rörelsemönster på rymdskeppet. När man gasar framåt så ökar farten gradvis. Ju högre fart man har desto snabbare förflyttar man sig i Y-led också. Gasar man inte så saktar man in och börjar snart tryckas bakåt av motståndet. Det kan man även utnyttja till sin fördel. Det går inte att backa men genom att släppa på gasen så kan man förflytta sig sakta bakåt.

##### Beskriv och berätta om ditt spel. Förklara hur du använder objekt och prototyper.
Jag har gjort ett litet sidoscrollande spel där man ska manövrera sig igenom en asteroidsvärm. Man styr med piltangenterna, höger, uppåt och nedåt. Antalet asteroider ökar gradvis var femte sekund via en timer-funktion. Det är en utmaning att överleva över en minut. Spelet ligger [här](game).

Jag utgick från en förlaga i boken Foundation HTML5 for Games and Entertainment av Rob Hawkes. Förlagan var dock inte uppbyggd med moduler och prototyper och hade ingen fysikmodell att tala om.

Jag lade till objekt för Vector och Forces enligt övningen, liksom koden för tangentavkänning. Det blev lite problem att få till ````preventDefault()```` och att gömma muspekaren, framförallt i Firefox, men det ser ut att fungera nu när jag testar.

För asteroiderna skapade jag objektet Asteroid och lade dess funktioner i prototypen. Spelet skapar en array med asteroid-objekt. Varje asteroid får en slumpartad storlek, placering och hastighet. Sedan ritas asteroiderna upp vid sidan av den synliga canvas-ytan för att sedan förflyttas in från höger för varje frame. De olika storlekarna och hastigheterna ger en viss 3D-känsla även om alla ligger i samma plan och således går att krocka med. En funktion för kollisionsdetektering med rymdskeppet finns också. Den anropas för varje asteroid varje gång gameloopen körs.

För att öka känslan av sidoförflyttning har jag lagt in en scrollande bakgrundsbild. Lyckas man överleva så pass länge att man kommer till slutet på bilden (1920 pixlar bred) så loopas den.

Rymdskeppet är ett Player-objekt som skapas ungefär som objektet i övningen. Det får en vektor för positionen och några krafter. Det har dock lite enklare förflyttning. Alltför avancerad fysik i förflyttningen hade nog gjort spelet för alltför svårt när det börjar bli många asteroider. Alla funktioner för Player ligger i prototypen.

Prestanda varierar lite mellan olika webbläsare. Bäst fungerar det i Chrome och sämst i Safari på min Mac, Firefox däremellan. I Safari hackar grafiken till lite och ljudet laggar. Chrome verkar vara bättre optimerat för HTML5 Canvas.

##### Gjorde du något på extrauppgiften?
Jag har lagt till ljud. Det var enkelt jämfört med övriga kodandet. Det finns tre ljud där varje ljud finns i en ogg-variant och en mp3-variant. Ett ljud för bakgrundsmusik, ett för raketmotorn och ett för smällen vid game over. Bakgrundsmusiken loopas liksom raketljudet. Raketljudet börjar spelas när man gasar och pausas när man släpper tangenten. Ljuden hittade jag på [www.freesound.org](http://www.freesound.org/) och de är gratis att använda.

[Upp](#)

<a id="Kmom06" class="anchor"></a>Kmom06: HTML5 och Websockets
----------------------------------------
Sista kursmomentet innan projektet är avklarat och det var väldigt intressant och roligt att sätta sig in i server-programmering.

##### Vilka möjligheter ser du med HTML5 Websockets?
Jag ser fler möjligheter än att bara skicka textmeddelanden. Multiplayer-spel i HTML5 Canvas till exempel. Tack vare bra prestanda så borde det passa de flesta realtidstillämpningar man kan tänka sig. Jag är nyfiken på om det till och med funkar med snabbare actionspel. Jag har inte riktigt bestämt mig för vad jag ska göra som projekt än men en tanke just nu är att göra någon form av multiplayer-spel.

##### Vad tycker du om Node.js och hur känns det att programmera i det?
Node.js verkar enkelt och bra, det var betydligt lättare att programmera en server än vad jag hade förväntat mig. Det går förhållandevis snabbt att skriva en enkel server och det har varit ett strulfritt kursmoment.

##### Beskriv hur du löste echo-servern och broadcast-servern.
Jag utgick ifrån koden i övningen. Jag valde att kombinera echo-servern och broadcast-servern i samma server. Beroende på vilket protokoll som anges i anslutningen så blir klienten ansluten till echo eller broadcast. I övrigt händer inget avancerat. Via ett listval kan man ansluta till mina servrar på nodejs1 eller nodejs2, samt Mikaels server på dbwebb.se.

##### Beskriv och berätta om din chatt. Förklara hur du byggde din chatt-server och förklara protokollet.
Jag utgick ifrån broadcast-servern i övningen och byggde ut den med fler meddelandetyper för chattfunktioner. Meddelanden skickas i JSON-format för att kunna inkludera mer data än bara själva textmeddelandet. En array ````broadcastTo```` håller reda på alla anslutningar. Arrayen ````users```` håller reda på namnen i deltagarlistan.

Vid anslutning skickas ett meddelande av typen ````name```` med nickname inkluderat och inträdet i chatten annonseras till alla deltagare.

När ett meddelande av typen ````message```` skickas så sänds det ut till alla deltagare såvida inte en specifik deltagare är angiven i meddelandet. Då skickas det som privat meddelande endast till denne.

Vid namnbyte skickas ett meddelande av typen ````namechange```` vilket innehåller det gamla och det nya namnet. Namnet på ````connection````och namnet i deltagarlistan uppdateras därefter och namnbytet annonseras i chatten.

När en deltagare kopplar ned skickas ett meddelande till alla kvarvarande deltagare.

##### Gjorde du något på extrauppgiften?
Jag lade till några extra funktioner. Jag har inte satt mig in i IRC-protokollet utan gjorde extrafunktionerna efter eget huvud.

Det går att byta namn via en prompt. Namnbytet annonseras i chatten och deltagarlistan uppdateras.

Det är också möjligt att skicka privata meddelanden. Man markerar bara en deltagare i listan och sedan skickas meddelanden endast till denne. Privat meddelande får gul bakgrund i chattfönstret. Jag hade lite problem med att få till avmarkering av vald deltagare, för att kunna skicka till alla. Jag löste det med att lägga till ett osynligt div-element under listan som man kan klicka på för att avmarkera.

[Upp](#)
