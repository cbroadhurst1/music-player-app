function preload() {
  img = loadImage("download.jpg");
    
}
 function home1(){
     background(0,255,0);
     image(img, 400, 300, 80, 80);
 }

   function page1(){
        background(255,0,0);
}

function setup() {
  createCanvas(1024,720);
    home1();
//    background(0,255,0);
}


 function draw() {
       

}
                                                    
   function mouseClicked() {
      if(mouseX >= 400 && mouseX<=480 && mouseY >= 300 && mouseY <= 380) {
          page1();
        }
 }  
    
 
