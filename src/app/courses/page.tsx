import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import Courses from '@/components/courses';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Courses - Francophone Centre",
	description: "Explore professional French courses offered by QFEC, including TEF/TCF exam preparation, academic French, professional French and more",
	keywords: "French courses, TEF exam, TCF exam, French training, French learning, QFEC courses",
};

const index = () => {
	return (
		<>
			<Wrapper>
				<Courses />
			</Wrapper>
		</>
	);
};

export default index;