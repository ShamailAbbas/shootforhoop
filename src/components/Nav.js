import { React, useRef } from 'react'
import '../css/nav.css'
const Nav = () => {
  const menuref = useRef('')
  const showmenu = () => {
    if (menuref.current.classList.contains('displaymenu')) {
      menuref.current.classList.toggle('closemenu')
      return
    }
    menuref.current.classList.toggle('displaymenu')
  }
  return (
    <>
      <div className='menucontainer'>
        <button onClick={() => showmenu()}>Menu</button>
        <div className='menuitems' ref={menuref}>
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Services</h4>
          <h4>portfolio</h4>
          <h4>contact</h4>
        </div>
      </div>
    </>
  )
}

export default Nav
