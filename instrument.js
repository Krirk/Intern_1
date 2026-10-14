// The sound: Tone.js instruments, effects, and the functions that play them.
// Tone.js documentation: https://tonejs.github.io/docs/15.1.22/

// Make the instruments and plug them into the speakers.
const synth = new Tone.PolySynth(Tone.Synth).toDestination(); // can play several notes at once

// Start a note now. It keeps sounding until stopNote() is called with the same note.
function startNote(note) {
  synth.triggerAttack(note, Tone.now());
}

// Stop a note that startNote() started.
function stopNote(note) {
  synth.triggerRelease(note, Tone.now());
}
