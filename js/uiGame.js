// get a handle to the canvas context
var canvas = document.getElementById("myCanvas");
// get 2D context for this canvas
var context = canvas.getContext("2d");



var cyberpunk = new Audio('cyber.mp3');
var love = new Audio('love.mp3');
var tripaloski = new Audio('tri.mp3');



var options = [{
    "text": "Select Song",
	"value": "No Audio",
    "selected": true
  },
  {
    "text": "Song1",
	"value": "cyber.mp3"
  },
  {
    "text": "Song2",
	"value": "love.mp3"
  },
  {
    "text": "Song3",
	"value": "tri.mp3"
  }
];

var selectBox = document.getElementById('music');

for (var i = 0; i < options.length; i++) {
  var option = options[i];
  selectBox.options.add(new Option(option.text, option.value, option.selected));
}




function musicSelect() {
  var selection = document.getElementById("music").value;
  var active = document.getElementById("active");
  if (active.checked == true) 
  {
    document.getElementById("HUD").innerHTML = selection + " active ";
    console.log("Audio Active");
    if(selection === "cyber.mp3")
    {
        cyberpunk.play();
    }
    if(selection === "love.mp3")
    {
        love.play();
    }
    if(selection === "tri.mp3")
    {
        tripaloski.play();
    }
    
  } 
  
  else 
  {
    document.getElementById("HUD").innerHTML = selection + " selected ";
    console.log("audio Selected");
    
    cyberpunk.pause();
    cyberpunk.currentTime = 0;
    
    love.pause();
    love.currentTime = 0;
    
    tripaloski.pause();
    tripaloski.currentTime = 0;
    
  }
}
var playerHealth = 100;
var npcHealth = 100;
var countFrom = 0;
var goingFoward = 1;

var callTheWalk	= false;
var callTheWalkBack = false;
var allowToAttack = true;
var gameWon = false;
var gameLost = false;
var pressSpace = false;

function drawHealthbar() {
  var width = 100;
  var height = 20;
  var max = 120;
  var val = playerHealth;

  // Draw the background
  context.fillStyle = "#000000";
  context.clearRect(20, 350, width, height);
  context.fillRect(20, 350, width, height);

  // Draw the fill
  context.fillStyle = "#00FF00";
  var fillVal = Math.min(Math.max(val / max, 0), 1);
  context.fillRect(20, 350, fillVal * width, height);
}










function drawHealthbarNpc() {
  var width = 100;
  var height = 20;
  var max = 120;
  var val = npcHealth;

  // Draw the background
  context.fillStyle = "#000000";
  context.clearRect(820, 350, width, height);
  context.fillRect(820, 350, width, height);


  // Draw the fill
  context.fillStyle = "#00FF00";
  var fillVal = Math.min(Math.max(val / max, 0), 1);
  context.fillRect(820, 350, fillVal * width, height);
}


function lightAttack(){

if(allowToAttack == true)
{	
	allowToAttack = false;
	callTheWalk = true;
	setTimeout(enemyRandomAttack, 4000);
	setTimeout(enemyLightDamage,3000);
	
	//setTimeout(walkBackToPos, 2000)
}
}

function heavyAttack(){
	
if(allowToAttack == true)
{	
	allowToAttack = false;
	callTheWalk = true;
	setTimeout(enemuheavyDamage,3000);
	setTimeout(enemyRandomAttack, 4000);
}
}

function playerBarrier(){
	
if(allowToAttack == true)
{	
	setTimeout(enemyRandomAttack, 2000);
	serTimeout(playerHeal,1000);
}
}

function playerBuff() {
	
	if(allowToAttack == true)
	{	
		alowToAttack = false;
		callTheWalk = true;
	
		var godkill = Math.floor((Math.random() * 1000) + 1);
		if (godkill == 500)
		{
			npcHealth -= 1000;
		}
		
		setTimeout(enemyRandomAttack, 4000);
		
		
	}
	
}

function myFunction() {
  alert('timer Working');
}

function enemyLightDamage() {
	
	npcHealth -= 10;
}

function enemuheavyDamage() {
	npcHealth -= 20;
}

function playerHeal() {
	playerHealth +=10;
}

function walkToEnemy() {
	
 	if (newX < 700 && goingFoward == 1)
	{
		newX += 5;
		console.log("walkinggg  ...");
	
	}
	 
//newX = 700;

}


function waitForTheMove(){
	

		for(var countFrom1 = 0; countFrom1 < 100; countFrom1++)
		{
		
			console.log("timier  ...");
			
			
				if(countFrom1 >= 99)
				{			
				
					console.log("i am working not ...");
				}
				
		}

	
	
	
	
}

function walkBackToPos(){

{
			newX -= 5;
			if (newX <= 10)
			{
				
				
				callTheWalkBack = false;
				allowToAttack = true;
			}
		
		} 
		
		
		//newX = 10;
}

