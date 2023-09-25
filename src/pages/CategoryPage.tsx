import {useEffect, useLayoutEffect} from 'react'
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
import { useAnimate, useInView  } from 'framer-motion';


const CategoryPage = () => {
    const { category } = useParams()
    const [getPosts, { loading, data, error }] = useLazyQuery(category === 'all' ? GET_ALL_ARTICLES: GET_ARTICLES_BY_CATEGORY)
    const [scope, animate] = useAnimate()
    const [featureScope, animateFeature] = useAnimate()
    const isInView = useInView(scope, {margin: "-20% 0px 0px 0px", once: true})
    const featureIsInView = useInView(scope, {margin: "-20% 0px 0px 0px", once: true})

    const getArticlesByCategory = () => {
        getPosts({variables: {category: category}})
    }

    const getAllArticles = () => {
        getPosts()
    }

    useLayoutEffect(() => {
        if (featureIsInView) {
          animateFeature(featureScope.current, { opacity: [.5, 1], y: ["30%", "0%"]}, {ease: "easeIn", duration: .6} )
        }
      },[featureIsInView])
   
      useLayoutEffect(() => {
        if (isInView) {
          animate(scope.current, { opacity: [.5, 1], y: ["30%", "0%"]}, {ease: "easeIn", duration: .6} )
        }
      },[isInView])

    useEffect(() => {
        window.scrollTo(0,0)
        if(category){
            if(category === 'all'){
                getAllArticles();
            } else {
                getArticlesByCategory()
            }
        }
    }, [category])

  return (
    <div>
        <Helmet>
          <title>{capitalizeFirstLetter(`${category} - heya.` || 'heya.')}</title>
          <meta name="description" content='A blog application about real estates ' />
        </Helmet>
        <div className='w-full h-full'>
            <img src={estateImg} className='w-full max-h-[65px] object-cover object-top blur-sm'/>
        </div>
        <div ref={scope} className='flex flex-col justify-center items-center gap-6 my-10 lg:my-14'>
            <h2 className='text-2xl font-os font-bold text-[#183B56] lg:text-3xl'>
                {capitalizeFirstLetter(`${category} Category` || 'All Categories')} 
            </h2>
            <div className='flex flex-col items-center justify-center gap-6 px-6 max-w-[1175px] lg:flex-row lg:flex-wrap'>
            { loading && <MoonLoader color="#36d7b7" />}
            { error && <p>Failed to fetch data. Please try again.</p>}
            { data?.blogPostCollection.items.length < 1 && <p>This category doesn't have any blog post yet.</p>}

                {data?.blogPostCollection.items.map((article: BlogPost) => (
                     <FeatureArticle
                        showBadge 
                        badgeText={article.contentfulMetadata.tags[0]?.id.toUpperCase()}
                        title={article.title}
                        slug={article.slug}
                        coverImage={article.coverImage.url}
                        avatarImg={article.author.avatar.url} 
                        author={`${article.author.name} ${article.author.surname}`} 
                        date={formatDate(article.date)}
                   />
                ) )}
            </div>
        </div>
        <div  className='flex justify-center pt-[96px] pb-10 border-t-2 lg:pt-[130px] xl:mt-8 xl:pt-10'>
            <div ref={featureScope}>
                <InterestingArticlesFeature />
            </div>
        </div>
    </div>
  )
}

export default CategoryPage