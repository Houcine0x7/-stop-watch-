input.onButtonPressed(Button.A, function () {
    is_running = true
})
input.onButtonPressed(Button.AB, function () {
    timer = 0
    is_running = false
})
input.onButtonPressed(Button.B, function () {
    is_running = false
})
let is_running = false
let timer = 0
timer = 0
is_running = false
basic.forever(function () {
    makerbit.showStringOnLcd1602("" + (timer), makerbit.position1602(LcdPosition1602.Pos1), 16)
    basic.pause(1000)
    if (is_running == true) {
        timer += 1
    }
})
