/*
 * IDB Programming: A1 Modelling — a musical instrument
 *
 * All of the code for your instrument goes in this file. It's split into sections:
 *   settings — the "fixed" parts of your program
 *   state    — the parts of your program that change over time
 *   sound    — the Tone.js instruments and effects
 *   update   — changes the state when a key goes down or comes up
 *   use      — makes sound from the state
 *   setup    — starts everything: on every key event, it calls update() then use()
 *
 * There is no loop in this assignment. Nothing happens until the player presses
 * a key, and every key event follows the same two steps:
 *   1. update: change the state, based on which key it was
 *   2. use:    make sound from the state
 *
 * Tone.js documentation: https://tonejs.github.io/docs/15.1.22/
 */

// ---------- Settings ----------
// Settings variables should contain all of the "fixed" parts of your programs
// For example: which key does what, which notes you can play, the tempo.
const exampleKey = "a"; // the key that plays the example note
const exampleNote = "C4"; // the note it plays

// ---------- State ----------
// State variables are the parts of your program that change over time.
// For example: which octave you're playing in, or whether a drone is on.
let exampleKeyHeld = false; // is the example key down right now?
let exampleNotePlaying = false; // is the synth playing the example note right now?

// ---------- Sound ----------
// Make the instruments and plug them into the speakers.
const synth = new Tone.PolySynth(Tone.Synth).toDestination(); // can play several notes at once

// ---------- Update and use ----------
// Update: change the state, based on which key it was. No sound here!
function update(event) {
  console.log(event.type, event.key);

  // Example: replace this with your own instrument.
  if (event.key === exampleKey) {
    exampleKeyHeld = event.type === "keydown"; // true when it goes down, false when it comes up
  }
}

// Use: make sound from the state. Don't look at the key here, only at the state.
function use() {
  // Example: replace this with your own instrument.
  if (exampleKeyHeld === true && exampleNotePlaying === false) {
    synth.triggerAttack(exampleNote, Tone.now()); // keeps sounding until triggerRelease
    exampleNotePlaying = true;
  }
  if (exampleKeyHeld === false && exampleNotePlaying === true) {
    synth.triggerRelease(exampleNote, Tone.now());
    exampleNotePlaying = false;
  }
}

// ---------- Setup ----------
// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  // Every time a key goes down: update, then use.
  window.addEventListener("keydown", function (event) {
    Tone.start(); // browsers only allow sound after the player has pressed something

    // Holding a key down sends keydown again and again. Only react to the first one.
    if (event.repeat === false) {
      update(event);
      use();
    }
  });

  // Every time a key comes up: update, then use.
  window.addEventListener("keyup", function (event) {
    update(event);
    use();
  });
}

setup(); // Always remember to call setup()!
