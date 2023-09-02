import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { RootState } from './app/store'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from './features/ui/uiSlice'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  const colorTheme = useSelector((state: RootState) => state.ui.theme)
  const dispatch = useDispatch()

  return (
    <>
      <div className='w-full min-h-screen overflow-x-hidden'>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
