document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector("#add");
    let input = document.querySelector(".newtask input");
    let tasksContainer = document.querySelector(".tasks");
    let emptyMessage = document.querySelector('.empty-message');

    btn.addEventListener("click", function() {
        if(input.value.trim().length === 0) {
            alert("Please enter a task before adding.");
        } else {
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
            addDeleteEventListener(newTaskElement.querySelector('.delete'));
        }
    });

    function updateEmptyMessage() {
        let tasksCount = tasksContainer.querySelectorAll('.task').length;
        if (tasksCount > 0) {
            emptyMessage.style.display = 'none';
        } else {
            emptyMessage.style.display = 'block';
        }
    }

    function addDeleteEventListener(deleteButton) {
        deleteButton.addEventListener('click', function() {
            this.parentNode.parentNode.remove();
            updateEmptyMessage();
        });
    }
});
