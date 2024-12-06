# Sync: Collaborative Real-Time Document Editor
Sync is a cutting-edge, Next.js-powered collaborative real-time document editor inspired by Google Docs. Designed for seamless teamwork, Sync empowers users to create, edit, and share rich-text documents with real-time synchronization, version control, and an intuitive user interface.

---

## Features
1. Real-Time Collaboration
Instant Synchronization: Changes are reflected live for all users with minimal latency.
Multi-User Editing: Collaborators see each other's cursors, selections, and edits in real time.
Conflict-Free Editing: Utilizes operational transforms (OT) or conflict-free replicated data types (CRDTs) to prevent merge conflicts.

3. Rich-Text Editing
Intuitive Formatting Tools:
Bold, italic, underline, and strikethrough.
Bullet and numbered lists, blockquotes, and headings.
Keyboard Shortcuts: Supports standard text formatting shortcuts for efficiency.
Embed Media: Add images, links, and other rich content directly into documents.

5. Collaboration Tools
Comments and Suggestions: Collaborate with inline comments and track proposed changes.
Permissions Management: Role-based access for editors, commenters, and viewers.
Activity Indicators: Live presence status to see who’s online and actively editing.

7. Version Control
Document History: Access a complete history of edits with timestamped version snapshots.
Revert Changes: Restore previous versions with a single click.
Track Contributors: View edit logs and contributions by each collaborator.

9. Real-Time Notifications
Get updates for new edits, comments, or changes made to shared documents.

---

## Tech Stack
### Core technologies
Frontend Framework: Next.js (React-based).

Backend: Serverless APIs powered by Next.js API routes.

WebSocket Communication: Live Blocks for real-time data synchronization 

### Additional Tools
Rich-Text Editor Framework: Lexical

Version Control: Github

Authentication: Clerk

Styling: Modern UI with Tailwind CSS.

---

## Getting Started
### Prerequisites
Node.js (v16 or later)
npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/KH4NY0/sync.git

# Navigate into the project directory
cd sync

# Install dependencies
npm install
```

### Set up environment variables:
Create a .env.local file in the project root and add the necessary keys:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
LIVEBLOCKS_SECRET_KEY=
```
### Run the development server:
```bash
npm run dev
# or
yarn dev
```
### Open your browser and visit:
```bash
http://localhost:3000
```
