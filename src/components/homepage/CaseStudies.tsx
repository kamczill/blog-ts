import Heading from '../Heading'
import Gallery from '../Gallery'
import { useQuery } from '@apollo/client'
import { GET_CASE_STUDIES_ARTICLES } from '../../graphql/queries/getCaseStudiesArticles'


const CaseStudies = () => {
  const { data, loading, error } = useQuery(GET_CASE_STUDIES_ARTICLES)
  return (
    <div className='w-full max-w-[1100px] flex flex-col px-6 gap-4 xl:p-0'>
        <Heading 
            title='Case Studies'
            description='We share common trends, strategies ideas, opinions, short & long stories from the team behind company.'
            showButton
        />
        {data
          ? <Gallery slides={data.blogPostCollection}/>
          : ''
        }
      
    </div>
  )
}

export default CaseStudies