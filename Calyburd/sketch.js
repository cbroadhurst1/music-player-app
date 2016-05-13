// variable for the application to keep track of which page is currently loaded.
var page = "home";

// variable for the application to keep track of which piece of music is currently being used.
var sound;

// variable for the application to load different image art depening on which song has been seleted on the artist pages.
var art;

// variable for the application to keep track of if the current loaded music is being played or not
var playback;

<<<<<<< HEAD
// variable which will store the amplitude value of the music currently playing
var soundAmp;

//variable 
=======

var testa

>>>>>>> origin/master
var volumeLevel;

var volumeToggle = 130;



// function used to create buttons with song titles on the right hand side of the artist pages to allow the user to select a song
function songButton(y, songTitle) {
    fill(0, 0, 255, 80);
    rect(width-160, y, 130, 40, 10); 
    fill(245);
    textAlign(CENTER);
    textSize(14);
    text(songTitle, width-95, y+25);
}




// preload function to load image and sound files to the application
function preload() {
    
// preload of image art to be used on the homepage for each artist; Bensound, Purple Planet and Incompetech respectively.
    bensoundImage = loadImage("Album Art/bensound.jpg");
    purpleplanetImage = loadImage("Album Art/purpleplanet.jpg");   
    incompetechImage = loadImage("Album Art/incompetech.jpg");
    
// preload of music track "Dubstep" by Bensound and accompanying image
    dubstepMusic = loadSound("Music/bensound-dubstep.mp3");
    dubstepImage = loadImage("Album Art/dubstep.jpg");
    
// preload of music track "A New Beginning" by Bensound and accompanying image
    beginningMusic = loadSound("Music/bensound-anewbeginning.mp3");
    beginningImage = loadImage("Album Art/anewbeginning.jpg");
    
// preload of music track "Ofelia's Dream" by Bensound and accompanying image
    ofeliasdreamMusic = loadSound("Music/bensound-ofeliasdream.mp3");
    ofeliasdreamImage = loadImage("Album Art/ofeliasdream.jpg");
    
// preload of music track "Dance of Death" by Purple Planet and accompanying image
    danceofdeathMusic = loadSound("Music/Dance Of Death.mp3");
    danceofdeathImage = loadImage("Album Art/danceofdeath.jpg");

// preload of music track "Darkness" by Purple Planet and accompanying image
    darknessMusic = loadSound("Music/Darkness.mp3");
    darknessImage = loadImage("Album Art/darkness.jpg");

// preload of music track "Corridor" by Purple Planet and accompanying image
    corridorMusic = loadSound("Music/Corridor.mp3");
    corridorImage = loadImage("Album Art/corridor.jpg");
    
// preload of music track "Moorland" by Incompetech and accompanying image
    moorlandMusic = loadSound("Music/Moorland.mp3");
    moorlandImage = loadImage("Album Art/moorland.jpg");
    
// preload of music track "Heavy Heart" by Incompetech and accompanying image
    heavyheartMusic = loadSound("Music/Heavy Heart.mp3");
    heavyheartImage = loadImage("Album Art/heavyheart.jpg");
    
// preload of music track "Angevin" by Incompetech and accompanying image
    angevinMusic = loadSound("Music/Angevin.mp3");
    angevinImage = loadImage("Album Art/angevin.jpg");

}

// setup function to load the inital application code
function setup() {

// setup the application's window size
    createCanvas(1280,720);
<<<<<<< HEAD
    

    analyzer = new p5.Amplitude();
    analyzer.setInput(sound);
}


function visualiser(){    
    testa = analyzer.getLevel();
    fill(255, 255-(testa*255), 255)
    rect(280, 150, 790, 450, 80);
    ellipse(675, 375, testa*100, testa*100);
    ellipse(675, 375, testa*200, testa*200);
    ellipse(675, 375, testa*400, testa*400);
    //ellipse(675, 375, testa*800, testa*800);
=======
    analyzer = new p5.Amplitude();
    analyzer.setInput(sound);
    fft = new p5.FFT();
    fft.setInput(sound);
}


function visualiser(){
    
    
    testa = analyzer.getLevel();
    testb = fft.analyze();
    fill(testa*255, 0, testa*255)
    //ellipse(500,500,testb.length,50);
    fill(255, 255-(testa*255), 255)
    rect(280, 150, 790, 450, 80);
>>>>>>> origin/master
}


// function which runs when the user is on the home page
function home(){
    
// background colour of the home page
     background('#44A3C1');
     fill(245);
     textSize(90);
     textAlign(CENTER);
     textFont("Arial");
     text("Select an artist:", 640, 210);
    
     
    
// text advising user to select an artist
     fill(245);
     textSize(90);
     textAlign(CENTER);
     text("Select an artist:", 640, 210);
    
     
    
// Art for each artist loaded on the homepage, each image will function as a button to load the page for each respective artist.
     image(bensoundImage, 130, 270, 390, 180);
     image(purpleplanetImage, 570, 270, 180, 180);
     image(incompetechImage, 800, 270, 350, 180); 
}

