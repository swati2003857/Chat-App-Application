// import { useAuthContext } from "../../context/AuthContext";
// import useConversation from "../../zustand/useConversation";

// const Message = ({ message }) => {
//   const { authUser } = useAuthContext();
//   const { selectedConversation } = useConversation();

//   const fromMe = message.senderId === authUser._id;
//   const chatClassName = fromMe ? "chat-end" : "chat-start";
//   const profilePic = fromMe
//     ? authUser.profilePic
//     : selectedConversation?.profilePic;
//   const bubbleBgColor = fromMe ? "bg-blue-500" : "";

//   return (
//     <div className={`chat ${chatClassName}`}>
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img
//             alt="Tailwind CSS chat bubble component"
//             src={profilePic}
//           />
//         </div>
//       </div>

//       <div className={`chat-bubble text-white ${bubbleBgColor}`}>
//         {message.message}
//       </div>

//       <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
//         {message.createdAt}
//       </div>
//     </div>
//   );
// };

// // export default Message;
// import React from "react";
// import { useAuthContext } from "../../context/AuthContext";
// import {extractTime} from "../../utils/extractTime";

// const Message = ({ message }) => {
//   const formattedTime = extractTime(message.createdAt);
//   const { authUser } = useAuthContext();

//   console.log("authUser:", authUser);
//   console.log("message:", message);

//   const fromMe = message.senderId === authUser?._id;

//   return (
//     <div className={`chat ${fromMe ? "chat-end" : "chat-start"}`}>
      
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img
//             src={
//               fromMe
//                 ? authUser?.profilePic
//                 : "https://api.dicebear.com/7.x/thumbs/svg?seed=User"
//             }
//             alt="user"
//           />
//         </div>
//       </div>

//       <div className={`chat-bubble ${fromMe ? "bg-blue-500 text-white" : ""}`}>
//         {message.message}
//       </div>
//     </div>
//   );
// };

// export default Message;

import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser?._id;
  const formattedTime = extractTime(message.createdAt);

  const chatClass = fromMe ? "chat-end" : "chat-start";

  const bubbleClass = fromMe
    ? "bg-blue-500 text-white"
    : "bg-gray-300 text-black";

  const profilePic = fromMe
    ? authUser?.profilePic
    : selectedConversation?.profilePic;

    const shakeClass = message.shouldShake ? "shake" : ""

  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="user" />
        </div>
      </div>

      <div className={`chat-bubble text-white ${bubbleClass} ${shakeClass} pb-2`}>
        {message.message}
      </div>

      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;