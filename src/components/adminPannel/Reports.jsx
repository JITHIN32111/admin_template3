import React from 'react';

const UserStats = () => {
  // Create an array of objects with data
  const stats = [
    { title: 'Total Admin', count: '04', color: '#72B800' },
    { title: 'Total Users', count: '20', color: '#007BFF' },
    { title: 'Total Active', count: '15', color: '#FF6347' },
  ];

  return (
    <div className='flex flex-col lg:flex-row items-center justify-start gap-8 md:gap-4 px-4 mt-8'>
      {stats.map((stat, index) => (
        <div
          key={index}
          className='flex flex-col w-full md:w-1/4 gap-y-2 p-6 shadow-lg border rounded-md'
        >
          <h1 className='text-2xl text-gray-700 font-semibold'>{stat.title}</h1>
          <h1 className='text-3xl font-bold text-[#72A10F]'>
            {stat.count}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default UserStats;
