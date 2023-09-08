import Header from '../components/homepage/Header'
import PopularArticles from '../components/homepage/PopularArticles'

const HomePage = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-12 lg:gap-[96px]'>
        <Header />
        <PopularArticles />
    </div>
  )
}

export default HomePage