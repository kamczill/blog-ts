import FeatureArticle from './FeatureArticle'
import ViewAllButton from '../ViewAllButton'
import Heading from '../Heading'
import { useQuery } from '@apollo/client';
import { GET_POPULAR_ARTICLES } from '../../graphql/queries/getPopularArticles';
import { useEffect, useLayoutEffect, useState } from 'react';
import { formatDate } from '../../utils/dateUtils';
import { BlogPost } from '../../types';
import { MoonLoader } from 'react-spinners';
import { useAnimate, useInView  } from 'framer-motion';


const PopularArticles = () => {
  const { loading, error, data } = useQuery(GET_POPULAR_ARTICLES)
  const [articleItems, setArticleItems] = useState<any>(null)
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, {margin: "-20% 0px 0px 0px", once: true})


  // initial={{ y: '10%', opacity: .5 }}
  //     whileInView={{ y: '0%', opacity: 1}}
  //     transition={{ type: "easeIn", duration: .6 }}
  //     viewport={{ once: true, margin: "500px" }}
  
    useEffect(() => {
      if(data){
        setArticleItems(data?.blogPostCollection.items)
      }
    }, [data])

    useLayoutEffect(() => {
      if (isInView) {
        animate(scope.current, { opacity: [.5, 1], y: ["30%", "0%"]}, {ease: "easeIn", duration: .6} )
      }
    },[isInView])

  return (
    <div 
      ref={scope}
      className=' flex flex-col justify-center items-center gap-4 px-6 mt-[-50px] font-os w-full max-w-[1100px] lg:gap-6 lg:mt-[-96px] xl:px-0 xl:mt-0'>
        <Heading 
          title='Popular Articles'
          description='We share common trends, strategies ideas, opinions, short & long stories from the team behind company.'
          showButton
          navigateTo="categories/popular" 
        />
       
        <div className='flex flex-col gap-10 lg:flex-row'>
        { loading && <MoonLoader color="#36d7b7" />}
        { error && <p>Failed to fetch data. Please try again.</p>}
        {
          articleItems?.map((article: BlogPost) => (
            <FeatureArticle
              showBadge 
              badgeText={article.contentfulMetadata.tags[0].id.toUpperCase()}
              title={article.title}
              slug={article.slug}
              coverImage={article.coverImage.url}
              avatarImg={article.author.avatar.url} 
              author={`${article.author.name} ${article.author.surname}`} 
              date={formatDate(article.date)}
            />
          ))
        }
        </div>
          <ViewAllButton classes={'place-self-center lg:hidden'} navigateTo="categories/popular" />
    </div>
  )
}

export default PopularArticles