import React from 'react';

import LogoImg from '../../assets/images/LandingPage/PiupiuwerLogo.svg';
import LupaImg from '../../assets/images/Feed/lupeIcon.svg';
import TopicosImg from '../../assets/images/Feed/momentsIcon.svg'
import PerfilImg from '../../assets/images/Feed/perfilIcon.svg'
import TrendingImg from '../../assets/images/Feed/trendingIcon.svg'

function PageHeader() {
    return (
        <header id="head">
                <img src={LogoImg} alt="Logo Piupiuwer" className="logopiu" />
                <div className="search">
                    <input placeholder="Search Piupiuwer..." type="text" className="find" />
                    <img src={LupaImg} alt="Logo Piupiuwer" className="lupa" />
                </div>
                <div className="trendingtopics">
                    <img src={TopicosImg} alt="Logo Piupiuwer" className="topicos" />
                    <img src={TrendingImg} alt="Logo Piupiuwer" className="trendings" />
                </div>
                <img src={PerfilImg} alt="Logo Piupiuwer" className="perfil" />
            </header>
    );
}

export default PageHeader;