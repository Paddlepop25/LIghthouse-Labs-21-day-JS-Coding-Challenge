// ## Challenge #8
// The little duck-shaped robot shudders back and forth for a moment, and his eyes flash as he releases a barrage of ten quacks. "Thank you!" he exclaims.

// "COMMUNICATION MODULE NEEDED," LARRY blares suddenly. He repeats it twice more - he’s rather insistent!

// Luckily, you've got the code for this. Load the module called communication using findModuleIndex() and loadModule() from before.

// But wait, your manual says that there are only three essential modules: navigation, propulsion, and life-support. Is communication essential too? LARRY seems to think so.

// Update your loadModule() function so if any of the modules that LARRY requires you to load are not essential, you override the system and set the essential property to true before loading the module. The function should now look like function loadModule(index){...}

// Once you've done that, use your functions from the previous challenges to load the communication module

// Day 8
loadModule(findModuleIndex("communication"));
