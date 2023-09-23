import React, {useState, useEffect} from 'react'
import { useQuery, gql } from '@apollo/client';
import { GET_SINGLE_POST } from '../graphql/queries/getSinglePost';
import { useParams } from 'react-router-dom';

const PostPage = () => {
    const [navbarHeight, setNavbarHeight] = useState(0)
    const { slug } = useParams();

    const { loading, error, data } = useQuery(GET_SINGLE_POST, {
        variables: { slug: slug },
      });


    useEffect(() => {
        console.log(data)
        const navbar = document.querySelector('#navbar')
        if(navbar){

            setNavbarHeight(navbar.getBoundingClientRect().height)
        }
    }, [navbarHeight])
    
  return (
    <div style={{}} className={`min-h-[500px]`}>
        <div className='w-full'>
            <img src={data?.blogPostCollection.items[0].coverImage.url} className='w-full object-cover object-top max-h-[70vh]'/>
        </div>
        <div className='font-os p-4 flex flex-col items-center justify-center'>
            <h1 className='text-lg text-[#0D2436] md:text-xl lg:text-2xl'>
                {data?.blogPostCollection.items[0].title}
            </h1>
            {data?.blogPostCollection.items[0].content.json.content.map(item => (
                <>
                {item?.content[0].value}
                </>
            ))
            }

        </div>
    </div>
  )
}

export default PostPage