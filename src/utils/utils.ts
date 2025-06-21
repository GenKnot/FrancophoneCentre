export const animationCreate = () => {
  if (typeof window !== "undefined") {
    import("wowjs").then((module) => {
      const WOW = module.default;
      new WOW.WOW({live: false}).init()
    });
  }
};

// utils/utils.ts

export const getTranslatedText = (zhText: string, enText: string, frText: string = enText, zhHantText: string = zhText, currentLanguage: string = 'zh-hans') => {
    switch (currentLanguage) {
        case 'zh-hans':
            return zhText;
        case 'zh-hant':
            return zhHantText;
        case 'fr':
            return frText;
        case 'en':
        default:
            return enText;
    }
};

export const getPageMetadata = (pageName: string, currentLanguage: string = 'zh-hans') => {
    const pageMetadata = {
        home: {
            title: getTranslatedText(
                '加拿大魁北克法语教育中心 QFEC | TEF考试专家 | 法语移民快速通道',
                'Quebec French Education Center Canada QFEC | TEF Test Expert | French Immigration Fast Track',
                'Centre d\'Éducation Française du Québec QFEC | Expert TEF | Voie Rapide Immigration Française',
                '加拿大魁北克法語教育中心 QFEC | TEF考試專家 | 法語移民快速通道',
                currentLanguage
            ),
            description: getTranslatedText(
                '加拿大魁北克法语教育中心（QFEC）- 现任TEF考官直授，98%通过率，6个月达CLB7。专业法语培训、TEF/TCF考试、法语移民咨询。Montreal法语学校，魁北克法语课程，快速移民加拿大。',
                'Quebec French Education Center Canada (QFEC) - Taught by current TEF examiners, 98% pass rate, achieve CLB7 in 6 months. Professional French training, TEF/TCF exams, French immigration consulting. Montreal French school, Quebec French courses, fast immigration to Canada.',
                'Centre d\'Éducation Française du Québec (QFEC) - Enseigné par les examinateurs TEF actuels, taux de réussite de 98%, atteindre CLB7 en 6 mois. Formation française professionnelle, examens TEF/TCF, consultation d\'immigration française. École française de Montréal, cours de français du Québec, immigration rapide au Canada.',
                '加拿大魁北克法語教育中心（QFEC）- 現任TEF考官直授，98%通過率，6個月達CLB7。專業法語培訓、TEF/TCF考試、法語移民咨詢。Montreal法語學校，魁北克法語課程，快速移民加拿大。',
                currentLanguage
            )
        },
        about: {
            title: getTranslatedText(
                '关于我们 | QFEC加拿大魁北克法语教育中心 | 34年专业法语教育经验',
                'About Us | QFEC Quebec French Education Center Canada | 34 Years Professional French Education',
                'À Propos | QFEC Centre d\'Éducation Française du Québec | 34 Ans d\'Éducation Française Professionnelle',
                '關於我們 | QFEC加拿大魁北克法語教育中心 | 34年專業法語教育經驗',
                currentLanguage
            ),
            description: getTranslatedText(
                '了解加拿大魁北克法语教育中心(QFEC)的历史、使命和核心优势。自1991年成立以来，34年专业法语教育经验，现任TEF考官直授，98%超高通过率。',
                'Learn about Quebec French Education Center Canada (QFEC) history, mission and core advantages. Since 1991, 34 years of professional French education experience, taught by current TEF examiners, 98% pass rate.',
                'Découvrez l\'histoire, la mission et les avantages du Centre d\'Éducation Française du Québec (QFEC). Depuis 1991, 34 ans d\'expérience en éducation française professionnelle, enseigné par les examinateurs TEF actuels, taux de réussite de 98%.',
                '了解加拿大魁北克法語教育中心(QFEC)的歷史、使命和核心優勢。自1991年成立以來，34年專業法語教育經驗，現任TEF考官直授，98%超高通過率。',
                currentLanguage
            )
        },
        courses: {
            title: getTranslatedText(
                '法语课程 TEF/TCF考试培训 | QFEC魁北克法语教育中心 | French Courses Montreal',
                'French Courses TEF/TCF Exam Training | QFEC Quebec French Education Center | Montreal French School',
                'Cours de Français Formation TEF/TCF | QFEC Centre d\'Éducation Française du Québec | École Française Montréal',
                '法語課程 TEF/TCF考試培訓 | QFEC魁北克法語教育中心 | French Courses Montreal',
                currentLanguage
            ),
            description: getTranslatedText(
                'QFEC专业法语课程：TEF/TCF考试培训、法语移民课程、CLB7强化班、法语零基础班。现任TEF考官直授，98%通过率，助您快速通过法语考试，实现加拿大移民梦想。',
                'QFEC professional French courses: TEF/TCF exam preparation, French immigration courses, CLB7 intensive classes, French beginner classes. Taught by current TEF examiners, 98% pass rate, helping you quickly pass French exams and achieve your Canadian immigration dream.',
                'Cours de français professionnels QFEC : préparation aux examens TEF/TCF, cours de français pour l\'immigration, classes intensives CLB7, classes de français pour débutants. Enseigné par les examinateurs TEF actuels, taux de réussite de 98%, vous aidant à réussir rapidement les examens de français et à réaliser votre rêve d\'immigration canadienne.',
                'QFEC專業法語課程：TEF/TCF考試培訓、法語移民課程、CLB7強化班、法語零基礎班。現任TEF考官直授，98%通過率，助您快速通過法語考試，實現加拿大移民夢想。',
                currentLanguage
            )
        },
        contact: {
            title: getTranslatedText(
                '联系我们 | QFEC加拿大魁北克法语教育中心 | 法语培训咨询',
                'Contact Us | QFEC Quebec French Education Center Canada | French Training Consultation',
                'Contactez-Nous | QFEC Centre d\'Éducation Française du Québec | Consultation Formation Française',
                '聯繫我們 | QFEC加拿大魁北克法語教育中心 | 法語培訓咨詢',
                currentLanguage
            ),
            description: getTranslatedText(
                '联系QFEC加拿大魁北克法语教育中心，获取专业法语培训咨询。三个校区为您服务：蒙特利尔市中心、圣让、老港区。免费咨询TEF/TCF考试、法语移民课程。',
                'Contact QFEC Quebec French Education Center Canada for professional French training consultation. Three campuses serving you: Montreal Downtown, Saint-Jean, Old Port. Free consultation for TEF/TCF exams and French immigration courses.',
                'Contactez le Centre d\'Éducation Française du Québec QFEC pour une consultation professionnelle en formation française. Trois campus à votre service : Centre-ville de Montréal, Saint-Jean, Vieux-Port. Consultation gratuite pour les examens TEF/TCF et les cours de français pour l\'immigration.',
                '聯繫QFEC加拿大魁北克法語教育中心，獲取專業法語培訓咨詢。三個校區為您服務：蒙特利爾市中心、聖讓、老港區。免費咨詢TEF/TCF考試、法語移民課程。',
                currentLanguage
            )
        },
        event: {
            title: getTranslatedText(
                '活动资讯 | QFEC法语教育活动 | 法语文化交流活动',
                'Events | QFEC French Education Events | French Cultural Exchange Activities',
                'Événements | Événements d\'Éducation Française QFEC | Activités d\'Échange Culturel Français',
                '活動資訊 | QFEC法語教育活動 | 法語文化交流活動',
                currentLanguage
            ),
            description: getTranslatedText(
                '参加QFEC法语教育活动，体验丰富的法语文化交流。包括法语角、文化讲座、TEF考试说明会、移民政策解读等精彩活动。',
                'Join QFEC French education events and experience rich French cultural exchanges. Including French corners, cultural lectures, TEF exam seminars, immigration policy briefings and more exciting activities.',
                'Participez aux événements d\'éducation française QFEC et découvrez de riches échanges culturels français. Y compris les coins français, les conférences culturelles, les séminaires d\'examen TEF, les briefings sur les politiques d\'immigration et plus d\'activités passionnantes.',
                '參加QFEC法語教育活動，體驗豐富的法語文化交流。包括法語角、文化講座、TEF考試說明會、移民政策解讀等精彩活動。',
                currentLanguage
            )
        },
        faq: {
            title: getTranslatedText(
                '常见问题 | QFEC法语学习FAQ | TEF考试常见问题',
                'FAQ | QFEC French Learning FAQ | TEF Exam Frequently Asked Questions',
                'FAQ | FAQ Apprentissage Français QFEC | Questions Fréquentes Examen TEF',
                '常見問題 | QFEC法語學習FAQ | TEF考試常見問題',
                currentLanguage
            ),
            description: getTranslatedText(
                '查看QFEC法语学习常见问题解答，包括TEF/TCF考试、法语移民、课程安排、学费政策等热门问题的详细解答。',
                'View QFEC French learning FAQ, including detailed answers to popular questions about TEF/TCF exams, French immigration, course arrangements, tuition policies and more.',
                'Consultez la FAQ d\'apprentissage du français QFEC, y compris des réponses détaillées aux questions populaires sur les examens TEF/TCF, l\'immigration française, les arrangements de cours, les politiques de frais de scolarité et plus encore.',
                '查看QFEC法語學習常見問題解答，包括TEF/TCF考試、法語移民、課程安排、學費政策等熱門問題的詳細解答。',
                currentLanguage
            )
        },
        gallery: {
            title: getTranslatedText(
                '校园风采 | QFEC法语教育中心图片展示 | 学习环境',
                'Campus Gallery | QFEC French Education Center Photo Gallery | Learning Environment',
                'Galerie du Campus | Galerie Photos Centre d\'Éducation Française QFEC | Environnement d\'Apprentissage',
                '校園風采 | QFEC法語教育中心圖片展示 | 學習環境',
                currentLanguage
            ),
            description: getTranslatedText(
                '浏览QFEC法语教育中心校园风采，了解我们的学习环境、教学设施、师生活动和校园文化。三个校区的精彩瞬间。',
                'Browse QFEC French Education Center campus gallery, learn about our learning environment, teaching facilities, student activities and campus culture. Wonderful moments from three campuses.',
                'Parcourez la galerie du campus du Centre d\'Éducation Française QFEC, découvrez notre environnement d\'apprentissage, nos installations pédagogiques, nos activités étudiantes et notre culture de campus. Moments merveilleux de trois campus.',
                '瀏覽QFEC法語教育中心校園風采，了解我們的學習環境、教學設施、師生活動和校園文化。三個校區的精彩瞬間。',
                currentLanguage
            )
        },
        news: {
            title: getTranslatedText(
                '新闻动态 | QFEC法语教育资讯 | 法语移民政策更新',
                'News | QFEC French Education News | French Immigration Policy Updates',
                'Actualités | Actualités Éducation Française QFEC | Mises à Jour Politique Immigration Française',
                '新聞動態 | QFEC法語教育資訊 | 法語移民政策更新',
                currentLanguage
            ),
            description: getTranslatedText(
                '获取最新的QFEC法语教育资讯，包括法语移民政策更新、TEF考试变化、课程优惠信息和教育行业动态。',
                'Get the latest QFEC French education news, including French immigration policy updates, TEF exam changes, course promotion information and education industry dynamics.',
                'Obtenez les dernières actualités de l\'éducation française QFEC, y compris les mises à jour des politiques d\'immigration française, les changements d\'examen TEF, les informations de promotion de cours et la dynamique de l\'industrie de l\'éducation.',
                '獲取最新的QFEC法語教育資訊，包括法語移民政策更新、TEF考試變化、課程優惠信息和教育行業動態。',
                currentLanguage
            )
        },
        register: {
            title: getTranslatedText(
                '课程报名 | QFEC法语课程注册 | TEF考试培训报名',
                'Course Registration | QFEC French Course Enrollment | TEF Exam Training Registration',
                'Inscription aux Cours | Inscription Cours Français QFEC | Inscription Formation Examen TEF',
                '課程報名 | QFEC法語課程註冊 | TEF考試培訓報名',
                currentLanguage
            ),
            description: getTranslatedText(
                '在线报名QFEC法语课程，选择适合您的TEF/TCF考试培训、法语移民课程或零基础法语班。简单快捷的报名流程。',
                'Register online for QFEC French courses, choose TEF/TCF exam training, French immigration courses or beginner French classes that suit you. Simple and fast registration process.',
                'Inscrivez-vous en ligne aux cours de français QFEC, choisissez la formation aux examens TEF/TCF, les cours de français pour l\'immigration ou les classes de français pour débutants qui vous conviennent. Processus d\'inscription simple et rapide.',
                '在線報名QFEC法語課程，選擇適合您的TEF/TCF考試培訓、法語移民課程或零基礎法語班。簡單快捷的報名流程。',
                currentLanguage
            )
        },
        'sign-in': {
            title: getTranslatedText(
                '登录 | QFEC法语学习平台 | 法语课程登录',
                'Sign In | QFEC French Learning Platform | French Course Login',
                'Connexion | Plateforme d\'Apprentissage Français QFEC | Connexion Cours Français',
                '登錄 | QFEC法語學習平台 | 法語課程登錄',
                currentLanguage
            ),
            description: getTranslatedText(
                '登录QFEC法语学习平台，继续您的法语学习之旅。访问您的课程内容、学习进度和个人资料。',
                'Sign in to QFEC French learning platform and continue your French learning journey. Access your course content, learning progress and personal profile.',
                'Connectez-vous à la plateforme d\'apprentissage du français QFEC et continuez votre parcours d\'apprentissage du français. Accédez à votre contenu de cours, à vos progrès d\'apprentissage et à votre profil personnel.',
                '登錄QFEC法語學習平台，繼續您的法語學習之旅。訪問您的課程內容、學習進度和個人資料。',
                currentLanguage
            )
        }
    };

    return pageMetadata[pageName as keyof typeof pageMetadata] || pageMetadata.home;
};
