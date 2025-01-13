export type Language = 'fr' | 'ru';

export interface Translations {
    nickname: string;
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
        nickname: 'nickname',
        date: 'date du problème',
        title: 'titre',
        briefProblem: 'problème en bref',
        detailedProblem: 'détail du problème',
        request: 'demande',
        showMore: 'voir plus',
        showLess: 'voir moins',
        noProblems: 'aucun problème à afficher'
    },
    ru: {
        nickname: 'псевдоним',
        date: 'дата проблемы',
        title: 'заголовок',
        briefProblem: 'краткое описание проблемы',
        detailedProblem: 'подробное описание',
        request: 'запрос',
        showMore: 'показать больше',
        showLess: 'показать меньше',
        noProblems: 'нет проблем для отображения'
    }
};
