import React from 'react'
import Header from '@/components/Header/Header.component';

function AddList() {
  return (
    <div>
      <Header />
      <div className='px-10 md:px-20 my-10'>
        <h1 className='font-bold text-4xl'>Add List</h1>
        <form className='p-10 border rounded-xl'>
          {/* Car Detials */}
          <div>
            <h2 className='font-medium text-xl mb6'>Car Details</h2>
          </div>
          {/* Features list */}

          {/* Car images */}
        </form>
      </div>
    </div>
  )
}

export default AddList;
