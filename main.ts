input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    tempo += -50
})
input.onButtonPressed(Button.A, function () {
    cor = false
    basic.showIcon(IconNames.Skull)
    fim.scrollImage(1, 200)
})
input.onButtonPressed(Button.B, function () {
    tempo += 50
})
let fim: Image = null
let cor = false
let tempo = 200
cor = true
let lista = images.createImage(`
    . . . . .
    . . # . .
    . # . # .
    # . . . #
    # # # # #
    `)
let myImage = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
fim = images.createImage(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
myImage.showImage(0)
basic.forever(function () {
    if (tempo == 50) {
        cor = false
        music.playTone(262, music.beat(BeatFraction.Breve))
        basic.showIcon(IconNames.Skull)
        fim.scrollImage(1, 200)
        basic.clearScreen()
        tempo = 200
    }
    if (tempo == 500) {
        cor = false
        music.playTone(262, music.beat(BeatFraction.Breve))
        basic.showIcon(IconNames.Skull)
        fim.scrollImage(1, 200)
        basic.clearScreen()
        tempo = 200
    }
})
basic.forever(function () {
    while (cor == true) {
        music.playTone(262, music.beat(BeatFraction.Half))
        lista.scrollImage(1, tempo)
        myImage.scrollImage(1, tempo)
    }
})
