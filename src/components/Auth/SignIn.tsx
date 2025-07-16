import React, { useState } from 'react';
import { Mail, Lock, BookOpen, ArrowRight } from 'lucide-react';

interface SignInProps {
  onSignIn: (email: string, password: string) => void;
  onSwitchToSignUp: () => void;
}

export default function SignIn({ onSignIn, onSwitchToSignUp }: SignInProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignIn(email, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Welcome */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-amber-600" />
          </div>
          <h1 className="text-4xl font-serif text-amber-900 mb-2">Gleam</h1>
          <p className="text-amber-700">Welcome back to your daily inspiration</p>
        </div>

        {/* Sign In Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-amber-100">
          <h2 className="text-2xl font-serif text-amber-900 mb-6 text-center">Sign In</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-500" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-amber-400 transition-colors bg-white/50"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-amber-800 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-500" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-300 focus:border-amber-400 transition-colors bg-white/50"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-4 rounded-lg font-medium hover:from-amber-600 hover:to-orange-600 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
            >
              Sign In
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-amber-700">
              Don't have an account?{' '}
              <button
                onClick={onSwitchToSignUp}
                className="text-amber-600 hover:text-amber-800 font-medium underline"
              >
                Sign up here
              </button>
            </p>
          </div>
        </div>

        {/* Quote of the moment */}
        <div className="mt-8 text-center">
          <blockquote className="text-amber-700 italic font-serif text-lg">
            "Today is the first day of the rest of your life."
          </blockquote>
          <cite className="text-amber-600 text-sm block mt-2">— Abbie Hoffman</cite>
        </div>
      </div>
    </div>
  );
}