import ViewAllButton from './ViewAllButton'
import { headingProps } from '../types'


const Heading = ({title, description, showButton, navigateTo}: headingProps) => {
  return (
    <div className='w-full'>
        <h2 className='text-2xl font-bold text-[#183B56] text-center lg:text-start'>{title}</h2>
        <div className='flex flex-col items-center gap-3 w-full lg:flex-row lg:justify-between lg:items-center'>
            <p className='text-[#5A7184] text-center max-w-[500px] lg:text-start'>{description}</p>
            {showButton ? <ViewAllButton classes={'hidden lg:flex'} navigateTo={navigateTo || ''} /> : ''}
        </div>
    </div>
  )
}

export default Heading