import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DataTable from './DataTable';


const Dashboard = () => {
  const [user, setUser] = useState(null);

  const signIn = () => {
    
    
    setUser({ name: `${user}` });
  };

  const signOut = () => {
    
    setUser(null);
  };

  return (
    <div className="dashboard">
      {!user ? (
        <button onClick={signIn} className="sign-in-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</button>
      ) : (
        <>
          <h1 className='font-bold'> Inventory Dashboard, {user.name}</h1>
          <button onClick={signOut} className="sign-out-btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sign Out</button>
          <DataTable />
        </>
      )}
    </div>
  );
};

export default Dashboard;