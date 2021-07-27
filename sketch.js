var box;

function setup()
 {
    createCanvas(400,400);
    background(51)
    box = createSprite(200,200,30,30)
  }
  
  function draw() {
   

    if(KeyDown("RIGHT_ARRROW"))
    {
    
        background("black");
    
    }

    if(KeyDown("LEFT_ARROW"))
    {
    
        background("black");
    
    }

    if(KeyDown("DOWN_ARROW"))
    {
    
        background("white");
    
    }

    if(KeyDown("UP_ARROW"))
    {
    
        background("red");
    
    }


   createSprite();
  }
  