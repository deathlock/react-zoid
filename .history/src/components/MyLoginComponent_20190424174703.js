import React from 'react';
import ReactDOM from 'react-dom';

let MyLoginComponent = React.createClass({
    let login = () => {
        setTimeout(() => {
            this.props.onLogin(this.state.email);
        }, 2000);
    };
    
    getInitialState() {
        return { email: this.props.prefilledEmail };
    },
    render() {
    }
});

ReactDOM.render(
    <MyLoginComponent />,
    document.querySelector('#container')
);