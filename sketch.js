let soundFile, analyzer, delay, mic, reverb;

function preload() {
  soundFormats('ogg', 'mp3');
  soundFile = loadSound('ITC.mp3');
}

function setup() {
  createCanvas(710, 400);
  
  mic = new p5.AudioIn(); 
  mic.start();

   

  delay = new p5.Delay();
  delay.process(mic, 0.12, 0.7, 1000);
  delay.setType('pingPong'); // 스테레오 효과
  reverb = new p5.Reverb();
  reverb.process(mic, 0.1, 0.2);
  reverb.amp(4);
  analyzer = new p5.Amplitude();
  analyzer.setInput(mic);
}

function draw() {
  background(0);

 
  let level = analyzer.getLevel();

  soundFile.amp(3);
  


;
}

function mousePressed() {
  soundFile.play();
}