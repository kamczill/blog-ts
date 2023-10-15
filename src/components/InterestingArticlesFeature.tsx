import FeatureArticle from './homepage/FeatureArticle'
import ViewAllButton from './ViewAllButton'
import Heading from './Heading'
import { useQuery } from '@apollo/client';
import { GET_ALL_ARTICLES } from '../graphql/queries/getAllArticles';
import { useEffect, useState } from 'react';
import { formatDate } from '../utils/dateUtils';
import { BlogPost } from '../types';
import { MoonLoader } from 'react-spinners';
import { shuffle } from '../utils/shuffleUtils';
import { useParams } from 'react-router-dom';

const InterestingArticlesFeature = () => {
    const { loading, error, data } = useQuery(GET_ALL_ARTICLES)
    const [articleItems, setArticleItems] = useState<any>(null)
    const { slug } = useParams();

    useEffect(() => {
      if(data){
        console.log(data?.blogPostCollection.items)
        const shuffleArrayItems = shuffle(data?.blogPostCollection.items)
        setArticleItems(shuffleArrayItems)
      }
    }, [data, slug])

  return (
    <div className=' flex flex-col justify-center items-center gap-4 px-6 mt-[-50px] font-os w-full max-w-[1100px] lg:gap-6 lg:mt-[-96px] xl:px-0 xl:mt-0'>
        <Heading 
          title='Interesting Articles'
          description='The similar articles to current article'
          showButton
        />
       
        <div className='flex flex-col gap-10 lg:flex-row'>
        { loading && <MoonLoader color="#36d7b7" />}
        { error && <p>Failed to fetch data. Please try again.</p>}
        {
          articleItems?.slice(0,2).map((article: BlogPost) => (
            <FeatureArticle
              title={article.title}
              slug={article.slug}
              coverImage={article.coverImage.url}
              avatarImg={article.author.avatar.url} 
              author={`${article.author.name} ${article.author.surname}`} 
              date={formatDate(article.date)}
              key={article.slug}
            />
          ))
        }
        </div>
          <ViewAllButton classes={'place-self-center lg:hidden'} navigateTo='' />
    </div>
  )
}

export default InterestingArticlesFeature