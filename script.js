//your JS code here. If required.
function change(){
	let pElement = document.getElementById('status');
	let h1Element = document.createElement('h1');
	h1Element.innerHTML = "Entered Metaverse"
	pElement.innerHTML="";
	pElement.appendChild(h1Element);
	// pElement.remove();
	// let h1Element = document.createElement('h1');

	// h1Element.innerHTML = "Entered Metaverse";
	// h1Element.id = "status";

	// document.body.insertBefore(h1Element,document.getElementById('enterBtn'));
}