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
    game.load.image('maaKruus', 'assets/maakruus.png');
    game.load.image('maa', 'assets/maa.png');
    game.load.image('maaLombid', 'assets/maalombid.png');
    game.load.image('maaLumine', 'assets/maalumine.png');

    game.load.image('kiiruseM66dik', 'assets/kiirusem66dik.png');
    game.load.image('kiiruseM66dik_Must', 'assets/kiirusem66dik_must.png');
    game.load.image('alumineMenuu', 'assets/alumine.png');
    game.load.image('car', 'assets/car_r.png');
    game.load.image('kits', 'assets/kits.png');
    game.load.image('rist', 'assets/rist.png');
    game.load.image('kiiruseNupp', 'assets/nupp.png');
    game.load.image('lipp', 'assets/lipp.png');
    game.load.image('lippMust', 'assets/lipp_must.png');
    game.load.image('l6puLause_1', 'assets/tagasiside1.png');
    game.load.image('l6puLause_2', 'assets/tagasiside2.png');
    game.load.image('l6puLause_3', 'assets/tagasiside3.png');
    game.load.image('avaleht', 'assets/avaleht.png');
    game.load.image('juhised', 'assets/juhised.png');
    game.load.image('l6puTiiter', 'assets/lopp.png');
    game.load.image('nupuTaust', 'assets/nuputaust.png');

    game.load.audio('breaking_sound', 'assets/audio/pidur.ogg');
    game.load.audio('k2ivitus_sound', 'assets/audio/k2ivitus_l6igatud.ogg');
    game.load.audio('mootoriheli_loop', 'assets/audio/mootoriheli_loop.ogg');

    // nupude pildid
    game.load.spritesheet('startStopNupp', 'assets/startstop_nupp.png', 150, 50);
    game.load.spritesheet('uuestiNupp', 'assets/proovinuuesti.png', 165, 50);
    game.load.spritesheet('proovinNupp', 'assets/proovin.png', 150, 50);
    game.load.spritesheet('jatkanNupp', 'assets/jatkan.png', 130, 50);
    game.load.spritesheet('l6petanNupp', 'assets/lopetan.png', 150, 50);
    game.load.spritesheet('heliNupp', 'assets/helinupp.png', 35, 35);
    game.load.spritesheet('juhisedNupp', 'assets/juhisednupp.png', 35, 35);
    
    game.load.spritesheet('teekate_1', 'assets/kuivasfalt_nupp.png', 104, 25);
    game.load.spritesheet('teekate_2', 'assets/m2rgasfalt_nupp.png', 104, 25);
    game.load.spritesheet('teekate_3', 'assets/lumineasfalt_nupp.png', 104, 25);
/*     game.load.spritesheet('teekate_4', 'assets/kruusatee_nupp.png', 104, 25);
 
    game.load.spritesheet('rehv_1', 'assets/suverehvid_nupp.png', 104, 25);
    game.load.spritesheet('rehv_2', 'assets/kulunudrehvid_nupp.png', 104, 25);
    game.load.spritesheet('rehv_3', 'assets/naastrehvid_nupp.png', 104, 25);
    game.load.spritesheet('rehv_4', 'assets/lamellrehvid_nupp.png', 104, 25); */
}

takistuseKaugus = 5000;
var takistusTeke;

