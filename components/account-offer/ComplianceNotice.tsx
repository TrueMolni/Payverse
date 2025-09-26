'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function ComplianceNotice() {
  return (
    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="h-5 w-5 text-orange-600" />
          <div>
            <p className="text-sm font-medium text-orange-800">Be Compliant</p>
            <p className="text-sm text-orange-700">Enhance your profile to get better bank rates!</p>
          </div>
        </div>
        <Button 
          size="sm" 
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Legal Advisor
        </Button>
      </div>
    </div>
  );
}