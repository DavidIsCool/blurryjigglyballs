var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var x = canvas.width/2;
var y = canvas.height/2;
var r = 3;

var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;


function mouseTrack(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    var coor = "Coordinates: (" + mouseX + "," + mouseY + ")";
    document.getElementById("demo").innerHTML = coor;

    function circle() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.beginPath();
		context.arc(x, y, r, 0, 2 * Math.PI, false);
		context.fillStyle = 'green';
		context.fill();
		context.closePath(); 


		if (x > mouseX) {

		} else if (x < mouseX) {

		}

		if (y > mouseY) {
 
		} else if (y < mouseY) {

		}
		
		if (y == mouseY) {
			
		}
		x += 0.01;
		y += 0.01;
		
		requestAnimationFrame(circle);
	}

	circle();
}








 	



	
	
	






