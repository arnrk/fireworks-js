import Fireworks from "fireworks-canvas"

export default () => {
    const app = document.getElementById("app");
    const fireworks = new Fireworks(app);
    fireworks.start();
  }