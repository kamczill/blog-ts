import AllArticles from '../components/homepage/AllArticles'
import CaseStudies from '../components/homepage/CaseStudies'
import Header from '../components/homepage/Header'
import Newsletter from '../components/homepage/Newsletter'
import PopularArticles from '../components/homepage/PopularArticles'
import RecentArticles from '../components/homepage/RecentArticles'
import {Helmet} from "react-helmet";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation()

  useEffect(() => {
    const elementId = location.hash.substring(1); 
    const element = document.getElementById(elementId);
    if (element) element.scrollIntoView({ behavior: 'smooth' }); 
  }, [location]);
  return (
    <div className='w-full flex flex-col justify-center items-center gap-12 lg:gap-[96px]'>
      <Helmet>
        <title>heya. - blog app</title>
        <meta name="description" content="Your blog site about real estates" />
      </Helmet>
        <Header />
        <PopularArticles />
        <RecentArticles />
        <CaseStudies />
        <AllArticles />
        <Newsletter />
    </div>
  )
}

export default HomePage