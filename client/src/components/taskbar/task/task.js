import React, { Component } from 'react';


// This class is the component that will be clicked in taskbar
class Task extends Component {

    
  
      

  render() {
    return (
      <div className="task">
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default Task;
