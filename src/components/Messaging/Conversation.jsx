import Icon from '@/uitils/Icon';
import React from 'react'

const Conversation = () => {
  return (
    <>
      <div className='flex gap-2 items-center hover:bg-green-400 rounded p-2 py-1 cursor-pointer'>
         <div className='avatar outline'>
            <div className='w-12 rounded-full'> 
               <Icon name="profile" width={20} height={20} viewBox='0 0 20 20'></Icon>
            </div>
         </div>
         <div className='flex flex-col flex-1'>
             <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>User name</p>
                <span>latest message</span>
             </div>
         </div>
      </div>
      <div className='divider my-0 py-0 h-1'/>
    </>
  )
};

export default Conversation