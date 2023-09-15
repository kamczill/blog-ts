import Heading from '../Heading'
import FeatureArticle from './FeatureArticle'
import { useQuery } from '@apollo/client';
import { GET_RECENT_ARTICLES } from '../../graphql/queries/getRecentArticles';
import { useEffect } from 'react';
import { formatDate } from '../../utils/dateUtils';
import { RecentArticle } from '../../types';
import BounceLoader from 'react-spinners/BounceLoader';

const RecentArticles = () => {
    const {data, loading, error} = useQuery(GET_RECENT_ARTICLES)

    useEffect(() => {
        if(error){
            console.log(error)
        }
    }, [data])
  return (
    <div className='w-full max-w-[1100px] flex flex-col gap-4 px-6 xl:px-0'>
        <Heading
            title='Recent Articles'
            description="Here’s what we've been up to recently."
            showButton
        />
        <div className='flex flex-col items-center gap-10 lg:flex-row lg:p-0'>
            { data?.blogPostCollection.items.map((item: RecentArticle) => (
                <FeatureArticle 
                    title={item.title}
                    coverImage={item.coverImage.url}
                    avatarImg={item.author.avatar.url} 
                    author={`${item.author.name} ${item.author.surname}`} 
                    date={formatDate(item.date)}
                />   
            ))}
            {loading 
                ? <BounceLoader color="#36d7b7" />
                : ''
            }
        </div>
    </div>
  )
}

export default RecentArticles