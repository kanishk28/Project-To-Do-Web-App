import { logic } from "./logic";
import { switchProject } from "./logic";


export function projectUlList(){
const leftSide = document.querySelector('#left-side');
const newDiv = document.createElement('div');
newDiv.classList.add('project-uldiv');
const projectUl = document.createElement('ul');
projectUl.innerHTML = '';    
leftSide.appendChild(newDiv);
projectUl.classList.add('list-group');
newDiv.appendChild(projectUl);


projectUl.addEventListener('click', function(event){
    logic();
    const target = event.target;

    

        if (event.target.classList.contains('list-x')) {
            const projectIndex = Array.from(event.target.parentElement.children).indexOf(event.target);
            switchProject(projectIndex);
        }
        console.log(buttonValue);
        console.log(projectIndexValue);
        console.log('clicked');
    })};






export function taskList(){
    const rightSide = document.getElementById('right-side');
    const rightUldiv = document.createElement('div');
    const rightUl = document.createElement('ul');
    rightUldiv.classList.add('right-task-div');
    rightUl.classList.add('right-list');
    rightSide.appendChild(rightUldiv);
    rightUldiv.appendChild(rightUl);
    


}



