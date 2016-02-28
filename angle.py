'''
A.L. MD (medical doctor)
Pronounced: "almond"

Code for calculating the angle from ADXL345 accelerometer
'''
from adxl345 import ADXL345
import sys, select, os
from math import atan, sqrt, pi
import time

adxl345 = ADXL345()
while True:
    axes = adxl345.getAxes(True)
    #Assuming the library works, we should get accurate acc values in g's
    x = axes['x']
    y = axes['y']
    z = axes['z']

    #Convert from acceleration to angles
    pitch = atan(x/sqrt(pow(y,2) + pow(z,2)))
    pitch = pitch * (180.0/pi)
    pitch += 2.2 #accounting for error
    print("pitch = " + str(pitch))
    if sys.stdin in select.select([sys.stdin], [], [], 0)[0]:
        break
    time.sleep(1)
