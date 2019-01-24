import React, { Component } from 'react';
import './CompleteTable.css';
import TableRows from './TableRows.js';
import { test1, test2 } from './fakeData1';
import test3 from './fakeData3';
import test4 from './fakeData4';

class CompleteTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            table1data1 : test1,
            table1data2 : test3,
            table2data1 : test2,
            table2data2 : test4,
            open       : false,
            close      : false
        }
        console.log(this.state.table1data);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);
    }
    handleClickOpen() {
        console.log("Button clicked open");
        this.setState(state => ({
            open : true,
            close : true
        }));
    }
    handleClickClose() {
        this.setState(state => ({
            open : false,
            close : false
        }));
    }
    render() {
        return(
            <div>
            <div id="top_bar" className="row mb-2 mt-2">
                <div className="align-self-left col-sm-6">
                  <button type="button" className="btn btn-light" onClick={this.handleClickOpen}>Open Incidents</button>
                  <button type="button" className="btn btn-light" onClick={this.handleClickClose}>Closed Incidents</button>
                </div>
                <div className="input-group sm-3 col-sm-6">
                  <input type="text" className="form-control form-rounded" placeholder="Search Incident box" aria-label="Search" aria-describedby="basic-addon2"/>
                </div>
            </div>
            <div className="table-responsive-sm mt-2 mb-2">
                <table className="table">
                  <thead>
                    <tr>
                      <td scope="col">Serial No.</td>
                      <td scope="col">Reference No.</td>
                      <td scope="col">Created Time</td>
                      <td scope="col">Updated Time</td>
                      <td scope="col">Subject</td>
                      <td scope="col">Source</td>
                    </tr>
                  </thead>
                  <thead>
                    <td colspan="6">
                        <div className="collapsible-divider col-sm-12">
                            <button type="button" class="btn btn-outline-light btn-sm">
                                <i class="fa fa-caret-down" aria-hidden="true"></i> Date: Today
                            </button>                    
                          </div>
                    </td>
                  </thead>   
                {this.state.open
                 ? <tbody>{this.state.table1data1.map((person, i) => <TableRows key = {i} data = {person} />)}</tbody>
                 : <tbody>{this.state.table1data2.map((person, i) => <TableRows key = {i} data = {person} />)}</tbody>} 
                  <thead>
                    <td colspan="6">
                        <div className="collapsible-divider col-sm-12">
                            <button type="button" class="btn btn-outline-light btn-sm">
                                <i class="fa fa-caret-down" aria-hidden="true"></i> Date: Yesterday
                            </button>                    
                          </div>
                    </td>
                  </thead>        
                {this.state.close
                 ? <tbody>{this.state.table2data1.map((person, i) => <TableRows key = {i} data = {person} />)}</tbody>
                 : <tbody>{this.state.table2data2.map((person, i) => <TableRows key = {i} data = {person} />)}</tbody>} 
                </table>
            </div>
        </div>
        );
    }
}

export default CompleteTable;
