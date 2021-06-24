import React, { useState } from "react";

import LogoImg from "../../assets/images/LandingPage/PiupiuwerLogo.svg";
import LupaImg from "../../assets/images/Feed/lupeIcon.svg";
import TopicosImg from "../../assets/images/Feed/momentsIcon.svg";
import PerfilImg from "../../assets/images/Feed/perfilIcon.svg";
import TrendingImg from "../../assets/images/Feed/trendingIcon.svg";
import { useAuth } from "../../hooks/useAuth";


const PageHeader = () => {
  const {user} = useAuth();

  const [search, setSearch] = useState("");

  console.log(search)

  // if (user.username===search || user.first_name===search || user.last_name===search ) {
      
  // }


  return (
    <header id="head">
      <img src={LogoImg} alt="Logo Piupiuwer" className="logopiu" />
      <div className="search">
        <input placeholder="Search Piupiuwer..." type="text" className="find" onChange={(e) => setSearch(e.target.value)} />
        <img src={LupaImg} alt="Logo Piupiuwer" className="lupa" />
      </div>
      <div className="trendingtopics">
        <img src={TopicosImg} alt="Logo Piupiuwer" className="topicos" />
        <img src={TrendingImg} alt="Logo Piupiuwer" className="trendings" />
      </div>
      <img src={user.photo} alt="Logo Piupiuwer" className="perfil" />
    </header>
  );
}

export default PageHeader;
