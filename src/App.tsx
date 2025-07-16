import React, { useState } from 'react';
import { AuthState, User } from './types';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Dashboard from './components/Dashboard';

type AuthView = 'signin' | 'signup';

function App() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false
  });
  const [authView, setAuthView] = useState<AuthView>('signin');

  const handleSignIn = (email: string, password: string) => {
    // In a real app, this would validate credentials with a backend
    const user: User = {
      id: '1',
      email,
      name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1)
    };
    
    setAuthState({
      user,
      isAuthenticated: true
    });
  };

  const handleSignUp = (name: string, email: string, password: string) => {
    // In a real app, this would create a new user account
    const user: User = {
      id: '1',
      email,
      name
    };
    
    setAuthState({
      user,
      isAuthenticated: true
    });
  };

  const handleSignOut = () => {
    setAuthState({
      user: null,
      isAuthenticated: false
    });
    setAuthView('signin');
  };

  // If user is authenticated, show the dashboard
  if (authState.isAuthenticated && authState.user) {
    return <Dashboard user={authState.user} onSignOut={handleSignOut} />;
  }

  // Show authentication views
  if (authView === 'signin') {
    return (
      <SignIn
        onSignIn={handleSignIn}
        onSwitchToSignUp={() => setAuthView('signup')}
      />
    );
  }

  return (
    <SignUp
      onSignUp={handleSignUp}
      onSwitchToSignIn={() => setAuthView('signin')}
    />
  );
}

export default App;