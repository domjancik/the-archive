/* global AFRAME, THREE */

AFRAME.registerComponent("circling-detector", {
  schema: {
    baseAngle: { default: 0 },
  },

  init: function () {
    this.player = document.querySelector("[data-playermock]");
    this.debug = document.querySelector("[data-debug]");
    this.lastAngle = 0;
    this.offset = 0;
  },

  tick: function () {
    const { x, z } = this.player.object3D.position;
    const playerAngle = Math.atan2(z, x);
    // console.log(THREE.Math.radToDeg(playerAngle));

    const baseAngle = this.data.baseAngle;
    const angleOffset = baseAngle - playerAngle;

    if (angleOffset > 0 && this.lastAngle <= 0) {
      console.log("Crossed CCW");
      this.offset -= 1;
    } else if (angleOffset < 0 && this.lastAngle >= 0) {
      console.log("Crossed CW");
      this.offset += 1;
    }
    this.lastAngle = angleOffset;

    this.debug.setAttribute(
      "text",
      `value: Angle ${THREE.Math.radToDeg(angleOffset).toFixed(
        2
      )} | Rotations (Offset) ${this.offset}`
    );

    // console.log(`Offset: ${angleOffset}`);
  },
});
