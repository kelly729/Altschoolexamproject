import React from 'react'
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";

export const Pagination = ({totaluser,usersPerpage,paginate,next,prev}) => {
    const Pagenum=[]
    for(let i=1;i<=Math.ceil(totaluser/usersPerpage);i++){
        Pagenum.push(i)
    }
    console.log(Pagenum)
  return (
    <div className='page-main'>
        <ul>
            <a onClick={()=>prev()}> <FaArrowLeft/> </a>
            {Pagenum.map((number)=>{
                return (
                    <>
                    <a onClick={()=>paginate(number)} >{number}</a>
                    </>
                )
            })}


            <a onClick={()=>next()}> <FaArrowRight/> </a>
        </ul>
    </div>
  )
}
