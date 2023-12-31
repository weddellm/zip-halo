input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 6; index++) {
        for (let index = 0; index <= 59; index++) {
            haloDisplay.clear()
            haloDisplay.setZipLedColor(index, kitronik_halo_hd.colors(ZipLedColors.Blue))
            haloDisplay.show()
            basic.pause(10)
        }
    }
    haloDisplay.showColor(kitronik_halo_hd.colors(ZipLedColors.Green))
    basic.pause(2000)
    haloDisplay.clear()
    haloDisplay.show()
})
input.onGesture(Gesture.SixG, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    while (!(input.buttonIsPressed(Button.AB))) {
        haloDisplay.showColor(kitronik_halo_hd.colors(ZipLedColors.Green))
        if (input.acceleration(Dimension.Strength) > 1300) {
            haloDisplay.showColor(kitronik_halo_hd.colors(ZipLedColors.Blue))
            basic.pause(5000)
        } else if (input.acceleration(Dimension.Strength) > 1200) {
            haloDisplay.showColor(kitronik_halo_hd.colors(ZipLedColors.Orange))
            basic.pause(500)
            haloDisplay.clear()
            haloDisplay.show()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    kitronik_halo_hd.setClapSensitivity(100)
    while (!(input.buttonIsPressed(Button.A))) {
        if (kitronik_halo_hd.readSoundLevel() > 160) {
            haloDisplay.showColor(kitronik_halo_hd.colors(ZipLedColors.Red))
            basic.pause(100)
        } else {
            haloDisplay.showColor(kitronik_halo_hd.colors(ZipLedColors.Green))
        }
    }
})
input.onGesture(Gesture.ThreeG, function () {
	
})
let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.setBrightness(45)
haloDisplay.showColor(kitronik_halo_hd.colors(ZipLedColors.Red))
