class Mango{
constructor(x, y, radius, options){
    var options = {
        isStatic : true,
        stiffness : 0.2
    }
    this.x = x;
    this.y = y;
    this.r = 10;
    this.image = loadImage("Plucking mangoes/mango.png")
this.body = Bodies.circle(this.x, this.y, 10, options)
World.add(world, this.body);
}
}