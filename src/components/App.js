import React, { Component } from "react";
import { connect } from 'react-redux';
import { dispatchStartApp } from './actions';

import '../styles/App.css';

class App extends Component {

    testAction = (route) => {
        console.log(route)
        this.props.dispatchStartApp(route);
    }

    render() {
        return (
            <div>
                <h1>YT</h1>
                <button onClick={() => this.testAction("success")}>trigger success</button>
                <button onClick={() => this.testAction("error")}>trigger reject</button>
                <pre>
                    {
                        JSON.stringify(this.props)
                    }
                </pre>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    dispatchStartApp: (route) => dispatch(dispatchStartApp(route))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);