import Fireworks from "fireworks-canvas"

const options = {
    maxRockets: 100,            // max # of rockets to spawn
    rocketSpawnInterval: 150, // millisends to check if new rockets should spawn
    numParticles: 300,        // number of particles to spawn when rocket explodes (+0-10)
    explosionMinHeight: 0.5,  // percentage. min height at which rockets can explode
    explosionMaxHeight: 0.9,  // percentage. max height before a particle is exploded
    explosionChance: 0.08     // chance in each tick the rocket will explode
  }


export default () => {
    const app = document.getElementById("app");
    const stopButton = document.getElementById("btn-stop");
    const startButton = document.getElementById("btn-start");
    const increaseButton = document.getElementById("btn-incre")
    const fireworks = new Fireworks(app,options);

    increaseButton.onclick = function(){
        options.maxRockets++
        alert(`Rocket Number:${options.maxRockets}`);
    };

    stopButton.onclick = function(){
        fireworks.stop()
    };

    startButton.onclick = function(){
        fireworks.start()
    };

    fireworks.start();
  };