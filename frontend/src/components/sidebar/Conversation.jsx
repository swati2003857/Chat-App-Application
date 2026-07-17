import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, emoji, lastIdx }) => {
  const { onlineUsers } = useSocketContext();

  const {
    selectedConversation,
    setSelectedConversation,
  } = useConversation();

  const isSelected =
    selectedConversation?._id === conversation._id;

  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        onClick={() => setSelectedConversation(conversation)}
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img
              src={
                conversation.profilePic ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="user avatar"
            />
          </div>
        </div>

        <div className="flex flex-1 justify-between">
          <div>
            <p className="font-bold text-gray-200">
              {conversation.fullName}
            </p>

            <span className="text-sm text-gray-400">
              @{conversation.username}
            </span>
          </div>

          <span>{emoji}</span>
        </div>
      </div>

      {!lastIdx && (
        <div className="divider my-0 py-0 h-1"></div>
      )}
    </>
  );
};

export default Conversation;