import { featureArticleProps } from '../../types'
import img from './../../assets/article-img1.png'
import {RiCheckFill} from 'react-icons/ri'



const FeatureArticle = ({showBadge, badgeText, title, avatarImg, author, date}: featureArticleProps) => {
  return (
      <div className='relative rounded-xl'>
      <img src={img} className='w-full max-w-[550px] gradient rounded-lg'/>
      <div className='gradient absolute top-0 h-full w-full max-w-[550px]  rounded-lg'></div>
      <div className={`absolute top-0 h-full w-full flex flex-col ${showBadge ? 'justify-between': 'justify-end'} p-[2rem]`}>
        <div className={`${showBadge ? '': 'hidden'} bg-white rounded-xl text-[#36B37E] max-w-[100px] flex items-center justify-center`}>
        {badgeText}
        </div>
        <article className='p-2 flex flex-col gap-8'>
          <h3 className='text-white text-2xl font-os '> 
          {title}
          </h3>
          <div className="flex justify-between  text-[#5A7184] pr- w-full">
            <div className="flex items-center gap-2 w-full">
              <img src={avatarImg} className='max-w-[45px] max-h-[45px]' />
              <div className="flex flex-col">
                <h4 className="font-semibold text-white">{author}</h4>
                <div className="flex items-center gap-2">
                  <div className="bg-[#5A7184] rounded-full p-[2px]">
                    <RiCheckFill className='text-[#36B37E]' size={15} />
                  </div>
                  <p className="text-[#5A7184]">Verified</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <p className="whitespace-nowrap text-white">{date}</p>
            </div>
          </div>
        </article>
      </div>
      </div>
  )
}

export default FeatureArticle