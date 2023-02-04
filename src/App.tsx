
import {Route,Routes} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'

function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/testgit' element={<HomePage />} />
        <Route path='testgit/about' element={<AboutPage />} />
      </Routes>
    </div>
  )
}

export default App
