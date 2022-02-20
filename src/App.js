import './App.css';
import React, {useState, useEffect} from "react";
import CardList from './Components/CardList.js'
import SearchBox from './Components/SearchBox.js'
import Scroll from './Components/Scroll';
import ErrorBoundary from './Components/ErrorBoundary.js';

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [date, setDate] = useState(new Date());
    const [count, setCount] = useState(0);

    useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(res => res.json())
                .then(users => setRobots(users));
            console.log(robots);
    },[]);

    const onSearchChange = (e) => {
        setSearchField(e.target.value);
    };

    const filterRobots = robots.filter(users => {
        return users.username.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ?
        (
            <div className={"App"}>
                <h1 className={"loading"}>Loading....</h1>
            </div>
        ) :
        (
            <div className="App">
                <h1>ROBOFRIENDS</h1>
                <h2>It is: {date.toLocaleTimeString()}</h2>
                <button onClick={() => setCount(count+1)}>CLICK ME!</button>
                <div>{count}</div>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filterRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
}

export default App;
