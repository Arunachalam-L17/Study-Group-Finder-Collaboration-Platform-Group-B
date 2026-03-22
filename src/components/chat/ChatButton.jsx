import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ChatButton() {
  const navigate = useNavigate();
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Check for unread chat notifications
    const checkUnreadChats = () => {
      const notifications = JSON.parse(localStorage.getItem("studyconnect_notifications") || "[]");
      const chatNotifications = notifications.filter(n => 
        n.type === 'chat_message' && 
        !n.read && 
        n.recipient_email === JSON.parse(localStorage.getItem("studyconnect_user") || "{}")?.email
      );
      setUnreadCount(chatNotifications.length);
    };

    // Check immediately
    checkUnreadChats();
    
    // Set up interval to check for new notifications
    const interval = setInterval(checkUnreadChats, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    navigate('/chat');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 group"
      title="Open Chats"
    >
      <MessageCircle className="w-6 h-6" />
      {/* Notification dot for unread messages */}
      {unreadCount > 0 && (
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse border-2 border-white">
          {unreadCount > 9 ? '9+' : unreadCount}
        </div>
      )}
    </button>
  );
}
