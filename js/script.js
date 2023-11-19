import { generateBeat } from "./api";

// HTML ELements
// Story
const titleContainer = document.getElementById("title");
const imageContainer = document.getElementById("image");
const narrativeContainer = document.getElementById("narrative");
const optionAText = document.getElementById("optionAText");
const optionBText = document.getElementById("optionBText");
const optionCText = document.getElementById("optionCText");
const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");
let approach = '';


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

// Event Listeners

buttonA.addEventListener('click', function() {
    changeApproach(optionAText.innerHTML);
});
buttonB.addEventListener('click', function() {
    changeApproach(optionBText.innerHTML);
});
buttonC.addEventListener('click', function() {
    changeApproach(optionCText.innerHTML);
});

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

function changeApproach(chosenText) {
    approach = chosenText;
    console.log(approach);
}
//Initialise Page
function displayStartup() {
	narrativeContainer.textContent = dummyInit;
	optionATextContainer.textContent = optionA;
	optionBTextContainer.textContent = optionB;
	optionCTextContainer.textContent = optionC;
}

displayStartup();