import React from 'react';
import { Outlet } from 'react-router-dom';
import { PublicLayout } from './PublicLayout';
import { QuoteModal } from '@/components/QuoteModal';
export function RootLayout() {
  return (
    <PublicLayout>
      <Outlet />
      <QuoteModal />
    </PublicLayout>
  );
}