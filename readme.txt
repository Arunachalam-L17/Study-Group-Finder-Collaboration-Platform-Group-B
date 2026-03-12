Study Group Finder & Collaboration Platform
Overview : 
The Study Group Finder & Collaboration Platform is a web-based application designed to help students connect with peers studying the same courses. The platform allows students to create profiles, list their enrolled courses, discover other students, and collaborate through study groups.
This system improves academic collaboration by providing tools for group communication, scheduling study sessions, and sharing resources.

Problem Statement :
Students often struggle to find classmates with similar courses to study together. This platform solves that problem by enabling students to easily discover peers and form study groups for collaborative learning.

Key Features:
1. User Authentication
    Secure user registration and login
    Profile creation with academic details
    JWT-based authentication system

2. Course Management

    Add or remove enrolled courses
    View students enrolled in the same courses
    Dashboard displaying suggested peers

3. Study Group Management

    Create public or private study groups
    Join existing study groups
    Manage group members

4. Real-time Communication

    Group chat for discussions
    Messaging widget for instant communication

5. Study Session Scheduling

    Built-in calendar for planning study sessions
    Create events with date and time
    Receive notifications for upcoming sessions

6. Notifications

    Group invitations
    Study session reminders
    Activity updates

System Modules :

Module A – User Authentication & Course Management :

    User registration and login
    Profile creation and editing
    Add and manage courses

Module B – Group Creation & Discovery :

    Create study groups
    Search and filter groups
    Join public groups or request private group access

Module C – Communication & Collaboration :

    Real-time group chat using WebSockets
    Shared collaboration tools

Module D – Scheduling & Notifications : 

    Calendar integration
    Study session scheduling
    Notification system

Project Milestones :

Milestone 1 (Week 1–2)

    Authentication and Course Management
    Login and registration system
    Profile management
    Dashboard page

Milestone 2 (Week 3–4)

    Group Creation & Discovery
    Create study groups
    Group search with filters
    Member management

Milestone 3 (Week 5–6)

    Communication & Collaboration
    Real-time chat system
    Messaging interface

Milestone 4 (Week 7–8)

    Scheduling & Notifications
    Calendar integration
    Study session creation
    Reminder notifications

Database Schema :

User :
The User entity stores all information related to students using the platform. 
It includes the fields id, name, email, and password which are used for authentication and identification. 
Academic details are also stored, including secondarySchool, secondarySchoolPassingYear, secondarySchoolPercentage, higherSecondarySchool, higherSecondaryPassingYear, higherSecondaryPercentage, universityName, universityPassingYear, and universityPassingGPA. 
These details help build a complete student profile within the system.

Course :
The Course entity stores information about the subjects available in the platform.
 Each course contains the fields id, courseCode, courseName, and description. 
 This entity allows the system to connect students who are enrolled in the same courses.

Group :
The Group entity represents the study groups created by users. 
It contains fields such as id, name, description, courseId, and createdBy. 
Each group is associated with a specific course and helps students collaborate with others studying the same subject.

GroupMember :
The GroupMember entity manages the relationship between users and study groups. 
It includes groupId, userId, and role. The role field defines the responsibility of a member within the group, such as Admin or Member.

Session :
The Session entity stores information about scheduled study sessions within a group. 
It includes fields such as id, groupId, title, description, date, and createdBy. 
This helps groups organize structured study meetings.

Notification:
The Notification entity is responsible for managing alerts and updates for users. 
Each record contains id, userId, type, and status. The type indicates whether the notification is a reminder or invitation, 
and the status indicates whether it has been read or remains unread.

Technologies Used :
The frontend of the platform is developed using HTML, CSS, and JavaScript to create an interactive and responsive user interface. 
The backend is implemented using Node.js with the Express framework, which handles server-side logic and API requests. 
The application uses MongoDB as the database to store user profiles, groups, courses, sessions, and notifications. 
User authentication is implemented using JSON Web Tokens (JWT) to ensure secure login and session management. 
Real-time communication features such as group chat are supported through WebSockets. The project uses Git and GitHub for version control and collaborative development.

Expected Outcomes :
The platform enables students to easily discover peers who are studying the same courses. 
It simplifies the process of creating and joining study groups and supports efficient collaboration among members. 
Communication tools allow group members to interact and exchange ideas in real time. 
The integrated scheduling system helps groups plan study sessions and stay organized.

Future Improvements :
Future development of the platform may include file sharing capabilities so students can exchange notes and study materials directly within the group.
Integration of video conferencing features would allow users to conduct online study meetings.
Artificial intelligence could also be introduced to recommend study partners based on course enrollment and learning patterns.
Additionally, developing a mobile application version of the platform would improve accessibility and convenience for users.