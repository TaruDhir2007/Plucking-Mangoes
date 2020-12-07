class Tree{
constructor(x, y, options){
    var options ={
    isStatic : true
    }

this.image = loadImage("Plucking mangoes/tree.png");    
this.body = Bodies.rectangle(600, 450, options)
this.x = 600;
this.y = 450;
World.add(world, this.body);
}}