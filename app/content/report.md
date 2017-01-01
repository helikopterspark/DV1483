[Kmom01](#Kmom01) | [Kmom02](#Kmom02) | [Kmom03](#Kmom03) | [Kmom04](#Kmom04) | [Kmom05](#Kmom05) | [Kmom06](#Kmom06) | [Kmom07/10](#Kmom0710)

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

<a id="Kmom0710" class="anchor"></a>Kmom 7/10: Projekt och Examination
----------------------------------------

Länk till [spelsidan](http://www.student.bth.se/~carb14/javascript/project/asturan/game.php)

Länk till [produktsidan](http://www.student.bth.se/~carb14/javascript/project/asturan/index.php)

Länk till koden på [github](https://github.com/helikopterspark/asturan)

#### Krav k1: Paketera, presentera och produktifiera
Som projektuppgift valde jag att bygga vidare på spelet jag gjorde i kmom05. Tanken var att göra ett snyggare och bättre spel av det. Målet var att få det att se ut som ett professionellt utvecklat spel istället för en liten programmeringsövning. Det är ett i grunden simpelt shoot-em-up som för tankarna till klassiska C64-spel. Det lämpar sig väldigt bra som webbläsarspel.

Spelet har fått bättre grafik, bättre ljud, bättre prestanda och bättre spelkänsla med förbättrad spelfysik. Sist men inte minst har jag lagt till multiplayer-spel via Websockets och WebRTC. Det har helt enkelt blivit en produkt av det. Det fungerar väldigt bra som en kortare eller längre stunds förströelse och har redan fått positiva omdömen av vänner och bekanta som har testat.

Spelet i sig är mycket enkelt. Man ska flyga mot asteroidsvärmen och undvika att krocka. Till sin hjälp har man en laserkanon att skjuta bort stenar med. Den behöver laddas upp efter varje avfyrning så det gäller att skjuta i rätt stund. Lyckas man träffa tre stenar med samma salva får man extra bonuspoäng. Fysiken fungerar som så att skeppet trycks tillbaka av svärmen och man måste därför gasa sig framåt. Det gäller att gasa och skaffa sig rörelseenergi annars blir även rörelsen i y-led för långsam för att man ska hinna svänga undan för stenarna.

Paketeringen består först och främst av en presentationssida som beskriver vad spelet går ut på, inklusive skärmdumpar från spelet. Sedan beskrivs vilka tekniker som spelet bygger på och framhäver att de senaste webbteknikerna har använts. Installationsinstruktioner finns och länk till källkoden på Github.

Layouten på presentationssidan är gjord i samma stil som själva spelet för att allt ska ha ett enhetligt tema. För skärmdumparna fick jag också användning för min lightbox-plugin som jag gjorde i ett av kursmomenten, [The Lightbox Gallery](https://github.com/helikopterspark/thelightboxgallery). Från presentationssidan tar man sig till spelet via Play now!-knappen.

Själva spelet har också snyggats upp med mer animerad grafik och har ramats in med stylade titelskärmar mellan spelsessionerna. Man har fått en laserkanon att skjuta på asteroiderna med och de exploderar i snyggt animerade explosioner. Även laddningen av lasern har fått en liten animation överst på skärmen. GUI:t har en del effekter gjorda med jQuery och inne i själva spelet är det allra mesta gjort med Canvas för bättre prestanda.

Jag har försökt snabba upp inladdningen av spelets resurser genom att hålla ned antalet filer och baka ihop alla ljudfiler till en stor. Ett par eventhanterare håller koll på inladdningen av bild och ljudfiler så att alla resurser laddas innan titelsidan visas. Bilderna laddas in med hjälp av ett imageLoader-objekt som när alla bilder laddats fyrar av ett CustomEvent, vilket fångas upp av en eventhanterare. Inladdning av ljud beskrivs under krav 4.

#### Krav k2: Ha koll på konkurrenterna och lär av dem
Vill man hitta konkurrenter till ett HTML5-spel så finner man säkert ett oräkneligt antal. Hur de konkurrerar med varandra kan också diskuteras förutom att de konkurrerar om potentiella spelares tid. Hur som helst så finns det portaler som samlar flertalet spel. Ett exempel är t ex [itch.io](https://itch.io/games/html5/tag-space) där man hittar spel i olika kategorier. Jag har länkat till kategorin Space och där finner man allt från väldigt enkla spel till mer avancerade med 3D-grafik. Mitt spel hade mycket väl kunnat inkluderas där och inte gjort någon dålig figur.

En fördel med mitt spel är att det inte bygger på något tungt ramverk, såsom Unity. Detta gör spelet snabbladdat och det blir inte så tunga beroenden som dessutom kan leda till kompabilitetsproblem vid uppdateringar.

Det mitt spel saknar och skulle kunna utökas med är fler olika typer av objekt som möter spelaren. Man skulle kunna tänka sig power-ups som ger kraftigare kanon eller sköldar. Ett klassiskt inslag som saknas är bossar att bekämpa vid lämpliga intervaller. Allt detta får ingå i utvecklingsplanen för nästa version.

Ytterligare en sak att förbättra är egen ljuddesign, med originalmusik och egna unika ljudeffekter. De public domain-ljud jag använt riskerar ju att dyka upp i andra spel. Detsamma gäller grafiken men där skulle jag behöva anlita någon mer kunnig.

Börjar man leta efter multiplayer-spel så finns det också en uppsjö, se t ex [multiplayernow.com](https://multiplayernow.com). Tittar man närmare på vissa så använder de i regel websockets. Ett som jag fastnade för är [vanar.io](https://multiplayernow.com/games/vanario). Det skiljer sig lite som spel men där finns asteroider och andra spelare att skjuta på. Det är dock inte peer-to-peer och använder sig inte av WebRTC. Faktum är att det är tunnsått med spel där tekniken används och därför är det en viktig sak att lyfta fram med mitt spel. Jag har dock hittat ett som ser väldigt bra ut, [CubeSlam](https://www.cubeslam.com/tech). Det använder sig av WebRTC och även WebAudio och WebGL.

Så ytterligare en sak man skulle kunna tänka sig i nästa version är WebGL och 3D men då kanske det vore bättre att börja om med ett helt nytt spel. 2D har sin retro-charm.

Jag har valt att inte lägga upp någon analys av konkurrenter på produktsidan då detta vore malplacerat och rent av lite osnyggt. Det kanske lämpar sig när man ska sälja ERP-system men känns inte applicerbart på en spelpresentation. Jag har istället försökt skriva lite säljande text som hypar spelet och teknikerna det bygger på, plus en teaser om vad som kommer i en framtida version.

#### Krav k3: Kvalitet och omfattning
Jag har som sagt byggt vidare på spelidén från kmom05 men har gjort en väldigt omfattande omarbetning och utökning av kod och funktioner. Projektet får anses som mer omfattande och har krävt avsevärt mer än 80 timmar att genomföra. Ett mål var att inkludera samtliga tekniker som förekommit i kursmomenten och dessutom lägga till några ytterligare. Slutresultatet är kod som väsentligen skiljer sig från koden som finns i kursmomenten och dessutom använder sig av "the bleading edge"-teknik för ljud och peer-to-peer-uppkoppling.

Koden innehåller exempel på alla tekniker som behandlats kursmomenten. Förutom ren Javascript så ingår:

* jQuery, används flitigt till att manipulera DOM-objekt i GUI:t dvs skärmtexter, chattfönster med mera.

* AJAX och JSON, används till att hantera hiscore-listan och inladdning av multiplayer-modulen.

* HTML5 Canvas, används till animeringar, sprites och övrig spelgrafik.

* Prototypbaserad programmering, har använts för de olika spelobjekten.

* Websockets och Node.js, används till Game-lobbyn, gruppchatt och som signaleringsserver för WebRTC.

* WebAudioAPI, används till ljudhantering för bättre ljudprestanda.

* WebRTC, används till att skapa en peer-to-peer-uppkoppling mellan spelare, för synk av spelet och privat chatt.

De två sistnämnda teknikerna är relativt nya. WebAudioAPI är någorlunda väldokumenterat och var inte så svårt att sätta sig in. WebRTC är å andra sidan en teknik som fortfarande är under utveckling och därmed knapphänt dokumenterad. Se t ex MDN:s föga uttömmande [artikel](https://developer.mozilla.org/en-US/docs/Games/Techniques/WebRTC_data_channels) i ämnet. Lägg därtill att tekniken är krånglig att förstå. Det har varit en krävande uppgift att ens få första uppkopplingen mellan webbläsare att fungera då det varit svårt att hitta fungerande exempel på webben.

#### Krav k4, k5, k6: Valbart krav (optionellt)

###### Ljudhantering med WebAudioAPI (k4)
Att lägga till ljud med ```<audio>```-taggen är visserligen enkelt men ger dålig prestanda när flera ljud ska spelas upp samtidigt och på givna händelser. Det märks tydligt i spelet i kmom05 och allra mest i Safari där ljudet ibland är en sekund efter.

Efter lite sökande på nätet om hur man får bättre prestanda så hittade jag flera bra artiklar om WebAudioAPI och byggde upp ljudhanteringen med hjälp av detta API. API:t ger stora möjligheter att skapa och manipulera ljud. En bra första artikel är [Getting Started with Web Audio API](https://www.html5rocks.com/en/tutorials/webaudio/intro/).

Först skapas en instans av AudioContext. Sedan kopplas ljud till denna instans som destination för uppspelning. Ljud laddas in, dekodas och man får en AudioBuffer som spelar upp ljudet. För att sätta volymnivån på respektive ljud så kopplas det till en GainNode. Man kan ha flera GainNodes för att kunna ställa inbördes volym mellan ljuden. Jag har valt att låta alla ljud gå via en mastervolym och det finns en slider under spelfönstret där volymnivån kan ändras av användaren. Under spelets gång kan volymen ställas med tangenterna 1 (höja) och 2 (sänka).

Med alla ljud laddade är det lätt att spela upp lämpligt ljud vid en händelse, t ex vid en explosion. Jag hade lite problem med att ljudet för raketmotorn spelades upp hela tiden och i lager på lager efter varje gång spelaren gasar. Jag fick lösa detta genom att låta det ljudet spela hela tiden men med volymen på noll. När spelaren gasar så höjs bara volymen och sänks igen när spelaren släpper tangenten (ungefär så som en analog synthesizer fungerar).

Det finns fler möjligheter med API:t att skapa egna ljud och lägga på filter och effekter. Jag har dock valt att hämta färdiga ljud gratis från freesound.org och de är listade i README.md.

För att snabba upp och förenkla inladdningen av alla ljudfiler så har alla ljuden konkatenerats till en enda fil med hjälp av ett Python-skript. Filen packas sedan upp och delas upp i flera ljudobjekt efter inladdning. Jag har utgått från ett exempel på [Loading sound files faster using Array Buffers and Web Audio API](https://www.clicktorelease.com/blog/loading-sounds-faster-using-html5-web-audio-api), där jag också lånade Python-skriptet. Fördelen med detta är att färre anrop behöver göras till servern och alla ljud laddas i ett svep.

Jag har också använt ett paket för att hantera vendor-prefix för WebAudioAPI; AudioContext MonkeyPatch.

Stödet för WebAudio i olika webbläsare varierar men jag tror alla moderna läsare klarar av det. Safari är återigen den läsare som kan krångla lite. Ibland behöver man ladda om sidan en gång efter första inladdning för att få något ljud alls. Övriga läsare har dock fungerat bra så långt jag har kunnat testa. På det hela taget fungerar ljudet utmärkt med WebAudioAPI:t.

###### Game-lobby med Websockets (k5)
Ett första steg för ett multiplayer-spel är en server att ansluta till för att kunna hitta andra spelare. Därför finns en node.js/Websocket-server med en game-lobby, rumshantering och gruppchatt.

När användaren klickar på Multiplayer-knappen så laddas modulen multiplayer in och ```multiplayer.start()``` ansluter webbläsaren till websockets-servern. Vid lyckad anslutning visas game-lobbyn. Den består av ett fönster med en lista över rum (Sector 1 - 8) och ett chatt-fönster. I chatten kan anslutna spelare chatta med varandra och hitta någon att spela med.

För att dra igång ett spel väljer man ett rum i listan och klickar på Join. Servern håller reda på antalet spelare i respektive rum. Vill man lämna ett rum klickar man på Cancel. Ytterligare ett klick på Cancel tar spelaren tillbaka till startskärmen. När två spelare valt samma rum upprättas en anslutning dem emellan via WebRTC och spelet startar. Websockets-servern fungerar då som signaleringsserver för WebRTC-uppkopplingen.

För Websockets har jag använt paketet websocket ([theturtle32/WebSocket-Node](https://github.com/theturtle32/WebSocket-Node)). Först byggde jag servern på socket.io men tyckte att det paketet verkade väldigt tungt att ladda ned med en hel drös av kataloger och filer. Socket.io har visserligen stöd för äldre tekniker att falla tillbaka på om websockets inte stöds, men eftersom multiplayer-spelet bygger på WebRTC så krävs det ändå en modern webbläsare med stöd för de senaste teknikerna. Websocket är smidigare och fullt tillräckligt för den funktionalitet servern har. Filen server.js innehåller server-koden och startas med ```node server.js```.

Websockets-servern kommer att vara igång på studentservern (nodejs2) i en tmux-session. Risken finns förstås att servern går ned om något sker med studentservern, så att websockets-servern måste startas om. Alternativt går det att testa genom att göra en installation i en egen node-miljö.

###### Multiplayer Peer-to-peer via WebRTC (k6)
Min första plan var att bygga ett multiplayer-spel enbart med websockets, där servern skulle styra spelet och förmedla styrkommandon och asteroidpositioner till spelarna. Fördelen med en sådan auktoritär server är att det är svårare för klienter att fuska. Det visade sig snart att prestandan blev alltför dålig för denna typ av spel och idén med en auktoritär spelserver via websockets föll. Jag var nära att ge upp multiplayer-delen på grund av detta men fick upp ögonen för WebRTC och dess peer-to-peer-uppkoppling. WebRTC-tekniken är främst tänkt för ljud och video-överförning direkt mellan två webbläsare men den innehåller även en datakanal för överföring av data och text. Förutom till chatt så kan den användas just för spel. En stor fördel med tekniken är att man kan välja snabbast möjliga överföring med "unreliable datachannels" motsvarande UDP.

WebRTC är fortfarande en ny och omogen teknik som dessutom utvecklas och förändras mycket. Lägg därtill att inte alla webbläsare stöder tekniken än. I skrivande stund har Chrome, Firefox och Opera stöd för WebRTC. Edge har delvis stöd medan IE och Safari inte har det. Så som ett första steg har jag lagt in en s k Feature detect (```if ( !navigator.getUserMedia )```) för att kolla om webbläsaren har WebRTC-stöd. Finns inte detta så går det inte att logga in i spellobbyn, då får man hålla sig till singleplayer.

Har man väl loggat in i spellobbyn och två spelare ansluter sig till samma rum så startas signaleringen dem emellan. Den första spelaren, initiatorn, skickar ett erbjudande om en peer-to-peer-uppkoppling via WebRTC som den andra spelarens webbläsare svarar på. För att det ska fungera genom olika nätverk med brandväggar etc så går signaleringen via en s k STUN-server. Om man inte har en egen sådan kan man använda en Google-server för detta, vilket jag har gjort. Att få denna uppkoppling att fungera har varit den enskilt svåraste saken att lösa i detta projekt. Merparten av de exempel jag har hittat på webben har varit utdaterade och icke-fungerande. Under arbetets gång dök det dock upp en Google codelab som faktiskt visade sig fungera. Den bygger visserligen på socket.io men med den som utgångspunkt så lyckades jag få till uppkopplingen. Det kändes som en stor seger när webbkonsolen till slut rapporterade en lyckad uppkoppling.

Med fungerande peer-to-peer-uppkoppling och en öppen datakanal kunde jag börja bygga kommunikationsprotokollet för spelet. Meddelanden mellan webbläsarna skickas alltså som text via datakanalen. Den spelare som går in först i ett spelrum blir initiator och dennes webbläsare kommer att agera som spelserver och styra asteroidsvärmen.

Det första som sker när datakanalen öppnas är en latency-mätning där webbläsarna utbyter ett antal ping-pong-meddelanden. Medelvärdet används sedan för att synka asteroiderna någorlunda i den webbläsare som agerar klient.

När bägge spelarna tryckt på mellanslagstangenten och signalerat att de är redo så startas spelet. I gameloopen skickar initiatorn löpande data om asteroid-objektens storlek, position och hastighet. Klienten tar emot dessa meddelanden och synkar sina asteroid-objekt. Bägge spelarnas webbläsare skickar meddelanden om sina positioner och om de avfyrar laserkanonen. Spelarna kan skjuta ner varandra. Positionsmeddelandena skickas med högre frekvens än asteroid-meddelandena. Vid krock med en asteroid eller träff med lasern så blir det game over för den spelaren. Spelomgången fortsätter dock med den kvarvarande spelaren och initiatorn fortsätter att styra asteroid-objekten, även om den spelaren inte längre är kvar på skärmen. Spelomgången pågår tills bägge spelarna kraschat.

Vid avslutad spelomgång visas en skärm där spelarna kan chatta privat via datakanalen och ett nytt spel kan startas. WebRTC-uppkopplingen och datakanalen är fortfarande öppen. Väljer någon av spelarna att avsluta så stängs också datakanalen och uppkopplingen.

På det hela taget fungerar multiplayer-delen bra men jag har inte haft möjlighet att testa utanför mitt eget nätverk och jag antar att det blir problem om spelarna sitter långt ifrån varandra och latencyn blir för hög. Jag skulle rekommendera att spelarna sitter inom samma nätverk eller på väldigt snabba uppkopplingar. När det gäller att synka multiplayer-spel över nätet så verkar det vara en hel vetenskap. Jag har bara skrapat på ytan i det här projektet och jag kanske har gjort det onödigt svårt för mig med ett så pass snabbt spel. Ett strategispel hade varit enklare och hade kanske lämpat sig bättre.

Lite enkel felhantering vid uppkopplingsproblem finns. Om en datakanal inte kan upprättas så får spelarna ett meddelande om detta. Vid plötslig nedkoppling från någon sida så avbryts spelet med en dialogruta. Det är websocketsservern som känner av om en spelare försvinner och då skickar ett meddelande om detta till den andra deltagaren i rummet. Detta visade sig vara en mer pålitlig metod än att känna av om datakanalen eller peer-to-peer-uppkopplingen förloras, då detta inte alltid verkar noteras av webbläsaren.

Datakanalen ska vara krypterad men huruvida denna typ av uppkoppling öppnar några andra säkerhetshål har jag valt att inte sätta mig in i.

#### Projektet och genomförande
Projektet har i princip bestått av två delar. Den första delen var singleplayer och den flöt på relativt enkelt och bra. Det var också den roliga och mest kreativa delen. Jag kunde bygga vidare på den grund jag hade och utöka med nya idéer. Ljudet var den delen som först kändes problematisk men WebAudio var inte så svårt att sätta sig in och få att fungera. Canvas och animeringar har varit väldigt roligt och givande att sätta sig in i och jag är ganska imponerad av möjligheterna som finns.

Svårigheterna uppstod med multiplayer-delen. Det gick snabbt och bra att få till game-lobbyn men själva spelet visade sig bli mycket svårt få ordning på. Websockets-server gick som sagt bort och WebRTC har varit helvetiskt frustrerande att sätta sig in och få att fungera. Det har tagit väldigt mycket tid i anspråk och orsakat mycket vånda. Flertalet gånger har jag varit nära att ge upp multiplayer-delen helt. Det finns fortfarande många saker kvar att förbättra i denna del. Men jag måste ändå säga att jag är ganska nöjd med det resultat jag har nått så långt.

Det som återstår att göra är en hel del refactoring och mer separation av koddelar. Filen main.js känns aningen rörig och kanske lite för stor. Spelet och koden har liksom vuxit organiskt från ett singleplayer-spel till att innehålla en multiplayer-del. Det vore bra att försöka separera koden lite mer logiskt i fler filer. Jag hittar visserligen i koden själv men det kan bli krångligt för någon annan att göra det. Så där finns potential för vidare förbättringar.

Projektuppgiften i den här kursen är ju väldigt fri vilket ger utrymme för kreativitet. Jag har valt att bara köra på enligt eget huvud och bygga något som jag själv har ansett vara givande. Projektet blev därmed lite överambitiöst med alla dess ingående delar och svårighetsgrad. Men nu när det väl är avklarat så har det såklart varit berikande både kunskapsmässigt och för känslan att klara av något svårt.

Men samtidigt har jag upplevt att projektinstruktionen inte är speciellt tydlig vilket gör det oklart om vad som förväntas och hur det bedöms. Jag hade önskat lite tydligare formulerade krav vad gäller omfattning och teknisk nivå. En sak jag inte är överens med är Krav 2. Det återknyter inte till någon del i kursmomenten och känns nästan som att det hör hemma i någon annan kurs. Jag hade helst sett att det fick ge vika till förmån för något tekniskt krav. Åtminstone känns det felplacerat bland projektkraven och borde ligga som det sista optionella kravet. Alternativt ge det betydligt mindre vikt än ett enskilt krav på hela 10 poäng och baka in det i produktifieringskravet.

#### Kursen
Kursen är diger och ambitiös med de olika tekniker som kursmomenten behandlar. Det är nästan i mesta laget och någon viss röd tråd saknas. Men för den som verkligen går in för det så ger den breda och användbara kunskaper för vidare Javascript-programmering. HTML5 Canvas, jQuery och Websockets har varit de mest intressanta och givande delarna för mig. De har lett vidare till de tekniker (WebAudio, WebRTC) jag har använt i projektuppgiften. Det som behöver styras upp i viss mån är projektuppgiften. Den behöver tydligare krav och bedömningskriterier. Jag hade också gärna sett att projektet tydligt samlar ihop de tekniker som berörts i kursmomenten.

En risk när en kurs innehåller så mycket och går fort fram är att saker lärs in slarvigt eller fel. Då skaffar man sig dåliga programmeringsvanor som sedan blir svåra att lära sig av med. Det är ju just den akademiska biten om vad som är rätt och fel eller best practice som man vill lära sig på högskolan. Så lite mer fokus på vad som är bra och dålig kod kanske borde ingå i kursmomenten och inte bara hänvisa till Crockfords böcker.

Jag började från noll med språket och kan efter kursmomenten och projektuppgiften konstatera att jag faktiskt lärt mig att bygga något större och fungerande i språket. Det beror förstås på min egen ansträngning men avstampet har skett utifrån kursens innehåll. Tidigare programmeringsvana i annat språk är förstås ett krav för att ta sig igenom kursen. När det gäller handledning har jag ställt några korta frågor i chatten, i övrigt har jag löst problem på egen hand.

Jag skulle kunna tänka mig att rekommendera kursen till någon som redan är ganska erfaren programmerare och snabbt vill lära sig flertalet tekniker i JavaScript. Man kan få med sig många kunskaper från kursen om man anstränger sig. Jag ger kursen en 7:a av 10 i betyg och det som drar ned betyget är tidigare nämnda brister i projektuppgiften.

[Upp](#)
