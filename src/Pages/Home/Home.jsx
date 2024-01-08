import React from 'react';
import { motion } from "framer-motion";
// import discountElements from './discountElements';
import NevBar from '../../Components/NevBar/NevBar';
import Top from '../../Components/Top/Top';
import Footer from '../../Components/Footer/Footer';
import "./Home.css";
import ad1 from '../../Images/Ads/ad1.webp';
import ad2 from '../../Images/Ads/ad2.jpg';
import ad3 from '../../Images/Ads/ad3.jpg';
import data from '../../DataSets/item.json';
import catagory from '../../DataSets/Catagory.json';

export default function Home() {
  return (
    <>
      <Top /><br />
      <span>Top Sales</span>
      <motion.div className='discount'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}>
        {catagory != null ?
          catagory.map(function (params) {
            return <div style={{textAlign:"center"}}>
              <img src={params.image} style={{height:"100%"}}/>
              <br />
              {params.category}
            </div>
          })
          : "searching"}

      </motion.div>
<br /><br />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }} id="myCarousel" className="carousel slide ads" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ad1} className="d-block w-100" alt="First Slide" />
          </div>
          <div className="carousel-item active">
            <img src={ad2} className="d-block w-100" alt="First Slide" />
          </div>
          <div className="carousel-item active">
            <img src={ad3} className="d-block w-100" alt="First Slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </motion.div> <br /><br />
      <span>Top Productes</span>
      <motion.div className='catagory'
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}>
        
        {data != null ?
          data.map(function (params) {
            return <div style={{backgroundImage:`url(${params.image})`, backgroundSize:"cover"}}></div>
          })
          : "searching"}
      </motion.div>
      <Footer />
      <NevBar />
    </>
  )
}
