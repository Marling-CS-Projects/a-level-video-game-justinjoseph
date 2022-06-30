import kaboom from "kaboom"

// initialize context
kaboom({
  background: [134, 135, 247],
  width: 1000,
  height: 240,
  scale: 3,
});

// load assets
loadPedit("ground", "sprites/ground.pedit");
loadPedit("player", "sprites/player.pedit");


// level 

const level = addLevel([
	// Design the level layout with symbols
	 " @                            ",
  "                            ",
	"=============================",
  
], {
	// platform soxe
	width: 32,
	height: 5,
	// The position of the top left block
	pos: vec2(100, 200),
	
  // Define what each symbol means (in components)
	"=": () => [
		sprite("ground"),
		area(),
		solid(),
		origin("bot"),
	],
  	"0": () => [
		sprite("wall"),
		area(),
		solid(),
		origin("bot"),
	],
	"@": () => [
		sprite("player"),
		area(),
		body(),
		origin("bot"),
		"player",
	],
})

//movement 
const player = level.spawn("@", 10, 100)
    const SPEED = 120;

    onKeyDown("right", () => {
      player.flipX(false);
      player.move(SPEED, 0);
    });

  keyDown("left", () => {
    if (player.isFrozen) return;
    player.flipX(true);
    if (toScreen(player.pos).x > 20) {
      player.move(-SPEED, 0);
    }
  });

  keyPress("space", () => {
    if (player.isAlive && player.grounded()) {
      player.jump();
      canSquash = true;
    }
  });


  player.action(() => {
    // center camera to player
    var currCam = camPos();
    if (currCam.x < player.pos.x) {
      camPos(player.pos.x, currCam.y);
    }

    if (player.isAlive && player.grounded()) {
      canSquash = false;
    }
   
  });




