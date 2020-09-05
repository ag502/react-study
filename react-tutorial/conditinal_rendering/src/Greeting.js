import React from 'react'

const UserGreeting = (props) => {
    return <h1>Welcome back!</h1>
}

const GuestGreeting = (props) => {
    return <h1>Please sign up.</h1>
}

const Greeting = ({isLoggedIn}) => {
    if (isLoggedIn) {
        return <UserGreeting/>
    } else {
        return <GuestGreeting/>
    }
}

export default Greeting