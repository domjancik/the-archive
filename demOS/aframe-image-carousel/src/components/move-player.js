AFRAME.registerComponent("move-player", {
  init: function () {
    this.audioEl = document.querySelector("#audio-src");
    this.player = document.querySelector("[data-playermock]");
    this.target = undefined;
  },
  events: {
    "raycaster-intersected": function (evt) {
      console.log("in", evt);
      this.raycaster = evt.detail.el;
    },
    "raycaster-intersected-cleared": function (evt) {
      this.raycaster = null;
    },
    click: function (evt) {
      if (!this.raycaster) {
        return;
      } // Not intersecting.
      let intersection = this.raycaster.components.raycaster.getIntersection(
        this.el
      );
      if (!intersection) {
        return;
      }
      this.target = intersection.point;
      // TODO smooth position change
    },
  },
  tick: function (_time, delta) {
    if (!this.target) return;

    const currentPosition = this.player.object3D.position;
    const newPosition = currentPosition.lerp(this.target, 0.01 * delta);
    const { x, y, z } = newPosition;
    this.player.object3D.position.set(x, y, z);
  },
});
