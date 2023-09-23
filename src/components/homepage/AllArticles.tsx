import Heading from '../Heading'
import FeatureArticle from './FeatureArticle'
import ViewAllButton from '../ViewAllButton'
import avatar from "./../../assets/Avatar@2x.png";
import { useQuery } from '@apollo/client';
import { GET_RECENT_ARTICLES } from '../../graphql/queries/getRecentArticles';
import MoonLoader from 'react-spinners/MoonLoader';

const AllArticles = () => {
    const { loading, error, data } = useQuery(GET_RECENT_ARTICLES);
  return (
    <div className='w-full max-w-[1100px] flex flex-col px-6 gap-4 xl:p-0'>
        <Heading 
            title='All Articles'
            description='We share common trends, strategies ideas, opinions, short & long stories from the team behind company.'
        />
        <div className='grid grid-cols-2 gap-4'>

            { loading && <MoonLoader color="#36d7b7" />}
            { error && <p>Failed to fetch data. Please try again.</p>}           
            <FeatureArticle 
                showBadge
                badgeText='HOME'
                title={data?.blogPostCollection.items[0].title}
                avatarImg={avatar}
                coverImage={data?.blogPostCollection.items[0].coverImage.url}
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