import React, { useEffect, useState } from "react";

import * as S from "./styles";

import Like from "../../assets/images/Feed/likeIcon.svg";
import Repiu from "../../assets/images/Feed/repiuIcon.svg";
import Replie from "../../assets/images/Feed/replieIcon.svg";

import { useAuth } from "../../hooks/useAuth";
import api from "../../api";
import { IPiu, ITextPiu, IUser } from "../../models";
// import { useAuth } from "../../hooks/useAuth";
// import { IPiu, IUser } from "../../models";
// import api from "../../api";

const Otherpius: React.FC<IPiu> = ({ user, likes, text, id }) => {
  const { token } = useAuth();

  const deletePiu = async (piu_id: string) => {
    await api.delete("/pius", {
      headers: { Authorization: `Bearer ${token}` },
      data: {
        piu_id,
      },
    });
    window.location.reload();
  };

  const likePius = async (piu_id: string) => {
    const responseLike = await api.post("/pius/like", {
      headers: { Authorization: `Bearer ${token}` },
      data: {
        piu_id,
      },
    });
    window.location.reload();
    console.log(responseLike);
  };

  const Follow = async (followed_id: string) => {
    const responseFollow = await api.post("/follow", {
      headers: { Authorization: `Bearer ${token}` },
      data: {
        followed_id,
      },
    });
    window.location.reload();
    console.log(responseFollow);
  };

  const favoritePius = async (piu_id: string) => {
    try {
      const responseFavorite = await api.post("/pius/favorite", {
        headers: { Authorization: `Bearer ${token}` },
        data: {
          piu_id,
        },
      });
      window.location.reload();
      console.log(responseFavorite);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="otherpius">
      <div className="principal">
        <img
          src={user.photo}
          alt="imagem de perfil"
          className="perfilrandomimg"
        />
        <p className="name">{user.first_name}</p>{" "}
        <p className="arroba">{user.username}</p>
      </div>
      <div className="piurandom">
        <p className="piuTexto">{text}</p>
        <div className="reactions">
          <div className="replie">
            <img src={Replie} alt="Replie" />
            <p>100</p>
          </div>
          <div className="repiu" onClick={() => favoritePius(id)}>
            <img src={Repiu} alt="Repiu" />
            <p>{user.favorites.length}</p>
          </div>
          <S.LikeWrapper onClick={() => likePius(id)}>
            <img src={Like} alt="Like" />
            <p>{likes.length}</p>
          </S.LikeWrapper>
          <button onClick={() => deletePiu(id)}>Apagar</button>
          <button onClick={() => Follow(id)}>follow</button>
        </div>
      </div>
    </div>
  );
};

export default Otherpius;
