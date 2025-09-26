'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2, FileText, CreditCard, FileCheck, Scale, Info } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'My Companies', href: '/companies', icon: Building2 },
  { name: 'My Requests', href: '/requests', icon: FileText },
  { name: 'Account Offer', href: '/account-offer', icon: CreditCard },
  { name: 'Active Cases', href: '/active-cases', icon: FileCheck },
  { name: 'Legal Advisor', href: '/legal-advisor', icon: Scale },
  { name: 'Information', href: '/information', icon: Info },
];

const userInfo = {
  name: 'Emily',
  role: 'Manager',
  avatar: '/api/placeholder/32/32'
};

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col bg-slate-900 text-white">
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <Image src="/icons/logo.svg" alt="Payverse" width={24} height={24} />
          <h1 className="text-xl font-bold">Payverse</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-700 hover:text-white hover:pl-4'
              )}
            >
              <item.icon
                className={cn(
                  'mr-3 h-5 w-5 flex-shrink-0 transition-all duration-200',
                  isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'
                )}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>


      <div className="border-t border-slate-700 p-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Image src="/icons/user_avatar.svg" alt="User" width={32} height={32} className="rounded-full" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-900"></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Emily</p>
            <p className="text-sm text-slate-400 truncate">AI Expert</p>
          </div>
        </div>
        
        <div className="mt-4 flex items-center space-x-2 text-sm">
          <span className="flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            <span className="text-green-400 font-medium">AI Help</span>
          </span>
        </div>

        <div className="mt-3 text-sm text-slate-400">
          <p>Follow Us:</p>
          <div className="flex space-x-2 mt-1">
            <div className="p-1 hover:bg-slate-700 rounded cursor-pointer transition-colors duration-200">
              <Image src="/icons/youtube_icon.svg" alt="YouTube" width={16} height={16} className="opacity-60 hover:opacity-100 transition-opacity duration-200" />
            </div>
            <div className="p-1 hover:bg-slate-700 rounded cursor-pointer transition-colors duration-200">
              <Image src="/icons/instagram_icon.svg" alt="Instagram" width={16} height={16} className="opacity-60 hover:opacity-100 transition-opacity duration-200" />
            </div>
            <div className="p-1 hover:bg-slate-700 rounded cursor-pointer transition-colors duration-200">
              <Image src="/icons/linkedin_icon.svg" alt="LinkedIn" width={16} height={16} className="opacity-60 hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>
        </div>

        <button className="mt-4 w-full text-left text-sm text-slate-400 hover:text-white hover:bg-slate-700 rounded px-2 py-1 transition-all duration-200">
          Log out
        </button>
      </div>
    </div>
  );
}