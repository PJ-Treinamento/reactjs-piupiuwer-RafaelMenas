import React, { useEffect, useState } from "react";

import Like from "../../assets/images/Feed/likeIcon.svg";
import Repiu from "../../assets/images/Feed/repiuIcon.svg";
import Replie from "../../assets/images/Feed/replieIcon.svg";

import { useAuth } from "../../hooks/useAuth";
import api from "../../api";
import { IPiu, ITextPiu, IUser } from "../../models";
// import { useAuth } from "../../hooks/useAuth";
// import { IPiu, IUser } from "../../models";
// import api from "../../api";

interface IIdPiu {
  piu_id: string
}



const Otherpius: React.FC<IPiu> = ({user, likes, text, id}) => {
  
  const {token} = useAuth();
  
  const deletePiu = async (piu_id:string) => {
    await api.delete('/pius', {
      headers: {Authorization: `Bearer ${token}`}, 
      data: {
        piu_id
      }
    })
    window.location.reload();
  }

  return( 
        <div id="otherpius">
        <div className="principal">
        <img
          src={user.photo}
          alt="imagem de perfil"
          className="perfilrandomimg"
        />
        <p className="name">{user.first_name}</p> <p className="arroba">{user.username}</p>
      </div>
      <div className="piurandom">
        <p className="piuTexto">{text}</p>
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
            <p>{likes.length}</p>
          </div>
          <button onClick={() => deletePiu(id)}>Apagar</button>
        </div>
      </div>
    </div>
      )
    }

export default Otherpius;
