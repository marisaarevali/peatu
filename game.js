const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update

});



function preload() {
    game.load.image('teavasJaPilved', 'assets/taevasjapilved.png');

    game.load.image('majadJaTee', 'assets/majadjatee.png');
    game.load.image('majadLompidega', 'assets/majadlompidega.png');
    game.load.image('majadLumine', 'assets/majadlumine.png');
    game.load.image('maa', 'assets/maa.png');
    game.load.image('maaLombid', 'assets/maalombid.png');
    game.load.image('maaLumine', 'assets/maalumine.png');

    game.load.image('kiiruseM66dik', 'assets/kiirusem66dik.png');
    game.load.image('kiiruseM66dik_Must', 'assets/kiirusem66dik_must.png');


    game.load.image('asfaltGradient', 'assets/asfalt_gradient.png');
    game.load.image('lumiGradient', 'assets/lumi_gradient.png');
    game.load.image('vihmGradient', 'assets/vihm_gradient.png');


    game.load.image('alumineMenuu', 'assets/alumine.png');
    game.load.image('car', 'assets/car_r.png');
    game.load.image('kits', 'assets/kast.png');
    game.load.image('kits2', 'assets/takistus2.png');
    game.load.image('kits3', 'assets/takistus3.png');
    game.load.image('hyyumark', 'assets/hyyumark.png');
    game.load.image('kiiruseNupp', 'assets/nupp.png');


    game.load.image('lipp', 'assets/lipp.png');
    game.load.image('lippMust', 'assets/lipp_must.png');

    game.load.image('l6pulause', 'assets/tagasiside.png');
    game.load.image('l6pulause2', 'assets/tagasiside1.png');

    game.load.image('avaleht', 'assets/avaleht.png');
    game.load.image('juhised', 'assets/juhised.png');
    game.load.image('l6puTiiter', 'assets/lopp2.png');
    game.load.image('nupuTaust', 'assets/nuputaust.png');
    game.load.image('keeleNupuTaust', 'assets/keelenuputaust.png');

    game.load.audio('breaking_sound', 'assets/audio/pidur.ogg');
    game.load.audio('k2ivitus_sound', 'assets/audio/k2ivitus_l6igatud.ogg');
    game.load.audio('mootoriheli_loop', 'assets/audio/mootoriheli_loop.ogg');
    game.load.audio('driving_sound', 'assets/audio/kiirendusjasoit.ogg');

    // nuppude pildid
    game.load.spritesheet('startStopNupp', 'assets/startstop_nupp.png', 150, 50);
    game.load.spritesheet('uuestiNupp', 'assets/proovinuuesti.png', 200, 51);

    game.load.spritesheet('proovinNupp', 'assets/sinine_nupp.png', 150, 50);
    game.load.spritesheet('jatkanNupp', 'assets/sinine_nupp.png', 150, 50);

    game.load.spritesheet('l6petanNupp', 'assets/lopetan.png', 150, 50);
    game.load.spritesheet('heliNupp', 'assets/helinupp.png', 35, 35);
    game.load.spritesheet('juhisedNupp', 'assets/juhisednupp.png', 35, 35);
    game.load.spritesheet('linkNupp', 'assets/siit.png', 30, 14);
    game.load.spritesheet('linkNuppRUS', 'assets/siit_rus.png', 50, 14);
    game.load.spritesheet('linkNuppENG', 'assets/siit_eng.png', 45, 14);
    game.load.spritesheet('linkNuppLopp', 'assets/l6pulink2.png', 227, 20);



    game.load.spritesheet('teekate_1', 'assets/teekate_nupp.png', 104, 25);
    game.load.spritesheet('teekate_2', 'assets/teekate_nupp.png', 104, 25);
    game.load.spritesheet('teekate_3', 'assets/teekate_nupp.png', 104, 25);

    game.load.spritesheet('teekate_vene1', 'assets/teekate_nupp_vene.png', 133, 25);
    game.load.spritesheet('teekate_vene2', 'assets/teekate_nupp_vene.png', 133, 25);
    game.load.spritesheet('teekate_vene3', 'assets/teekate_nupp_vene.png', 133, 25);

    //juhiste lehe pisikesed nupud
    game.load.spritesheet('mumm', 'assets/mumm.png', 15, 15);
    game.load.spritesheet('lipuke', 'assets/lipuke.png', 22, 22);
    game.load.spritesheet('juhendistart', 'assets/juhendistart.png', 75, 26);
    game.load.spritesheet('juhendistop', 'assets/juhendistop.png', 76, 26);



    game.load.spritesheet('est', 'assets/est.png', 35, 35);
    game.load.spritesheet('rus', 'assets/rus.png', 35, 35);
    game.load.spritesheet('eng', 'assets/eng.png', 35, 35);

}
keelevalik = 0;
takistuseKaugus = 5000;
var takistusTeke;
lopetanInt = 0;
eiPidurdanudInt = 0;
takistusList = ['kits', 'kits2', 'kits3']

