import React from 'react'
import Search from '../Search'
import Logo from './dribbble.svg'
import './style.css'

const Sidebar = () => {
  return (
    <div styleName='sidebar'>
      <div styleName='logo'>
        <Logo />
        <Search />
      </div>
    </div>
  )
}

export default Sidebar
