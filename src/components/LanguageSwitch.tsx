import React from 'react';
import { Languages } from 'lucide-react';
import { Language } from '../types/ProblemCard.ts';

interface Props {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageSwitch({ currentLanguage, onLanguageChange }: Props) {
  return (
    <div className="fixed top-4 right-4">
      <button
        onClick={() => onLanguageChange(currentLanguage === 'fr' ? 'ru' : 'fr')}
        className="flex items-center gap-2 px-4 py-2 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-full text-indigo-600 hover:text-indigo-700 border-2 border-indigo-100"
      >
        <Languages size={20} />
        <span className="font-medium uppercase">{currentLanguage}</span>
      </button>
    </div>
  );
}