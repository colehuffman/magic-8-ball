let Number2 = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("ASK")
    basic.pause(5000)
    Number2 = randint(0, 2)
    if (Number2 == 2) {
        basic.showString("Y")
    } else if (Number2 == 1) {
        basic.showString("N")
    } else {
        basic.showString("M")
    }
    music.playMelody("C5 B E F F D G B ", 120)
})
