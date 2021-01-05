import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import View from './view'
import Add from './Add'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listItems: [{ id: 1, task: "make static data", complete: false },
      { id: 2, task: "make dynamic data", complete: false }]
    }
  }

  updateListItems(id, task, complete){
    const listItem = {id, task, complete}
    this.setState((state) => ({
      listItems: state.listItems.concat(listItem)
    }))
  }

  render() {
    return (
      <Router>
        <Navbar bg="light" expand="md">
          <Navbar.Brand>Todo List</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">View</Link>
              <Link className="nav-link" to="/add">Add</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
        <Switch>
            <Route path="/add">
              <Add onsubmit={(id, description, completed) => this.updateListItems(id, description, completed)} />
            </Route>
            <Route exact path="/">
              <View todos={this.state.listItems} />
            </Route>
            <Route path="/">
              Error: 404 not found
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }

}

export default App;
