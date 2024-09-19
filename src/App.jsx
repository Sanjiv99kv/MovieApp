import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setBannerData, setImageURL } from './store/MovieSlice.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ExolorePage from './pages/ExolorePage.jsx'
import DetailsPage from './pages/DetailPage.jsx'
import SearchPage from './pages/SearchPage.jsx'

function App() {

  const dispatch = useDispatch();

  const fetchTrendingData = async () => {
    try {
      const response = await axios.get('/trending/all/week')
      dispatch(setBannerData(response.data.results))
    } catch (error) {
      console.log(error);
    }
  }

  const fetchConfiguration = async () => {
    try {
      const response = await axios.get("/configuration")
      dispatch(setImageURL(response.data.images.secure_base_url + "original"))

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTrendingData()
    fetchConfiguration()
  }, [])

  return (
    <BrowserRouter>
      <main>
        <Header />
        <div className='min-h-[90vh]'>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/:explore' element={<ExolorePage/>}></Route>
              <Route path='/:explore/:id' element={<DetailsPage/>}></Route>
              <Route path='/search' element={<SearchPage/>}></Route>
          </Routes>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  )
}

export default App
