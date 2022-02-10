
var canvas = new fabric.Canvas('nyCemuez')

by=0
bx=0
hy=400
hx=800


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function (Img) {
		hj = Img;
		hj.scaleToWidth(50)
		hj.scaleToHeight(50)
		hj.set({
			top:hy,
			left:hx
		})
		canvas.add(hj)
	})
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		bj = Img;
		bj.scaleToWidth(50)
		bj.scaleToHeight(50)
		bj.set({
			top:by,
			left:bx
		})
		canvas.add(bj)
	})
}

window.addEventListener("keydown", my_keydown);


function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((bx==hx)&&(by==hy)) {
		canvas.remove(bj)
		document.getElementById("hd3").innerHTML="Whoopsie dhoopsie i forgot to ut my punchline here (I also forot the line)"
		document.getElementById("nyCemuez").style.borderColor="red"
	}
	
	else {
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (by > 5) {
			by -= block_image_height
			canvas.remove(bj)
			new_image()
		}
	}

	function down()
	{
		if (by <= 450) {
			by += block_image_height
			canvas.remove(bj)
			new_image()
		}
	}

	function left()
	{
		if(bx>5)
		{
			bx -= block_image_width
			canvas.remove(bj)
			new_image()
		}
	}

	function right()
	{
		if(bx <=1050)
		{
			bx += block_image_width
			canvas.remove(bj)
			new_image()
		}
	}
	
}