function create() {


    this.game.scale.pageAlignHorizontally = true;//this.game.scale.refresh();



    game.physics.startSystem(Phaser.Physics.ARCADE)




    // mängu aken
    teavasJaPilved = game.add.tileSprite(0, -25, 800, 450, 'teavasJaPilved')


    majadJaTee = game.add.sprite(0, 29, 'majadJaTee')
    for (i = 1; i < 3; i++) {
        majadJaTee.addChild(game.make.sprite(i * 1705, 0, 'majadJaTee'))
    }



    //    majadJaTee.smoothed = false;

    alumineMenuu = game.add.sprite(0, 425, 'alumineMenuu');

    // kastike ymber kiiruse nupukese  ;
    bounds = new Phaser.Rectangle(325, game.world.height - 97, 246, 20);

    /* vajadusel saab kastikiese ka v2lja joonistada:
    var graphics = game.add.graphics(bounds.x, bounds.y);
    graphics.beginFill(0x000077);
    graphics.drawRect(0, 0, bounds.width, bounds.height);
    */


    takistus = game.add.sprite(takistuseKaugus, game.world.height - 270, 'kits')

    kiiruseNupp = game.add.sprite(370.6, game.world.height - 97, 'kiiruseNupp')

    game.physics.arcade.enable(kiiruseNupp)
    kiiruseNupp.inputEnabled = true;
    kiiruseNupp.input.enableDrag(false, false, false, 250, bounds);
    kiiruseNupp.input.allowVerticalDrag = false;

    kiiruseNupp.events.onDragStop.add(dragStop);

    // game.physics.arcade.enable(player)
    game.physics.arcade.enable(majadJaTee)
    game.physics.arcade.enable(takistus)
    mangTekst = game.add.group();
    peatumisTekst = game.add.group();




    startStopNupp = game.add.button(625, 484, 'startStopNupp', actionOnClick_ss, this, 0, 0, 0);
    startTekst = game.add.group();
    startTekst.add(game.make.text(664, 497, "START", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));


    teekate_1 = game.add.button(123, 450, 'teekate_1', onClickTeekate_1, this, 2, 2, 2);
    teekate_2 = game.add.button(123, 484, 'teekate_2', onClickTeekate_2, this, 1, 0, 2);
    teekate_3 = game.add.button(123, 518, 'teekate_3', onClickTeekate_3, this, 1, 0, 2);

    mangTekstFunc();

    //boundsM66dik = new Phaser.Rectangle(375, 360, 425, 65);
    boundsM66dik = new Phaser.Rectangle(375, 360, 385, 65);
    //  vajadusel saab kastikiese ka v2lja joonistada:
    /* 
    var graphics = game.add.graphics(boundsM66dik.x, boundsM66dik.y);
    graphics.beginFill(0x000077);
    graphics.drawRect(0, 0, boundsM66dik.width, boundsM66dik.height); 
    */


    //lipu liigutamine´

    lipuTeke();

    //maaGradientTeke();

    player = game.add.sprite(0, game.world.height - 247, 'car')
    game.physics.arcade.enable(player)

    //Juhised leht
    juhised = game.add.sprite(0, 0, 'juhised')
    game.physics.arcade.enable(juhised)
    jatkanNupp = game.add.button(625, 501, 'jatkanNupp', jatkanClick, this, 0, 0, 0);

    //sprited teksti vahel
    mumm = game.add.sprite(420, 183, 'mumm');
    lipuke = game.add.sprite(562, 228, 'lipuke');
    juhendistart = game.add.sprite(321, 276, 'juhendistart');
    juhendistop = game.add.sprite(488, 325, 'juhendistop');

    juhisedTekst = game.add.group();

    // Avaleht
    avaleht = game.add.sprite(0, 0, 'avaleht')
    game.physics.arcade.enable(avaleht)
    proovinNupp = game.add.button(325, 400, 'proovinNupp', proovinClick, this, 0, 0, 0);
    //esialgu on rakendus eestikeelne
    avalehtTekst = game.add.group();
    avalehtTekst.add(game.make.text(357, 412, "TESTIN!", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    avalehtTekst.add(game.make.text(163, 300, "Kas tead, kui pikk on peatumisteekond autoga sõites?\n Testi oma teadmisi!", { font: "20px Arial", fill: '#000', fontWeight: "500", align: 'center' }))

    // KEELEVALIK
    keeleNupuTaust = game.add.sprite(625, 20, 'keeleNupuTaust')
    est = game.add.button(635, 27, 'est', estClick, this, 1, 1, 1);
    est.inputEnabled = false;
    rus = game.add.button(682, 27, 'rus', rusClick, this, 0, 0, 0);
    eng = game.add.button(728, 27, 'eng', engClick, this, 0, 0, 0);

    this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    // disablen nupud avalehe ja juhiste all
    kiiruseNupp.inputEnabled = false;
    startStopNupp.inputEnabled = false;
    teekate_1.inputEnabled = false;
    teekate_2.inputEnabled = false;
    teekate_3.inputEnabled = false;

    //et avalehel ei saaks jätka vajutada :@
    jatkanNupp.inputEnabled = false;
    this.input.keyboard.enabled = false;

    cursors = game.input.keyboard.createCursorKeys()


    //  Stop the following keys from propagating up to the browser|browser ei liigu allapoole kui spacebari vajutada
    game.input.keyboard.addKeyCapture([Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT, Phaser.Keyboard.SPACEBAR]);

    game.input.keyboard.onPressCallback = function (e) { console.log("key pressed", e); }
    // game.input.keyboard.onPressCallback = function(e){player.body.velocity.x = 350, e;}


    //audio
    breaking_sound = game.add.audio('breaking_sound');
    k2ivitus_sound = game.add.audio('k2ivitus_sound');
    mootoriheli_loop = game.add.audio('mootoriheli_loop');
    driving_sound = game.add.audio('driving_sound');

    kiiruseCalc();
    // et algus oleks heli by default maas
    game.sound.mute = true;
}
//global variabled
// muutujad, vasakul olevatele nupukestele ; nad on kas 1, 2, 3 v6i 4
// by default teevalik = 1 ja rehvivalik = 1  
teeValik = 1;
rehviValik = 1;

// muutujad: efe = kiirus
efe = 10 * 4;

//   kiirus2 = ((kiiruseNupp.body.position.x - bounds.x)/(bounds.width-18)*100)+30;
//    efe = kiirus*4;

tagasisideList = ["jalakäija ja sõiduki kokkupõrkel kiirusel 50 km/h on\njalakäija hukkumise tõenäosus 40%, suurendades kiirust „vaid” 10 km/h\non selleks tõenäosuseks juba 70%?",
    "reageerimisaeg ei ole kõigil 1 sekund? Olenevalt juhi\nvalmisolekust, kogemusest ja keskendumisest võib see varieeruda.",
    "autoroolis sms-i kirjutamisel või lugemisel julgeb juht\nhoida oma pilku teelt ära kuni viis sekundit järjest? Selle aja jooksul liigub\nsõiduk „pimeduses” 50 km/h sõidukiirusel umbkaudu 70 meetrit.",
    "autoroolis sms-i kirjutamisel või lugemisel julgeb juht\nhoida oma pilku teelt ära kuni viis sekundit järjest? Selle aja jooksul liigub\nsõiduk „pimeduses” 90 km/h sõidukiirusel umbkaudu 125 meetrit."];

tagasisideListRUS = ["при столкновении с пешеходом на скорости\n50 км/ч вероятность гибели пешехода составляет 40%? Увеличив\nскорость «всего» на 10 км/ч, эта вероятность составляет уже 70%.",
    "время реагирования не у всех 1 секунда?\nВ зависимости от подготовки, опыта и концентрации водителя оно\nможет варьироваться.",
    "при наборе или чтении SMS за рулем\nавтомобиля водитель осмеливается отводить свой взгляд от\nдороги до пяти секунд подряд? За это время автомобиль\nпроезжает «вслепую» при скорости 50 км/ч приблизительно\n70 метров.",
    "при наборе или чтении SMS за рулем\nавтомобиля водитель осмеливается отводить свой взгляд от\nдороги до пяти секунд подряд? За это время автомобиль\nпроезжает «вслепую» при скорости 90 км/ч приблизительно\n125 метров."]

tagasisideListENG = ["if you hit a pedestrian at 50 km/h, the chances of them\nbeing killed are 40%? However, increase your speed by “just” 10 km/h\nand the chances of them being killed go up to 70%.",
    "not everyone’s reaction time is 1 second? It varies\ndepending on how alert and experienced the driver is and how\nfocused they are on the road.",
    "that drivers will take their eyes off the road\nup to five seconds at the time while texting or reading at the wheel?"
]






var tagasiside;
var autoPositsioon;
var takistusePositsioon;
tekstiStiil = { font: "16px Arial", fill: "black" }; //fontWeight: "bold"};
tekstiStiil2 = { font: "18px Arial", fill: '#000', fontWeight: "500" };
var textGroup;
iter = 0;
autoLiikumine = 1;
taustaLiikumine = 0;
autoPidurdus = 0;
autoFullStop = 0;

heliInt = 1;
juhisedInt = 0;


keelInt = 0;
// kontrolli kas on avaleht
avalehtKontroll = 0;


//Mari lisatud, tagasiside var
proloog = 0;
//lipu asukoha var
ennustus = 0;

// PS!  pidurdus konfitsenti korrutada läbi, sama mida korrutad pixliga e.g. kui 300mpx/s = 100km/h
// siis tuleb 1.5 korrutada ka kolmega, ja saadud teepikkus pixlites jagada kolmega 
// Seega: kui 100mpx/s = 100km/h on konfitsent 1.5


// teeolu konfintsent = oleneb kas afalt, m2rg, lumi, voi kruus
teeolu_var = 1;
// algselt oli 1.5*4
pidurdusKonfitsent = 1.5 * teeolu_var * 4;

efe2 = 0;
efe3 = 0;

//start stop nupu kontroll
startStopInt = 0;
// kas pidurit vajutasid kontroll
pidurdusInt = 0;

function engineSoundStartFunc() {
    mootoriheli_loop.loop = true;
    mootoriheli_loop.play();
}

function engineSoundStopFunc() {
    mootoriheli_loop.stop();
}
function drivingSoundStartFunc() {
    driving_sound.play();
}

function drivingSoundStopFunc() {
    driving_sound.stop();
}

function waitFunc() {
    autoPidurdus = 1;
    autoLiikumine = 0;
}

function kiiruseCalc() { 						// -18 tuleb yle checkkida
    kiirus = ((kiiruseNupp.body.position.x - bounds.x) / (bounds.width - 18) * 100) + 30;
    efe = kiirus * 4;
}

function proovinClick() {
    avaleht.destroy()
    proovinNupp.destroy()
    avalehtTekst.destroy();
    avalehtKontroll = 1;
    jatkanNupp.inputEnabled = true;
    jatkanNupp.input.useHandCursor = true;
    proovinInt = 0;
    juhisedTekstFunc();
}

function jatkanClick() {
    //juhisedNupp.inputEnabled = true;
    jatkanInt = 1;
    juhised.destroy()
    jatkanNupp.destroy()
    keeleNupuTaust.destroy();
    juhisedTekst.destroy();
    est.destroy();
    rus.destroy();
    eng.destroy();
    mumm.destroy();
    lipuke.destroy();
    juhendistart.destroy();
    juhendistop.destroy();
    // funktsioon teekatte nuppude loomiseks, vene keelsel variandil on nupud suuremad, et tekst mahuks ära
    teekateNupuFunc();
    //tekstid mangulehel,nuppudel jms
    mangTekstFunc();

    //tekstikontroll
    avalehtKontroll = 2;
    // juhised ja helinupp
    nupuTaust = game.add.sprite(675, 20, 'nupuTaust')
    game.physics.arcade.enable(nupuTaust)
    heliNupp = game.add.button(685, 27, 'heliNupp', heliClick, this, 0, 0, 0);
    juhisedNupp = game.add.button(730, 27, 'juhisedNupp', juhisedClick, this, 0, 0, 0);
    //juhisedNupp.inputEnabled = false; 

    kiiruseNupp.inputEnabled = true;
    startStopNupp.inputEnabled = true;
    //startStopNupp.input.useHandCursor = true;

    teekate_1.inputEnabled = true;
    teekate_2.inputEnabled = true;
    teekate_3.inputEnabled = true;
    // teekate_4.inputEnabled = true;
    // rehv_1.inputEnabled = true;
    // rehv_2.inputEnabled = true;
    // rehv_3.inputEnabled = true;
    // rehv_4.inputEnabled = true;
    lipp.inputEnabled = true;
    this.input.keyboard.enabled = true;
    setTimeout(engineSoundStartFunc, 800);
    k2ivitus_sound.play();
}

function carStart() {						// -18 tuleb yle checkkida
    kiirus = ((kiiruseNupp.body.position.x - bounds.x) / (bounds.width - 18) * 100) + 30;
    efe = kiirus * 4;
    player.body.velocity.x = efe;
    if (player.body.position.x >= 50) {
        teavasJaPilved.tilePosition.x = teavasJaPilved.tilePosition.x - 0.005 * efe;
        player.body.velocity.x = 0;
        majadJaTee.body.velocity.x = -1 * efe;
        takistus.body.velocity.x = -1 * efe;
    }
}
tyhikuInt = 0;
function tyhikuVajutus() {
    if (this.spaceKey.isDown) {
        tyhikuInt += 1;
    }
}



function update() {

    if (this.spaceKey.isDown && autoLiikumine == 1 && juhisedInt % 2 == 0 || startStopInt == 1 && taustaLiikumine == 0) {
        //    if (this.spaceKey.isDown && player.body.position.x  == 0){
        startStopInt = 1;
        //console.log("startstopint: ", startStopInt);


        // auto k2ivitusheli if
        if (efe2 == 0) {
            startStopNupp.destroy();
            startTekst.destroy();
            peatumisTekst.destroy();

            startStopNupp = game.add.button(625, 484, 'startStopNupp', actionOnClick_ss, this, 1, 1, 1);
            startTekst = game.add.group();
            startTekst.add(game.make.text(664, 497, "STOP", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));


            kiiruseM66dik.destroy();
            lipp.destroy();
            maaGradient.destroy();
            //peatumisTekst.destroy();
            //sõiduajal kaota ära juhiste ja helinupp
            juhisedNupp.destroy();
            heliNupp.destroy();
            nupuTaust.destroy();

            kiiruseNupp.inputEnabled = false;
            //startStopNupp.inputEnabled = false;
            teekate_1.inputEnabled = false;
            teekate_2.inputEnabled = false;
            teekate_3.inputEnabled = false;
            engineSoundStopFunc();
            drivingSoundStartFunc();
            // setTimeout(engineSoundStartFunc, 743);
            // k2ivitus_sound.play();
        }

        //setTimeout(carStart, 1);
        //setTimeout(carStart, 743);

        //console.log("efe2 ja efe3: ", efe2, efe3)

        carStart()
        //player.body.velocity.x = efe;

        efe2 = 1;
        //efe3 = 1; viimati muudeti siin efe3-e
        taustaLiikumine = 1;

        if (iter == 0) {
            takistusTeke = setTimeout(podraTeke, Math.floor(2000 + (Math.random() * 5000)));
            //takistusTeke = setTimeout(podraTeke, Math.floor( 1000));
            iter = 1;
        }

        //setTimeout(carStart, 1);
        // podraTeke()                 
        //carStart()

        // et auto s6idaks ka siis, kui space yleval on peale esimest vajutust
    } else if (taustaLiikumine == 1 && this.spaceKey.isUp && startStopInt < 2) {

        //setTimeout(carStart, 743);
        //setTimeout(carStart, 1);        
        carStart()

        setTimeout(waitFunc, 250);

        otsaSoit();

        // } else if (this.spaceKey.downDuration(10)) {

        // pidurdamise esime "if" ; kui space pidurdamise tarbeks alla vajutada
        // voi klickid pidurit
    } else if (this.spaceKey.isDown && autoPidurdus == 1 || startStopInt > 1 && autoPidurdus == 1) {
        // } else if (this.spaceKey.isDown && autoPidurdus == 1) {

        startStopInt = 2;
        //et peale space pidurdust ei saaks klikkida, et lõputekstid tuleksid alati õiged
        startStopNupp.inputEnabled = false;


        if (taustaLiikumine == 1) {
            pidurdusAlgPunkt = player.body.position.x + 185;
        }

        taustaLiikumine = 2;
        autoFullStop = 1;

        majadJaTee.body.velocity.x = 0;
        takistus.body.velocity.x = 0;



        if (autoPidurdus = !0) {
            efe = kiirus * 1.55;
        }

        efe = efe - (pidurdusKonfitsent / 6);
        player.body.velocity.x = efe;

        // et pidurit ei saaks all l6putult hoida:
        autoPidurdus = 0;

        // kui debugda vaja on, siis vb on vaja neli alumist rida tagasi sisse kommenteerida
        // console.log(efe2, efe3)
        // console.log("majad ja teed: ", majadJaTee.body.velocity.x)                        
        // console.log("Auto sõidetud distants: ", player.body.position.x + 185)       
        // console.log(efe)

        // et soundi m2ngitaks vaid 1 kord, muutub efe2 kohe üheks
        if (efe2 == 1) {
            breaking_sound.play();
            currentTime2 = +new Date();
            heliNupp.inputEnabled = false;

            // setTimeout(engineSoundStopFunc, 1200);
            setTimeout(drivingSoundStopFunc, 1000);
        }
        efe2 = 0;
        clearTimeout(takistusTeke);


    } else if (autoFullStop == 1) {

        otsaSoit();
        // kitse e. takistuse peatumine
        takistus.body.velocity.x = 0;
        majadJaTee.body.velocity.x = 0;

        efe = efe - (pidurdusKonfitsent / 6);
        player.body.velocity.x = efe;

        // kui debugda vaja on, siis vb on vaja neli alumist rida tagasi sisse kommenteerida
        // console.log(efe2, efe3)
        // console.log("majad ja teed: ", majadJaTee.body.velocity.x)
        // console.log("Auto sõidetud distants: ", player.body.position.x + 185)
        // console.log(efe)

        if (efe < 2) {
            autoFullStop = 0;
            player.body.velocity.x = 0;
            //console.log("startstopint: ", startStopInt)
            //console.log("Game Over")
            //console.log("Auto positsioon: ", player.body.position.x + 185, "Kitse positsioon: ", takistus.body.position.x)
            //console.log("Auto kiirus km/h: ", kiirus, "Pidurdus teekond meetrites", (player.body.position.x + 185 - pidurdusAlgPunkt) / 4)
            setTimeout(l6puLause_kuva, 1000);
        }
        autoPidurdus = 0;
    } else if (lipu_var == 1) {
        // m66dustik liigub vasakule
        //if (lipp.x > 708 && kiiruseM66dik.x >= -590) {
        if (lipp.x > 688 && kiiruseM66dik.x >= -630) {
            kiiruseM66dik.x = kiiruseM66dik.x - 3

            // m66dustik liigub paremale
        } else if (lipp.x < 467 && kiiruseM66dik.x <= 409 - 3) {
            kiiruseM66dik.x = kiiruseM66dik.x + 3
        }


    }
}

function teekateValik(tee_var) {
    majadJaTee.destroy();
    player.destroy();
    takistus.destroy();
    lipp.destroy();
    //peatumisTekst.destroy();
    kiiruseM66dik.destroy();
    maaGradient.destroy();
    majadJaTee = game.add.sprite(0, 29, tee_var)
    for (i = 1; i < 3; i++) {
        majadJaTee.addChild(game.make.sprite(i * 1705, 0, tee_var))
    }
    lipuTeke();
    player = game.add.sprite(0, game.world.height - 247, 'car')
    takistus = game.add.sprite(takistuseKaugus, game.world.height - 255, 'kits')

    game.physics.arcade.enable(majadJaTee)
    game.physics.arcade.enable(player)
    game.physics.arcade.enable(takistus)
}
function actionOnClick_ss() {
    startStopInt += 1;
}


function onClickTeekate_1() {
    teeValik = 1;
    teeolu_var = 1;
    pidurdusKonfitsent = 1.5 * teeolu_var * 4;
    if (kiirus >= 51) {
        teekateValik('maa');
    } else {
        teekateValik('majadJaTee');
    }
    teekateNupudDel();
    if (keelevalik == 0 || keelevalik == 2) {
        teekate_1 = game.add.button(123, 450, 'teekate_1', onClickTeekate_1, this, 2, 2, 2);
        //console.log("teekate1 nupp vajutatud")
        teekate_2 = game.add.button(123, 484, 'teekate_2', onClickTeekate_2, this, 1, 0, 2);
        teekate_3 = game.add.button(123, 518, 'teekate_3', onClickTeekate_3, this, 1, 0, 2);
    }
    if (keelevalik == 1) {
        teekate_1 = game.add.button(123, 450, 'teekate_vene1', onClickTeekate_1, this, 2, 2, 2);
        //console.log("teekate1 nupp vajutatud")
        teekate_2 = game.add.button(123, 484, 'teekate_vene2', onClickTeekate_2, this, 1, 0, 2);
        teekate_3 = game.add.button(123, 518, 'teekate_vene3', onClickTeekate_3, this, 1, 0, 2);

    }
    mangTekstFunc();
}

function onClickTeekate_2() {

    teeValik = 2;
    // m2rja asfalti haardetegur ; l6pulause pidurdusteekonna arvutus: ((x*x)/100)*0.55 * (1/0.57)
    teeolu_var = 0.57;
    pidurdusKonfitsent = 1.5 * teeolu_var * 4;

    if (kiirus >= 51) {
        teekateValik('maaLombid');
    } else {
        teekateValik('majadLompidega');
    }

    teekateNupudDel();


    if (keelevalik == 0 || keelevalik == 2) {
        teekate_2 = game.add.button(123, 484, 'teekate_2', onClickTeekate_2, this, 2, 2, 2);
        //console.log("teekate2 nupp vajutatud")
        teekate_1 = game.add.button(123, 450, 'teekate_1', onClickTeekate_1, this, 1, 0, 2);
        teekate_3 = game.add.button(123, 518, 'teekate_3', onClickTeekate_3, this, 1, 0, 2);
    }
    if (keelevalik == 1) {
        teekate_2 = game.add.button(123, 484, 'teekate_vene2', onClickTeekate_2, this, 2, 2, 2);
        //console.log("teekate2 nupp vajutatud")
        teekate_1 = game.add.button(123, 450, 'teekate_vene1', onClickTeekate_1, this, 1, 0, 2);
        teekate_3 = game.add.button(123, 518, 'teekate_vene3', onClickTeekate_3, this, 1, 0, 2);
    }
    mangTekstFunc();
}

function onClickTeekate_3() {
    teeValik = 3;

    // teeolu_var = 1.0/3;
    teeolu_var = 0.2845;
    pidurdusKonfitsent = 1.5 * teeolu_var * 4;

    if (kiirus >= 51) {
        teekateValik('maaLumine');
    } else {
        teekateValik('majadLumine');
    }

    teekateNupudDel();



    if (keelevalik == 0 || keelevalik == 2) {
        teekate_3 = game.add.button(123, 518, 'teekate_3', onClickTeekate_3, this, 2, 2, 2);
        //console.log("teekate3 nupp vajutatud")
        teekate_1 = game.add.button(123, 450, 'teekate_1', onClickTeekate_1, this, 1, 0, 2);
        teekate_2 = game.add.button(123, 484, 'teekate_2', onClickTeekate_2, this, 1, 0, 2);

    }
    if (keelevalik == 1) {
        teekate_3 = game.add.button(123, 518, 'teekate_vene3', onClickTeekate_3, this, 2, 2, 2);
        //console.log("teekate3 nupp vajutatud")
        teekate_1 = game.add.button(123, 450, 'teekate_vene1', onClickTeekate_1, this, 1, 0, 2);
        teekate_2 = game.add.button(123, 484, 'teekate_vene2', onClickTeekate_2, this, 1, 0, 2);


    }
    mangTekstFunc();
}



function onClickUuesti() {
    startStopNupp.destroy();
    juhisedNupp.destroy()
    l6petanNupp.destroy();
    // eemaldame l6puteksti elemendid:
    l6puLause.destroy();
    uuestiNupp.destroy();
    textGroup.destroy();
    nupuTaust.destroy();
    mntLink.destroy();
    l6petanNupp.destroy();

    //selleks et viimaselt lehelt tagasi mängima minna
    if (lopetanInt == 1) {
        l6puTiiter.destroy();
        l6ppTekst.destroy();
        alustaAlgusestNupp.destroy();
        //mntLink.destroy();
        mntLinkLopp.destroy();
    }


    kiiruseNupp.x = 370.6;
    kiirus = 50;
    kiiruseNupp.inputEnabled = true;
    lippX_var = 387.5;
    kiiruseM66dikX_var = 409;
    onClickTeekate_1();
    //onClickRehv_1();    
    // laetakse uuesti global variabled algsete vÃ¤Ã¤rtustega sisse
    teeValik = 1;
    rehviValik = 1;
    iter = 0;
    autoLiikumine = 1;
    taustaLiikumine = 0;
    autoPidurdus = 0;
    autoFullStop = 0;
    teeolu_var = 1;
    efe2 = 0;
    efe3 = 0;
    startStopInt = 0;
    proloog = 0;
    juhisedInt = 0;
    ennustus = 0;
    pidurdusInt = 0;
    lopetanInt = 0;


    startStopNupp = game.add.button(625, 484, 'startStopNupp', actionOnClick_ss, this, 0, 0, 0);
    //this.input.keyboard.enabled = true;
    startTekst = game.add.group();
    startTekst.add(game.make.text(664, 497, "START", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));


    nupuTaust = game.add.sprite(675, 20, 'nupuTaust')
    game.physics.arcade.enable(nupuTaust)
    heliNupuTeke();
    juhisedNupp = game.add.button(730, 27, 'juhisedNupp', juhisedClick, this, 0, 0, 0);

    setTimeout(engineSoundStartFunc, 800);
    k2ivitus_sound.play();

}

function onClickL6petan() {
    lopetanInt = 1;
    l6puTiiter = game.add.sprite(0, 0, 'l6puTiiter')
    game.physics.arcade.enable(l6puTiiter)
    uuestiNupp.inputEnabled = false;
    l6petanNupp.inputEnabled = false;
    startStopNupp.inputEnabled = false;
    startStopNupp.input.useHandCursor = false;

    //vii algusesse tagasi
    alustaAlgusestNupp = game.add.button(300, 520, 'uuestiNupp', onClickUuesti, this, 0, 0, 0);



    if (keelevalik == 0) {
        l6pp();
    }
    if (keelevalik == 1) {
        l6ppRUS();
    }
    if (keelevalik == 2) {
        l6ppENG();
    }

}


function l6pp() {
    l6ppTekst = game.add.group();
    l6ppTekst.add(game.make.text(170, 100, "PIIRKIIRUSEL ON PÕHJUS!", { font: "36px Arial", fill: '#000', fontWeight: "700" }));
    l6ppTekst.add(game.make.text(65, 180, "Hooli oma sõpradest ja jaga rakendust ka neile!", { font: "32px Arial", fill: '#000', fontWeight: "500" }));
    l6ppTekst.add(game.make.text(120, 350, "Rakendus on valminud Tallinna Ülikooli Haapsalu Kolledži praktika raames.", { font: "16px Arial", fill: '#000', fontWeight: "500" }));
    l6ppTekst.add(game.make.text(105, 470, "Mari Joamets Mari Saareväli\nMartin Kirsimägi Rene Reede", { font: "14px Arial", fill: '#000', fontWeight: "500" }));
    l6ppTekst.add(game.make.text(316, 532, "TESTIN UUESTI", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }))
    mntLinkFuncLopp(285, 260);
}

function l6ppRUS() {
    l6ppTekst = game.add.group();
    l6ppTekst.add(game.make.text(40, 100, "ОГРАНИЧЕНИЕ СКОРОСТИ ИМЕЕТ ПРИЧИНУ!", { font: "32px Arial", fill: '#000', fontWeight: "700" }));
    l6ppTekst.add(game.make.text(65, 180, "Заботься о своих друзьях и поделись приложением с ними! ", { font: "24px Arial", fill: '#000', fontWeight: "500" }));
    l6ppTekst.add(game.make.text(205, 330, "Приложения было заполнено в рамках стажировки", { font: "16px Arial", fill: '#000', fontWeight: "500" }));
    l6ppTekst.add(game.make.text(195, 330, "\nв Хаапсалуском колледже Таллиннского университета.", { font: "16px Arial", fill: '#000', fontWeight: "500" }));
    l6ppTekst.add(game.make.text(105, 470, "Mari Joamets Mari Saareväli\nMartin Kirsimägi Rene Reede", { font: "16px Arial", fill: '#000', fontWeight: "500" }));
    l6ppTekst.add(game.make.text(350, 532, "ЗАНОВО!", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }))
    mntLinkFuncLopp(285, 260);
}

