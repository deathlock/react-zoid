import React from 'react';

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