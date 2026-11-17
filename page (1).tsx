'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { STORAGE_KEYS, writeStore, type DemoUser } from '@/lib/demo-store';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('student@piko.demo');
  const [password, setPassword] = useState('pikodemo');
  const [error, setError] = useState('');
  const submit = (e: React.FormEvent) => { e.preventDefault(); if (!email.includes('@') || password.length < 4) { setError('Enter a valid email and a password with at least 4 characters.'); return; } const name = email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, (x) => x.toUpperCase()); const user: DemoUser = { name: name || 'Student', email, level: 'Senior High School' }; writeStore(STORAGE_KEYS.user, user); router.push('/app/dashboard'); };
  return <main className="auth-page"><section className="auth-visual"><div className="auth-circle" /><Image src="/mascot/piko.svg" alt="PiKo penguin mascot" width={300} height={300} /><div className="auth-copy"><h2>Your space is waiting.</h2><p>Pick up where you left off, organize your next step, and keep learning with PiKo.</p></div></section><section className="auth-form-wrap"><form className="auth-form" onSubmit={submit}><Link href="/" className="auth-brand"><Image src="/mascot/piko.svg" alt="PiKo" width={43} height={43} /><strong>PiKo</strong></Link><h1>Welcome back!</h1><p>Log in to open your student space.</p>{error && <div className="pill red" style={{ marginBottom: 14 }}>{error}</div>}<div className="form-row"><label className="field-label">Email address</label><input className="field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required /></div><div className="form-row"><label className="field-label">Password</label><input className="field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required /></div><button className="btn btn-primary" style={{ width: '100%', marginTop: 5 }}>Log in to PiKo</button><p className="small muted" style={{ textAlign: 'center', margin: '18px 0' }}>New to PiKo? <Link href="/register" style={{ color: '#2589c2', fontWeight: 700 }}>Create an account</Link></p><div className="auth-foot">Demo mode only: this form creates a browser-local demo session. It is not secure production authentication. Connect Firebase Authentication before using real student accounts.</div></form></section></main>;
}
