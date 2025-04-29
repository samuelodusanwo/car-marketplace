import React from 'react'
import { Categories } from '../Shared/Data';

function Category() {
  return (
    <div className='mt-20 md:mt-50'>
      <h2 className='font-bold text-3xl text-center mb-6'>Browse By Type</h2>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-3 md:px-20'>
        {
            Categories.map((category) => (
                <div key={category.id} className='border rounded-xl p-3 items-center flex flex-col hover:shadow-lg cursor-pointer'>
                    <img src={category.icon} width={35} height={35} alt="fetched-icon" />
                    <h2 className='mt-2'>{category.name}</h2>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Category;
