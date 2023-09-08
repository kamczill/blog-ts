import img from './../../assets/article-img1.png'
import avatar from "./../../assets/Avatar@2x.png";
import {RiCheckFill} from 'react-icons/ri'
const FeatureArticle = () => {
  return (
      <div className='relative rounded-xl'>
      <img src={img} className='w-full max-w-[550px] gradient rounded-lg'/>
      <div className='gradient absolute top-0 h-full w-full rounded-lg'></div>
      <div className='absolute top-0 h-full w-full flex flex-col justify-between p-[2rem]'>
        <div className='bg-white rounded-xl text-[#36B37E] max-w-[100px] flex items-center justify-center'>
        FEATURE
        </div>
        <article className='p-2 flex flex-col gap-8'>
          <h3 className='text-white text-2xl font-os '>
          How to prevent and protect your family from Carbon monoxide
          </h3>
          <div className="flex justify-between  text-[#5A7184] pr- w-full">
            <div className="flex items-center gap-2 w-full">
              <img src={avatar} className='max-w-[45px] max-h-[45px]' />
              <div className="flex flex-col">
                <h4 className="font-semibold text-white">Viola Manisa</h4>
                <div className="flex items-center gap-2">
                  <div className="bg-[#5A7184] rounded-full p-[2px]">
                    <RiCheckFill className='text-[#36B37E]' size={15} />
                  </div>
                  <p className="text-[#5A7184]">Verified</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <p className="whitespace-nowrap text-white">02 May</p>
            </div>
          </div>
        </article>
      </div>
      </div>
  )
}

export default FeatureArticle