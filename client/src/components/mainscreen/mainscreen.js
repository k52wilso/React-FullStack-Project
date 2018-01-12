import React, { Component } from 'react';
import TaskBar from '../../components/taskbar/taskbar.js';
import TaskPanel from '../../components/taskbar/task/taskPanel.js';
import MatureTask from '../../components/taskbar/task/maturetask';
import MatureSDOTask from '../../components/taskbar/task/maturesdotask';

const tasks = [{
  key:1,
  taskName:"Mature Plan",
  taskOpen:true,
  taskMinimize:true,
  taskMaximize:false,
  component: <MatureTask/>}];

class MainScreen extends Component {

    constructor(){
      super()

      this.addPanel = this.addPanel.bind(this);
      this.closePanel = this.closePanel.bind(this);
    }

    state = {
      panels:[]
    }

    addPanel(panel){
      const { panels } = this.state;
      panels.push(panel);
      this.setState({panels});
    }
  
    componentDidMount(){
      this.setState({
        panels:tasks
      })
    }
      
    //Close the given panel
    closePanel(panel,element){

      panel.taskOpen = false;

    }

  render() {
    return (
      <div className="main">
        <div className="viewport resize-container">
        {this.state.panels.map((panel) => {
            if(panel.taskOpen){
              return (
                
                 <TaskPanel key={panel.key} task={panel} close={this.closePanel.bind(this,panel)}/>              
               
             ) 
            }
          })}
        </div>
        <TaskBar create={this.addPanel} tasks={this.state.panels}/>
      </div>
    );
  }
}

export default MainScreen;
