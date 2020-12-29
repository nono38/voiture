radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 1) {
        kitronik_servo_lite.left()
    } else if (receivedNumber == 2) {
        kitronik_servo_lite.right()
    } else if (receivedNumber == 3) {
        kitronik_servo_lite.forward()
    }
})
kitronik_servo_lite.setDistancePerSecond(3000)
radio.setGroup(1)
basic.forever(function () {
	
})
