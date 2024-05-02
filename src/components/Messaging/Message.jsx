import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
          <div>
             <img alt='Tailwind CSS chat bubble component' src="/assets/img/handsome.png" className='w-12 max-w-12 rounded-full'/>
          </div>
        </div>
        <div className="chat-bubble text-white bg-green-400">Hey there</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>11:00</div>
    </div>
  )
}

export default Message
