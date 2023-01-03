import React from 'react'
import { Navbar } from 'react-bootstrap'
import FromTo from './FromTo/FromTo'
import MapRide from './MapRide'


const Home = () => {
  return (
    
    <div className='container '> 
    <MapRide/>
    
    <FromTo/>
    </div>
  )
}

export default Home
