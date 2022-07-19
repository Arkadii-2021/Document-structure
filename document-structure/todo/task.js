const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const btnAddTask = document.getElementById('tasks__add');
const taskRemove = document.getElementsByClassName('task__remove');
const taskElement = document.getElementsByClassName('task');

function contextEvent() {
	taskName = '<div class="task"><div class="task__title">' + taskInput.value + '</div><a href="#" class="task__remove">&times;</a></div>';
	taskList.insertAdjacentHTML('afterBegin', taskName);
	taskInput.value = '';
	Array.from(taskElement).forEach(function(task, i) {
	taskRemove[i].addEventListener('click', (event) => {
		task.remove();
		}
	)})
};

function addTask() {
	taskInput.addEventListener('keydown', (event) => {
		if (event.key == 'Enter' && taskInput.value != '') {
			contextEvent();
	}});

	btnAddTask.addEventListener('click', (event) => {
		if (taskInput.value != '') {
			contextEvent();
	}});
};

addTask();