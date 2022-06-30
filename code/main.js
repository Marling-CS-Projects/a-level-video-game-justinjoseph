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








