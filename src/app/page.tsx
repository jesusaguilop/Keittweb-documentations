"use client";

import React, { useState } from 'react';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import SidebarNav from '@/components/layout/SidebarNav';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Welcome from '@/components/content/Welcome';
import InstallationManual from '@/components/content/InstallationManual';
import TechnicalManual from '@/components/content/TechnicalManual';
import UserManual from '@/components/content/UserManual';

export default function DocsPage() {
  const [activeManual, setActiveManual] = useState('welcome');

  const renderContent = () => {
    switch (activeManual) {
      case 'installation':
        return <InstallationManual />;
      case 'technical':
        return <TechnicalManual />;
      case 'user':
        return <UserManual />;
      default:
        return <Welcome setActiveManual={setActiveManual} />;
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <SidebarProvider defaultOpen={true}>
        <Sidebar className="border-r">
          <SidebarNav activeManual={activeManual} setActiveManual={setActiveManual} />
        </Sidebar>
        <SidebarInset>
          <div className="flex flex-col h-full">
            <Header />
            <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-12">
              {renderContent()}
            </main>
            <Footer />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
