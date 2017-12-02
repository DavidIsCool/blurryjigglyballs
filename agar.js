var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var x = canvas.width/2;
var y = canvas.height/2;
var r = 3;


var mouseX;
var mouseY;

var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;




function  mouseTrack(evt) {
  	var rect = canvas.getBoundingClientRect(), // abs. size of element
      scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
      scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

  	
    mouseX = Math.round((evt.clientX - rect.left) * scaleX );  // scale mouse coordinates after they have
    mouseY = Math.round((evt.clientY - rect.top) * scaleY);     // been adjusted to be relative to element
  	var coor = "Coordinates: (" + mouseX + "," + mouseY + ")";
    document.getElementById("demo").innerHTML = coor;
}
    




function circle() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.beginPath();
	context.arc(x, y, r, 0, 2 * Math.PI, false);
	context.fillStyle = 'green';
	context.fill();
	context.closePath(); 
	document.getElementById("rip").innerHTML = "Coordinates: (" + x + "," + y + ")";
	
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

	
	requestAnimationFrame(circle);
}


circle();








 	



	
	
	






