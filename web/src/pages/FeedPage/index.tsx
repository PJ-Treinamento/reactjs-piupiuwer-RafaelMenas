import React, { useState } from "react";

import "./styles.css";

import PageHeader from "../../components/PageHeader";
import PageBrowser from "../../components/PageBrowser";
import Mypiu from "../../components/MyPiu";
import Otherpius from "../../components/OtherPius";
import Subjects from "../../components/Subjects";
import { useAuth } from "../../hooks/useAuth";
import { IPiu } from "../../models";
import api from "../../api";
import { useEffect } from "react";

function Feed() {
  const { token, user } = useAuth();

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

  const [search, setSearch] = useState("");

  return (
    <div id="page-feed">
      <div className="Header">
      <PageHeader search={search} setSearch={setSearch} />
      </div>
      <div id="underhead-feed">
        <PageBrowser />
        <section id="middle-feed">
          <div id="everypiu">
            <div id="pius">
              <Mypiu />
              <div id="greybar"></div>
              {pius.map((piu) => { if( search === '' 
              || piu.user.username.toLowerCase().includes(search.toLowerCase()) 
              || piu.user.last_name.toLowerCase().includes(search.toLowerCase()) 
              || piu.user.first_name.toLowerCase().includes(search.toLowerCase()) ) 
              { return(
                <Otherpius key={piu.id} {...piu} /> )
}})}
            </div>
          </div>
        </section>
        <Subjects />
      </div>
    </div>
  );
}

export default Feed;
