
import FeatureArticle from './FeatureArticle'
import ViewAllButton from '../ViewAllButton'
import Heading from '../Heading'
import avatar from "./../../assets/Avatar@2x.png";


const PopularArticles = () => {
  
  return (
    <div className=' flex flex-col justify-center items-center gap-4 px-6 font-os w-full max-w-[1100px] lg:gap-6 xl:px-0'>
        <Heading 
          title='Popular Articles'
          description='We share common trends, strategies ideas, opinions, short & long stories from the team behind company.'
          showButton
        />
        <div className='flex flex-col gap-10 lg:flex-row'>
        <FeatureArticle 
          showBadge 
          badgeText='Feature' 
          title='How to prevent and protect your family from Carbon'
          avatarImg={avatar} 
          author='Vanessa Sturiz' 
          date='02 May'
        />
        <FeatureArticle 
          showBadge 
          badgeText='Feature' 
          title='How to prevent and protect your family from Carbon'
          avatarImg={avatar} 
          author='Vanessa Sturiz' 
          date='02 May'
        />

        </div>
          <ViewAllButton classes={'place-self-center lg:hidden'} />
    </div>
  )
}

export default PopularArticles