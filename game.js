const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update

});



function preload () {
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
    game.load.image('rist', 'assets/rist.png');
    game.load.image('hyyumark', 'assets/hyyumark.png');
    game.load.image('kiiruseNupp', 'assets/nupp.png');


    game.load.image('lipp', 'assets/lipp.png');
    game.load.image('lippMust', 'assets/lipp_must.png');



    game.load.image('l6puLause_1_1', 'assets/tagasiside1_1.png');
    game.load.image('l6puLause_1_2', 'assets/tagasiside1_2.png');
    game.load.image('l6puLause_1_3', 'assets/tagasiside1_3.png');
    game.load.image('l6puLause_1_4', 'assets/tagasiside1_4.png');
    game.load.image('l6puLause_2', 'assets/tagasiside2.png');
    game.load.image('l6puLause_3_1', 'assets/tagasiside3_1.png');
    game.load.image('l6puLause_3_2', 'assets/tagasiside3_2.png');
    game.load.image('l6puLause_3_3', 'assets/tagasiside3_3.png');
    game.load.image('l6puLause_3_4', 'assets/tagasiside3_4.png');
    
    game.load.image('avaleht', 'assets/avaleht.png');
    game.load.image('juhised', 'assets/juhised.png');
    game.load.image('l6puTiiter', 'assets/lopp.png');
    game.load.image('nupuTaust', 'assets/nuputaust.png');
    game.load.image('keeleNupuTaust', 'assets/keelenuputaust.png');

    game.load.audio('breaking_sound', 'assets/audio/pidur.ogg');
    game.load.audio('k2ivitus_sound', 'assets/audio/k2ivitus_l6igatud.ogg');
    game.load.audio('mootoriheli_loop', 'assets/audio/mootoriheli_loop.ogg');
    game.load.audio('driving_sound', 'assets/audio/kiirendusjasoit.ogg');

    // nupude pildid
    game.load.spritesheet('startStopNupp', 'assets/startstop_nupp.png', 150, 50);
    game.load.spritesheet('uuestiNupp', 'assets/proovinuuesti.png', 200, 51);

    game.load.spritesheet('proovinNupp', 'assets/sinine_nupp.png', 150, 50);
    game.load.spritesheet('jatkanNupp', 'assets/sinine_nupp.png', 150, 50);

    game.load.spritesheet('l6petanNupp', 'assets/lopetan.png', 150, 50);
    game.load.spritesheet('heliNupp', 'assets/helinupp.png', 35, 35);
    game.load.spritesheet('juhisedNupp', 'assets/juhisednupp.png', 35, 35);
    game.load.spritesheet('linkNupp', 'assets/link.png', 314, 17);


        
    game.load.spritesheet('teekate_1', 'assets/teekate_nupp.png', 104, 25);
    game.load.spritesheet('teekate_2', 'assets/teekate_nupp.png', 104, 25);
    game.load.spritesheet('teekate_3', 'assets/teekate_nupp.png', 104, 25);

    game.load.spritesheet('teekate_vene1', 'assets/teekate_nupp_vene.png', 133, 25);
    game.load.spritesheet('teekate_vene2', 'assets/teekate_nupp_vene.png', 133, 25);
    game.load.spritesheet('teekate_vene3', 'assets/teekate_nupp_vene.png', 133, 25);


/*     game.load.spritesheet('teekate_4', 'assets/kruusatee_nupp.png', 104, 25);
 
    game.load.spritesheet('rehv_1', 'assets/suverehvid_nupp.png', 104, 25);
    game.load.spritesheet('rehv_2', 'assets/kulunudrehvid_nupp.png', 104, 25);
    game.load.spritesheet('rehv_3', 'assets/naastrehvid_nupp.png', 104, 25);
    game.load.spritesheet('rehv_4', 'assets/lamellrehvid_nupp.png', 104, 25); */

    //juhiste lehe pisikesed nupud
    game.load.spritesheet('mumm', 'assets/mumm.png', 15, 15);
    game.load.spritesheet('lipuke', 'assets/lipuke.png', 22, 22);
    game.load.spritesheet('juhendistart', 'assets/juhendistart.png', 75, 26);
    game.load.spritesheet('juhendistop', 'assets/juhendistop.png', 76, 26);



    game.load.spritesheet('est', 'assets/est.png', 35, 35);
    game.load.spritesheet('rus', 'assets/rus.png', 35, 35);
    game.load.spritesheet('eng', 'assets/eng.png', 35, 35);

    // tekstid
   
    game.load.text('avalehtTekst', 'assets/text_est/avaleht.txt');
    game.load.text('avalehtTestin', 'assets/text_est/avaleht_testin.txt');


   

}
keelevalik = 0;
takistuseKaugus = 5000;
var takistusTeke;

