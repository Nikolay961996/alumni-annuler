import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ProblemCard as ProblemCardType, Translations } from '../types/ProblemCard.ts';

interface Props {
  card: ProblemCardType;
  translations: Translations;
}

export function ProblemCard({ card, translations }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-indigo-500">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-indigo-900">{card.title}</h3>
            <div className="flex gap-4 text-sm text-indigo-600 mt-1">
              <span>{translations.pseudo}: {card.pseudo}</span>
              <span>{translations.date}: {card.date}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-purple-800">{translations.briefProblem}</h4>
            <p className="text-gray-700 mt-1">{card.briefProblem}</p>
          </div>

          <div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors bg-indigo-50 px-4 py-2 rounded-full"
            >
              {isExpanded ? (
                <>
                  <ChevronUp size={20} />
                  {translations.showLess}
                </>
              ) : (
                <>
                  <ChevronDown size={20} />
                  {translations.showMore}
                </>
              )}
            </button>

            {isExpanded && (
              <div className="mt-4 space-y-4 animate-fadeIn">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-800">{translations.detailedProblem}</h4>
                  <p className="text-gray-700 mt-1">{card.detailedProblem}</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-medium text-indigo-800">{translations.request}</h4>
                  <p className="text-gray-700 mt-1">{card.request}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}