import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LanguageSwitch } from './components/LanguageSwitch.tsx';
import { sampleCards } from './Data.ts';
import { Language, translations } from './types/ProblemCard.ts';
import { ProblemCard } from './components/ProblemCard.tsx';

function App() {
  const [language, setLanguage] = useState<Language>('fr');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <LanguageSwitch 
        currentLanguage={language}
        onLanguageChange={setLanguage}
      />

      <img src={viteLogo} className="logo" alt="Vite logo" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {sampleCards.map((card, index) => (
            <ProblemCard
              key={index}
              card={card}
              translations={translations[language]}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
