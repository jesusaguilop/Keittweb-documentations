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
import { I18nProvider } from '@/context/I18nContext';
import { ThemeProvider } from '@/context/ThemeContext';

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
        return <Welcome />;
    }
  };

  return (
    <ThemeProvider>
      <I18nProvider>
        <div className="bg-background min-h-screen">
          <SidebarProvider>
            <Sidebar className="border-r" collapsible="icon">
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
      </I18nProvider>
    </ThemeProvider>
  );
}
