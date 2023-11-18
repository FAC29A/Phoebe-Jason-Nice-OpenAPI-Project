// HTML ELements
	// Story
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
const dummyOptionC = "Shoot him";

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

//API Objects
	// POST https://api.openai.com/v1/chat/completions
	function OpenaiFetchAPI() {
		console.log("Calling GPT3");
		let url = "https://api.openai.com/v1/engines/davinci/completions";
		let bearer = 'Bearer ' + YOUR_TOKEN;
		fetch(url, {
				method: 'POST',
				headers: {
						'Authorization': `Bearer ${myKey}`,
						'Content-Type': 'application/json'
				},
				body: JSON.stringify({
						"prompt": "Once upon a time",
						"max_tokens": 5,
						"temperature": 1,
						"top_p": 1,
						"n": 1,
						"stream": false,
						"logprobs": null,
						"stop": "\n"
				})
		}).then(response => {
				return response.json()
		}).then(data=>{
				console.log(data)
				console.log(typeof data)
				console.log(Object.keys(data))
				console.log(data['choices'][0].text)
		})
				.catch(error => {
						console.log('Something bad happened ' + error)
				});
}

	const responseTemplate = {
		// https://platform.openai.com/docs/api-reference/chat/object
		"id": "chatcmpl-123",
		"object": "chat.completion",
		"created": 1677652288,
		"model": "gpt-3.5-turbo-0613",
		"system_fingerprint": "fp_44709d6fcb",
		"choices": [{
			"index": 0,
			"message": {
				"role": "assistant",
				"content": "\n\nHello there, how may I assist you today?",
			},
			"finish_reason": "stop"
		}],
		"usage": {
			"prompt_tokens": 9,
			"completion_tokens": 12,
			"total_tokens": 21
		}
	}
