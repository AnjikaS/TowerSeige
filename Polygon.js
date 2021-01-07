class POLYGON extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
     this.Visibility = 255;
     this.image = loadImage("polygon.png");
    }
    display(){
    super.display();
    this.image = loadImage("polygon.png")
    }

  };
  