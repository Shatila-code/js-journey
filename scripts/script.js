const addButton = document.querySelector('.add-task-btn');

addButton.addEventListener('click', function() {
    
    const taskInput = document.querySelector('.task-input');

    if (taskInput.value !== '') {

        const newTask = document.createElement('li');
        
        newTask.textContent = taskInput.value;
        
        const taskList = document.querySelector('.task-list');
        taskList.appendChild(newTask);
        
        taskInput.value = '';


        newTask.addEventListener('click', function() {
            newTask.classList.toggle('done');
        });
    }
});
