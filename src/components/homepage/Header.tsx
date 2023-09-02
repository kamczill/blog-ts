import bg from './../../assets/header-bg.png'
import wave from './../../assets/wave.svg'

const Header = () => {
  return (
    <div className='w-full mt-[-55px] z-[-1]'>
        <div className='w-full relative'>
            <img src={bg} className='grayscale-[70%] w-screen h-[70vh] object-cover md:object-contain md:h-full'/>
            <div className='absolute max-w-screen w-full left-0 bottom-[-1px]'>
              <img src={wave} className='w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Header