import Navbar from './components/shared/Navbar'

import Footer from './components/shared/Footer'
import { Outlet } from 'react-router'
function App() {


  return (
    <div className=' max-w-[1536px] mx-auto'>
      <Navbar />
      <div className='my-8'>
      <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
