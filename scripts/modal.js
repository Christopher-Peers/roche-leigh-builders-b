const navButtonList = Array.from(document.getElementsByClassName('navigation-link'));


const overlay = document.getElementById('overlay');
const backgroundImage = document.getElementsByClassName('background-image')[0];
const backgroundImageOverlay = document.getElementsByClassName('background-image__overlay')[0];
const backgroundImageContainer = document.getElementsByClassName('background-image-container')[0];
const contentWrapper = document.getElementsByClassName('content-wrapper')[0];
const about = document.getElementsByClassName('about')[0];

console.log(navButtonList)

navButtonList.forEach(navLink => navLink.addEventListener('click', console.log('clicked')))

function openModal(element) {
	contentWrapper.classList.remove('helper--visible')
	contentWrapper.classList.add('helper--hidden');
	overlay.classList.add('helper--visible');
	about.classList.add('helper--visible');

	console.log(element)

	switch(element) {

	}
	if (backgroundImage.classList.contains('zoom-out')) {
		backgroundImage.classList.remove('zoom-out');
	};
	backgroundImage.classList.add('zoom');

	setTimeout(() => {
		backgroundImage.style.filter = 'blur(6px)';
	}, 350)

}

function closeModal() {
	console.log('called')
	contentWrapper.classList.remove('content-wrapper--hidden');
	overlay.classList.remove('screen-overlay--visible');
	about.classList.remove('about--visible');
	backgroundImage.classList.remove('zoom');
	backgroundImage.classList.add('zoom-out');

	setTimeout(() => {
		backgroundImage.style.filter = 'none';
	}, 350)
}