import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Search, Users, MessageCircle, BookOpen } from 'lucide-react';
import GroupChat from '../components/groups/GroupChat';
import CourseChat from '../components/courses/CourseChat';
import { useAuth } from '@/lib/AuthContext';
import NotificationBar from '../components/notifications/NotificationBar';

const ChatPage = () => {
  const { groupId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("group"); // "group" or "course"

  // Check URL parameters for view mode
  useEffect(() => {
    const view = searchParams.get('view');
    if (view === 'course') {
      setViewMode('course');
    } else {
      setViewMode('group');
    }
  }, [searchParams]);

  useEffect(() => {
    // Load user's groups
    let allGroups = JSON.parse(localStorage.getItem("studyconnect_groups") || "[]");
    
    // Add mock groups if none exist (for testing)
    if (allGroups.length === 0) {
      const mockGroups = [
        {
          id: "group_1",
          name: "Computer Science Study Group",
          course: "Computer Science Engineering",
          description: "Study group for CSE students",
          owner_email: user?.email || "dineshmatti707@gmail.com",
          members: [
            { email: user?.email || "dineshmatti707@gmail.com", name: user?.fullName || "M.Dinesh" },
            { email: "chethan707@gmail.com", name: "Chethan Kumar" }
          ],
          visibility: "public",
          created_at: new Date().toISOString()
        },
        {
          id: "group_2", 
          name: "AI/ML Study Group",
          course: "Artificial Intelligence & Machine Learning",
          description: "Study group for AI/ML enthusiasts",
          owner_email: user?.email || "dineshmatti707@gmail.com",
          members: [
            { email: user?.email || "dineshmatti707@gmail.com", name: user?.fullName || "M.Dinesh" },
            { email: "priya707@gmail.com", name: "Priya Sharma" }
          ],
          visibility: "public",
          created_at: new Date().toISOString()
        }
      ];
      
      localStorage.setItem("studyconnect_groups", JSON.stringify(mockGroups));
      allGroups = mockGroups;
    }
    
    const userGroups = allGroups.filter(group => 
      group.members?.some(member => member.email === user?.email) ||
      group.owner_email === user?.email
    );
    
    setGroups(userGroups);

    // Set selected group from URL or default to first
    if (groupId) {
      const group = userGroups.find(g => g.id === groupId);
      setSelectedGroup(group);
    } else if (userGroups.length > 0) {
      setSelectedGroup(userGroups[0]);
    }
  }, [groupId, user]);

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
    navigate(`/chat/${group.id}`);
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  // If no user, redirect to auth
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Please log in to access chats</p>
        </div>
      </div>
    );
  }

  // If no groups, show empty state
  if (groups.length === 0) {
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
                <h1 className="text-xl font-bold text-gray-900">Group Chats</h1>
              </div>
              <NotificationBar user={user} />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No Study Groups</h2>
            <p className="text-gray-600 mb-6">
              You haven't joined any study groups yet.
            </p>
            <button
              onClick={() => navigate('/groups')}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              Browse Groups
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If viewMode is course, show CourseChat component
  if (viewMode === 'course') {
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
              <h1 className="text-xl font-bold text-gray-900">Group Chats</h1>
            </div>
            <NotificationBar user={user} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Groups Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              {/* Search */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search groups..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Groups List */}
              <div className="max-h-96 overflow-y-auto">
                {filteredGroups.length === 0 ? (
                  <div className="p-8 text-center">
                    <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">
                      {searchTerm ? "No groups found" : "No groups joined yet"}
                    </p>
                    {!searchTerm && (
                      <button
                        onClick={() => navigate('/groups')}
                        className="mt-3 text-orange-500 hover:text-orange-600 font-medium"
                      >
                        Browse Groups
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="divide-y divide-gray-200">
                    {filteredGroups.map((group) => (
                      <div
                        key={group.id}
                        onClick={() => handleGroupSelect(group)}
                        className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                          selectedGroup?.id === group.id ? 'bg-orange-50 border-l-4 border-l-orange-500' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold">
                            {group.name[0]}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 truncate">{group.name}</p>
                            <p className="text-sm text-gray-500">
                              {(group.members || []).length} members
                            </p>
                          </div>
                          {selectedGroup?.id === group.id && (
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            {selectedGroup ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-[600px]">
                <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-blue-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                      {selectedGroup.name[0]}
                    </div>
                    <div>
                      <h2 className="font-bold text-gray-900">{selectedGroup.name}</h2>
                      <p className="text-sm text-gray-600">
                        {(selectedGroup.members || []).length} members
                      </p>
                    </div>
                  </div>
                </div>
                <GroupChat groupId={selectedGroup.id} user={user} />
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-[600px] flex items-center justify-center">
                <div className="text-center">
                  <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg font-medium mb-2">Select a group to start chatting</p>
                  <p className="text-gray-400 text-sm">
                    Choose a group from the sidebar to view and send messages
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
