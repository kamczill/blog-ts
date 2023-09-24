import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { RootState } from './app/store'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from './features/ui/uiSlice'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import PostPage from './pages/PostPage';
import { ParallaxProvider } from 'react-scroll-parallax';
import CategoryPage from './pages/CategoryPage';


function App() {
  const colorTheme = useSelector((state: RootState) => state.ui.theme)
  const dispatch = useDispatch()

  return (
    <>
      <div className='flex flex-col justify-between w-full min-h-screen overflow-x-hidden relative'>
        <ParallaxProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/posts/:slug' element={<PostPage />} />
              <Route path='/categories/:category' element={<CategoryPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ParallaxProvider>
      </div>
    </>
  )
}

export default App
