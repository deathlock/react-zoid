import React from 'react';

class MyLoginComponent extends React.Component {
    getInitialState() {
        return { email: this.props.prefilledEmail };
    }

    render() {
        <form>
            <input
                placeholder='email'
                defaultValue={this.state.email}
                onChange={event =>
                    this.setState({ email: event.target.value })
                }
            ></input>
            <br />
            <input
                placeholder='password' type='password'
                onChange={event =>
                    this.setState({ password: event.target.value })
                }
            ></input>
            <br />
            <button
                className='btn btn-primary'
                onClick={login}> Log In
        </button>
        </form>
    }

}

export default MyLoginComponent;