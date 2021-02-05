var paperob, p;
var Log1;
var Log2;
var Log3;
var ground;
var background_img;
var A_background;
var dustbin_img;
var dustbin;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
    background_img = loadImage("scene.jpg");
    dustbin_img = loadImage("dustbingreen.png");
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.


    Engine.run(engine);

    paperob = new Paper(200, 200, 40);
    Log1 = new Logs(window.innerWidth / 1.25, window.innerHeight / 1.2, 50, 200);
    Log2 = new Logs(Log1.x + Log1.height / 2 + Log1.width / 2, Log1.y + Log1.height / 2 - 25, 200, 50);
    Log3 = new Logs(Log2.x + Log2.width / 2, window.innerHeight / 1.2, 50, 200);
    ground = new Ground(0, window.innerHeight, window.innerWidth * 2, 40);

    A_background = createSprite(window.innerWidth / 2, window.innerHeight / 2);
    A_background.addImage(background_img);
    A_background.scale = 4;

    dustbin = Bodies.rectangle(547.5, 622.5, 200, 150, { isStatic: true });

    World.add(world, dustbin);

    console.log(Log2.body.position.y);
}


function draw() {
    rectMode(CENTER);
    background(0);

    drawSprites();

    paperob.display();
    Log1.display();
    Log2.display();
    Log3.display();
    imageMode(CENTER);
    image(dustbin_img, Log2.body.position.x, Log1.body.position.y, 320, 180);
    ground.display();


}

function keyPressed() {
    if (keyCode == 32) {
        var a = document.getElementsByTagName("input")[0].value;
        var b = document.getElementsByTagName("input")[1].value;
        Body.applyForce(paperob.body, paperob.body.position, { x: b, y: -a });
    }
}