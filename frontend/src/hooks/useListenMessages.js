import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../Zustand/useConversation";
import notification from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
   const { socket } = useSocketContext();

  const { messages, setMessages } = useConversation();

  const authUser = JSON.parse(localStorage.getItem("chat-user"));

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      console.log("✅ MESSAGE RECEIVED", newMessage);

      // Play notification only for received messages
      if (newMessage.senderId !== authUser?._id) {
        const audio = new Audio(notification);

        audio.play().catch((err) => {
          console.log("Sound blocked:", err);
        });
      }

      // Add new message to existing messages
      setMessages([...messages, newMessage]);
    });

    return () => {
      socket?.off("newMessage");
    };
  }, [socket, messages, setMessages, authUser]);
};

export default useListenMessages;