import React, {Component} from 'react';
import './App.css';
import {CardListComponent} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {
    constructor(state) {
        super(state);

        this.state = {
            monsters: [],
            searchField: ''
        }

    }

    updateSearchString = (searchValue) => {
        this.setState({searchField: searchValue});
    };

    /**
     * Wird aufgerufen bevor eine Component in den DOM geladen wird.
     * Lädt alle Monster mittels fetch und updated den state
     * @returns {*}
     */
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters: users}))
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <SearchBox placeHolder='Search Monsters'
                           handleChange={this.updateSearchString}/>
                <CardListComponent monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
