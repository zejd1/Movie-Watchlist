import Home from './pages/Home'
import WatchList from './pages/WatchList'
import { Routes, Route } from 'react-router-dom'
import './css/App.css'
import NavBar from './Components/NavBar'
import { MovieProvider } from './context/MovieContext'

function App() {

  return (
    <>
    <MovieProvider>
      <NavBar></NavBar>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/WatchList' element={<WatchList></WatchList>}></Route>
        </Routes>
      </main>
      </MovieProvider>
    </>
  )
}

export default App