function l6ppENG() {
    l6ppTekst = game.add.group();
    l6ppTekst.add(game.make.text(40, 90, "THERE IS A REASON FOR SPEED LIMITS!", { font: "36px Arial", fill: '#000', fontWeight: "700" }));
    l6ppTekst.add(game.make.text(160, 180, "Show you care – share this app with your friends and family!", { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    l6ppTekst.add(game.make.text(40, 350, " The application has been developed during the period of practical training at Haapsalu College of Tallinn University.", { font: "14px Arial", fill: '#000', fontWeight: "500" }));
    l6ppTekst.add(game.make.text(105, 470, "Mari Joamets Mari Saareväli\nMartin Kirsimägi Rene Reede", { font: "14px Arial", fill: '#000', fontWeight: "500" }));
    l6ppTekst.add(game.make.text(320, 532, "RETAKE TEST!", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }))
    mntLinkFuncLopp(285, 260);
}


function dragStop() {

    //console.log("kiiruse nupp just lasti lahti")
    //console.log(teeValik)
    kiiruseCalc();
    //console.log(teeValik);

    if (teeValik == 1) {
        if (kiirus >= 51) {
            teekateValik('maa');
        } else {
            teekateValik('majadJaTee');
        }
    } else if (teeValik == 2) {
        if (kiirus >= 51) {
            teekateValik('maaLombid');
        } else {
            teekateValik('majadLompidega');
        }
    } else if (teeValik == 3) {
        if (kiirus >= 51) {
            teekateValik('maaLumine');
        } else {
            teekateValik('majadLumine');
        }
    }

}

kiiruseM66dikX_var = 409;
lippX_var = 387.5;
function lipuTeke() {
    //peatumisTekstFunc();

    if (teeValik == 3) {
        lipp = game.add.sprite(lippX_var, 392, 'lippMust')
        kiiruseM66dik = game.add.sprite(kiiruseM66dikX_var, 389, 'kiiruseM66dik_Must');
        maaGradient = game.add.sprite(0, 365, 'lumiGradient');

    } else {
        lipp = game.add.sprite(lippX_var, 392, 'lipp')
        kiiruseM66dik = game.add.sprite(kiiruseM66dikX_var, 389, 'kiiruseM66dik');
        if (teeValik == 2) {
            maaGradient = game.add.sprite(0, 365, 'vihmGradient');
        } else {
            maaGradient = game.add.sprite(0, 365, 'asfaltGradient');
        }

    }
    game.physics.arcade.enable(lipp)
    lipp.anchor.x = 0.5;
    lipp.anchor.y = 0.5;
    lipp.inputEnabled = true;
    lipp.input.enableDrag(false, false, false, 250, boundsM66dik);
    lipp.input.allowVerticalDrag = false;
    lipp.events.onDragStart.add(lippStart);
    lipp.events.onDragStop.add(lippStop);


}

lipu_var = 0;
function lippStart() {
    lipu_var = 1;
}

function lippStop() {
    lipu_var = 0;
    //console.log("lipu nupp just lasti lahti")
    //console.log(lipp.body.position.x);
    ennustus = Math.round(((lipp.body.position.x - 375 + 409 - kiiruseM66dik.x) / 4 + Number.EPSILON) * 100) / 100;
    //console.log(ennustus);
    kiiruseM66dikX_var = kiiruseM66dik.x;
    lippX_var = lipp.x;
}

function otsaSoit() {
    if (takistus.x <= (player.x + 185) && efe3 == 0) {
        // automaatne pidurdus
        //kui startstopint ei muutuks siin 2ks siis auto ei pidurda automaatselt kui see takistusele otsa sõidab
        if (startStopInt == 1) {
            // pidurdusInt muutub v22rtuseks 1 vaid siis kui soitja pidurit ei vajuta ja soidab takistusele otsa
            pidurdusInt = 1;
        }
        startStopInt = 2;
        autoPidurdus = 1;

        //kui sõidad otsa takistusele siis on proloog 1
        proloog = 1;
        takistusePositsioon = takistus.position.x
        autoPositsioon = player.position.x
        takistus.destroy();
        player.destroy();

        takistus = game.add.sprite(takistusePositsioon, game.world.height - 294, 'hyyumark')
        player = game.add.sprite(autoPositsioon, game.world.height - 247, 'car')

        game.physics.arcade.enable(takistus)
        game.physics.arcade.enable(player)

        efe3 = 1;
    }
}

function l6puLause_kuva() {

    // kui ei pidurdagi -- toimib, rus toimib, eng ok
    if (pidurdusInt == 1) {
        lopuText_4();
        //console.log("sa ei pidurdanud");
    }

    //vajutad pidurit, aga ikka sõitsid otsa, takistus on juba ekraanil - TOIMIB, toimib rus, ENG OK
    else if (pidurdusInt == 0 && startStopInt == 2 && player.body.position.x + 185 > takistus.body.position.x) {
        //console.log('pidurdasid, aga sõitsid otsa')
        lopuText_5();

    }

    //kui ei sõida otsa ja ei ennusta, st pidurdad õigel ajal -- TOIMIB, venekeeles toimib, ENG OK
    else if (proloog == 1 && ennustus == 0 && pidurdusInt == 0) {
        //console.log("said pidama õigel ajal, ei ennustanud");
        lopuText_1();
    }
    //peatasid auto enne takistuse ilmumist -- TOIMIB, venekeeles toimib, eng ok
    else if (proloog == 0 && pidurdusInt == 0) {
        //console.log("peatasid auto enne kokkuporget");
        lopuText_2();
    }
    //peatasid auto enne takistuse ilmumist, ennustasid pidurdusteekonda -- TOIMIB, venekeeles toimib
    else if (proloog == 1 && ennustus > 0 && pidurdusInt == 0) {
        //console.log("said pidama õigel ajal, ennustasid");
        lopuText_3();
    }

}

var mntLink;
function mntLinkFunc(xx, yy) {
    mntLink = game.add.button(xx, yy, 'linkNupp', onClickLink, this, 1, 0, 0);
}

function mntLinkFuncRUS(xx, yy) {
    mntLink = game.add.button(xx, yy, 'linkNuppRUS', onClickLink, this, 1, 0, 0);
}

function mntLinkFuncENG(xx, yy) {
    mntLink = game.add.button(xx, yy, 'linkNuppENG', onClickLink, this, 1, 0, 0);
}

function mntLinkFuncLopp(xx, yy) {
    mntLinkLopp = game.add.button(xx, yy, 'linkNuppLopp', onClickLink, this, 1, 0, 0);
}

function onClickLink() {
    window.open("https://liikluskasvatus.ee", "_blank");
}




//pidurdus ennustamata
function lopuText_1() {
    l6puLause = game.add.sprite(0, 0, 'l6pulause');
    game.physics.arcade.enable(l6puLause)
    num = ((kiirus * kiirus) / 100) * 0.55 * (1 / teeolu_var)
    textGroup = game.add.group();
    uuestiNupp = game.add.button(490, 480, 'uuestiNupp', onClickUuesti, this, 0, 0, 0);
    l6petanNupp = game.add.button(125, 480, 'l6petanNupp', onClickL6petan, this, 0, 0, 0);
    if (keelevalik == 0) {
        ennustamata();
    }
    if (keelevalik == 1) {
        ennustamataRUS();
    }
    if (keelevalik == 2) {
        ennustamataENG();
    }

}

//pidurdasid liiga vara
function lopuText_2() {
    l6puLause = game.add.sprite(0, 0, 'l6pulause2')
    game.physics.arcade.enable(l6puLause);
    uuestiNupp = game.add.button(490, 325, 'uuestiNupp', onClickUuesti, this, 0, 0, 0);
    l6petanNupp = game.add.button(135, 325, 'l6petanNupp', onClickL6petan, this, 0, 0, 0);
    if (keelevalik == 0) {
        vara();
    }
    if (keelevalik == 1) {
        varaRUS();
    }
    if (keelevalik == 2) {
        varaENG();
    }
}

//ennustusega pidurdus
function lopuText_3() {
    l6puLause = game.add.sprite(0, 0, 'l6pulause');
    game.physics.arcade.enable(l6puLause);
    num = ((kiirus * kiirus) / 100) * 0.55 * (1 / teeolu_var);
    uuestiNupp = game.add.button(490, 480, 'uuestiNupp', onClickUuesti, this, 0, 0, 0);
    l6petanNupp = game.add.button(125, 480, 'l6petanNupp', onClickL6petan, this, 0, 0, 0);
    if (keelevalik == 0) {
        ennustatud();
    }
    if (keelevalik == 1) {
        ennustatudRUS();
    }
    if (keelevalik == 2) {
        ennustatudENG();
    }
}





// sa ei vajutanud pidurit
function lopuText_4() {
    num = ((kiirus * kiirus) / 100) * 0.55 * (1 / teeolu_var);
    l6puLause = game.add.sprite(0, 0, 'l6pulause');
    game.physics.arcade.enable(l6puLause);
    uuestiNupp = game.add.button(490, 480, 'uuestiNupp', onClickUuesti, this, 0, 0, 0);
    l6petanNupp = game.add.button(125, 480, 'l6petanNupp', onClickL6petan, this, 0, 0, 0);
    if (keelevalik == 0) {
        avarii();
    }
    if (keelevalik == 1) {
        avariiRUS();
    }
    if (keelevalik == 2) {
        avariiENG();
    }

}

// vajutad pidurit, aga ikka sõitsid otsa
function lopuText_5() {
    num = ((kiirus * kiirus) / 100) * 0.55 * (1 / teeolu_var)
    l6puLause = game.add.sprite(0, 0, 'l6pulause');
    game.physics.arcade.enable(l6puLause)
    uuestiNupp = game.add.button(490, 480, 'uuestiNupp', onClickUuesti, this, 0, 0, 0);
    l6petanNupp = game.add.button(125, 480, 'l6petanNupp', onClickL6petan, this, 0, 0, 0);
    if (keelevalik == 0) {
        pidurAvarii();
    }
    if (keelevalik == 1) {
        pidurAvariiRUS();
    }
    if (keelevalik == 2) {
        pidurAvariiENG();
    }



}

//juhuslik õpetlik tekst EESTI
function tagasisideRand() {
    tagasiside = tagasisideList[Math.floor(Math.random() * tagasisideList.length)];
    //console.log(tagasiside);
}

//juhuslik õpetlik tekst RUS
function tagasisideRandRus() {
    tagasiside = tagasisideListRUS[Math.floor(Math.random() * tagasisideListRUS.length)];
    //console.log(tagasiside);
}

//juhuslik õpetlik tekst EESTI
function tagasisideRandEng() {
    tagasiside = tagasisideListENG[Math.floor(Math.random() * tagasisideListENG.length)];
    //console.log(tagasiside);
}






//pidurdasid liiga vara EST
function vara() {
    textGroup = game.add.group();
    textGroup.add(game.make.text(270, 256, "Peatasid auto liiga vara!", { font: "26px Arial", fill: '#000', fontWeight: "500" }));


    textGroup.add(game.make.text(508, 337, "TESTIN UUESTI", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    textGroup.add(game.make.text(158, 337, "LÕPETAN", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));

    //et proovi uuestiga saaks kustutada
    mntLinkFunc(3500, 100);

}
//pidurdasid liiga vara RUS
function varaRUS() {
    textGroup = game.add.group();
    textGroup.add(game.make.text(150, 256, "Ты остановил автомобиль слишком рано!", { font: "26px Arial", fill: '#000', fontWeight: "500" }));
    textGroup.add(game.make.text(540, 338, "ЗАНОВО!", { font: "23px Arial", fill: '#ffffff', fontWeight: "500" }));
    textGroup.add(game.make.text(165, 338, "ВЫЙТИ!", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    //et proovi uuestiga saaks kustutada
    mntLinkFunc(3500, 100);

}
function varaENG() {
    textGroup = game.add.group();
    textGroup.add(game.make.text(240, 256, "You stopped the car too soon! ", { font: "26px Arial", fill: '#000', fontWeight: "500" }));
    textGroup.add(game.make.text(518, 337, "RETAKE TEST", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    textGroup.add(game.make.text(188, 337, "EXIT", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));

    //et proovi uuestiga saaks kustutada
    mntLinkFunc(3500, 100);

}





//sa ei vajutanudki pidurit EST
function avarii() {
    textGroup = game.add.group();
    textGroup.add(game.make.text(120, 150, "Sinu reageerimiskiirus ei olnud piisav otsasõidu vältimiseks.\nKas tegelesid samal ajal mõne kõrvalise tegevusega? ", { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    tagasisideRand();
    textGroup.add(game.make.text(120, 250, "Kas teadsid, et " + tagasiside, { font: "18px Arial", fill: '#000', fontWeight: "500" }))
    textGroup.add(game.make.text(120, 400, "Loe lisaks ", { font: "18px Arial", fill: '#000', fontWeight: "500" }))

    textGroup.add(game.make.text(508, 493, "TESTIN UUESTI", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    textGroup.add(game.make.text(151, 493, "LÕPETAN", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    mntLinkFunc(208, 403);
}
//sa ei vajutanudki pidurit RUS
function avariiRUS() {
    reagAeg();
    tagasisideRandRus();
    //pidurdusteekond
    pidurdusteekond = Math.round((num + Number.EPSILON) * 100) / 100;
    textGroup = game.add.group();
    textGroup.add(game.make.text(120, 150, "Твоё скорость реакции не хватило, чтобы избежать столкновения!\nЗанимался ли Ты при этом какой-либо постаронней действий? ", { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    textGroup.add(game.make.text(120, 250, "Тебе известно, " + tagasiside, { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    textGroup.add(game.make.text(120, 430, "Подробнее читайте ", { font: "18px Arial", fill: '#000', fontWeight: "500" }))
    mntLinkFuncRUS(290, 435);
    textGroup.add(game.make.text(540, 493, "ЗАНОВО!", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    textGroup.add(game.make.text(155, 493, "ВЫЙТИ!", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
}
//sa ei vajutanudki pidurit ENG
function avariiENG() {
    reagAeg();
    tagasisideRandEng();
    mntLinkFuncENG(217, 433);
    // tegelik peatumisteekond meetrites
    peatumisTeekond = Math.round((num + reagMmeeter_var + Number.EPSILON) * 100) / 100;
    //reageerimisajal läbitud meetrid - reagMmeeter_var
    //pidurdusteekond
    pidurdusteekond = Math.round((num + Number.EPSILON) * 100) / 100;
    textGroup = game.add.group();
    textGroup.add(game.make.text(120, 150, "Your reaction time was not enough to avoid a collision.\nWhere you engaged in any extraneous activity at the same time? ", { font: "18px Arial", fill: '#000', fontWeight: "500" }));

    //textGroup.add(game.make.text(120,195,"Sinu kiirus oli " + Math.round(kiirus) + " km/h. Sinu reageerimisteekond oli " + Math.round(reagMmeeter_var) + " meetrit ning\npidurdusteekond " + Math.round(pidurdusteekond) + " meetrit.\nKokku oli peatumisteekond "+ Math.round(peatumisTeekond) + " meetrit.", tekstiStiil2));
    textGroup.add(game.make.text(120, 250, "Did you know " + tagasiside, { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    textGroup.add(game.make.text(120, 430, "Read more ", { font: "18px Arial", fill: '#000', fontWeight: "500" }))
    textGroup.add(game.make.text(517, 493, "RETAKE TEST", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    textGroup.add(game.make.text(173, 493, "EXIT", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
}












//vajutad pidurit, aga ikka sõitsid otsa || SEE OSA PEAKS OLEMA TEKSTILISELT KORRAS, EESTI KEELES
function pidurAvarii() {
    reagAeg();
    // tegelik peatumisteekond meetrites
    peatumisTeekond = Math.round((num + reagMmeeter_var + Number.EPSILON) * 100) / 100;
    //reageerimisajal läbitud meetrid - reagMmeeter_var
    //pidurdusteekond
    pidurdusteekond = Math.round((num + Number.EPSILON) * 100) / 100;
    textGroup = game.add.group();
    textGroup.add(game.make.text(120, 110, "Teel oli takistus, sõitsid sellele otsa. Sinu reageerimiskiirus ei olnud\njärelikult piisav otsasõidu vältimiseks. Kas tegelesid samal ajal mõne\nkõrvalise tegevusega?", { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    tagasisideRand();
    textGroup.add(game.make.text(120, 195, "Sinu kiirus oli " + Math.round(kiirus) + " km/h. Sinu reageerimisteekond oli " + Math.round(reagMmeeter_var) + " meetrit ning\npidurdusteekond " + Math.round(pidurdusteekond) + " meetrit.\nKokku oli peatumisteekond " + (Math.round(pidurdusteekond) + Math.round(reagMmeeter_var)) + " meetrit.", tekstiStiil2));
    textGroup.add(game.make.text(120, 300, "Kas teadsid, et " + tagasiside, { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    textGroup.add(game.make.text(120, 430, "Loe lisaks ", { font: "18px Arial", fill: '#000', fontWeight: "500" }))
    mntLinkFunc(208, 433);
    textGroup.add(game.make.text(507, 493, "TESTIN UUESTI", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    textGroup.add(game.make.text(145, 493, "LÕPETAN", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
}

//vajutad pidurit, aga ikka sõitsid otsa RUS
function pidurAvariiRUS() {
    reagAeg();
    tagasisideRandRus();
    // tegelik peatumisteekond meetrites
    peatumisTeekond = Math.round((num + reagMmeeter_var + Number.EPSILON) * 100) / 100;
    //reageerimisajal läbitud meetrid - reagMmeeter_var
    //pidurdusteekond
    pidurdusteekond = Math.round((num + Number.EPSILON) * 100) / 100;
    textGroup = game.add.group();
    textGroup.add(game.make.text(120, 120, "Твоё скорость реакции не хватило, чтобы избежать столкновения!\nЗанимался ли Ты при этом какой-либо постаронней действий?\n\nПри скорости " + Math.round(kiirus) + " .км/ч путь реагирования было " + Math.round(reagMmeeter_var) + " м,\nа тормозной путь " + Math.round(pidurdusteekond) + " м. Общий остановочный путь составил " + (Math.round(pidurdusteekond) + Math.round(reagMmeeter_var)) + " м.", tekstiStiil2));

    //textGroup.add(game.make.text(120,195,"Sinu kiirus oli " + Math.round(kiirus) + " km/h. Sinu reageerimisteekond oli " + Math.round(reagMmeeter_var) + " meetrit ning\npidurdusteekond " + Math.round(pidurdusteekond) + " meetrit.\nKokku oli peatumisteekond "+ Math.round(peatumisTeekond) + " meetrit.", tekstiStiil2));
    textGroup.add(game.make.text(120, 270, "Тебе известно, что " + tagasiside, { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    textGroup.add(game.make.text(120, 430, "Подробнее читайте ", { font: "18px Arial", fill: '#000', fontWeight: "500" }))
    mntLinkFuncRUS(290, 435);
    textGroup.add(game.make.text(540, 493, "ЗАНОВО!", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    textGroup.add(game.make.text(155, 493, "ВЫЙТИ!", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
}

//vajutad pidurit, aga ikka sõitsid otsa ENG
function pidurAvariiENG() {
    reagAeg();
    tagasisideRandEng();
    mntLinkFuncENG(217, 433);
    // tegelik peatumisteekond meetrites
    peatumisTeekond = Math.round((num + reagMmeeter_var + Number.EPSILON) * 100) / 100;
    //reageerimisajal läbitud meetrid - reagMmeeter_var
    //pidurdusteekond
    pidurdusteekond = Math.round((num + Number.EPSILON) * 100) / 100;
    textGroup = game.add.group();
    //textGroup.add(game.make.text(120,110,"Teel oli takistus, sõitsid sellele otsa. Sinu reageerimiskiirus ei olnud\njärelikult piisav otsasõidu vältimiseks. Kas tegelesid samal ajal mõne\nkõrvalise tegevusega?", { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    textGroup.add(game.make.text(120, 120, "Your reaction time was not enough to avoid a collision.\nWhere you engaged in any extraneous activity at the same time? ", { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    //textGroup.add(game.make.text(120,195,"Sinu kiirus oli " + Math.round(kiirus) + " km/h. Sinu reageerimisteekond oli " + Math.round(reagMmeeter_var) + " meetrit ning\npidurdusteekond " + Math.round(pidurdusteekond) + " meetrit.\nKokku oli peatumisteekond "+ Math.round(peatumisTeekond) + " meetrit.", tekstiStiil2));
    textGroup.add(game.make.text(120, 200, "Your speed was " + Math.round(kiirus) + " km/h.\nYour reaction distance was " + Math.round(reagMmeeter_var) + " m and your braking distance was " + Math.round(pidurdusteekond) + " m.\nThe total stopping distance was " + Math.round(peatumisTeekond) + " m.", tekstiStiil2));

    textGroup.add(game.make.text(120, 300, "Did you know " + tagasiside, { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    textGroup.add(game.make.text(120, 430, "Read more ", { font: "18px Arial", fill: '#000', fontWeight: "500" }))
    textGroup.add(game.make.text(517, 493, "RETAKE TEST", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    textGroup.add(game.make.text(173, 493, "EXIT", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
}



// Ennustuseta tagasiside
function ennustamata() {
    reagAeg();
    // tegelik peatumisteekond meetrites
    peatumisTeekond = Math.round((num + reagMmeeter_var + Number.EPSILON) * 100) / 100;
    //reageerimisajal läbitud meetrid - reagMmeeter_var
    //pidurdusteekond
    pidurdusteekond = Math.round((num + Number.EPSILON) * 100) / 100;
    textGroup = game.add.group();
    tagasisideRand();
    textGroup.add(game.make.text(120, 150, "Sa ei ennustanud pidurdusteekonda!", { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    textGroup.add(game.make.text(120, 300, "Kas teadsid, et " + tagasiside, { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    textGroup.add(game.make.text(120, 200, "Sinu kiirus oli " + Math.round(kiirus) + " km/h. Sinu reageerimisteekond oli " + Math.round(reagMmeeter_var) + " meetrit ning\npidurdusteekond " + Math.round(pidurdusteekond) + " meetrit.\nKokku oli peatumisteekond " + (Math.round(pidurdusteekond) + Math.round(reagMmeeter_var)) + " meetrit.", tekstiStiil2));
    textGroup.add(game.make.text(120, 400, "Loe lisaks ", { font: "18px Arial", fill: '#000', fontWeight: "500" }))
    textGroup.add(game.make.text(507, 493, "TESTIN UUESTI", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    textGroup.add(game.make.text(145, 493, "LÕPETAN", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    mntLinkFunc(208, 403);
}

function ennustamataRUS() {
    reagAeg();
    tagasisideRandRus();
    // tegelik peatumisteekond meetrites
    peatumisTeekond = Math.round((num + reagMmeeter_var + Number.EPSILON) * 100) / 100;
    //reageerimisajal läbitud meetrid - reagMmeeter_var
    //pidurdusteekond
    pidurdusteekond = Math.round((num + Number.EPSILON) * 100) / 100;
    textGroup = game.add.group();
    textGroup.add(game.make.text(120, 150, "Вы не предсказали тормозной путь.\n\nПри скорости " + Math.round(kiirus) + " .км/ч путь реагирования было " + Math.round(reagMmeeter_var) + " м,\nа тормозной путь " + Math.round(pidurdusteekond) + " м. Общий остановочный путь составил " + (Math.round(pidurdusteekond) + Math.round(reagMmeeter_var)) + " м.", tekstiStiil2));
    //textGroup.add(game.make.text(120,195,"Sinu kiirus oli " + Math.round(kiirus) + " km/h. Sinu reageerimisteekond oli " + Math.round(reagMmeeter_var) + " meetrit ning\npidurdusteekond " + Math.round(pidurdusteekond) + " meetrit.\nKokku oli peatumisteekond "+ Math.round(peatumisTeekond) + " meetrit.", tekstiStiil2));
    textGroup.add(game.make.text(120, 280, "Тебе известно, " + tagasiside, { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    textGroup.add(game.make.text(120, 430, "Подробнее читайте ", { font: "18px Arial", fill: '#000', fontWeight: "500" }))
    mntLinkFuncRUS(290, 435);
    textGroup.add(game.make.text(540, 493, "ЗАНОВО!", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    textGroup.add(game.make.text(155, 493, "ВЫЙТИ!", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
}

function ennustamataENG() {
    reagAeg();
    tagasisideRandEng();
    mntLinkFuncENG(217, 433);
    // tegelik peatumisteekond meetrites
    peatumisTeekond = Math.round((num + reagMmeeter_var + Number.EPSILON) * 100) / 100;
    //reageerimisajal läbitud meetrid - reagMmeeter_var
    //pidurdusteekond
    pidurdusteekond = Math.round((num + Number.EPSILON) * 100) / 100;
    textGroup = game.add.group();
    textGroup.add(game.make.text(120, 150, "You did not predict the stopping distance!", { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    textGroup.add(game.make.text(120, 200, "Your speed was " + Math.round(kiirus) + " km/h.\nYour reaction distance was " + Math.round(reagMmeeter_var) + " m and your braking distance was " + Math.round(pidurdusteekond) + " m.\nThe total stopping distance was " + (Math.round(pidurdusteekond) + Math.round(reagMmeeter_var)) + " m.", tekstiStiil2));

    //textGroup.add(game.make.text(120,195,"Sinu kiirus oli " + Math.round(kiirus) + " km/h. Sinu reageerimisteekond oli " + Math.round(reagMmeeter_var) + " meetrit ning\npidurdusteekond " + Math.round(pidurdusteekond) + " meetrit.\nKokku oli peatumisteekond "+ Math.round(peatumisTeekond) + " meetrit.", tekstiStiil2));
    textGroup.add(game.make.text(120, 300, "Did you know " + tagasiside, { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    textGroup.add(game.make.text(120, 430, "Read more ", { font: "18px Arial", fill: '#000', fontWeight: "500" }))
    textGroup.add(game.make.text(517, 493, "RETAKE TEST", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    textGroup.add(game.make.text(173, 493, "EXIT", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
}











//  Ennustusega tagasiside
function ennustatud() {
    reagAeg();
    tagasisideRand();
    // tegelik peatumisteekond meetrites
    peatumisTeekond = Math.round((num + reagMmeeter_var + Number.EPSILON) * 100) / 100;
    //reageerimisajal läbitud meetrid - reagMmeeter_var
    //pidurdusteekond
    pidurdusteekond = Math.round((num + Number.EPSILON) * 100) / 100;
    textGroup = game.add.group();
    textGroup.add(game.make.text(120, 270, "Kas teadsid, et " + tagasiside, tekstiStiil2));
    textGroup.add(game.make.text(120, 150, "Sinu pakkumine oli " + ennustus + " meetrit.\n\nKiiruse " + Math.round(kiirus) + " km/h juures oli Sinu reageerimisteekond " + Math.round(reagMmeeter_var) + " meetrit ning\npidurdusteekond " + Math.round(pidurdusteekond) + " meetrit. Kokku oli peatumisteekond " + (Math.round(pidurdusteekond) + Math.round(reagMmeeter_var)) + " meetrit.", tekstiStiil2));
    textGroup.add(game.make.text(120, 400, "Loe lisaks ", tekstiStiil2))
    textGroup.add(game.make.text(507, 493, "TESTIN UUESTI", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    textGroup.add(game.make.text(145, 493, "LÕPETAN", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    mntLinkFunc(208, 403);
}
//ennustusega venekeelne
function ennustatudRUS() {
    reagAeg();
    tagasisideRandRus();
    // tegelik peatumisteekond meetrites
    peatumisTeekond = Math.round((num + reagMmeeter_var + Number.EPSILON) * 100) / 100;
    //reageerimisajal läbitud meetrid - reagMmeeter_var
    //pidurdusteekond
    pidurdusteekond = Math.round((num + Number.EPSILON) * 100) / 100;
    textGroup = game.add.group();
    textGroup.add(game.make.text(120, 150, "Твое предложение была " + ennustus + " метров.\n\nПри скорости " + Math.round(kiirus) + " .км/ч путь реагирования было " + Math.round(reagMmeeter_var) + " м,\nа тормозной путь " + Math.round(pidurdusteekond) + " м. Общий остановочный путь составил " + (Math.round(pidurdusteekond) + Math.round(reagMmeeter_var)) + " м.", tekstiStiil2));
    //textGroup.add(game.make.text(120,195,"Sinu kiirus oli " + Math.round(kiirus) + " km/h. Sinu reageerimisteekond oli " + Math.round(reagMmeeter_var) + " meetrit ning\npidurdusteekond " + Math.round(pidurdusteekond) + " meetrit.\nKokku oli peatumisteekond "+ Math.round(peatumisTeekond) + " meetrit.", tekstiStiil2));
    textGroup.add(game.make.text(120, 270, "Тебе известно, что " + tagasiside, { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    textGroup.add(game.make.text(120, 430, "Подробнее читайте ", { font: "18px Arial", fill: '#000', fontWeight: "500" }))
    mntLinkFuncRUS(290, 435);
    textGroup.add(game.make.text(540, 493, "ЗАНОВО!", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    textGroup.add(game.make.text(155, 493, "ВЫЙТИ!", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
}
//ennustusega inglisekeelne
function ennustatudENG() {
    reagAeg();
    tagasisideRandEng();
    mntLinkFuncENG(217, 433);
    // tegelik peatumisteekond meetrites
    peatumisTeekond = Math.round((num + reagMmeeter_var + Number.EPSILON) * 100) / 100;
    //reageerimisajal läbitud meetrid - reagMmeeter_var
    //pidurdusteekond
    pidurdusteekond = Math.round((num + Number.EPSILON) * 100) / 100;
    textGroup = game.add.group();
    textGroup.add(game.make.text(120, 150, "The stopping distance you predicted was " + ennustus + " meters.", { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    textGroup.add(game.make.text(120, 200, "Your speed was " + Math.round(kiirus) + " km/h.\nYour reaction distance was " + Math.round(reagMmeeter_var) + " m and your braking distance was " + Math.round(pidurdusteekond) + " m.\nThe total stopping distance was " + (Math.round(pidurdusteekond) + Math.round(reagMmeeter_var)) + " m.", tekstiStiil2));

    textGroup.add(game.make.text(120, 300, "Did you know " + tagasiside, { font: "18px Arial", fill: '#000', fontWeight: "500" }));
    textGroup.add(game.make.text(120, 430, "Read more ", { font: "18px Arial", fill: '#000', fontWeight: "500" }))
    textGroup.add(game.make.text(517, 493, "RETAKE TEST", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    textGroup.add(game.make.text(173, 493, "EXIT", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
}











//takistuse teke
function podraTeke() {
    // num, ehk pidurdustee var ; sinna otsa liidame reageerimis aja
    // ning korrutame neljaga, et saada distants pixli kauguses
    // PS! reageermis aeg pixlites = meeterid*4 ; 50km/h läbib auto 200px/s ja 100km/h läbib auto 400px/s
    reagJaPidur = ((kiirus * kiirus) / 100) * 0.55 * (1 / teeolu_var) + kiirus
    takistuseKaugus2 = ((reagJaPidur * 4) + 50 + 185)

    if (takistuseKaugus2 > 770) {
        //console.log(takistuseKaugus2, "oli")
        takistuseKaugus2 = 770
    }

    takistus.destroy();
    takInt = Math.floor(Math.random() * 3);

    takistus = game.add.sprite(takistuseKaugus2, game.world.height - 242, takistusList[takInt]);
    game.physics.arcade.enable(takistus)

    //console.log(takistuseKaugus2)
    proloog = 1;

    currentTime1 = +new Date();

}

function heliClick() {
    heliInt += 1;
    heliNupuTeke();
}

function heliNupuTeke() {
    heliNupp.destroy()
    if (heliInt % 2 == 0) {

        heliNupp = game.add.button(685, 27, 'heliNupp', heliClick, this, 1, 1, 1);
        game.sound.mute = false;
    }
    else {
        heliNupp = game.add.button(685, 27, 'heliNupp', heliClick, this, 0, 0, 0);
        game.sound.mute = true;
    }
}


function juhisedClick() {
    juhisedInt += 1;
    //console.log(juhisedInt, "juhisedint")
    juhisedNupp.destroy();
    if (juhisedInt % 2 == 1) {
        heliNupp.destroy();
        //console.log('juhisednupp vajutatud')
        juhised = game.add.sprite(0, 0, 'juhised')
        game.physics.arcade.enable(juhised)
        kiiruseNupp.inputEnabled = false;
        startStopNupp.inputEnabled = false;
        teekate_1.inputEnabled = false;
        teekate_2.inputEnabled = false;
        teekate_3.inputEnabled = false;
        //et avalehel ei saaks jätka vajutada :@
        jatkanNupp.inputEnabled = false;
        //this.input.keyboard.enabled = false; 
        //nupuTaust = game.add.sprite(675, 20, 'nupuTaust')   
        //game.physics.arcade.enable(nupuTaust)
        //heliNupp = game.add.button(685, 27, 'heliNupp', heliClick, this, 1, 1, 1);
        heliNupuTeke();
        juhisedNupp = game.add.button(730, 27, 'juhisedNupp', juhisedClick, this, 0, 0, 0);
        juhisedJatkanNupp = game.add.button(625, 501, 'jatkanNupp', juhisedClick, this, 0, 0, 0);

        juhisedTekstFunc();

    } else {
        juhised.destroy();
        juhisedJatkanNupp.destroy();
        juhisedTekst.destroy();
        mumm.destroy();
        lipuke.destroy();
        juhendistart.destroy();
        juhendistop.destroy();
        kiiruseNupp.inputEnabled = true;
        startStopNupp.inputEnabled = true;
        teekate_1.inputEnabled = true;
        teekate_2.inputEnabled = true;
        teekate_3.inputEnabled = true;
        //et avalehel ei saaks jätka vajutada :@
        //this.input.keyboard.enabled = true;
        juhisedNupp = game.add.button(730, 27, 'juhisedNupp', juhisedClick, this, 0, 0, 0);


    }

}
// aja muutujad
var currentTime1
var currentTime2

function teekateNupudDel() {
    teekate_1.destroy();
    teekate_2.destroy();
    teekate_3.destroy();
}

var liputa_var;
// randomi functsioon ; yhest kuni nr "el_num" ; saadud number lisatakse  stringile(el_string) otsa
function unToRandom(el_num, el_string) {
    return (el_string + (Math.floor(Math.random() * el_num) + 1))
}

// peatumisTeekond var on pidurdusteekond + reageerimis ajal l2bitud meetrid
var peatumisTeekond;

var reag_var;
var reagMmeeter_var;
var reagUnoSec;
// reag_var on reageerimis aeg, sekundites ; reagMmeeter_var on reageerimis ajal l2bitud meetrid
function reagAeg() {
    reagUnoSec = currentTime2 - currentTime1;
    // allolev IF on vajalik, et kui reag-aeg on v2iksem kui 1 sec, tehakse temast ikkagi 1 sec
    if (reagUnoSec < 1000) {
        reagUnoSec = 1000;
    }
    reag_var = Math.round((reagUnoSec + Number.EPSILON) * 100) / 100000
    reagMmeeter_var = Math.round(((kiirus / 3.6 * reag_var) + Number.EPSILON) * 100) / 100
}

var pidurdusAeg;

// var peatumisTekst;
// function peatumisTekstFunc() {
//     peatumisTekst  = game.add.group();
//     peatumisTekst.add(game.make.text(500,430,"Peatumisteekond (m)", { font: "17px Arial", fill: "black", fontWeight : "bold"}));
//     }

// tekstiStiil



//keelevaliku funktsioon
estInt = 0;
rusInt = 1;
engInt = 1;

function estClick() {
    estInt += 1;
    estFunk();
}

function rusClick() {
    rusInt += 1;
    rusFunk();
}

function engClick() {
    engInt += 1;
    engFunk();
}


function estFunk() {

    est.destroy();
    rus.destroy();
    eng.destroy();
    est = game.add.button(635, 27, 'est', estClick, this, 1, 1, 1);
    rus = game.add.button(682, 27, 'rus', rusClick, this, 0, 0, 0);
    eng = game.add.button(728, 27, 'eng', engClick, this, 0, 0, 0);
    est.inputEnabled = false;
    keelevalik = 0;
    //console.log(keelevalik)
    //kõigepealt kontrolli kas oled avalehel
    if (avalehtKontroll == 0) {
        avalehtTekst.destroy();
        avalehtTekst = game.add.group();
        avalehtTekst.add(game.make.text(357, 412, "TESTIN!", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
        avalehtTekst.add(game.make.text(163, 300, "Kas tead, kui pikk on peatumisteekond autoga sõites?\n Testi oma teadmisi!", { font: "20px Arial", fill: '#000', fontWeight: "500", align: 'center' }))
    }
    if (avalehtKontroll == 1) {
        juhisedTekstFunc();
    }

}



function rusFunk() {

    est.destroy();
    rus.destroy();
    eng.destroy();
    est = game.add.button(635, 27, 'est', estClick, this, 0, 0, 0);
    est.inputEnabled = true;
    rus = game.add.button(682, 27, 'rus', rusClick, this, 1, 1, 1);
    rus.inputEnabled = false;
    eng = game.add.button(728, 27, 'eng', engClick, this, 0, 0, 0);
    keelevalik = 1;
    //console.log(keelevalik);
    if (avalehtKontroll == 0) {
        avalehtTekst.destroy();
        avalehtTekst = game.add.group();
        avalehtTekst.add(game.make.text(343, 413, "ПРОВЕРЯЙ!", { font: "19px Arial", fill: '#ffffff', fontWeight: "500" })); // TEE SUUREKS
        avalehtTekst.add(game.make.text(40, 300, "Тебе известно, какой длины получается остановочный путь, двигаясь на автомобиле? \n Проверь свои знания! ", { font: "18px Arial", fill: '#000', fontWeight: "500", align: 'center' }))
    }
    if (avalehtKontroll == 1) {
        juhisedTekstFunc();
    }



}

function engFunk() {

    est.destroy();
    rus.destroy();
    eng.destroy();
    est = game.add.button(635, 27, 'est', estClick, this, 0, 0, 0);
    est.inputEnabled = true;
    rus = game.add.button(682, 27, 'rus', rusClick, this, 0, 0, 0);
    rus.inputEnabled = true;
    eng = game.add.button(728, 27, 'eng', engClick, this, 1, 1, 1);
    eng.inputEnabled = false;
    keelevalik = 2;
    //console.log(keelevalik);
    if (avalehtKontroll == 0) {
        avalehtTekst.destroy();
        avalehtTekst = game.add.group();
        avalehtTekst.add(game.make.text(338, 412, "TAKE A TEST", { font: "20px Arial", fill: '#ffffff', fontWeight: "500" }));
        avalehtTekst.add(game.make.text(157, 300, "Do you know what the stopping distance is when driving?\n Test yourself to find out how much you know! ", { font: "20px Arial", fill: '#000', fontWeight: "500", align: 'center' }))
    }

    if (avalehtKontroll == 1) {
        juhisedTekstFunc();
    }




}


function juhisedTekstFunc() {
    if (keelevalik == 0) {
        juhisedTekst.destroy();
        mumm.destroy();
        lipuke.destroy();
        juhendistart.destroy();
        juhendistop.destroy();

        mumm = game.add.sprite(420, 183, 'mumm');
        lipuke = game.add.sprite(562, 228, 'lipuke');
        juhendistart = game.add.sprite(321, 276, 'juhendistart');
        juhendistop = game.add.sprite(488, 325, 'juhendistop');

        juhisedTekst = game.add.group();
        juhisedTekst.add(game.make.text(337, 26, "Juhend", { font: "42px Arial", fill: '#000', fontWeight: "500" }));
        juhisedTekst.add(game.make.text(100, 128, "Teekatte valimiseks kliki sobival nupul.", { font: "20px Arial", fill: '#000', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(100, 178, "Sõidukiiruse valimiseks libista nupp     sobiva kiiruse juurde.", { font: "20px Arial", fill: '#000', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(100, 228, "Peatumisteekonna pikkuse määramiseks libista lipp      sobivale kaugusele.", { font: "20px Arial", fill: '#000', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(100, 278, "Sõidu alustamiseks kliki                 nuppu või tühiku klahvi.", { font: "20px Arial", fill: '#000', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(100, 328, "Auto peatamiseks, takistuse ilmumisel, kliki                nuppu või tühiku klahvi.", { font: "20px Arial", fill: '#000', fontWeight: "500" }))

        juhisedTekst.add(game.make.text(100, 522, "Kliki heli vaigistamiseks", { font: "20px Arial", fill: '#000', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(375, 522, "Kliki juhiste vaatamiseks", { font: "20px Arial", fill: '#000', fontWeight: "500" }))

        juhisedTekst.add(game.make.text(653, 515, "JÄTKAN!", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }))

        juhisedTekst.add(game.make.text(330, 279, "START!", { font: "16px Arial", fill: '#fff', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(496, 329, "STOPP!", { font: "16px Arial", fill: '#fff', fontWeight: "500" }))

    }
    if (keelevalik == 1) {
        juhisedTekst.destroy();
        mumm.destroy();
        lipuke.destroy();
        juhendistart.destroy();
        juhendistop.destroy();

        mumm = game.add.sprite(515, 180, 'mumm');
        lipuke = game.add.sprite(720, 218, 'lipuke');
        juhendistart = game.add.sprite(425, 276, 'juhendistart');
        juhendistop = game.add.sprite(468, 315, 'juhendistop');

        juhisedTekst = game.add.group();
        juhisedTekst.add(game.make.text(290, 26, "Инструкция", { font: "42px Arial", fill: '#000', fontWeight: "500" }));
        juhisedTekst.add(game.make.text(90, 127, "Для выбора дорожного покрытия нажми на подходящую кнопку.", { font: "18px Arial", fill: '#000', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(90, 178, "Для выбора скорости движения перемести кнопку     на подходящую скорость.", { font: "18px Arial", fill: '#000', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(90, 218, "Для выбора предполагаемой длины остановочного пути установи флажок\nна подходящем расстоянии.", { font: "18px Arial", fill: '#000', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(90, 278, "Для начала движения нажми на кнопку                  или на клавишу пробел.", { font: "18px Arial", fill: '#000', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(90, 318, "Для остановки автомобиля нажми на кнопку                  или на клавишу пробел\nпри появлении знака STOP.", { font: "18px Arial", fill: '#000', fontWeight: "500" }))

        juhisedTekst.add(game.make.text(95, 512, "Нажми для\nвыключения звука ", { font: "16px Arial", fill: '#000', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(370, 512, "Нажми для\nпросмотра инструкций ", { font: "16px Arial", fill: '#000', fontWeight: "500" }))

        juhisedTekst.add(game.make.text(650, 515, "ДАЛЬШЕ!", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }))

        juhisedTekst.add(game.make.text(440, 280, "START", { font: "14px Arial", fill: '#fff', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(485, 320, "STOP", { font: "14px Arial", fill: '#fff', fontWeight: "500" }))
    }
    if (keelevalik == 2) {
        juhisedTekst.destroy();
        mumm.destroy();
        lipuke.destroy();
        juhendistart.destroy();
        juhendistop.destroy();

        mumm = game.add.sprite(235, 180, 'mumm');
        lipuke = game.add.sprite(210, 226, 'lipuke');
        juhendistart = game.add.sprite(168, 276, 'juhendistart');
        juhendistop = game.add.sprite(168, 326, 'juhendistop');

        juhisedTekst = game.add.group();
        juhisedTekst.add(game.make.text(290, 28, "Instructions", { font: "42px Arial", fill: '#000', fontWeight: "500" }));
        juhisedTekst.add(game.make.text(90, 126, "Click on a road surface.", { font: "20px Arial", fill: '#000', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(90, 176, "Slide the button     to select a speed.", { font: "20px Arial", fill: '#000', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(90, 226, "Slide the flag      to the point you think marks the stopping distance.", { font: "20px Arial", fill: '#000', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(90, 276, "Click on                or hit the spacebar to begin.", { font: "20px Arial", fill: '#000', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(90, 326, "Click on                or hit the spacebar again when the stop sign appears.", { font: "20px Arial", fill: '#000', fontWeight: "500" }))

        juhisedTekst.add(game.make.text(95, 512, "To turn off sound,\nclick on", { font: "18px Arial", fill: '#000', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(370, 512, "To read the instructions,\nclick on", { font: "18px Arial", fill: '#000', fontWeight: "500" }))

        juhisedTekst.add(game.make.text(640, 513, "CONTINUE", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }))

        juhisedTekst.add(game.make.text(180, 280, "START", { font: "16px Arial", fill: '#fff', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(183, 330, "STOP", { font: "16px Arial", fill: '#fff', fontWeight: "500" }))

    }
}


function mangTekstFunc() {

    //eesti keel
    if (keelevalik == 0) {
        mangTekst.destroy();
        peatumisTekst.destroy();


        mangTekst = game.add.group();
        peatumisTekst = game.add.group();
        peatumisTekst.add(game.make.text(500, 430, "Peatumisteekond (m)", { font: "17px Arial", fill: "black", fontWeight: "300" }));
        mangTekst.add(game.make.text(134, 455, "Kuiv teekate", { font: "14px Arial", fill: "black", fontWeight: "300" }));
        mangTekst.add(game.make.text(134, 489, "Märg teekate", { font: "14px Arial", fill: "black", fontWeight: "300" }));
        mangTekst.add(game.make.text(132, 523, "Jäine teekate", { font: "14px Arial", fill: "black", fontWeight: "300" }));


    }
    //vene keel
    if (keelevalik == 1) {
        mangTekst.destroy();
        peatumisTekst.destroy();



        mangTekst = game.add.group();
        peatumisTekst = game.add.group();
        peatumisTekst.add(game.make.text(500, 430, "Длина остановочного пути (м)", { font: "17px Arial", fill: "black", fontWeight: "300" }));
        mangTekst.add(game.make.text(143, 454, "Сухое покрытие", { font: "12px Arial", fill: "black", fontWeight: "300" }));
        mangTekst.add(game.make.text(140, 488, "Мокрое покрытие", { font: "12px Arial", fill: "black", fontWeight: "300" }));
        mangTekst.add(game.make.text(130, 522, "Обледенелое покрытие", { font: "11px Arial", fill: "black", fontWeight: "300" }));

    }
    //inglise keel
    if (keelevalik == 2) {
        mangTekst.destroy();
        peatumisTekst.destroy();


        mangTekst = game.add.group();
        peatumisTekst = game.add.group();
        peatumisTekst.add(game.make.text(500, 430, "Stopping distance (m)", { font: "17px Arial", fill: "black", fontWeight: "300" }));
        mangTekst.add(game.make.text(140, 453, "Dry surface", { font: "14px Arial", fill: "black", fontWeight: "300" }));
        mangTekst.add(game.make.text(139, 487, "Wet surface", { font: "14px Arial", fill: "black", fontWeight: "300" }));
        mangTekst.add(game.make.text(140, 521, "Icy surface", { font: "14px Arial", fill: "black", fontWeight: "300" }));


    }
}


// teekatte valimise funktsioon, mis vahetab nupu välimust
function teekateNupuFunc() {
    if (keelevalik == 0 || keelevalik == 2) {
        teekateNupudDel();

        teekate_1 = game.add.button(123, 450, 'teekate_1', onClickTeekate_1, this, 2, 2, 2);
        teekate_2 = game.add.button(123, 484, 'teekate_2', onClickTeekate_2, this, 1, 0, 2);
        teekate_3 = game.add.button(123, 518, 'teekate_3', onClickTeekate_3, this, 1, 0, 2);

    }
    if (keelevalik == 1) {
        teekateNupudDel();

        teekate_1 = game.add.button(123, 450, 'teekate_vene1', onClickTeekate_1, this, 2, 2, 2);
        teekate_2 = game.add.button(123, 484, 'teekate_vene2', onClickTeekate_2, this, 1, 0, 2);
        teekate_3 = game.add.button(123, 518, 'teekate_vene3', onClickTeekate_3, this, 1, 0, 2);

    }
}



