import React, { Component } from 'react';
import TaskBar from '../../components/taskbar/taskbar.js';
import TaskPanel from '../../components/taskbar/task/taskPanel.js';
import MatureTask from '../../components/taskbar/task/maturetask';
import MatureSDOTask from '../../components/taskbar/task/maturesdotask';
import update from 'immutability-helper';
import {Link} from 'react-router-dom';



class MainScreen extends Component {

    constructor(){
      super()

      this.addPanel = this.addPanel.bind(this);
      this.closePanel = this.closePanel.bind(this);
      this.minimize = this.minimize.bind(this);
      
    }

    state = {
      panels:[]
    }

    

    

    //Add a panel 
    addPanel(panel){

      let index = this.state.panels.findIndex((p) => {return p.key == panel.key;});

      if(index == -1){ //Create singleton pattern

      

       // get new state after add new panel
       let newPanels = update(this.state,{panels: {$push: [panel]}});
       
       
       this.setState({
         panels:newPanels.panels
       })

      }
    }
  
    //Minimizes (or unminimize) the panel 
    minimize(panel){
      
      // Find the index of given panel
      let index = this.state.panels.findIndex((p) => {return p.key == panel.key;});
      
      // get new state after changing panel's state
      let newPanels = update(this.state,{panels: {[index]: {taskMinimize: {$set: !panel.taskMinimize }} } });
      
      this.setState({
        panels:newPanels.panels
      })
    }

    
      
    //Close the given panel
    closePanel(panel){
      // Find the index of given panel
      let index = this.state.panels.findIndex((p) => {return p.key == panel.key;});
      
      // get new state after changing panel's state
      let newPanels = update(this.state,{panels: {$splice: [[index, 1]]} });
      
      this.setState({
        panels:newPanels.panels
      })
    }

  render() {
    const baseUrl = process.env.PUBLIC_URL; 
    return (
      <div className="main">
        <div className="viewport resize-container">
        <h2>Data Processing Software <Link to={baseUrl + "/"}>(logout)</Link></h2>
        {this.state.panels.map((panel) => {
            if(panel.taskOpen && !panel.taskMinimize){
              return (
                
                 <TaskPanel key={panel.key} task={panel} minimize={this.minimize.bind(this,panel)} close={this.closePanel.bind(this,panel)}/>              
               
             ) 
            }
          })}
        </div>
        <TaskBar create={this.addPanel} tasks={this.state.panels} minimize={this.minimize}/>
      </div>
    );
  }
}

export default MainScreen;
