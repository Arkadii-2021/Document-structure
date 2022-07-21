const hasTooltip = document.getElementsByClassName('has-tooltip');
const tooltipElement = document.getElementsByClassName('tooltip tooltip_active');

function removeTooltipClasses() {
	Array.from(tooltipElement).forEach(tooltip => {
	tooltip.remove();
})};

function tipVisible() {
	Array.from(hasTooltip).forEach(tip => {
	tip.addEventListener('click', (event) => {
		let tipName = '<div class="tooltip tooltip_active">' + event.target.title + '</div>'
		if (!tooltipElement[0]) {
			event.target.insertAdjacentHTML('afterEnd', tipName);
		} else if (tip.getAttribute('title') != event.target.getAttribute('title')) {
			event.target.insertAdjacentHTML('afterEnd', tipName);
			tooltipElement[0].classList.toggle('tooltip_active');
		} else if (tip.getAttribute('title') == event.target.getAttribute('title')) {
			removeTooltipClasses();
			event.target.insertAdjacentHTML('afterEnd', tipName);
		} else if ((tooltipElement[0]) && (tip.getAttribute('title') == event.target.getAttribute('title'))) {
			removeTooltipClasses();
		}
		getCoords(event.target, tip);
		event.preventDefault();
	})
})
};

function getCoords(hasElement, tipElement) {
	let tip = hasElement.getBoundingClientRect();
	let tipPosition = tipElement.getBoundingClientRect();
	if (tooltipElement[0]) {
		tooltipElement[0].style = "left: " + tip.left + "px; top: " + (tipPosition.top + 20) + "px;";
	}
};

tipVisible();