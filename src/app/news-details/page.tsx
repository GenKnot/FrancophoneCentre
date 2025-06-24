import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import NewsDetails from '@/components/news-details';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "新闻详情 - Francophone Centre",
	description: "查看QFEC法语教育中心的详细新闻内容和最新动态",
	keywords: "法语新闻详情, 法语教育资讯, QFEC新闻, 法语学习资讯",
};

interface PageProps {
    searchParams: { id?: string }
}

const NewsDetailsPage = ({ searchParams }: PageProps) => {
    const newsId = searchParams.id ? parseInt(searchParams.id) : null;

    return (
        <Wrapper>
            <NewsDetails newsId={newsId} />
        </Wrapper>
    );
};

export default NewsDetailsPage;