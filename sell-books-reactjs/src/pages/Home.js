import React from 'react';
import Slides from '../components/Slides';
import Notification from '../components/Notification';


const Home = () => {
  return (
    <>
    <div className='wrapper-banner'>
      <Slides/>
      <Notification/>
    </div>
    
   
    </>
  )
}

export default Home;