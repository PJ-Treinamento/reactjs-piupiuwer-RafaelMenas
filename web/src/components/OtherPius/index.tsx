import React, { useEffect, useState } from "react";

import Like from "../../assets/images/Feed/likeIcon.svg";
import Repiu from "../../assets/images/Feed/repiuIcon.svg";
import Replie from "../../assets/images/Feed/replieIcon.svg";

import { useAuth } from "../../hooks/useAuth";
import api from "../../api";
import { IPiu, IUser } from "../../models";
// import { useAuth } from "../../hooks/useAuth";
// import { IPiu, IUser } from "../../models";
// import api from "../../api";

function Otherpius() {

  const {token} = useAuth();
  const [pius, setPius] = useState<IPiu[]>([])

  const getPius = async () => {
    const responsePius = await api.get('/pius', {
      headers: {Authorization: `Bearer ${token}`}
    })
    setPius(responsePius.data)
  }
  console.log(pius);

  const [users, setUsers] = useState<IUser[]>([])

  const getUsers = async () => {
    const responseUsers = await api.get('/users', {
      headers: {Authorization: `Bearer ${token}`}
    })
    setUsers(responseUsers.data)
  }
  console.log(users);

  useEffect (() =>{
    getPius();
  }, []) 

  useEffect (() =>{
    getUsers();
  }, []) 

  // const textPiu = pius.map(
  //   function A(piu) {
  //     return <p className="piuanswer">{piu.text}</p>
  //   }
  // ); 

  // const userPiu = users.map(
  //   function A(piu) {
  //     return <p  className="name">{piu.username}</p>
  //   }
  // ); 

  // const photoPiu = users.map(
  //   function A(piu) {
  //     <img
  //         src={piu.photo}
  //         alt="imagem de perfil"
  //         className="perfilrandomimg"
  //       />
  //   }
  // ); 

  const Otherspiu = pius.map (
    function newPius(piu) {
      return( 
        <div id="otherpius">
      <div className="principal">
        <img
          src={piu.user.photo}
          alt="imagem de perfil"
          className="perfilrandomimg"
        />
        <p className="name">{piu.user.first_name}</p> <p className="arroba">{piu.user.username}</p>
      </div>
      <div className="piurandom">
        <p>{piu.text}</p>
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
            <p>100</p>
          </div>
        </div>
      </div>
    </div>
      )
    }
  )




  return (

    <section>
    {Otherspiu}
    </section>
    
  );
}

export default Otherpius;
