// The controls: what happens when a key goes down or comes up.
// setup() in script.js connects these functions to the keyboard.

// Runs every time a key goes down.
function keyDown(event) {
  Tone.start(); // browsers only allow sound after the player has pressed something

  // Holding a key down sends keydown again and again. Only react to the first one.
  if (event.repeat === false) {
    console.log("Key down:", event.key);

    // Example: replace this with your own instrument.
    if (event.key === exampleKey) {
      startNote(exampleNote);
    }
  }
}

// Runs every time a key comes up.
function keyUp(event) {
  console.log("Key up:", event.key);

  // Example: replace this with your own instrument.
  if (event.key === exampleKey) {
    stopNote(exampleNote);
  }
}
