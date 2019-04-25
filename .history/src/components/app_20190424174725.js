import React from 'react';
import ReactDOM from 'react-dom';

let MyLoginComponent = React.createClass({
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