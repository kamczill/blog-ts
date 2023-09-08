
import FeatureArticle from './FeatureArticle'
import ViewAllButton from '../ViewAllButton'
import Heading from '../Heading'


const PopularArticles = () => {
  
  return (
    <div className=' flex flex-col justify-center items-center gap-4 px-6 font-os w-full max-w-[1100px] lg:gap-6 xl:px-0'>
        <Heading 
          title='Popular Articles'
          description='We share common trends, strategies ideas, opinions, short & long stories from the team behind company.'
          showButton
        />
        <div className='flex flex-col gap-10 lg:flex-row'>
          <FeatureArticle />
          <FeatureArticle />
          <ViewAllButton classes={'place-self-center lg:hidden'} />
        </div>
    </div>
  )
}

export default PopularArticles