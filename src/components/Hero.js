import React from 'react'
import '../css/hero.css'
import aaa from '../images/bgimage.jpg'
import bbb from '../images/image2.jpg'
import ccc from '../images/image3.jpg'
import first from '../images/first.PNG'
import second from '../images/second.PNG'
import third from '../images/third.PNG'
import Nav from '../components/Nav.js'
const Hero = () => {
  return (
    <>
      <div className='body'>
        <div className='containerhome'>
          <img src={aaa} alt={aaa} className='bgimage ' />
          <div className='slogan'>
            <h1 className='heading'>
              Shoot for <br />
              the hoops!
            </h1>
            <p className='subheading'>Aiming low is not an option for us</p>
          </div>
          <Nav />
        </div>
        <div className='secondpage'>
          <img src={bbb} alt={bbb} className='image' />
          <div className='content'>
            <h1 className='heading'>
              Creative <br />
              And fresh
            </h1>
            <p className='subheading'>Our digital agency</p>
            <p className='pcontent'>
              Focus infographic venture business model canvas gamification
              ecosystem. Business plan gamification user experience low hanging
              fruit twitter. Metrics research and development market paradigm
              shift growth hacking disruptive user experience iPad social media
              angel investor alpha. Social proof lean startup alpha scrum
              project non-disclosure agreement.
            </p>
            <button className='btn'>VIEW portfolio</button>
          </div>
        </div>
        <div className='thirdpage'>
          <div className='thirdpagecontent'>
            <h1 className='heading'>
              Hip <br />
              and Funky
            </h1>
            <p className='subheading'>We try new things</p>
            <p className='pcontent'>
              Focus infographic venture business model canvas gamification
              ecosystem. Business plan gamification user experience low hanging
              fruit twitter. Metrics research and development market paradigm
              shift growth hacking disruptive user experience iPad social media
              angel investor alpha. Social proof lean startup alpha scrum
              project non-disclosure agreement.
            </p>
            <button className='btn'> our services</button>
          </div>
          <img src={ccc} alt={ccc} className='image' />
        </div>
        <div className='fourthpage'>
          <div className='fourthcontent'>
            <div className='fouritems'>
              <img src={first} alt={first} />
              <h1 className='heading'>Branding</h1>
              <p className='pcontent'>
                Focus infographic venture business model canvas gamification
                ecosystem. Business plan gamification user experience low
                hanging fruit twitter. Metrics research and development market
                paradigm shift growth hacking disruptive user experience iPad
                social media angel investor alpha.
              </p>
            </div>
            <div className='fouritems'>
              <img src={second} alt={second} />
              <h1 className='heading'>Web Design</h1>
              <p className='pcontent'>
                Focus infographic venture business model canvas gamification
                ecosystem. Business plan gamification user experience low
                hanging fruit twitter. Metrics research and development market
                paradigm shift growth hacking disruptive user experience iPad
                social media angel investor alpha.
              </p>
            </div>
            <div className='fouritems'>
              <img src={third} alt={third} />
              <h1 className='heading'>Web Design</h1>
              <p className='pcontent'>
                Focus infographic venture business model canvas gamification
                ecosystem. Business plan gamification user experience low
                hanging fruit twitter. Metrics research and development market
                paradigm shift growth hacking disruptive user experience iPad
                social media angel investor alpha.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
