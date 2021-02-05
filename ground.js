class Ground {
    constructor(x, y, width, height) {
        // this.x = x;
        // this.y = y;
        var options = {
            isStatic: true
        };
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    display() {
        push();
        var p = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(p.x, p.y, this.width, this.height);
        pop();
    }
}