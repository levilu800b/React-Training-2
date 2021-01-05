import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import View from './view'
import Add from './Add'

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

        <Container>
          <View todos={this.state.listItems} />
          <Add onsubmit={(id, description, completed) => this.updateListItems(id, description, completed)} />
        </Container>
    );
  }

}
export default App;
