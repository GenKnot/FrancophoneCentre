import "../styles/index.scss";
import {LanguageProvider} from "@/contexts/LanguageContext";
import DynamicLanguageHead from "@/components/common/DynamicLanguageHead";
import SEOStructuredData from "@/components/common/SEOStructuredData";
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.qfec.ca'),
    title: "加拿大魁北克法语教育中心 QFEC | TEF考试专家 | 法语移民快速通道 | Quebec French Education Centre",
    description: "加拿大魁北克法语教育中心（QFEC）- 现任TEF考官直授，98%通过率，6个月达CLB7。专业法语培训、TEF/TCF考试、法语移民咨询。Montreal法语学校，魁北克法语课程，快速移民加拿大。Quebec Francophone Education Centre - Professional French training with current TEF examiners, 98% pass rate, achieve CLB7 in 6 months.",
    keywords: "加拿大魁北克法语教育中心,QFEC,Quebec Francophone Education Centre,TEF考试,TEF test,TCF考试,TCF test,法语考试,French test,法语培训,French training,法语移民,French immigration,魁北克法语,Quebec French,Montreal法语学校,French school Montreal,法语课程,French courses,CLB7,CLB5,现任TEF考官,current TEF examiner,法语EE,French Express Entry,魁省PEQ,Quebec PEQ,法语学习,French learning,法语教育,French education,加拿大移民,Canada immigration,快速移民,fast immigration,法语中心,French centre,蒙特利尔法语,Montreal French,法语培训机构,French training institution,法语教学,French teaching,法语辅导,French tutoring,法语补习,French supplementary classes,法语强化班,French intensive course,法语零基础,French beginner,法语入门,French introduction,法语口语,French speaking,法语听力,French listening,法语阅读,French reading,法语写作,French writing,TEF Canada,TCF Canada,DELF,DALF,法语证书,French certificate,法语水平测试,French proficiency test,法语等级考试,French level exam,法语标准化考试,French standardized test,加拿大法语,Canadian French,魁北克移民,Quebec immigration,联邦移民,Federal immigration,技术移民,Skilled immigration,经验类移民,Canadian Experience Class,省提名,Provincial Nominee Program,法语加分,French bonus points,双语优势,bilingual advantage,法语就业,French employment,法语工作,French job,法语职业,French career,法语专业,French major,法语翻译,French translation,法语口译,French interpretation,法语商务,French business,法语旅游,French tourism,法语文化,French culture,法语文学,French literature,法语历史,French history,法语艺术,French art,法语音乐,French music,法语电影,French cinema,法语媒体,French media,法语新闻,French news,法语广播,French radio,法语电视,French television,法语网站,French website,法语应用,French application,法语软件,French software,法语游戏,French games,法语娱乐,French entertainment,法语社交,French social,法语交流,French communication,法语对话,French conversation,法语练习,French practice,法语复习,French review,法语备考,French exam preparation,法语真题,French past papers,法语模拟,French simulation,法语预测,French prediction,法语技巧,French techniques,法语方法,French methods,法语策略,French strategies,法语秘籍,French secrets,法语攻略,French guide,法语经验,French experience,法语心得,French insights,法语分享,French sharing,法语讨论,French discussion,法语问答,French Q&A,法语咨询,French consultation,法语建议,French advice,法语推荐,French recommendation,法语评价,French evaluation,法语评论,French review,法语反馈,French feedback,法语服务,French service,法语支持,French support,法语帮助,French help,法语指导,French guidance,法语辅助,French assistance,法语资源,French resources,法语材料,French materials,法语教材,French textbooks,法语词汇,French vocabulary,法语语法,French grammar,法语句型,French sentence patterns,法语表达,French expressions,法语短语,French phrases,法语俚语,French slang,法语习语,French idioms,法语谚语,French proverbs,法语格言,French maxims,法语名言,French quotes,法语诗歌,French poetry,法语散文,French prose,法语小说,French novel,法语故事,French story,法语童话,French fairy tale,法语传说,French legend,法语神话,French mythology,法语寓言,French fable,法语戏剧,French drama,法语喜剧,French comedy,法语悲剧,French tragedy,法语音乐剧,French musical,法语歌剧,French opera,法语芭蕾,French ballet,法语舞蹈,French dance,法语绘画,French painting,法语雕塑,French sculpture,法语建筑,French architecture,法语设计,French design,法语时尚,French fashion,法语美食,French cuisine,法语葡萄酒,French wine,法语奶酪,French cheese,法语面包,French bread,法语糕点,French pastry,法语香水,French perfume,法语化妆品,French cosmetics,法语奢侈品,French luxury goods,法语品牌,French brands,法语购物,French shopping,法语旅行,French travel,法语度假,French vacation,法语观光,French sightseeing,法语酒店,French hotel,法语餐厅,French restaurant,法语咖啡厅,French café,法语酒吧,French bar,法语夜生活,French nightlife,法语节日,French festivals,法语庆典,French celebrations,法语传统,French traditions,法语习俗,French customs,法语礼仪,French etiquette,法语社会,French society,法语政治,French politics,法语经济,French economy,法语地理,French geography,法语气候,French climate,法语环境,French environment,法语生态,French ecology,法语科学,French science,法语技术,French technology,法语创新,French innovation,法语发明,French invention,法语发现,French discovery,法语研究,French research,法语学术,French academic,法语论文,French thesis,法语期刊,French journal,法语杂志,French magazine,法语报纸,French newspaper,法语出版,French publishing,法语图书,French books,法语图书馆,French library,法语博物馆,French museum,法语画廊,French gallery,法语剧院,French theater,法语音乐厅,French concert hall,法语体育,French sports,法语足球,French football,法语篮球,French basketball,法语网球,French tennis,法语游泳,French swimming,法语滑雪,French skiing,法语自行车,French cycling,法语马拉松,French marathon,法语奥运会,French Olympics,法语世界杯,French World Cup,法语欧洲杯,French European Championship,法语联赛,French league,法语俱乐部,French club,法语球队,French team,法语球员,French player,法语教练,French coach,法语裁判,French referee,法语观众,French audience,法语粉丝,French fans,法语支持者,French supporters,法语竞技,French competition,法语比赛,French match,法语锦标赛,French championship,法语杯赛,French cup,法语排名,French ranking,法语得分,French score,法语胜利,French victory,法语失败,French defeat,法语平局,French draw,法语记录,French record,法语纪录,French achievement,法语荣誉,French honor,法语奖项,French awards,法语奖杯,French trophy,法语奖牌,French medal,法语冠军,French champion,法语亚军,French runner-up,法语季军,French third place,法语优胜者,French winner,法语获胜者,French victor,法语失败者,French loser,法语参赛者,French participant,法语选手,French contestant,法语竞争者,French competitor,法语对手,French opponent,法语敌人,French enemy,法语朋友,French friend,法语伙伴,French partner,法语同事,French colleague,法语同学,French classmate,法语老师,French teacher,法语学生,French student,法语校长,French principal,法语教授,French professor,法语博士,French doctor,法语硕士,French master,法语学士,French bachelor,法语文凭,French diploma,法语学位,French degree,法语毕业,French graduation,法语入学,French admission,法语申请,French application,法语录取,French acceptance,法语拒绝,French rejection,法语奖学金,French scholarship,法语助学金,French financial aid,法语学费,French tuition,法语费用,French fees,法语成本,French cost,法语价格,French price,法语收费,French charges,法语付款,French payment,法语折扣,French discount,法语优惠,French offer,法语促销,French promotion,法语特价,French special price,法语免费,French free,法语试用,French trial,法语体验,French experience,法语测试,French test,法语评估,French assessment,法语检查,French check,法语验证,French verification,法语确认,French confirmation,法语批准,French approval,法语许可,French permission,法语授权,French authorization,法语认证,French certification,法语资格,French qualification,法语执照,French license,法语证明,French proof,法语文件,French documents,法语材料,French materials,法语信息,French information,法语数据,French data,法语统计,French statistics,法语报告,French report,法语分析,French analysis,法语研究,French study,法语调查,French survey,法语问卷,French questionnaire,法语投票,French vote,法语选举,French election,法语民主,French democracy,法语自由,French freedom,法语权利,French rights,法语义务,French obligations,法语责任,French responsibility,法语法律,French law,法语规定,French regulations,法语规则,French rules,法语标准,French standards,法语要求,French requirements,法语条件,French conditions,法语限制,French restrictions,法语禁止,French prohibition,法语允许,French permission,法语鼓励,French encouragement,法语支持,French support,法语反对,French opposition,法语批评,French criticism,法语赞扬,French praise,法语表扬,French commendation,法语奖励,French reward,法语惩罚,French punishment,法语制裁,French sanctions,法语警告,French warning,法语通知,French notice,法语公告,French announcement,法语声明,French statement,法语宣布,French declaration,法语发布,French release,法语出版,French publication,法语印刷,French printing,法语广告,French advertisement,法语宣传,French publicity,法语推广,French promotion,法语营销,French marketing,法语销售,French sales,法语购买,French purchase,法语订购,French order,法语预订,French reservation,法语取消,French cancellation,法语退款,French refund,法语交换,French exchange,法语退货,French return,法语保修,French warranty,法语保证,French guarantee,法语承诺,French promise,法语协议,French agreement,法语合同,French contract,法语交易,French deal,法语生意,French business,法语贸易,French trade,法语商业,French commerce,法语企业,French enterprise,法语公司,French company,法语组织,French organization,法语机构,French institution,法语团体,French group,法语协会,French association,法语俱乐部,French club,法语社团,French society,法语联盟,French alliance,法语联合,French union,法语合作,French cooperation,法语partnership,法语伙伴关系,法语友谊,French friendship,法语关系,French relationship,法语联系,French connection,法语网络,French network,法语社区,French community,法语论坛,French forum,法语博客,French blog,法语微博,French microblog,法语社交媒体,French social media,法语在线,French online,法语互联网,French internet,法语网站,French website,法语网页,French webpage,法语链接,French link,法语搜索,French search,法语引擎,French engine,法语浏览器,French browser,法语应用程序,French app,法语软件,French software,法语程序,French program,法语系统,French system,法语平台,French platform,法语工具,French tool,法语设备,French device,法语机器,French machine,法语技术,French technology,法语创新,French innovation,法语发展,French development,法语进步,French progress,法语改进,French improvement,法语升级,French upgrade,法语更新,French update,法语维护,French maintenance,法语修理,French repair,法语安装,French installation,法语配置,French configuration,法语设置,French settings,法语选项,French options,法语功能,French features,法语特性,French characteristics,法语优点,French advantages,法语缺点,French disadvantages,法语好处,French benefits,法语坏处,French drawbacks,法语风险,French risks,法语机会,French opportunities,法语挑战,French challenges,法语困难,French difficulties,法语问题,French problems,法语解决方案,French solutions,法语答案,French answers,法语结果,French results,法语成果,French achievements,法语成功,French success,法语失败,French failure,法语胜利,French victory,法语败北,French defeat,法语赢得,French win,法语失去,French lose,法语获得,French gain,法语失去,French loss,法语收益,French profit,法语损失,French damage,法语收入,French income,法语支出,French expense,法语预算,French budget,法语投资,French investment,法语回报,French return,法语利润,French profit,法语亏损,French loss,法语债务,French debt,法语贷款,French loan,法语信用,French credit,法语银行,French bank,法语金融,French finance,法语经济,French economy,法语市场,French market,法语股票,French stock,法语债券,French bond,法语基金,French fund,法语保险,French insurance,法语税收,French tax,法语政府,French government,法语政策,French policy,法语法规,French regulation,法语法律,French law,法语制度,French system,法语改革,French reform,法语变化,French change,法语发展,French development,法语趋势,French trend,法语未来,French future,法语过去,French past,法语现在,French present,法语历史,French history,法语传统,French tradition,法语文化,French culture,法语遗产,French heritage,法语价值,French values,法语信念,French beliefs,法语哲学,French philosophy,法语宗教,French religion,法语精神,French spirit,法语灵魂,French soul,法语心理,French psychology,法语思维,French thinking,法语意识,French consciousness,法语认知,French cognition,法语理解,French understanding,法语知识,French knowledge,法语智慧,French wisdom,法语经验,French experience,法语技能,French skills,法语能力,French ability,法语才能,French talent,法语天赋,French gift,法语潜力,French potential,法语机会,French opportunity,法语可能,French possibility,法语希望,French hope,法语梦想,French dream,法语目标,French goal,法语计划,French plan,法语策略,French strategy,法语方法,French method,法语技巧,French technique,法语秘诀,French secret,法语窍门,French trick,法语诀窍,French knack,法语本领,French skill,法语专长,French expertise,法语特长,French specialty,法语优势,French advantage,法语强项,French strength,法语弱点,French weakness,法语不足,French shortcoming,法语缺陷,French defect,法语错误,French mistake,法语失误,French error,法语问题,French problem,法语困难,French difficulty,法语障碍,French obstacle,法语挑战,French challenge,法语机遇,French chance,法语运气,French luck,法语命运,French fate,法语destiny,法语未来,French future",
    authors: [{ name: "QFEC Team" }],
    publisher: "Quebec Francophone Education Centre",
    robots: "index, follow",
    openGraph: {
        type: 'website',
        locale: 'zh_CN',
        alternateLocale: ['en_CA', 'fr_CA'],
        url: 'https://www.qfec.ca',
        siteName: '加拿大魁北克法语教育中心 QFEC | Quebec Francophone Education Centre',
        title: '加拿大魁北克法语教育中心 QFEC | TEF考试专家 | 法语移民快速通道',
        description: '现任TEF考官直授，98%通过率，6个月达CLB7。专业法语培训、TEF/TCF考试、法语移民咨询。Montreal法语学校，魁北克法语课程，快速移民加拿大。',
        images: [
            {
                url: '/Logo Black Long.png',
                width: 1200,
                height: 630,
                alt: 'QFEC - Quebec Francophone Education Centre',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '加拿大魁北克法语教育中心 QFEC | TEF考试专家',
        description: '现任TEF考官直授，98%通过率，6个月达CLB7。专业法语培训、法语移民咨询。',
        images: ['/Logo Black Long.png'],
    },
    alternates: {
        canonical: 'https://www.qfec.ca',
        languages: {
            'zh-CN': 'https://www.qfec.ca?lang=zh',
            'en-CA': 'https://www.qfec.ca?lang=en',
            'fr-CA': 'https://www.qfec.ca?lang=fr',
        },
    },
    other: {
        'google-site-verification': 'your-google-verification-code',
        'baidu-site-verification': 'your-baidu-verification-code',
        'sogou_site_verification': 'your-sogou-verification-code',
    }
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#AD0119',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN" suppressHydrationWarning>
        <head>
            <link rel="icon" href="/favicon.svg"/>
            <link rel="apple-touch-icon" href="/Logo Icon Black.png"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"/>
            <link rel="alternate" hrefLang="zh-CN" href="https://www.qfec.ca?lang=zh" />
            <link rel="alternate" hrefLang="en-CA" href="https://www.qfec.ca?lang=en" />
            <link rel="alternate" hrefLang="fr-CA" href="https://www.qfec.ca?lang=fr" />
            <link rel="alternate" hrefLang="x-default" href="https://www.qfec.ca" />
            <meta name="geo.region" content="CA-QC" />
            <meta name="geo.placename" content="Montreal, Quebec" />
            <meta name="geo.position" content="45.5017;-73.5673" />
            <meta name="ICBM" content="45.5017, -73.5673" />
            <meta name="format-detection" content="telephone=yes" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "EducationalOrganization",
                    "name": "Quebec Francophone Education Centre (QFEC)",
                    "alternateName": "加拿大魁北克法语教育中心",
                    "url": "https://www.qfec.ca",
                    "logo": "https://www.qfec.ca/Logo Black Long.png",
                    "image": "https://www.qfec.ca/Logo Black Long.png",
                    "description": "专业法语教育机构，现任TEF考官直授，98%通过率，助您快速移民加拿大",
                    "address": [
                        {
                            "@type": "PostalAddress",
                            "streetAddress": "1440 Saint-Catherine St W Unit 501",
                            "addressLocality": "Montreal",
                            "addressRegion": "QC",
                            "postalCode": "H3G 1R8",
                            "addressCountry": "CA"
                        },
                        {
                            "@type": "PostalAddress",
                            "streetAddress": "Room 201, 141 Bd Saint-Luc",
                            "addressLocality": "Saint-Jean-sur-Richelieu",
                            "addressRegion": "QC",
                            "postalCode": "J2W 2G7",
                            "addressCountry": "CA"
                        },
                        {
                            "@type": "PostalAddress",
                            "streetAddress": "266 Notre-Dame St W Level 5",
                            "addressLocality": "Montreal",
                            "addressRegion": "QC",
                            "postalCode": "H2Y 1T6",
                            "addressCountry": "CA"
                        }
                    ],
                    "contactPoint": [
                        {
                            "@type": "ContactPoint",
                            "contactType": "customer service",
                            "email": "info@qfec.ca",
                            "availableLanguage": ["zh", "en", "fr"]
                        },
                        {
                            "@type": "ContactPoint",
                            "email": "apply@qfec.ca",
                            "contactType": "admissions"
                        }
                    ],
                    "sameAs": [
                        "https://www.tef-test.ca"
                    ],
                    "offers": {
                        "@type": "Offer",
                        "description": "专业法语课程培训",
                        "category": "教育培训"
                    }
                })
            }} />
        </head>
        <body>
        <LanguageProvider>
            <DynamicLanguageHead />
            <SEOStructuredData />
            {children}
        </LanguageProvider>
        </body>
        </html>
    );
}
