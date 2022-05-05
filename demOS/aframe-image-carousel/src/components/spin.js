const randomTrigger = (prob) => Math.random() < prob ? 1 : 0
const makeMetroTrigger = () => {
    let lastConditionValue = false
    return (bpm) => {
        const d = new Date()
        const ms = d.getMilliseconds()

        const millisecondsPerBeat = 60000 / bpm // Likely needs fix
        const cyclePosition = (ms % millisecondsPerBeat) / millisecondsPerBeat
        const inFirstHalfOfCycle = cyclePosition < 0.5
        
        const result = !lastConditionValue && inFirstHalfOfCycle ? 1 : 0
        lastConditionValue = inFirstHalfOfCycle

        return result
    }
}

const lerp = (a, b) => (alpha) => {
    return (1 - alpha) * a + alpha * b
}

const makeSmooth = () => {
    let value = 0
    return (target) => {
        value = lerp(value, target)(0.3)
        return value
    }
}

const makeSampleAndHold = () => {
    let value = 0
    return (target, sample) => {
        value = sample ? target : value
        return value
    }
}

AFRAME.registerComponent('spin', {
    init: function () {
        this.originalRotation = this.el.object3D.rotation.y;

        // Controls
        this.param1 = makeSmooth()
        this.param2 = makeSmooth()
        this.sampleandhold = makeSampleAndHold()
        this.metro = makeMetroTrigger()
    },

    remove: function () {
        this.el.object3D.rotation.y = this.originalRotation;
    },

    tick: function () {
        this.el.object3D.rotation.y += 0.05;

        // const target = this.sampleandhold(Math.random(), randomTrigger(0.2))
        //const target = this.sampleandhold(Math.random(), this.metro(120));)
        //const val = this.param1(this.param2(target))
        this.el.object3D.position.x = 0
    }

});
