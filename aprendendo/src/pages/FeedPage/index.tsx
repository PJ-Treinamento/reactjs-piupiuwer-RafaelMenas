import React from "react";

import PerfilImg from '../../assets/images/Feed/perfilIcon.svg'
import PenaImg from "../../assets/images/LandingPage/PenaLogo.svg";

import "./styles.css";

import PageHeader from "../../components/PageHeader";
import PageBrowser from "../../components/PageBrowser";
import Mypiu from "../../components/MyPiu";
import Otherpius from "../../components/NewPius";
import Subjects from "../../components/Subjects";

function Feed() {
  return (
    
    
    <div id="page-feed">
      <PageHeader />
      <PageBrowser />
      <div id="underhead-feed">
        <section id="middle-feed">
          <div id="everypiu">
            <div id="pius">
                <Mypiu />
                <div id="greybar"></div>
                <Otherpius />
            </div>
          </div>
        </section>
        <Subjects />
      </div>
    </div>
  );
}

export default Feed;
