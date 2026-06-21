'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Trophy, Mail, Lock, ArrowRight, AlertTriangle, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const { login, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // Basic Validation
    if (!email) {
      setValidationError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setValidationError('Please enter a valid email address');
      return;
    }
    if (!password) {
      setValidationError('Password is required');
      return;
    }
    if (password.length < 6) {
      setValidationError('Password must be at least 6 characters');
      return;
    }

    setIsSubmitting(true);
    try {
      await login(email, password);
    } catch (err) {
      // Errors are handled in global context
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#07080a] px-4 py-12 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow sparks */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Logo and Headings */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 group mb-4">
            <Trophy className="h-10 w-10 text-primary transition-transform duration-300 group-hover:rotate-12" />
            <span className="font-extrabold text-3xl tracking-wider text-gradient">
              SPORTS<span className="text-primary">ADDA</span>
            </span>
          </Link>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">Welcome Back</h2>
          <p className="mt-2 text-sm text-slate-400">
            Sign in to access your administrative dashboard
          </p>
        </div>

        {/* Card Panel */}
        <div className="glass rounded-3xl p-8 border border-white/5 shadow-2xl relative">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Display error message if any */}
            {(validationError || error) && (
              <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-red-200 leading-tight">
                  {validationError || error}
                </span>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-4 py-3 bg-slate-900/60 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all duration-300"
                  placeholder="admin@sportsadda.com"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-3 bg-slate-900/60 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm transition-all duration-300"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-4 px-4 border border-transparent rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary-dark focus:outline-none transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none"
            >
              {isSubmitting ? 'Verifying...' : 'Sign In'}
              {!isSubmitting && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>

          <div className="mt-4 text-center">
            <span className="text-xs text-slate-400">
              Don't have an account?{' '}
              <Link href="/register" className="text-primary hover:underline font-semibold transition-colors duration-200">
                Sign Up
              </Link>
            </span>
          </div>

          {/* Quick Info Box */}
          <div className="mt-8 pt-6 border-t border-white/5 text-center">

            <span className="text-xs text-slate-500">
              Demo Credentials: <span className="text-slate-400 font-mono">admin@sportsadda.com</span> / <span className="text-slate-400 font-mono">Admin@123</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
