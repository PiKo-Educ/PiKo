export const STORAGE_KEYS = {
  user: 'piko-demo-user',
  notes: 'piko-notes',
  tasks: 'piko-tasks',
  posts: 'piko-posts',
  flashcards: 'piko-flashcards',
  theme: 'piko-theme'
} as const;

export type DemoUser = { name: string; email: string; level: string; school?: string };
export type Note = { id: string; title: string; content: string; updatedAt: string };
export type Task = { id: string; title: string; date: string; kind: 'Assignment' | 'Exam' | 'Class' | 'Reminder'; done: boolean };
export type Post = { id: string; author: string; initials: string; category: string; content: string; time: string; likes: number };
export type Flashcard = { id: string; deck: string; question: string; answer: string };

export function readStore<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function writeStore<T>(key: string, value: T) {
  if (typeof window !== 'undefined') window.localStorage.setItem(key, JSON.stringify(value));
}

export function makeId() {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
