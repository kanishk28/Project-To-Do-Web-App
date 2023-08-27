import { logic } from "./logic";
import { deleteTaskFunctionality } from "./logic";

export let projectArray = [];
export let taskArray = [];



export function projectPopup(){
    // Dom of the popup form for add projects

const leftSide = document.querySelector('#left-side');
const newDiv = document.createElement('div');  // created new div element
const input1 = document.createElement('input'); // created new input field
const input2 = document.createElement('input'); // created new input field
const projectAdd = document.createElement('button'); // created button element to add project
const cancelBtn = document.createElement('button'); // created button element to cancel

// adding class list to all variables
newDiv.classList.add('details-div');
input1.classList.add('input1', 'projectNameValue');
input2.classList.add('input2');
projectAdd.classList.add( 'btn', 'btn-success', 'project-add');
cancelBtn.classList.add( 'btn', 'btn-danger');
newDiv.style.display = 'flex';

// appending child 
leftSide.appendChild(newDiv);
newDiv.appendChild(input1);
newDiv.appendChild(input2);
newDiv.appendChild(projectAdd);
newDiv.appendChild(cancelBtn);

// inner text and placeholder content
input1.placeholder = 'Name of the project';
input2.placeholder = 'Note for the project';
projectAdd.textContent = 'Add Project';
cancelBtn.textContent = 'Cancel';

projectAdd.addEventListener('click', function(){
    let newProjects = {
        Name: input1.value,
        Notes: input2.value,
        Tasks: []
    }
    if(input1.value.trim() !== ''){
        const projectUl = document.querySelector('.list-group');
        const listItem = document.createElement('button');
        listItem.classList.add('list-x', 'btn', 'btn-light');
        listItem.innerHTML = input1.value + '\n <br>' + 'Note: ' + input2.value ;
        projectUl.appendChild(listItem);
        input1.value = '';
        input2.value = '';
        newDiv.style.display = '';
        
    }
    projectArray.push(newProjects);
    const projectName = document.querySelector('.project-name');
    projectName.innerHTML = newProjects.Name; 
    logic();
    const taskUl = document.querySelector('.right-list');
    taskUl.innerHTML = '';
    console.log(projectArray);
    
});

cancelBtn.addEventListener('click', function(){
    newDiv.style.display = 'none';
});
}


export function listPopup(){

const rightSide = document.querySelector('#right-side');
const taskDetailsDiv = document.createElement('div');
const taskTitle = document.createElement('input');
const taskDescription = document.createElement('input');
const taskDate = document.createElement('input');
taskDate.type = 'date';
taskDate.id = 'dateInput';
const taskAdd = document.createElement('button'); // created button element to add project
const cancelBtn = document.createElement('button'); // created button element to cancel
taskAdd.classList.add( 'btn', 'btn-success', 'task-add');
cancelBtn.classList.add( 'btn', 'btn-danger');

taskDetailsDiv.classList.add("task-detailsdiv");
taskTitle.classList.add('task-title');
taskDescription.classList.add('task-description');
taskDate.classList.add('task-date');


rightSide.appendChild(taskDetailsDiv);
taskDetailsDiv.appendChild(taskTitle);
taskDetailsDiv.appendChild(taskDescription);
taskDetailsDiv.appendChild(taskDate);
taskDetailsDiv.appendChild(taskAdd);
taskDetailsDiv.appendChild(cancelBtn);

taskDetailsDiv.style.display = 'flex';
taskTitle.placeholder = 'Task Title';
taskDescription.placeholder = 'Task Description';
taskAdd.textContent = 'Add Task';
cancelBtn.textContent = 'Cancel';


taskAdd.addEventListener('click', function() {
    let buttonValue = document.querySelector('.project-name').textContent;
    let projectIndexValue = projectArray.findIndex(project => project.Name === buttonValue);
    
    if (projectIndexValue > -1) {
        let newTask = {
            Name: taskTitle.value,
            Description: taskDescription.value,
            DueDate: taskDate.value,
            Priority: ''
        };




        if (taskTitle.value.trim() !== '') {
            const taskUl = document.querySelector('.right-list');
            const taskItem = document.createElement('button');
            taskItem.classList.add('list-y', 'btn', 'btn-dark');
            taskItem.innerHTML = newTask.Name + '\n <br>' + 'Description: ' + newTask.Description + '\n <br>' + 'Due Date: ' + newTask.DueDate + '<br>';
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn', 'btn-outline-danger', 'delete-task-btn');
            deleteButton.textContent = 'Delete Task';
            taskUl.appendChild(taskItem);
            taskItem.appendChild(deleteButton);
            deleteButton.addEventListener('click', function(){deleteTaskFunctionality()});
        }
        
        console.log(projectArray);
        console.log(projectIndexValue);
        projectArray[projectIndexValue].Tasks.push(newTask);
    }
    taskTitle.value = '';
    taskDescription.value = '';
    taskDate.value = '';
    taskDetailsDiv.style.display = '';
});









cancelBtn.addEventListener('click', function(){
    taskDetailsDiv.style.display = 'none';
})
}

