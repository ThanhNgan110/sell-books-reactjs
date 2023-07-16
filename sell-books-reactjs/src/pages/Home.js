import React from 'react';
import Slides from '../components/Slides';
import Notification from '../components/Notification';
import Categories from '../components/Categories';
import BookOutStanding from '../components/BookOutStanding';
import BookSelling from '../components/BookSelling';
import BookNew from '../components/BookNew';
import BookDifference from '../components/BookDifference';



const Home = () => {
  return (
    <>
    <div className='wrapper-banner'>
      <Slides/>
      <Notification/>
      <Categories/>
      <BookOutStanding/>
      <BookSelling/>
      <BookNew/>
      <BookDifference/>
    </div>
    
   
    </>
  )
}


export default Home;