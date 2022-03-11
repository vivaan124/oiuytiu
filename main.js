x = 0;
y = 0;
drawCircle = "";
drawRect = "";
SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();

function setup () {
  createCanvas(900, 500);
}

function draw () {
  if(drawCircle == "set") {
    console.log("CIRCLE")
    radius = Math.floor(Math.random() * 100);
    circle(x, y, radius);
    drawCircle = "";
  } else if(drawRect == "set") {
    length = (Math.random() * 500);
    width = (Math.random() * 500);
    console.log(length, width, x, y)
    rect(x, y, 100, 100)
    drawRect = "";
  }
}

function start () {
  document.getElementById("status").innerHTML = "Listening... Please speak";
  recognition.start();
}

recognition.onresult = function(event) {
  result = event.results[0][0].transcript;
  document.getElementById("status").innerHTML = "Speech was recognized - " + result;
  if(result == "rectangle") {
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 500);
    document.getElementById("status").innerHTML = "Rectangle was drawn";
    drawRect = "set";
  } else if (result == "circle") {
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 500);
    document.getElementById("status").innerHTML = "Circle was drawn";
    drawCircle = "set";
  }
}