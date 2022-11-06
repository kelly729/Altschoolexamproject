import { async } from '@firebase/util';
import React from 'react'
import { FcGoogle } from "react-icons/fc";


export const  Signup = () => {
 
  return (
    <div className="sign"> 
        <h2 className='underline'>Signup</h2>
        <button  className="btn-cont" > <FcGoogle/> sign</button>

    </div>
  )
}
