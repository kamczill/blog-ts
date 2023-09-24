import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import estateImg from '././../assets/estate.jpg'
import { capitalizeFirstLetter } from '../utils/textUtils'
import { useLazyQuery } from '@apollo/client'
import { GET_ARTICLES_BY_CATEGORY } from '../graphql/queries/getArticlesByCategory'
import FeatureArticle from '../components/homepage/FeatureArticle'
import { formatDate } from '../utils/dateUtils'
import { BlogPost } from '../types'

const CategoryPage = () => {
    const { category } = useParams()
    const [getPosts, { loading, data, error }] = useLazyQuery(GET_ARTICLES_BY_CATEGORY)

    const handleSearch = () => {
        getPosts({variables: {titleContains: category}})
    }

    useEffect(() => {
        window.scrollTo(0,0)
        if(category && category !== 'All'){
            getPosts({variables: {category: [category]}})
            console.log(data)
        }
        console.log(error)
    }, [category])

  return (
    <div>
        <div className='w-full'>
            <img src={estateImg} className='w-full max-h-[65px] object-cover object-top blur-sm'/>
        </div>
        <div className='flex flex-col justify-center items-center gap-6 my-10 lg:my-14'>
            <h2 className='text-2xl font-os font-bold text-[#183B56] lg:text-3xl'>
                {capitalizeFirstLetter(`${category} Category` || 'All Categories')} 
            </h2>
            <div className='flex flex-col items-center justify-center gap-6 px-6 max-w-[1200px] lg:flex-row lg:flex-wrap'>
                {data?.blogPostCollection.items.map((article: BlogPost) => (
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
                ) )}
                {data?.blogPostCollection.items.map((article: BlogPost) => (
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
                ) )}
                {data?.blogPostCollection.items.map((article: BlogPost) => (
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
                ) )}
            </div>
        </div>
    </div>
  )
}

export default CategoryPage