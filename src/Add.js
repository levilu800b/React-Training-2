import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Add extends React.Component {
  constructor(props){
    super (props)
    this.state={
      id: 0,
      description: "",
      completed: false
    }
  }

  handleChange(event) {
    const newState = {};
    if (event.target.name === 'completed') {
      newState[event.target.name] = !this.state.completed;
    } else {
      newState[event.target.name] = event.target.value;
    }
    this.setState(newState);
  }

  submitHandler(event) {
    event.preventDefault();
    this.props.onsubmit(this.state.id, this.state.description, this.state.completed);
    this.setState({
      id: 0,
      description: "",
      completed: false
    })
  }

  render() {
    return (
      <>
        <Form onSubmit={(e) => this.submitHandler(e)} >
          <Form.Group controlId="taskID">
            <Form.Label>Task ID</Form.Label>
            <Form.Control name="id" type="number" value={this.state.id} onChange={(e) => this.handleChange(e)} />
          </Form.Group>

          <Form.Group controlId="taskDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control name="description" type="text" value={this.state.description} placeholder="Description" onChange={(e) => this.handleChange(e)} />
          </Form.Group>
          <Form.Group controlId="complete">
            <Form.Check name="completed" type="checkbox" checked={this.state.completed} label="Complete" onChange={(e) => this.handleChange(e)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
  </Button>
        </Form>
      </>
    );
  }

}
export default Add;

