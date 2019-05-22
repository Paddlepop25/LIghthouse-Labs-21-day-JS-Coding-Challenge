// ## Challenge #14
// "X Calibrated!" LARRY quacks happily. "Y and Z need calibration now! QUACK!"

// Let's write calibrateY() and calibrateZ(). The manual says you'll need to loop from 1 to 60, and again you have to call checkSignal() each time.

// Day 14
function calibrateY() {
  for (let i = 1; i < 61; i++) {
    let signal = checkSignal(i);
    if (signal !== undefined) {
      navigation.y = signal;
    }
  }
}

function calibrateZ() {
  for (let i = 1; i < 61; i++) {
    let signal = checkSignal(i);
    if (signal !== undefined) {
      navigation.z = signal;
    }
  }
}
