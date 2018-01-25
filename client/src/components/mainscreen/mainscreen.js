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
      this.edit = this.edit.bind(this);
      this.addAccount = this.addAccount.bind(this);
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

    //Set Panel to add 
    addAccount(panel,id){
      
      // Find the index of given panel
      let index = this.state.panels.findIndex((p) => {return p.key == panel.key;});
      
      // get new state after changing panel's state
      let newPanels = update(this.state,{panels: {[index]: {edit: {$set: true }} } });
      
      //Find element in DOM and alter all children inputs/select
      let panelDOM = document.getElementById('panel' + id);

      let inputs = panelDOM.querySelectorAll('input:not(#account_id)');
      let selects = panelDOM.querySelectorAll('select:not(#find_account)');

      // if true make uneditable
      
         for(let i = 0; i < inputs.length ; i++){
           inputs[i].classList.remove('disabled');
           inputs[i].removeAttribute('readonly','');
         }
          for(let j = 0; j < selects.length ; j++){
            selects[j].classList.remove('disabled');
            selects[j].removeAttribute('disabled','');
          }
      


      this.setState({
        panels:newPanels.panels
      })
    }

    //Set Edit for the panel
    edit(panel,id){
      
      if(document.getElementById('account_id').value == ""){
        alert('please select an account to edit');
        return ;
      }

      // Find the index of given panel
      let index = this.state.panels.findIndex((p) => {return p.key == panel.key;});
      
      // get new state after changing panel's state
      let newPanels = update(this.state,{panels: {[index]: {edit: {$set: !panel.edit }} } });
      
      //Find element in DOM and alter all children inputs/select
      let panelDOM = document.getElementById('panel' + id);

      let inputs = panelDOM.querySelectorAll('input:not(#account_id)');
      let selects = panelDOM.querySelectorAll('select:not(#find_account)');

      // if true make uneditable
      if(panel.edit == true){
        for(let i = 0; i < inputs.length ; i++){
          inputs[i].classList.add('disabled');
          inputs[i].setAttribute('readonly','');
        }
         for(let j = 0; j < selects.length ; j++){
           selects[j].classList.add('disabled');
           selects[j].setAttribute('disabled','');
         }
      }else{
         for(let i = 0; i < inputs.length ; i++){
           inputs[i].classList.remove('disabled');
           inputs[i].removeAttribute('readonly','');
         }
          for(let j = 0; j < selects.length ; j++){
            selects[j].classList.remove('disabled');
            selects[j].removeAttribute('disabled','');
          }
      }


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
                
                 <TaskPanel key={panel.key} task={panel} minimize={this.minimize.bind(this,panel)} add={this.addAccount.bind(this,panel)} edit={this.edit.bind(this,panel)} close={this.closePanel.bind(this,panel)}/>              
               
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
