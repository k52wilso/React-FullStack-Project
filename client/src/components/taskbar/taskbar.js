import React, { Component } from 'react';
import './taskbar.css';
import Task from './task/task';
import MatureTask from './task/maturetask';
import MatureSDOTask from './task/maturesdotask';
import TaskPanel from './task/taskPanel';
import ReactDOM from "react-dom";


//Helper Function to remove element
const remove = (array, element) => {
    return array.filter(e => e !== element);
}

// Tasks
// Tasks contains the following:
// - taskId: unique key
// - taskName: display name for taskbar
// - taskOpen: determines if the window is open or closed
// - taskMinimize: task is smaller sized
// - taskMaximized: task is full viewport
// - taskPosition: is a object of {xPos,yPos} denoting tasks position in view
// - component: the component that needs to be display 

// },{
//     key:2,
//     taskName:"Mature Plan SDO",
//     taskOpen:true,
//     taskMinimize:true,
//     taskMaximize:false,
//     component: () => <MatureSDOTask/>
// }];

class TaskBar extends Component {

    constructor(){
        super();

        this.state = {
            tasks:[],
            panels:[],
        }

        
    }

    
    
  
      

  render() {
      
    return (
      <div className="taskbar">
        <div className="tasks">

            {/* Each task map to a Task Component */}
            {this.props.tasks.map((task) => {
                 if(task.taskOpen){
                    return (
                    
                            <Task key={task.key} name={task.taskName} task={task}/>
                        
                    )
                }
            })}
        </div>
        <div className="menubutton">
            <h3>Search Tools</h3>
        </div>
      </div>
    );
  }
}

export default TaskBar;
