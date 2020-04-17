const overlay = document.getElementById('overlay');
const backgroundImage = document.getElementsByClassName('background-image')[0];
const backgroundImageOverlay = document.getElementsByClassName('background-image__overlay')[0];
const backgroundImageContainer = document.getElementsByClassName('background-image-container')[0];
const contentWrapper = document.getElementsByClassName('content-wrapper')[0];
const about = document.getElementsByClassName('about')[0];

function openModal(element) {
	contentWrapper.classList.add('content-wrapper--hidden');
	overlay.classList.add('screen-overlay--visible');
	about.classList.add('about--visible');
	backgroundImage.classList.add('zoom');

	setTimeout(() => {
		backgroundImage.style.filter = 'blur(6px)';
	}, 350)

}

function closeModal() {
	contentWrapper.classList.remove('content-wrapper--hidden');
	overlay.classList.remove('screen-overlay--visible');
	about.classList.remove('about--visible');
	backgroundImage.remove('zoom');
	backgroundImage.classList.add('zoom-out');

	setTimeout(() => {
		backgroundImage.style.filter = 'none';
	}, 350)
}