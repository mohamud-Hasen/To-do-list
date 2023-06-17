// get necessary elements from the dom 

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// add event listeners to the add task button
addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value;
    if(taskText.trim() !== '' ) {
        const li = document.createElement('li');
        li.innerText = taskText;
        const deleteBtn = document.createElement('span');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.innerText = 'Delete';

        deleteBtn.addEventListener('click', deleteTask);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function deleteTask(event) {
        const taskItem = event.target.parentNode;
            taskList.removeChild(taskItem);
}



