import React from 'react';

const DataTable = () => {
  
  const cars = [
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2020 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2019 },
   
  ];

  return (
    <table className="min-w-full leading-normal table-auto w-full">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal" >
          <th className="py-3 px-6 text-left" >ID</th>
          <th className="py-3 px-6 text-left" >Make</th>
          <th className="py-3 px-6 text-left" >Model</th>
          <th className="py-3 px-6 text-left" >Year</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light" >
        {cars.map((car) => (
          <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;