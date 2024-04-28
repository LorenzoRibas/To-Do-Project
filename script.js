document.addEventListener("DOMContentLoaded", function() {

    let btn = document.querySelector("#add");
    let input = document.querySelector(".newtask input");
    let tasksContainer = document.querySelector(".tasks");
    let emptyMessage = document.querySelector('.empty-message');

    btn.addEventListener("click", function() {

        if(input.value.trim().length === 0) {
            alert("Please enter a task before adding.");
        } 
        
        else {
            let newTaskElement = document.createElement('div');
            newTaskElement.classList.add('task');
            newTaskElement.innerHTML = `

                <span class="taskname">
                    ${input.value}
                </span>
                <div class="btns">
                    <button class="edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;
            
            tasksContainer.appendChild(newTaskElement);
            input.value = "";
            updateEmptyMessage();
            addTaskEventListeners(newTaskElement);
        }
    });

    function updateEmptyMessage() {

        let tasksCount = tasksContainer.querySelectorAll('.task').length;

        if (tasksCount > 0) {
            emptyMessage.style.display = 'none';
        }
        
        else {
            emptyMessage.style.display = 'block';
        }
    }

    function addTaskEventListeners(taskElement) {
        let editButton = taskElement.querySelector('.edit');
        let taskName = taskElement.querySelector('.taskname');

        editButton.addEventListener('click', function() {
            let currentText = taskName.textContent.trim();
            let newText = prompt("Edit task:", currentText);

            if (newText !== null) {
                newText = newText.trim();

                if (newText.length > 0 && newText.length < 50) {
                    taskName.textContent = newText;
                }

                else if (newText.length > 50){
                    alert("Task length limit is 50");
                }
                
                else {
                    alert("Invalid task name. Please enter a valid task.");
                }
            }
        });

        let deleteButton = taskElement.querySelector('.delete');
        deleteButton.addEventListener('click', function() {
            taskElement.remove();
            updateEmptyMessage();
        });
    }
});