function create () {
    this.game.scale.pageAlignHorizontally = true;this.game.scale.refresh();
    game.physics.startSystem(Phaser.Physics.ARCADE)
    
    
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
    

    player = game.add.sprite(0, game.world.height - 247, 'car')

    takistus = game.add.sprite(takistuseKaugus, game.world.height - 255, 'kits')

    kiiruseNupp = game.add.sprite(370.6, game.world.height - 97, 'kiiruseNupp')

    game.physics.arcade.enable(kiiruseNupp)     
    kiiruseNupp.inputEnabled = true;
    kiiruseNupp.input.enableDrag(false,false,false,250,bounds);
    kiiruseNupp.input.allowVerticalDrag = false;
    
    kiiruseNupp.events.onDragStop.add(dragStop);


    


    game.physics.arcade.enable(player)
    game.physics.arcade.enable(majadJaTee)
    game.physics.arcade.enable(takistus)
    

    startStopNupp = game.add.button(625, 484, 'startStopNupp', actionOnClick_ss, this, 0, 0, 0);
    
    
    teekate_1 = game.add.button(123, 450, 'teekate_1', onClickTeekate_1, this, 2, 2, 2);
    teekate_2 = game.add.button(123, 484, 'teekate_2', onClickTeekate_2, this, 1, 0, 2);
    teekate_3 = game.add.button(123, 518, 'teekate_3', onClickTeekate_3, this, 1, 0, 2);
    //teekate_4 = game.add.button(23, 552, 'teekate_4', onClickTeekate_4, this, 1, 0, 2);

    //rehv_1 = game.add.button(175, 450, 'rehv_1', onClickRehv_1, this, 2, 2, 2); 
    //rehv_2 = game.add.button(175, 484, 'rehv_2', onClickRehv_2, this, 1, 0, 2);
    //rehv_3 = game.add.button(175, 518, 'rehv_3', onClickRehv_3, this, 1, 0, 2);
    //rehv_4 = game.add.button(175, 552, 'rehv_4', onClickRehv_4, this, 1, 0, 2);


    
    boundsM66dik = new Phaser.Rectangle(346, 360, 425, 65);
    //  vajadusel saab kastikiese ka v2lja joonistada:
     /* var graphics = game.add.graphics(boundsM66dik.x, boundsM66dik.y);
    graphics.beginFill(0x000077);
    graphics.drawRect(0, 0, boundsM66dik.width, boundsM66dik.height); */
    
    
    //lipu liigutamine´
    
    lipuTeke()

    //juhised

    juhised = game.add.sprite(0, 0, 'juhised') 
    game.physics.arcade.enable(juhised)    
    jatkanNupp = game.add.button(625, 501, 'jatkanNupp', jatkanClick, this, 0, 0, 0);
   
    // Avaleht
    avaleht = game.add.sprite(0, 0, 'avaleht')   
    game.physics.arcade.enable(avaleht)
    proovinNupp = game.add.button(325, 400, 'proovinNupp', proovinClick, this, 0, 0, 0);

    // nupud heli ja juhised
    nupuTaust = game.add.sprite(675, 20, 'nupuTaust')   
    game.physics.arcade.enable(nupuTaust)
    heliNupp = game.add.button(685, 27, 'heliNupp', heliClick, this, 0, 0, 0);
    juhisedNupp = game.add.button(730, 27, 'juhisedNupp', juhisedClick, this, 0, 0, 0);
    
    
    this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    
    // disablen nupud avalehe ja juhiste all
    kiiruseNupp.inputEnabled = false;
    startStopNupp.inputEnabled = false;
    teekate_1.inputEnabled = false;
    teekate_2.inputEnabled = false;
    teekate_3.inputEnabled = false;
    // teekate_4.inputEnabled = false;
    // rehv_1.inputEnabled = false;
    // rehv_2.inputEnabled = false;
    // rehv_3.inputEnabled = false;
    // rehv_4.inputEnabled = false;
    //et avalehel ei saaks jätka vajutada :@
    jatkanNupp.inputEnabled = false;
    this.input.keyboard.enabled = false;   
    
    cursors = game.input.keyboard.createCursorKeys()
    
//    elcursors = game.input.keyboard.addCallbacks(context, onDown, onUp, onPress)
//    cursors = game.input.keyboard.addCallbacks()

    // this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    // this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
   
    

    //  Stop the following keys from propagating up to the browser|browser ei liigu allapoole kui spacebari vajutada
    game.input.keyboard.addKeyCapture([ Phaser.Keyboard.LEFT, Phaser.Keyboard.RIGHT, Phaser.Keyboard.SPACEBAR ]);

    game.input.keyboard.onPressCallback = function(e){console.log("key pressed", e);}
    // game.input.keyboard.onPressCallback = function(e){player.body.velocity.x = 350, e;}

    
    //audio
    breaking_sound = game.add.audio('breaking_sound');
    
    k2ivitus_sound = game.add.audio('k2ivitus_sound');
    mootoriheli_loop = game.add.audio('mootoriheli_loop');
    

    kiiruseCalc();
}

    // muutujad, vasakul olevatele nupukestele ; nad on kas 1, 2, 3 v6i 4
    // by default teevalik = 1 ja rehvivalik = 1  
    teeValik = 1;
    rehviValik = 1;

    // muutujad: efe = kiirus
    efe = 10*4;    

