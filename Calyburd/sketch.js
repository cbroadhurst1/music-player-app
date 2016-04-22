// variable for the application to keep track of which page is currently loaded.
var page = "home";

// variable for the application to keep track of which piece of music is currently being used.
var sound

// variable for the application to load different image art depening on which song has been seleted on the artist pages.
var art

// preload function to load image and sound files to the application
function preload() {
    bensoundImage = loadImage("Album Art/bensound.jpg")
    
    purpleplanetImage = loadImage("Album Art/purpleplanet.jpg")
    
    incompetechImage = loadImage("Album Art/incompetech.jpg")
    
// preload of music track "Dubstep" by Bensound and accompanying image
    dubstepMusic = loadSound("Music/bensound-dubstep.mp3");
    dubstepImage = loadImage("Album Art/dubstep.jpg")
    
// preload of music track "A New Beginning" by Bensound and accompanying image
    beginningMusic = loadSound("Music/bensound-anewbeginning.mp3");
    beginningImage = loadImage("Album Art/anewbeginning.jpg")
    
// preload of music track "Ofelia's Dream" by Bensound and accompanying image
    ofeliasdreamMusic = loadSound("Music/bensound-ofeliasdream.mp3");
    ofeliasdreamImage = loadImage("Album Art/ofeliasdream.jpg")
    
// preload of music track "Dance of Death" by Purple Planet and accompanying image
    danceofdeathMusic = loadSound("Music/Dance Of Death.mp3");
    danceofdeathImage = loadImage("Album Art/danceofdeath.jpg")

// preload of music track "Darkness" by Purple Planet and accompanying image
    darknessMusic = loadSound("Music/Darkness.mp3");
    darknessImage = loadImage("Album Art/darkness.jpg")

// preload of music track "Corridor" by Purple Planet and accompanying image
    corridorMusic = loadSound("Music/Corridor.mp3");
    corridorImage = loadImage("Album Art/corridor.jpg")
    
// preload of music track "Heavy Heart" by Kevin Macleod and accompanying image
    heavyheartMusic = loadSound("Music/Heavy Heart.mp3");
    heavyheartImage = loadImage("Album Art/heavyheart.jpg")
    
// preload of music track "Moorland" by Kevin Macleod and accompanying image
    moorlandMusic = loadSound("Music/Moorland.mp3");
    moorlandImage = loadImage("Album Art/moorland.jpg")
    
// preload of music track "Angevin" by Kevin Macleod and accompanying image
    angevinMusic = loadSound("Music/Angevin.mp3");
    angevinImage = loadImage("Album Art/angevin.jpg")

}

// setup function to load the inital application code
function setup() {

// setup the application's window size
    createCanvas(1280,720);
}

// function which runs when the user is on the home page
function home(){
// background colour of the home page
     background('#44A3C1');
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


    fill(200);
    rect(10,10,60,30,10);
    fill(0);
    textStyle(BOLD);
    text("<  HOME", 12, 30);
    fill(230);
    ellipse(70, 300, 50, 50);
    if (sound.isPlaying()){
    rect(60, 285, 8, 30);
    rect(72, 285, 8, 30);
    }
    else {
    triangle(60, 280, 90, 300, 60, 320);
    }
    
    image(art, 30, 150, 100, 100);
    
    if(page == "page1") {
        
    }
    
    if(page == "page2") {
        
    }
    
    if(page == "page3") {
        
    } 
    ellipse(150, 300, 50, 50);
      
    fill(0, 0, 255, 80);
    rect(width-80, 50, 50, 30);
}

// function which activates when left mouse button is pressed and released
function mouseClicked() {
    
    // button to load the page for the artist Bensound
    if(page == "home" && mouseX >= 130 && mouseX<= 520 && mouseY >= 270 && mouseY <= 450) {
          page = "page1"
          sound = dubstepMusic
          art = dubstepImage
    }  
    else if(page == "home" && mouseX >= 570 && mouseX<= 750 && mouseY >= 270 && mouseY <= 450) {
          page = "page2"
          sound = danceofdeathMusic
          art = danceofdeathImage
    }
    else if(page == "home" && mouseX >= 800 && mouseX<= 1150 && mouseY >= 270 && mouseY <= 450) {
          page = "page3"
          sound = heavyheartMusic
          art = heavyheartImage
    }
    else if(page != "home" && mouseX >= 10 && mouseX<= 70 && mouseY >= 10 && mouseY <= 40) {
          page = "home";
          sound.stop();
    } 
    else if(page != "home" && mouseX >= 125 && mouseX<= 175 && mouseY >= 275 && mouseY <= 325) {
          sound.play();
    } 
    else if(page == "page1" && mouseX >= width-80 && mouseX<= width-30 && mouseY >= 50 && mouseY <= 80) {
          sound = dubstepMusic
          sound.playMode('restart');
          sound.play();
    }
    
    else if(page == "page2" && mouseX >= width-80 && mouseX<= width-30 && mouseY >= 50 && mouseY <= 80) {
          sound = danceofdeathMusic
          sound.playMode('restart');
          sound.play();
    }
    
    else if(page == "page3" && mouseX >= width-80 && mouseX<= width-30 && mouseY >= 50 && mouseY <= 80) {
          sound = heavyheartMusic
          sound.playMode('restart');
          sound.play();
    }
}



// draw function
function draw() {
    
// if statements which determine which page is currently loaded in the application
  if(page == "home") {
      home();
  } else if (page != "home") {
      artist_page();
  } 

}
                                       

    
 
