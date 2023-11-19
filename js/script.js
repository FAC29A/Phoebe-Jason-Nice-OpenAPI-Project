import { generateBeat } from "./api";

// HTML ELements
// Story
const titleContainer = document.getElementById("title");
const imageContainer = document.getElementById("image");
const narrativeContainer = document.getElementById("narrative");
const optionATextContainer = document.getElementById("optionAText");
const optionBTextContainer = document.getElementById("optionBText");
const optionCTextContainer = document.getElementById("optionCText");

// Dummy Content
const dummyInit = "Your tale has not been told..."
const dummyNarrative = "Far out in the uncharted backwaters of the unfashionable end of the Western Spiral arm of the Galaxy lies a small unregarded yellow sun. Orbiting this at a distance of roughly ninety-eight million miles is an utterly insignificant little blue-green planet whose ape-descended life forms are so amazingly primitive that they still think digital watches are a pretty neat idea."
const dummyOptionA = "Be Aggressive";
const dummyOptionB = "Be Cunning";
const dummyOptionC = "Be Diplomatic";

// Real Content
let beatNow = dummyNarrative;
let optionA = dummyOptionA;
let optionB = dummyOptionB;
let optionC = dummyOptionC;

//API Key
let myKey = '';

//Form
const apiKeyForm = document.getElementById('apiKey');
const apiKeyInput = document.getElementById('inputAPIKey');

apiKeyForm.addEventListener('submit', function (event) {
	event.preventDefault();
	console.log("My Key: " + myKey);
	myKey = apiKeyInput.value;
	apiKeyInput.value = 'Mine Now';
	console.log("My Key: " + myKey);
});

// Functions
function displayNarrative () {
	narrativeContainer.textContent = dummyNarrative;
}

//Initialise Page
function displayStartup() {
	narrativeContainer.textContent = dummyInit;
	optionATextContainer.textContent = optionA;
	optionBTextContainer.textContent = optionB;
	optionCTextContainer.textContent = optionC;
}

displayStartup();