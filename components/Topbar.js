import React from 'react'

function Topbar() {
  return (
    <>
    
    
    <div className='flex px-4'>
    <div className='px-10 bg-transparent h-[20px] w-screen flex flex-row justify-between
    top-0 z-10
    '>
    <div className='h-6'>
    <button className='bg-white bg-opacity-50'>
      Home
    </button>
    </div>
    <div></div>
    <button>
      Projects
    </button>
    </div>
    <div>
    <button>
      About
    </button>
    </div>
    </div>
    </>
  )
}

export default Topbar