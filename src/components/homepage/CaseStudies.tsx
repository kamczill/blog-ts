import React, { useRef, useEffect } from 'react'
import Heading from '../Heading'
import FeaturePost from './FeaturePost'
import Gallery from '../Gallery'


const CaseStudies = () => {

  return (
    <div className='w-full max-w-[1100px] flex flex-col p-6 lg:p-0'>
        <Heading 
            title='Case Studies'
            description='We share common trends, strategies ideas, opinions, short & long stories from the team behind company.'
            showButton
        />
      <Gallery />
    </div>
  )
}

export default CaseStudies