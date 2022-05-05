AFRAME.registerComponent("raycaster-listen", {
  init: function () {
    this.audioEl = document.querySelector("#audio-src");
  },
  events: {
    "raycaster-intersected": function (evt) {
      console.log("in", evt)
      this.raycaster = evt.detail.el;
    },
    "raycaster-intersected-cleared": function (evt) {
      this.raycaster = null;
    },
    "click": function (evt) {
        if (!this.raycaster) {
        return;
        } // Not intersecting.
        const time = this.getSelectedAudioTime()
        console.log(time)
        this.audioEl.currentTime = this.getSelectedAudioTime()
    }
  },
  getSelectedAudioTime: function () {
    let intersection = this.raycaster.components.raycaster.getIntersection(
      this.el
    );
    if (!intersection) {
      return;
    }
    console.log(intersection)
    console.log(intersection.uv)
    const { x } = intersection.uv;
    return (1 - x) * this.audioEl.duration;
  },
});
