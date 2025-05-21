'use client';

import React from 'react';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <main className={styles.mainContent}>{children}</main>;
};

export default MainLayout; 