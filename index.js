const inputField = document.querySelector(".newtask__input")
const inputFieldBtn = document.querySelector(".newtask__btn")
const listDomSection = document.querySelector(".tasks__ul")


let taskList = ["makako", "chompa", "perro viejo"] //every time we create a new task, we will save the text here, globally


function getInputText() {
    let newTaskText = inputField.value
    taskList = [...taskList, newTaskText]
    if (newTaskText.trim() !== "") { // with this I check if the string have text or only white space  
        showTasks(newTaskText)
        inputField.value = "" // clean the input text every time a new task is crated
    }
}

function showTasks(newTaskText) {
    let li = document.createElement("li")
    li.classList.add("tasks__li")
    li.innerHTML = `
    <p class="tasks__text">${newTaskText}</p>
    <i class="fas fa-check"></i>
    `
    listDomSection.appendChild(li)
    emptyTaskList() //
}

function newTask() {
    // first we have to save the text of the input field as a string and store it in the taskList
    getInputText()
    // iterate the taskList array to create in the DOM all the stored tasks
    // showTasks()
}

// 
inputFieldBtn.addEventListener('click', () => {
    newTask()
})
inputField.addEventListener('keypress', function (e) { // allow to submit a new task with the Enter key
    if (e.key === 'Enter') {
        newTask()
    }
})

function emptyTaskList() { // Check if the task list is empty and display a text
    let textEmpty
    textEmpty = document.createElement("p")
    textEmpty.classList.add("tasks__empty-text")
    textEmpty.innerText = "Estas libre de tareas! Escribe algo para agregarlo a la lista"
    if (listDomSection.children.length === 0) {
        listDomSection.appendChild(textEmpty)
    }
    else if (listDomSection.children.length > 1) {
        listDomSection.childNodes.forEach((child) => {
            if (child.className === "tasks__empty-text") {
                listDomSection.removeChild(child)
            }
        })
    }
}

function removeTask(e) {
    if (e.target.classList.value === 'fas fa-check') {
        let targetTask = e.target.parentNode
        listDomSection.removeChild(targetTask)
    }
    emptyTaskList()
}


document.addEventListener('DOMContentLoaded', () => {
    // const taskDoneBtn = [...document.querySelectorAll(".fa-check")].forEach(btn => {
    //     btn.addEventListener('click', (e) => {
    //         console.log(e.target.parentNode);
    //         let targetTask = e.target.parentNode
    //         listDomSection.removeChild(targetTask)
    //     })
    // })
    // console.log(document.querySelectorAll(".fa-check"));
    // removeTask()
})

listDomSection.addEventListener('click', removeTask)