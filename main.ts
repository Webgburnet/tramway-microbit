basic.showIcon(IconNames.Yes)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
radio.setGroup(245)
let vitesse = 0
let strip: number = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
music.ringTone(262)
basic.pause(1000)
music.stopAllSounds()
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        if (huskylens.readBox_ss(1, Content3.ID) == 1) {
            strip = 50
            radio.sendString("zone1")
        } else if (huskylens.readBox_ss(1, Content3.ID) == 2) {
            vitesse = 0
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            radio.sendString("zone2")
        } else {
            vitesse = 80
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        }
    }
})
