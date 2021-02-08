

function buttonOnClick() {
  // alert("Booooommmmmm!!!");
  console.log("Button Pressed");
  updateScore();
  
function onPage() {
  // Using JSON and Local Storage for
  // GameState Management
  var gameObj = {
    'pawn': 1,
    'worker': 2,
    'boss': 3
  };

  // Game objects as JSON
  localStorage.setItem('gameObj', JSON.stringify(gameObj));

  // Retrieve Games object as from storage
  var npcObjects = localStorage.getItem('gameObj');

  console.log('npcObjects: ', JSON.parse(npcObjects));

  // Reading Level Information from a file
  var readJSONFromURL = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function () {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };

    xhr.send();
  };

  readJSONFromURL('./data/level.json', function (err, data) {
    if (err != null) {
      console.error(err);
    } else {
      var text = data["Pawns"];
      console.log(text);
      var text = data["Grunts"];
      console.log(text);
      var text = data["Boss"];
      console.log(text);
    }
  });

  // Reading File from a Server

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      document.getElementById("NPC").innerHTML = data[0];
    }
  };
  xmlhttp.open("GET", "./data/level.json", true);
  xmlhttp.send();



  updateScore();

}

// Update the player score
function updateScore() {
  var current_score = localStorage.getItem('score');
	console.log("big pp");
  if (isNaN(current_score)) {
    localStorage.setItem('score', 0);
    document.getElementById("SCORE").innerHTML = " [ " + current_score + " ] ";
  } else {
    localStorage.setItem('score', parseInt(current_score) + 1);
    document.getElementById("SCORE").innerHTML = " [ " + current_score + " ] ";
  }

}
}




var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var buttonD = document.getElementById("dButton")
var npcsprite = new Image();
var audio = new Audio('buttonClick.mp3');
npcsprite.src = "/img/faden.png"; // Frames 1 to 6
var playerHealth = 110;
var sprite = new Image();
sprite.src = "/img/sprite.png"; // Frames 1 to 6


context.font = "30px Arial";

var url = document.location.href;
var gamertag;
function splitFunction() {
	var result = url.split("=");
	
	gamertag = result[1];
}
splitFunction();
var string1 = "Welcome";

var string2 = "gamertag";

var username = string1.concat(string2);



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


function moveRight()
{
	gamerInput = new GamerInput ("Right");
	score = score +1;
	audio.play();
}
function moveLeft()
{	
	gamerInput = new GamerInput ("Left");
	score = score +1;	
	audio.play();
}
function moveUp()
{
	gamerInput = new GamerInput ("Up");
	score = score +1;	
	audio.play();
}

function moveDown()
{
	gamerInput = new GamerInput ("Down");
	score = score +1;	
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
	
	
	context.fillText(username,300,100);
	context.fillText(score,110,30);
	
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