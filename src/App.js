import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './TopBar.js';
import CompleteTable from './CompleteTable.js';

class App extends React.Component {
    render() {
        return(
            <div className="container">
                <CompleteTable />
            </div>
        );
    }
}

export default App;
