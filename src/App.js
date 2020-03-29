import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(state) {
    super(state);

    this.state = {
      monsters : []
    }
  }

  /**
   * Wird aufgerufen bevor eine Component in den DOM geladen wird.
   * Lädt alle Monster mittels fetch und updated den state
   * @returns {*}
   */
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters: users}))
  }

  render() {
    return (
        <div className="App">
          {
            this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
          }
        </div>
    );
  }
}

export default App;
