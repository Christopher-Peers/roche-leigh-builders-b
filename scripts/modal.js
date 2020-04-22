const navButtonList = Array.from(document.getElementsByClassName('navigation-link'));
const closeButtonList = Array.from(document.getElementsByClassName('close-button'));


const screenOverlay = document.getElementById('overlay');
const backgroundImage = document.getElementsByClassName('background-image')[0];
const backgroundImageOverlay = document.getElementsByClassName('background-image__overlay')[0];
const backgroundImageContainer = document.getElementsByClassName('background-image-container')[0];
const contentWrapper = document.getElementsByClassName('content-wrapper')[0];

const about = document.getElementsByClassName('about')[0];
const recentProjects = document.getElementsByClassName('recent-projects')[0];
const contact = document.getElementsByClassName('contact')[0];


navButtonList.forEach((navLink) => navLink.addEventListener('click', () => openModal(navLink.id)));
closeButtonList.forEach((closeButton) => closeButton.addEventListener('click', () => closeModal(closeButton.id)))

function openModal(elementId) {
	hideContentWrapper();
	showScreenOverlay();
	displayCorrectModal(elementId);
	animateZoomOut();

}

function closeModal(elementId) {
	hideScreenOverlay();
	showContentWrapper();
	hideCorrectModal(elementId);
	animateZoomIn();
}

function displayCorrectModal(elementId) {
	switch (elementId) {
		case "navigation-link--about":
			showAbout();
			break;
		case "navigation-link--recent-projects":
			showRecentProjects();
			break;
		case "navigation-link--services":
			showServices();
			break;
		case "navigation-link--contact":
			showContactDetails();
			break;
	}
}

function hideCorrectModal(elementId) {
	switch (elementId) {
		case "about__close-button":
			hideAbout();
			break;
		case "recent-projects__close-button":
			hideRecentProjects();
			break;
		// case "navigation-link--services":
		// 	hideServices();
		// 	break;
		case "navigation-link--contact":
			hideContactDetails();
			break;
	}

}


// Modal content display functions 

function showAbout() {
	about.classList.remove('helper--hidden');
	about.classList.add('helper--visible');
}

function hideAbout() {
	about.classList.remove('helper--visible');
	about.classList.add('helper--hidden');
}

function showRecentProjects() {
	recentProjects.classList.remove('helper--hidden');
	recentProjects.classList.add('helper--visible');
}

function hideRecentProjects() {
	recentProjects.classList.remove('helper--visible');
	recentProjects.classList.add('helper--hidden');
}

function showServices() {}

function hideServices() {}

function showContactDetails() {
	contact.classList.remove('helper--hidden');
	contact.classList.add('helper--visible');
}

function hideContactDetails() {
	contact.classList.remove('helper--visible');
	contact.classList.add('helper--hidden');
}

// Modal overlay display functions

function hideContentWrapper() {
	contentWrapper.classList.remove('helper--visible')
	contentWrapper.classList.add('helper--hidden');
}

function showContentWrapper() {
	contentWrapper.classList.remove('helper--hidden');
	contentWrapper.classList.add('helper--visible');
}

function hideScreenOverlay() {
	screenOverlay.classList.remove('helper--visible');
	screenOverlay.classList.add('helper--hidden');
}

function showScreenOverlay() {
	screenOverlay.classList.remove('helper--hidden');
	screenOverlay.classList.add('helper--visible');
}

function animateZoomIn() {
	backgroundImage.classList.remove('zoom');
	backgroundImage.classList.add('zoom-out');
	setTimeout(() => {
		backgroundImage.style.filter = 'none';
	}, 650)
}

function animateZoomOut() {
	backgroundImage.classList.remove('zoom-out');
	backgroundImage.classList.add('zoom');
	setTimeout(() => {
		backgroundImage.style.filter = 'blur(6px)';
	}, 650)
}