import React, { Component } from 'react';
import './main.css';
import {Link} from 'react-router-dom';

class Main extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return(
            <div className="mainwrapper">
                <div>Profile</div>
                <div>Data</div>
                <Link to="/stars">Stars</Link>
            </div>
        )
    }
}

export default Main;