// app/page.js
'use client';  // Use client-side rendering for any client-side behavior

import React from 'react';
import Link from 'next/link';
import Login from './auth/login';

const HomePage = () => {
  const isAuthenticated = false;  // Replace with actual authentication logic

  return (
    <div>
      <h1>Welcome to Your Life Management App!</h1>
      <p>Click below to go to your tasks or login:</p>
      {isAuthenticated ? (
        <Link href="/dashboard">Go to Dashboard</Link>
      ) : (
        <Link href="/login">Login</Link> 
      )}
    </div>
  );
};

export default HomePage;
