import {useState, useEffect} from 'react'
import { useLazyQuery} from '@apollo/client';
import { GET_SEARCH_RESULT_BY_TITLES } from '../../graphql/queries/getSearchResultByTitle';
import MoonLoader from 'react-spinners/MoonLoader';
import SearcherWrapper from './SearcherWrapper';
import { BlogPost } from '../../types';
import { Link, useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/textUtils';
const tags = ['recent', 'caseStudies', 'popular']


const Searcher = () => {
    const [searchValue, setSearchValue] = useState('')
    const [getPosts, { loading, data, error }] = useLazyQuery(GET_SEARCH_RESULT_BY_TITLES)
    const shouldShowSearch = searchValue.length > 0;
    const noResults = data?.blogPostCollection.items?.length < 1;
    const hasResults = data?.blogPostCollection.items?.length > 0;
    const navigate = useNavigate()

    const handleSearch = () => {
        getPosts({variables: {titleContains: searchValue}})
    }

    const handleNavigate = (navigateTo: string) => {
        navigate(`categories/${navigateTo}`)
    }

    useEffect(() => {
        if(searchValue.length > 0){
            handleSearch();
        }
    }, [searchValue])

  return (
    <div className='w-full max-w-[80%]  flex flex-col gap-3 relative md:max-w-[500px]'>
        <div className='rounded-xl pr-4 py-2 w-full bg-white flex gap-5 relative'>
            <input type='text' name='search' id='search' className='py-2 pl-4 bg-white w-full text-black font-os focus-visible:outline-none' placeholder='Search article...' onChange={e => setSearchValue(e.target.value)} value={searchValue} autoComplete='off'/>
            <button className='py-2 px-3 rounded-md bg-blue-500 '>Search</button>
            {shouldShowSearch && (
                <div className='absolute left-0 top-[65px] bg-white w-full min-h-[150px] h-max z-30 rounded-md shadow-md'>
                    {error && (
                        <SearcherWrapper>
                            <p className="text-black">Failed to fetch data. Please try again.</p>
                        </SearcherWrapper>
                    )}

                    {loading && (
                        <SearcherWrapper>
                            <MoonLoader color="#36d7b7" />
                        </SearcherWrapper>
                    )}

                    {noResults && (
                        <SearcherWrapper>
                            <p className="text-black">No results</p>
                        </SearcherWrapper>
                    )}

                    {hasResults && (
                        <div className='h-full flex flex-col gap-4 py-5 px-4'>
                            {data?.blogPostCollection.items.map((el: BlogPost) => (
                                <Link to={`/posts/${el.slug}`} className='text-black font-os underline underline-offset-2'>{el.title}</Link>
                            ))}
                        </div>
                    )}

                </div>
            )}
           
        </div>
        <div className='flex items-center justify-center gap-4'>
        <h4 className='hidden text-lg font-bold md:block'>Popular Tags:</h4>
        <ul className='flex gap-2'>
            {tags.map(tag => (
                <li onClick={() => handleNavigate(tag)} className='border rounded-md px-3 py-1 flex justify-center items-center text-center backdrop-blur-md hover:cursor-pointer'>{capitalizeFirstLetter(tag)}</li>
            ))}
        </ul>
        </div>        
    </div>
  )
}

export default Searcher