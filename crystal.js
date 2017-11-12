function crystal()
{
  this.spawned = 0;
  this.picked = 0;
  this.width = 30;
  this.height = 30;
  this.max = 4;
  this.animation = 0;
  this.spawn = function()
  {
    while(1)
    {
      this.x = 64*Math.floor((Math.random() *18) + 1);
      this.y = 64*Math.floor((Math.random() *11) + 2);
      if(bg.tiles[this.y/64][this.x/64] < 2)
      {
        this.spawned = 1;
        break;
      }
    }

    this.x +=18;
    this.y +=20;
  }

  this.draw = function()
  {
    if(((hero.x+hero.width >= this.x) && (hero.x<= this.x+this.width)) && ((hero.y+hero.height >= this.y) && (hero.y<= this.y+this.height)) && this.picked === 0)
    {
      if(sound_on === 1)
        manas.play();
      bullet.amount ++;
      this.picked = 1;
    }
    mana.src = 'Art/ball/ball'+this.animation+'.png';
    if(this.picked === 0)
    {
      ctx.drawImage(mana,this.x,this.y,this.width,this.height);
    }
  }
}
