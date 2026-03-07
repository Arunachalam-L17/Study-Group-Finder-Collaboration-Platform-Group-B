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

The User collection stores all the information related to the students using the platform. It includes fields such as id, name, email, and password for authentication. It also stores academic details including secondarySchool, secondarySchoolPassingYear, secondarySchoolPercentage, higherSecondarySchool, higherSecondaryPassingYear, higherSecondaryPercentage, universityName, universityPassingYear, and universityPassingGPA.

Course :

The Course collection stores details about the courses available on the platform. Each course record contains an id, courseCode, courseName, and description. These courses help students find peers who are enrolled in the same subjects.

Group :

The Group collection represents the study groups created by users. Each group contains an id, name, description, the courseId associated with the group, and createdBy which stores the user who created the group.

GroupMember :

The GroupMember collection maintains the relationship between users and groups. It contains groupId, userId, and role. The role field defines whether the user is an Admin or a Member of the group.

Session :

The Session collection is used to manage study sessions scheduled by groups. Each session includes an id, groupId, title, description, date, and createdBy which indicates the user who created the session.

Notification :

The Notification collection manages system notifications sent to users. Each notification contains an id, userId, type which may represent reminders or invitations, and status which indicates whether the notification is read or unread.

Technologies Used :

The frontend of the application is developed using HTML, CSS, and JavaScript to build the user interface and interactive components. The backend is implemented using Node.js with the Express framework to handle server-side logic and API requests. MongoDB is used as the database to store user data, groups, sessions, and other related information. Authentication is handled using JWT (JSON Web Tokens) to ensure secure user login and session management. Real-time communication features such as group chat are implemented using WebSockets. Git and GitHub are used for version control and collaborative development.

Expected Outcomes :

The platform allows students to easily discover other students who are enrolled in the same course. It simplifies the process of creating and joining study groups for collaborative learning. Communication tools help group members interact and discuss academic topics efficiently. The integrated scheduling system allows groups to organize study sessions and manage their study plans effectively.

Future Improvements :

Future improvements may include the addition of file sharing functionality within study groups so that students can exchange notes and study materials. Integration of video conferencing features could allow groups to conduct online study meetings directly within the platform. Artificial intelligence could be used to recommend suitable study partners based on course enrollment and study patterns. A mobile application version of the platform could also be developed to provide better accessibility for students.