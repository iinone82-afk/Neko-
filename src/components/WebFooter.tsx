import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export const WebFooter: React.FC = () => {
  return (
    <footer className="mt-auto border-t border-orange-150/60 bg-white/60 backdrop-blur-xs py-5 px-4 text-center select-none">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-500 font-medium">
        <div className="flex items-center gap-1.5">
          <span className="text-base">🐱</span>
          <span className="font-['Fredoka',sans-serif] font-bold text-stone-700">NekoTimer</span>
          <span>— Your feline companion for deep work, study, and joyful focus.</span>
        </div>
        <div className="flex items-center gap-3 text-stone-400">
          <span className="flex items-center gap-1">
            <span>🪙 10 min = 10 coins</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span>🎩 Custom Hats 60 coins</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
