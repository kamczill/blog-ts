import Heading from '../Heading'
import Gallery from '../Gallery'
import { useQuery } from '@apollo/client'
import { GET_CASE_STUDIES_ARTICLES } from '../../graphql/queries/getCaseStudiesArticles'
import MoonLoader from 'react-spinners/MoonLoader';
import useAnimateOnView from '../../hooks/useAnimateOnView';

const CaseStudies = () => {
  const { data, loading, error } = useQuery(GET_CASE_STUDIES_ARTICLES)
  const [scope] = useAnimateOnView();

  return (
    <div ref={scope} className='w-full max-w-[1100px] flex flex-col px-6 gap-4 min-h-[400px] xl:p-0'>
        <Heading 
            title='Case Studies'
            description='We share common trends, strategies ideas, opinions, short & long stories from the team behind company.'
            showButton
            navigateTo='categories/caseStudies'
        />
        {loading && <MoonLoader color="#36d7b7" />}
        {error && <p>Failed to fetch data. Please try again.</p>}
        {data
          ? <Gallery slides={data.blogPostCollection}/>
          : ''
        }
      
    </div>
  )
}

export default CaseStudies