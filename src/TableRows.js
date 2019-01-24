import React, { Component } from 'react';

class TableRows extends React.Component {
  render() {
    return(
      <tr>
        <td>{this.props.data.serial_no}</td>
        <td>{this.props.data.reference_no}</td>
        <td>{this.props.data.created_time}</td>
        <td>{this.props.data.updated_time}</td>
        <td>{this.props.data.subject}</td>
        <td>{this.props.data.source}</td>
      </tr>
    );
  }
}

export default TableRows;
