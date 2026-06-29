function moveScenery() {
  // TODO 2: Move background scenery based on current level speed
  
for (var i = 0; i < scenery.building.instances.length; i++){
var buildingInstance = scenery.building.instances[i]


buildingInstance.x += buildingInstance.speedX + currentLevel.speed
if (buildingInstance.x + buildingInstance.width < 0){
  buildingInstance.x = scenery.building.loopWidth;
}



}
for  ( var i = 0; i < scenery.lamp.instances.length; i++){
  var lampInstances = scenery.lamp.instances[i]
  lampInstances.x += lampInstances.speedX + currentLevel.speed
  if (lampInstances.x + lampInstances.width < 0){
    lampInstances.x = scenery.lamp.loopWidth
  }
}
  
  
  
  
 
  
  
}


function generateLevel() {
  // TODO 3: Generate the current level's game objects
  for (var i= 0; i <= currentLevel.gameObjects.length-1; i++){
 var currentObject = currentLevel.gameObjects
 create(currentObject)
 

  }



}

function create(obj) {
  // TODO 4: Create a game object based on its type and kind

  if (obj.type === "obstacle"){
  makeObstacle(obj);

  
  }
  else if (obj.type === "enemy"){
    makeEnemy(obj);
  }
  else if (obj.type === "powerup"){
    makePowerup(obj);
  }
  else if (obj.type === "goal"){
    makeGoal(obj.type);
  }
  else if (Object.type === "platform") {
    makePlatform(obj);
  }
}

function filterObjects(type) {
  // TODO 5: Return only the game objects of the specified type

  var blank = []
  for (var i = 0; i <= currentLevel.gameObjects-1; i++){
    if (currentLevel.gameObjects.type === type){
      blank.push(currentLevel.gameObjects === type)
      return blank
    }
  }

}

function moveGameObjects(objectList) {
  // TODO 6: Move all game objects of a single type based on speeds
  

}


function handleProjectileCollisions() {
  // TODO 8: Handle collisions between projectiles and enemies
}

function handleHallebotGenericCollisions() {
  // TODO 9: Handle collisions between Hallebot and game objects
}

function triggerLevelTransition() {
  // TODO 10: Transition to the next level or show win screen
}
