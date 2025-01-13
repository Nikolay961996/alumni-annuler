import { useState } from 'react'
import ftLogo from './assets/42.svg'
import './App.css'
import { LanguageSwitch } from './components/LanguageSwitch.tsx';
import { students } from './Data.ts';
import { Language, translations } from './types/Language.ts';
import { ProblemCard } from './components/ProblemCard.tsx';

function App() {
  const [language, setLanguage] = useState<Language>('fr');

  return (
      <div className="min-h-screen">
          <LanguageSwitch
              currentLanguage={language}
              onLanguageChange={setLanguage}
          />

          <div className="flex items-center">
            <img src={ftLogo} className="logo" alt="Ft logo"/>
              <div className="flex flex-col items-start">
                  <h1 className="text-2xl leading-tight">Alumni</h1>
                  <h2 className="">les problèmes</h2>
              </div>
          </div>

          <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                  {students.map((card, index) => (
                      <ProblemCard
                          key={index}
                          card={card[language]}
                          translations={translations[language]}
                      />
                  ))}
              </div>
          </div>
      </div>
  )
}

export default App
