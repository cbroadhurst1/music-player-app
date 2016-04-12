// variable for the application to keep track of which page is currently loaded.
var page = "home";

// preload of image and sound files to the application
function preload() {
    img = loadImage("Album Art/download.jpg");
    mySound = loadSound("Music/Bell-ding.mp3");
}

function setup() {
    createCanvas(1024,720);
    mySound.playMode('restart');
}

// function which runs when the user is on the home page
function home(){
// background colour of the home page
     background('#44A3C1');
     image(img, 400, 300, 80, 80);
     image(img, 300, 300, 80, 80);
     image(img, 500, 300, 80, 80); 
}

// function which runs when the user is on one the artists' pages.  
// The page variable defined before will be used to determine which sections of the function will run
// depending on which page the user has selected to load.
function artist_page(){
    background(255,0,0);
    fill(200);
    rect(10,10,60,30,10);
    fill(0);
    textStyle(BOLD);
    text("<  HOME", 12, 30);
    if(page == "page1") {
        image(img, 30, 150, 100, 100);
    }
      
    fill(0, 0, 255, 80);
    rect(width-80, 50, 50, 30);
}


function mouseClicked() {
    if(page == "home" && mouseX >= 300 && mouseX<= 380 && mouseY >= 300 && mouseY <= 380) {
          page = "page1"
    }  
    else if(page == "home" && mouseX >= 400 && mouseX<= 480 && mouseY >= 300 && mouseY <= 380) {
          page = "page2"
    }
    else if(page == "home" && mouseX >= 500 && mouseX<= 580 && mouseY >= 300 && mouseY <= 380) {
          page = "page3"
    }
    else if(page != "home" && mouseX >= 10 && mouseX<= 70 && mouseY >= 10 && mouseY <= 40) {
          page = "home";
    }
    else if(page == "page1" && mouseX >= width-80 && mouseX<= width-30 && mouseY >= 50 && mouseY <= 80) {
          mySound.play();
    }
}






 function draw() {
  if(page == "home") {
      home();
  } else if (page == "page1" || page == "page2" || page == "page3") {
      artist_page();
  } 

}
                                                    

    
 
