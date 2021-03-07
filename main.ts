radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 1) {
        kitronik_servo_lite.turnLeft(90)
    } else if (receivedNumber == 2) {
        kitronik_servo_lite.turnRight(90)
    } else if (receivedNumber == 3) {
        kitronik_servo_lite.forward()
    }
})
radio.setGroup(1)
