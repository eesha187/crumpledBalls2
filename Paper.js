class Paper extends BaseClass{
    constructor(x, y,radius) {
super(x,y)
paper=this.body.addImage("MATTERBOILERPLATE-MASTER,paper.png");
      this.body = Bodies.circle(x, y,radius, options);
     this. radius = radius;
     
      
      World.add(world, this.body);
    }

  };