function playerLoose(){
	
	if(playerHealth <= 0)
	{
		console.log("player is dead");
		gameLost = true;
	}

	
}

function playerWin(){
	
	if(npcHealth <= 0)
	{
		console.log("npc is dead");
		gameWon = true;
	}
}

function enemyRandomAttack(){
	callTheWalk = false;
	callTheWalkBack = true;
	var randomNum = Math.floor((Math.random() * 4) + 1);
	
	
	if (randomNum == 1)
	{
		playerHealth -= 10;
		
	}
	
	if (randomNum == 2)
	{
		playerHealth -=20;
		
	}
	
	if (randomNum == 3)
	{
		npcHealth +=10;
		
	}
	
	if (randomNum == 4)
	{
		playerHealth -=15;
	}
	
	
}






// Setup images
var spriteBg = new Image();
spriteBg.src = "./img/bg47.png";


// Sprite
var sprite = new Image();
sprite.src = "./img/sprite.png"; 


// Sprite
var spritenpc = new Image();
spritenpc.src = "./img/spriteflipped.png"; 

var winSprite = new Image();
winSprite.src = "./img/win.png"


var loseSprite = new Image();
loseSprite.src = "./img/lose.png"


var spaceSprite = new Image();
spaceSprite.src = "./img/space.png"

var audioSprite = new Image();
audioSprite.src = "./img/audio.png"








var x = 0,
    y = 1300;


var newX = 10;
var newY = 390;
// Total Frames
var frames = 12;
var framesBg = 47;
var framesnpc = 12;

// Current Frame
var currentFrame = 0;
var currentFrameBg = 0;
var currentFramenpc = 0;

// Initial time set
var initial = new Date().getTime();
var initialBg = new Date().getTime();
var initialnpc = new Date().getTime();
var current; // current time
var currentBg; // current time
var currentnpc; // current time


document.onkeydown = function(evt)
{
		
     evt = evt || window.event;
     if(evt.keyCode == 32)
	{  
		pressSpace = true;
		allowToAttack = true;
    }
}
// Update to be added
function update() {
    console.log("Update ...");
	if (callTheWalk == true)
	{
		walkToEnemy();
		
	}
	if(callTheWalkBack == true)
	{
		
		walkBackToPos();
	}
	playerLoose();
	playerWin();

}

function draw() {
    console.log("Draw  ...");

	
   
    
    
	animateBg();
	
}

function animateBg() {
	currentBg = new Date().getTime(); // update current
    if (currentBg - initialBg >= 60) { // check is greater that 60 ms
        currentFrameBg = (currentFrameBg + 1) % framesBg; // update frame
        initialBg = currentBg; // reset initial
    } 

    // Draw sprite frame
	context.drawImage(spriteBg, (spriteBg.width / 47) * currentFrameBg, 0, 800, 400, 0, 0, 1000, 600);

	context.beginPath();
	context.lineWidth = "80";
	context.strokeStyle = "gray";
	context.rect(0, 600, 1200, 0);
	context.stroke();
	animate();
	
}

function animate() {
    current = new Date().getTime(); // update current
    if (current - initial >= 107) { // check is greater that 500 ms
        currentFrame = (currentFrame + 1) % frames; // update frame
        initial = current; // reset initial
    } 

    // Draw sprite frame
															  //S.x  S.y  	   C.x C.y  

														  
    context.drawImage(sprite, (sprite.width / 12) * currentFrame, 0, 100, 256, newX, newY, 105, 256);
	drawHealthbar();
	drawHealthbarNpc();
	if(gameWon === true)
	{
		context.drawImage(winSprite,400,100);
		allowToAttack = false;
	}
	
	if(gameLost === true)
	{
		context.drawImage(loseSprite,400,100);
		allowToAttack = false;
	}
	
	if (pressSpace === false)
	{
		
		context.drawImage(spaceSprite,350,200);
		context.drawImage(audioSprite,10,100);
		allowToAttack = false;
	}
	
	
	
	
	
	animatenpc();
	
}

function animatenpc() {
    currentnpc = new Date().getTime(); // update current
    if (currentnpc - initialnpc >= 107) { // check is greater that 500 ms
        currentFramenpc = (currentFramenpc + 1) % framesnpc; // update frame
        initialnpc = currentnpc; // reset initial
    } 

    // Draw sprite frame
															  //S.x  S.y  	   C.x C.y    
    context.drawImage(spritenpc, (spritenpc.width / 12) * currentFrame, 0, 100, 256, 820, 390, 105, 256);


}





function gameloop() {
	
    update();
    draw();
    window.requestAnimationFrame(gameloop);
}

window.requestAnimationFrame(gameloop);