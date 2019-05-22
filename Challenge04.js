// ## Challenge #4
// "DANGER QUACK DANGER QUACK!"

// LARRY seemed so happy before, but he really is starting to get a bit agitated. Now that you know there are three essential modules, you need to load them into the ship's systems.

// Write a function called loadModule(). It needs to take a parameter, called index. Your function should be set up like this:

// function loadModule(index) { }

// When loadModule() gets the index number of a module, it should do the following:

// Access the right module by using the index parameter. Remember how to access particular items in an array? If not, this resource might help you
// Check if the module's essential flag is set to true. If it isn't, return null;
// Set the modules enabled flag to true
// Load the corresponding module from the availableModules array into the ship’s modules property (which is also an array).
// "ALMOST THERE" quacks LARRY. The modules still aren't loading it seems. You realize you need to get the index from somewhere, so you decide to write another function called loopModule() that will loop over the availableModules array and find the module with the name life-support to get its index. Once you have the right index, use your loadModule() function to load the life-support module. Don't forget, you'll need to call your loopModule() function for it to run

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
