import React from 'react';

class MyLoginComponent extends React.Component {
    getInitialState() {
        return { email: this.props.prefilledEmail };
    }
    
    render() {
    }

}

export default MyLoginComponent;