import { featureArticleProps } from '../../types'
import img from './../../assets/article-img1.png'
import {RiCheckFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'


const FeatureArticle = ({showBadge, badgeText, coverImage, title, avatarImg, author, date, small, slug}: featureArticleProps) => {
  return (
      <div className='relative rounded-xl'>
      <img src={coverImage || img} className='w-full h-full min-h-[400px] max-w-[550px] gradient object-cover rounded-lg'/>
      <div className='gradient absolute top-0 h-full w-full max-w-[550px]  rounded-lg'></div>
      <div className={`absolute top-0 h-full w-full flex flex-col ${showBadge ? 'lg:justify-between': 'lg:justify-end'} justify-end p-4 lg:p-[2rem]`}>
        <div className={` hidden  bg-white rounded-xl text-[#36B37E] max-w-[130px] p-[2px] items-center justify-center lg:flex`}>
        {badgeText}
        </div>
        <article className={`${small ? 'p-0': 'p-2'} lg:p-2 flex flex-col gap-8`}>
          <h3 className={`text-white ${small ? 'text-md': 'text-xl'} font-os hover:underline md:text-2xl`}> 
            <Link to={`/posts/${slug}`}>{title}</Link>
          </h3>
          <div className="hidden justify-between text-[#5A7184] pr- w-full lg:flex">
            <div className="flex items-center gap-2 w-full">
              <img src={avatarImg} className='w-[50px] h-[50px] object-cover rounded-full' />
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