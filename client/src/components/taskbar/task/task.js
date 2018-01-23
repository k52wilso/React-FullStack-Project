import React, { Component } from 'react';
import '../../taskbar/taskbar.css';

// This class is the component that will be clicked in taskbar
class Task extends Component {

    
  
      

  render() {
    var m = 'taskminimized';
    if(this.props.task.taskMinimize == false){
      m = '';
    }
    return (
      <div className={`task ${m}`} onClick={this.props.handleClick.bind(this,this.props.task)}> 
      {this.props.task && 
        <div >
        <h3>{this.props.name}</h3>
      </div>
      }
      </div>
    );
  }
}

export default Task;
