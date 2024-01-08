import React from 'react';
import './Top.css';
import { useHistory } from 'react-router-dom';
export default function Top() {
  return (
    <div className='top'>
      <div id='logo'>NexusMart</div>
      <div id='search'>
        <input type="search" placeholder='search your prod' />
        <button type="submit" onClick={() => {

        }}><i className="fa-solid fa-magnifying-glass"></i></button>

      </div>
      <div>
        <div>

        </div>
      </div>
    </div>
  )
}
