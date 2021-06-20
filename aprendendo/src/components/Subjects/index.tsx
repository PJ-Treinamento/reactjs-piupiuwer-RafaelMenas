import React from 'react';

import PenaImg from "../../assets/images/LandingPage/PenaLogo.svg";
import PerfilImg from '../../assets/images/Feed/perfilIcon.svg'

function Subjects (){
    return( 
        <section id="right-feed">
          <img src={PenaImg} alt="Pena" id="penafeed" />
          <div id="boxes">
            <div id="subject">
              <div id="subject-box">
                <h3>Top subjects</h3>
                <div id="infos">
                  <div id="infotext">
                    <p>aaaaaaaaaaaaaaaaaa</p>
                    <p>bbbbbbbbbbbbbbbbbb</p>
                    <p>cccccccccccccccccc</p>
                  </div>
                  <p>read more</p>
                </div>
              </div>
            </div>
            <div id="peoples">
              <div id="people-box">
                <h3>People you may know</h3>
                <div className="someone">
                  <img src={PerfilImg} alt="perfil" />
                  <p>name someone</p>
                  <button>follow</button>
                </div>
                <p>view more</p>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Subjects;