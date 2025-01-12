export interface ProblemCard {
    pseudo: string;
    date: string;
    title: string;
    briefProblem: string;
    detailedProblem: string;
    request: string;
  }
  
  export type Language = 'fr' | 'ru';
  
  export interface Translations {
    pseudo: string;
    date: string;
    title: string;
    briefProblem: string;
    detailedProblem: string;
    request: string;
    showMore: string;
    showLess: string;
    noProblems: string;
  }
  
  export const translations: Record<Language, Translations> = {
    fr: {
      pseudo: 'Pseudo',
      date: 'Date du problème',
      title: 'Titre',
      briefProblem: 'Problème en bref',
      detailedProblem: 'Détail du problème',
      request: 'Demande',
      showMore: 'Voir plus',
      showLess: 'Voir moins',
      noProblems: 'Aucun problème à afficher'
    },
    ru: {
      pseudo: 'Псевдоним',
      date: 'Дата проблемы',
      title: 'Заголовок',
      briefProblem: 'Краткое описание проблемы',
      detailedProblem: 'Подробное описание',
      request: 'Запрос',
      showMore: 'Показать больше',
      showLess: 'Показать меньше',
      noProblems: 'Нет проблем для отображения'
    }
  };