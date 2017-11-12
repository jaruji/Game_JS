function start()
{
  scene.push(menu);
}

function lvl1()
{
  scene =scene_empty;
  number = 6;
  scene.push(bg);
  scene.push(new enemy(2,"slime"));
  scene.push(new enemy(2,"slime"));
  scene.push(new enemy(2,"king"));
  scene.push(new enemy(4,"imp"));
  scene.push(new enemy(3,"imp"));
  scene.push(new enemy(3,"eye"));
  scene.push(hero);
  scene.push(bullet);
}

function lvl2()
{
  tile1.src = 'Art/dirt_tile.png';
  tile2.src = 'Art/dirt_stone.png';
  tile3.src = 'Art/dirt_rock.png';
  tile4.src = 'Art/dirt_tree.png';
  tile5.src = 'Art/statue2_tile.png';
  scene =scene_empty;
  number = 7;
  //scene.push(bg);
  scene.push(new enemy(3,"eye"));
  scene.push(new enemy(3,"eye"));
  scene.push(new enemy(3,"knight"));
  scene.push(new enemy(2,"slime"));
  scene.push(new enemy(2,"knight"));
  scene.push(new enemy(3,"knight"));
  scene.push(new enemy(4,"guard"));
  //scene.push(hero);
  //scene.push(bullet);
}

function lvl3()
{
  tile1.src = 'Art/city_tile.png';
  tile2.src = 'Art/city_tile.png';
  tile3.src = 'Art/city_tree.png';
  tile4.src = 'Art/city_tree1.png';
  tile5.src = 'Art/statue3_tile.png';
  scene =scene_empty;
  number = 8;
  //scene.push(bg);
  scene.push(new enemy(3,"eye"));
  scene.push(new enemy(3,"eye"));
  scene.push(new enemy(3,"eye"));
  scene.push(new enemy(4,"eye"));
  scene.push(new enemy(4,"eye"));
  scene.push(new enemy(4,"eye"));
  scene.push(new enemy(5,"eye"));
  scene.push(new enemy(5,"eye"));
  //scene.push(hero);
  //scene.push(bullet);
}
function lvl4()
{
  tile1.src = 'Art/castle_tile.png';
  tile2.src = 'Art/castle_tile.png';
  tile3.src = 'Art/castle_hole.png';
  tile4.src = 'Art/castle_pot.png';
  tile5.src = 'Art/statue4_tile.png';
  scene =scene_empty;
  number = 9;
  //scene.push(bg);
  scene.push(new enemy(3,"imp"));
  scene.push(new enemy(3,"imp"));
  scene.push(new enemy(3,"imp"));
  scene.push(new enemy(4,"slime"));
  scene.push(new enemy(4,"slime"));
  scene.push(new enemy(4,"king"));
  scene.push(new enemy(5,"slime"));
  scene.push(new enemy(5,"eye"));
  scene.push(new enemy(5,"eye"));
  //scene.push(hero);
  //scene.push(bullet);
}
function lvl5()
{
  tile1.src = 'Art/magma_tile.png';
  tile2.src = 'Art/magma_tile1.png';
  tile3.src = 'Art/magma_rock.png';
  tile4.src = 'Art/magma_rock1.png';
  tile5.src = 'Art/statue5_tile.png';
  scene =scene_empty;
  number = 10;
  //scene.push(bg);
  scene.push(new enemy(3,"imp"));
  scene.push(new enemy(3,"imp"));
  scene.push(new enemy(3,"imp"));
  scene.push(new enemy(4,"slime"));
  scene.push(new enemy(4,"slime"));
  scene.push(new enemy(4,"king"));
  scene.push(new enemy(5,"king"));
  scene.push(new enemy(5,"slime"));
  scene.push(new enemy(5,"eye"));
  scene.push(new enemy(5,"eye"));
  //scene.push(hero);
  //scene.push(bullet);
}
