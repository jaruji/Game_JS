function bullet ()
{
  this.yspeed= 0;
  this.speed= 0;
  this.width=25;
  this.height=22;
  this.amount = 6;
  this.flying = 0;
  this.sound = 0;
  this.shot = 0;
  this.ready = 1;
  this.dir = "down";
  this.max = 20;
  this.draw= function ()
  {
    if(hero.dir === 3)
    {
      bul.src = 'Art/fireball_r.png';
      ctx.drawImage(bul,this.x,this.y,this.width,this.height);
    }
    else if(hero.dir === 2)
    {
      bul.src = 'Art/fireball_l.png';
      ctx.drawImage(bul,this.x,this.y,this.width,this.height);
    }
    else if(hero.dir === 1)
    {
      bul.src = 'Art/fireball_d.png';
      ctx.drawImage(bul,this.x,this.y,this.width,this.height);
    }
    else if(hero.dir === 0)
    {
      bul.src = 'Art/fireball_u.png';
      ctx.drawImage(bul,this.x,this.y,this.width,this.height);
    }
  }
  this.move = function()
  {
    if(this.flying === 0)
    {
      if(this.dir === "right")
      {
        currentx = hero.x +hero.width/2;
        currenty = hero.y +hero.height/2;
      }
      else if(this.dir === "left")
      {
        currentx = hero.x +hero.width/2;
        currenty = hero.y +hero.height/2;
      }
      else if(this.dir === "up")
      {
        currentx = hero.x +hero.width/2-10;
        currenty = hero.y +hero.height/2;
      }
      else if(this.dir === "down")
      {
        currentx = hero.x +hero.width/2-10;
        currenty = hero.y +hero.height/2;
      }
        this.speed=0;
        this.sound=1;
        this.yspeed=0;
    }
    this.sound =0;
    this.flying = 1;
    this.x = currentx+ this.speed;
    this.y = currenty+ this.yspeed;
    if(this.dir === "right")
    {
      for (i = 0; i <= this.max; i++)
      this.speed+=1;
    }
    else if(this.dir === "left")
    {
      for (i = 0; i <= this.max; i++)
      this.speed -=1;
    }
    else if(this.dir === "up")
    {
      for (i = 0; i <= this.max; i++)
      this.yspeed -= 1;
    }
    else if(this.dir === "down")
    {
      for (i = 0; i <= this.max; i++)
      this.yspeed += 1;
    }
    if(this.x >= canvas.width-tile.width || this.x <= tile.width || this.y <= tile.height || this.y >= canvas.height-tile.height ||(bg.tiles[Math.floor((this.y)/64)][Math.floor((this.x)/64)] > 1 && bg.tiles[Math.floor((this.y)/64)][Math.floor((this.x+this.width)/64)] > 1) || (bg.tiles[Math.floor((this.y+this.height)/64)][Math.floor((this.x)/64)] > 1 && bg.tiles[Math.floor((this.y+this.height)/64)][Math.floor((this.x+this.width)/64)] > 1) || (bg.tiles[Math.floor((this.y)/64)][Math.floor((this.x)/64)] > 1 && bg.tiles[Math.floor((this.y+this.height)/64)][Math.floor((this.x)/64)] > 1) || (bg.tiles[Math.floor((this.y)/64)][Math.floor((this.x+this.width)/64)] > 1 && bg.tiles[Math.floor((this.y+this.height)/64)][Math.floor((this.x+this.width)/64)] > 1))
    {
      this.x = -20;
      this.y = -20;
      bul.src = 'Art/fireball_h.png';
      this.shot = 0;
      --this.amount;
      this.flying = 0;
    }
  }
}
var bullet=new bullet();
