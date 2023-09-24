import {useState, useEffect} from 'react'
import { useQuery } from '@apollo/client';
import { GET_SINGLE_POST } from '../graphql/queries/getSinglePost';
import { useParams, useLocation } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { FormatContentProps } from '../types';
import { ParallaxBanner } from 'react-scroll-parallax';
import PopularArticles from '../components/homepage/PopularArticles';



const FormatContent = ({ nodeType, content }: FormatContentProps) => {
    switch (nodeType) {
      case 'heading-4':
        return <h4 className="text-xl pt-7">{content[0].value}</h4>;
      case 'paragraph':
        return <p className="text-base pt-2">{content[0].value}</p>;
      default:
        return <span>{content[0].value}</span>
    }
  };

const PostPage = () => {
    const { slug } = useParams();
    const { pathname } = useLocation();

    const { loading, error, data } = useQuery(GET_SINGLE_POST, {
        variables: { slug: slug },
      });


    useEffect(() => {
      window.scrollTo(0,0);
    }, [pathname])
    
  return (
    <div style={{}} className={`min-h-[500px] pb-10`} >
        { loading && <MoonLoader color="#36d7b7" />}
        { error && <p>Failed to fetch data. Please try again.</p>}
        <div className='w-full'>
        <ParallaxBanner
          layers={[{ image: `${data?.blogPostCollection.items[0].coverImage.url}`, speed: -25 }]}
          className="aspect-[2/1] object-cover min-h-[50vh] md:max-h-[70vh]"
        />
        </div>
        <div className='font-os p-4 py-10 flex flex-col items-center justify-center'>
            <div className='max-w-[1100px]'>
                <h1 className='text-2xl text-center text-[#0D2436] pb-10 underline underline-offset-4 md:text-xl lg:text-3xl'>
                    {data?.blogPostCollection.items[0].title}
                </h1>
                {data?.blogPostCollection.items[0].content.json.content.map((item: FormatContentProps) => (
                    <>
                        <FormatContent 
                            nodeType={item.nodeType} 
                            content={item.content} 
                        />
                    </>
                ))
                }
            </div>
        </div>
        <div className='flex justify-center mt-10 pt-10 border-t-2'>
          <PopularArticles />
        </div>
    </div>
  )
}

export default PostPage