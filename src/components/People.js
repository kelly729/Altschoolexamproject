import React from "react";
// import { data } from '../data'
import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';


export const People = ({results}) => {
  const [usersPerpage, setUsersperPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
 

  const IndexLastUser = currentPage * usersPerpage;
  const Indexfirstuser = IndexLastUser - usersPerpage;
  const currentUser = results.slice(Indexfirstuser,IndexLastUser);
  const paginate = (Pagenum) => {
    return setCurrentPage(() => Pagenum);
  };
  const next = () => {
    if(currentPage>=5){
      return
    }
      
    else{
      setCurrentPage(()=>currentPage + 1)
    }
    
    
    
  };
  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(() => currentPage - 1);
    } else {
      return;
    }
  };
  return (
    <>
     <Helmet>
      <title>Random users</title>
      <meta name='description' content='fetching and displaying users from the randomuser.me rest api'></meta>
      <link rel='canonical' href='/People'></link>
    </Helmet>
    <div className="user-cont">
      <h1>Our Users</h1>
      <div className="main">
        {currentUser.map((user) => {
          console.log(user);
          const {
            gender,
            name: { first, last },
            email,
            login: { uuid },
            picture: { large },
          } = user;
          return (
            <div className="submain">
              <div className="img-sc">
                <img src={large} alt={first}></img>
              </div>
              <div className="list-item">
                <ul key={uuid}>
                  <h2>
                    {first} {last}
                  </h2>

                  <li>{email}</li>
                </ul>
                <Link to={`/person/${user.login.uuid}`}>
                  {" "}
                  <button className="user-btn">view user</button>
                </Link>
               
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        totaluser={results.length}
        usersPerpage={usersPerpage}
        paginate={paginate}
        next={next}
        prev={prev}
      />
    </div>
    </>
  );
};
