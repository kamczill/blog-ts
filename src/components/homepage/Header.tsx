import bg from './../../assets/header-bg.png'
import wave from './../../assets/wave.svg'
import FeaturePost from './FeaturePost'
import Searcher from './Searcher'

const Header = () => {
  return (
    <div className='w-full mt-[-55px] '>
        <div className='w-full relative'>
            <img src={bg} className='grayscale-[70%] w-screen h-[70vh] object-cover object-top md:object-contain md:h-full'/>
            <div className='absolute max-w-screen w-[101vw] left-[-2px] bottom-[-1px]'>
              <img src={wave} className='w-full'/>
            </div>
            <div className='text-white absolute top-[40%] w-full flex flex-col justify-center items-center gap-5 z-[0] md:top-[40%] lg:top-[45%]' >
              <h2 className='text-3xl font-bold'>
                Our newsroom
              </h2>
              <Searcher />
              <FeaturePost />
            </div>
        </div>
    </div>
  )
}

export default Header