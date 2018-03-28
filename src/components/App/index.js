import React from 'react'
import Sidebar from '../Sidebar'
import Content from '../Content'
import './style.css'

const Main = () => {
  return (
    <main styleName='main'>
      <Sidebar />
      <Content />
    </main>
  )
}

export default Main
