import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img
                alt='Tailwind css chat bubble component'
                src='https://preview.redd.it/why-is-my-facebook-account-displaying-new-blank-profile-v0-h5gnz1ji36o61.png?width=225&format=png&auto=webp&s=e23893f92e6c9b67d99b65df4c5100798cb26583'
                />

            </div>

        </div>

        <div className={`chat-bubble text-white bg-blue-500`}>Hii! What is upp?</div>
        <div className='chat-footer opacity-50 text-x5 flex gap-1 items-center '>12:42</div>
      
    </div>
  )
}

export default Message
