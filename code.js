var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var striker = createSprite(200,200,10,10);
striker.shapeColor="white";
var playerMallet = createSprite(200,50,50,10);
playerMallet.shapeColor="black";
var computerMallet = createSprite(200,350,50,10);
computerMallet.shapeColor="black";
var goal1 = createSprite(200,28,100,20);
goal1.shapeColor="yellow";
var goal2 = createSprite(200,372,100,20);
goal2.shapeColor="yellow";
var line1=createSprite(200,12,400,3);
line1.shapeColor="white";
var line2=createSprite(200,388,400,3);
line2.shapeColor="white";
var line3=createSprite(12,200,3,400);
line3.shapeColor="white";
var line4=createSprite(388,200,3,400);
line4.shapeColor="white";
var line5=createSprite(200,150,400,3);
line5.shapeColor="white";
var line6=createSprite(200,250,400,3);
line6.shapeColor="white";
var gameState="serve";
var computerScore=0;
var playerScore="0";
fill("red");
function draw() {
 background("orange");
 createEdgeSprites();
 text(computerScore,50,180);
 text(playerScore,50,220);
 if (gameState==="serve"){
   text("Press Space To Serve",150,180);
   fill("red");
 }
 if (keyDown("left")){
   playerMallet.x=playerMallet.x-10;
 }
 if (keyDown("right")){
   playerMallet.x=playerMallet.x+10;
 }
if (keyDown("up")){
  if (playerMallet.y>25)
  {
    playerMallet.y=playerMallet.y-10;
  }
} 
 if (keyDown("down")){
   if (playerMallet.y<125)
   {
     playerMallet.y=playerMallet.y+10;
   }
 } 
  computerMallet.x=striker.x;
for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
    striker.bounceOff(playerMallet);
    striker.bounceOff(computerMallet);
    striker.bounceOff(topEdge);
    striker.bounceOff(bottomEdge);
    striker.bounceOff(edges);
    computerMallet.bounceOff(edges);
    playerMallet.bounceOff(edges);
function serve () {
      striker.velocityX=4;
      striker.velocityY=5;
    }
function reset() {
    striker.x=200;
    striker.y=200;
    striker.velocityX=0;
    striker.velocityY=0;
}
  if (keyDown("space")&& gameState==="serve"){
    serve();
    gameState="play";
  }
  if (striker.isTouching(goal1)||striker.isTouching(goal2))
  {
    if(striker.isTouching(goal1))
    { 
      computerScore=computerScore+1;
    }
    if(striker.isTouching(goal2))
    {
      playerScore=playerScore+1;
    }
    reset();
    gameState="serve";
  }
   if(playerScore===5||computerScore===5){
    gameState="over";
    text("gameover",170,160);
    text("press R to restart",150,180);
    fill("red");
  } 
  if(keyDown("r")&&gameState==="over"){
    gameState="serve";
    computerScore=0;
    playerScore=0;
  }
 drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
