import React, { useState, useMemo } from 'react';
import { BookOpen, LogOut, Sparkles, Waves, Zap, Target, Leaf } from 'lucide-react';
import { quotes } from '../data/quotes';
import { Mood, User } from '../types';
import QuoteCard from './QuoteCard';

interface DashboardProps {
  user: User;
  onSignOut: () => void;
}

export default function Dashboard({ user, onSignOut }: DashboardProps) {
  const [selectedMood, setSelectedMood] = useState<Mood | 'all'>('all');

  const moodOptions = [
    { value: 'all', label: 'All Moods', icon: BookOpen, color: 'text-gray-600' },
    { value: 'inspired', label: 'Inspired', icon: Sparkles, color: 'text-purple-600' },
    { value: 'calm', label: 'Calm', icon: Waves, color: 'text-blue-600' },
    { value: 'energized', label: 'Energized', icon: Zap, color: 'text-orange-600' },
    { value: 'focused', label: 'Focused', icon: Target, color: 'text-indigo-600' },
    { value: 'peaceful', label: 'Peaceful', icon: Leaf, color: 'text-green-600' }
  ];

  const filteredQuotes = useMemo(() => {
    if (selectedMood === 'all') return quotes;
    return quotes.filter(quote => quote.mood === selectedMood);
  }, [selectedMood]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-amber-600" />
              </div>
              <h1 className="text-2xl font-serif text-amber-900">Gleam</h1>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <span className="text-amber-700">
                {getGreeting()}, {user.name}!
              </span>
              <button
                onClick={onSignOut}
                className="flex items-center gap-2 px-3 py-2 text-amber-600 hover:text-amber-800 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">
            Your Daily Inspiration
          </h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Discover quotes that resonate with your current mood and fuel your motivation throughout the day.
          </p>
        </div>

        {/* Mood Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-amber-800 mb-4 text-center">
            How are you feeling today?
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {moodOptions.map((mood) => {
              const Icon = mood.icon;
              const isSelected = selectedMood === mood.value;
              
              return (
                <button
                  key={mood.value}
                  onClick={() => setSelectedMood(mood.value as Mood | 'all')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                    isSelected
                      ? 'bg-white text-amber-800 shadow-lg scale-105'
                      : 'bg-white/60 text-amber-600 hover:bg-white/80 hover:scale-105'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-600' : mood.color}`} />
                  <span className="font-medium">{mood.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quote Count */}
        <div className="text-center mb-8">
          <p className="text-amber-700">
            Showing <span className="font-semibold">{filteredQuotes.length}</span> quotes
            {selectedMood !== 'all' && (
              <span> for <span className="font-semibold capitalize">{selectedMood}</span> mood</span>
            )}
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredQuotes.map((quote) => (
            <QuoteCard
              key={quote.id}
              quote={quote}
              onLike={() => console.log('Liked quote:', quote.id)}
            />
          ))}
        </div>

        {/* No quotes message */}
        {filteredQuotes.length === 0 && (
          <div className="text-center py-12">
            <div className="p-6 bg-white/60 rounded-2xl max-w-md mx-auto">
              <h3 className="text-xl font-serif text-amber-800 mb-2">
                No quotes found
              </h3>
              <p className="text-amber-600">
                Try selecting a different mood to discover new inspiration.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/60 border-t border-amber-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-amber-600 font-serif italic">
              "Let today be the start of something new." — Anonymous
            </p>
            <p className="text-amber-500 text-sm mt-2">
              Made with ❤️ for daily inspiration
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}