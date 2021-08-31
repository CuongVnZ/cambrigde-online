import React, { Component } from 'react'
import Axios from "axios";

class Login extends Component{ 

    state = { 
        loginUsername: "",
        loginPassword: ""
    }

    login = () => {
        Axios({
        method: "POST",
        data: {
            username: this.state.loginUsername,
            password: this.state.loginPassword,
        },
        withCredentials: true,
        url: "http://localhost:4000/login",
        }).then((res) => console.log(res));
    };

    render(){
        return(
            <div>
            <h1>Login</h1>
            <input
                placeholder="username"
                onChange={(e) => this.setState({ loginUsername: e.target.value })}
            />
            <input
                placeholder="password"
                onChange={(e) => this.setState({ loginPassword: e.target.value })}
            />
            <button onClick={this.login}>Submit</button>
            </div>
        )
    }
}

export default Login;