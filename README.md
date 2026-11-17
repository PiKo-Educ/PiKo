# PiKo — Student Platform Starter

PiKo is a responsive student-platform website starter using Next.js, TypeScript, and a light sky-blue design system. It includes a custom penguin mascot SVG and the agreed PiKo feature scope.

## Included

- Public landing page
- Login and registration demo screens
- Responsive student application shell and navigation
- Dashboard
- Student Passport
- Student Community
- Digital Library
- Student Planner
- Personal Notes
- Student Calculator
- Flashcards and Review
- Study Partner Finder
- AI Tutor placeholder (Coming Soon; no AI API calls)
- Notifications, Profile, Settings, Dark Mode
- Admin dashboard preview
- Firestore and Storage rules starter files

## Important demo-mode note

This project currently stores demo session data, planner tasks, notes, community posts, and flashcards in the browser's `localStorage`. It does **not** provide secure real-user authentication, cloud synchronization, production file uploads, live notifications, or real moderation workflows yet. Do not use it to collect real student personal information until Firebase Authentication, Firestore, Storage, server-side role management, privacy controls, and security testing are implemented.

The login and registration screens are intended only to preview the user flow. The password is not verified or securely stored.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

1. Extract the project ZIP.
2. Open a terminal in the `piko-app` folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   On Windows, you can also double-click `START-PiKo.bat` after extracting the project.

5. Open `http://localhost:3000`.

## Demo walkthrough

- Open `/` for the public landing page.
- Open `/register` and create a browser-local demo account, or use `/login`.
- The app opens `/app/dashboard` after the demo form is submitted.
- Use the sidebar to explore the selected student features.
- Changes to planner items, notes, community posts, and flashcards are stored in that browser only.
- Open `/admin/dashboard` to view the admin dashboard preview. This route is not production-protected yet and must be secured before deployment.

## Firebase setup (next implementation step)

1. Create a Firebase project.
2. Enable Firebase Authentication providers you intend to support.
3. Create a Cloud Firestore database and Firebase Storage bucket.
4. Copy `.env.example` to `.env.local` and add the Firebase web app configuration.
5. Install the Firebase client SDK (`npm install firebase`).
6. Implement Authentication, Firestore services, Storage uploads, and server-enforced admin roles.
7. Review and test `firestore.rules` and `storage.rules` in the Firebase Emulator Suite before deploying.

The included rules are a starting point, not a substitute for a complete security review. Some schema-specific authorization checks and upload validations need to be tightened as the backend is implemented.

## Main routes

| Route | Description |
|---|---|
| `/` | Landing page |
| `/login` | Demo login |
| `/register` | Demo registration |
| `/app/dashboard` | Student dashboard |
| `/app/passport` | Student Passport |
| `/app/community` | Student Community |
| `/app/library` | Digital Library |
| `/app/planner` | Student Planner |
| `/app/notes` | Personal Notes |
| `/app/calculator` | Student Calculator |
| `/app/flashcards` | Flashcards and Review |
| `/app/study-partners` | Study Partner Finder |
| `/app/ai-tutor` | Coming Soon placeholder |
| `/app/settings` | Settings and Dark Mode |
| `/admin/dashboard` | Admin dashboard preview |

## Brand tokens

- Sky Blue: `#61BCEB`
- Ice Blue: `#DFF3FF`
- Ocean Blue: `#2589C2`
- White: `#FFFFFF`
- Deep Navy: `#17344B`
- Penguin Orange: `#FFB85C`

## Planned production work

- Firebase Authentication and account recovery
- Cloud Firestore persistence and data validation
- Secure role-based admin and moderator access
- Real community comments, moderation queue, and reporting
- Approved library resource uploads and viewing
- Planner reminders and notification delivery
- Study group membership and privacy-safe matching
- Certificate verification workflow
- Accessibility, privacy, child-safety, and security testing
- Flutter Android app reusing the same Firebase backend
- AI Tutor integration only when an affordable provider and budget are available
