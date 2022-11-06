import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FaUsers,FaFacebook,FaInstagram,FaTwitter,FaMoon,FaSun } from "react-icons/fa";
export const SingelPerson = ({results}) => {
  // console.log(results)
  const {id}=useParams()
  const newResult=results.find((res)=>res.login.uuid === id)
  console.log(newResult)
return (
  <div className='single-main'>
    <div className='sub-single'>
    <div className='img-sec'>
          <img src={newResult.picture.large} alt={newResult.loggin}></img>
          <h2>{newResult.name.first}  {newResult.name.last}</h2>
          <ul>
            <li> <FaTwitter/> </li>
            <li> <FaFacebook/> </li>
            <li> <FaInstagram/> </li>

          </ul>
          <div className='cont'>
            <div className='cont-c'>
            <article>Age: {newResult.dob.age}  </article>
                <article> Email : {newResult.email}</article>
                <article> Gender:  {newResult.gender}</article>
                <article> Date of Birth:  {newResult.dob.date}</article>
                <article> Location:  {newResult.location.street.name}  {newResult.location.street.number}</article>

              </div>      
        </div>
    </div>
      </div>
     
  </div>
)
}

