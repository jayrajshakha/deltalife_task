import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import AnotherHero from './components/AnotherHero'
import Item from './components/Item'
import Form from './components/Form'
import Featured2 from './components/Hero3'
import YoutubePage from './components/YoutubePage'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
 
const App = () => {
  return (
    <div className='w-screen '>
      <Navbar />
      <Hero />
      <Featured />
      <AnotherHero />
      <Item />
      <Form />
      <Featured2 />
      <YoutubePage />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App