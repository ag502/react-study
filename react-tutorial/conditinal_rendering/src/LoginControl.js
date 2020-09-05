import React, {Component} from 'react';
import Greeting from "./Greeting";

const LoginButton = (props) => {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

const LogoutButton = (props) => {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

export default class LoginControl extends Component {
    state = {
        isLoggedIn: false
    }

    handleLoginClick = () => {
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick = () => {
        this.setState({isLoggedIn: false})
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        let button;

        if (!isLoggedIn) {
            button = <LoginButton onClick={this.handleLoginClick}/>
        } else {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        )
    }
}