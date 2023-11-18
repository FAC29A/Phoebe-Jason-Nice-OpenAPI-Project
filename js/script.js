// HTML ELements
	// Story
	const title = document.getElementById("title");
	const image = document.getElementById("image");
	const narrative = document.getElementById("narrative");
	const optionAText = document.getElementById("optionAText");
	const optionBText = document.getElementById("optionBText");
	const optionCText = document.getElementById("optionCText");

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
