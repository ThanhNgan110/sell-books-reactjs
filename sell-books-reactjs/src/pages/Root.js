import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RootPage = () => {
  return (
   <>
   <Header/>
   {/* <Footer/> */}
   <Outlet/>
   <Footer/>
   </>
  )
}

export default RootPage