import Heading from '../Heading'
import FeatureArticle from './FeatureArticle'
import avatar from "./../../assets/Avatar@2x.png";

const RecentArticles = () => {
  return (
    <div className='w-full max-w-[1100px] flex flex-col gap-6 px-6 xl:px-0'>
        <Heading
            title='Recent Articles'
            description="Here’s what we've been up to recently."
            showButton
        />
        <div className='flex flex-col items-center gap-10 p-6 lg:flex-row lg:p-0'>
            <FeatureArticle 
                title='How to prevent and protect your family from Carbon'
                avatarImg={avatar} 
                author='Vanessa Sturiz' 
                date='02 May'
            />
            <FeatureArticle  
                title='How to prevent and protect your family from Carbon'
                avatarImg={avatar} 
                author='Vanessa Sturiz' 
                date='02 May'
            />
            <FeatureArticle
                title='How to prevent and protect your family from Carbon'
                avatarImg={avatar} 
                author='Vanessa Sturiz' 
                date='02 May'
            />
        </div>
    </div>
  )
}

export default RecentArticles