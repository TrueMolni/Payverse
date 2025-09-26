'use client';

import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

export default function RequestsPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="My Requests" />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 text-center">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">My Requests</h2>
              <p className="text-slate-600">This page is under construction.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}