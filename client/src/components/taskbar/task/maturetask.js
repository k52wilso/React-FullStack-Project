import React, { Component } from 'react';
import './taskPanel.css';
import Schools from '../../../testdata/schools.json';

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
    console.log(e.target.value);
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
      

  render() {
    const { schools } = this.state;
    const { account } = this.state;
    const { accounts } = this.state;
    return (
      <div className="container-fluid">
        <form>
           <div className="row-fluid">
                {/* Beneficiary's info that cannot be altered unless you are a manager */}
                <div className="col-sm-3">
                    <label className="label">AccountID</label>
                    <input type="text" name="account_id" className="input disabled" value={account.account_id} disabled/>
                </div>
                <div className="col-sm-3">
                    <label className="label">SIN</label>
                    <input type="text" name="sin" className="input disabled" value={account.sin} disabled/>
                </div>
                <div className="col-sm-6">
                    <label className="label">Beneficary's Name</label>
                    <input type="text" name="bene_name" className="input disabled" value={account.bene_name} disabled/>
                </div>
           </div>
           <div className="row-fluid">
                {/* Member names */}
                <div className="col-sm-3">
                    <label className="label">1st Member's Name</label>
                    <input type="text" name="member_name" className="input disabled" value={account.member_name} disabled/>
                </div>
                <div className="col-sm-3">
                    <label className="label">2nd Member's Name</label>
                    <input type="text" name="second_name" className="input disabled" value={account.second_name} disabled/>
                </div>
                <div className="col-sm-6">
                    <label className="label">Address</label>
                    <input type="text" name="address" value={account.address} className="input disabled" disabled/>
                </div>
           </div>
           <div className="row-fluid">
                {/* Account Status */}
                <div className="col-sm-6">
                    <label className="label">Account Status</label>
                    <select name="status" className="select disabled" disabled>
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
                    <select name="school_name" className="select disabled" disabled>
                        <option value="none"></option>  
                        {schools.map((school) => (
                            <option key={school.name} value={school.name}>{school.name}</option>
                        ))}
                    </select>
                    <label className="label">Enrolment Status</label>
                    <select name="school_status" className="select disabled" disabled>
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
