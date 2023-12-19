def on_forever():
    basic.show_string("INSHA")
    music._play_default_background(music.built_in_playable_melody(Melodies.NYAN),
        music.PlaybackMode.UNTIL_DONE)
basic.forever(on_forever)
