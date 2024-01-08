import React, { useState } from 'react'
import "./Auth.css"
import colorlogo from "../../Images/SiteImages/BackgroundRemoved.png";
import bg from "../../Images/SiteImages/bg.jpg"
// import border from "../../assets/AuthImages/border.png"

export default function Auth() {
  const [isLoginActive, setIsLoginActive] = useState(false);
  return (
    <div className='Auth_body' style={{
      backgroundImage: `url(${bg}), radial-gradient(rgba(0, 188, 212, 0) 40%, rgba(0, 0, 0, 1) 80%)`
    }}>
      <div style={{
        backgroundImage: `url(${bg})`
      }}>
        <div>{isLoginActive ? "Log in" : "Sign Up"}</div>
        <div>
          <div className='image' style={{
            backgroundImage: `url(${colorlogo})`
          }}>
          </div>
          <div className="form">
            {isLoginActive && <form action="/signin" method="post">
              <input type="email" name="" placeholder='EMAIL' />
              <input type="password" name="" placeholder='PASSWORD' />
              <button type="submit">Submit</button>
            </form>
            }
            {!isLoginActive && <form action="/signup" method="post">
              <input type="text" name="name" placeholder='NAME' />
              <input type="email" name="email" placeholder='EMAIL' />
              <input type="password" name="" placeholder='PASSWORD' />
              <input type="password" name="" placeholder='REENTER PASSWORD' />
              <input type="tel" name="" placeholder='PHONE' />
              <input type="text" name="" placeholder='CITY' />
              <input type="text" name="" placeholder='STATE' />
              <input type="text" name="" placeholder='BOB : DD/MM/YY' />
              <select id="selected_unit">
                <optgroup label="Gender">
                  <option value="male">MALE</option>
                  <option value="female">FEMALE</option>
                </optgroup>
              </select>
              <button type="submit">Submit</button>
            </form>
            } <br />
            <div className='bottom_btn' onClick={() => {
              if (isLoginActive) {
                setIsLoginActive(false);
              } else {
                setIsLoginActive(true);
              }
            }}>{isLoginActive ? <span>dont have account ? <span style={{ color: "skyblue" }}>Sign Up</span></span> : <span>allready have an account ? <span style={{ color: "skyblue" }}>Sign In</span></span>}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
