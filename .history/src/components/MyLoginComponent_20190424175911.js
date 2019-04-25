import React from 'react';

class MyLoginComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    getInitialState() {
        return { email: this.props.prefilledEmail };
    }

    render() {
        return (

        )
        
    }

}

export default MyLoginComponent;