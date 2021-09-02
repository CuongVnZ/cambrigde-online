import React, { Component } from 'react'
import Axios from "axios";

class Register extends Component{ 

    state = { 
        registerUsername: "",
        registerPassword: ""
    }
    
    register = () => {
        Axios({
        method: "POST",
        data: {
            username: this.state.registerUsername,
            password: this.state.registerPassword,
        },
        withCredentials: true,
        url: "http://localhost:4000/register",
        }).then((res) => console.log(res));
    };

    render(){
        return(
            <div align="center">
            <h1>Register</h1>
            <input
                placeholder="username"
                onChange={(e) => this.setState({ registerUsername: e.target.value })}
            />
            <input
                placeholder="password"
                onChange={(e) => this.setState({ registerPassword: e.target.value })}
            />
            <button onClick={this.register}>Submit</button>
        </div>
        )
    }
}

export default Register;