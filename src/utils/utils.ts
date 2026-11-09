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
                '加拿大法语教育中心 CFEC | TEF/TCF考试专家 | 法语移民快速通道',
                'Canadian Francophone Education Centre CFEC | TEF/TCF Test Expert | French Immigration Fast Track',
                'Centre d\'éducation francophone du Canada CFEC | Expert TEF/TCF | Voie Rapide Immigration Française',
                '加拿大法語教育中心 CFEC | TEF/TCF考試專家 | 法語移民快速通道',
                currentLanguage
            ),
            description: getTranslatedText(
                '加拿大法语教育中心（CFEC）- 现任TEF/TCF考官直授，CLB7最快167天达标。专业法语培训、TEF/TCF考试、法语移民咨询。Montreal法语学校，魁北克法语课程，快速移民加拿大。',
                'Canadian Francophone Education Centre (CFEC) - Taught by current TEF/TCF examiners, fastest CLB 7 in 167 days. Professional French training, TEF/TCF exams, French immigration consulting. Montreal French school, Quebec French courses, fast immigration to Canada.',
                'Centre d\'éducation francophone du Canada (CFEC) - Enseigné par les examinateurs TEF/TCF actuels, NCLC 7 en 167 jours au plus vite. Formation française professionnelle, examens TEF/TCF, consultation d\'immigration française. École française de Montréal, cours de français du Québec, immigration rapide au Canada.',
                '加拿大法語教育中心（CFEC）- 現任TEF/TCF考官直授，CLB7最快167天達標。專業法語培訓、TEF/TCF考試、法語移民咨詢。Montreal法語學校，魁北克法語課程，快速移民加拿大。',
                currentLanguage
            )
        },
        about: {
            title: getTranslatedText(
                '关于我们 | CFEC加拿大法语教育中心 | 始于1991年',
                'About Us | CFEC Canadian Francophone Education Centre | 34 Years Professional French Education',
                'À Propos | CFEC Centre d\'éducation francophone du Canada | Depuis 1991',
                '關於我們 | CFEC加拿大法語教育中心 | 始於1991年',
                currentLanguage
            ),
            description: getTranslatedText(
                '了解加拿大法语教育中心(CFEC)的历史、使命和核心优势。始于1991年，专注法语教育与考试培训，现任TEF/TCF考官直授，530+学员达到CLB5。',
                'Learn about Canadian Francophone Education Centre (CFEC) history, mission and core advantages. Since 1991, focused on French education and exam training, taught by current TEF/TCF examiners, 530+ students reached CLB 5.',
                'Découvrez l\'histoire, la mission et les avantages du Centre d\'éducation francophone du Canada (CFEC). Depuis 1991, spécialisé dans l\'enseignement du français et la préparation aux examens, enseigné par les examinateurs TEF/TCF actuels, 530+ élèves au NCLC 5.',
                '了解加拿大法語教育中心(CFEC)的歷史、使命和核心優勢。始於1991年，專注法語教育與考試培訓，現任TEF/TCF考官直授，530+學員達到CLB5。',
                currentLanguage
            )
        },
        courses: {
            title: getTranslatedText(
                '法语课程 TEF/TCF考试培训 | CFEC加拿大法语教育中心 | French Courses Montreal',
                'French Courses TEF/TCF Exam Training | CFEC Canadian Francophone Education Centre | Montreal French School',
                'Cours de Français Formation TEF/TCF | CFEC Centre d\'éducation francophone du Canada | École Française Montréal',
                '法語課程 TEF/TCF考試培訓 | CFEC加拿大法語教育中心 | French Courses Montreal',
                currentLanguage
            ),
            description: getTranslatedText(
                'CFEC专业法语课程：TEF/TCF考试培训、法语移民课程、CLB7强化班、法语零基础班。现任TEF/TCF考官直授，530+学员达到CLB5，助您快速通过法语考试，实现加拿大移民梦想。',
                'CFEC professional French courses: TEF/TCF exam preparation, French immigration courses, CLB7 intensive classes, French beginner classes. Taught by current TEF/TCF examiners, 530+ students reached CLB 5, helping you quickly pass French exams and achieve your Canadian immigration dream.',
                'Cours de français professionnels CFEC : préparation aux examens TEF/TCF, cours de français pour l\'immigration, classes intensives CLB7, classes de français pour débutants. Enseigné par les examinateurs TEF/TCF actuels, 530+ élèves au NCLC 5, vous aidant à réussir rapidement les examens de français et à réaliser votre rêve d\'immigration canadienne.',
                'CFEC專業法語課程：TEF/TCF考試培訓、法語移民課程、CLB7強化班、法語零基礎班。現任TEF/TCF考官直授，530+學員達到CLB5，助您快速通過法語考試，實現加拿大移民夢想。',
                currentLanguage
            )
        },
        contact: {
            title: getTranslatedText(
                '联系我们 | CFEC加拿大法语教育中心 | 法语培训咨询',
                'Contact Us | CFEC Canadian Francophone Education Centre | French Training Consultation',
                'Contactez-Nous | CFEC Centre d\'éducation francophone du Canada | Consultation Formation Française',
                '聯繫我們 | CFEC加拿大法語教育中心 | 法語培訓咨詢',
                currentLanguage
            ),
            description: getTranslatedText(
                '联系CFEC加拿大法语教育中心，获取专业法语培训咨询。两个校区为您服务：圣让、老港区。免费咨询TEF/TCF考试、法语移民课程。',
                'Contact CFEC Canadian Francophone Education Centre for professional French training consultation. Two campuses serving you: Saint-Jean, Old Port. Free consultation for TEF/TCF exams and French immigration courses.',
                'Contactez le Centre d\'éducation francophone du Canada CFEC pour une consultation professionnelle en formation française. Deux campus à votre service : Saint-Jean, Vieux-Port. Consultation gratuite pour les examens TEF/TCF et les cours de français pour l\'immigration.',
                '聯繫CFEC加拿大法語教育中心，獲取專業法語培訓咨詢。兩個校區為您服務：聖讓、老港區。免費咨詢TEF/TCF考試、法語移民課程。',
                currentLanguage
            )
        },
        event: {
            title: getTranslatedText(
                '活动资讯 | CFEC法语教育活动 | 法语文化交流活动',
                'Events | CFEC French Education Events | French Cultural Exchange Activities',
                'Événements | Événements d\'Éducation Française CFEC | Activités d\'Échange Culturel Français',
                '活動資訊 | CFEC法語教育活動 | 法語文化交流活動',
                currentLanguage
            ),
            description: getTranslatedText(
                '参加CFEC法语教育活动，体验丰富的法语文化交流。包括法语角、文化讲座、TEF/TCF考试说明会、移民政策解读等精彩活动。',
                'Join CFEC French education events and experience rich French cultural exchanges. Including French corners, cultural lectures, TEF/TCF exam seminars, immigration policy briefings and more exciting activities.',
                'Participez aux événements d\'éducation française CFEC et découvrez de riches échanges culturels français. Y compris les coins français, les conférences culturelles, les séminaires d\'examen TEF/TCF, les briefings sur les politiques d\'immigration et plus d\'activités passionnantes.',
                '參加CFEC法語教育活動，體驗豐富的法語文化交流。包括法語角、文化講座、TEF/TCF考試說明會、移民政策解讀等精彩活動。',
                currentLanguage
            )
        },
        faq: {
            title: getTranslatedText(
                '常见问题 | CFEC法语学习FAQ | TEF/TCF考试常见问题',
                'FAQ | CFEC French Learning FAQ | TEF/TCF Exam Frequently Asked Questions',
                'FAQ | FAQ Apprentissage Français CFEC | Questions Fréquentes Examen TEF/TCF',
                '常見問題 | CFEC法語學習FAQ | TEF/TCF考試常見問題',
                currentLanguage
            ),
            description: getTranslatedText(
                '查看CFEC法语学习常见问题解答，包括TEF/TCF考试、法语移民、课程安排、学费政策等热门问题的详细解答。',
                'View CFEC French learning FAQ, including detailed answers to popular questions about TEF/TCF exams, French immigration, course arrangements, tuition policies and more.',
                'Consultez la FAQ d\'apprentissage du français CFEC, y compris des réponses détaillées aux questions populaires sur les examens TEF/TCF, l\'immigration française, les arrangements de cours, les politiques de frais de scolarité et plus encore.',
                '查看CFEC法語學習常見問題解答，包括TEF/TCF考試、法語移民、課程安排、學費政策等熱門問題的詳細解答。',
                currentLanguage
            )
        },
        gallery: {
            title: getTranslatedText(
                '校园风采 | CFEC法语教育中心图片展示 | 学习环境',
                'Campus Gallery | CFEC French Education Center Photo Gallery | Learning Environment',
                'Galerie du Campus | Galerie Photos Centre d\'Éducation Française CFEC | Environnement d\'Apprentissage',
                '校園風采 | CFEC法語教育中心圖片展示 | 學習環境',
                currentLanguage
            ),
            description: getTranslatedText(
                '浏览CFEC法语教育中心校园风采，了解我们的学习环境、教学设施、师生活动和校园文化。三个校区的精彩瞬间。',
                'Browse CFEC French Education Center campus gallery, learn about our learning environment, teaching facilities, student activities and campus culture. Wonderful moments from three campuses.',
                'Parcourez la galerie du campus du Centre d\'Éducation Française CFEC, découvrez notre environnement d\'apprentissage, nos installations pédagogiques, nos activités étudiantes et notre culture de campus. Moments merveilleux de trois campus.',
                '瀏覽CFEC法語教育中心校園風采，了解我們的學習環境、教學設施、師生活動和校園文化。三個校區的精彩瞬間。',
                currentLanguage
            )
        },
        news: {
            title: getTranslatedText(
                '新闻动态 | CFEC法语教育资讯 | 法语移民政策更新',
                'News | CFEC French Education News | French Immigration Policy Updates',
                'Actualités | Actualités Éducation Française CFEC | Mises à Jour Politique Immigration Française',
                '新聞動態 | CFEC法語教育資訊 | 法語移民政策更新',
                currentLanguage
            ),
            description: getTranslatedText(
                '获取最新的CFEC法语教育资讯，包括法语移民政策更新、TEF/TCF考试变化、课程优惠信息和教育行业动态。',
                'Get the latest CFEC French education news, including French immigration policy updates, TEF/TCF exam changes, course promotion information and education industry dynamics.',
                'Obtenez les dernières actualités de l\'éducation française CFEC, y compris les mises à jour des politiques d\'immigration française, les changements d\'examen TEF/TCF, les informations de promotion de cours et la dynamique de l\'industrie de l\'éducation.',
                '獲取最新的CFEC法語教育資訊，包括法語移民政策更新、TEF/TCF考試變化、課程優惠信息和教育行業動態。',
                currentLanguage
            )
        },
        register: {
            title: getTranslatedText(
                '课程报名 | CFEC法语课程注册 | TEF/TCF考试培训报名',
                'Course Registration | CFEC French Course Enrollment | TEF/TCF Exam Training Registration',
                'Inscription aux Cours | Inscription Cours Français CFEC | Inscription Formation Examen TEF/TCF',
                '課程報名 | CFEC法語課程註冊 | TEF/TCF考試培訓報名',
                currentLanguage
            ),
            description: getTranslatedText(
                '在线报名CFEC法语课程，选择适合您的TEF/TCF考试培训、法语移民课程或零基础法语班。简单快捷的报名流程。',
                'Register online for CFEC French courses, choose TEF/TCF exam training, French immigration courses or beginner French classes that suit you. Simple and fast registration process.',
                'Inscrivez-vous en ligne aux cours de français CFEC, choisissez la formation aux examens TEF/TCF, les cours de français pour l\'immigration ou les classes de français pour débutants qui vous conviennent. Processus d\'inscription simple et rapide.',
                '在線報名CFEC法語課程，選擇適合您的TEF/TCF考試培訓、法語移民課程或零基礎法語班。簡單快捷的報名流程。',
                currentLanguage
            )
        },
        'sign-in': {
            title: getTranslatedText(
                '登录 | CFEC法语学习平台 | 法语课程登录',
                'Sign In | CFEC French Learning Platform | French Course Login',
                'Connexion | Plateforme d\'Apprentissage Français CFEC | Connexion Cours Français',
                '登錄 | CFEC法語學習平台 | 法語課程登錄',
                currentLanguage
            ),
            description: getTranslatedText(
                '登录CFEC法语学习平台，继续您的法语学习之旅。访问您的课程内容、学习进度和个人资料。',
                'Sign in to CFEC French learning platform and continue your French learning journey. Access your course content, learning progress and personal profile.',
                'Connectez-vous à la plateforme d\'apprentissage du français CFEC et continuez votre parcours d\'apprentissage du français. Accédez à votre contenu de cours, à vos progrès d\'apprentissage et à votre profil personnel.',
                '登錄CFEC法語學習平台，繼續您的法語學習之旅。訪問您的課程內容、學習進度和個人資料。',
                currentLanguage
            )
        }
    };

    return pageMetadata[pageName as keyof typeof pageMetadata] || pageMetadata.home;
};
