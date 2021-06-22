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
