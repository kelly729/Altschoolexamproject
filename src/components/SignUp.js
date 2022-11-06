import { async } from '@firebase/util';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { UserAuth } from '../context/AuthContext';

export const  Signup = () => {
  const {goggleSignIn}=UserAuth()

  const handleGoogleSignin=async()=>{
    try{
      await goggleSignIn
      

    }
    catch (error){
      console.log(error)
    }
  }
  return (
    <div className="sign"> 
        <h2 className='underline'>Signup</h2>
        <button onClick={handleGoogleSignin} className="btn-cont" > <FcGoogle/> sign</button>

    </div>
  )
}
