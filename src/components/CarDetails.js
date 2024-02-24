import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h2 className='text-center font-bold'>Car Details - {id}</h2>
    
    </div>
  );
};

export default CarDetails;