import Navbar from './components/shared/Navbar'

import Footer from './components/shared/Footer'
import { Outlet } from 'react-router'
function App() {


  return (
    <>
      <Navbar />
      <div className='my-8'>
      <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
