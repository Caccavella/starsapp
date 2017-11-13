import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className="loginwrapper">
                <div className="starsimage"><img alt="background stars" src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/moving-through-stars-in-space_-1zccenlb__F0000.png"/></div>
                <div className="sitetitle">Constellation Competition
                <div className="sitesub">Reach for the stars</div>
                </div>
                <div className="login">
                    <a href="http://localhost:3005/login" className="loginlink" >Login</a>
                </div>
            </div>
        )
    }
}

export default Login;