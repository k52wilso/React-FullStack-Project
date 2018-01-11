import React, { Component } from 'react';
import './taskbar.css';
import Task from './task/task';
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
const tasks = [{
    key:1,
    taskName:"Mature Plan",
    taskOpen:true,
    taskMinimize:true,
    taskMaximize:false,
},{
    key:2,
    taskName:"Mature Plan SDO",
    taskOpen:true,
    taskMinimize:true,
    taskMaximize:false,
}];

class TaskBar extends Component {

    constructor(){
        super();

        this.state = {
            tasks:[],
            panels:[],
        }

        
    }

    // Set the state of tasks 
    componentDidMount(){
        this.setState({tasks});
        tasks.map((task) => {
           return(this.props.create(task));
        });
    }
  
      

  render() {
      const { tasks } = this.state;
    return (
      <div className="taskbar">
        <div className="tasks">

            {/* Each task map to a Task Component */}
            {tasks.map((task) => {
                return (
                    <Task key={task.key} name={task.taskName}/>
                )
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
