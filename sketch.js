//Clicking the canvas will loop
//the audio sample until the user
//clicks again to stop it

//We will store the p5.MediaElement
//object in here
var ele;
var button;
var song;
var amp;

function setup() {
  createCanvas(20, 100);
  
  //
  amp = new p5.Amplitude();
background(21, 10, 170);

  //Here we create a p5.MediaElement object
  //using the createAudio() function.
  
   // ele = createVideo('vid.mp4', vidLoad);
  
  ele = createAudio('/assets/hello_02.mp3', audioLoad);
  ele.loop();
  background(0,0,0);

  button = createButton('5 seconds');
  button.position(70, 68);
  button.mousePressed(twice_speed);
  
  button = createButton('40 seconds');
  button.position(150, 98);
  button.mousePressed(normal_speed);

  button = createButton('80 seconds');
  button.position(200, 128);
  button.mousePressed(half_speed);

  button = createButton('6 minutes');
  button.position(250, 158);
  button.mousePressed(tenth_speed);
  
  button = createButton(' minutes');
  button.position(300, 188);
  button.mousePressed(hundreth_speed);

  button = createButton('stop');
  button.position(520, 68);
  button.mousePressed(stop_song);

  button = createButton('play');
  button.position(582, 68);
  button.mousePressed(play_speed);
}

// This function is called when the video loads
//function vidLoad() {
 // ele.play(1);
  //trying to use a gradual playback rate 
  // ele.speed = (map(mouseX, 0, width, 0.1, 1));}

// This function is called when the audio loads
function audioLoad() {
  ele.play(1);
  //trying to use a gradual playback rate 
  // ele.speed = (map(mouseX, 0, width, 0.1, 1));
}

//maybe it has to be in draw?

function draw(){
 //ele.playbackRate = (map(mouseX, 0, width, 0.1, 1));
  
  //from sketch2
  //background (51);
  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.9, 50, 400);
  
  fill (255, 0, 255);
  ellipse (100, 100, diam, diam);

}

//Speeds

//5-6  seconds
function twice_speed() {
  ele.speed(12);
}

//40 seconds
function normal_speed() {
  ele.speed(1);
}

//80 seconds
function half_speed() {
  ele.speed(0.5);
}

//6 minutes
function tenth_speed() {
  ele.speed(0.1);
}

//66 minutes
function hundreth_speed() {
  ele.speed(0.08);
}

// function reverse_speed() {
//   ele.speed(-1);
// }

function stop_song() {
  ele.stop();
}


function play_speed() {
  ele.play();
}

