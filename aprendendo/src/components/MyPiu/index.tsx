import React from 'react';

import PerfilImg from '../../assets/images/Feed/perfilIcon.svg'

function Mypiu() {
  return (
    <div id="mypiu">
      <div className="principal">
        <img src={PerfilImg} alt="imagem de perfil" />{" "}
        <p id="questionpiu">What are you thinking?</p>
        <p id="yourarroba">@pessoa</p>
      </div>
      <div className="text">
        <textarea name="think" id="thinking" placeholder="aaaaa"></textarea>
        <button>piu</button>
      </div>
    </div>
  );
}

export default Mypiu;
