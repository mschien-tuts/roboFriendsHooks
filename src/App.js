import './App.css';
import React, {Component} from "react";
import CardList from './Components/CardList.js'
import SearchBox from './Components/SearchBox.js'
import Scroll from './Components/Scroll';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => this.setState({robots: users}));
        console.log(this.state.robots);
    };

    onSearchChange = (e) => {
        this.setState({searchField: e.target.value});
    }

    render() {
        const {robots, searchField} = this.state;
        const filterRobots = robots.filter(users => {
            return users.username.toLowerCase().includes(searchField.toLowerCase());
        })
        return !robots.length ?
            (
                <div className={"App"}>
                    <h1 className={"loading"}>Loading....</h1>
                </div>
            ) :
            (
                <div className="App">
                    <h1>ROBOFRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>
                </div>
            )
    }
}

export default App;
