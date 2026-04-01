import Conversation from "../models/conversationmodel.js";
import Message from "../models/messagemodel.js";

export const sendMessage = async (req, res) => {
  try {
    console.log("sendMessage got request", { body: req.body, params: req.params, user: req.user });
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // Create new conversation if not exists
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        messages: [],
      });
    }

    // Create new message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    // Push message into conversation---
    
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // Save both--

    await Promise.all([
      conversation.save(),
      newMessage.save(),
    ]);

    res.status(201).json(newMessage);

  } catch (error) {
    console.log("Error in sendMessage controller:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;

    res.status(200).json(messages);

  } catch (error) {
    console.log("Error in getMessages:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};