// ## Challenge #15
// "One-step calibration needed," LARRY quacks. The last page of the calibration manual says that for proper calibration, you need to write a function called calibrate() which the nav system can call anytime it wants, which will calibrate your X, Y, and Z axes. The good news is, you’ve already done the hard part. Write one function called calibrate() which will call your other three functions in it, one after the other.

// You don't need call the calibrate() function yourself, but don't forget to remove the other calibrateX, calibrateY and calibrateZ calls you already wrote

// Day 15
function calibrate() {
  calibrateX();
  calibrateY();
  calibrateZ();
}
