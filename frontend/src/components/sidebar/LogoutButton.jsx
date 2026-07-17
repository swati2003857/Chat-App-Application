import React from 'react'
import {BiLogOut} from 'react-icons/bi';
import uselogout from "../../hooks/uselogout.js";

const LogoutButton = () => {
  const {loading,logout} = uselogout();
  return (
    <div className='mt-auto p-2 hover:bg-slate-600 rounded cursor-pointer'>
      {!loading ? (
        <BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
     
    </div>
  );
};

export default LogoutButton;
