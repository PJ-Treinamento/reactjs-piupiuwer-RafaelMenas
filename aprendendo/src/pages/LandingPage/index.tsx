import React, { useState } from 'react';

import LogoImg from '../../assets/images/LandingPage/PiupiuwerLogo.svg';
import PenaImg from '../../assets/images/LandingPage/PenaLogo.svg';

import './styles.css';
import { useEffect } from 'react';
import api from '../../api';
import { useContext } from 'react';
import { AuthContext, useAuth } from '../../hooks/useAuth';



function Landing() {
    const aaaa = useAuth();
    const {user} = useAuth();

    const [emailInput, setEmailInput] = useState<string>(""); 
    const [passwordInput, setPasswordInput] = useState<string>(""); 

    // setEmailInput(valor do input)

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
                <div id="Inputs">
                    <div id="Email">
                        <input type="text" placeholder="Email or username" className="email" />
                    </div>
                    <div id="Password">
                        <input type="text" placeholder="Password" className="password" />
                    </div>
                </div>
                <div id="Log-Forgot">
                <button className="LogIn">Log in</button>
                <a href="não tem link aqui não">Forgot your password?</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Landing;

