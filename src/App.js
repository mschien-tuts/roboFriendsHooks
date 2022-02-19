import './App.css';
import React, {Component} from "react";
import {robots} from "./robots";
import CardList from './CardList.js'


class App extends Component {
    render() {
        return (
            <div className="App">
                <CardList robots={robots}/>
            </div>
        );
    }
}

export default App;
