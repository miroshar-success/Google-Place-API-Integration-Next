import Icon from '@/uitils/Icon'
import React from 'react'


const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
          <input
          type='text'
          className='border text-sm rounded-lg block w-full p-2.5 bg-gray-500 border-gray-600 text-white'
          placeholder='send a message'
          />
        </div>
        <button type='submit' className='absolute inset-y-0 end-1 flex items-center pe-3'> 
          <Icon name="email" width={20} height={14} viewBox='0 0 20 14'></Icon>
        </button>
    </form>
  )
}

export default MessageInput