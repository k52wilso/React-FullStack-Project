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

        this.bringFront = this.bringFront.bind(this);
    }

    // Bring panel to the front
    bringFront(e){

        
        let panels = document.getElementsByClassName('panel');
        
        //Push all panels back
        for(let i = 0 ; i < panels.length ;i++){
            panels[i].style.zIndex = 0;
        }

        //Bring necessary one forward
        e.currentTarget.style.zIndex = 1;

    }

    


  render() {
    const { task } = this.props;
    return (
      
        
        <div className="panel resize-drag" key={task.key} id={ "panel" + task.key} onClick={this.bringFront.bind(this)}>
        
            <div className="container-fluid panel-title" >
                <h4>{task.taskName}</h4>
                <div className="panel-close-button" onClick={this.props.close}>
                    <i className="fa fa-window-close-o" aria-hidden="true"></i>
                </div>
                <div className="panel-max-button">
                    <i className="fa fa-window-maximize" aria-hidden="true"></i> 
                </div>
                <div className="panel-min-button" onClick={this.props.minimize}>
                    <i className="fa fa-window-minimize" aria-hidden="true"></i>
                </div>
            </div>
            <div className="inner">
                <MatureTask panel={task.key} close={this.props.close} add={this.props.add} edit={this.props.edit}/>
            </div>
        </div>
        
     
        
    );
  }
}

export default TaskPanel;
