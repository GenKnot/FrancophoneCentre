import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import Courses from '@/components/courses';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "法语课程 TEF/TCF考试培训 | QFEC魁北克法语教育中心 | French Courses Montreal",
	description: "QFEC专业法语课程：TEF/TCF考试培训、法语移民课程、CLB7强化班、法语零基础班。现任TEF考官直授，98%通过率，助您快速通过法语考试，实现加拿大移民梦想。Professional French courses including TEF/TCF exam preparation, immigration French, and intensive programs.",
	keywords: "法语课程,French courses,TEF考试培训,TEF exam preparation,TCF考试培训,TCF exam preparation,法语培训,French training,法语移民课程,French immigration course,CLB7强化班,CLB7 intensive,法语零基础,French beginner,现任TEF考官,current TEF examiner,98%通过率,98% pass rate,QFEC课程,QFEC courses,魁北克法语课程,Quebec French courses,蒙特利尔法语课程,Montreal French courses,法语口语课程,French speaking course,法语听力课程,French listening course,法语阅读课程,French reading course,法语写作课程,French writing course,法语语法课程,French grammar course,法语词汇课程,French vocabulary course,法语发音课程,French pronunciation course,法语对话课程,French conversation course,商务法语课程,business French course,旅游法语课程,travel French course,学术法语课程,academic French course,职业法语课程,professional French course,日常法语课程,everyday French course,法语文化课程,French culture course,法语文学课程,French literature course,法语历史课程,French history course,加拿大法语课程,Canadian French course,魁北克法语课程,Quebec French course,法语证书课程,French certificate course,法语文凭课程,French diploma course,DELF课程,DELF course,DALF课程,DALF course,法语等级课程,French level course,A1法语课程,A1 French course,A2法语课程,A2 French course,B1法语课程,B1 French course,B2法语课程,B2 French course,C1法语课程,C1 French course,C2法语课程,C2 French course,法语入门课程,French introduction course,法语初级课程,French elementary course,法语中级课程,French intermediate course,法语高级课程,French advanced course,法语强化课程,French intensive course,法语速成课程,French crash course,法语补习课程,French supplementary course,法语辅导课程,French tutoring course,法语私教课程,French private course,一对一法语课程,one-on-one French course,小班法语课程,small group French course,在线法语课程,online French course,面授法语课程,in-person French course,周末法语课程,weekend French course,晚间法语课程,evening French course,全日制法语课程,full-time French course,兼职法语课程,part-time French course,暑期法语课程,summer French course,寒假法语课程,winter French course,法语夏令营,French summer camp,法语冬令营,French winter camp,法语游学,French study tour,法语留学,French study abroad,法语交换,French exchange,法语实习,French internship,法语志愿者,French volunteer,法语工作,French job,法语职业,French career,法语就业,French employment,法语求职,French job hunting,法语面试,French interview,法语简历,French resume,法语推荐信,French recommendation letter,法语申请,French application,法语考试,French exam,法语测试,French test,法语评估,French assessment,法语认证,French certification,法语资格,French qualification,法语执照,French license,法语许可,French permit,法语授权,French authorization,法语批准,French approval,法语确认,French confirmation,法语验证,French verification,法语检查,French check,法语审核,French review,法语监督,French supervision,法语指导,French guidance,法语建议,French advice,法语咨询,French consultation,法语服务,French service,法语支持,French support,法语帮助,French help,法语援助,French assistance,法语资源,French resources,法语材料,French materials,法语教材,French textbooks,法语参考书,French reference books,法语词典,French dictionary,法语工具书,French reference tools,法语软件,French software,法语应用,French app,法语网站,French website,法语平台,French platform,法语社区,French community,法语论坛,French forum,法语博客,French blog,法语视频,French video,法语音频,French audio,法语播客,French podcast,法语电台,French radio,法语电视,French TV,法语新闻,French news,法语节目,French program,法语电影,French movie,法语纪录片,French documentary,法语动画,French animation,法语游戏,French game,法语音乐,French music,法语歌曲,French song,法语专辑,French album,法语演唱会,French concert,法语节日,French festival,法语庆典,French celebration,法语活动,French event,法语聚会,French gathering,法语派对,French party,法语晚会,French evening party,法语舞会,French dance party,法语比赛,French competition,法语竞赛,French contest,法语挑战,French challenge,法语测验,French quiz,法语问答,French Q&A,法语讨论,French discussion,法语辩论,French debate,法语演讲,French speech,法语报告,French report,法语讲座,French lecture,法语研讨会,French seminar,法语工作坊,French workshop,法语培训班,French training class,法语学习班,French study class,法语兴趣班,French hobby class,法语提高班,French improvement class,法语精品班,French premium class,法语VIP班,French VIP class,法语定制班,French customized class,法语企业班,French corporate class,法语团体班,French group class",
	openGraph: {
		title: "法语课程 TEF/TCF考试培训 | QFEC魁北克法语教育中心",
		description: "专业法语课程：TEF/TCF考试培训、法语移民课程、CLB7强化班。现任TEF考官直授，98%通过率，助您快速移民加拿大。",
		url: "https://www.qfec.ca/courses"
	},
	alternates: {
		canonical: "https://www.qfec.ca/courses"
	}
};

const CoursesPage = () => {
	return (
		<Wrapper>
			<Courses />
		</Wrapper>
	);
};

export default CoursesPage;