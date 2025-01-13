import {Language} from "./types/Language.ts";

interface StudentAny {
    nickname: string;
    date: string;
    title: string;
    briefProblem: string;
    detailedProblem: string;
    request: string;
}

export const students: Record<Language, StudentAny>[] = [
    {
        fr: {
            nickname: 'bmarlin',
            date: '10.01.2025',
            title: 'ALumni',
            briefProblem: 'Je ne savais pas qu\'il était possible de demander une prolongation du délai.',
            detailedProblem: 'Je ne devais pas venir en raison de problèmes de santé, mais je veux terminer mes études en France et obtenir un certificat. J\'ai une preuve de la clinique.',
            request: 'Annuler l\'alumni et prolonger le délai d\'un an'
        },
        ru: {
            nickname: 'bmarlin',
            date: '10.01.2025',
            title: 'алюмнизация',
            briefProblem: 'не знал что можно попросить продление',
            detailedProblem: 'из-за проблем со здоровьем не собирался приезжать. но очень хочу закончить обучение во франции и получить сертификат. есть доказательства из клиники.',
            request: 'отменить алюмнизацию и продлить дедлайн на год'
        }
    },

    {
        fr: {
            nickname: 'aphilome',
            date: '10.01.2025',
            title: 'Alumni',
            briefProblem: 'Le 10 janvier est le dernier jour avant l\'alumnisation. Il aurait dû être inclus.',
            detailedProblem: 'J\'étais convaincu que "0 jours avant l\'alumnisation" correspondait à moins de 24 heures. Par conséquent, cela impliquait qu\'après "1 jour avant l\'alumnisation", il y avait "0 jours 23 heures 59 minutes 59 secondes", ce qui est tout à fait logique. Après la période des fêtes, ayant achevé mon projet ft_quine, je me suis présentée à l\'école afin de le soutenir, mais j\'ai été déclarée alumni. Je vous prie de bien vouloir annuler mon alumnisation (étant actuellement en mesure de soutenir mon projet quine et de le remettre immédiatement). Je vous prie de bien vouloir prendre en considération ma situation. Nous nous sommes rendues sur le campus et avons fait une demande de visa spécifiquement dans le but d\'éviter cette alumnisation.',
            request: 'Annuler l\'alumni'
        },
        ru: {
            nickname: 'aphilome',
            date: '10.01.2025',
            title: 'Алюмнизация',
            briefProblem: '10 января - последний день до алюмнизации. Он должен был быть включительно. ',
            detailedProblem: 'я был убеждён, что \'0 дней before alumnization\' это менее 24 часов. То есть это означает, что после \'1 день до alumnization\' следует \'0 дней 23 часа 59 минут 59 секунд\', что вполне логично. после праздника я уже закончила выполнять проект ft_quine и пришла в школу для того, чтобы защитить его, но я стала alamni. прошу Вас отменить мою alamnization (сейчас я защищаю проект quine и могу его сдать прям сейчас). прошу Вас понять мою ситуацию. мы приехали в кампус и сделали визу специально, чтобы избежать alumnization',
            request: 'Отменить алюмнизацию'
        }
    },

    {
        ru: {
            nickname: 'bkathey',
            date: '10.01.2025',
            title: 'Алюмнизация',
            briefProblem: 'Невозможность выехать из РФ, по причине высылалась повестка',
            detailedProblem: '"К сожалению, я не смог приехать в Париж для очного обучения по двум причинам. Во-первых, это СВО. Во-вторых, у меня редкая военно-учетная специальность — снайпер, что сделало меня ""привлекательным"" кандидатом для срочной мобилизации. Повестки пришли быстро, что не удивительно, но конфликт в корне противоречит моим ценностям, поэтому я их проигнорировал. Чтобы не терять время и как-то решить вопрос с ""автоалюмнизацией"", я оперативно нашел работу в ИТ-компании в области кибербезопасности на должность руководителя разработки и внедрения. Я специально сменил банк, находящийся под санкциями, на ИТ-компанию, которая не подвержена санкционным рискам. Чтоб у сотрудников Ecole42 не было проблем в дальнейшем и им не задали неудобные вопросы. Однако, столкнулся с парадоксальной ситуацией: валидировать стажировку я не могу, потому что ""не доехал до Парижа"". Аргумент, что мой выезд из России в условиях текущего конфликта чреват задержанием на границе, игнорируется. ""Нас не интересуют ваши проблемы, езжай и точка"". Причем очень странная логика, кому то валидируют, кто-то игнорируется, откуда эта дискриминация я понять так и не смог. В сложившейся ситуации, как любой здравомыслящий человек, я выбираю ""подождать"", а не подвергать себя риску задержания на границе. Тем более, по моим ощущениям и публикациям в прессе, конфликт должен завершиться в ближайшие полгода, что позволит мне спокойно прие',
            request: ''
        },
        fr: {
            nickname: 'bkathey',
            date: '10.01.2025',
            title: 'Alumni',
            briefProblem: 'Impossibilité de quitter la Fédération de Russie',
            detailedProblem: '"Malheureusement, je n\'ai pas pu aller à Paris pour étudier à plein temps pour deux raisons. Premièrement, nous sommes en temps de guerre. Deuxièmement, j\'ai une spécialité militaire rare, celle de tireur d\'élite, ce qui fait de moi un candidat « attractif » pour la mobilisation d\'urgence. Les invitations sont arrivées rapidement, ce qui n\'est pas surprenant, mais comme le conflit était fondamentalement contraire à mes valeurs, je les ai ignorées. Pour ne pas perdre le fil et résoudre d\'une manière ou d\'une autre le problème des « sortants », j\'ai rapidement trouvé un emploi dans une société informatique spécialisée dans la cybersécurité en tant que responsable du développement et de la mise en œuvre. J\'ai délibérément quitté une banque sous sanctions pour une société informatique qui n\'est pas exposée aux risques de sanctions. Ainsi, les employés de l\'Ecole42 n\'auront pas de problèmes à l\'avenir et ne se poseront pas de questions gênantes. Cependant, j\'ai rencontré une situation paradoxale : je n\'ai pas pu télécharger ma convention de stage en intra, car je ne suis pas « venu à Paris ». L\'argument selon lequel mon départ de Russie en raison du conflit actuel pourrait entraîner une détention à la frontière a été ignoré. « Vos problèmes ne nous intéressent pas, vous n\'avez qu\'à partir et c\'est tout ». C\'est une logique très étrange, quelqu\'un peut télécharger un stage, quelqu\'un est ignoré, et je ne comprends pas d\'où vient cette discrimination. Dans la situation actuelle, comme toute personne sensée, je préfère « attendre le conflit » et ne pas me mettre en danger à la frontière. D\'autant plus que, selon mon ressenti et les publications dans la presse, le conflit devrait se terminer dans les six prochains mois, ce qui me permettra de venir déposer mes projets en toute tranquillité."',
            request: ''
        }
    },

    {
        ru: {
            nickname: 'galetha',
            date: '',
            title: '',
            briefProblem: 'Автоавария в которой получил такие травмы, как: перелом шейного отдела позвоночника, травма плеча, реабилитация',
            detailedProblem: 'У меня сложная ситуация, из-за которой я не успел подать документы на визу и из-за которой я не успеваю приехать в Париж до 10 января. 27 марта 2024 года я попал в автокатастрофу, в которой получил перелом шейного отдела позвоночника, множество ссадин и травму правого плеча. Готов предоставить документы, фотографии и заключения врачей. До конца этого года я проходил реабилитацию, из-за этого я не смог физически собрать необходимый перечень документов и подать документы на визу. Из-за этого прошу вас рассмотреть мою просьбу о переносе алюмнизации на 2 месяца, чтобы я успел сделать документы. Весь этот год, пока я проходил  реабилитацию, я все это время скучал по Ecole, именно учеба в Ecole давала мне силы каждый раз вставать и идти дальше.',
            request: 'Отменить алюмнизацию soldatovandrey4@gmail.com'
        },
        fr: {
            nickname: 'galetha',
            date: '',
            title: '',
            briefProblem: 'Accident de voiture dans lequel il a subi des blessures telles que : fracture de la colonne cervicale, blessure à l\'épaule, rééducation.',
            detailedProblem: 'J\'ai une situation difficile qui m\'a empêché de demander un visa et qui m\'empêchera de me rendre à Paris avant le 10 janvier. Le 27 mars 2024, j\'ai été victime d\'un accident de voiture au cours duquel j\'ai subi une fracture de la colonne cervicale, de multiples écorchures et une blessure à l\'épaule droite. Je suis prêt à fournir des documents, des photos et des rapports de médecins. Jusqu\'à la fin de cette année, j\'étais en rééducation, ce qui m\'a empêché de rassembler physiquement la liste des documents nécessaires et de demander un visa. Pour cette raison, je vous demande de prendre en considération ma demande de report de l\'alumnisation de 2 mois afin que j\'aie le temps de faire les documents. Pendant toute cette année, alors que j\'étais en rééducation, l\'Ecole m\'a manqué, ce sont mes études à l\'Ecole qui m\'ont donné la force de me relever et d\'aller de l\'avant à chaque fois. Traduit avec DeepL.com (version gratuite)',
            request: 'Annuler l\'alumni soldatovandrey4@gmail.com'
        }
    },

    {
        fr: {
            nickname: 'tbirdper',
            date: '10.01.2025',
            title: 'Alumni',
            briefProblem: 'Le 10 janvier est le dernier jour avant l\'alumnisation. Il aurait dû être inclus.',
            detailedProblem: 'J\'étais convaincu que "0 jours avant l\'alumnisation" correspondait à moins de 24 heures. Par conséquent, cela impliquait qu\'après "1 jour avant l\'alumnisation", il y avait "0 jours 23 heures 59 minutes 59 secondes", ce qui est tout à fait logique. Après la période des fêtes, ayant achevé mon projet ft_quine, je me suis présentée à l\'école afin de le soutenir, mais j\'ai été déclarée alumni. Je vous prie de bien vouloir annuler mon alumnisation (étant actuellement en mesure de soutenir mon projet quine et de le remettre immédiatement). Je vous prie de bien vouloir prendre en considération ma situation. Nous nous sommes rendues sur le campus et avons fait une demande de visa spécifiquement dans le but d\'éviter cette alumnisation.',
            request: 'Annuler l\'alumni'
        },
        ru: {
            nickname: 'tbirdper',
            date: '10.01.2025',
            title: 'Алюмнизация',
            briefProblem: '10 января - последний день до алюмнизации. Он должен был быть включительно. ',
            detailedProblem: 'я был убеждён, что \'0 дней before alumnization\' это менее 24 часов. То есть это означает, что после \'1 день до alumnization\' следует \'0 дней 23 часа 59 минут 59 секунд\', что вполне логично. после праздника я уже закончила выполнять проект ft_quine и пришла в школу для того, чтобы защитить его, но я стала alamni. прошу Вас отменить мою alamnization (сейчас я защищаю проект quine и могу его сдать прям сейчас). прошу Вас понять мою ситуацию. мы приехали в кампус и сделали визу специально, чтобы избежать alumnization',
            request: 'Отменить алюмнизацию'
        }
    },

    {
        ru: {
            nickname: 'wjonatho',
            date: '',
            title: '',
            briefProblem: '42 завалидировали мне стажировку, она заканчивается 17.03.2025. Правило, что я должен приехать до 10.01 появилось слишком поздно. Визу не получилось оформить так быстро ',
            detailedProblem: 'Если начать с начала, то начавшаяся война сильно ударила по бизнесу, который практически перестал стартовать стажировки, а если и стажировки были, то junior позиций не было. Людей увольняли после стажировок. Работу в такой ситуации было найти очень сложно, но все это время я думал о том, чтобы найти работу, завалидировать стажу. Вот осенью 2024 у меня получилось начать, я почитал все правила, понял что ничто не противоречит начать, а потом приехать в Париж сдавать пир видео. Тем более той внушительной суммы которую нужно показать консульству Франции у меня не было. И вот я спланировал, что в апреле переезжаю в Париж,   сдаю пирвидео, продолжаю обучение. А тут в декабре адм озвучивает в письме, что через 1 месяц (10.01.2025) алумнизируют меня и остальных, кто не логинился в кампусе. За 1 месяц, да еще и в новогодние праздники, там сумма огромная, чтобы так попасть в Париж. У меня уже была одна(30.12.2024) оценка стажировки от ментора и она прошла хорошо. Я все еще надеюсь, что я приеду в течение недели после второй оценки руководителя (17.03.2025) и сдам пирвидео, и продолжу свой путь в 42, достигну 17 lvl и получу квалификацию.',
            request: ''
        },
        fr: {
            nickname: 'wjonatho',
            date: '',
            title: '',
            briefProblem: '42 J\'ai obtenu un stage qui se termine le 17.03.2025. La règle selon laquelle je dois arriver avant le 10.01.01 est apparue trop tard. Je n\'ai pas pu obtenir un visa aussi rapidement',
            detailedProblem: 'Si vous commencez par le début, la guerre qui a éclaté a durement touché l\'entreprise, qui a pratiquement cessé de proposer des stages, et même s\'il y avait des stages, il n\'y avait pas de postes subalternes. Les gens étaient licenciés après leur stage. Il était très difficile de trouver un emploi dans cette situation, mais pendant tout ce temps, je pensais à trouver un emploi, à obtenir un stage. A l\'automne 2024, j\'ai réussi à commencer, j\'ai lu toutes les règles, j\'ai compris que rien ne s\'opposait à commencer, et puis je suis venu à Paris pour passer la vidéo de piratage. De plus, je n\'avais pas cette somme impressionnante d\'argent à présenter au consulat français. Et donc j\'ai prévu qu\'en avril je déménage à Paris, passe la pirvidéo, continue mes études. Et puis en décembre l\'administration fait savoir dans une lettre que dans 1 mois (10.01.2025) elle m\'alumnise ainsi que d\'autres qui ne se sont pas connectés au campus. En 1 mois, et même pendant les fêtes de fin d\'année, il y a une grosse somme d\'argent à débourser pour se rendre à Paris comme ça. J\'ai déjà eu une (30.12.2024) évaluation de stage par un mentor et ça s\'est bien passé. J\'espère toujours arriver dans la semaine qui suit ma deuxième évaluation par un superviseur (17.03.2025) et passer la pirvidéo et continuer mon voyage jusqu\'à 42, atteindre le niveau 17 et me qualifier. Traduit avec DeepL.com (version gratuite)',
            request: ''
        }
    },
];