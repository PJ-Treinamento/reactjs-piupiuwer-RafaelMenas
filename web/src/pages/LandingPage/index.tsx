import React, { useState } from 'react';

import LogoImg from '../../assets/images/LandingPage/PiupiuwerLogo.svg';
import PenaImg from '../../assets/images/LandingPage/PenaLogo.svg';

import './styles.css';
import { useAuth } from '../../hooks/useAuth';



function Landing() {
    const {user} = useAuth();
    const {login} = useAuth();

    console.log(user);

    
    

    const [emailInput, setEmailInput] = useState<string>(""); 
    const [passwordInput, setPasswordInput] = useState<string>(""); 

    return(
    <div id="page-landing">
        <div id="left">
            <div className="pena">
            <img src={PenaImg} alt="logopiupiuwer"  />
            </div>
            <div className="logo">
                <img src={LogoImg} alt="Piupiuwer" />
                <h2>Connect with your best friends</h2>
            </div>
        </div>
        <div id="right">
            <button className="newAccount">Create new account</button>
            <div id="log-in">
                <form id="Inputs">
                    <div id="Email">
                        <input type="text" placeholder="Email or username" className="email" name="inputEmail" onChange={(e) => setEmailInput(e.target.value)} />
                    </div>
                    <div id="Password">
                        <input type="text" placeholder="Password" className="password" name="inputPassword" onChange={(e) => setPasswordInput(e.target.value)} />
                    </div>
                </form>
                <div id="Log-Forgot">
                    <button id="Submit" className="LogIn" onClick={() => login({ email:emailInput, password:passwordInput})} >Log in</button>
                    <a href="não tem link aqui não">Forgot your password?</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Landing;

