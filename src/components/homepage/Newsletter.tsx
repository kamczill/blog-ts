import React from 'react'
import wave from './../../assets/wave2.svg'
import NewsletterFeature from '../NewsletterFeature'
const Newsletter = () => {
  return (
    <div className=''>
        <img src={wave} className='w-full mb-[-1px]'/>
        <div className='bg-[#0D2436] flex justify-center'>
            <div className='w-full flex flex-col px-6 lg:flex-row lg:items-center lg:px-6 lg:justify-between lg:max-w-[1100px]'>
                <div className='flex flex-col justify-center items-center gap-6 w-full lg:items-start lg:w-max'>
                    <h3 className='font-os text-white font-bold text-2xl w-full max-w-[500px]'>
                    Get our stories delivered From us to your inbox weekly.
                    </h3>
                    <div className='flex flex-col w-full justify-center items-center gap-2 sm:flex-row lg:justify-start'>
                        <input type='text' placeholder='Email' className='px-3 py-2 rounded-md w-full max-w-[350px]'/>
                        <button className='px-3 py-2 rounded-md w-full max-w-[350px] bg-[#1565D8] text-white sm:max-w-[150px]'>
                            Get started
                        </button>
                    </div>
                    <p className='text-[#5A7184] max-w-[500px]'>
                    Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.
                    </p>
                </div>
                <div className='w-full lg:w-max flex justify-center'>
                    <NewsletterFeature />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter