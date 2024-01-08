import React from 'react';
import { motion } from "framer-motion";
import discountElements from './discountElements';
import NevBar from '../../Components/NevBar/NevBar';
import Top from '../../Components/Top/Top';
import "./Home.css";
import ad1 from '../../Images/Ads/ad1.webp';
import ad2 from '../../Images/Ads/ad2.webp';
import ad3 from '../../Images/Ads/ad3.webp';

export default function Home() {
  return (
    <>
      <Top />
      <span>Top Sales</span>
      <div className='discount'>
        <discountElements content='ayus'/>
        <discountElements content='ayus'/>
        <discountElements content='ayus'/>
        <discountElements content='ayus'/>
        <discountElements content='ayus'/>
        <discountElements content='ayus'/>
        <discountElements content='ayus'/>
        
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div id="myCarousel" className="carousel slide ads" data-bs-ride="carousel">
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
      </div>
      <NevBar />
    </>
  )
}
