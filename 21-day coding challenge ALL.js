// Day 1
function powerOn() {
  ship.powerOn = true;
}

// Day 2
let countModules = function() {
  return availableModules.length;
};

// Day 3
function countEssential() {
  let ans = 0;
  for (let x = 0; x < availableModules.length; x++) {
    if (availableModules[x].essential === true) {
      ans++;
    }
  }
  return ans;
}

// Day 4
function availableModulesLoop() {
  for (let x = 0; x < availableModules.length; x++) {
    if (availableModules[x].name === "life-support") {
      return x;
    }
  }
}

function loadModule(index) {
  availableModules[index].enabled = true;
  availableModules[index].essential = true;
  ship.modules.push(availableModules[index]);
}

loadModule(availableModulesLoop());

// Day 5
function findModuleIndex(moduleName) {
  for (let i = 0; i < availableModules.length; i++) {
    if (availableModules[i].name === moduleName) {
      return i;
    }
  }
}
loadModule(findModuleIndex("propulsion"));

// Day 6
loadModule(findModuleIndex("navigation"));

// Day 7
function resetLARRY() {
  for (let i = 0; i < 10; i++) {
    LARRY.quack();
  }
}
resetLARRY();

// Day 8
loadModule(findModuleIndex("communication"));

// Day 9
function setMessage() {
  radio.message = JSON.stringify(navigation);
}

setMessage();

// Day 10
function activateBeacon() {
  radio.beacon = true;
}
activateBeacon();

// Day 11
function setFrequency() {
  radio.frequency = (radio.range.low + radio.range.high) / 2;
}

// Day 12
function initialize(x, y, z) {
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0;
}

// Day 13
function calibrateX() {
  for (let i = 0; i < 12; i++) {
    let signal = checkSignal(i);
    if (signal !== undefined) {
      navigation.x = signal;
    }
  }
}

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

// Day 15
function calibrate() {
  calibrateX();
  calibrateY();
  calibrateZ();
}

// Day 16
function setSpeed(speed) {
  return speed < 0 ? speed : parseInt(speed);
  navigation.speed = speed;
}

// Day 17
function activateAntenna() {
  ship.antenna.active = true;
}
// activateAntenna();

// Day 18
function sendBroadcast() {
  for (let i = 0; i < 100; i++) {
    broadcast();
  }
}
// sendBroadcast();

// Day 19
function configureBroadcast() {
  setFrequency();
  activateAntenna();
  sendBroadcast();
}
configureBroadcast();

// Day 20
function decodeMessage(message) {
  let arr = message.split(" ");
  return arr
    .map(x =>
      x
        .replace(/0+/g, "o")
        .replace(/1+/g, "i")
        .replace(/2+/g, "u")
        .replace(/3+/g, "e")
        .replace(/4+/g, "a")
        .replace(/5+/g, "y")
    )
    .join(" ");
}

// Day 21
function returnToEarth() {
  let response1 = broadcast("x");
  let response2 = broadcast("y");
  let response3 = broadcast("z");

  let a = decodeMessage(response1);
  let b = decodeMessage(response2);
  let c = decodeMessage(response3);

  navigation.x = parseInt(a, 16);
  navigation.y = parseInt(b, 16);
  navigation.z = parseInt(c, 16);
}

returnToEarth();
