import Heading from '../Heading'
import FeatureArticle from './FeatureArticle'
import ViewAllButton from '../ViewAllButton'
import avatar from "./../../assets/Avatar@2x.png";

const AllArticles = () => {
  return (
    <div className='w-full max-w-[1100px] flex flex-col px-6 gap-4 xl:p-0'>
        <Heading 
            title='All Articles'
            description='We share common trends, strategies ideas, opinions, short & long stories from the team behind company.'
        />
        <div className='grid grid-cols-2 gap-4'>
            <FeatureArticle 
                showBadge
                badgeText='HOME'
                title='Motherhood is the hardest and the best job ever'
                avatarImg={avatar}
                author='Camilla Farenth'
                date ='03 July'
                small
            />
            <FeatureArticle 
                showBadge
                badgeText='HOME'
                title='Motherhood is the hardest and the best job ever'
                avatarImg={avatar}
                author='Camilla Farenth'
                date ='03 July'
                small
             />
        </div>
        <div className='grid grid-cols-2 gap-6 lg:grid-cols-3 justify-items-center'>
            <FeatureArticle 
                showBadge
                badgeText='HOME'
                title='Motherhood is the hardest and the best job ever'
                avatarImg={avatar}
                author='Camilla Farenth'
                date ='03 July'
                small
            />
            <FeatureArticle 
                showBadge
                badgeText='HOME'
                title='Motherhood is the hardest and the best job ever'
                avatarImg={avatar}
                author='Camilla Farenth'
                date ='03 July'
                small
            />
            <div className="col-span-2 w-full flex justify-center lg:col-span-1">
                <div className='w-1/2 lg:w-full'>
                    <FeatureArticle 
                        showBadge
                        badgeText='HOME'
                        title='Motherhood is the hardest and the best job ever'
                        avatarImg={avatar}
                        author='Camilla Farenth'
                        date ='03 July'
                        small
                    />
                </div>
            </div>
        </div>
        <ViewAllButton 
            classes='self-center'
            text='More Articles'
        />
    </div>
  )
}

export default AllArticles