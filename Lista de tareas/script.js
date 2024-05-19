document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskName = taskInput.value.trim();
        if (taskName !== '') {
            addTask(taskName);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });

    function addTask(name) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        
        const taskName = document.createElement('span');
        taskName.textContent = name;
        
        const completeButton = document.createElement('button');
        completeButton.textContent = '✓';
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '🗑';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskName);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    }
});
