let tasks = [];

let formElem = document.getElementById('task-form')
let formInput = document.getElementById('inputText');

function onSubmit(e){
    e.preventDefault();
    tasks.push(formInput.value);
    formInput.value.trim = ''
    if(formInput.value.length){
    addNewTask();
    formElem.reset();
    }
    
}

formElem.addEventListener('submit', onSubmit)



function addNewTask() {
    let taskList = document.getElementById('tasks')
    taskList.innerHTML = ''
     for(let index in tasks){
       let task = tasks[index]
    taskList.innerHTML += `<div class="task-list">
            <div class="task">${task}</div>
            <button class="delete-icon" onclick="deletetask(${index})">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>`
        }
}



function deletetask(index){
    tasks = tasks.filter((word,i) => i != index );

    addNewTask();
}
