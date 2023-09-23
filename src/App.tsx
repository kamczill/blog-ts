import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { RootState } from './app/store'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from './features/ui/uiSlice'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import PostPage from './pages/PostPage';
function App() {
  const colorTheme = useSelector((state: RootState) => state.ui.theme)
  const dispatch = useDispatch()

  return (
    <>
      <div className='w-full min-h-screen overflow-x-hidden relative'>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/post/:slug' element={<PostPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  )
}

export default App
