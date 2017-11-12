var canvas,ctx;
var keys = {};
var keys1 = {};
var lvl = "Level 1";
var scene = [];
var scene_empty = [];
var number = 0;
var miliseconds = 0;
var seconds = 0;
var minutes = 0;



window.onkeydown = function(event)
{
  keys[event.keyCode] = true;
};

window.onkeyup = function(event)
{
  keys[event.keyCode] = false;
  keys1[event.keyCode] = false;
};

window.onkeypress = function(event)
{
  keys1[event.keyCode] = true;
};

window.onload = function()
{
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  lvl1();
  requestAnimationFrame(mainLoop);
};

//animacie
  setInterval(function()
  {
    for(var i in scene)
    {
    scene[i].animation += 1;
    if(scene[i].animation === scene[i].max)
      scene[i].animation = 0;
    if(scene[i].moving === 1)
      scene[i].anim += 1;
    if(scene[i].anim === scene[i].max)
      scene[i].anim = 1;
    }
  },200);

//mana crystals a zvascovanie obtiaznosti
    setInterval(function(){if(hero.death === 0 && number >0){scene.push(new crystal());if(sound_on === 1)spawns.play()};},8000);
    setInterval(function(){for(var i in scene){if(hero.death === 0 && number >0) {scene[i].difficulty+=0.5;if(sound_on === 1)gong.play()}};},30000);
    setInterval(function(){if(hero.death === 0){miliseconds +=1; if(miliseconds === 1) {seconds += 1; miliseconds = 0} if(seconds === 60) {minutes +=1; seconds =0}}},1000);



function mainLoop()
{
  console.log(sound_on);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for( var i in scene)
  {
    if(scene[i].spawned === 0)
    {
      scene[i].spawn();
    }
    if(scene[i].death === 0 || (scene[i].shot === 1 && scene[i].amount >0))
    {
      scene[i].move();
    }
    scene[i].draw();
  }
  requestAnimationFrame(mainLoop);
}
