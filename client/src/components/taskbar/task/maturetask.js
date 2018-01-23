import React, { Component } from 'react';
import './taskPanel.css';
import Schools from '../../../testdata/schools.json';

// This class is the component that will be seen when a task of 'Mature Plan is created';
class MatureTask extends Component {

    
  constructor(){
      super()

      this.state = {
          schools:[]
      }
  }

//Takes the testdata and creates a list of schools   
  componentDidMount(){
    const schools = Schools.schools.slice(0,30);
    this.setState({schools});
  }
      

  render() {
    const { schools } = this.state;
    return (
      <div className="container-fluid">
        <form>
           <div className="row-fluid">
                {/* Beneficiary's info that cannot be altered unless you are a manager */}
                <div className="col-sm-3">
                    <label className="label">AccountID</label>
                    <input type="text" name="account_id" className="input disabled" value="000001" disabled/>
                </div>
                <div className="col-sm-3">
                    <label className="label">SIN</label>
                    <input type="text" name="sin" className="input disabled" value="111 111 111" disabled/>
                </div>
                <div className="col-sm-6">
                    <label className="label">Beneficary's Name</label>
                    <input type="text" name="bene_name" className="input disabled" value="Michael Doe" disabled/>
                </div>
           </div>
           <div className="row-fluid">
                {/* Member names */}
                <div className="col-sm-3">
                    <label className="label">1st Member's Name</label>
                    <input type="text" name="member_name" className="input disabled" value="John Doe" disabled/>
                </div>
                <div className="col-sm-3">
                    <label className="label">2nd Member's Name</label>
                    <input type="text" name="second_name" className="input disabled" value="Samantha Doe" disabled/>
                </div>
                <div className="col-sm-6">
                    <label className="label">Address</label>
                    <input type="text" name="address" value="6 Dearly Lane" className="input disabled" disabled/>
                </div>
           </div>
           <div className="row-fluid">
                {/* Account Status */}
                <div className="col-sm-6">
                    <label className="label">Account Status</label>
                    <select name="status" className="select disabled">
                        <option value="is">IS - In School</option>
                        <option value="rejected">R - Rejected</option>
                        <option value="approved">A - Approved</option>
                    </select>
                </div>
                {/* School Information: only visible when 'IS' is selected */}
                <div className="col-sm-6">
                    <div className="school-section">
                    <label className="label">School Name</label>
                    <select name="school_name" className="select disabled">
                        {schools.map((school) => (
                            <option key={school.name} value={school.name}>{school.name}</option>
                        ))}
                    </select>
                    <label className="label">Enrolment Status</label>
                    <select name="school_status" className="select disabled">
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
           </div>
        </form>
      </div>
    );
  }
}




export default MatureTask;
