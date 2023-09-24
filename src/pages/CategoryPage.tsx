import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import estateImg from '././../assets/estate.jpg'
import { capitalizeFirstLetter } from '../utils/textUtils'
import { useLazyQuery } from '@apollo/client'
import { GET_ARTICLES_BY_CATEGORY } from '../graphql/queries/getArticlesByCategory'
const CategoryPage = () => {
    const { category } = useParams()
    const [getPosts, { loading, data, error }] = useLazyQuery(GET_ARTICLES_BY_CATEGORY)

    const handleSearch = () => {
        getPosts({variables: {titleContains: category}})
    }

    useEffect(() => {
        if(category && category !== 'All'){
            getPosts({variables: {category: [category]}})
            console.log(data)
        }
        console.log(error)
    }, [category])

  return (
    <div>
        <div className='w-full'>
            <img src={estateImg} className='w-full max-h-[60px] object-cover object-top blur-sm'/>
        </div>
        <div className='flex flex-col justify-center items-center gap-6 my-10'>
            <h2 className='text-2xl font-os font-bold text-[#183B56]'>
                {capitalizeFirstLetter(`${category} Category` || 'All Categories')} 
            </h2>
        </div>
    </div>
  )
}

export default CategoryPage