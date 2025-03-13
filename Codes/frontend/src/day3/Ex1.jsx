import React from 'react'

function Ex1() {
  return (
    <div>
        <p className='bg-red-500 text-white p-4 m-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eius itaque neque magni similique numquam at! 
            Magni maxime accusantium consectetur! Error odio ut consectetur tempora autem delectus et laborum voluptatum.
        </p>

        <div className='grid grid-cols-4 gap-2 pl-40'>
            <div className='max-w-52 min-h-52 bg-blue-500 rounded hover:bg-blue-800'></div>
            <div className='max-w-52 min-h-52 bg-blue-500 rounded-md'></div>
            <div className='max-w-52 min-h-52 bg-blue-500 rounded-lg'></div>
            <div className="max-w-52 min-h-52 border-4 rounded-full border-indigo-500/100 border-dashed transform transition-transform duration-[2s] hover:rotate-[45deg]"></div>

        </div>

        <div className="container">

          <div className="font-bold">
            <h2 className='text-2xl'>84</h2>
            <h4 className='text-base'>html</h4>
          </div>

          <div className="font-bold">
            <h2 className='text-2xl'>84</h2>
            <h4 className='text-base'>html</h4>
          </div>

          <div className="font-bold">
            <h2 className='text-2xl'>84</h2>
            <h4 className='text-base'>html</h4>
          </div>

        </div>

    </div>
  )
}

export default Ex1
