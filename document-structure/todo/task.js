const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const btnAddTask = document.getElementById('tasks__add');
const taskRemove = document.getElementsByClassName('task__remove');
const taskElement = document.getElementsByClassName('task');

function addContextEvent() {
	let taskName = '<div class="task"><div class="task__title">' + taskInput.value.trim() + '</div><a href="#" class="task__remove">&times;</a></div>';
	taskList.insertAdjacentHTML('beforeEnd', taskName);
	taskInput.value = '';
	taskRemove[taskRemove.length - 1].addEventListener('click', (event) => {
		taskElement[taskRemove.length - 1].remove();
	}
)};

function addTask() {
	btnAddTask.addEventListener('click', (event) => {
		if (taskInput.value.charAt(0) != ' ') {
			addContextEvent();
	}
		event.preventDefault();
})};

addTask();