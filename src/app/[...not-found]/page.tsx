import Error from "@/components/Error";
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "页面未找到 - Francophone Centre",
	description: "抱歉，您访问的页面不存在",
	keywords: "404, 页面未找到, 法语中心, QFEC, 魁北克, 法语培训, TEF考试, 法语考试",
};
 
const index = () => {
  return (
    <Wrapper>
      <Error />
    </Wrapper>
  );
};

export default index;