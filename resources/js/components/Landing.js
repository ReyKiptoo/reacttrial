import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function Landing() {
    return (
        <div className="App">
            <div className="header">
                <h1>
                    <span>S</span>tudemy
                </h1>
                <nav>
                    <ul className="nav1">
                        <li className="active">Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <ul className="nav2">
                        <li>SignIn</li>
                        <li className="signup">
                            <NavLink className="link" to="/signup">
                                SignUp
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="cov_cont">
                <div className="login_form">
                    <div className="login_avatar"></div>
                    <form>
                        <input
                            type="email"
                            name="username"
                            placeholder="Email"
                            required
                        />
                        <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                        <br />
                        <input type="checkbox" />
                        <p>Remember me</p>
                        <br />
                        <input type="submit" value="Login" />
                        <NavLink className="password_link" to="/">
                            Forgot Password?
                        </NavLink>
                        <NavLink className="signup_link" to="/signup">
                            Don't have an Account? Create Account
                        </NavLink>
                    </form>
                </div>
                <div className="line">
                    <div className="clipart"></div>
                </div>
            </div>
        </div>
    );
}

export default Landing;

if (document.getElementById("landing")) {
    ReactDOM.render(<Landing />, document.getElementById("landing"));
}
