let tasks = [];

const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const btn = document.getElementById('btn');
const searchtaskvalue = document.getElementById("searchTask")

const searchtask = () => {
    const search = searchtaskvalue.value;
    const filtered = tasks.filter((task) => task.text.includes(search))
    showlisst(filtered);
 }

searchtaskvalue.addEventListener("input",searchtask)

btn.addEventListener('click',() => {
    if (taskInput.value == '') {
        alert('please enter a task')
    } else {
        addTask(tasks);
        taskInput.value = "";
    }
   
})

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.unshift({ text: taskText, id: Date.now() });
        showlisst(tasks);
    }
}

 

function showlisst(todos) {
    taskList.innerHTML = '';
    todos.forEach((task) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button class="edit" onclick="editTask(${task.id})">Edit</button>
                <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    showlisst(tasks);
}

function editTask(id) {
    const newText = prompt("Edit the task:");
    if (newText) {
        tasks = tasks.map(task => {
            if (task.id === id) {
                return { text: newText };
            }
            return task;
        });
        showlisst(tasks);
    }
}


showlisst(tasks);