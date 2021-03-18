// runs inside code when shaken
input.onGesture(Gesture.Shake, function () {
    // Displays "ASK" on the screen to tell user to ask a question
    basic.showString("ASK")
    // has a two second delay so that the microbit doesn't give an answer before the question is finished being asked
    basic.pause(2000)
    // Number variable is set to pick a random number from 0 to 2
    Number2 = randint(0, 2)
    // if the number picked is 2 a yes will display followed by music
    // if the number picked is 1 a no will display followed by music
    if (Number2 == 2) {
        basic.showString("yes")
        music.playMelody("C G C5 - - - - - ", 500)
    } else if (Number2 == 1) {
        basic.showString("no")
        music.playMelody("C5 F C - - - - - ", 500)
    } else {
        // if the number picked is 0 a maybe will display followed by music
        basic.showString("maybe")
        music.playMelody("F G F G - - - - ", 500)
    }
    // displays an 8 to symbolize that this is a magic 8 ball
    basic.showString("8")
})
let Number2 = 0
// displays an 8 to symbolize that this is a magic 8 ball
basic.showString("8")
