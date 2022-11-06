// import { async } from '@firebase/util';
import { async } from '@firebase/util';
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { UserAuth } from '../context/context';

export const  Signup = () => {
  const {googleSignIn}=UserAuth()
 const handleSignIn=async()=>{
  try{
    await googleSignIn()

  }
  catch (error){
    console.log(error)
  }
 }
  return (
    <div className="sign"> 
        <h2 className='underline'>Signup</h2>
        <button onClick={handleSignIn} className="btn-cont" > <FcGoogle/> sign</button>

    </div>
  )
}
