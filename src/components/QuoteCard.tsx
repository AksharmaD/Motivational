import React from 'react';
import { Quote as QuoteIcon, Heart } from 'lucide-react';
import { Quote } from '../types';
import { moodImages } from '../data/quotes';

interface QuoteCardProps {
  quote: Quote;
  onLike?: () => void;
}

export default function QuoteCard({ quote, onLike }: QuoteCardProps) {
  const backgroundImage = moodImages[quote.mood];
  
  const moodStyles = {
    inspired: {
      gradient: 'from-purple-600/10 via-pink-500/10 to-purple-600/10',
      border: 'border-purple-200/50',
      badge: 'bg-purple-50 text-purple-700 border-purple-200',
      accent: 'text-purple-600'
    },
    calm: {
      gradient: 'from-blue-600/10 via-cyan-500/10 to-blue-600/10',
      border: 'border-blue-200/50',
      badge: 'bg-blue-50 text-blue-700 border-blue-200',
      accent: 'text-blue-600'
    },
    energized: {
      gradient: 'from-orange-600/10 via-red-500/10 to-orange-600/10',
      border: 'border-orange-200/50',
      badge: 'bg-orange-50 text-orange-700 border-orange-200',
      accent: 'text-orange-600'
    },
    focused: {
      gradient: 'from-indigo-600/10 via-purple-500/10 to-indigo-600/10',
      border: 'border-indigo-200/50',
      badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      accent: 'text-indigo-600'
    },
    peaceful: {
      gradient: 'from-green-600/10 via-emerald-500/10 to-green-600/10',
      border: 'border-green-200/50',
      badge: 'bg-green-50 text-green-700 border-green-200',
      accent: 'text-green-600'
    }
  };

  const currentMoodStyle = moodStyles[quote.mood];

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${currentMoodStyle.gradient}`} />
      </div>
      
      {/* Content Container */}
      <div className={`relative p-8 min-h-[420px] border ${currentMoodStyle.border} bg-white/95 backdrop-blur-sm flex flex-col`}>
        {/* Quote Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-white/90 rounded-full shadow-md border border-gray-100">
            <QuoteIcon className={`w-6 h-6 ${currentMoodStyle.accent}`} />
          </div>
        </div>

        {/* Quote Text - Main Content */}
        <div className="flex-1 flex items-center justify-center px-2">
          <blockquote className="text-gray-800 text-lg md:text-xl font-serif leading-relaxed text-center italic font-medium">
            "{quote.text}"
          </blockquote>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 space-y-4">
          {/* Author */}
          <cite className="block text-gray-700 font-semibold text-base text-center not-italic">
            — {quote.author}
          </cite>
          
          {/* Footer with Mood Badge and Like Button */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium capitalize border ${currentMoodStyle.badge}`}>
              {quote.mood}
            </span>
            
            <button
              onClick={onLike}
              className="p-2.5 rounded-full bg-white/90 hover:bg-white border border-gray-200 hover:border-gray-300 transition-all duration-200 group/heart shadow-sm hover:shadow-md"
              aria-label="Like quote"
            >
              <Heart className="w-5 h-5 text-gray-500 group-hover/heart:text-red-500 transition-colors duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}