import React, { Component } from 'react';
import TaskBar from '../../components/taskbar/taskbar.js';
import TaskPanel from '../../components/taskbar/task/taskPanel.js';

class MainScreen extends Component {

    constructor(){
      super()

      this.addPanel = this.addPanel.bind(this);
    }

    state = {
      panels:[]
    }
  
    // Adds a Panel to viewport
    addPanel(panel){
      const panels = this.state.panels;
      panels.push(panel);
      this.setState({panels});
    }
      

  render() {
    const { panels } = this.state;
    return (
      <div className="main">
        <div className="viewport resize-container">
          {panels.map((panel) => (
            <TaskPanel task={panel}/>
          ))}
        </div>
        <TaskBar create={this.addPanel} />
      </div>
    );
  }
}

export default MainScreen;
