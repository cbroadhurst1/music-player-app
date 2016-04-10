var page = "home"

function preload() {
  img = loadImage("Album Art/download.jpg");
    
}

 function home(){
     background(0,255,0);
     image(img, 400, 300, 80, 80);
     image(img, 300, 300, 80, 80);
     image(img, 500, 300, 80, 80); 
}

function artist_page(){
    background(255,0,0);
    fill(200);
    rect(10,10,60,30,10);
    fill(0);
    textStyle(BOLD);
    text("<  HOME", 12, 30);
        
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
          page = "home"
        }
    }



function setup() {
  createCanvas(1024,720);
 }


 function draw() {
  if(page == "home") {
      home();
  } else if (page == "page1" || page == "page2" || page == "page3") {
      artist_page();
  } 

}
                                                    

    
 
