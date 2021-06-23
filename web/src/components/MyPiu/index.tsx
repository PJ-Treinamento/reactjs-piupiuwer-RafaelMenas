import React, { useState } from 'react';
import { useEffect } from 'react';
import api from '../../api';

import PerfilImg from '../../assets/images/Feed/perfilIcon.svg'
import { useAuth } from '../../hooks/useAuth';
import { IChange, IPiu, ITextPiu } from '../../models';



  const Mypiu = ({change}:IChange) => {
  const [textPiu, setTextPiu] = useState("");
  console.log(textPiu);

  const [textPost, setTextPost] = useState("");

  const {token} = useAuth();

  const postPius = async ({text}:ITextPiu)  => {
      await api.post('/pius', {
      headers: {Authorization: `Bearer ${token}`}, 
      text,
    })
    window.location.reload();
  }

  // onClick={() => postPius({text: textPost})}
  


  return (
    <div id="mypiu">
      <div className="principal">
        <img src={PerfilImg} alt="imagem de perfil" />{" "}
        <p id="questionpiu">What are you thinking?</p>
        <p id="yourarroba">@pessoa</p>
      </div>
      <div className="text">
        <textarea name="think" id="thinking" placeholder="aaaaa" onChange={(e) => setTextPost(e.target.value)}></textarea>
        <p>{textPost.length}</p>
        <button onClick={() => postPius({text: textPost})} >piu</button>
      </div>
    </div>
  );
}

export default Mypiu;
