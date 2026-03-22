import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, BookOpen, Users, MessageCircle } from "lucide-react";
import CourseChat from "../components/courses/CourseChat";
import { useAuth } from "@/lib/AuthContext";
import NotificationBar from "../components/notifications/NotificationBar";

export default function CourseChatPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  // If no user, redirect to auth
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Please log in to access course chats</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={handleBackToDashboard}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Dashboard</span>
              </button>
              <h1 className="text-xl font-bold text-gray-900">Course Chats</h1>
            </div>
            <NotificationBar user={user} />
          </div>
        </div>
      </div>

      {/* Course Chat Component */}
      <CourseChat user={user} onClose={handleBackToDashboard} />
    </div>
  );
}
