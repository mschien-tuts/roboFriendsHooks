import React, {Component} from "react";


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true});
    }

    render() {
        return (this.state.hasError) ?
            (
                <div>
                    <h1>THERE WAS AN ERROR</h1>
                </div>
            ) : this.props.children
    }

}

export default ErrorBoundary;