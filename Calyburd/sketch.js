// variable for the application to keep track of which page is currently loaded.
var page = "home";

// variable for the application to keep track of which piece of music is currently being used.
var sound;

// variable for the application to load different image art depening on which song has been seleted on the artist pages.
var art;

// function used to create buttons on the right hand side or the artist pages to allow the user to select a song
function songButton(y, songTitle){
    fill(0, 0, 255, 80);
    rect(width-160, y, 130, 40, 10); 
    fill(255);
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
}

// function which runs when the user is on the home page
function home(){
// background colour of the home page
     background('#44A3C1');
    
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
 
// code to produce a button labelled "home".  When clicked on, the application will load the home page
    fill(200);
    rect(10,10,60,30,10);
    fill(0);
    textStyle(BOLD);
    text("<  HOME", 12, 30);

  
// code to produce the play/pause button.  The button will display as a pause button while music is playing and will display as a play button otherwise
    fill(230);
    rect(65, 370, 60, 60);
    if (sound.isPlaying()){
    rect(85, 385, 8, 30);
    rect(97, 385, 8, 30);
    }
    else {
    triangle(80, 380, 110, 400, 80, 420);
    }
    
// code to produce the stop button to stop music from playing 
    fill(230);
    rect(135, 370, 60, 60);
    rect(145, 380, 40, 40);
    
// code to load song art on the artist page depending on which song has been selected
    image(art, 30, 150, 200, 200);
 
    
// if statements to load the song selection buttons depending on which artist page is loaded
    if(page == "Bensound") {
        songButton(150, "Dubstep");
        songButton(210, "A New Beginning");
        songButton(270, "Ofelia's Dream");
    }

    else if(page == "Purple Planet") {
        songButton(150, "Dance of Death");
        songButton(210, "Darkness");
        songButton(270, "Corridor");
    }
 
    else if(page == "Incompetech") {
        songButton(150, "Moorland");
        songButton(210, "Heavy Heart");
        songButton(270, "Angevin");
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
    else if(page != "home" && mouseX >= 10 && mouseX<= 70 && mouseY >= 10 && mouseY <= 40) {
          page = "home";
          sound.stop();
    } 
    
    else if(page != "home" && mouseX >= 65 && mouseX <= 125 && mouseY >= 370 && mouseY <= 430) {
          sound.play();
    }
    
    
    else if(page != "home" && sound.isPlaying && mouseX >= 65 && mouseX<= 125 && mouseY >= 370 && mouseY <= 430) {
          sound.pause();
    }    
    
    // code which gives the stop button it's functionality to stop the music when pressed
    else if(page != "home" && mouseX >= 135 && mouseX<= 195 && mouseY >= 370 && mouseY <= 430) {
          sound.stop();
    } 
    
    else if(page == "Bensound" && mouseX >= width-80 && mouseX<= width-30 && mouseY >= 50 && mouseY <= 80) {
          sound.stop();
          sound = dubstepMusic
    }

    
    else if(page == "Purple Planet" && mouseX >= width-80 && mouseX<= width-30 && mouseY >= 50 && mouseY <= 80) {
          sound.stop();
          sound = danceofdeathMusic
    }
}

// draw function
function draw() {
    
// if statement which determines which page is currently loaded in the application
  if(page == "home") {
      home();
  } else {
      artist_page();
  } 

}
                                       

    
 
