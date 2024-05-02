import React from 'react'
import Message from './Message'

const MessageContainer = () => {
  return (
    <div className='flex flex-col w-full'>
        <>
          <div className='bg-slate-500 px-4 py-2 mb-2'>
             <span className='label text'>To:</span>{" "}
             <span className='text-gray-900 font-bold'>Iheb Jab</span>
          </div>
          <div className='px-4 flex-1 overflow-auto'>
            <Message/>
          </div>
        </>
    </div>
  )
}

export default MessageContainer
