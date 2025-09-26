'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface FilterTabsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { 
    id: 'Bank', 
    label: 'Bank Account', 
    icon: 'bank_icon.svg', 
    activeColor: '#305DFF',
    hoverColor: '#002ED3'
  },
  { 
    id: 'Acquiring', 
    label: 'Acquiring Account', 
    icon: 'aquiring_icon.svg', 
    activeColor: '#34D399',
    hoverColor: '#1CB17B'
  },
  { 
    id: 'Alternative', 
    label: 'Alternative Account', 
    icon: 'alternative_icon.svg', 
    activeColor: '#FFA057',
    hoverColor: '#F7862E'
  },
  { 
    id: 'Crypto', 
    label: 'Crypto Account', 
    icon: 'crypto_icon.svg', 
    activeColor: '#818CF8',
    hoverColor: '#8930FF'
  },
];

export default function FilterTabs({ activeFilter, onFilterChange }: FilterTabsProps) {
  return (
    <div className="flex bg-gray-50 p-1 rounded-lg mb-6 border border-gray-200">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.id;
        
        return (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={cn(
              'flex-1 px-4 py-3 text-sm font-medium transition-all duration-200 flex items-center justify-center rounded-md relative',
              'border-b-2 transition-all duration-200',
              isActive
                ? 'text-white shadow-sm border-transparent'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 border-transparent'
            )}
            style={{
              backgroundColor: isActive ? filter.activeColor : 'transparent',
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            <Image 
              src={`/icons/${filter.icon}`} 
              alt={filter.label} 
              width={20} 
              height={20} 
              className="mr-2"
              style={{
                filter: isActive ? 'brightness(0) invert(1)' : 'none'
              }}
            />
            {filter.label}
            {isActive && (
              <div 
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-sm"
                style={{ backgroundColor: filter.activeColor }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}