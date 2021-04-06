 var bg,jerry,tom;
 
 function preload (){
  bgImg=loadImage("images/bg.png")
  jerryImg=loadAnimation("images/jerry1.png","images/jerry2.png","images/jerry3.png")

}
  function setup (){
    createCanvas(1200,1200) 
     bg=createSprite(600,600,1200,1200);
     bg.addImage(bgImg);
     bg.scale =1;

     jerry=createSprite(200,600,50,70)
     jerry.addAnimation("jerry_running",jerryImg)
  }

  function draw (){
  background("white")



     drawSprites(); 
  }