// function which runs when the user is on one the artists' pages.  
// The page variable defined before will be used to determine which sections of the function will run
// depending on which page the user has selected to load.
function artist_page(){
    
// background colour of the artist pages
    background('#44A3C1');
    
//sound.amp(volume);
// code to produce a button labelled "home".  When clicked on, the application will load the home page
    fill(200);
    rect(10, 10, 80, 30, 10);
    fill(0);
    textStyle(BOLD);
    textAlign(CENTER);
    textSize(14);
    text("<  HOME", 50, 30);

  
// code to produce the play/pause button.  The button will display as a pause button while music is playing and will display as a play button otherwise
    fill(230);
    rect(65, 390, 60, 60);
    
// if statement for the play/pause button to display as a pause button while a song is playing and to display as a play button while it is not playing
    if (sound.isPlaying()){
    fill("#285277");
    rect(85, 405, 8, 30);
    rect(97, 405, 8, 30);
    playback = "playing";
    visualiser();
    }
    
    else {
    fill("#51BB3E");
    triangle(80, 400, 110, 420, 80, 440);
    playback = "paused";
<<<<<<< HEAD
    fill(245);
    textSize(20);
    textAlign(CENTER);
    text("Select a song from the right hand menu and press the play button", 675, 375);
=======
>>>>>>> origin/master
    }
    
// code to produce the stop button to stop music from playing 
    fill(230);
    rect(135, 390, 60, 60);
    fill("#B03B3D");
    rect(148, 403, 34, 34);
    
// code to load song art on the artist page depending on which song has been selected
    image(art, 30, 150, 200, 200);
    
// volume control slider
    line(30, 370, 230, 370);
    fill("#BEC44F");
    ellipse(volumeToggle, 370, 10, 10);
    if(mouseIsPressed && mouseX >= 30 && mouseX <= 230 && mouseY >= 365 && mouseY <= 375){
    volumeToggle = mouseX
    }
    volumeLevel = map(volumeToggle, 30, 230, 0, 1);
    sound.setVolume(volumeLevel);
    
    
<<<<<<< HEAD
        
// if statements to load the song selection buttons depending on which artist page is loaded.  The previously created songButton function is used.
// The if statements are also used to load artist specific elements for each artist page such as text displaying the name of the artist, the title of the currently loaded song as well as licensing information.
=======
    
    
    
    
// if statements to load the song selection buttons depending on which artist page is loaded.  The previously created songButton function is used.
// The if statements are also used to load artist specific elements for each artist page such as page title text and licensing information.
>>>>>>> origin/master
    if(page == "Bensound") {
        songButton(150, "Dubstep");
        songButton(210, "A New Beginning");
        songButton(270, "Ofelia's Dream");
        textAlign(CENTER);
        text("Music: http://www.bensound.com/royalty-free-music", 640, height-30);
<<<<<<< HEAD
        
        if(sound == dubstepMusic) {
            text("Dubstep", 130, 140);
        }
        else if (sound == beginningMusic) {
            text("A New Beginning");
        }
        else if (sound == ofeliasdreamMusic) {
            text("Ofelia's Dream");
        }

=======
>>>>>>> origin/master
        textSize(90);
        text("Bensound", 640, 120);
    }
    

    else if(page == "Purple Planet") {
        songButton(150, "Dance of Death");
        songButton(210, "Darkness");
        songButton(270, "Corridor");
        textAlign(CENTER);
        text("Music: http://www.purple-planet.com", 640, height-30);
<<<<<<< HEAD
                
        if(sound == danceofdeathMusic) {
            text("Dubstep", 130, 140);
        }
        else if (sound == darknessMusic) {
            text("A New Beginning");
        }
        else if (sound == corridorMusic) {
            text("Ofelia's Dream");
        }
        
=======
>>>>>>> origin/master
        textSize(90);
        fill("#733EBB")
        text("Purple Planet", 640, 120);
    }
 
    else if(page == "Incompetech") {
        songButton(150, "Moorland");
        songButton(210, "Heavy Heart");
        songButton(270, "Angevin");
        textAlign(CENTER);
        text('"Moorland", "Heavy Heart" & "Angevin"', 640, height-80);
        text("Kevin MacLeod (incompetech.com)", 640, height-60);
        text("Licensed under Creative Commons: By Attribution 3.0", 640, height-40);
        text("http://creativecommons.org/licenses/by/3.0/", 640, height-20);
<<<<<<< HEAD
                
        if(sound == dubstepMusic) {
            text("Dubstep", 130, 140);
        }
        else if (sound == beginningMusic) {
            text("A New Beginning");
        }
        else if (sound == ofeliasdreamMusic) {
            text("Ofelia's Dream");
        }
        
=======
>>>>>>> origin/master
        textSize(90);
        text("Incompetech", 640, 120);
    }    
}



