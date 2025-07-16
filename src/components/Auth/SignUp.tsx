import React, { useState } from 'react';
import { Mail, Lock, User, BookOpen, ArrowRight } from 'lucide-react';

interface SignUpProps {
  onSignUp: (name: string, email: string, password: string) => void;
  onSwitchToSignIn: () => void;
}

export default function SignUp({ onSignUp, onSwitchToSignIn }: SignUpProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    onSignUp(name, email, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Welcome */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-serif text-emerald-900 mb-2">Gleam</h1>
          <p className="text-emerald-700">Begin your journey to daily inspiration</p>
        </div>

        {/* Sign Up Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-emerald-100">
          <h2 className="text-2xl font-serif text-emerald-900 mb-6 text-center">Create Account</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-emerald-800 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-500" />
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition-colors bg-white/50"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-emerald-800 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-500" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition-colors bg-white/50"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-emerald-800 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-500" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition-colors bg-white/50"
                  placeholder="Create a password"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-emerald-800 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-500" />
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-300 focus:border-emerald-400 transition-colors bg-white/50"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 px-4 rounded-lg font-medium hover:from-emerald-600 hover:to-teal-600 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
            >
              Create Account
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-emerald-700">
              Already have an account?{' '}
              <button
                onClick={onSwitchToSignIn}
                className="text-emerald-600 hover:text-emerald-800 font-medium underline"
              >
                Sign in here
              </button>
            </p>
          </div>
        </div>

        {/* Quote of the moment */}
        <div className="mt-8 text-center">
          <blockquote className="text-emerald-700 italic font-serif text-lg">
            "Every moment is a fresh beginning."
          </blockquote>
          <cite className="text-emerald-600 text-sm block mt-2">— T.S. Eliot</cite>
        </div>
      </div>
    </div>
  );
}