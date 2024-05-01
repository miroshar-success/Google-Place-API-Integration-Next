import React from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'

const Messenger = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-slate-600 bg-clip-padding'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Messenger