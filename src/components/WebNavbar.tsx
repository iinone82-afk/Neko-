import React from 'react';
import { Timer, CalendarDays, ShoppingBag, Heart, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { NavTab } from './BottomNav';

interface WebNavbarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  coins: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenShop: () => void;
  hatCount: number;
}

export const WebNavbar: React.FC<WebNavbarProps> = ({
  activeTab,
  onSelectTab,
  coins,
  soundEnabled,
  onToggleSound,
  onOpenShop,
  hatCount,
}) => {
  const navItems: { id: NavTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    {
      id: 'timer',
      label: 'Focus Timer',
      icon: <Timer className="w-4 h-4" />,
    },
    {
      id: 'calendar',
      label: 'Calendar & Schedule',
      icon: <CalendarDays className="w-4 h-4" />,
    },
    {
      id: 'shop',
      label: 'Hat Shop',
      icon: <ShoppingBag className="w-4 h-4" />,
      badge: '60🪙',
    },
    {
      id: 'cat',
      label: 'Cat Sanctuary',
      icon: <Heart className="w-4 h-4" />,
      badge: hatCount > 0 ? `${hatCount} 🎩` : undefined,
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <div
          onClick={() => onSelectTab('timer')}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-400 flex items-center justify-center text-xl shadow-xs border border-orange-200 group-hover:scale-105 transition-transform">
            🐱
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-['Fredoka',sans-serif] font-bold text-stone-900 text-lg sm:text-xl tracking-tight leading-none">
                NekoTimer
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-extrabold bg-orange-100 text-orange-800 px-1.5 py-0.5 rounded-md border border-orange-200">
                Web
              </span>
            </div>
            <p className="text-[11px] font-semibold text-stone-400 hidden xs:block">
              Cute Cat Pomodoro & Productivity
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-stone-100/80 p-1 rounded-2xl border border-stone-200/60">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all relative ${
                  isActive
                    ? 'bg-white text-orange-600 shadow-xs ring-1 ring-black/5'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full leading-tight ${
                      isActive
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-amber-200 text-amber-900'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Utility Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Coin Badge button that jumps to shop */}
          <button
            onClick={onOpenShop}
            title="Earn 10 coins every 10 min. All hats cost 60 coins!"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-100/90 hover:bg-amber-200 border border-amber-300 rounded-full text-amber-900 font-extrabold text-xs shadow-2xs active:scale-95 transition group"
          >
            <span className="text-sm transition group-hover:rotate-12 inline-block">🪙</span>
            <span className="font-['Fredoka',sans-serif] text-sm tracking-wide">{coins}</span>
            <Sparkles className="w-3 h-3 text-amber-600 group-hover:scale-125 transition" />
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Mute Sounds' : 'Unmute Sounds'}
            className={`p-2 rounded-xl border transition ${
              soundEnabled
                ? 'bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100'
                : 'bg-stone-100 text-stone-400 border-stone-200 hover:bg-stone-200'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav strip for small screens */}
      <div className="md:hidden flex items-center justify-around px-2 py-1 bg-white border-t border-orange-50">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`flex-1 flex flex-col items-center py-1.5 px-1 rounded-xl text-[11px] font-bold transition ${
                isActive
                  ? 'text-orange-600 bg-orange-50'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <span className="relative">
                {item.icon}
                {item.badge && (
                  <span className="absolute -top-1.5 -right-3 text-[8px] font-extrabold px-1 py-0.2 bg-amber-400 text-amber-950 rounded-full">
                    {item.badge}
                  </span>
                )}
              </span>
              <span className="mt-0.5">{item.label.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
