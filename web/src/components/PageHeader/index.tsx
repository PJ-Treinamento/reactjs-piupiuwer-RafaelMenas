import React, { useEffect, useState } from "react";

import * as S from './styles'

import LogoImg from "../../assets/images/LandingPage/PiupiuwerLogo.svg";
import LupaImg from "../../assets/images/Feed/lupeIcon.svg";
import TopicosImg from "../../assets/images/Feed/momentsIcon.svg";
import TrendingImg from "../../assets/images/Feed/trendingIcon.svg";
import { useAuth } from "../../hooks/useAuth";
import { IPiu } from "../../models";
import api from "../../api";


const PageHeader = () => {
  const { user: User, token } = useAuth();

  const [search, setSearch] = useState("");

  const [pius, setPius] = useState<IPiu[]>([]);

  useEffect(() => {
    const getPius = async () => {
      const responsePius = await api.get("/pius", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPius(responsePius.data);
    };
    getPius();
  }, [token]);

  // pius.user.username.filter
  

  return (
    <S.HeadWrapper>
      <S.Logo src={LogoImg} alt="Logo Piupiuwer" className="logopiu" />
      <S.SearchWrapper>
        <S.LupaIcon src={LupaImg} alt="Logo Piupiuwer" />
      </S.SearchWrapper>
      <S.TrendingTopicsWrapper>
        <img src={TopicosImg} alt="Logo Piupiuwer" className="topicos" />
        <img src={TrendingImg} alt="Logo Piupiuwer" className="trendings" />
      </S.TrendingTopicsWrapper>
      <S.Perfil src={User.photo} alt="Logo Piupiuwer" className="perfil" />
    </S.HeadWrapper>
  );
};

export default PageHeader;