//function which activates when left mouse button is pressed and released
function mouseClicked() {
    
    // button to load the page for the artist Bensound
    if(page == "home" && mouseX >= 130 && mouseX<= 520 && mouseY >= 270 && mouseY <= 450) {
          page = "Bensound"
          sound = dubstepMusic
          art = dubstepImage
    }  

    // button to load the page for the arist Purple Planet
    else if(page == "home" && mouseX >= 570 && mouseX<= 750 && mouseY >= 270 && mouseY <= 450) {
          page = "Purple Planet";
          sound = danceofdeathMusic;
          art = danceofdeathImage;
    }
    
    // button to load the page for the artist Incompetech
    else if(page == "home" && mouseX >= 800 && mouseX<= 1150 && mouseY >= 270 && mouseY <= 450) {
          page = "Incompetech"
          sound = moorlandMusic
          art = moorlandImage
    }
    
    // button on the artist pages to load the home page as well as stop any playing music
    else if(page != "home" && mouseX >= 10 && mouseX<= 90 && mouseY >= 10 && mouseY <= 40) {
          page = "home";
          sound.stop();
    } 
    
    // code which allows the play/pause button to function.  While the sound is not playing, pressing the button will play the song
    else if(page != "home" && playback == "paused" && mouseX >= 65 && mouseX <= 125 && mouseY >= 390 && mouseY <= 450) {
          sound.play();
          
    }
    // While the sound is playing, pressing the play/pause button will pause the song
    else if(page != "home" && playback == "playing" && mouseX >= 65 && mouseX<= 125 && mouseY >= 390 && mouseY <= 450) {
          sound.pause();
    }    
    
    // code which gives the stop button it's functionality to stop the music when pressed
    else if(page != "home" && mouseX >= 135 && mouseX<= 195 && mouseY >= 390 && mouseY <= 450) {
          sound.stop();
    } 
    
    // button to select song "Dubstep" on the Bensound page and load corresponding song art
    else if(page == "Bensound" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 150 && mouseY <= 190) {
          sound.stop();
          sound = dubstepMusic
          art = dubstepImage
<<<<<<< HEAD
    }
    
    // button to select song "A New Beginning" on the Bensound page and load corresponding song art
    else if(page == "Bensound" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 210 && mouseY <= 250) {
          sound.stop();
          sound = beginningMusic
          art = beginningImage
    }
    
=======
    }
    
    // button to select song "A New Beginning" on the Bensound page and load corresponding song art
    else if(page == "Bensound" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 210 && mouseY <= 250) {
          sound.stop();
          sound = beginningMusic
          art = beginningImage
    }
    
>>>>>>> origin/master
    // button to select song "Ofelia's Dream" on the Bensound page and load corresponding song art
    else if(page == "Bensound" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 270 && mouseY <= 310) {
          sound.stop();
          sound = ofeliasdreamMusic
          art = ofeliasdreamImage
    }

     // button to select song "Dance of Death" on the Purple Planet page and load corresponding song art
    else if(page == "Purple Planet" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 150 && mouseY <= 190) {
          sound.stop();
          sound = danceofdeathMusic
          art = danceofdeathImage
    }
    
    // button to select song "Darkness" on the Purple Planet page and load corresponding song art
    else if(page == "Purple Planet" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 210 && mouseY <= 250) {
          sound.stop();
          sound = darknessMusic
          art = darknessImage
    }
    
    // button to select song "Corridor" on the Purple Planet page and load corresponding song art
    else if(page == "Purple Planet" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 270 && mouseY <= 310) {
          sound.stop();
          sound = corridorMusic
          art = corridorImage
    }
    
    // button to select song "Moorland" on the Incompetech page and load corresponding song art
    else if(page == "Incompetech" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 150 && mouseY <= 190) {
          sound.stop();
          sound = moorlandMusic
          art = moorlandImage
    }
    
    // button to select song "Heavy Heart" on the Incompetech page and load corresponding song art
    else if(page == "Incompetech" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 210 && mouseY <= 250) {
          sound.stop();
          sound = heavyheartMusic
          art = heavyheartImage
    }
    
    // button to select song "Angevin" on the Incompetech page and load corresponding song art
    else if(page == "Incompetech" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 270 && mouseY <= 310) {
          sound.stop();
          sound = angevinMusic
          art = angevinImage
    }
    
}

// draw function 
function draw() {
// if statement which determines which page is currently loaded in the application useing the page variable
  if(page == "home") {
      home();
  } else {
      artist_page();
      
      
  } 
<<<<<<< HEAD
}
=======
  
}
                                       

    
 
>>>>>>> origin/master
