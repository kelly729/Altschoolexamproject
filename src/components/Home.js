import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUsers,FaFacebook,FaInstagram,FaTwitter,FaMoon,FaSun } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import user from '../assets/images/hero.png'
import Logo from '../assets/images/Logo.png'
import { Navbar } from './Navbar';
import { Helmet, HelmetProvider } from 'react-helmet-async';


// import  '../assets/images'

export const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta name='description' content='Check out our users data'></meta>
      <link rel='canonical' href='/'></link>
    </Helmet>
    <div className='main-container'>
      <div className='content'>
        <div className='icons'>
          <ul>
            <li> <FaTwitter/> </li>
            <li> <FaFacebook/> </li>
            <li> <FaInstagram/> </li>

          </ul>

        </div>
        <div className='home-cont'>
          <h2>Random <span>Users</span></h2>
          <p>Fetching and displaying multiple user profile <br></br>
            using the Randomuser.me rest api
          </p>
          <NavLink to="/People" className="btn-cont" >
            View Users
          </NavLink>

        </div>
        <div className='hero-img'>
          <img src={user} alt=''></img>

        </div>
      </div>
    </div>
    </>
  )
}
