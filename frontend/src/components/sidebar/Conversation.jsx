import React from 'react'

const Conversation = () => {
  return <>
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded py-2 cursor-pointer'>
      <div className='avatar online'>
        <div className='w-12 rounded-full'>
{/*           

           <img
      src='https://api.dicebear.com/7.x/thumbs/svg?seed=Swati'
      alt='user avatar'
    /> */}

    <img
                alt='Tailwind css chat bubble component'
                src='https://preview.redd.it/why-is-my-facebook-account-displaying-new-blank-profile-v0-h5gnz1ji36o61.png?width=225&format=png&auto=webp&s=e23893f92e6c9b67d99b65df4c5100798cb26583'
                />
        </div>

      </div>

      <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
          <p className='font-bold text-gray-200'>Swati</p>
          <span className='text-xl'>💗</span>
        </div>
        <p className='text-sm text-gray-400 truncate'>Hey, how are you?</p>
      </div>
    </div>

    <div className='divider'></div>
  </>
}

export default Conversation;