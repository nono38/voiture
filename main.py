def on_received_number(receivedNumber):
    basic.show_number(receivedNumber)
    if receivedNumber == 1:
        kitronik_servo_lite.turn_left(90)
    elif receivedNumber == 2:
        kitronik_servo_lite.turn_right(90)
    elif receivedNumber == 3:
        kitronik_servo_lite.forward()
radio.on_received_number(on_received_number)

radio.set_group(1)