'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { User, Shield, Mail, Calendar, Key, AlertTriangle } from 'lucide-react';

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">Administrative Profile</h2>
        <p className="text-slate-500 text-sm mt-1">Manage your administrative credentials and security details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="glass rounded-2xl p-6 border border-white/5 flex flex-col items-center text-center space-y-4">
          <div className="h-20 w-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-3xl text-primary">
            {user?.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{user?.name}</h3>
            <div className="text-xs text-primary font-semibold uppercase tracking-wider mt-1 flex items-center gap-1.5 justify-center">
              <Shield className="h-3.5 w-3.5" />
              Super Admin
            </div>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Authorized administrator with full read/write privileges over the Sports Adda catalog.
          </p>
        </div>

        {/* Security Details */}
        <div className="glass rounded-2xl p-6 border border-white/5 md:col-span-2 space-y-6">
          <h3 className="text-lg font-bold text-white tracking-wide border-b border-white/5 pb-4">
            Account Specifications
          </h3>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2">
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">Email Address</span>
              </div>
              <span className="text-sm font-semibold text-slate-200">{user?.email}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2 border-t border-white/5">
              <div className="flex items-center gap-3 text-slate-400">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-sm">Account Created</span>
              </div>
              <span className="text-sm font-semibold text-slate-200">June 21, 2026</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2 border-t border-white/5">
              <div className="flex items-center gap-3 text-slate-400">
                <Key className="h-5 w-5 text-primary" />
                <span className="text-sm">Role Privilege Level</span>
              </div>
              <span className="text-sm font-semibold text-slate-200">Level 5 (Owner)</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20 flex gap-3 text-xs text-slate-400 leading-relaxed mt-4">
            <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-amber-200 block">Security Alert</span>
              These credentials are fed via the database seeder script and should be rotated prior to hosting on any production domain.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
