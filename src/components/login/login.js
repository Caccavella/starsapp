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
                <div className="starsimage"><img src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/moving-through-stars-in-space_-1zccenlb__F0000.png"/></div>
                <div className="sitetitle">Constellation Competition
                <div className="sitesub">Reach for the stars</div>
                </div>
                <div className="login">
                    <a href={process.env.REACT_APP_LOGIN} className="loginlink" >Login</a>
                </div>
            </div>
        )
    }
}

export default Login;