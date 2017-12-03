// Variable Declaration
var canvas = document.getElementById('canvas');
var canvasFood = document.getElementById('canvasFood');
var enemy = document.getElementById('enemy');
var context = canvas.getContext('2d');
var ctx = canvasFood.getContext('2d');
var enemyCTX = enemy.getContext('2d');

// player
var x = canvas.width/2;
var y = canvas.height/2;
var r = 3;

// food
var ranx = Math.floor(Math.random() * 295);
var rany = Math.floor(Math.random() * 147);

// enemy
var enemyX = Math.floor(Math.random() * 295);
var enemyY = Math.floor(Math.random() * 147);

// mouse
var mouseX;
var mouseY;

var sizeTrack = 4;
var score = 0;
// animated frames
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;



// tracks mouse coordinates
function  mouseTrack(evt) {
  	var rect = canvas.getBoundingClientRect(), // abs. size of element
      scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
      scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

  	
    mouseX = Math.round((evt.clientX - rect.left) * scaleX );  // scale mouse coordinates after they have
    mouseY = Math.round((evt.clientY - rect.top) * scaleY);     // been adjusted to be relative to element
  	var coor = "Coordinates: (" + mouseX + "," + mouseY + ")";
    document.getElementById("demo").innerHTML = coor;
}
    
// generates food
function food() {
	ctx.beginPath();
	ctx.arc(ranx, rany, 1, 0, 2 * Math.PI, false);
	ctx.fillStyle = 'red';
	ctx.fill();
	ctx.closePath();
}

// erases food
function erase(c, ex, ey, rad){
    //c.globalCompositeOperation = 'destination-out'
    //c.arc(ex, ey, rad, 0, Math.PI*2, true);
   // c.fill();
    c.clearRect(0, 0, canvasFood.width, canvasFood.height);
}

//enemy logic
function enemyK() {
	enemyCTX.clearRect(0, 0, enemy.width, enemy.height);
	enemyCTX.beginPath();
	enemyCTX.arc(enemyX, enemyY, 10, 0, 2 * Math.PI, false);
	enemyCTX.fillStyle = 'red';
	enemyCTX.fill();
	enemyCTX.closePath(); 
	
	// movement logic
	if (enemyX > x) {
		enemyX -= 1;
	} else if (enemyX < x) {
		enemyX += 1;
	}

	if (enemyY > y) {
			enemyY -= 1;
	} else if (enemyY < y) {
		enemyY += 1;
	}


	if (enemyY < (y + 3) && enemyY > (y - 3) && enemyX < (x + 3) && enemyX > (x - 3)) {
		y = y;
		if (10 > r) {
			alert("You dead!");
			location.reload();

		} 
		
	} 
	
	
	requestAnimationFrame(enemyK);
}

// player logic
function player() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.beginPath();
	context.arc(x, y, r, 0, 2 * Math.PI, false);
	context.fillStyle = 'green';
	context.fill();
	context.closePath(); 
	document.getElementById("rip").innerHTML = "Coordinates: (" + x + "," + y + ")";
	document.getElementById("food").innerHTML = "Score: " + score;
	// movement logic
	if (x > mouseX) {
		x -= 1.7;
	} else if (x < mouseX) {
		x += 1.7;
	}

	if (y > mouseY) {
			y -= 1.7;
	} else if (y < mouseY) {
		y += 1.7;
	}
	
	if (y < (mouseY + 10) && y > (mouseY - 10)) {
		y = y;
	} 
	if (x < (mouseX + 10) && x > (mouseX - 10)) {
		x = x;
	}
	
	// check if food has been eaten
	if (x < (ranx + sizeTrack) && x > (ranx - sizeTrack) && y > (rany - sizeTrack) && y < (mouseY + sizeTrack)) {
		erase(ctx, ranx, rany, 1);
		r += 0.8;
		score += 1;
		sizeTrack += 0.79;
		ranx = Math.floor(Math.random() * 295);
		rany = Math.floor(Math.random() * 147);
		food();
	}
	
	if (y < (enemyY + sizeTrack) && y > (enemyY - sizeTrack) && x < (enemyX + sizeTrack) && x > (x - sizeTrack) && r > 10) {
		alert("you killed him!");
		location.reload();
	}
	
	requestAnimationFrame(player);
}

food();
enemyK();
player();








 	



	
	
	






