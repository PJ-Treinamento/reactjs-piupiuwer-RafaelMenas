import React from 'react';

import Like from "../../assets/images/Feed/likeIcon.svg";
import Repiu from "../../assets/images/Feed/repiuIcon.svg";
import Replie from "../../assets/images/Feed/replieIcon.svg";

import PerfilImg from '../../assets/images/Feed/perfilIcon.svg'

function Otherpius (){
    return( 
        <div id="otherpius">
                <div className="principal">
                  <img
                    src={PerfilImg}
                    alt="imagem de perfil"
                    className="perfilrandomimg"
                  />
                  <p className="name">Random name</p>{" "}
                  <p className="arroba">@random</p>
                </div>
                <div className="piurandom">
                  <p className="piuanswer">aaaaaatesteaaa</p>
                  <div className="reactions">
                    <div className="replie">
                      <img src={Replie} alt="Replie" />
                      <p>100</p>
                    </div>
                    <div className="repiu">
                      <img src={Repiu} alt="Repiu" />
                      <p>100</p>
                    </div>
                    <div className="like">
                      <img src={Like} alt="Like" />
                      <p>100</p>
                    </div>
                  </div>
                </div>
              </div>
    )
}

export default Otherpius;