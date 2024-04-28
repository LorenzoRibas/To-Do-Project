document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector("#add");
    let input = document.querySelector(".newtask input");
    let tasksContainer = document.querySelector(".tasks");

    btn.addEventListener("click", function() {
        if(input.value.trim().length === 0) {
            alert("Please enter a task before adding.");
        } else {
            tasksContainer.innerHTML += `
                <div class="task">
                    <span class="taskname">
                        ${input.value}
                    </span>
                
                    <div class="btns">
                        <button class="edit">
                        <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button class="delete">
                        <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </div>`;
            
            input.value = "";

            let emptyMessage = document.querySelector('.empty-message');

            let tasks0 = document.querySelector('.task').innerHTML;
            if (tasks0.length > 0) {
                emptyMessage.style.display = 'none';
            }
            
        }
    });
});
