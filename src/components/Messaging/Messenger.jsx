import React from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'
import "../../../public/assets/css/custom_css.css";
const Messenger = () => {
  return (
    <div className='flex rounded-lg overflow-hidden bg-slate-600'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Messenger
