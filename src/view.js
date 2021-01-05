import React from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';

class View extends React.Component {
  
  buildRows() {
    return this.props.todos.map((current) => (
      <tr key={current.id}>
        <td>
          {current.id}
        </td>
        <td>
          {current.task}
        </td>
        <td>
          {current.complete ? "yes" : "no"}
        </td>
      </tr>
    )
    )
  }


  render() {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>complete</th>
            </tr>
          </thead>
          <tbody>
            {this.buildRows()}
          </tbody>
        </Table>
      </>
    );
  }

}
export default View;
