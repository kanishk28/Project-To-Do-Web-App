import { projectArray } from "./projectandlistpopup";

export function logic(){
    const taskAddBtn = document.querySelector('.right-addbtn');
    const deleteProjectBtn = document.querySelector('.right-delete-btn');
    const projectName = document.querySelector('.project-name');
    


    if(projectName.textContent === 'Project Name'){
            taskAddBtn.disabled = true;
            deleteProjectBtn.disabled = true;
    }else{
            taskAddBtn.disabled = false;
            deleteProjectBtn.disabled = false;
    }
    }


    export function deleteProjectFunctionality(){
        const projectNam1 = document.querySelector('.project-name');
        const projectName = projectNam1.textContent;
        const buttonValue = document.querySelectorAll('.list-x');
        const projectIndexValue = projectArray.findIndex(project => project.Name === projectName);
    
        console.log(projectIndexValue)
           
        if (projectIndexValue >= 0 && projectIndexValue < projectArray.length) {
            projectArray.splice(projectIndexValue, 1);
        }
    
        projectNam1.textContent = 'Project Name';
    
        buttonValue.forEach(button => {
            const buttonText = button.textContent.split('\n')[0];
            if (buttonText === projectName) {
            
                const listItem = button.closest('.list-x');
                if (listItem) {
                    listItem.parentElement.removeChild(listItem);
                    const taskUl = document.querySelector('.right-list');
                    taskUl.innerHTML = '';
                }
                if (projectArray.length > 0) {
                    const previousProjectName = projectArray[projectArray.length - 1].Name;
                    // Update UI to show the previous project
                    projectNam1.textContent = previousProjectName;
                    // Load tasks of the previous project and update the UI
                    // ... (your code to load and display tasks)
                }
            }
        });
    }



   
    export function switchProject(projectIndex) {
        const project = projectArray[projectIndex];
        const projectName = document.querySelector('.project-name');
        projectName.innerHTML = project.Name;
        
        // Clear the task list
        const rightSide = document.querySelector('#right-list');
        const taskUl = document.querySelector('.right-list');
        taskUl.innerHTML = '';


        
        // Display tasks of the selected project
        project.Tasks.forEach(task => {
            const taskItem = document.createElement('button');
            taskItem.classList.add('list-y', 'btn', 'btn-dark');
            taskItem.innerHTML = task.Name + '\n <br>' + 'Description: ' + task.Description + '\n <br>' + 'Due Date: ' + task.DueDate + '<br>';
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn', 'btn-outline-danger', 'delete-task-btn');
            deleteButton.textContent = 'Delete Task';
            taskUl.appendChild(taskItem);
            taskItem.appendChild(deleteButton);
        });
    }


    export function deleteTaskFunctionality() {
        const projectNam1 = document.querySelector('.project-name');
        const buttonValues = document.querySelectorAll('.list-y');
    
        buttonValues.forEach((buttonValue, index) => {
            buttonValue.addEventListener('click', () => {
                const taskName = buttonValue.textContent.split('\n')[0];
    
                const currentProject = projectArray.find(project => project.Name === projectNam1.textContent);
                const taskIndexValue = currentProject.Tasks.findIndex(task => task.Name === taskName);

                if(taskIndexValue > -1){
                    currentProject.Tasks.splice(taskIndexValue, 1);

                    const listItem = buttonValue.closest('.list-y');
            if (listItem) {
                listItem.remove();
            }
                }
    
                console.log(taskIndexValue);
            });
        });
    };
    
    
    
    
    
    