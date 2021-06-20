import React from 'react';

import Home from '../../assets/images/Feed/homeIcon.svg'
import Explore from '../../assets/images/Feed/exploreIcon.svg'
import Notifications from '../../assets/images/Feed/notificIcon.svg'
import Messages from '../../assets/images/Feed/messageIcon.svg'
import MoreTools from '../../assets/images/Feed/otheroptIcon.svg'

function PageBrowser () {
    return(
    <section id="left-feed">
            <div className="tools">
                <div className="icontext" id="home">
                    <img src={Home} alt="Icone de casa" /> <p>Home</p>
                </div>
                <div className="icontext" id="explore">
                    <img src={Explore} alt="Icone de exploração" /><p>Explore</p>
                </div>
                <div className="icontext" id="notifications">
                    <img src={Notifications} alt="Icone de notificação" />
                    <p>Notifications</p>
                </div>
                <div className="icontext" id="messages">
                    <img src={Messages} alt="Icone de mensagem" />
                    <p>Messages</p>
                </div>
                <div className="icontext" id="moretools">
                    <img src={MoreTools} alt="Icone de mais ferramentas" />
                    <p>More tools</p>
                </div>
            </div>
            <button id="writepiu">Write your piu</button>
        </section> 
    );
}

export default PageBrowser;