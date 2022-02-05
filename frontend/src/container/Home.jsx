import React, { useState, useRef, useRef, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';

import { Sidebar, UserProfile } from '../components/index';
import Pins from './Pins';
import { client } from '../Client';

import { useQuery } from '../utils/data';

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);
  const scrollRef = useRef(null);

  const checkUserInfo = localStorage.getItem('user');
  const userInfo =
    checkUserInfo !== 'undefined'
      ? JSON.parse(checkUserInfo)
      : localStorage.clear(); //in case the token expires, we clear the local storage

  useEffect(() => {
    const query = useQuery(userInfo?.googleId);

    client.fetch(query).then((data) => {
      setUser[data[0]];
    });
  }, []);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);

  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out'>
      <div className='hidden md:flex h-screen flex-initial'>
        <Sidebar user={user && user} closeToggle={setToggleSidebar} />
      </div>
      <div className='flex md:hidden flex-row'>
        <HiMenu
          fontSize={40}
          className='cursor-pointer'
          onClick={() => setToggleSidebar(true)}
        />
        <Link to='/'>
          {/* <img src={logo} alt={logo} className='w-28' /> */}
        </Link>
        <Link to={`user-profile/${user?._id}`}>
          <img src={user?.image} alt={logo} className='w-28' />
        </Link>
      </div>
      {toggleSidebar && (
        <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
          <div className='absolute w-full flex justify-end items-center p-2'>
            <AiFillCloseCircle
              fontSize={30}
              className='cursor-pointer'
              onClick={() => setToggleSidebar(false)}
            />
          </div>
          <Sidebar user={user && user} closeToggle={setToggleSidebar} />
        </div>
      )}
      <div className='pb-2 flex-1 h-screen overflow-y-scroll' ref={scrollRef}>
        <Routes>
          <Route path='/user-profile/:userId' element={<UserProfile />} />
          <Route path='/*' element={<Pins user={user && user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
