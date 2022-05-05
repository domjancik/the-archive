/* global AFRAME, THREE */

const FLIP_SIDE = true;

AFRAME.registerComponent("carousel-spawner", {
  schema: {
    rows: { default: 5 },
    resolution: { default: 24 },
    height: { default: 2 },
    radius: { default: 1 },
  },
  init: function () {
    this.load();
  },

  load: async function () {
    this.el.innerHTML = "";
    const angleStepPerItem = (Math.PI * 2) / this.data.resolution;
    const heightPerLevel = this.data.height / this.data.rows;
    let index = 0;
    for (let row = 0; row < this.data.rows; row++) {
      for (let i = 0; i < this.data.resolution; i++) {
        const angle = angleStepPerItem * i;
        this.addPlane(
          angle,
          heightPerLevel * row,
          this.data.radius,
          "red",
          index++
        );
      }
    }
  },

  addPlane: function (angle, height, radius, color, index) {
    console.log(`Adding plane with color ${color}`);

    const planeElement = document.createElement("a-plane");

    const position = {
      x: Math.sin(angle) * radius,
      y: height,
      z: Math.cos(angle) * radius,
    };
    planeElement.setAttribute("position", position);
    planeElement.setAttribute("material", `color: ${color}`);
    planeElement.setAttribute("scale", "0.2 0.3");
    const angleInDegrees = THREE.Math.radToDeg(angle) + 180 * FLIP_SIDE;
    planeElement.setAttribute("rotation", `0 ${angleInDegrees} 0`);

    entity = document.createElement("a-entity");
    entity.setAttribute("position", { x: 0, y: 0, z: 0.01 });

    this.el.appendChild(planeElement);
    planeElement.appendChild(entity);
    entity.setAttribute("text", `value: ${index}; align: center; wrapCount: 5`);
  },
});
