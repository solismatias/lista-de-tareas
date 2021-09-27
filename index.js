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