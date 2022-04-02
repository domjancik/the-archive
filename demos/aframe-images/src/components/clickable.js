AFRAME.registerComponent('clickable', {
    init: function () {
        this.audio = document.querySelector("#audio-src")
    },
    events: {
        click: function(evt) {
            if (this.audio.paused) {
                this.audio.play()
                // this.el.setAttribute('material', 'color', 'green')
            } else {
                this.audio.pause()
                // this.el.setAttribute('material', 'color', 'red')
            }
        }
    },
    tick: function() {
        if (this.audio.paused) {
            this.el.setAttribute('material', 'color', 'red')
        } else {
            this.el.setAttribute('material', 'color', 'green')
        }
    }

});
