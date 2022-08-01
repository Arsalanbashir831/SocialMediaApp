import React from 'react'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import { Link } from "react-router-dom";
import './LogoSearch.css'
const LogoSearch = () => {
  return (
   <div className="LogoSearch">
   <Link to='/Home'> <img src={Logo} alt="" /></Link>
      
       <div className="Search">
           <input type="text" placeholder='#Explore' />
           <div className="s-icon">
               <UilSearch/>
           </div>
       </div>
   </div>
  )
}

export default LogoSearch