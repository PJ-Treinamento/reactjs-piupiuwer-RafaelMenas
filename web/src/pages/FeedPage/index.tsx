import React, { useState } from "react";

import "./styles.css";

import PageHeader from "../../components/PageHeader";
import PageBrowser from "../../components/PageBrowser";
import Mypiu from "../../components/MyPiu";
import Otherpius from "../../components/OtherPius";
import Subjects from "../../components/Subjects";
import { useAuth } from "../../hooks/useAuth";
import { IPiu, IUser } from '../../models'
import api from "../../api";
import { useEffect } from "react";

function Feed() {  
  
  // const {token} = useAuth();
  // const [pius, setPius] = useState<IPiu[]>([])

  // const getPius = async () => {
  //   const responsePius = await api.get('/pius', {
  //     headers: {Authorization: `Bearer ${token}`}
  //   })
  //   setPius(responsePius.data)
  // }
  // console.log(pius);

  // const [users, setUsers] = useState<IUser[]>([])

  // const getUsers = async () => {
  //   const responseUsers = await api.get('/users', {
  //     headers: {Authorization: `Bearer ${token}`}
  //   })
  //   setUsers(responseUsers.data)
  // }
  // console.log(users);

  // useEffect (() =>{
  //   getPius();
  // }, []) 
  
  // useEffect (() =>{
  //   getUsers();
  // }, []) 

  const {user} = useAuth();
  

  const [aaaa, setAaaa] = useState("");

  const {token} = useAuth();
  const [pius, setPius] = useState<IPiu[]>([])

  const getPius = async () => {
    const responsePius = await api.get('/pius', {
      headers: {Authorization: `Bearer ${token}`}
    })
    setPius(responsePius.data)
  }
  

  useEffect (() => {
    getPius();
  }, []) 
  
  return (
    <div id="page-feed">
      <PageHeader />
      <PageBrowser />
      <div id="underhead-feed">
        <section id="middle-feed">
          <div id="everypiu">
            <div id="pius">
                <Mypiu change={setAaaa}/>
                  <div id="greybar"></div> 
                  {/* {
                    (aaaa!=="") && <Otherpius {...} />
                  } */}
                {pius.map((piu) => <Otherpius key={piu.id} {...piu} />)}
            </div>
          </div>
        </section>
        <Subjects />
      </div>
    </div>
  );
}

export default Feed;
