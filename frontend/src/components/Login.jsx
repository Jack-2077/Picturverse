import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import bgPicture from '../assessts/pexels-jakub-novacek-924824.jpg';

const Login = () => {
  const responseGoogle = (res) => {};
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <img src={bgPicture} className='w-full h-full object-cover' />

        <diV className='absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'></div>
          <div className='shadow-2xl'>
            <GoogleLogin
              clientId=''
              render={(renderProps) => (
                <button
                  type='button'
                  className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className='mr-4' />
                  Sign In with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy='single_host_google'
            />
          </div>
        </diV>
      </div>
    </div>
  );
};

export default Login;
