
var rod1,rod2,boy,ground,trap,trap2,trap3,inv,inv2,inv3,trapImg,doorImg,houseImg,house,door,boyImg//,leftb,rightb;
var play = 1;
var END = 0;
var  gameState = play
function preload(){
boyImg = loadImage("boy.png");
trapImg = loadImage("trap.png");
doorImg = loadImage("door.png");
houseImg = loadImage("house.jpg");
}

function setup (){
createCanvas(windowWidth,windowHeight);

house = createSprite(width/2,height/2)
house.addImage(houseImg)
house.scale = 10

door =createSprite(width/1.1,height/1.2,100,200)
door.addImage(doorImg)
door.scale = 0.6

rod1 = createSprite(50,height/1.5,width/1.5,20);
rod2 = createSprite(1500,height/4,width/1.5,20);

boy = createSprite(width/1.8,/*100*/200,50,50);
boy.addImage(boyImg);
boy.scale = 0.2
//boy.debug = true

boy.setCollider("rectangle",-0,10,100,boy.height)
ground = createSprite(width/2,height/1,width/1,height/20)
trap = createSprite(width/1.5,height/3.2,100,100);
trap.addImage(trapImg)
trap.scale = 0.3

trap2 = createSprite(width/45,height/2,100,100);
trap2.addImage(trapImg)
trap2.scale = 0.2
trap3 = createSprite(width/45,height/1.1,100,100);
trap3.addImage(trapImg)
trap3.scale = 0.3

inv = createSprite(width/1.5,height/1.1,5,1200)
inv.visible = false
inv2 = createSprite(width/2,height/2.2,1900,5)
inv2.visible = false
inv3 = createSprite(width/2,height/1.1,1900,5)
inv3.visible = false

 //leftb = createSprite(width/2,height/1.1,50,50)
 //rightb = createSprite(width/1.8,height/1.1,50,50)
}

function draw(){
background("black");


drawSprites();

if(gameState===play){

	if(boy.isTouching(inv)){
	trap.velocityY = 17
	}
	
	if(boy.isTouching(inv2)){
		trap2.velocityX = 25
		}
	
		if(boy.isTouching(inv3)){
			trap3.velocityX = 30
			}
	
	
	if(touches.length || keyDown("left")){
	boy.x = boy.x -10
	}
	
	if(touches.length || keyDown("right")){
		boy.x = boy.x +10
		}
	
	boy.y = boy.y + 5
	
	
	 
	
	 
		
	
		if(boy.isTouching(trap)){
		
			gameState = END
		
		}
		
		if(boy.isTouching(door)){
			boy.x = door.x;
			boy.y = door.y
			trap.velocityY = 0
			trap2.velocityX = 0
			trap3.velocityX = 0
			textSize(30)
			fill ("green")
			text ("refresh your page to play again",width/2.3,height/1.9)
			text ("YOU WON",width/2,height/2)
		}
		
		if(boy.isTouching(trap2)){
			gameState = END
			
		}
	
		if(boy.isTouching(trap3)){
			
			gameState = END
		}
	}
	
	boy.collide(rod1);
	boy.collide(rod2);
	boy.collide(ground)
	trap.collide(ground)
	

if(gameState===END){
	boy.y = trap.y
	boy.x = trap.x
	textSize(25)
	fill("black");
	text ("press R to reset",width/2,height/1.9)
	text ("YOU LOOSE",width/2,height/2);
	trap.velocityY = 0;
	trap2.velocityX = 0;
	trap3.velocityX = 0;

if (keyDown("r")){
gameState = play;
boy.x = width/1.8;
boy.y = 200;

trap.x = width/1.5;
trap.y = height/3.2;

trap2.x = width/45;
trap2.y = height/2;

trap3.x = width/45
trap3.y = height/1.1

}

 }
}
