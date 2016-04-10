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
    }

   function page1(){
        background(255,0,0);
}

   function page2(){
        background(0,255,0);
}

   function page3(){
        background(0,0,255);
}

function setup() {
  createCanvas(1024,720);
 }


 function draw() {
  if(page == "home") {
      home();
  } else if (page == "page1") {
      page1();
  } else if (page == "page2") {
      page2();
  } else if (page == "page3") {
      page3();
  } 

}
                                                    

    
 
