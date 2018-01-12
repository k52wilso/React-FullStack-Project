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

  render() {
    const { task } = this.props;
    return (
      
        
        <div className="panel resize-drag" key={task.key}>
        
            <div className="panel-title" >
                <h4>{task.taskName}</h4>
                <div className="panel-min-button">
                    _
                </div>
                <div className="panel-max-button">
                    &lt;&gt;  
                </div>
                <div className="panel-close-button" onClick={this.props.close}>
                    X
                </div>
            </div>
            <div className="inner">
                {task.component}
            </div>
        </div>
        
     
        
    );
  }
}

export default TaskPanel;
