var page = "home";                          // variable for the application to keep track of which page is currently loaded.

var sound;                                  // variable for the application to keep track of which piece of music is currently being used.

var art;                                    // variable for the application to load different image art depening on which song has been seleted on the artist pages.

var playback;                               // variable for the application to keep track of if the current loaded music is being played or not

var soundAmp;                               // variable which will store the amplitude value of the music currently playing

var volumeLevel;                            // variable to store the current volume/amplitude of the sound

var volumeToggle = 130;                     // variable used to record the placement of the volume slider


function songButton(y, songTitle) {         // function used to create buttons with song titles on the right hand side of the artist pages to allow the user to select a song
    fill(0, 0, 255, 80);
    rect(width-160, y, 130, 40, 10); 
    fill(245);
    textAlign(CENTER);
    textSize(14);
    text(songTitle, width-95, y+25);
}


function preload() {                        // preload function to load image and sound files to the application
    
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


function setup() {                          // setup function to load the inital application code

    createCanvas(1280,720);                 // setup the application's window size
    
    analyzer = new p5.Amplitude();          // variable "analyzer" used to hold the value of the current amplitude of the playing music
    analyzer.setInput(sound);
}



function visualiser(){                      // function which holds the code for a visualiser which runs while music is playing within the app 
    
    var currentAmp = analyzer.getLevel();   // variable which holds the value of the current amplitude, obtaining it from the analyzer variable
    
    fill(255, 255-(currentAmp*255), 255)    // main visualiser shape which colur changes depending on the current volume/amplitude
    rect(280, 150, 790, 450, 80);
    
    strokeWeight(2.5);                      // cicles which appear in the visualiser which change their size depending on the current volume/amplitude
    ellipse(675, 375, currentAmp*800, currentAmp*800);
    ellipse(675, 375, currentAmp*400, currentAmp*400);
    ellipse(675, 375, currentAmp*200, currentAmp*200);
    ellipse(675, 375, currentAmp*100, currentAmp*100);
}


function home(){                            // function which runs when the user is on the home page
    
     background('#44A3C1');                 // background colour of the home page
    
     fill(245);                             // text advising user to select an artist
     textSize(70);
     textAlign(CENTER);
     text("Select an artist", 640, 240);
     fill('#285F77');
     textStyle(BOLD);
     textSize(100);
     text("Caleyburd Music", 640, 110);
        
     image(bensoundImage, 130, 270, 390, 180);  // Art for each artist loaded on the homepage, each image will function as a button to load the page for each respective artist.
     image(purpleplanetImage, 570, 270, 180, 180);
     image(incompetechImage, 800, 270, 350, 180); 
}


function artist_page(){                     // function which runs when the user is on one the artists' pages.  The page variable defined before will be used to determine which sections of the function will run depending on which page the user has selected to load.
    
    background('#44A3C1');                  // background colour of the artist pages
    
    fill(200);                              // code to produce a button labelled "home".  When clicked on, the application will load the home page
    strokeWeight(1.5);
    rect(10, 10, 80, 30, 10);
    fill(0);
    textStyle(BOLD);
    textAlign(CENTER);
    textSize(14);
    text("<  HOME", 50, 30);

    fill(230);                              // code to produce the play/pause button.  The button will display as a pause button while music is playing and will display as a play button otherwise
    rect(65, 390, 60, 60);
    
    
    if (sound.isPlaying()){                 // if statement for the play/pause button to display as a pause button while a song is playing and to display as a play button while it is not playing
    
    fill("#285277");                        // code to display the pause button while music is playing                      
    rect(85, 405, 8, 30);
    rect(97, 405, 8, 30);
    playback = "playing";
        
    visualiser();                           // the function which holds the code for the visualiser is called while music is playing
    }
    
    else {
        
    fill("#51BB3E");                        // code to display the play button while music is not playing
    triangle(80, 400, 110, 420, 80, 440);
    playback = "paused";
    fill(245);
        
    textSize(20);                           // text to instruct the user to select a song and press the play button, this will only display if a song is not currently playing.
    textAlign(CENTER);
    text("Select a song from the right hand menu and press the play button", 675, 375);
    }
    
    strokeWeight(1.5);                      // code to produce the stop button to stop music from playing 
    fill(230);
    rect(135, 390, 60, 60);
    fill("#B03B3D");
    rect(148, 403, 34, 34);
    
    image(art, 30, 150, 200, 200);          // code to load song art on the artist page depending on which song has been selected
    
    beginShape();                           // code to draw a volume symbol beside the volume control slider
    fill(230);
    vertex(10, 365);
    vertex(15, 365);
    vertex(20, 360);
    vertex(20, 380);
    vertex(15, 375);
    vertex(10, 375);
    endShape(CLOSE);
    
    line(30, 370, 230, 370);                // code to create the volume controle slider.  The ellipse can be dragged by the user along the line to adjust the volume
    fill("#BEC44F");
    ellipse(volumeToggle, 370, 10, 10);
    
    if(mouseIsPressed && mouseX >= 30 && mouseX <= 230 && mouseY >= 365 && mouseY <= 375){      // if statement to change the value of the volumeToggle variable if the mouse is pressed along the volume slider line which in turn changes the position of the ellipse and the value of the music volume/amplitude
    volumeToggle = mouseX
    }

    volumeLevel = map(volumeToggle, 30, 230, 0, 1); // variable volumeLevel takes the range of the volume line and maps to a value between 0 and 1 to match the standard amplitude range.  The current value as determined by the volumeToggle variable is assigned to volumeLevel
    
    sound.setVolume(volumeLevel);           // sets the volume of the playing music to the value of the volumeLevel variable which in turn is determined by the position of the circle on the volume slider
    
           


    if(page == "Bensound") {                // if statements to load different parts of the artist's pages depening on which artist page is currently loaded.
        
        songButton(150, "Dubstep");         // song buttons created on the Bensound page using the previously created songButton function
        songButton(210, "A New Beginning");
        songButton(270, "Ofelia's Dream");
        
        textAlign(CENTER);                  // Text advising the copyright information for Bensound
        text("Music: http://www.bensound.com/royalty-free-music", 640, height-30);
        textSize(30);
        
        if(sound == dubstepMusic) {         // If statement which displaying a different song title on the Bensound page depending on which song is currently selected.
            text("Dubstep", 130, 140);
        }
        else if (sound == beginningMusic) {
            text("A New Beginning", 130, 140);
        }
        else if (sound == ofeliasdreamMusic) {
            text("Ofelia's Dream", 130, 140);
        }
            
        textSize(90);                       // Title of the Bensound page
        text("Bensound", 640, 120);
    }
    

    else if(page == "Purple Planet") {
        songButton(150, "Dance of Death");  // song buttons created on the Purple Planet page using the previously created songButton function
        songButton(210, "Darkness");
        songButton(270, "Corridor");
        
        textAlign(CENTER);                  // Text advising the copyright information for Purple Planet
        text("Music: http://www.purple-planet.com", 640, height-30);
        textSize(30);
        
        if(sound == danceofdeathMusic) {    // If statement which displaying a different song title on the Purple Planet page depending on which song is currently selected
            text("Dance of Death", 130, 140);
        }
        else if (sound == darknessMusic) {
            text("Darkness", 130, 140);
        }
        else if (sound == corridorMusic) {
            text("Corridor", 130, 140);
        }
        
        textSize(90);                       // Title of the Purple Planet page
        text("Purple Planet", 640, 120);
    }
 
    else if(page == "Incompetech") {
        songButton(150, "Moorland");        // song buttons created on the Incompetech page using the previously created songButton function
        songButton(210, "Heavy Heart");
        songButton(270, "Angevin");
        
        textAlign(CENTER);                  // Text advising the copyright information for Incompetech
        text('"Moorland", "Heavy Heart" & "Angevin"', 640, height-80);
        text("Kevin MacLeod (incompetech.com)", 640, height-60);
        text("Licensed under Creative Commons: By Attribution 3.0", 640, height-40);
        text("http://creativecommons.org/licenses/by/3.0/", 640, height-20);
        textSize(30);
        
        if(sound == moorlandMusic) {        // If statement which displaying a different song title on the Incompetech page depending on which song is currently selected
            text("Moorland", 130, 140);
        }
        else if (sound == heavyheartMusic) {
            text("Heavy Heart", 130, 140);
        }
        else if (sound == angevinMusic) {
            text("Angevin", 130, 140);
        }
        
        textSize(90);                       // Title of the Incompetech page
        text("Incompetech", 640, 120);
    }    
}



//function which activates when left mouse button is pressed and released
function mouseClicked() {
    
    if(page == "home" && mouseX >= 130 && mouseX<= 520 && mouseY >= 270 && mouseY <= 450) {         // button to load the page for the artist Bensound from the homepage as well as load the first artist song as defualt
          page = "Bensound"
          sound = dubstepMusic
          art = dubstepImage
    }  

    else if(page == "home" && mouseX >= 570 && mouseX<= 750 && mouseY >= 270 && mouseY <= 450) {    // button to load the page for the arist Purple Planet from the homepage as well as load the first artist song as defualt
          page = "Purple Planet";
          sound = danceofdeathMusic;
          art = danceofdeathImage;
    }
    
    else if(page == "home" && mouseX >= 800 && mouseX<= 1150 && mouseY >= 270 && mouseY <= 450) {   // button to load the page for the artist Incompetech from the homepage as well as load the first artist song as defualt
          page = "Incompetech"
          sound = moorlandMusic
          art = moorlandImage
    }
    
    else if(page != "home" && mouseX >= 10 && mouseX<= 90 && mouseY >= 10 && mouseY <= 40) {        // button on the artist pages to load the home page as well as stop any playing music
          page = "home";
          sound.stop();
    } 
    
    else if(page != "home" && playback == "paused" && mouseX >= 65 && mouseX <= 125 && mouseY >= 390 && mouseY <= 450) {    // code which allows the play/pause button to function.  While the sound is not playing, pressing the button will play the song
          sound.play();
          
    }
    
    else if(page != "home" && playback == "playing" && mouseX >= 65 && mouseX<= 125 && mouseY >= 390 && mouseY <= 450) {    // code to pause the music if the play/pause button is pressed while music is playing
          sound.pause();
    }    
    
    else if(page != "home" && mouseX >= 135 && mouseX<= 195 && mouseY >= 390 && mouseY <= 450) {                            // code which gives the stop button it's functionality to stop the music when pressed
          sound.stop();
    } 
    
    else if(page == "Bensound" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 150 && mouseY <= 190) {             // button to load song "Dubstep" on the Bensound page and load corresponding song art
          sound.stop();
          sound = dubstepMusic
          art = dubstepImage
    }
    
    else if(page == "Bensound" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 210 && mouseY <= 250) {             // button to load song "A New Beginning" on the Bensound page and load corresponding song art
          sound.stop();
          sound = beginningMusic
          art = beginningImage
    }
    
    else if(page == "Bensound" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 270 && mouseY <= 310) {             // button to load song "Ofelia's Dream" on the Bensound page and load corresponding song art
          sound.stop();
          sound = ofeliasdreamMusic
          art = ofeliasdreamImage
    }

    else if(page == "Purple Planet" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 150 && mouseY <= 190) {        // button to load song "Dance of Death" on the Purple Planet page and load corresponding song art
          sound.stop();
          sound = danceofdeathMusic
          art = danceofdeathImage
    }
    
    else if(page == "Purple Planet" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 210 && mouseY <= 250) {        // button to load song "Darkness" on the Purple Planet page and load corresponding song art
          sound.stop();
          sound = darknessMusic
          art = darknessImage
    }
    
    else if(page == "Purple Planet" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 270 && mouseY <= 310) {        // button to load song "Corridor" on the Purple Planet page and load corresponding song art
          sound.stop();
          sound = corridorMusic
          art = corridorImage
    }
    
    else if(page == "Incompetech" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 150 && mouseY <= 190) {          // button to load song "Corridor" on the Purple Planet page and load corresponding song art
          sound.stop();
          sound = moorlandMusic
          art = moorlandImage
    }
    
    else if(page == "Incompetech" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 210 && mouseY <= 250) {          // button to load song "Heavy Heart" on the Incompetech page and load corresponding song art
          sound.stop();
          sound = heavyheartMusic
          art = heavyheartImage
    }
    
    else if(page == "Incompetech" && mouseX >= width-160 && mouseX<= width-30 && mouseY >= 270 && mouseY <= 310) {          // button to load song "Angevin" on the Incompetech page and load corresponding song art
          sound.stop();
          sound = angevinMusic
          art = angevinImage
    }
}

function draw() {                       // draw function which loops while the application runs
    
  if(page == "home") {                  // if statement which determines which page is currently loaded in the application useing the page variable
      home();
  } else {
      artist_page();
  } 
}