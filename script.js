/*
 * IDB Programming: A1 Modelling — a musical instrument
 *
 * This is the main file. It holds the state and settings of your instrument,
 * and the setup() function that starts everything.
 *
 * The code is split across three files, so you can work in different places:
 *   script.js     — state, settings and setup (this file)
 *   instrument.js — the sound: Tone.js instruments and the functions that play them
 *   keyboard.js   — the controls: what happens when a key goes down or comes up
 *
 * The files share their variables: a name made in one file can be used in the others.
 *
 * There is no loop in this assignment. Nothing happens until the player presses
 * a key, and every key event follows the same two steps:
 *   1. update: change the state, based on which key it was
 *   2. use:    make sound from the state
 */

// State variables are the parts of your program that change over time.
// For example: which octave you're playing in, or whether a drone is on.

// Settings variables should contain all of the "fixed" parts of your programs
// For example: which key does what, which notes you can play, the tempo.
const exampleKey = "a"; // the key that plays the example note
const exampleNote = "C4"; // the note it plays

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  // Put your event listener code here
  window.addEventListener("keydown", keyDown); // keyDown is in keyboard.js
  window.addEventListener("keyup", keyUp); // keyUp is in keyboard.js
}

setup(); // Always remember to call setup()!
