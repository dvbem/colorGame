var numColors = 6;
var colors = generateRandomColors(numColors);

var rgb = document.querySelector(".heading__span");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var message = document.querySelector(".message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var btnMode = document.querySelectorAll(".btnMode");

rgb.textContent =  pickedColor;


for(var i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {

        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor) {
            message.textContent = "Correct";
            changeColor();
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play again?";
        }
        else {
            message.textContent = "Try again";
            this.style.backgroundColor = "#232323";
        }
    })
}

resetButton.addEventListener("click", function() {
    resetAction();
})

for(i = 0; i < btnMode.length; i++) {
    btnMode[i].addEventListener("click", function() {
        btnMode[0].classList.remove("selected");
        btnMode[1].classList.remove("selected");
        this.classList.add("selected");

        this.textContent === "Easy" ? numColors = 3: numColors = 6;

        resetAction();
    })
}

/*easyBtn.addEventListener("click", function(){
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    rgb.textContent = pickedColor;
    message.textContent = "";
    numColors = 3;

    colors = generateRandomColors(numColors);
    pickedColor = pickColor();

    for(var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none"; 
        }
    }
})

hardBtn.addEventListener("click", function(){
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    rgb.textContent = pickedColor;
    message.textContent = "";
    numColors = 6;

    colors = generateRandomColors(numColors);
    pickedColor = pickColor();

    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})*/

function changeColor() {
    for (var i =0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickColor() {
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //create an empty array
    var arr = [];

    for (var i = 0; i < num; i++ ) {
        //input random colors into thge array
        arr.push(randomColor());
    }

    //return the array
    return arr;
}

function randomColor() {
    //random number for "Red"
    var r = Math.floor(Math.random()*256);
    //random number for "Green"
    var g = Math.floor(Math.random()*256);
    //random number for "Blue"
    var b = Math.floor(Math.random()*256);
    //return rgb(r, g, b)
    return "rgb" + "(" + r + ", " + g + ", " + b + ")"
}

function resetAction() {
    colors = generateRandomColors(numColors);
    pickedColor = pickColor();
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New colors";
    message.textContent = "";
    rgb.textContent =  pickedColor;


    for(var i=0; i<squares.length; i++) {
        squares[i].style.display = "block";
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none"; 
        }
    }
}

