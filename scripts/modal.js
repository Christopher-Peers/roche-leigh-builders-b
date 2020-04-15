const overlay = document.getElementById('overlay');
const backgroundImage = document.getElementsByClassName('background-image')[0];
const backgroundImageOverlay = document.getElementsByClassName('background-image__overlay')[0];
const contentWrapper = document.getElementsByClassName('content-wrapper')[0];
const about = document.getElementsByClassName('about')[0];

function openModal(thing) {
	backgroundImage.classList.toggle('blur');
	contentWrapper.classList.toggle('content-wrapper--hidden');
	overlay.style.visibility = 'visible';
	about.classList.toggle('about--visible');
}

function closeModal() {
	
	overlay.style.visibility = 'hidden';
	about.classList.toggle('about--visible');
	contentWrapper.classList.toggle('content-wrapper--hidden');
}