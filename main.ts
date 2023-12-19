input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("F F E E G G C5 C5 ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    basic.showString("Hello!")
})
