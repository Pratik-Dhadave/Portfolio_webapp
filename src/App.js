import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Work from './components/Work'
import Timeline from './components/Timeline'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer.jsx'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return <>
  <Header />
  <Home />
  <Work />
  <Timeline />
  <Services />
  <Testimonial />
  <Testimonial />
  <Contact />
  <Footer />
  <Toaster />
  </>
}

export default App