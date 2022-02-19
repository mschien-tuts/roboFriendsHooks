import './Hello.css';
import React, {Component} from "react";

class Hello extends Component {
    render() {
        return (
            <div className="Hello">
                <h1>HELLO WORLD</h1>
                <h2>{this.props.greeting}</h2>
            </div>
        );
    };
}

export default Hello;