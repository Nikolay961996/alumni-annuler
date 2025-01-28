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
            request: 'Annuler l\'alumni et prolonger le délai d\'un an\namarettocandy@yandex.ru'
        },
        ru: {
            nickname: 'bmarlin',
            date: '10.01.2025',
            title: 'алюмнизация',
            briefProblem: 'не знал что можно попросить продление',
            detailedProblem: 'из-за проблем со здоровьем не собирался приезжать. но очень хочу закончить обучение во франции и получить сертификат. есть доказательства из клиники.',
            request: 'отменить алюмнизацию и продлить дедлайн на год\namarettocandy@yandex.ru'
        }
    },

    {
        fr: {
            nickname: 'aphilome',
            date: '10.01.2025',
            title: 'Alumni',
            briefProblem: 'Le 10 janvier est le dernier jour avant l\'alumnisation. Il aurait dû être inclus.',
            detailedProblem: 'J\'étais convaincue que \'0 jours avant l\'alumnization\' correspondait à moins de 24 heures. Cela impliquait donc qu\'après \'1 jour avant l\'alumnisation\', il y avait \'0 jours 23 heures 59 minutes 59 secondes\', ce qui est tout à fait logique, car tous les délais, y compris pour le blackhall, suivaient la même logique. Après la période des fêtes, ayant achevé mon projet ft_quine, je me suis présentée à l\'école afin de le soutenir, mais j\'ai été déclarée alumni. Je vous prie de comprendre ma situation. Nous sommes venues au campus et avons fait une demande de visa touristique spécifiquement afin d\'éviter l\'alumnization. Nous attendons votre décision pour pouvoir revenir à Paris en tant qu\'étudiantes.',
            request: 'Annuler l\'alumni'
        },
        ru: {
            nickname: 'aphilome',
            date: '10.01.2025',
            title: 'Алюмнизация',
            briefProblem: '10 января - последний день до алюмнизации. Он должен был быть включительно. ',
            detailedProblem: 'я была убеждена, что \'0 дней before alumnization\' это менее 24 часов. То есть это означает, что после \'1 день до alumnization\' следует \'0 дней 23 часа 59 минут 59 секунд\', что вполне логично, так как все дедлайны, включая blackhall следовали такой же логике. после праздника я уже закончила выполнять проект ft_quine и пришла в школу для того, чтобы защитить его, но я стала alamni. прошу Вас отменить мою alamnization (сейчас я защитила проект quine). прошу Вас понять мою ситуацию. мы приехали в кампус и сделали туристическую визу специально, чтобы избежать alumnization. Мы ждем Вашего решения, чтобы вернуться в Париж в качестве студента',
            request: 'Отменить алюмнизацию'
        }
    },

    {
        ru: {
            nickname: 'bkathey',
            date: '10.01.2025',
            title: 'Алюмнизация',
            briefProblem: 'Невозможность выехать из РФ, по причине высылалась повестка',
            detailedProblem: '"К сожалению, я не смог приехать в Париж для очного обучения по двум причинам. Во-первых, это СВО. Во-вторых, у меня редкая военно-учетная специальность — снайпер, что сделало меня ""привлекательным"" кандидатом для срочной мобилизации. Повестки пришли быстро, что не удивительно, но конфликт в корне противоречит моим ценностям, поэтому я их проигнорировал. Чтобы не терять время и как-то решить вопрос с ""автоалюмнизацией"", я оперативно нашел работу в ИТ-компании в области кибербезопасности на должность руководителя разработки и внедрения. Я специально сменил банк, находящийся под санкциями, на ИТ-компанию, которая не подвержена санкционным рискам. Чтоб у сотрудников Ecole42 не было проблем в дальнейшем и им не задали неудобные вопросы. Однако, столкнулся с парадоксальной ситуацией: валидировать стажировку я не могу, потому что ""не доехал до Парижа"". Аргумент, что мой выезд из России в условиях текущего конфликта чреват задержанием на границе, игнорируется. ""Нас не интересуют ваши проблемы, езжай и точка"". Причем очень странная логика, кому то валидируют, кто-то игнорируется, откуда эта дискриминация я понять так и не смог. В сложившейся ситуации, как любой здравомыслящий человек, я выбираю ""подождать"", а не подвергать себя риску задержания на границе. Тем более, по моим ощущениям и публикациям в прессе, конфликт должен завершиться в ближайшие полгода, что позволит мне спокойно прие\nhttps://drive.google.com/drive/folders/1amStCWrjFzCC1bwOAfB7rAzgyPN0EpvU?hl=ru',
            request: ''
        },
        fr: {
            nickname: 'bkathey',
            date: '10.01.2025',
            title: 'Alumni',
            briefProblem: 'Impossibilité de quitter la Fédération de Russie',
            detailedProblem: 'Madame, Monsieur,\n' +
                'Par la présente, je me permets de vous contacter au sujet de mon alumnisation initialement prévue le 10 janvier 2025.\n' +
                'Je possède une spécialité militaire rare – tireur d’élite – raison pour laquelle j’ai reçu trois convocations à la guerre (le 20 mars, le 20 juin et le 20 septembre 2024). Je ne me suis pas présenté au bureau de recrutement, car ce conflit va à l’encontre de mes valeurs humaines. De ce fait, je ne peux actuellement pas quitter la Russie : je risque fortement d’être détenu à la frontière, comme cela est déjà arrivé à plusieurs personnes dans la même situation (voir https://checkperson.ru/articles-sections/section-dolgi_i_zadolzhennosty/post-zapret_na_vyezd_za_granicu_pri_mobilizacii, https://pravo.ru/story/245178/, https://ura.news/news/1052641656).\n' +
                'Le 20 septembre 2024, j’ai quitté mon emploi à la banque Sberbank (sous sanctions internationales) pour rejoindre l’entreprise Cross Technologie, spécialisée en cybersécurité et non soumise aux sanctions, le poste qui me confère une exonération du service militaire.\n' +
                'Le 9 novembre 2024, j’ai tenté de télécharger mon contrat de travail sur l’Intra 42. Cependant, un message d’erreur indiquant « please edit your form correctly and submit it again » est apparu. J’ai alors envoyé cinq courriels à l’adresse pedago@42.fr (les 9/11, 11/11, 15/11, 27/11 et 9/12/2024 & 1/1/2025), sans parvenir à résoudre le problème. L’école m’a simplement indiqué que mon transfert n’avait pas abouti.\n' +
                'D’après plusieurs sources de presse (par exemple, https://www.bbc.com/russian/articles/c24nmdyzyv2o), le conflit militaire pourrait prendre fin au cours des six prochains mois. C’est pourquoi je sollicite votre bienveillance pour reporter mon alumnisation au 1ᵉʳ août 2025, ce qui me permettrait de finaliser mon projet Internship-1 au sein de Cross Technologie, d’obtenir le visaet de valider mon projet sur le campus de Paris.\n' +
                'Je voudrais vous présenter, également, les réalisations clés dans ma carrière :\n' +
                '•  Développement d\'un système en Java/PostgreSQL/Kafka permettant aux clients de recevoir des notifications concernant les amendes administratives (automobiles, civiles, fiscales) et de les payer avec une réduction de 50%, ainsi que de consulter les relevés d\'amendes (Sberbank) ;\n' +
                '•  Migration de l\'unité de RedHat OpenShift vers Kubernetes, d\'Oracle vers PostgreSQL, et implémentation de GitOps avec ArgoCD (Sberbank) ;\n' +
                '•  Déploiement du système de journalisation Prometheus, des tableaux de bord Grafana et du stockage Elasticsearch (Sberbank) ;\n' +
                '•  Participation au programme de formation et d\'encadrement de 12 stagiaires de School21, dont beaucoup travaillent actuellement dans de grandes entreprises financières (Sberbank) ;\n' +
                '•  Développement d\'un système de surveillance du comportement des utilisateurs pour détecter les actions illégitimes (CrossTech) ;\n' +
                '•  Création et mise en œuvre d\'un système ETL haute performance (2 To/jour) en Java/Kafka/ClickHouse, assurant une vitesse d\'écriture de 1 million d\'événements/seconde et la possibilité d\'une analyse analytique complexe (CrossTech) ;\n' +
                '•  Déploiement de la version bêta de notre propre produit IDM CAE (CrossTech) ;\n' +
                '•  Migration de 350 To de données de Hadoop HDFS vers notre système ETL en utilisant Spark et PySpark (CrossTech).\n' +
                'Pour information documents que je peux fournir :\n' +
                '• mon diplôme de tireur d’élite,\n' +
                '• mes trois convocations,\n' +
                '• mon attestation de licenciement de Sberbank,\n' +
                '• mon contrat de travail chez Cross Technologie (signé le 9 novembre 2024), pour un poste de responsable du développement et de la mise en œuvre.\n' +
                'Dans l’attente de votre réponse, je reste à votre disposition pour tout renseignement complémentaire et vous remercie vivement de l’attention portée à mon dossier.\n' +
                'Veuillez agréer, Madame, Monsieur, l’expression de ma considération distinguée.\n',
            request: 'Veuillez me donner la possibilité de télécharger le contrat dans le projet "Internship II"\nhttps://drive.google.com/drive/folders/1amStCWrjFzCC1bwOAfB7rAzgyPN0EpvU?hl=ru'
        }
    },

    /*
    {
        ru: {
            nickname: 'galetha',
            date: '',
            title: 'Потенциальный отказ в стажировке',
            briefProblem: 'Автоавария в которой получил такие травмы, как: перелом шейного отдела позвоночника, травма плеча, реабилитация',
            detailedProblem: 'У меня сложная ситуация, из-за которой я не успел подать документы на визу и из-за которой я не успеваю приехать в Париж до 10 января. 27 марта 2024 года я попал в автокатастрофу, в которой получил перелом шейного отдела позвоночника, множество ссадин и травму правого плеча. Готов предоставить документы, фотографии и заключения врачей. До конца этого года я проходил реабилитацию, из-за этого я не смог физически собрать необходимый перечень документов и подать документы на визу. Из-за этого прошу вас рассмотреть мою просьбу о переносе алюмнизации на 2 месяца, чтобы я успел сделать документы. Весь этот год, пока я проходил  реабилитацию, я все это время скучал по Ecole, именно учеба в Ecole давала мне силы каждый раз вставать и идти дальше.',
            request: 'Предоставьте время, чтобы прибыть в кампус до 20 апреля 2025 года soldatovandrey4@gmail.com'
        },
        fr: {
            nickname: 'galetha',
            date: '',
            title: 'Refus potentiel de stage',
            briefProblem: 'Accident de voiture dans lequel il a subi des blessures telles que : fracture de la colonne cervicale, blessure à l\'épaule, rééducation.',
            detailedProblem: 'J\'ai une situation difficile qui m\'a empêché de demander un visa et qui m\'empêchera de me rendre à Paris avant le 10 janvier. Le 27 mars 2024, j\'ai été victime d\'un accident de voiture au cours duquel j\'ai subi une fracture de la colonne cervicale, de multiples écorchures et une blessure à l\'épaule droite. Je suis prêt à fournir des documents, des photos et des rapports de médecins. Jusqu\'à la fin de cette année, j\'étais en rééducation, ce qui m\'a empêché de rassembler physiquement la liste des documents nécessaires et de demander un visa. Pour cette raison, je vous demande de prendre en considération ma demande de report de l\'alumnisation de 2 mois afin que j\'aie le temps de faire les documents. Pendant toute cette année, alors que j\'étais en rééducation, l\'Ecole m\'a manqué, ce sont mes études à l\'Ecole qui m\'ont donné la force de me relever et d\'aller de l\'avant à chaque fois.',
            request: 'Prévoir du temps pour arriver sur le campus avant le 20 avril 2025 soldatovandrey4@gmail.com'
        }
    },
    */

    /*
    {
        ru: {
            nickname: 'wjonatho',
            date: '',
            title: 'Потенциальный отказ в стажировке',
            briefProblem: '42 завалидировали мне стажировку, она заканчивается 17.03.2025. Правило, что я должен приехать до 10.01 появилось слишком поздно. Визу не получилось оформить так быстро ',
            detailedProblem: 'Если начать с начала, то начавшаяся война сильно ударила по бизнесу, который практически перестал стартовать стажировки, а если и стажировки были, то junior позиций не было. Людей увольняли после стажировок. Работу в такой ситуации было найти очень сложно, но все это время я думал о том, чтобы найти работу, завалидировать стажу. Вот осенью 2024 у меня получилось начать, я почитал все правила, понял что ничто не противоречит начать, а потом приехать в Париж сдавать пир видео. Тем более той внушительной суммы которую нужно показать консульству Франции у меня не было. И вот я спланировал, что в апреле переезжаю в Париж,   сдаю пирвидео, продолжаю обучение. А тут в декабре адм озвучивает в письме, что через 1 месяц (10.01.2025) алумнизируют меня и остальных, кто не логинился в кампусе. За 1 месяц, да еще и в новогодние праздники, там сумма огромная, чтобы так попасть в Париж. У меня уже была одна(30.12.2024) оценка стажировки от ментора и она прошла хорошо. Я все еще надеюсь, что я приеду в течение недели после второй оценки руководителя (17.03.2025) и сдам пирвидео, и продолжу свой путь в 42, достигну 17 lvl и получу квалификацию.',
            request: ''
        },
        fr: {
            nickname: 'wjonatho',
            date: '',
            title: 'Refus potentiel de stage',
            briefProblem: '42 J\'ai obtenu un stage qui se termine le 17.03.2025. La règle selon laquelle je dois arriver avant le 10.01.01 est apparue trop tard. Je n\'ai pas pu obtenir un visa aussi rapidement',
            detailedProblem: 'Si vous commencez par le début, la guerre qui a éclaté a durement touché l\'entreprise, qui a pratiquement cessé de proposer des stages, et même s\'il y avait des stages, il n\'y avait pas de postes subalternes. Les gens étaient licenciés après leur stage. Il était très difficile de trouver un emploi dans cette situation, mais pendant tout ce temps, je pensais à trouver un emploi, à obtenir un stage. A l\'automne 2024, j\'ai réussi à commencer, j\'ai lu toutes les règles, j\'ai compris que rien ne s\'opposait à commencer, et puis je suis venu à Paris pour passer la vidéo de piratage. De plus, je n\'avais pas cette somme impressionnante d\'argent à présenter au consulat français. Et donc j\'ai prévu qu\'en avril je déménage à Paris, passe la pirvidéo, continue mes études. Et puis en décembre l\'administration fait savoir dans une lettre que dans 1 mois (10.01.2025) elle m\'alumnise ainsi que d\'autres qui ne se sont pas connectés au campus. En 1 mois, et même pendant les fêtes de fin d\'année, il y a une grosse somme d\'argent à débourser pour se rendre à Paris comme ça. J\'ai déjà eu une (30.12.2024) évaluation de stage par un mentor et ça s\'est bien passé. J\'espère toujours arriver dans la semaine qui suit ma deuxième évaluation par un superviseur (17.03.2025) et passer la pirvidéo et continuer mon voyage jusqu\'à 42, atteindre le niveau 17 et me qualifier.',
            request: ''
        }
    },
    */
    
    {
        ru: {
            nickname: 'anatashi',
            date: '10.01.2025',
            title: 'Алюмнизация',
            briefProblem: 'Проблема в получении визы. 1.11.2024 пришел отказ в получении визы с рекомендацией подать на долгосрочную визу. Решение может выдать префектура.',
            detailedProblem: 'Не смог разобраться в бюрократии по получению визы. Мое дело для вида на жительство (TITRE DE SEJOUR ) находится в sous-préfecture d’Argenteuil, но я нахожусь вне Франции, префеткура требоует моего личного присутствия и первое рандеву назначало на 30.09.2024. Я начал собирать информацию какую мне необходимо получить визу, но не в визомом центре не в посольстве Франции не в Campus-France не дали ответа, какая мне нужна виза. В итоге я указал как личный визит в sous-préfecture d’Argenteuil, но получил отказ. Так как подача и рассмотрение документов теперь не проходит в упрощенном визите, то каждая попытка обходится для меня от 500 евро. На текущий момент я планирую пройти заново Campus-France и попробовать получить студенческую визу. Прошу дать мне квартал, этого времени мне должно хватить чтобы пройти валидацию от Campus-France, получить ответ от посольства Франции и при положительном решении мне максимум потребуется неделя для сдачи проекта.',
            request: 'Предоставить время для приезда в кампус до 01.04.2025'
        },
        fr: {
            nickname: 'anatashi',
            date: '10.01.2025',
            title: 'Alumni',
            briefProblem: 'Le problème est d\'obtenir un visa. 1.11.2024 le refus d\'obtenir un visa est venu avec la recommandation de demander un visa de longue durée. La décision peut être rendue par la préfecture.',
            detailedProblem: 'Je me permets de vous écrire pour vous expliquer ma situation concernant les démarches administratives liées à l’obtention de mon titre de séjour. Mon dossier pour le titre de séjour (TITRE DE SÉJOUR) se trouve à la sous-préfecture d’Argenteuil, mais étant actuellement hors de France, la préfecture exige ma présence physique. Le premier rendez-vous qui m’a été attribué est fixé au 30 septembre 2024. J’ai commencé à chercher des informations sur le type de visa dont j’ai besoin, mais ni le centre de visas, ni l’ambassade de France, ni Campus France n’ont été en mesure de m’indiquer clairement quel visa serait approprié à ma situation. Finalement, j’ai indiqué un rendez-vous personnel à la sous-préfecture d’Argenteuil dans ma demande, mais celle-ci a été refusée. Étant donné que la procédure de dépôt et d’examen des documents ne se fait plus via un rendez-vous simplifié, chaque tentative me coûte environ 500 euros. À ce jour, je prévois de reprendre la procédure avec Campus France afin de demander un visa étudiant. Ainsi, je sollicite votre bienveillance pour me permettre un délai d’un trimestre. Ce délai devrait être suffisant pour finaliser la validation auprès de Campus France, obtenir une réponse de l’ambassade de France et, en cas de décision favorable, je m’engage à finaliser mon projet sous une semaine. Je reste à votre disposition pour toute information complémentaire et vous remercie par avance pour votre compréhension.',
            request: 'Prévoyez du temps pour arriver sur le campus jusqu\'au 01.04.2025'
        }
    },

    {
        fr: {
            nickname: 'tbirdper',
            date: '10.01.2025',
            title: 'Alumni',
            briefProblem: 'Le 10 janvier est le dernier jour avant l\'alumnisation. Il aurait dû être inclus.',
            detailedProblem: 'J\'étais convaincue que \'0 jours avant l\'alumnization\' correspondait à moins de 24 heures. Cela impliquait donc qu\'après \'1 jour avant l\'alumnisation\', il y avait \'0 jours 23 heures 59 minutes 59 secondes\', ce qui est tout à fait logique, car tous les délais, y compris pour le blackhall, suivaient la même logique. Après la période des fêtes, ayant achevé mon projet ft_quine, je me suis présentée à l\'école afin de le soutenir, mais j\'ai été déclarée alumni. Je vous prie de comprendre ma situation. Nous sommes venues au campus et avons fait une demande de visa touristique spécifiquement afin d\'éviter l\'alumnization. Nous attendons votre décision pour pouvoir revenir à Paris en tant qu\'étudiantes.',
            request: 'Annuler l\'alumni'
        },
        ru: {
            nickname: 'tbirdper',
            date: '10.01.2025',
            title: 'Алюмнизация',
            briefProblem: '10 января - последний день до алюмнизации. Он должен был быть включительно. ',
            detailedProblem: 'я был убежден, что \'0 дней before alumnization\' это менее 24 часов. То есть это означает, что после \'1 день до alumnization\' следует \'0 дней 23 часа 59 минут 59 секунд\', что вполне логично, так как все дедлайны, включая blackhall следовали такой же логике. после праздника я уже закончила выполнять проект ft_quine и пришла в школу для того, чтобы защитить его, но я стала alamni. прошу Вас отменить мою alamnization (сейчас я защитила проект quine). прошу Вас понять мою ситуацию. мы приехали в кампус и сделали туристическую визу специально, чтобы избежать alumnization. Мы ждем Вашего решения, чтобы вернуться в Париж в качестве студента',
            request: 'Запрос: Предоставьте время, чтобы прибыть в кампус до апреля 2025 года soldatovandrey4@gmail.com'
        }
    },
    
    {
        ru: {
            nickname: 'mlizzie',
            date: '10.01.2025',
            title: 'Алюмнизация',
            briefProblem: 'Нет возможность выехать из РФ, получение визы',
            detailedProblem: 'Прошу об отмене алюминизации и переносе даты албминизаци. В июлю 2023 загрузил файл социального страхования, но не мог получить валидацию. Писал в адм но не получил ответа (Есть скриншот).  В декабре мой аккаунт был разблокирован, и я хотел загрузить документы о прохождение стажировки. Чтобы отсрочить алюминизацию. Но мои документы не прошли проверку, причина: перевод в школу был не завершен. Хотя Летом 2022 года я приезжал в Париж и завершил перевод. Прошу дать отсрочку  до июня 2024 по алюминизации чтобы  закрыть стажировку и продолжить обучение в школе.',
            request: 'Предоставить время для приезда в кампус до 01.06.2025 n987085904@yandex.ru'
        },
        fr: {
            nickname: 'mlizzie',
            date: '10.01.2025',
            title: 'Alumni',
            briefProblem: 'Le problème est d\'obtenir un visa',
            detailedProblem: 'Je demande d\'annuler l\'aliminisation et de reporter la date d\'aliminisation. En juillet 2023, j\'ai téléchargé le dossier de sécurité sociale, mais je n\'ai pas pu obtenir de validation. J\'ai écrit à l\'administrateur, mais je n\'ai pas reçu de réponse (Il y a une capture d\'écran). En décembre, mon compte a été débloqué et je voulais télécharger des documents sur le stage. Reporter l\'aliminisation. Mais mes documents ne validaient pas , la raison: le transfert à l\'école n\'était pas terminé. Bien qu\'à l\'été 2022, je sois venu à Paris et j\'ai terminé le transfert. Je demande un report jusqu\'en juin 2024 pour l\'aluminisation, afin de pouvoir clôturer le stage et continuer à étudier à l\'école.',
            request: 'Prévoyez du temps pour arriver sur le campus jusqu\'au 01.06.2025 n987085904@yandex.ru'
        }
    },



    {
        ru: {
            nickname: 'msamual',
            date: '10.01.2025',
            title: 'Алюмнизация',
            briefProblem: 'Нет возможность выехать из РФ, получил отказ в визе 3 раза',
            detailedProblem: 'Подавал на визу в 2022 и 2 раза в 2023 2 раза проходил кампус франс но получал отказ в визе. В декабре узнал о предстоящей алюмнизации и решил попробовать получить турвизу. загрузил страховку но на визу не подал так как понял что не успеваю. Прошу отложить алюмнизацию до лета 2025',
            request: 'Предоставить время для приезда в кампус до 01.06.2025 suryashev@bk.ru'
        },
        fr: {
            nickname: 'msamual',
            date: '10.01.2025',
            title: 'Alumni',
            briefProblem: 'Impossible de quitter la Russie, j\'ai reçu un refus de visa trois fois.',
            detailedProblem: 'J\'ai demandé un visa en 2022 et deux fois en 2023, et deux fois j\'ai suivi le processus Campus France, mais j\'ai reçu un refus de visa à chaque fois. En décembre, j\'ai appris la prochaine alumniation et j\'ai décidé d\'essayer d\'obtenir un visa touristique. J\'ai téléchargé l\'assurance, mais je n\'ai pas soumis la demande de visa car j\'ai réalisé que je ne pouvais pas le faire à temps. Je vous demande de repousser l\'alumniation jusqu\'à l\'été 2025.',
            request: 'Prévoyez du temps pour arriver sur le campus jusqu\'au 01.06.2025 suryashev@bk.ru'
        }
    },



    {
        ru: {
            nickname: 'cjettie',
            date: '10.01.2025',
            title: 'Алюмнизация',
            briefProblem: 'Трудности с удалённой стажировкой и получением визы в связи с отъездом из России',
            detailedProblem: 'Я не смог поехать во Францию до 10 января из-за финансовых трудностей, возникших в связи с вынужденным переездом из-за войны. Также война усложнила поиск стажировки, и я смог найти её только недавно. Оформление визы в неродном государстве оказалось сложным процессом, что дополнительно задержало мои планы. Мне необходимо как минимум полгода отсрочки, чтобы реализовать свои цели.',
            request: 'Отсрочка до 07.2025 для валидации стажировки и получения визы ferundal@gmail.com'
        },
        fr: {
            nickname: 'cjettie',
            date: '10.01.2025',
            title: 'Alumni',
            briefProblem: 'Difficultés liées à un stage à distance et à l\'obtention d\'un visa en raison du départ de Russie.',
            detailedProblem: 'Je n\'ai pas pu aller en France avant le 10 janvier en raison de difficultés financières liées à un déménagement forcé à cause de la guerre. De plus, la guerre a rendu la recherche d\'un stage très difficile, et je n\'ai pu en trouver un que récemment. La procédure de demande de visa dans un pays étranger s\'est également avérée complexe, ce qui a retardé davantage mes projets. J\'aurais besoin d\'un délai d\'au moins six mois pour réaliser mes objectifs.',
            request: 'Un report jusqu\'en 07/2025 pour valider le stage et obtenir le visa. ferundal@gmail.com'
        }
    },



    {
        ru: {
            nickname: 'mmyrtice',
            date: '10.01.2025',
            title: 'Алюмнизация',
            briefProblem: 'Не было возможности приехать в Париж, есть активная стажировка на стадии пир-проверки',
            detailedProblem: '"Прошу об отмене алюминизации. Выехать в Париж не получилось из-за проблем со здоровьем (документы есть). В феврале загрузила файл социального страхования, получила валидацию, но через какое-то время аккаунт был заблокирован, есть активная стажировка на стадии пир-проверки. Прошу дать отсрочку по алюминизации чтобы  закрыть стажировку и продолжить обучение в школе. Обращение о разблокировке было через внутреннюю сеть: https://meta.intra.42.fr/issues/19342/messages?page=1#161604 "',
            request: 'Отменить алюмнизацию lv5588855@gmail.com'
        },
        fr: {
            nickname: 'mmyrtice',
            date: '10.01.2025',
            title: 'Alumni',
            briefProblem: 'Il n\'a pas été possible de venir à Paris, il y a un stage actif dans la phase de vérification PIR',
            detailedProblem: 'Je demande l\'annulation de l\'aluminisation. Aller à Paris n\'a pas réussi à cause de problèmes de santé (les documents sont). En février, j\'ai Téléchargé le fichier de sécurité sociale, j\'ai reçu la validation, mais après un certain temps, le compte a été bloqué, il y a un stage actif au stade de la vérification PIR. Je vous demande un sursis pour fermer le stage et poursuivre vos études. L\'appel de déverrouillage était via le réseau interne: https://meta.intra.42.fr/issues/19342/messages?page=1#161604',
            request: 'Annuler l\'alumni lv5588855@gmail.com'
        }
    },

    {
        ru: {
            nickname: 'myuonne',
            date: '10.01.2025',
            title: 'Алюмнизация',
            briefProblem: 'Не продлили дедлайн по запросу направленному заранее.',
            detailedProblem: 'Очень много писем было направлено на адрес adm и pedago с конца ноября с просьбой продления срока дедлайна, которые были проигнорированы. Запрос о продлении срока дедлайна был направлен в связи с тем, что паспорт истек. И требуется время не только для получения визы но и для получения нового паспорта. Также по какой-то причине не был завершен мой трансфер в школу, из-за чего я не смогла загрузить договор о стажировке, хотя другие студенты дистанционно загрузить договор смогли.',
            request: 'Отменить алюмнизацию. Отсрочить дедлайн на 1,5 месяца. Завершить трансфер, принять договор о стажировке. 9689267359t@gmail.com\n- https://drive.google.com/file/d/1H5gi-ONgDX-Vj1xQ9zn1shy2T2doWGaP/view?usp=sharing \n- https://drive.google.com/file/d/1ookNo4ho4yPyjDGhLKLewpAF9tBosFjp/view?usp=sharing \n- https://drive.google.com/file/d/1QMYBUdOKudZ-drby2s1TMoWbY8mXwAdn/view?usp=sharing \n - https://drive.google.com/file/d/1_xyIIJO6dOph_kZuMYkaY0glVQPjr3nr/view?usp=sharing'
        },
        fr: {
            nickname: 'myuonne',
            date: '10.01.2025',
            title: 'Alumni',
            briefProblem: 'Ils n\'ont pas prolongé le délai, malgré le fait que la demande ait été envoyée plus d\'un mois à l\'avance.',
            detailedProblem: 'De nombreuses lettres ont été envoyées à l\'adm et au pedago depuis fin novembre pour demander une prolongation du délai, qui ont été ignorées. La demande de prolongation du délai a été envoyée en raison du fait que le passeport était expiré. Et il faut du temps non seulement pour obtenir un visa mais aussi pour obtenir un nouveau passeport. De plus, pour une raison quelconque, mon transfert à l\'école n\'a pas été effectué, c\'est pourquoi je n\'ai pas pu envoyer la convention de stage, alors que d\'autres étudiants ont pu l\'envoyer à distance.',
            request: 'Annuler l\'aluminisation. Reporter le délai d\'un mois et demi. Effectuer le transfert, accepter la convention de stage. 9689267359t@gmail.com\n- https://drive.google.com/file/d/1H5gi-ONgDX-Vj1xQ9zn1shy2T2doWGaP/view?usp=sharing \n- https://drive.google.com/file/d/1ookNo4ho4yPyjDGhLKLewpAF9tBosFjp/view?usp=sharing \n- https://drive.google.com/file/d/1QMYBUdOKudZ-drby2s1TMoWbY8mXwAdn/view?usp=sharing \n - https://drive.google.com/file/d/1_xyIIJO6dOph_kZuMYkaY0glVQPjr3nr/view?usp=sharing'
        }
    },

    {
        ru: {
            nickname: 'mturquin',
            date: '10.01.2025',
            title: 'Алюмнизация',
            briefProblem: 'Не было возможности переехать в связи проблемами со здоровьем.',
            detailedProblem: 'Мадам, сэр, я обращаюсь к вам по поводу моего зачисления в аспирантуру с 10 января 2025 года. После того, как 1 октября 2023 года меня перевели из школы 21 в школу 42, я не смог поехать в Париж, так как с 1 февраля по 31 июля 2024 года мне пришлось пройти очень важные медицинские осмотры., и мне также придется проходить курс лечения с 1 февраля по 31 июля 2025 года. Кроме того, учитывая крайние сроки получения виз, я смогу находиться в Париже только с 1 сентября 2025 года. В настоящее время я работаю над ft_linear_regression, dslr и собираюсь пройти шестимесячную стажировку. Учитывая эти обстоятельства, я прошу вашей доброты перенести дату зачисления в колледж на 31 декабря 2025 года. Благодарим Вас за внимание, которое вы уделите моей просьбе, я остаюсь в вашем распоряжении для получения любой дополнительной информации и прошу вас, мадам и месье, принять выражение моего глубочайшего уважения. \nДаниил Горячев.',
            request: 'Отменить алюмнизацию и продлить дедлайн на 1 год. goryachevdo@mail.ru'
        },
        fr: {
            nickname: 'mturquin',
            date: '10.01.2025',
            title: 'Alumini',
            briefProblem: 'Je n\'ai pas eu la possibilité de déménager en raison de problèmes de santé.',
            detailedProblem: 'Madame, Monsieur, Je vous contacte au sujet de mon alumnisation en date du 10 janvier 2025. Ayant été transféré de l’École 21 à l’École 42 le 1ᵉʳ octobre 2023, je n’ai pas pu me rendre à Paris, car j’ai dû subir des examens médicaux très importants du 1ᵉʳ février au 31 juillet 2024, et je devrai également suivre un traitement du 1ᵉʳ février au 31 juillet 2025. Par ailleurs, compte tenu des délais pour l’obtention de visas, je ne pourrai être à Paris qu’à partir du 1ᵉʳ septembre 2025. Je travaille actuellement sur ft_linear_regression, dslr et je commencerai un stage de six mois. Compte tenu de ces circonstances, je sollicite votre bienveillance afin de reporter ma date d’alumnisation au 31 décembre 2025. En vous remerciant pour l’attention que vous porterez à ma demande, je reste à votre disposition pour tout renseignement complémentaire et vous prie d’agréer, Madame, Monsieur, l’expression de ma respectueuse considération. \nDaniil Goryachev."',
            request: 'Annuler l\'alumination et prolonger le délai de 1 an. goryachevdo@mail.ru'
        }
    },


    {
        ru: {
            nickname: 'sgertrud',
            date: '30.11.2024',
            title: 'Алюмнизация',
            briefProblem: 'Заблокированная интра + невозможность получить визу',
            detailedProblem: '30.11.12 я прочел письмо о предстоящей аллюминизации. Я направил письмо на почту 42paris с разьяснениями о том, что моя интра заблокирована, соответственно я не могу завалидировать стажировку, доехать до парижа я также не успеваю. Однако, никакого ответа я не получил.',
            request: 'Отменить аллюминизацию, разблокировать интру, дать возможность загрузить стажировку, необходимость прибыть в Париж отсрочить на 6 месяцев\nmsnazarow@gmail.com'
        },
        fr: {
            nickname: 'sgertrud',
            date: '30.11.2024',
            title: 'Alumini',
            briefProblem: 'Bloqué en intra + impossible d\'obtenir un visa',
            detailedProblem: '30/11/12 J\'ai lu une lettre concernant l\'illumination à venir. J\'ai envoyé un courrier à 42paris en expliquant que mon intra est bloqué, donc je ne peux pas valider le stage, et je n\'ai pas non plus le temps de me rendre à Paris. Cependant, je n\'ai reçu aucune réponse.',
            request: 'Annuler l\'allumination, débloquer l\'intra, permettre le chargement du stage, besoin d\'arriver à Paris reporté de 6 mois\nmsnazarow@gmail.com'
        }
    },


    {
        ru: {
            nickname: 'bpoetess',
            date: '22.10.2024',
            title: 'Алюмнизация',
            briefProblem: 'Невозможность получить визу',
            detailedProblem: '22.10.2024 я писал письмо, что у меня нет возможности прибыть в Париж, так как нет средств для получения визы (650 евро/месяц) \n\nТема: Запрос отчета об окончании учебы.\nУважаемая администрация школы 42!\n Беру на себя смелость написать Вам с просьбой предоставить отчет об окончании моей учебы. Меня зовут Гришин Михаил (прозвище поэтесса), ученик 42 школы, и в настоящее время я испытываю значительные финансовые трудности.\nК сожалению, я не могу поехать в Париж из-за отсутствия средств на проживание там. Я полностью осознаю важность завершения обучения и полон решимости возобновить его, как только мое финансовое положение позволит мне это сделать.\nЯ был бы очень признателен, если бы вы рассмотрели мою просьбу об отчете и дали мне возможность завершить свое путешествие в лучших условиях. Я остаюсь в вашем распоряжении для предоставления любых необходимых документов или дополнительной информации.\nЗаранее благодарю вас за понимание и поддержку.\n\nИскренне, \nГришин Михаил, bpoetess.',
            request: 'Отменить алюмнизацию и продлить дедлайн на 1 год. mikhailgrishind@yandex.ru'
        },
        fr: {
            nickname: 'bpoetess',
            date: '22.10.2024',
            title: 'Alumini',
            briefProblem: 'Impossibilité d\'obtenir un visa',
            detailedProblem: 'Le 22/10/2024 j\'ai écrit une lettre disant que je n\'ai pas la possibilité de venir à Paris, car je n\'ai pas les moyens d\'obtenir un visa (650 euros/mois)\n\nObjet : Demande de report de la fin de mes études\nCher administration de l’École 42,\nJe me permets de vous écrire afin de solliciter un report de la fin de mes études (alumnization). Je m’appelle Grishin Mikhail (surnom bpoetess), étudiant à l’École 42, et je fais face actuellement à des difficultés financières importantes.\nMalheureusement, je ne suis pas en mesure de me rendre à Paris en raison de l’insuffisance de moyens pour couvrir les frais de vie sur place. Je suis pleinement conscient de l’importance d’achever ma formation et déterminé à la reprendre dès que ma situation financière me le permettra.\nJe vous serais très reconnaissant de bien vouloir examiner ma demande de report et de m’accorder l’opportunité de finaliser mon parcours dans de meilleures conditions. Je reste à votre disposition pour fournir tout document ou complément d’information nécessaire.\nJe vous remercie par avance pour votre compréhension et votre soutien.\n\nCordialement,\nGrishin Mikhail, bpoetess',
            request: 'Annuler l\'alumination et prolonger le délai de 1 an. mikhailgrishind@yandex.ru'
        }
    }

];
