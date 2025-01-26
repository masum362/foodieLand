import Navbar from './components/shared/Navbar'

import Footer from './components/shared/Footer'
import { Outlet } from 'react-router'
function App() {


  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
