// Each time this function is called a GameObject
// is create based on the arguments
// In JavaScript you can consider everything an Object
// including functions

var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var buttonD = document.getElementById("dButton")
var npcsprite = new Image();
var audio = new Audio('buttonClick.mp3');
npcsprite.src = "/img/fade.png"; // Frames 1 to 6
var playerHealth = 110;
var sprite = new Image();
sprite.src = "/img/sprite.png"; // Frames 1 to 6

function buttonOnClick() {
  // alert("Booooommmmmm!!!");
  console.log("Button Pressed");
}
function drawHealthbar() {
  var width = 100;
  var height = 20;
  var max = 100;
  var val = playerHealth;

  // Draw the background
  context.fillStyle = "#000000";
  context.clearRect(0, 0, width, height);
  context.fillRect(0, 0, width, height);

  // Draw the fill
  context.fillStyle = "#00FF00";
  var fillVal = Math.min(Math.max(val / max, 0), 1);
  context.fillRect(0, 0, fillVal * width, height);
}

// Update Heads Up Display with Weapon Information
function weaponSelection() {
  var selection = document.getElementById("equipment").value;
  var active = document.getElementById("active");
  if (active.checked == true) {
    document.getElementById("HUD").innerHTML = selection + " active ";
    console.log("Weapon Active");
  } else {
    document.getElementById("HUD").innerHTML = selection + " selected ";
    console.log("Weapon Selected");
  }
}

function GameObject(name, img, health) {
    this.name = name;
    this.img = img;
    this.health = health;
    this.x = 0;
    this.y = 0;
}

// The GamerInput is an Object that holds the Current
// GamerInput (Left, Right, Up, Down)
function GamerInput(input) {
    this.action = input;
}

// Default GamerInput is set to None
var gamerInput = new GamerInput("None"); //No Input

// Default Player
var player = new GameObject("player",sprite,100);



// Gameobjects is a collection of the Actors within the game
var gameobjects = [player, new GameObject("NPC",npcsprite, 100,700,700)];

// Process keyboard input event
function input(event) {
    // Take Input from the Player
     console.log("Input");
     //console.log("Event type: " + event.type);

    if (event.type === "keydown") {
        switch (event.keyCode) {
            case 37:
                gamerInput = new GamerInput("Left");
                break; //Left key
            case 38:
                gamerInput = new GamerInput("Up");
                break; //Up key
            case 39:
                gamerInput = new GamerInput("Right");
                break; //Right key
            case 40:
                gamerInput = new GamerInput("Down");
                break; //Down key
            default:
                gamerInput = new GamerInput("None"); //No Input
        }
    } else {
        gamerInput = new GamerInput("None"); //No Input
    }
    // console.log("Gamer Input :" + gamerInput.action);
}

document.getElementById("wButton").onmouseup = function() {buttonUp()};
document.getElementById("aButton").onmouseup = function() {buttonUp()};
document.getElementById("dButton").onmouseup = function() {buttonUp()};
document.getElementById("sButton").onmouseop = function() {buttonUp()}


function moveRight()
{
	gamerInput = new GamerInput ("Right");
	audio.play();
}
function moveLeft()
{	
	gamerInput = new GamerInput ("Left");
	audio.play();
}
function moveUp()
{
	gamerInput = new GamerInput ("Up");
	audio.play();
}

function moveDown()
{
	gamerInput = new GamerInput ("Down");
	audio.play();
}
function ButtonUp()
{
	gamerInput = new GamerInput("None");
}
function update() {
    // Iterate through all GameObjects
    // Updating position and gamestate
    // console.log("Update");
		
		
	
		if (gamerInput.action === "Down") 
		{
			gameobjects[0].x +=5;
			gamerInput = new GamerInput("None");
		}
		
		if (gamerInput.action === "Up") 
		{
		gameobjects[0].y -=5;  
		gamerInput = new GamerInput("None");
		}
		
		
		if(gamerInput.action === "Left")
		{
		gameobjects[0].x -=5;
		gamerInput = new GamerInput("None");
		}
		
		if(gamerInput.action === "Right")
		{
		gameobjects[0].y +=5;
		gamerInput = new GamerInput("None");
		}
		

		if(gameobjects[0].x > gameobjects[1].x)
		{
			gameobjects[1].x +=1;
		}
		
		
		if(gameobjects[0].x < gameobjects[1].x)
		{
			gameobjects[1].x -=1;
		}
		
		
		if(gameobjects[0].y > gameobjects[1].y)
		{
			gameobjects[1].y +=1;
		}
		
		
		if(gameobjects[0].y < gameobjects[1].y)
		{
			gameobjects[1].y -=1;
		}
    }


var x = 0,
    y = 1300;
	
// Draw GameObjects to Console
// Modify to Draw to Screen
function draw() {
    // Clear Canvas
    // Iterate through all GameObjects
    // Draw each GameObject
    // console.log("Draw");
   

	

}







var options = [{
    "text": "Select your Gear",
    "value": "No Weapon",
    "selected": true
  },
  {
    "text": "Diamond Sword",
    "value": "Full Shiny"
  },
  {
    "text": "Mana Star",
    "value": "Magical Weapon"
  },
  {
    "text": "Fire staff",
    "value": "Flames?"
  }
];

var selectBox = document.getElementById('equipment');

for (var i = 0; i < options.length; i++) {
  var option = options[i];
  selectBox.options.add(new Option(option.text, option.value, option.selected));
}


// Total Frames
var frames = 6;

// Current Frame
var currentFrame = 0;

// Sprite



// X axis to Draw from
var sprite_x = 0;

// Initial time set
var initial = new Date().getTime();
var current; // current time



function animate() {
	context.clearRect(0, 0, canvas.width, canvas.height); 
    current = new Date().getTime(); // update current
    if (current - initial >= 300) { // check is greater that 500 ms
        currentFrame = (currentFrame + 1) % frames; // update frame
        initial = current; // reset initial
    } 

    // Draw sprite frame
    context.drawImage(sprite, (sprite.width / 6) * currentFrame, 0, 100, 100, gameobjects[0].x, gameobjects[0].y, 50, 50);
	context.drawImage(npcsprite, (npcsprite.width / 6) * currentFrame, 0, 100, 100, gameobjects[1].x, gameobjects[1].y, 50, 50);
	
	//context.drawImage(gameobjects[0].img, (gameobjects[0].img.width / frames) * currentFrame, 0, 90, 90, 300, 300, 290, 290);
	if(gameobjects[0].x == gameobjects[1].x && gameobjects[0].y == gameobjects[1].y)
	{
		gameobjects[1].x = 600;
		gameobjects[1].y = 10;
		playerHealth -= 10;
	}
	drawHealthbar();
}

function gameloop() {
    update();
    draw();	
	animate();
    window.requestAnimationFrame(gameloop);


}

// Handle Active Browser Tag Animation
window.requestAnimationFrame(gameloop);

// Handle Keypressed
window.addEventListener('keyup', input);
window.addEventListener('keydown', input);
window.addEventListener('keyleft', input);
window.addEventListener('keyright', input);