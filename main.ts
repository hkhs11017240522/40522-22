radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber < 3) {
        basic.showIcon(IconNames.Sad)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
        game.addScore(-1)
        basic.clearScreen()
    } else if (receivedNumber == 3) {
        basic.showIcon(IconNames.Asleep)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
        game.addScore(0)
        basic.clearScreen()
    } else if (receivedNumber > 3) {
        basic.showIcon(IconNames.Happy)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
        game.addScore(1)
        basic.clearScreen()
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(randint(1, 6))
    basic.showNumber(randint(1, 6))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    game.gameOver()
})
radio.setGroup(1)
game.setScore(0)
basic.clearScreen()
basic.forever(function () {
	
})
