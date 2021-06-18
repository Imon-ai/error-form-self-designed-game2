var canvas;
var database;
var game,form,player;
var gameStateRef,gameState;
var gameState,playerCount,allPlayers;
var player1,player2;
var players;
var formBg,gamePageBg;
var formBgVar;

//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;

//var engine,world;

function preload()
{
  	formBg=loadImage("backgrounds/game open image.jpg");
    gamePageBg=loadImage("backgrounds/game open image2.jpg");
}

function setup() {
	canvas=createCanvas(displayWidth,displayHeight);

  
  
  
  
  //	engine = Engine.create();
  	//world = engine.world;



  	//Engine.run(engine);

  
}


function draw() {
  background(formBg);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

 

}



