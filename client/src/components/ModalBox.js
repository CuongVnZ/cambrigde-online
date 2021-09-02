import React, { Component } from 'react'
import '../css/LoginModal.css'
import Axios from "axios";
import { Button } from './Button';

class ModalBox extends Component{  
    // const [registerUsername, setRegisterUsername] = useState("");
    // const [registerPassword, setRegisterPassword] = useState("");
    // const [loginUsername, setLoginUsername] = useState("");
    // const [loginPassword, setLoginPassword] = useState("");
    // const [data, setData] = useState(null);
    state = { 
        registerUsername: "",
        registerPassword: "",
        loginUsername: "",
        loginPassword: "",
        data: null,
        clicked: false
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
    
    getUser = () => {
        Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:4000/user",
        }).then((res) => {
            this.setState({ data: res.data });
        console.log(res.data);
        });
    };

    logOut = () => {
        Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:4000/logout",
        }).then((res) => {
            this.setState({ data: res.data });
        console.log(res.data);
        });
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    
    render() {
        return(
            <div>
                <div onClick={this.handleClick}><Button>Sign Up</Button></div>
                <div className={this.state.clicked ? 'login-modal active' : 'login-modal'}>
                    <div className="modal-content">
                        <span className="close" onClick={this.handleClick}>&times;</span>
                            <div>
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
                    
                            <div>
                                <h1>Get User</h1>
                                <button onClick={this.getUser}>Submit</button>
                                {
                                    this.state.data ? 
                                    <h1>Welcome Back {this.state.data.username}</h1> 
                                    : null
                                }
                                <button onClick={this.logOut}>Logout</button>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalBox;