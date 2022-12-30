import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import StackMainTabNavigation from './StackMainTabNavigation'
import StackNavigation from './StackNavigation'

export default function Routes (){

  const { user } = useContext(AuthContext);

  console.log(user);

  return user ? <StackMainTabNavigation/> : <StackNavigation/>;
}
