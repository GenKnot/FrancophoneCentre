import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";
import FCHome from "@/components/FCHome";
// meta data

export const metadata: Metadata = {
	title: "加拿大魁北克法语教育中心 QFEC | TEF考试专家 | 法语移民快速通道 | Montreal French School",
	description: "加拿大魁北克法语教育中心（QFEC）现任TEF考官直授，98%通过率，6个月达CLB7，4个月达CLB5。专业TEF/TCF考试培训，法语移民EE项目，魁省PEQ快速移民。Montreal蒙特利尔法语学校，助您轻松移民加拿大。Quebec Francophone Education Centre - Professional French training with current TEF examiners.",
	keywords: "加拿大魁北克法语教育中心,QFEC,Quebec Francophone Education Centre,TEF考试,TEF Canada,TEF test,TCF考试,TCF Canada,法语考试,French test,现任TEF考官,current TEF examiner,法语培训,French training,法语移民,French immigration,CLB7,CLB5,法语EE,French Express Entry,魁省PEQ,Quebec PEQ,蒙特利尔法语学校,Montreal French school,法语课程,French courses,法语学习,French learning,加拿大移民,Canada immigration,快速移民,fast immigration,法语教育,French education,98%通过率,98% pass rate,6个月CLB7,Montreal法语中心,Quebec French centre,法语培训机构,French training institution,法语补习,French tutoring,法语辅导,French coaching,法语强化班,French intensive course,法语零基础,French beginner,TEF备考,TEF preparation,TCF备考,TCF preparation,法语口语,French speaking,法语听力,French listening,法语阅读,French reading,法语写作,French writing,法语语法,French grammar,法语词汇,French vocabulary,法语发音,French pronunciation,法语对话,French conversation,法语实用,practical French,法语商务,business French,法语旅游,travel French,法语文化,French culture,加拿大法语,Canadian French,魁北克法语,Quebec French,法语证书,French certificate,法语文凭,French diploma,法语等级,French level,法语水平,French proficiency,DELF,DALF,法语标准化考试,French standardized test,移民法语,immigration French,职业法语,professional French,学术法语,academic French,日常法语,everyday French,法语交流,French communication,法语表达,French expression,法语理解,French comprehension,法语技能,French skills,法语能力,French ability,双语教育,bilingual education,多语言,multilingual,语言学习,language learning,第二语言,second language,外语教学,foreign language teaching,语言培训,language training,国际教育,international education,海外教育,overseas education,留学服务,study abroad services,移民服务,immigration services,教育咨询,education consulting,学习规划,study planning,职业规划,career planning,人生规划,life planning,成功案例,success stories,学员见证,student testimonials,教学质量,teaching quality,师资力量,faculty strength,教学方法,teaching methods,学习方法,learning methods,高效学习,efficient learning,快速提升,rapid improvement,短期突破,short-term breakthrough,长期进步,long-term progress,个性化教学,personalized teaching,小班教学,small class teaching,一对一辅导,one-on-one tutoring,在线学习,online learning,面授课程,in-person classes,混合式学习,blended learning,灵活学习,flexible learning,自主学习,self-directed learning,互动学习,interactive learning,实践学习,practical learning",
	openGraph: {
		title: "加拿大魁北克法语教育中心 QFEC | TEF考试专家 | 法语移民快速通道",
		description: "现任TEF考官直授，98%通过率，6个月达CLB7。专业法语培训、TEF/TCF考试、法语移民咨询。Montreal法语学校，助您快速移民加拿大。",
		url: "https://www.qfec.ca",
		images: [
			{
				url: "/Logo Black Long.png",
				width: 1200,
				height: 630,
				alt: "QFEC 加拿大魁北克法语教育中心"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "加拿大魁北克法语教育中心 QFEC | TEF考试专家",
		description: "现任TEF考官直授，98%通过率，6个月达CLB7。专业法语培训、法语移民咨询。",
		images: ["/Logo Black Long.png"]
	},
	alternates: {
		canonical: "https://www.qfec.ca"
	}
};

const index = () => {
	return (
		<Wrapper>
			<FCHome />
		</Wrapper>
	);
};

export default index;
