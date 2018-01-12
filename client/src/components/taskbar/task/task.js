import React, { Component } from 'react';


// This class is the component that will be clicked in taskbar
class Task extends Component {

    
  
      

  render() {
    return (
      <div className="task">
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
