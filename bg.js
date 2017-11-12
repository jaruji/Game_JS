function bg ()
{
  this.tiles= [
    [3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4],
    [4,0,0,Math.floor((Math.random() * 2) + 1),0,1,0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,1,Math.floor((Math.random() * 2) + 1),3],
    [3,2,0,0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,1,0,Math.floor((Math.random() * 2) + 1),0,0,4],
    [4,0,0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,3],
    [3,0,Math.floor((Math.random() * 2) + 1),Math.floor((Math.random() * 2) + 1),Math.floor((Math.random() * 2) + 1),Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,4],
    [4,0,Math.floor((Math.random() * 2) + 1),Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),3],
    [3,0,Math.floor((Math.random() * 2) + 1),Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,1,0,4],
    [4,0,Math.floor((Math.random() * 2) + 1),Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,3],
    [3,0,Math.floor((Math.random() * 2) + 1),0,0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,0,0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,4],
    [4,0,Math.floor((Math.random() * 2) + 1),Math.floor((Math.random() * 2) + 1),0,1,0,0,0,Math.floor((Math.random() * 2) + 1),0,0,0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,3],
    [3,0,0,0,0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,0,Math.floor((Math.random() * 2) + 1),0,0,0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),4],
    [4,0,Math.floor((Math.random() * 2) + 1),Math.floor((Math.random() * 2) + 1),0,1,0,0,0,Math.floor((Math.random() * 2) + 1),0,0,1,0,Math.floor((Math.random() * 2) + 1),0,0,0,0,3],
    [3,0,0,0,0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,Math.floor((Math.random() * 2) + 1),0,0,0,4],
    [4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,4,3,5,3],
    ]

  this.draw = function()
  {
    for(i = 0; i < 14; i++)
    {
      for(j = 0; j < 20; j++)
      {
        if(this.tiles[i][j] === 0 || this.tiles[i][j] === -1 )
          ctx.drawImage(tile1,j*64,i*64,tile.width,tile.height)
        if(this.tiles[i][j] === 1)
          ctx.drawImage(tile2,j*64,i*64,tile.width,tile.height)
        if(this.tiles[i][j] === 3 || this.tiles[i][j] === 2)
          ctx.drawImage(tile3,j*64,i*64,tile.width,tile.height)
        if(this.tiles[i][j] === 4)
          ctx.drawImage(tile4,j*64,i*64,tile.width,tile.height)
        if(this.tiles[i][j] === 5)
          ctx.drawImage(tile5,j*64,i*64,tile.width,tile.height)
      }
    }
    ctx.font="30px Calibri";
    for(i = 0; i < hero.hp; i++)
    {
      ctx.drawImage(heart, canvas.width-45-(i*30),0, 30, 30);
    }
    for(i = 0; i < bullet.amount; i++)
    {
      ctx.drawImage(manaa, canvas.width-45-(i*30),30, 30, 30);
    }
    ctx.fillStyle="gold";
    ctx.strokeStyle="black";
    ctx.drawImage(pouch,10,20,35,30);
    ctx.fillText(hero.gold,50,45);
    ctx.strokeText(hero.gold,50,45);
    ctx.font = "50px Calibri";
    ctx.fillStyle="white";
    ctx.fillText(lvl,canvas.width-712,45);
    ctx.strokeText(lvl,canvas.width-712,45);
    ctx.fillText(minutes +":",canvas.width-550,45)
    ctx.fillText(seconds,canvas.width-510,45);
    ctx.strokeText(minutes +":",canvas.width-550,45)
    ctx.strokeText(seconds,canvas.width-510,45);
    if(keys[82])
      location.reload();
    if(keys1[32])
      {
        if(bullet.ready === 1 && bullet.amount >0)
        {
          bullet.shot = 1;
          if(sound_on === 1)
            fire.play();
          bullet.ready = 0;
          setTimeout(function() {bullet.ready = 1;},1000);
        }
        if(bullet.ready === 1 && bullet.amount === 0)
        {
          if(sound_on === 1)
            nomana.play();
        }
      }
      if(keys[84])
        tutorial_draw();
      if(keys[67])
        controls_draw();
      if(keys[83])
      {
        if(sound_on === 1)
          sound.play();
        else if(sound_on === 0)
        {
            sound.pause();
            sound.load();
        }
        if(sound_on === 1 && sound_ready === 1)
        {
          sound_on = 0;
          sound_ready = 0;
          setTimeout(function(){sound_ready = 1;},200);
        }
        else if(sound_on === 0 && sound_ready === 1)
        {
          sound_on = 1;
          sound_ready = 0;
          setTimeout(function(){sound_ready = 1;},200);
        }

      }
  }
}
var bg = new bg();
