import bg from './../../assets/header-bg.png'
import wave from './../../assets/wave.svg'
import FeaturePost from './FeaturePost'
import Searcher from './Searcher'
import { useEffect, useRef, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_LATEST_ARTICLE } from '../../graphql/queries/getLastestArticle'
import { BounceLoader } from 'react-spinners'

const Header = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const parentRef2 = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState<number>(0);
  const { loading, error, data } = useQuery(GET_LATEST_ARTICLE);
  
  useEffect(() => {
    if (error) console.log(error)
  },[error])

  const setParentHeightToIncludeAbsoluteChildren = () => {
    if (!parentRef.current || !parentRef2.current) return;

    const parentElement = parentRef.current;
    const parentElement2 = parentRef2.current;
    let bottomMostPoint = 0;

    if(parentElement && parentElement2){

      Array.from(parentElement.children).forEach((child) => {
        const childRect = child.getBoundingClientRect();
        const parentRect = parentElement.getBoundingClientRect();
        const relativeBottom = childRect.bottom - parentRect.top;
        
        if (relativeBottom > bottomMostPoint) {
          bottomMostPoint = relativeBottom;
        }
      });
      
      parentElement2.style.height = `${bottomMostPoint}px`;
    }
  };

  const handleImageLoad: () => void = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    // Function to run when window resizes
    const handleResize = () => {
      if (imagesLoaded === 2) {
        setParentHeightToIncludeAbsoluteChildren();
      }
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up after component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [imagesLoaded]);

  useEffect(() => {
    if (imagesLoaded === 2) {
      setParentHeightToIncludeAbsoluteChildren();
    }
  }, [imagesLoaded]);
  return (
    <div ref={parentRef2} className='w-full'>
        <div ref={parentRef} className='w-full relative'>
            <img src={bg} className='grayscale-[70%] w-screen h-[100vh] object-cover object-top md:object-contain md:h-full' onLoad={handleImageLoad}/>
            <div className='absolute max-w-screen w-[101vw] left-[-2px] bottom-[-1px]'>
              <img src={wave} className='w-full'/>
            </div>
            <div className='text-white absolute top-[35%] w-full flex flex-col justify-center items-center gap-5 z-[0] md:top-[30%] lg:top-[30%]' >
              <h2 className='text-3xl font-bold'>
                Our newsroom
              </h2>
              <div className='flex justify-center'>
              <Searcher />
              </div>
              <div className='hidden mt-[100px] xl:block 2xl:mt-[170px]'>
                {loading 
                  ? <BounceLoader color="#36d7b7" />
                  : ''
                }
                <FeaturePost 
                  onImageLoad={handleImageLoad} 
                  title={data?.blogPostCollection.items[0].title}
                  avatarImg={data?.blogPostCollection.items[0].author.avatar.url}
                  author={`${data?.blogPostCollection.items[0].author.name} ${data?.blogPostCollection.items[0].author.surname}`}
                  date={data?.blogPostCollection.items[0].date}
                  coverImage={data?.blogPostCollection.items[0].coverImage.url}
                  content={data?.blogPostCollection.items[0].content}
                />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header