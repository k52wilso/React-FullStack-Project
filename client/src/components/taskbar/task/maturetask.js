import React, { Component } from 'react';
import './taskPanel.css';
import Schools from '../../../testdata/schools.json';

// Helper Functions

//Set all properities to object blank 
const setBlank = (obj) => {
    let keys = Object.keys(obj);
    keys.map((key) => obj[key] = "" );
    return obj;
};

// This class is the component that will be seen when a task of 'Mature Plan is created';
class MatureTask extends Component {

    
  constructor(){
      super()

      this.state = {
          schools:[],
          account:{ // Create blank to fill panel
            account_id:"",
            sin:"",
            bene_name:"",
            member_name:"",
            second_name:"",
            address:"",
            status:"",
            school_name:"",
            school_status:"",
          },
          accounts:[]
      };

      this.getAccount = this.getAccount.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.addNew = this.addNew.bind(this);
  }

//Takes the testdata and creates a list of schools   
  async componentDidMount(){
    const schools = Schools.schools.slice(0,30);
    // Get accounts
    let res = await fetch('/accounts');
    let json = await res.json();

    this.setState({
        schools:schools,
        accounts: json
    });
  }

// Get user
getAccount(e){
    if(e.target.value == 'none'){
        return;
    }
    let url = '/account';
    fetch(url, {
        method: 'POST', // or 'PUT'
        credentials:'include',
        body: JSON.stringify({account_id:e.target.value}), 
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {

        //Update the view
        this.setState({
            account:response
        })
      });
}  

//Sets the account object in state blank
addNew(){
    let account = setBlank(Object.assign({},this.state.account));
    this.setState({account});
}

// on change update the value 

handleChange(key,element){
    
    //Find match of key and return it
    let account = Object.assign({},this.state.account);
    account[key] = element.currentTarget.value;
    this.setState({account});
}
      

  render() {
    const { schools } = this.state;
    const { account } = this.state;
    const { accounts } = this.state;
    return (
      <div className="container-fluid">
        <form>

            {/* CRUD buttons */}
        <div className="row-fluid">
            <button type="button" title="Create" className="crud-button" onClick={() => {this.props.add.bind(this,this.props.panel); this.addNew();}}><i className="fa fa-plus" aria-hidden="true"></i></button>        
            <button type="button" title="Edit"   className="crud-button" onClick={this.props.edit.bind(this,this.props.panel)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
            <button type="button" title="Delete" className="crud-button"><i className="fa fa-trash" aria-hidden="true"></i></button>
            
        </div>
           <div className="row-fluid">
                {/* Beneficiary's info that cannot be altered unless you are a manager */}
                <div className="col-sm-3">
                    <label className="label">AccountID</label>
                    <input type="text" id="account_id" name="account_id" className="input disabled" value={account.account_id} onChange={this.handleChange.bind(this,"account_id")} readOnly/>
                </div>
                <div className="col-sm-3">
                    <label className="label">SIN</label>
                    <input type="text" name="sin" className="input disabled" value={account.sin} onChange={this.handleChange.bind(this,"sin")} readOnly/>
                </div>
                <div className="col-sm-6">
                    <label className="label">Beneficary's Name</label>
                    <input type="text" name="bene_name" className="input disabled" value={account.bene_name} onChange={this.handleChange.bind(this,"bene_name")} readOnly/>
                </div>
           </div>
           <div className="row-fluid">
                {/* Member names */}
                <div className="col-sm-3">
                    <label className="label">1st Member's Name</label>
                    <input type="text" name="member_name" className="input disabled" value={account.member_name} onChange={this.handleChange.bind(this,"member_name")} readOnly/>
                </div>
                <div className="col-sm-3">
                    <label className="label">2nd Member's Name</label>
                    <input type="text" name="second_name" className="input disabled" value={account.second_name} onChange={this.handleChange.bind(this,"second_name")} readOnly/>
                </div>
                <div className="col-sm-6">
                    <label className="label">Address</label>
                    <input type="text" name="address" value={account.address} className="input disabled" onChange={this.handleChange.bind(this,"address")} readOnly/>
                </div>
           </div>
           <div className="row-fluid">
                {/* Account Status */}
                <div className="col-sm-6">
                    <label className="label">Account Status</label>
                    <select name="status" className="select disabled" onChange={this.handleChange.bind(this,"status")} disabled>
                        <option value="none"></option>                        
                        <option value="is">IS - In School</option>
                        <option value="rejected">R - Rejected</option>
                        <option value="approved">A - Approved</option>
                    </select>
                </div>
                {/* School Information: only visible when 'IS' is selected */}
                <div className="col-sm-6">
                    <div className="school-section">
                    <label className="label">School Name</label>
                    <select name="school_name" className="select disabled" onChange={this.handleChange.bind(this,"school_name")} disabled>
                        <option value="none"></option>  
                        {schools.map((school) => (
                            <option key={school.name} value={school.name}>{school.name}</option>
                        ))}
                    </select>
                    <label className="label">Enrolment Status</label>
                    <select name="school_status" className="select disabled" onChange={this.handleChange.bind(this,"school_status")} disabled>
                        <option value="none"></option>  
                        <option value="full-time">Full-Time</option>
                        <option value="part-time">Part-Time</option>
                    </select>
                    </div>
                </div>
           </div>
           <div className="row-fluid">
                {/* Submit and Cancel button */}
                <div className="col-sm-6">
                    <button type="button" className="button">Submit</button>
                    <button type="button" className="button" onClick={this.props.close}>Cancel</button>
                </div>
                <div className="col-sm-6">
                    <h4 className="white-title">Find Account:</h4>
                    <select id="find_account" className="select" onChange={this.getAccount.bind(this)}>
                        <option value="none">None</option>
                        {accounts.map((account) => (
                            <option key={account.account_id} value={account.account_id}>{account.bene_name}- ({account.account_id})</option>
                        ))}
                    </select>
                </div>
           </div>
        </form>
      </div>
    );
  }
}




export default MatureTask;
