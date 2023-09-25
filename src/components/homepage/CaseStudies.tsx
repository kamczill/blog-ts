import {useLayoutEffect} from 'react';
import Heading from '../Heading'
import Gallery from '../Gallery'
import { useQuery } from '@apollo/client'
import { GET_CASE_STUDIES_ARTICLES } from '../../graphql/queries/getCaseStudiesArticles'
import MoonLoader from 'react-spinners/MoonLoader';
import { useAnimate, useInView} from 'framer-motion';

const CaseStudies = () => {
  const { data, loading, error } = useQuery(GET_CASE_STUDIES_ARTICLES)
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, {margin: "-20% 0px 0px 0px", once: true})

  useLayoutEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: [.5, 1], y: ["30%", "0%"]}, {ease: "easeIn", duration: .6})}
  },[isInView])

  return (
    <div ref={scope} className='w-full max-w-[1100px] flex flex-col px-6 gap-4 xl:p-0'>
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