import Heading from '../Heading'
import FeatureArticle from './FeatureArticle'
import ViewAllButton from '../ViewAllButton'
import { GET_ALL_ARTICLES } from '../../graphql/queries/getAllArticles';
import { useQuery } from '@apollo/client';
import MoonLoader from 'react-spinners/MoonLoader';
import { formatDate } from '../../utils/dateUtils';
import { BlogPost } from '../../types';
import useAnimateOnView from '../../hooks/useAnimateOnView';


const AllArticles = () => {
    const { loading, error, data } = useQuery(GET_ALL_ARTICLES);
    const [scope] = useAnimateOnView();

  return (
    <div ref={scope} className='w-full max-w-[1100px] flex flex-col px-6 gap-4 min-h-[700px] xl:p-0'>
        <Heading 
            title='All Articles'
            description='We share common trends, strategies ideas, opinions, short & long stories from the team behind company.'
        />
        <div className='grid grid-cols-2 gap-4'>
            { loading && <MoonLoader color="#36d7b7" />}
            { error && <p>Failed to fetch data. Please try again.</p>}

            {data?.blogPostCollection.items.slice(0, 2).map((item: BlogPost) => (
                <FeatureArticle 
                    showBadge
                    badgeText='HOME'
                    title={item.title}
                    slug={item.slug}
                    avatarImg={item.author.avatar.url}
                    coverImage={item.coverImage.url}
                    author={`${item.author.name} ${item.author.surname}`}
                    date={formatDate(item.date)}
                    small
                    key={item.slug}
                />
            ))}           
        </div>
        <div className='grid grid-cols-2 gap-6 lg:grid-cols-3 justify-items-center'>
           {data?.blogPostCollection.items.slice(2, 4).map((item: BlogPost) => (
                <FeatureArticle 
                    showBadge
                    badgeText='HOME'
                    title={item.title}
                    slug={item.slug}
                    avatarImg={item.author.avatar.url}
                    coverImage={item.coverImage.url}
                    author={`${item.author.name} ${item.author.surname}`}
                    date={formatDate(item.date)}
                    small
                    key={item.slug}
                />
            ))}          
            <div className="col-span-2 w-full flex justify-center lg:col-span-1">
                <div className='w-full flex justify-center'>
                {data?.blogPostCollection.items.slice(4).map((item: BlogPost) => (
                <FeatureArticle 
                    showBadge
                    badgeText='HOME'
                    title={item.title}
                    slug={item.slug}
                    avatarImg={item.author.avatar.url}
                    coverImage={item.coverImage.url}
                    author={`${item.author.name} ${item.author.surname}`}
                    date={formatDate(item.date)}
                    small
                    key={item.slug}
                />
            ))}          
                </div>
            </div>
        </div>
        <ViewAllButton 
            classes='self-center'
            text='More Articles'
            navigateTo='categories/all'
        />
    </div>
  )
}

export default AllArticles