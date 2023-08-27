import UI from "./initialDom";
import { logic } from "./logic";
import { projectUlList, taskList } from "./projectAndTaskList";


function initialLoad(){

    UI();
    logic();
    taskList();
    projectUlList();
}
initialLoad();