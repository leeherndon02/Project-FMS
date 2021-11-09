"use strict";


var ttsOverride = false;
var synth = window.speechSynthesis;
var ariaElement;

function speech_init(ttsOverride=false) {
	ttsOverride = ttsOverride;
	// ensure the existence of our aria element
	ariaElement = document.getElementById("speech");
	if(!ariaElement) {
		console.log("Creating Aria speech element");
		ariaElement = document.createElement("div");
		ariaElement.setAttribute("id", "speech");
		document.body.appendChild(ariaElement);
	}
	else {
		console.log("Found Aria speech element");
	}
}

function speak(text, interrupt=true) {
	if(ttsOverride) {
		speakTTS(text, interrupt);
	}
	else {
		speakAria(text, interrupt);
	}
}

function speakAria(text, interrupt=true) {
	ariaElement.innerHTML = "";
	ariaElement.setAttribute("aria-live", (interrupt ? "assertive" : "polite"));
	let p = document.createElement("p");
	p.appendChild(document.createTextNode(text));
	ariaElement.appendChild(p);
}

function speakTTS(text, interrupt=true) {
	if(interrupt) {
		synth.cancel();
	}
	var utterThis = new SpeechSynthesisUtterance(text);
	synth.speak(utterThis);
}

function setTTS(enabled=true) {
	ttsOverride = enabled;
}
