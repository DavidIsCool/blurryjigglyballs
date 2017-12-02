// Variable Declaration
var canvas = document.getElementById('canvas');
var canvasFood = document.getElementById('canvasFood');
var context = canvas.getContext('2d');
var ctx = canvasFood.getContext('2d');

var x = canvas.width/2;
var y = canvas.height/2;
var r = 3;

var ranx = Math.floor(Math.random() * 295);
var rany = Math.floor(Math.random() * 147);

var mouseX;
var mouseY;

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

// player logic
function player() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.beginPath();
	context.arc(x, y, r, 0, 2 * Math.PI, false);
	context.fillStyle = 'green';
	context.fill();
	context.closePath(); 
	document.getElementById("rip").innerHTML = "Coordinates: (" + x + "," + y + ")";
	document.getElementById("food").innerHTML = "Coordinates: (" + ranx + "," + rany + ")";
	// movement logic
	if (x > mouseX) {
		x -= 1;
	} else if (x < mouseX) {
		x += 1;
	}

	if (y > mouseY) {
			y -= 1;
	} else if (y < mouseY) {
		y += 1;
	}
	
	if (y < (mouseY + 10) && y > (mouseY - 10)) {
		y = y;
	} 
	if (x < (mouseX + 10) && x > (mouseX - 10)) {
		x = x;
	}
	
	// check if food has been eaten
	if (x < (ranx + 4) && x > (ranx - 4) && y > (rany - 4) && y < (mouseY + 4)) {
		erase(ctx, ranx, rany, 1);
		r += 0.8;
		ranx = Math.floor(Math.random() * 295);
		rany = Math.floor(Math.random() * 147);
		food();
		
		
		
	}
	
	requestAnimationFrame(player);
}

food();
player();








 	



	
	
	






