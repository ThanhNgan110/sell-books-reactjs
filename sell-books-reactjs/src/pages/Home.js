import React from 'react';
import Slides from '../components/Slides';
import Notification from '../components/Notification';
import Categories from '../components/Categories';


const Home = () => {
  return (
    <>
    <div className='wrapper-banner'>
      <Slides/>
      <Notification/>
      <Categories/>
    </div>
    
   
    </>
  )
}

export default Home;