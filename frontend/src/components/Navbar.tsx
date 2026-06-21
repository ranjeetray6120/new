'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Menu, X, Trophy, User, LogOut, LayoutDashboard } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Cricket', href: '#categories' },
    { name: 'Football', href: '#categories' },
    { name: 'Shoes', href: '#categories' },
    { name: 'Sportswear', href: '#categories' },
    { name: 'Fitness', href: '#categories' },
  ];

  return (
    <nav className="glass sticky top-0 z-50 w-full border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Trophy className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-extrabold text-2xl tracking-wider text-gradient">
                SPORTS<span className="text-primary">ADDA</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* User Section (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center gap-4">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-sm font-medium transition-all duration-300"
                >
                  <LayoutDashboard className="h-4 w-4 text-primary" />
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary hover:bg-primary-dark text-white text-sm font-semibold shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white text-sm font-semibold shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <User className="h-4 w-4" />
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-b border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-primary hover:bg-white/5 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-white/5 px-3">
              {user ? (
                <div className="flex flex-col gap-2">
                  <Link
                    href="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium"
                  >
                    <LayoutDashboard className="h-4 w-4 text-primary" />
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      logout();
                    }}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary text-white text-sm font-semibold shadow-lg shadow-primary/20"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary text-white text-sm font-semibold shadow-lg shadow-primary/20"
                >
                  <User className="h-4 w-4" />
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
