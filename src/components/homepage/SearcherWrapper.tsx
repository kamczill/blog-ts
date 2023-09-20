import React, {ReactNode} from 'react'

interface SearcherWrapperProps {
    children: ReactNode;
  }
  

const SearcherWrapper = ({children}: SearcherWrapperProps) => {
  return (
    <div className='w-full flex items-center justify-center min-h-[inherit]'>
        {children}
    </div>
  )
}

export default SearcherWrapper