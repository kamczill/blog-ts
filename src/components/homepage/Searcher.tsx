import {useState, useEffect} from 'react'
import { useLazyQuery, gql } from '@apollo/client';
import { GET_SEARCH_RESULT_BY_TITLES } from '../../graphql/queries/getSearchResultByTitle';
import MoonLoader from 'react-spinners/MoonLoader';

const tags = ['Design', 'User Experience', 'User Interface']

const Searcher = ({onImageLoad}) => {
    const [searchValue, setSearchValue] = useState('')

    const [getChuj, { loading, data, error }] = useLazyQuery(GET_SEARCH_RESULT_BY_TITLES)

    const handleSearch = () => {
        getChuj({variables: {titleContains: searchValue}})
    }

    useEffect(() => {
        if(searchValue.length > 0){
            handleSearch();
            console.log(data)
        }
    }, [searchValue])

  return (
    <div className='w-full max-w-[80%]  flex flex-col gap-3 relative md:max-w-[500px]'>
        <div className='rounded-xl px-4 py-2 w-full bg-white flex gap-5 relative'>
            <input type='text' name='search' id='search' className='py-2 bg-white w-full text-black font-os' placeholder='Search article...' onChange={e => setSearchValue(e.target.value)} value={searchValue}/>
            <button className='py-2 px-3 rounded-md bg-blue-500 '>Search</button>
            {
                searchValue.length > 0 
                ? (
                    <div className='absolute left-0 top-[65px] bg-white w-full min-h-[150px] h-max z-30 rounded-md shadow-md'>
                        {loading 
                            ? (
                            <div className='w-full flex items-center justify-center min-h-[inherit]'>
                                <MoonLoader color="#36d7b7" />
                            </div>
                            )
                            : ''
                        }


                        { 
                            data?.blogPostCollection.items < 1 
                                ? (
                                    <div className='w-full flex items-center justify-center h-full min-h-[inherit]'>
                                        <p className="text-black">No results</p>
                                    </div>
                                ): ''
                        }


                        <div className={`${data?.blogPostCollection.items.length > 0 ? '': 'hidden' } h-full flex flex-col gap-4 py-5 px-4`}>
                            {
                                data?.blogPostCollection.items.map(el => (
                                    <a className='text-black font-os underline underline-offset-2'>{el.title}</a>
                                ))
                            }
                        </div>
                </div>
                )
                : ''
            }
           
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