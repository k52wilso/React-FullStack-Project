import React, { Component } from 'react';
import './taskPanel.css';
import MatureTask from '../../taskbar/task/maturetask';

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
        
            <div className="container-fluid panel-title" >
                <h4>{task.taskName}</h4>
                <div className="panel-min-button" onClick={this.props.minimize}>
                    <i className="fa fa-window-minimize" aria-hidden="true"></i>
                </div>
                <div className="panel-max-button">
                    <i className="fa fa-window-maximize" aria-hidden="true"></i> 
                </div>
                <div className="panel-close-button" onClick={this.props.close}>
                    <i className="fa fa-window-close-o" aria-hidden="true"></i>
                </div>
            </div>
            <div className="inner">
                <MatureTask close={this.props.close}/>
            </div>
        </div>
        
     
        
    );
  }
}

export default TaskPanel;
