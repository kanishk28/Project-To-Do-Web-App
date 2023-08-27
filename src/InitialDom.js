import { projectPopup, listPopup } from "./projectandlistpopup";
import { deleteProjectFunctionality } from "./logic";


function UI() {

    // DOM of left side
    const leftSide = document.getElementById('left-side'); // targetting left side html div
    const h2 = document.createElement('h2'); //created projects heading
    const hr = document.createElement('hr'); // created horizontal line element
    const leftBtnDiv = document.createElement('div');
    const leftAddBtn = document.createElement('button');
    leftBtnDiv.classList.add('leftBtnDiv');
    leftAddBtn.classList.add('btn', 'btn-outline-light', 'left-add-btn')
    hr.classList.add('hr-line'); // added class list to the hr
    h2.classList.add('Projects');  //added class to projects heading
    h2.textContent = 'PROJECTS';  //added text to projects
    leftAddBtn.textContent = 'Add Projects';
    leftSide.appendChild(h2); // appended left heading
    leftSide.appendChild(hr); // appended left horizontal line
    leftSide.appendChild(leftBtnDiv);
    leftBtnDiv.appendChild(leftAddBtn); 


    //DOM of right side
    const rightSide = document.getElementById('right-side');
    const rightDiv = document.createElement('div');
    const rightBtnDiv = document.createElement('div');
    const projectName = document.createElement('h3');
    const rightAddBtn = document.createElement('button');
    const rightDeleteProject = document.createElement('button');
    rightDeleteProject.classList.add('btn', 'btn-outline-danger', 'right-delete-btn');
    rightDeleteProject.textContent = 'Delete Project';
    const hrLine = document.createElement('hr');    
    projectName.classList.add('project-name');
    rightBtnDiv.classList.add('rightBtnDiv');
    hrLine.classList.add('right-hr');
    rightDiv.classList.add('right-div');
    projectName.textContent = 'Project Name';
    rightAddBtn.classList.add('btn', 'btn-outline-light', 'right-addbtn');
    rightAddBtn.textContent = 'Add Task';
    rightSide.appendChild(rightDiv);
    rightDiv.appendChild(projectName);
    rightDiv.appendChild(rightBtnDiv);
    rightBtnDiv.appendChild(rightDeleteProject);
    rightBtnDiv.appendChild(rightAddBtn);
    rightSide.appendChild(hrLine);


    rightDeleteProject.addEventListener('click', function(){deleteProjectFunctionality()});
    leftAddBtn.addEventListener('click', function(){projectPopup()});
    rightAddBtn.addEventListener('click', function(){listPopup()});
}

    export default UI;