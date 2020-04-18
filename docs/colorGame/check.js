var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll("#container .square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset =document.querySelector("#reset");
var easyBtn =document.querySelector("#easyMode");
var hardBtn =document.querySelector("#hardMode");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor===pickedColor) {
			message.textContent = "correct!";
			changeColor();
			h1.style.backgroundColor=pickedColor;
			reset.textContent = "play again?"
			}else{
			message.textContent = "Try Again";
			this.style.backgroundColor = "#323232";
			}
	})
}

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors =generateRandomColors(numSquares)
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display = "none";
		}
	message.textContent="";
	
	}
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors =generateRandomColors(numSquares)
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display = "block";
	}
	message.textContent="";

})

reset.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i]
	}
	h1.style.backgroundColor="steelblue";
	message.textContent="";
	this.textContent="new colors"
})

function changeColor(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=pickedColor
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];	
}

function generateRandomColors(num){
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomColors())
	}
	return arr
}

function randomColors(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r +", "+ g +", "+ b+")"
}