//   kiirus2 = ((kiiruseNupp.body.position.x - bounds.x)/(bounds.width-18)*100)+30;
//    efe = kiirus*4;


    iter = 0;
    autoLiikumine = 1;
    taustaLiikumine = 0;
    autoPidurdus = 0;
    autoFullStop = 0;
    
    


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
        jatkanNupp.inputEnabled = true;
        jatkanNupp.input.useHandCursor = true;
    }

    function jatkanClick() {
        juhised.destroy()
        jatkanNupp.destroy()
        kiiruseNupp.inputEnabled = true;
        startStopNupp.inputEnabled = true;
        startStopNupp.input.useHandCursor = true;
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
    
    if (this.spaceKey.isDown && autoLiikumine == 1 || startStopInt == 1 && taustaLiikumine == 0){
    //    if (this.spaceKey.isDown && player.body.position.x  == 0){
        startStopInt = 1;       
        startStopNupp = game.add.button(625, 484, 'startStopNupp', actionOnClick_ss, this, 1, 1, 1);
        kiiruseM66dik.destroy();
        lipp.destroy();
        kiiruseNupp.inputEnabled = false;
        startStopNupp.inputEnabled = false;
        teekate_1.inputEnabled = false;
        teekate_2.inputEnabled = false;
        teekate_3.inputEnabled = false;
                
        // auto k2ivitusheli if
        if (efe2 == 0) {
            setTimeout(engineSoundStartFunc, 743);
            k2ivitus_sound.play();
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
            //takistusTeke = setTimeout(podraTeke, Math.floor( 3000));
            iter = 1;
        }

        //setTimeout(carStart, 1);
        // podraTeke()                 
        //carStart()

    // et auto s6idaks ka siis, kui space yleval on peale esimest vajutust
    } else if (taustaLiikumine == 1 && this.spaceKey.isUp && startStopInt < 2) {
    // } else if (taustaLiikumine == 1 && autoLiikumine == 1 && this.spaceKey.isUp) {

        /* Dada  Types:
        teavasJaPilved.tilePosition.x = teavasJaPilved.tilePosition.x -0.005*efe;
        majadJaTee.body.velocity.x = -1*efe;
        if (player.body.position.x >= 100) {
        player.body.velocity.x = 0;
        }
        */
        // kitse e. takistuse liikumine:
        // takistus.body.velocity.x = -1*efe;
        
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
            console.log(efe2, efe3)

            // et pidurit ei saaks all l6putult hoida:
            autoPidurdus = 0;
            
            console.log("majad ja teed: ", majadJaTee.body.velocity.x)
                        
            console.log("Auto sõidetud distants: ", player.body.position.x + 185)       
            console.log(efe)
            
            //efe = efe*0.95;
            //efe = ((efe**0.5)*100)*0.108 ;       
            //efe = efe - 1;
            
            // et soundi m2ngitaks vaid 1 kord, muutub efe2 kohe üheks
            
            if (efe2 == 1) {
            breaking_sound.play(); 
            currentTime2 = +new Date();

            setTimeout(engineSoundStopFunc, 1200);
            }
            efe2 = 0;        
            clearTimeout(takistusTeke);
                       
//            otsaSoit();
        
            // l6ppliku peatumsie if
    } else if (autoFullStop == 1 ) { 

        otsaSoit();
        // kitse e. takistuse peatumine
        takistus.body.velocity.x = 0;
        majadJaTee.body.velocity.x = 0;
        
        console.log(efe2, efe3)
        efe = efe - pidurdusKonfitsent;
        player.body.velocity.x = efe;

        console.log("majad ja teed: ", majadJaTee.body.velocity.x)
        console.log("Auto sõidetud distants: ", player.body.position.x + 185)
        console.log(efe)

        if (efe < 2){
        autoFullStop = 0;
        player.body.velocity.x = 0;
        console.log("Game Over")
        console.log("Auto positsioon: ", player.body.position.x + 185, "Kitse positsioon: ", takistus.body.position.x)
        console.log("Auto kiirus km/h: ", kiirus,"Pidurdus teekond meetrites", (player.body.position.x + 185 - pidurdusAlgPunkt)/4)
        l6puLause_kuva();
        }
        autoPidurdus = 0;

        // if (this.rightKey.downDuration(10000)) {


    // Auto k2ima minemine, siis kui esimest korda space alla vajutada
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
    kiiruseM66dik.destroy();

    majadJaTee = game.add.sprite(0, 29, tee_var)
    for (i = 1; i < 3; i++) {
            majadJaTee.addChild(game.make.sprite(i*1705, 0, tee_var))
    }
    player = game.add.sprite(0, game.world.height - 247, 'car')
    takistus = game.add.sprite(takistuseKaugus, game.world.height - 255, 'kits')    
    lipuTeke()
    
    
    /* if (tee_var == 'majadLumine' || tee_var == 'maaLumine' ){
        kiiruseM66dik.destroy();
        kiiruseM66dik_Must = game.add.sprite(380,390, 'kiiruseM66dik_Must')
        lipuTekeMust()        
    }
    else {
        kiiruseM66dik = game.add.sprite(380, 390, 'kiiruseM66dik')
        lipuTeke()
    } */
    
    

    game.physics.arcade.enable(majadJaTee)
    game.physics.arcade.enable(player)
    game.physics.arcade.enable(takistus)
}

function actionOnClick_ss() {
    startStopInt += 1;
    
    
    // teekate_4.inputEnabled = false;
    // rehv_1.inputEnabled = false;
    // rehv_2.inputEnabled = false;
    // rehv_3.inputEnabled = false;
    // rehv_4.inputEnabled = false;
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
    
    teekate_1 = game.add.button(123, 450, 'teekate_1', onClickTeekate_1, this, 2, 2, 2);
    console.log("teekate1 nupp vajutatud" )
    teekate_2 = game.add.button(123, 484, 'teekate_2', onClickTeekate_2, this, 1, 0, 2);
    teekate_3 = game.add.button(123, 518, 'teekate_3', onClickTeekate_3, this, 1, 0, 2);
    //teekate_4 = game.add.button(23, 552, 'teekate_4', onClickTeekate_4, this, 1, 0, 2);
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
    
    teekate_2 = game.add.button(123, 484, 'teekate_2', onClickTeekate_2, this, 2, 2, 2);
    console.log("teekate2 nupp vajutatud" )
    teekate_1 = game.add.button(123, 450, 'teekate_1', onClickTeekate_1, this, 1, 0, 2);    
    teekate_3 = game.add.button(123, 518, 'teekate_3', onClickTeekate_3, this, 1, 0, 2);
    //teekate_4 = game.add.button(23, 552, 'teekate_4', onClickTeekate_4, this, 1, 0, 2);
}

function onClickTeekate_3() {
    teeValik = 3;

    teeolu_var = 1.0/3;
    pidurdusKonfitsent = 1.5 * teeolu_var * 4;

    if (kiirus >= 51) {
        teekateValik('maaLumine');
    } else {
        teekateValik('majadLumine');
    }
    
    teekate_3 = game.add.button(123, 518, 'teekate_3', onClickTeekate_3, this, 2, 2, 2);
    console.log("teekate3 nupp vajutatud" )
    teekate_1 = game.add.button(123, 450, 'teekate_1', onClickTeekate_1, this, 1, 0, 2);
    teekate_2 = game.add.button(123, 484, 'teekate_2', onClickTeekate_2, this, 1, 0, 2);
    //teekate_4 = game.add.button(23, 552, 'teekate_4', onClickTeekate_4, this, 1, 0, 2);
}

/* function onClickTeekate_4() {
    teeValik = 4;
    
    teeolu_var = 2.2/3;
    pidurdusKonfitsent = 1.5 * teeolu_var * 4;
    
    teekateValik('maaKruus');
    
    teekate_4 = game.add.button(23, 552, 'teekate_4', onClickTeekate_4, this, 2, 2, 2);
    console.log("teekate4 nupp vajutatud" )
    teekate_1 = game.add.button(23, 450, 'teekate_1', onClickTeekate_1, this, 1, 0, 2);
    teekate_2 = game.add.button(23, 484, 'teekate_2', onClickTeekate_2, this, 1, 0, 2);
    teekate_3 = game.add.button(23, 518, 'teekate_3', onClickTeekate_3, this, 1, 0, 2);
} */

/* function onClickRehv_1() {
    rehv_1 = game.add.button(175, 450, 'rehv_1', onClickRehv_1, this, 2, 2, 2);
    console.log("rehv1 nupp vajutatud" )
    rehv_2 = game.add.button(175, 484, 'rehv_2', onClickRehv_2, this, 1, 0, 2);
    rehv_3 = game.add.button(175, 518, 'rehv_3', onClickRehv_3, this, 1, 0, 2);
    rehv_4 = game.add.button(175, 552, 'rehv_4', onClickRehv_4, this, 1, 0, 2);
}

function onClickRehv_2() {
    rehv_2 = game.add.button(175, 484, 'rehv_2', onClickRehv_2, this, 2, 2, 2);
    console.log("rehv2 nupp vajutatud" )
    rehv_1 = game.add.button(175, 450, 'rehv_1', onClickRehv_1, this, 1, 0, 2);    
    rehv_3 = game.add.button(175, 518, 'rehv_3', onClickRehv_3, this, 1, 0, 2);
    rehv_4 = game.add.button(175, 552, 'rehv_4', onClickRehv_4, this, 1, 0, 2);
}

function onClickRehv_3() {
    rehv_3 = game.add.button(175, 518, 'rehv_3', onClickRehv_3, this, 2, 2, 2);
    console.log("rehv3 nupp vajutatud" )
    rehv_1 = game.add.button(175, 450, 'rehv_1', onClickRehv_1, this, 1, 0, 2);
    rehv_2 = game.add.button(175, 484, 'rehv_2', onClickRehv_2, this, 1, 0, 2);
    rehv_4 = game.add.button(175, 552, 'rehv_4', onClickRehv_4, this, 1, 0, 2);
}

function onClickRehv_4() {
    rehv_4 = game.add.button(175, 552, 'rehv_4', onClickRehv_4, this, 2, 2, 2);
    console.log("rehv4 nupp vajutatud" )
    rehv_1 = game.add.button(175, 450, 'rehv_1', onClickRehv_1, this, 1, 0, 2);
    rehv_2 = game.add.button(175, 484, 'rehv_2', onClickRehv_2, this, 1, 0, 2);
    rehv_3 = game.add.button(175, 518, 'rehv_3', onClickRehv_3, this, 1, 0, 2);
} */

function onClickUuesti() {

    kiiruseNupp.x = 370.6;
    kiirus = 50;
    kiiruseNupp.inputEnabled = true;
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

    
    
    startStopNupp.destroy();
    startStopNupp = game.add.button(625, 484, 'startStopNupp', actionOnClick_ss, this, 0, 0, 0);

    
    l6petanNupp.destroy();
    // eemaldame l6puteksti elemendid:
    l6puLause.destroy();  
    uuestiNupp.destroy();
    textGroup.destroy();    



}

function onClickL6petan() {
    l6puTiiter = game.add.sprite(0, 0, 'l6puTiiter')   
    game.physics.arcade.enable(l6puTiiter)
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

function lipuTeke() {
    if (teeValik == 3) {
        lipp = game.add.sprite(358.5, 392, 'lippMust')
        game.physics.arcade.enable(lipp)
        lipp.anchor.x = 0.5;
        lipp.anchor.y = 0.5;    
        lipp.inputEnabled = true;
        lipp.input.enableDrag(false,false,false,250,boundsM66dik);
        lipp.input.allowVerticalDrag = false;
        lipp.events.onDragStop.add(lippStop);
        kiiruseM66dik = game.add.sprite(380,390, 'kiiruseM66dik_Must')
    }
    else {
        lipp = game.add.sprite(358.5, 392, 'lipp')
        game.physics.arcade.enable(lipp)
        lipp.anchor.x = 0.5;
        lipp.anchor.y = 0.5;    
        lipp.inputEnabled = true;
        lipp.input.enableDrag(false,false,false,250,boundsM66dik);
        lipp.input.allowVerticalDrag = false;
        lipp.events.onDragStop.add(lippStop);
        kiiruseM66dik = game.add.sprite(380,390, 'kiiruseM66dik')
    }
}

/* function lipuTekeMust() {
    lippMust = game.add.sprite(358.5, 392, 'lippMust')
    game.physics.arcade.enable(lippMust)
    lippMust.anchor.x = 0.5;
    lippMust.anchor.y = 0.5;    
    lippMust.inputEnabled = true;
    lippMust.input.enableDrag(false,false,false,250,boundsM66dik);
    lippMust.input.allowVerticalDrag = false;
    
    lippMust.events.onDragStop.add(lippStopMust);
} */


function lippStop() {
    console.log("lipu nupp just lasti lahti")    
    console.log(lipp.body.position.x);
    ennustus = (lipp.body.position.x - 346)/4;
    console.log(ennustus);
}

/* function lippStopMust() {
    console.log("lipu nupp just lasti lahti")    
    console.log(lippMust.body.position.x);
    ennustus = (lippMust.body.position.x - 346)/4;
    console.log(ennustus);
} */

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
        
        takistus = game.add.sprite(takistusePositsioon, game.world.height - 294, 'rist')
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
// teekate_4 = game.add.button(23, 552, 'teekate_4', onClickTeekate_4, this, 1, 0, 2);    
}

function lopuText_1() {
    //pidurdus ilma liputa
    l6puLause = game.add.sprite(0, 0, 'l6puLause_1') 
    game.physics.arcade.enable(l6puLause)
    // num = (player.body.position.x + 185 - pidurdusAlgPunkt)/4;
    num = ((kiirus*kiirus)/100)*0.55*(1/teeolu_var)    
    textGroup = game.add.group();
    //pidurdusteekond
    textGroup.add(game.make.text(305, 273, Math.round((num + Number.EPSILON) * 100) / 100, { font: "15px Arial", fill: "black" }));      
    //auto kiirus
    //textGroup.add(game.make.text(135, 350,Math.round((kiirus + Number.EPSILON) * 100) / 100, { font: "20px Arial", fill: "black" }));
    
    //reageerimisaeg
    if (currentTime2 > currentTime1) {
            textGroup.add(game.make.text(330, 218,Math.round(((currentTime2 - currentTime1) + Number.EPSILON)*100) / 100000, { font: "15px Arial", fill: "black" }));        
    }

    textGroup.setAll('anchor.x', 0.5);
    textGroup.setAll('anchor.y', 0.5);
    // 7 mai martini lisatud read
    uuestiNupp = game.add.button(490, 430, 'uuestiNupp', onClickUuesti, this, 0, 0, 0);
    l6petanNupp = game.add.button(125, 430, 'l6petanNupp', onClickL6petan, this, 0, 0, 0);

}

function lopuText_2() {
    //pidurdasid liiga vara
    l6puLause = game.add.sprite(0, 0, 'l6puLause_2') 
    game.physics.arcade.enable(l6puLause)
    // 7 mai martini lisatud read
    uuestiNupp = game.add.button(490, 340, 'uuestiNupp', onClickUuesti, this, 0, 0, 0);
    l6petanNupp = game.add.button(135, 340, 'l6petanNupp', onClickL6petan, this, 0, 0, 0);
}

function lopuText_3() {
    //pidurdus lipuga
    l6puLause = game.add.sprite(0, 0, 'l6puLause_3') 
    game.physics.arcade.enable(l6puLause)
    // num = (player.body.position.x + 185 - pidurdusAlgPunkt)/4;
    num = ((kiirus*kiirus)/100)*0.55*(1/teeolu_var)    
    textGroup = game.add.group();
    //pidurdusteekond
    textGroup.add(game.make.text(305, 273, Math.round((num + Number.EPSILON) * 100) / 100, { font: "15px Arial", fill: "black" }));      
    //auto kiirus
    //textGroup.add(game.make.text(135, 350,Math.round((kiirus + Number.EPSILON) * 100) / 100, { font: "20px Arial", fill: "black" }));
    
    //reageerimisaeg
    if (currentTime2 > currentTime1) {
            textGroup.add(game.make.text(330, 218,Math.round(((currentTime2 - currentTime1) + Number.EPSILON)*100) / 100000, { font: "15px Arial", fill: "black" }));        
    }

    textGroup.setAll('anchor.x', 0.5);
    textGroup.setAll('anchor.y', 0.5);
    // 7 mai martini lisatud read
    uuestiNupp = game.add.button(490, 430, 'uuestiNupp', onClickUuesti, this, 0, 0, 0);
    l6petanNupp = game.add.button(125, 430, 'l6petanNupp', onClickL6petan, this, 0, 0, 0);

}



//test


function podraTeke() {
    // num, ehk pidurdustee var ; sinna otsa liidame reageerimis aja
    // ning korrutame neljaga, et saada distants pixli kauguses
    // PS! reageermis aeg pixlites = meeterid*4 ; 50km/h läbib auto 200px/s ja 100km/h läbib auto 400px/s
    reagJaPidur = ((kiirus*kiirus)/100)*0.55*(1/teeolu_var) + kiirus
    takistuseKaugus2 = ((reagJaPidur*4) + 50 + 185)    
    
    takistus.destroy();
    
    takistus = game.add.sprite(takistuseKaugus2, game.world.height - 255, 'kits')
    game.physics.arcade.enable(takistus)
    
    console.log(takistuseKaugus2)
    proloog = 1;

    currentTime1 = +new Date();

}

function heliClick() {
    console.log('helinupp vajutatud')
}

function juhisedClick() {
    console.log('juhisednupp vajutatud')
}
// aja muutujad
var currentTime1
var currentTime2

//var now = new Date().toLocaleTimeString();


//var currentTime1 = +new Date();
//var currentTime2 = +new Date();
