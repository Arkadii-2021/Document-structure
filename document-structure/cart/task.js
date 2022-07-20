const hasTooltip = document.getElementsByClassName('has-tooltip');
const tooltipElement = document.getElementsByClassName('tooltip tooltip_active');

function removeTooltipClasses() {
	Array.from(tooltipElement).forEach(tooltip => {
	tooltip.remove();
})};

function tipVisible() {
	Array.from(hasTooltip).forEach(tip => {
	tip.addEventListener('click', (event) => {
		if (!tooltipElement[0]) {
			let tipName = '<div class="tooltip tooltip_active">' + event.target.title + '</div>'
			event.target.insertAdjacentHTML('afterEnd', tipName);
			} else if (tooltipElement[0]) {
				removeTooltipClasses();
			} else {
				tooltipElement[tooltipElement.length - 1].classList.remove('tooltip_active');
			}
		
		getCoords(event.target, tip);
		event.preventDefault();
	});
});
}

function getCoords(hasElement, tipElement) {
	let tip = hasElement.getBoundingClientRect();
	let tipPosition = tipElement.getBoundingClientRect();
	if (tooltipElement[0]) {
		tooltipElement[0].style = "left: " + tip.left + "px; top: " + (tipPosition.top + 20) + "px;";
	}
};

tipVisible();