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
// - edit: when the panel is in edit mode or not

const tasks = [{
    key:1,
    taskName:"Mature Plan",
    taskOpen:true,
    taskMinimize:false,
    taskMaximize:false,
    component: <MatureTask/>,
    edit:false,
}
//     },{
//     key:2,
//     taskName:"Mature Plan SDO",
//     taskOpen:true,
//     taskMinimize:false,
//     taskMaximize:false,
//     component:<MatureTask/>
// }
];


class TaskBar extends Component {

    constructor(){
        super();

        this.state = {
            tasks:[],
            panels:[],
            showList:false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            showList:!this.state.showList
        })
    }

    componentDidMount(){
        this.setState({tasks});
    }
    
  
      

  render() {
      let hide = 'hide';
      var m = 'taskminimized';
      if(this.state.showList == true){
          hide = '';
          m = '';
      }
    return (
      <div className="taskbar">
        <div className="tasks">

            {/* Each task map to a Task Component */}
            {this.props.tasks.map((task) => {
                 if(task.taskOpen){
                    return (
                    
                            <Task key={task.key} name={task.taskName} task={task} handleClick={this.props.minimize}/>
                        
                    )
                }
            })}
        </div>
        <div className={`menubutton ${m}`} >
            <h3 onClick={this.handleClick}>Search Tools <i className="fa fa-windows" aria-hidden="true"></i></h3>
            <div className={`menu ${hide}`}>
                <ul>
                    <li>Tutorial</li>
                {this.state.tasks.map((task) => (
                    <li key={task.key} onClick={this.props.create.bind(this,task)}>{task.taskName}</li>
                ))}
                </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default TaskBar;
