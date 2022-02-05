import React, { useState, useRef, useRef, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { HiMenu } from 'react-icons/hi';

import { Sidebar, UserProfile } from '../components/index';
import Pins from './Pins';
import { client } from '../Client';

const Home = () => {
  const [ToggleSidebar, setToggleSidebar] = useState(false);

  const checkUserInfo = localStorage.getItem('user');
  const userInfo =
    checkUserInfo !== 'undefined'
      ? JSON.parse(checkUserInfo)
      : localStorage.clear(); //in case the token expires, we clear the local storage

  useEffect(() => {}, []);

  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out'>
      <div className='hidden md:flex h-screen flex-initial'>
        <Sidebar />
        <div className='flex md:hidden flex-row'>
          <HiMenu
            fontSize={40}
            className='cursor-pointer'
            onClick={() => setToggleSidebar(false)}
          />
          <Link to='/'>
            {/* <img src={logo} alt={logo} className='w-28' /> */}
          </Link>
          <Link to={`user-profile/${user?._id}`}></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
