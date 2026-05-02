import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import React from 'react'

export const Protected = ({children}) => {

    const{loading,user}= useAuth()

    if(loading){
        return (<main><h1>Loading </h1></main>)
    }

    if(!user){
        return <Navigate to={'/login'}/>
    }

 
    


  return children
}

export default Protected