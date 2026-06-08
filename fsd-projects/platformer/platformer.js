$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(600, 500, 200, 5, "lime");
    createPlatform(300, 600, 200, 5, "lime");
    createPlatform(900, 600, 200, 5, "lime");
    createPlatform(100, 400, 200, 5, "grey", 0, 0, 0, 100, 600, 2);
    createPlatform(1000, 400, 200, 5);
    createPlatform(600, 700, 200, 5, "lime");



    // TODO 3 - Create Collectables
    createCollectable("steve", 1111, 555, 0.5, 0);
    createCollectable("steve", 1100, 666, 0.5, 0);
    createCollectable("steve", 1222, 444, 0.5, 0);
    createCollectable("steve", 1300, 222, 0.5, 0);
    createCollectable("steve", 1000, 555, 0.5, 0);
    createCollectable("steve", 666, 555, 0.5, 0);
    createCollectable("steve", 476, 299, 0.5, 0);
    createCollectable("steve", 400, 100, 0.5, 0);
    createCollectable("steve", 527, 639, 0.5, 0);
    createCollectable("steve", 999, 444, 0.5, 0);
    createCollectable("steve", 349, 666, 0.5, 0);
    createCollectable("steve", 270, 340, 0.5, 0);
    createCollectable("steve", 800, 500, 0.5, 0);
    createCollectable("steve", 600, 350, 0.5, 0);
    createCollectable("steve", 500, 100, 0.5, 0);
    createCollectable("steve", 100, 220, 0.5, 0);
    createCollectable("steve", 300, 100, 0.5, 0);
  


    
    // TODO 4 - Create Cannons

  
 
  createCannon("left", 500, 550, 50, 50, 100, 700, 5);
  createCannon("top", 500, 550, 50, 50, 100, 700, 5);
    createCannon("right", 500, 550, 50, 50, 500, 1000, 5);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
