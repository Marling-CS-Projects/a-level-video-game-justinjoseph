import kaboom from "kaboom"

// initialize context
kaboom({
  background: [134, 135, 247],
  width: 1000,
  height:300,
  scale: 3,
});

// load assets
loadPedit("ground", "sprites/ground.pedit");
loadPedit("player", "sprites/player.pedit");
loadPedit("wall", "sprites/wall.pedit");


// level 

const level = addLevel([
	// Design the level layout with symbols
"    @                                        0",
  "0                                          0",
  "0        ============                                  0",
  "0  ===              ==============                    0",
  "0     =========                       =========              0",
  "0                    ========  =========                    0",
	"============================================",
  
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
 const SPEED = 12;

const player = add([
	sprite("player"),
	// center() returns the center point vec2(width() / 2, height() / 2)
	pos(center()),
])

 onKeyDown("d", () => {
   player.move(SPEED,0)
  })

 onKeyDown("a", () => {
   player.move(-SPEED,0)
  })

 onKeyDown("up", () => {
   player.jump()
  })

//cam scrolling 



