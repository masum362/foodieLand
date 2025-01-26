import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes } from 'react-router'
import { Route } from 'lucide-react'
import Layout from './Layout'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Layout />
  </BrowserRouter>
)
