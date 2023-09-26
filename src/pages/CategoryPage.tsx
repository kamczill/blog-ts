import {useEffect, useCallback} from 'react'
import { useParams } from 'react-router-dom'
import estateImg from '././../assets/estate.jpg'
import { capitalizeFirstLetter } from '../utils/textUtils'
import { useLazyQuery } from '@apollo/client'
import { GET_ARTICLES_BY_CATEGORY } from '../graphql/queries/getArticlesByCategory'
import FeatureArticle from '../components/homepage/FeatureArticle'
import { formatDate } from '../utils/dateUtils'
import { BlogPost } from '../types'
import MoonLoader from 'react-spinners/MoonLoader'
import InterestingArticlesFeature from '../components/InterestingArticlesFeature'
import { GET_ALL_ARTICLES } from '../graphql/queries/getAllArticles'
import { Helmet } from 'react-helmet'

import useAnimateOnView from '../hooks/useAnimateOnView'

const CategoryPage = () => {
    const { category } = useParams()
    const [getPosts, { loading, data, error }] = useLazyQuery(category === 'all' ? GET_ALL_ARTICLES: GET_ARTICLES_BY_CATEGORY)
    const [scope] = useAnimateOnView()
    const [featureScope] = useAnimateOnView()

    const fetchPosts = useCallback(() => {
      const variables = category !== 'all' ? { category } : undefined;
      getPosts({ variables });
    }, [category, getPosts]);

    useEffect(() => {
        window.scrollTo(0,0)
        fetchPosts();
    }, [fetchPosts])

  return (
    <div>
        <Helmet>
          <title>{capitalizeFirstLetter(`${category} - heya.` || 'heya.')}</title>
          <meta name="description" content='A blog application about real estates ' />
        </Helmet>
        <div className='w-full h-full min-h-[50px]'>
            <img src={estateImg} className='w-full max-h-[65px] object-cover object-top blur-sm'/>
        </div>
        <main className='flex flex-col justify-center items-center gap-6 my-10 lg:my-14'>
          <h2 className='text-2xl font-os font-bold text-[#183B56] lg:text-3xl'>
            {capitalizeFirstLetter(`${category} Category` || 'All Categories')}
          </h2>
        
          <div ref={scope} className='flex flex-col items-center justify-center gap-6 px-6 max-w-[1175px] min-h-[00px] lg:flex-row lg:flex-wrap'>
            {loading && <MoonLoader color="#36d7b7" />}
            {error && <p>Failed to fetch data. Please try again.</p>}
            {!data?.blogPostCollection.items.length && <p>This category doesn't have any blog posts yet.</p>}
            
            {data?.blogPostCollection.items.map((article: BlogPost) => (
              <FeatureArticle 
                key={article.slug} 
                showBadge 
                badgeText={article.contentfulMetadata.tags[0]?.id.toUpperCase()} 
                title={article.title}
                slug={article.slug}
                coverImage={article.coverImage.url}
                avatarImg={article.author.avatar.url}
                author={`${article.author.name} ${article.author.surname}`} 
                date={formatDate(article.date)}
              />
            ))}
          </div>
        </main>
        <div  className='flex justify-center pt-[96px] pb-10 border-t-2 lg:pt-[130px] xl:mt-8 xl:pt-10'>
            <div ref={featureScope}>
                <InterestingArticlesFeature />
            </div>
        </div>
    </div>
  )
}

export default CategoryPage