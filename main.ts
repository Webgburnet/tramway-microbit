basic.showIcon(IconNames.Yes)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
radio.setGroup(245)
let vitesse = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
music.ringTone(262)
basic.pause(1000)
music.stopAllSounds()
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        if (huskylens.readBox_ss(1, Content3.ID) == 1) {
            vitesse = 50
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
            radio.sendString("zone1")
        } else if (huskylens.readBox_ss(1, Content3.ID) == 2) {
            vitesse = 0
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            radio.sendString("zone2")
        } else {
            vitesse = 80
        }
    }
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, vitesse)
})
