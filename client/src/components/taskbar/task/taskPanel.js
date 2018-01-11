import React, { Component } from 'react';
import './taskPanel.css';

// This class is the component that will be seen in viewport
class TaskPanel extends Component {

    constructor(){
        super();
        this.state = {
            task:{}
        };

       
    }


    // Sets the task based by parent component
    componentDidMount(){
        let task = this.props.task;
        this.setState({task});
    }

    
    

      

  render() {
    const { task } = this.state;
    return (
      <div className="panel resize-drag" key={task.key}>
        <div className="panel-title" onMouseDown={this.movePanel}>
            <h4>{task.taskName}</h4>
            <div className="panel-min-button">
                _
            </div>
            <div className="panel-max-button">
                &lt;&gt;  
            </div>
            <div className="panel-close-button">
                X
            </div>
        </div>
      </div>
    );
  }
}

export default TaskPanel;
