//your JS code here. If required.
function change(){
	let pElement = document.getElementById('status');
	pElement.remove();
	let h1Element = document.createElement('h1');

	h1Element.innerHTML = "Entered Metaverse";

	document.body.insertBefore(h1Element,document.getElementById('enterBtn'));
}