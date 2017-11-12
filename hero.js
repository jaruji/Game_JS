function hero (x,y)
{
  this.x = x;
  this.y = y;
  this.dir = 1;
  this.width = 32;
  this.height = 48;
  this.hp = 3;
  hero.mana = 3;
  this.death = 0;
  this.speed = 4;
  this.gold = 0;
  this.moving = 0;
  this.anim = 0;
  this.max = 3;
  this.dmg = function()
  {
     if(this.death === 0)
     {
       if(sound_on === 1)
        damage.play();
        --this.hp;
        this.x = 80;
        this.y = 64;
        if(this.hp ===0)
          this.death=1;
    }
  }
  this.draw = function()
  {
    if (this.death != 1)
    {
      if(this.dir === 0)
      {
        if(this.moving === 1)
          heroimage.src = 'Art/hero/hero'+this.anim+this.dir+'.png';
        else
          heroimage.src = 'Art/hero/hero00.png';
        ctx.drawImage(heroimage, this.x, this.y, this.width, this.height);
      }
      if(this.dir === 1)
      {
        if(this.moving === 1)
          heroimage.src = 'Art/hero/hero'+this.anim+this.dir+'.png';
        else
          heroimage.src = 'Art/hero/hero01.png';
        ctx.drawImage(heroimage, this.x, this.y, this.width, this.height);
      }
      if(this.dir === 2)
      {
        if(this.moving === 1)
          heroimage.src = 'Art/hero/hero'+this.anim+this.dir+'.png';
        else
          heroimage.src = 'Art/hero/hero02.png';
        ctx.drawImage(heroimage, this.x, this.y, this.width, this.height);
      }
      if(this.dir === 3)
      {
        if(this.moving === 1)
          heroimage.src = 'Art/hero/hero'+this.anim+this.dir+'.png';
        else
          heroimage.src = 'Art/hero/hero03.png';
        ctx.drawImage(heroimage, this.x, this.y, this.width, this.height);
      }
    }
    this.game_over = function()
    {
        ctx.font="100px Calibri";
        ctx.fillStyle="white";
        ctx.strokeStyle="black";
        ctx.fillText("Game Over",canvas.width/2-225,canvas.height/2);
        ctx.strokeText("Game Over",canvas.width/2-225,canvas.height/2);
        ctx.font="50px Calibri";
        ctx.fillText("Press r to restart",canvas.width/2-150,canvas.height/2+50);
        ctx.strokeText("Press r to restart",canvas.width/2-150,canvas.height/2+50);
    }
    this.win = function ()
    {
        ctx.font="100px Calibri";
        ctx.fillStyle="white";
        ctx.strokeStyle="black";
        ctx.fillText("You Win!",canvas.width/2-225,canvas.height/2);
        ctx.strokeText("You Win!",canvas.width/2-225,canvas.height/2);
    }
    if(this.death === 1)
    {
      this.game_over();
    }
  }

  this.move = function()
  {
    if(keys[38] || keys[40] || keys[37] || keys[39])
    {
      if(keys[38])
      {
        //up
        this.moving = 1;
        this.dir=0;
        if(bullet.flying === 0)
          bullet.dir = "up";
        if (this.death === 0 && bg.tiles[Math.floor((this.y)/64)][Math.floor(this.x/64)] < 2 && bg.tiles[Math.floor((this.y-5)/64)][Math.floor((this.x+24)/64)] < 2) //up
        {
          this.y -= this.speed;
          if(sound_on === 1)
            step.play();
        }
      }

      if(keys[40])
      {
        //down
        this.moving = 1;
        this.dir=1;
        if(bullet.flying === 0)
          bullet.dir = "down";
          if(this.death === 0 && bg.tiles[Math.floor((this.y+67)/64)][Math.floor(this.x/64)] < 2 && bg.tiles[Math.floor((this.y+67)/64)][Math.floor((this.x+24)/64)] < 2) //down
          {
            this.y += this.speed;
            if(sound_on === 1)
              step.play();
          }
      }

      if(keys[37])
      {
        //left
        this.moving = 1;
        this.dir=2;
        if(bullet.flying === 0)
          bullet.dir = "left";
          if(this.death === 0 && bg.tiles[Math.floor((this.y+45)/64)] [Math.floor((this.x-20)/64)] < 2 && bg.tiles[Math.floor((this.y+45)/64)][Math.floor((this.x-20)/64)] < 2) //left
          {
            this.x -= this.speed;
            if(sound_on === 1)
              step.play();
          }
      }

      if(keys[39])
      {
        //right
        this.moving = 1;
        this.dir=3;
        if(bullet.flying === 0)
          bullet.dir = "right";
          if(this.death === 0 && bg.tiles[Math.floor((this.y+45)/64)][Math.floor((this.x+50)/64)] < 2 && bg.tiles[Math.floor((this.y+45)/64)][Math.floor((this.x+50)/64)] < 2) //right
          {
            this.x += this.speed;
            if(sound_on === 1)
              step.play();
          }
      }
      if(keys[70])
      {
        ctx.rect(canvas.width/2-225,canvas.height/2-350,500,700);
        ctx.stroke();
        ctx.fill();
      }
  }
    else
      this.moving = 0;
    if(bg.tiles[Math.floor(this.y/64)][Math.floor(this.x/64)] === -1)
    {

      if(lvl === "Level 1")
      {
        bg.tiles[13][18] = 5;
        this.x = 80;
        this.y = 64;
        setTimeout(function(){lvl = "Level 2";},100);
        lvl2();
      }
      if(lvl === "Level 2")
      {
        bg.tiles[13][18] = 5;
        this.x = 80;
        this.y = 64;
        setTimeout(function(){lvl = "Level 3";},100);
        lvl3();
      }
      if(lvl === "Level 3")
      {
        bg.tiles[13][18] = 5;
        this.x = 80;
        this.y = 64;
        setTimeout(function(){lvl = "Level 4";},100);
        lvl4();
      }
      if(lvl === "Level 4")
      {
        bg.tiles[13][18] = 5;
        this.x = 80;
        this.y = 64;
        setTimeout(function(){lvl = "Level 5";},100);
        lvl5();
      }
      if(lvl === "Level 5")
      {
        setTimeout(function(){lvl = "Win";},100);
        this.win();
      }
    }
  }

}
var hero = new hero(80,64);
