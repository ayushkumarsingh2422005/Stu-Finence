import React from 'react'
import './NevBar.css'
import { Link } from 'react-router-dom';

export default function NevBar() {
  return (
    <div className='nevbar'>
      <div><Link to='/auth'><i className="fa-solid fa-right-to-bracket"></i></Link></div>
      <div><Link to='/contact-us'><i className="fa-solid fa-list"></i></Link></div>
      <div><Link to='/'><i className="fa-solid fa-house"></i></Link></div>
      <div><Link><i className="fa-solid fa-list"></i></Link></div>
      <div><Link to='/shopping'><i className="fa-solid fa-cart-shopping"></i></Link></div>
    </div>
  )
}
