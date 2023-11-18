// import 'dotenv/config';

// HTML ELements

const titleContainer = document.getElementById("title");
const imageContainer = document.getElementById("image");
const narrativeContainer = document.getElementById("narrative");
const optionATextContainer = document.getElementById("optionAText");
const optionBTextContainer = document.getElementById("optionBText");
const optionCTextContainer = document.getElementById("optionCText");

// Dummy Content

const dummyNarrative = "Far out in the uncharted backwaters of the unfashionable end of the Western Spiral arm of the Galaxy lies a small unregarded yellow sun. Orbiting this at a distance of roughly ninety-eight million miles is an utterly insignificant little blue-green planet whose ape-descended life forms are so amazingly primitive that they still think digital watches are a pretty neat idea."
const dummyOptionA = "Have a nap";
const dummyOptionB = "Have a coffee";
const dummyOptionC = "Shoot him"


// Functions

function displayNarrative () {
    narrativeContainer.textContent = dummyNarrative;
}

