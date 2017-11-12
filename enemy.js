function enemy (speed,type)
{
  this.spawned = 0;
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
  }
  this.dmg = function()
  {
    if(this.death === 0)
    {
      if(sound_on === 1)
        enemyhit.play();
      --this.hp;
    }
    if(this.hp ===0)
      this.death=1;
  }
  this.dir = -1;
  this.width = 64;
  this.height = 64;
  this.death =0;
  this.speed = speed;
  this.hit = 0;
  this.random = 1;
  this.drop =  Math.floor((Math.random() * 20) + 1);
  this.picked = 0;
  this.type = type;
  this.animation = 0;
  this.max;
  this.hp = 1;
  this.andir = "l";
  this.difficulty=1;
  this.draw = function()
  {
    enemyimage = new Image();
    if(this.type == "eye")
    {
      this.hp = 1;
      this.max = 4;
      if(this.death===0)
      {
        enemyimage.src = 'Art/eye/eye' + this.animation + '.png';
      }
    }
    if(this.type == "knight")
    {
      this.max = 2;
      if(this.death===0)
      {
         enemyimage.src = 'Art/knight/knight' + this.animation + this.andir +'.png';
      }
    }
    if(this.type == "guard")
    {
      this.max = 2;
      if(this.death===0)
      {
         enemyimage.src = 'Art/guard/guard' + this.animation + this.andir +'.png';
      }
    }
    if(this.type == "slime")
    {
      this.hp = 1;
      this.max = 3;
      if(this.death===0)
      {
         enemyimage.src = 'Art/slime/slime' + this.animation + this.andir +'.png';
      }
    }
    if(this.type == "king")
    {
      this.max = 3;
      if(this.death===0)
      {
         enemyimage.src = 'Art/king/king' + this.animation + this.andir +'.png';
      }
    }
    if(this.type == "imp")
    {
      this.max = 3;
      if(this.death===0)
      {
         enemyimage.src = 'Art/imp/imp' + this.animation + this.andir +'.png';
      }
    }
    if(this.death === 1)
    {
      if(this.drop >= 1 && this.drop <= 10)
      {
        this.width= 30;
        this.height = 25;
        enemyimage.src = 'Art/enemy_gold.png';
      }
      if(this.drop === 16)
      {
        this.width= 27;
        this.height = 28;
        enemyimage.src = 'Art/enemy_health.png';
      }
      if(this.drop === 18)
      {
        this.width= 22;
        this.height = 26;
        enemyimage.src = 'Art/enemy_mana.png';
      }
    }
    if(this.death === 1)
    {
      if((this.drop >= 1 && this.drop <= 10) && (((hero.x+hero.width >= this.x) &&(hero.x<= this.x+this.width)) && ((hero.y+hero.height >= this.y) && (hero.y<= this.y+this.height))))
      {
        if(this.picked === 0)
        {
          if(sound_on === 1)
            gold.play();
          hero.gold+=Math.floor((Math.random() * 10) + 1);
        }
        this.picked = 1;

      }
      if((this.drop === 16 || this.drop === 18) && (((hero.x+hero.width >= this.x) &&(hero.x<= this.x+this.width)) && ((hero.y+hero.height >= this.y) && (hero.y<= this.y+this.height))))
      {
        if(this.picked === 0)
        {
          if (this.drop === 16)
          hero.hp +=1;
          if (this.drop === 18)
          bullet.amount += 3;
          if(sound_on === 1)
           potion.play();
        }
        this.picked = 1;
      }
    }
    if(this.picked === 0)
      ctx.drawImage(enemyimage, this.x, this.y, this.width, this.height);
  }

  this.move = function()
  {
    this.oldx = this.x;
    this.oldy = this.y;

    if(this.random === 1)
    {
      this.x += this.speed* this.dir * this.difficulty;
    }
    else
    if(this.random === 2)
    {
      this.y += this.speed* this.dir * this.difficulty;
    }

    if(this.random === 2)
    {

      if(bg.tiles[Math.floor((this.y-1)/64)][Math.floor((this.x+32)/64)] >= 2)
      {
        //up
        this.random = Math.floor((Math.random() * 2) + 1);
        this.dir *= -1;
        if(this.random === 2)
          this.andir = "d";
        else
          this.andir ="r";

        this.x = this.oldx;
        this.y = this.oldy;

      }

      if(bg.tiles[Math.floor((this.y+65)/64)][Math.floor((this.x+32)/64)] >= 2)
      {
        //down
        this.random = Math.floor((Math.random() * 2) + 1);
        this.dir *= -1;
        if(this.random === 2)
          this.andir = "u";
        else
          this.andir ="l";
        this.x = this.oldx;
        this.y = this.oldy;

      }

    }
    if(this.random === 1)
    {
      if(bg.tiles[Math.floor((this.y+32)/64)][Math.floor((this.x-1)/64)] >= 2)
      {
        //left
        this.random = Math.floor((Math.random() * 2) + 1);
        this.dir *= -1;
        if(this.random === 1)
          this.andir = "r";
        else
          this.andir ="d";
        this.x = this.oldx;
        this.y = this.oldy;

      }

      if(bg.tiles[Math.floor((this.y+32)/64)][Math.floor((this.x+65)/64)] >= 2)
      {
        //right
        this.random = Math.floor((Math.random() * 2) + 1);
        this.dir *= -1;
        if(this.random === 1)
          this.andir = "l";
        else
          this.andir ="u";
        this.x = this.oldx;
        this.y = this.oldy;

      }
    }
    if (((this.x-hero.width<hero.x) && (hero.x<this.x+this.width)) && ((this.y-hero.height<hero.y) && (hero.y<this.y+this.height)) && this.death === 0)
    {
      hero.dmg();
    }

    if((bullet.y <= this.y+this.height-5 && bullet.y+bullet.height >= this.y+5) && (bullet.x >= this.x && bullet.x+bullet.width <= this.x+this.width))
    {
      this.dmg();
      //this.death= 1;
      this.hit = 1;
      --bullet.amount
      bullet.flying = 0;
      bullet.shot = 0;
      bullet.x = -30;
      bullet.y = -30;
      if(this.death === 1)
      {
        --number;
        if(sound_on === 1)
          dead.play();
      }
      if(number === 0)
      {
        if(sound_on === 1)
          unlock.play();
        bg.tiles[13][18] = -1;
      }
    }
  }
}
