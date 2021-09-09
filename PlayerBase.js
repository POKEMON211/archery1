class PlayBase{
    constructor(x, y, w, h) {
        var playO = {
            isStatic : true
        };

        this.body = Bodies.rectangle(x, y, w, h, playO);
        this.width = w;
        this.height = h;
        this.image = loadImage("./assets/base1.png");

        World.add(world, this.body);    


    }   

    display(){
        var position = this.body.position;
        var angle = this.body.angle;

        imageMode(CENTER);
        push();
        translate(position.x, position.y);
        rotate(angle);
        image(this.image, 0, 0, this.width, this.height);

        pop();

    }
}