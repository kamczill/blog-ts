import {useState} from 'react'

const tags = ['Design', 'User Experience', 'User Interface']

const Searcher = () => {
    const [searchValue, setSearchValue] = useState('')
  return (
    <div className='w-full max-w-[80%] md:max-w-[500px] flex flex-col gap-3'>
        <div className='rounded-xl px-4 py-2 w-full bg-white flex gap-5'>
            <input type='text' name='search' id='search' className='py-2 bg-white w-full text-black font-os' placeholder='Search article...' onChange={e => setSearchValue(e.target.value)} value={searchValue}/>
            <button className='py-2 px-3 rounded-md bg-blue-500 '>Search</button>
        </div>
        <div className='flex items-center justify-center gap-4'>
        <h4 className='hidden text-lg font-bold md:block'>Popular Tags:</h4>
        <ul className='flex gap-2'>
            {tags.map(tag => (
                <li className='border rounded-md px-3 py-1 flex justify-center items-center text-center backdrop-blur-md '>{tag}</li>
            ))}
        </ul>
        </div>
    </div>
  )
}

export default Searcher