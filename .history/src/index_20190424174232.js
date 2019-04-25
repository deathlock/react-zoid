import React from 'react';
import ReactDOM from 'react-dom';
import zoid from 'zoid';

let MyLoginReactZoidComponent = MyLoginZoidComponent.driver('react', {
    React: window.React,
    ReactDOM: window.ReactDOM
});

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userLoggedIn: false,
            email:        'foo@bar.com'
        };
    }

    onLogin(email) {
        console.log('User logged in with email:', email);

        this.setState({
            userLoggedIn: true,
            email:        email
        });
    }

    render() {
        return (
            <div>
                <h3>Log in on xyz.com</h3>

                <MyLoginReactZoidComponent prefilledEmail={ this.state.email } onLogin={ email => this.onLogin(email) } />

                <div id="result">{this.state.userLoggedIn ? 'User logged in with email: ' + this.state.email : ''}</div>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.querySelector('#container'));