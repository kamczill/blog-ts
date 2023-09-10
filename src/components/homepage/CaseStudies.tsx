import Heading from '../Heading'
import Gallery from '../Gallery'


const CaseStudies = () => {

  return (
    <div className='w-full max-w-[1100px] flex flex-col px-6 gap-4 xl:p-0'>
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