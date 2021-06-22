import React, { useState } from 'react';
import api from '../../api';

import PerfilImg from '../../assets/images/Feed/perfilIcon.svg'
import { useAuth } from '../../hooks/useAuth';



function Mypiu() {
  const [textPiu, setTextPiu] = useState("");
  console.log(textPiu);

  const [textPost, setTextPost] = useState("");

  const {token} = useAuth();

  const postPius = async () => {
    const responsePius = await api.get('/pius', {
      headers: {Authorization: `Bearer ${token}`}
    })
    setTextPiu(responsePius.data)
  }
  



  return (
    <div id="mypiu">
      <div className="principal">
        <img src={PerfilImg} alt="imagem de perfil" />{" "}
        <p id="questionpiu">What are you thinking?</p>
        <p id="yourarroba">@pessoa</p>
      </div>
      <div className="text">
        <textarea name="think" id="thinking" placeholder="aaaaa" onChange={(e) => setTextPiu(e.target.value)}></textarea>
        <button >piu</button>
      </div>
    </div>
  );
}

export default Mypiu;
