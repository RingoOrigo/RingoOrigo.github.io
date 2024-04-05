// Find the field of text to update accordingly
const splashField = document.getElementById("splash_text");

// Placeholder array of potential splash texts. This will later be moved to a general config file.
const splashOptions = [
    "Join the endless now.",
    "Drive it in! Release the power of Ouroboros!",
    "Rewind our clocks, back to the start!"
];

// Update the text with a random selection from within the splashOptions array.
splashField.innerText = splashOptions[Math.floor(Math.random() * splashOptions.length)];