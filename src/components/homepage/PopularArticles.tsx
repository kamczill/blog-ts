import React from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

const PopularArticles = () => {
  return (
    <div className=' flex flex-col justify-center items-center gap-4 mx-6 font-os'>
        <h2 className='text-2xl font-bold text-[#183B56]'>Popular Articles</h2>
        <div className='flex flex-col items-center gap-3'>
            <p className='text-[#5A7184] text-center'>We share common trends, strategies ideas, opinions, short & long stories from the team behind company.</p>
            <button className='border-2 border-[#1565D8] text-[#1565D8] rounded-md p-2 flex justify-center items-center gap-2 w-full max-w-[200px]'>
                View All <RiArrowRightLine className='' /> 
                </button>
        </div>
    </div>
  )
}

export default PopularArticles