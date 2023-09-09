import React, {useEffect, useRef} from 'react'
import base from './../assets/base.png'

const NewsletterFeature = () => {
    const parentRef = useRef<HTMLDivElement>(null)
    const childRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const parent = parentRef.current;
        const child = childRef.current;

        const handleResize = () => {
            if(parent && child){
            console.log(child.offsetHeight)
            console.log(parent.offsetHeight)
            parent.style.height = `${child.offsetHeight + 50}px`
            }
        }
        
        
        window.addEventListener('resize', handleResize);

        // Clean up after component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };

    }, [])

  return (
    <div ref={parentRef} className='w-full relative max-w-[500px]'>
        <div className='absolute w-[200px] h-[200px] bg-[#1565D8] rounded-md z-0 right-[-10px]  top-[60px] opacity-70 xl:right-[-25px] xl:top-[100px]'>
        </div>
        <div className='absolute w-[200px] h-[200px] bg-[#FFFFFF] rounded-md z-0 bottom-0 left-[-10px] opacity-10 xl:left-[-25px] xl:bottom-[-5px]'>
        </div>
        <div ref={childRef} className='flex flex-col gap-4 p-2 bg-white rounded-md relative z-10 max-w-[90%] mx-auto top-10 xl:max-w-[650px]'>
            <div>
                <img src={base} />
            </div>
            <div className='px-2 font-os flex flex-col gap-2'>
                <h2 className='font-bold text-lg'>The best aticles every week</h2>
                <p className='text-[#5A7184] max-w-[240px]'>
                Our insurance plans offers are priced the same everywhere else.
                </p>
            </div>
        </div>
    </div>
  )
}

export default NewsletterFeature