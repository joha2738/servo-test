basic.forever(function () {
    for (let index = 0; index <= 180; index++) {
        pins.servoWritePin(AnalogPin.P0, index)
        pins.servoWritePin(AnalogPin.P1, index)
        basic.pause(1)
    }
    for (let index = 0; index <= 180; index++) {
        pins.servoWritePin(AnalogPin.P0, 180 - index)
        pins.servoWritePin(AnalogPin.P1, 180 - index)
        basic.pause(1)
    }
})
