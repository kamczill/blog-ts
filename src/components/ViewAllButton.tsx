import { RiArrowRightLine } from 'react-icons/ri'
import { viewAllButtonProps } from '../types'

const ViewAllButton = ({classes, text}: viewAllButtonProps) => {
    return (
      <button className={` ${classes} border-2 border-[#1565D8] text-[#1565D8] rounded-md p-2 flex justify-center items-center gap-2 w-full max-w-[200px]`}>
        {text ? text : 'View All'} <RiArrowRightLine className='' /> 
      </button>
    )
}

export default ViewAllButton