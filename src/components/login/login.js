import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className="loginwrapper">
                <div className="login">
                    <a href={process.env.REACT_APP_LOGIN} className="loginlink" >Login</a>
                </div>
            </div>
        )
    }
}

export default Login;