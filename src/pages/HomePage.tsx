import CaseStudies from '../components/homepage/CaseStudies'
import Header from '../components/homepage/Header'
import PopularArticles from '../components/homepage/PopularArticles'
import RecentArticles from '../components/homepage/RecentArticles'

const HomePage = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-12 lg:gap-[96px]'>
        <Header />
        <PopularArticles />
        <RecentArticles />
        <CaseStudies />
    </div>
  )
}

export default HomePage