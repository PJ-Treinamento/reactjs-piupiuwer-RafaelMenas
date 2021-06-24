import React, { useState } from 'react';
import { useEffect } from 'react';
import api from '../../api';

import PerfilImg from '../../assets/images/Feed/perfilIcon.svg'
import { useAuth } from '../../hooks/useAuth';
import { IChange, IPiu, ITextPiu } from '../../models';



  const Mypiu = ({change}:IChange) => {
  const [textPiu, setTextPiu] = useState("");
  console.log(textPiu);

  const [textBoolean, setTextBoolean] = useState("");
  
  const [textPost, setTextPost] = useState("");
  
  // useEffect (() => {
  //   getPius();
  // }, []) 
  
  // if(textPost.length!==0) {
  //   setTextBoolean(true);
  // }
  // console.log(textBoolean)

  const {token} = useAuth();
  const {user} = useAuth();

  const postPius = async ({text}:ITextPiu)  => {
      await api.post('/pius', {
      headers: {Authorization: `Bearer ${token}`}, 
      text,
    })
    window.location.reload();
  }

  // onClick={() => postPius({text: textPost})}

  const correction = () => {
    if (textPost.length>140){
      setTextBoolean("Your ideas can be a little confusing, try to make them simpler (tweets are 140 characters max)")
    }
    if (textPost.length===0){
      setTextBoolean("Write a little more about your ideas (pius have a minimum number of 1 character)")
    }
    if (textPost.length<140 && textPost.length>0){
      setTextBoolean("")
    }
  }


  return (
    <div id="mypiu">
      <div className="principal">
        <img src={user.photo} alt="imagem de perfil" />{" "}
        <p id="questionpiu">What are you thinking?</p>
        <p id="yourarroba">{user.username}</p>
      </div>
      <div className="text">
        <textarea name="think" id="thinking" placeholder="How are you?" onChange={(e) => setTextPost(e.target.value)}></textarea>
        <p style={{color: textPost.length>140? 'red':'black'}}>{textPost.length}</p>
        <p style={{color:'red'}}>{textBoolean}</p>
        <button onClick={() => {correction(); postPius({text: textPost})}} >piu</button>
      </div>
    </div>
  );
}

export default Mypiu;
