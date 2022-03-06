const lerp = (a, b) => (alpha) => {
    return (1 - alpha) * a + alpha * b
}

const polarToCartesian = (radius, angle) => {
    // TODO
}

AFRAME.registerComponent('playhead', {
    init: function () {
        this.originalRotation = this.el.object3D.rotation.y;

        this.audio = document.querySelector("#audio-src")
    },

    remove: function () {
        this.el.object3D.rotation.y = this.originalRotation;
    },

    getAudioTime: function () {
        return this.audio.currentTime
    },

    getDuration: function () {
        return this.audio.duration
    },

    tick: function () {
        const dur = this.getDuration()
        this.el.object3D.rotation.y = -this.getAudioTime() / dur * Math.PI * 2 + Math.PI
    }

});
