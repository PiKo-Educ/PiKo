/*
 * Firebase connection placeholder.
 * Add Firebase environment variables from .env.example when you are ready.
 * The current app runs in local demo mode and does not send student data to a server.
 * Never expose Firebase Admin credentials or private API keys in browser code.
 */
export const firebaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
);

export const firebaseSetupMessage = firebaseConfigured
  ? 'Firebase environment values detected. Complete Auth, Firestore and Storage integration before production.'
  : 'Demo mode: connect Firebase to enable real accounts and synchronized data.';
