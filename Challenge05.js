// ## Challenge #5
// "BREATHE EASIER!" LARRY quacks out. "LITERALLY. Life support module loaded. Propulsion needed."

// You realize that you can re-use your code from before, but this time you should do what all good programmers do: modularize your code.

// Rename your loopModule() function to findModuleIndex(). Update your function to take in a name that you’re looking for, and return the index of that module in the availableModules array, before loading it into the ship. It should look like this to start:

// function findModuleIndex(name) { }
// Use your new findModuleIndex() function to find the "propulsion" module and then load it into the ship's system.

// Don't forget: you still need to load the life-support module!

// Day 5
function findModuleIndex(moduleName) {
  for (let i = 0; i < availableModules.length; i++) {
    if (availableModules[i].name === moduleName) {
      return i;
    }
  }
}
loadModule(findModuleIndex("propulsion"));
