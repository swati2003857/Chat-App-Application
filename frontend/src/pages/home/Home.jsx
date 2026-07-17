import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

// ✅ IMPORT HOOK
import useListenMessages from '../../hooks/useListenMessages';

const Home = () => {

  // 🔥 THIS LINE WAS MISSING
  useListenMessages();

  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home;