function create () {

    
    this.game.scale.pageAlignHorizontally = true;//this.game.scale.refresh();
    
    
    
    game.physics.startSystem(Phaser.Physics.ARCADE)
    



    // mängu aken
    teavasJaPilved = game.add.tileSprite(0, -25, 800, 450, 'teavasJaPilved')


    majadJaTee = game.add.sprite(0, 29, 'majadJaTee')
    for (i = 1; i < 3; i++) {
        majadJaTee.addChild(game.make.sprite(i*1705, 0, 'majadJaTee'))
    }



//    majadJaTee.smoothed = false;

    alumineMenuu = game.add.sprite(0, 425, 'alumineMenuu');

    // kastike ymber kiiruse nupukese  ;
    bounds = new Phaser.Rectangle(325, game.world.height - 97,246,20);
    
    /* vajadusel saab kastikiese ka v2lja joonistada:
    var graphics = game.add.graphics(bounds.x, bounds.y);
    graphics.beginFill(0x000077);
    graphics.drawRect(0, 0, bounds.width, bounds.height);
    */
    

    takistus = game.add.sprite(takistuseKaugus, game.world.height - 270, 'kits')

    kiiruseNupp = game.add.sprite(370.6, game.world.height - 97, 'kiiruseNupp')

    game.physics.arcade.enable(kiiruseNupp)     
    kiiruseNupp.inputEnabled = true;
    kiiruseNupp.input.enableDrag(false,false,false,250,bounds);
    kiiruseNupp.input.allowVerticalDrag = false;
    
    kiiruseNupp.events.onDragStop.add(dragStop);

    // game.physics.arcade.enable(player)
    game.physics.arcade.enable(majadJaTee)
    game.physics.arcade.enable(takistus)
    mangTekst  = game.add.group();
    peatumisTekst = game.add.group();

    
    

    startStopNupp = game.add.button(625, 484, 'startStopNupp', actionOnClick_ss, this, 0, 0, 0);
    startTekst  = game.add.group();
    startTekst.add(game.make.text(664,497,"START", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    
    
    teekate_1 = game.add.button(123, 450, 'teekate_1', onClickTeekate_1, this, 2, 2, 2);
    teekate_2 = game.add.button(123, 484, 'teekate_2', onClickTeekate_2, this, 1, 0, 2);
    teekate_3 = game.add.button(123, 518, 'teekate_3', onClickTeekate_3, this, 1, 0, 2);

    mangTekstFunc();
    
    // boundsM66dik = new Phaser.Rectangle(346, 360, 425, 65);
    boundsM66dik = new Phaser.Rectangle(375, 360, 425, 65);
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
    mumm = game.add.sprite(436, 183, 'mumm');
    lipuke = game.add.sprite(562, 228, 'lipuke');
    juhendistart = game.add.sprite(321, 276, 'juhendistart');    
    juhendistop = game.add.sprite(488, 325, 'juhendistop');    

    juhisedTekst  = game.add.group();
   
    // Avaleht
    avaleht = game.add.sprite(0, 0, 'avaleht')   
    game.physics.arcade.enable(avaleht)
    proovinNupp = game.add.button(325, 400, 'proovinNupp', proovinClick, this, 0, 0, 0);
    //esialgu on rakendus eestikeelne
    avalehtTekst  = game.add.group();
    avalehtTekst.add(game.make.text(357,412,"TESTIN!", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    avalehtTekst.add(game.make.text(163, 300, "Kas tead, kui pikk on peatumisteekond autoga sõites?\n Testi oma teadmisi!",{ font: "20px Arial", fill: '#000', fontWeight: "500",align: 'center' }))




    
    
    
    /* // võtan nupu teksti muutujast
    proovinText = game.cache.getText('avalehtTestin');
    // panen teksti kuvama
    proovinTekst = game.add.text(357, 412, proovinText,  { font: "22px Arial", fill: '#ffffff', fontWeight: "500" });
    //avalehe tekst
    avalehtText = game.cache.getText('avalehtTekst');
    // panen teksti kuvama
    avalehtTekst = game.add.text(163, 300, avalehtText,  { font: "20px Arial", fill: '#000', fontWeight: "500",align: 'center' }); */



    // nupud heli ja juhised --- SEE TULEKS SIIT VIIA ÄRA ----
    //nupuTaust = game.add.sprite(675, 20, 'nupuTaust')   
    //game.physics.arcade.enable(nupuTaust)
    //heliNupp = game.add.button(685, 27, 'heliNupp', heliClick, this, 1, 1, 1);
    //juhisedNupp = game.add.button(730, 27, 'juhisedNupp', juhisedClick, this, 0, 0, 0);
    //juhisedNupp.inputEnabled = false;    

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
    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT, Phaser.Keyboard.SPACEBAR ]);

    game.input.keyboard.onPressCallback = function(e){console.log("key pressed", e);}
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
    efe = 10*4;    

//   kiirus2 = ((kiiruseNupp.body.position.x - bounds.x)/(bounds.width-18)*100)+30;
//    efe = kiirus*4;

    tekstiStiil = {font: "16px Arial", fill: "black"}; //fontWeight: "bold"};
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
    pidurdusKonfitsent = 1.5*teeolu_var*4;
    
    efe2 = 0;
    efe3 = 0;
    
    startStopInt = 0;
    
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
        kiirus = ((kiiruseNupp.body.position.x - bounds.x)/(bounds.width-18)*100)+30;
        efe = kiirus*4;
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
        kiirus = ((kiiruseNupp.body.position.x - bounds.x)/(bounds.width-18)*100)+30;
        efe = kiirus*4;
        player.body.velocity.x = efe;
        if (player.body.position.x >= 50) {
            teavasJaPilved.tilePosition.x = teavasJaPilved.tilePosition.x -0.005*efe;
            player.body.velocity.x = 0;
            majadJaTee.body.velocity.x = -1*efe;
            takistus.body.velocity.x = -1*efe;    
        }    
    }



function update () {
    
    if (this.spaceKey.isDown && autoLiikumine == 1 && juhisedInt % 2 == 0 || startStopInt == 1 && taustaLiikumine == 0){
    //    if (this.spaceKey.isDown && player.body.position.x  == 0){
        startStopInt = 1;       
        
                
        // auto k2ivitusheli if
        if (efe2 == 0) { 
            startStopNupp.destroy(); 
            startTekst.destroy();   
            peatumisTekst.destroy();

            startStopNupp = game.add.button(625, 484, 'startStopNupp', actionOnClick_ss, this, 1, 1, 1);
            startTekst  = game.add.group();
            startTekst.add(game.make.text(664,497,"STOP", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));


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
        
        console.log(efe2, efe3)
        
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
        } else if (this.spaceKey.isDown && autoPidurdus == 1 || startStopInt > 1 && autoPidurdus == 1) {
        // } else if (this.spaceKey.isDown && autoPidurdus == 1) {

            if (taustaLiikumine == 1) {
            pidurdusAlgPunkt = player.body.position.x + 185;
            }
            
            taustaLiikumine = 2;
            autoFullStop = 1;
            
            majadJaTee.body.velocity.x = 0;
            takistus.body.velocity.x = 0;
        
            
            efe = efe - pidurdusKonfitsent;
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
                       

    } else if (autoFullStop == 1 ) { 

        otsaSoit();
        // kitse e. takistuse peatumine
        takistus.body.velocity.x = 0;
        majadJaTee.body.velocity.x = 0;
        
        efe = efe - pidurdusKonfitsent;
        player.body.velocity.x = efe;

        // kui debugda vaja on, siis vb on vaja neli alumist rida tagasi sisse kommenteerida
        // console.log(efe2, efe3)
        // console.log("majad ja teed: ", majadJaTee.body.velocity.x)
        // console.log("Auto sõidetud distants: ", player.body.position.x + 185)
        // console.log(efe)

        if (efe < 2){
        autoFullStop = 0;
        player.body.velocity.x = 0;
        console.log("Game Over")
        console.log("Auto positsioon: ", player.body.position.x + 185, "Kitse positsioon: ", takistus.body.position.x)
        console.log("Auto kiirus km/h: ", kiirus,"Pidurdus teekond meetrites", (player.body.position.x + 185 - pidurdusAlgPunkt)/4)
        l6puLause_kuva();
        }
        autoPidurdus = 0;

    } else if (lipu_var == 1) {
        // m66dustik liigub vasakule
        if (lipp.x > 708 && kiiruseM66dik.x >= -590) {
            kiiruseM66dik.x = kiiruseM66dik.x - 3
        
        // m66dustik liigub paremale
        } else if (lipp.x < 467 && kiiruseM66dik.x <= 409-3) {
            kiiruseM66dik.x = kiiruseM66dik.x + 3        
        }


    }  

}

// convert myfigure.png -resize 200x100 myfigure.jpg
// r-type must auto: orig oli 500x155
// convert -resize 37% auto3.png  car_r.png
// majadJaTee majadLompidega majadLumine

// Kuiv	asfalt 		0.75		(0,7-0,8) - 100% meie m2ngus
// Kuiv	pinnastee	0.55		(0,5-0,6) - pidurdus * (2.2/3) 
// Lumine tee		0.25		(0,2-0,3) - pidurdus * (1.0/3)



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
            majadJaTee.addChild(game.make.sprite(i*1705, 0, tee_var))
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
        console.log("teekate1 nupp vajutatud")
        teekate_2 = game.add.button(123, 484, 'teekate_2', onClickTeekate_2, this, 1, 0, 2);
        teekate_3 = game.add.button(123, 518, 'teekate_3', onClickTeekate_3, this, 1, 0, 2);
    }
    if (keelevalik == 1) {
        teekate_1 = game.add.button(123, 450, 'teekate_vene1', onClickTeekate_1, this, 2, 2, 2);
        console.log("teekate1 nupp vajutatud")
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
        console.log("teekate2 nupp vajutatud")
        teekate_1 = game.add.button(123, 450, 'teekate_1', onClickTeekate_1, this, 1, 0, 2);
        teekate_3 = game.add.button(123, 518, 'teekate_3', onClickTeekate_3, this, 1, 0, 2);
    }
    if (keelevalik == 1) {
        teekate_2 = game.add.button(123, 484, 'teekate_vene2', onClickTeekate_2, this, 2, 2, 2);
        console.log("teekate2 nupp vajutatud")
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
        console.log("teekate3 nupp vajutatud")
        teekate_1 = game.add.button(123, 450, 'teekate_1', onClickTeekate_1, this, 1, 0, 2);
        teekate_2 = game.add.button(123, 484, 'teekate_2', onClickTeekate_2, this, 1, 0, 2);
        
    }
    if (keelevalik == 1) {
        teekate_3 = game.add.button(123, 518, 'teekate_vene3', onClickTeekate_3, this, 2, 2, 2);
        console.log("teekate3 nupp vajutatud")
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
    
    startStopNupp = game.add.button(625, 484, 'startStopNupp', actionOnClick_ss, this, 0, 0, 0);
    //this.input.keyboard.enabled = true;
    startTekst  = game.add.group();
    startTekst.add(game.make.text(664,497,"START", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
    
        
    nupuTaust = game.add.sprite(675, 20, 'nupuTaust')   
    game.physics.arcade.enable(nupuTaust)
    heliNupuTeke();
    juhisedNupp = game.add.button(730, 27, 'juhisedNupp', juhisedClick, this, 0, 0, 0);

    setTimeout(engineSoundStartFunc, 800);
    k2ivitus_sound.play();
    
}

function onClickL6petan() {
    l6puTiiter = game.add.sprite(0, 0, 'l6puTiiter')   
    game.physics.arcade.enable(l6puTiiter)
    uuestiNupp.inputEnabled = false;
    l6petanNupp.inputEnabled = false;
    startStopNupp.inputEnabled = false;
    startStopNupp.input.useHandCursor = false;
    mntLinkFunc(238,223)
}


function dragStop() {

    console.log("kiiruse nupp just lasti lahti")
    console.log(teeValik)
    kiiruseCalc();
    console.log(teeValik);
    
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
            kiiruseM66dik = game.add.sprite(kiiruseM66dikX_var,389, 'kiiruseM66dik_Must');
            maaGradient = game.add.sprite(0, 365, 'lumiGradient');
        
        } else {
            lipp = game.add.sprite(lippX_var, 392, 'lipp')
            kiiruseM66dik = game.add.sprite(kiiruseM66dikX_var,389, 'kiiruseM66dik');
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
        lipp.input.enableDrag(false,false,false,250,boundsM66dik);
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
    console.log("lipu nupp just lasti lahti")
    console.log(lipp.body.position.x);
    ennustus = Math.round(((lipp.body.position.x - 375 + 409 - kiiruseM66dik.x)/4  + Number.EPSILON) * 100) / 100;
    console.log(ennustus);
    kiiruseM66dikX_var = kiiruseM66dik.x;
    lippX_var = lipp.x;
}

function otsaSoit() {
    if (takistus.x <= (player.x + 185) && efe3 == 0) {
        // automaatne pidurdus
        startStopInt = 2;
        autoPidurdus = 1;
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
    if (proloog == 1 && ennustus == 0) {
        lopuText_1();
    }
    else if (proloog == 0) {
        lopuText_2();
    }    
    else if (proloog == 1 && ennustus > 0) {
        lopuText_3();
    }
}

var mntLink;
function mntLinkFunc(xx,yy) {
    // mntLink = game.add.text(133, 428, "https://kiirus.mnt.ee/vota-aega-mitte-elu", { font: "20px Arial", fill: "blue" });
    mntLink = game.add.button(xx, yy, 'linkNupp', onClickLink, this, 0, 0, 0);
}

function onClickLink() {
    window.open("https://kiirus.mnt.ee/vota-aega-mitte-elu", "_blank");
}

//pidurdus ilma liputa
function lopuText_1() {   
    
    // liputa_var on muutuja mis tekitatakse randomiga, valikuks kas I, II, III, voi IV lopulause (ilma liputa)pilti kasutatkse l6putekstina
    liputa_var = "" + unToRandom(4,'l6puLause_1_');
    console.log(liputa_var, " on liputa var");    
    l6puLause = game.add.sprite(0, 0, liputa_var); 
    game.physics.arcade.enable(l6puLause)
    num = ((kiirus*kiirus)/100)*0.55*(1/teeolu_var)    
    textGroup = game.add.group();          
    //auto kiirus
    //textGroup.add(game.make.text(135, 350,Math.round((kiirus + Number.EPSILON) * 100) / 100, { font: "20px Arial", fill: "black" }));
    //reageerimisaeg
    if (currentTime2 > currentTime1) {
        reagAeg();
        textGroup.add(game.make.text(340, 209,reag_var, tekstiStiil));
        // peatumisTeekond = pidurdusteekond + rageermisteekond(meetrites))
        peatumisTeekond = Math.round((num + reagMmeeter_var + Number.EPSILON) * 100) / 100  
        //peatumisteekond meetrites
        textGroup.add(game.make.text(448, 302, peatumisTeekond, tekstiStiil));
         //reageerimisteekond meetrid
        textGroup.add(game.make.text(210, 229, reagMmeeter_var, tekstiStiil));
        //peatumisaeg sekundites
        pidurdusAeg = (kiirus/3.6) / (7.5 * teeolu_var);
        textGroup.add(game.make.text(603, 302, Math.round((pidurdusAeg + reag_var + Number.EPSILON) * 100) / 100, tekstiStiil));
        mntLinkFunc(126,437);
    }
   
    //pidurdusteekond
    textGroup.add(game.make.text(313, 265, Math.round((num + Number.EPSILON) * 100) / 100, tekstiStiil));
    
    


    textGroup.setAll('anchor.x', 0.5);
    textGroup.setAll('anchor.y', 0.5);
    // 7 mai martini lisatud read
    uuestiNupp = game.add.button(490, 480, 'uuestiNupp', onClickUuesti, this, 0, 0, 0);
    l6petanNupp = game.add.button(125, 480, 'l6petanNupp', onClickL6petan, this, 0, 0, 0);

}

//pidurdasid liiga vara
function lopuText_2() {    
    l6puLause = game.add.sprite(0, 0, 'l6puLause_2') 
    game.physics.arcade.enable(l6puLause)
    // 7 mai martini lisatud read
    uuestiNupp = game.add.button(490, 325, 'uuestiNupp', onClickUuesti, this, 0, 0, 0);
    l6petanNupp = game.add.button(135, 325, 'l6petanNupp', onClickL6petan, this, 0, 0, 0);
    textGroup = game.add.group();
    //et proovi uuestiga saaks texgroupi kustutada
    textGroup.add(game.make.text(1000, 1000, ennustus, tekstiStiil));
    mntLinkFunc(3500,100);
}

function lopuText_3() {
    //pidurdus lipuga
    // lipuga_var on muutuja mis tekitatakse randomiga, valikuks kas I, II, III, voi IV lopulause (lipuga)pilti kasutatkse l6putekstina
    lipuga_var = "" + unToRandom(4,'l6puLause_3_');
    console.log(lipuga_var, " on lipuga var");    
    l6puLause = game.add.sprite(0, 0, lipuga_var) 
    game.physics.arcade.enable(l6puLause)
    num = ((kiirus*kiirus)/100)*0.55*(1/teeolu_var)

    textGroup = game.add.group();
    //lipu ennustus
    textGroup.add(game.make.text(550, 213, ennustus, tekstiStiil));
    
    
    //reageerimisaeg
    if (currentTime2 > currentTime1) {
        reagAeg();
        textGroup.add(game.make.text(344, 311, reag_var, tekstiStiil));           
        // peatumisTeekond = pidurdusteekond + rageermisteekond(meetrites))
        peatumisTeekond = Math.round((num + reagMmeeter_var + Number.EPSILON) * 100) / 100  
        //reageerimisajal läbitud meetrid
        textGroup.add(game.make.text(250, 331, reagMmeeter_var, tekstiStiil));
        // tegelik peatumisteekond meetrites
        textGroup.add(game.make.text(380, 252, peatumisTeekond, tekstiStiil));  
        // peatumisaeg sekundites
        pidurdusAeg = (kiirus/3.6) / (7.5 * teeolu_var);
        textGroup.add(game.make.text(199, 272, Math.round((pidurdusAeg + reag_var + Number.EPSILON) * 100) / 100, tekstiStiil));    
        mntLinkFunc(126,437);
    }
    //reageerimisajal läbitud meetrid
    //textGroup.add(game.make.text(250, 331, reagMmeeter_var, tekstiStiil));
    // tegelik peatumisteekond meetrites
    //textGroup.add(game.make.text(380, 252, "100.22", tekstiStiil));

    textGroup.setAll('anchor.x', 0.5);
    textGroup.setAll('anchor.y', 0.5);
    // 7 mai martini lisatud read
    uuestiNupp = game.add.button(490, 480, 'uuestiNupp', onClickUuesti, this, 0, 0, 0);
    l6petanNupp = game.add.button(125, 480, 'l6petanNupp', onClickL6petan, this, 0, 0, 0);

}



//test


function podraTeke() {
    // num, ehk pidurdustee var ; sinna otsa liidame reageerimis aja
    // ning korrutame neljaga, et saada distants pixli kauguses
    // PS! reageermis aeg pixlites = meeterid*4 ; 50km/h läbib auto 200px/s ja 100km/h läbib auto 400px/s
    reagJaPidur = ((kiirus*kiirus)/100)*0.55*(1/teeolu_var) + kiirus
    takistuseKaugus2 = ((reagJaPidur*4) + 50 + 185)      

    if (takistuseKaugus2 > 770) {
        console.log(takistuseKaugus2, "oli")
        takistuseKaugus2 = 770
    }    

    takistus.destroy();
    
    takistus = game.add.sprite(takistuseKaugus2, game.world.height - 242, 'kits')
    game.physics.arcade.enable(takistus)
    
    console.log(takistuseKaugus2)
    proloog = 1;

    currentTime1 = +new Date();

}

function heliClick() {
    heliInt +=1;
    heliNupuTeke();
}

function heliNupuTeke() { 
    heliNupp.destroy()    
    if (heliInt % 2 == 0){
              
        heliNupp = game.add.button(685, 27, 'heliNupp', heliClick, this, 1, 1, 1);
        game.sound.mute = false;
    }
    else {
        heliNupp = game.add.button(685, 27, 'heliNupp', heliClick, this, 0, 0, 0);
        game.sound.mute = true;
    }
}


function juhisedClick() {
    juhisedInt +=1;
    console.log(juhisedInt, "juhisedint")
    juhisedNupp.destroy();
    if (juhisedInt % 2 == 1) {
        heliNupp.destroy();        
        console.log('juhisednupp vajutatud')
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
    return(el_string+(Math.floor(Math.random()*el_num)+1))
}

// peatumisTeekond var on pidurdusteekond + reageerimis ajal l2bitud meetrid
var peatumisTeekond;

var reag_var;
var reagMmeeter_var;
// reag_var on reageerimis aeg, sekundites ; reagMmeeter_var on reageerimis ajal l2bitud meetrid
function reagAeg() {
    reag_var = Math.round(((currentTime2 - currentTime1) + Number.EPSILON)*100) / 100000
    reagMmeeter_var = Math.round(((kiirus/3.6*reag_var) + Number.EPSILON)*100) / 100
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
    estInt +=1;
    estFunk();    
}

function rusClick() {
    rusInt +=1;
    rusFunk();
}

function engClick() {
    engInt +=1;
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
        console.log(keelevalik)
        //kõigepealt kontrolli kas oled avalehel
        if (avalehtKontroll == 0) {
            avalehtTekst.destroy();
            avalehtTekst  = game.add.group();
            avalehtTekst.add(game.make.text(357,412,"TESTIN!", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
            avalehtTekst.add(game.make.text(163, 300, "Kas tead, kui pikk on peatumisteekond autoga sõites?\n Testi oma teadmisi!",{ font: "20px Arial", fill: '#000', fontWeight: "500",align: 'center' }))
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
        console.log(keelevalik);
        if (avalehtKontroll == 0) {
            avalehtTekst.destroy();
            avalehtTekst  = game.add.group();
            avalehtTekst.add(game.make.text(340,413,"проверяй!", { font: "19px Arial", fill: '#ffffff', fontWeight: "500"})); // TEE SUUREKS
            avalehtTekst.add(game.make.text(40, 300, "Тебе известно, какой длины получается остановочный путь, двигаясь на автомобиле? \n Проверь свои знания! ",{ font: "18px Arial", fill: '#000', fontWeight: "500",align: 'center' }))
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
        console.log(keelevalik);
        if (avalehtKontroll == 0) {
            avalehtTekst.destroy();
            avalehtTekst  = game.add.group();
            avalehtTekst.add(game.make.text(342,412,"TAKE TEST", { font: "22px Arial", fill: '#ffffff', fontWeight: "500" }));
            avalehtTekst.add(game.make.text(157, 300, "Do you know what the stopping distance is when driving?\n Test yourself to find out how much you know! ",{ font: "20px Arial", fill: '#000', fontWeight: "500",align: 'center' }))
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

        mumm = game.add.sprite(436, 183, 'mumm');
        lipuke = game.add.sprite(562, 228, 'lipuke');
        juhendistart = game.add.sprite(321, 276, 'juhendistart');    
        juhendistop = game.add.sprite(488, 325, 'juhendistop');    
    
        juhisedTekst  = game.add.group();
        juhisedTekst.add(game.make.text(337,50,"Juhend", { font: "42px Arial", fill: '#000', fontWeight: "500" }));
        juhisedTekst.add(game.make.text(100, 128, "Teekatte valimiseks kliki sobival nupul.",{ font: "20px Arial", fill: '#000', fontWeight: "500"}))
        juhisedTekst.add(game.make.text(100, 178, "Sõidukiiruse valimiseks libista mumm     sobiva kiiruse juurde.",{ font: "20px Arial", fill: '#000', fontWeight: "500"}))
        juhisedTekst.add(game.make.text(100, 228, "Peatumisteekonna pikkuse määramiseks libista lipp      sobivale kaugusele.",{ font: "20px Arial", fill: '#000', fontWeight: "500"}))
        juhisedTekst.add(game.make.text(100, 278, "Sõidu alustamiseks kliki                 nuppu või tühiku klahvi.",{ font: "20px Arial", fill: '#000', fontWeight: "500"}))
        juhisedTekst.add(game.make.text(100, 328, "Auto peatamiseks, takistuse ilmumisel, kliki                nuppu või tühiku klahvi.",{ font: "20px Arial", fill: '#000', fontWeight: "500"}))
    
        juhisedTekst.add(game.make.text(100, 522, "Kliki heli vaigistamiseks",{ font: "20px Arial", fill: '#000', fontWeight: "500"}))
        juhisedTekst.add(game.make.text(375, 522, "Kliki juhiste vaatamiseks",{ font: "20px Arial", fill: '#000', fontWeight: "500"}))
    
        juhisedTekst.add(game.make.text(653, 515, "JÄTKAN!",{ font: "22px Arial", fill: '#ffffff', fontWeight: "500" }))    
        
        juhisedTekst.add(game.make.text(330, 279, "START!",{ font: "16px Arial", fill: '#fff', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(496, 329, "STOPP!",{ font: "16px Arial", fill: '#fff', fontWeight: "500" }))
        
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

        juhisedTekst  = game.add.group();
        juhisedTekst.add(game.make.text(290,26,"Инструкция", { font: "42px Arial", fill: '#000', fontWeight: "500" }));
        juhisedTekst.add(game.make.text(90, 127, "Для выбора дорожного покрытия нажми на подходящую кнопку.",{ font: "18px Arial", fill: '#000', fontWeight: "500"}))
        juhisedTekst.add(game.make.text(90, 178, "Для выбора скорости движения перемести кнопку     на подходящую скорость.",{ font: "18px Arial", fill: '#000', fontWeight: "500"}))
        juhisedTekst.add(game.make.text(90, 218, "Для выбора предполагаемой длины остановочного пути установи флажок\nна подходящем расстоянии.",{ font: "18px Arial", fill: '#000', fontWeight: "500"}))
        juhisedTekst.add(game.make.text(90, 278, "Для начала движения нажми на кнопку                  или на клавишу пробел.",{ font: "18px Arial", fill: '#000', fontWeight: "500"}))
        juhisedTekst.add(game.make.text(90, 318, "Для остановки автомобиля нажми на кнопку                  или на клавишу пробел\nпри появлении знака STOP.",{ font: "18px Arial", fill: '#000', fontWeight: "500"}))

        juhisedTekst.add(game.make.text(95, 512, "Для выключения\nзвука нажми",{ font: "16px Arial", fill: '#000', fontWeight: "500"}))
        juhisedTekst.add(game.make.text(370, 512, "Для просмотра\nинструкций нажми",{ font: "16px Arial", fill: '#000', fontWeight: "500"}))

        juhisedTekst.add(game.make.text(650, 515, "ДАЛЬШЕ!",{ font: "22px Arial", fill: '#ffffff', fontWeight: "500" }))

        juhisedTekst.add(game.make.text(440, 280, "START",{ font: "14px Arial", fill: '#fff', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(485, 320, "STOP",{ font: "14px Arial", fill: '#fff', fontWeight: "500" }))
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

        juhisedTekst  = game.add.group();
        juhisedTekst.add(game.make.text(290,28,"Instructions", { font: "42px Arial", fill: '#000', fontWeight: "500" }));
        juhisedTekst.add(game.make.text(90, 126, "Click on a road surface.",{ font: "20px Arial", fill: '#000', fontWeight: "500"}))
        juhisedTekst.add(game.make.text(90, 176, "Slide the button     to select a speed.",{ font: "20px Arial", fill: '#000', fontWeight: "500"}))
        juhisedTekst.add(game.make.text(90, 226, "Slide the flag      to the point you think marks the stopping distance.",{ font: "20px Arial", fill: '#000', fontWeight: "500"}))
        juhisedTekst.add(game.make.text(90, 276, "Click on                or hit the spacebar to begin.",{ font: "20px Arial", fill: '#000', fontWeight: "500"}))
        juhisedTekst.add(game.make.text(90, 326, "Click on                or hit the spacebar again when the stop sign appears.",{ font: "20px Arial", fill: '#000', fontWeight: "500"}))

        juhisedTekst.add(game.make.text(95, 512, "To turn off sound,\nclick on",{ font: "18px Arial", fill: '#000', fontWeight: "500"}))
        juhisedTekst.add(game.make.text(370, 512, "To read the instructions,\nclick on",{ font: "18px Arial", fill: '#000', fontWeight: "500"}))

        juhisedTekst.add(game.make.text(640, 513, "CONTINUE",{ font: "22px Arial", fill: '#ffffff', fontWeight: "500" }))

        juhisedTekst.add(game.make.text(180, 280, "START",{ font: "16px Arial", fill: '#fff', fontWeight: "500" }))
        juhisedTekst.add(game.make.text(183, 330, "STOP",{ font: "16px Arial", fill: '#fff', fontWeight: "500" }))
        
    }
}


function mangTekstFunc() {

    //eesti keel
    if (keelevalik == 0) {
        mangTekst.destroy();  
        peatumisTekst.destroy();
         
    
        mangTekst  = game.add.group();
        peatumisTekst = game.add.group();
        peatumisTekst.add(game.make.text(500,430,"Peatumisteekond (m)", { font: "17px Arial", fill: "black", fontWeight : "300"}));
        mangTekst.add(game.make.text(134,455,"Kuiv teekate", { font: "14px Arial", fill: "black", fontWeight : "300"}));
        mangTekst.add(game.make.text(134,489,"Märg teekate", { font: "14px Arial", fill: "black", fontWeight : "300"}));
        mangTekst.add(game.make.text(132,523,"Jäine teekate", { font: "14px Arial", fill: "black", fontWeight : "300"}));
        
        
    }
    //vene keel
    if (keelevalik == 1) {
        mangTekst.destroy();
        peatumisTekst.destroy();
       
        
         
        mangTekst  = game.add.group();
        peatumisTekst = game.add.group();
        peatumisTekst.add(game.make.text(500,430,"Длина остановочного пути", { font: "17px Arial", fill: "black", fontWeight : "300"}));
        mangTekst.add(game.make.text(143,454,"Сухое покрытие", { font: "12px Arial", fill: "black", fontWeight : "300"}));
        mangTekst.add(game.make.text(140,488,"Мокрое покрытие", { font: "12px Arial", fill: "black", fontWeight : "300"}));
        mangTekst.add(game.make.text(130,522,"Обледенелое покрытие", { font: "11px Arial", fill: "black", fontWeight : "300"}));

    }
    //inglise keel
    if (keelevalik == 2) {
        mangTekst.destroy();
        peatumisTekst.destroy();
        
    
        mangTekst  = game.add.group();
        peatumisTekst = game.add.group();
        peatumisTekst.add(game.make.text(500,430,"Stopping distance", { font: "17px Arial", fill: "black", fontWeight : "300"}));
        mangTekst.add(game.make.text(140,453,"Dry surface", { font: "14px Arial", fill: "black", fontWeight : "300"}));
        mangTekst.add(game.make.text(139,487,"Wet surface", { font: "14px Arial", fill: "black", fontWeight : "300"}));
        mangTekst.add(game.make.text(140,521,"Icy surface", { font: "14px Arial", fill: "black", fontWeight : "300"}));

        
    }
}


function teekateNupuFunc() {


    if (keelevalik == 0 || keelevalik == 2){
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