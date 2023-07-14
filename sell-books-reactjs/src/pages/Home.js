import React from 'react';
import Slides from '../components/Slides';
import Notification from '../components/Notification';
import Categories from '../components/Categories';
import BookOutStanding from '../components/BookOutStanding';


const Home = () => {
  return (
    <>
    <div className='wrapper-banner'>
      <Slides/>
      <Notification/>
      {/* <Categories/> */}
      <BookOutStanding/>
    </div>
    
   
    </>
  )
}

export default Home;