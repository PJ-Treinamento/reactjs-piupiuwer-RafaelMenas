import React, { useState } from 'react';
import api from '../../api';
import { useAuth } from '../../hooks/useAuth';
import { IPiu, IUser } from '../../models';


function Getdata() {
    
  const {token} = useAuth();
  const [pius, setPius] = useState<IPiu[]>([])

  const getPius = async () => {
    const response = await api.get('/pius', {
      headers: {Authorization: `Bearer ${token}`}
    })
    setPius(response.data)
  }
  console.log(pius);

  const [users, setUsers] = useState<IUser[]>([])

  const getUsers = async () => {
    const response = await api.get('/users', {
      headers: {Authorization: `Bearer ${token}`}
    })
    setUsers(response.data)
  }
    console.log(users);

  return(
      {}
  );

}

export default Getdata;