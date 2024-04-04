import './nav.css'
import {FaHome,  FaUser, FaAngleDown} from 'react-icons/fa'
import { BiBook } from "react-icons/bi";
import { MdContactMail } from "react-icons/md";
import { useState } from 'react'

const Nav = () => {
  const [active, setActive] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}>< FaUser/></a>
      <a href="#portfolio" onClick={() => setActive('#portfolio')} className={active === '#portfolio' ? 'active' : ''}><BiBook/></a>
      <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><MdContactMail/></a>
      <a href="#footer" onClick={() => setActive('#footer')} className={active === '#footer' ? 'active' : ''}><FaAngleDown/></a>
    </nav>
  )
}

export default Nav