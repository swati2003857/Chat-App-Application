import { useEffect, useState } from "react";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);

      try {
        // Get logged in user from localStorage
        const chatUser = JSON.parse(localStorage.getItem("chat-user"));

        console.log("Chat User:", chatUser);

        const token = chatUser?.token;

        console.log("Token:", token);

        const res = await fetch("http://localhost:5002/api/users", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
        });

        const data = await res.json();

        console.log("Users Response:", data);

        if (!res.ok) {
          throw new Error(data.error || "Failed to fetch users");
        }

        setConversations(data);
      } catch (error) {
        console.error("Error fetching conversations:", error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;