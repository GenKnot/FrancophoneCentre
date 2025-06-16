import "../styles/index.scss";
import {LanguageProvider} from "@/contexts/LanguageContext";
import DynamicLanguageHead from "@/components/common/DynamicLanguageHead";
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
    title: "Francophone Centre",
    description: "加拿大魁北克法语教育中心（Quebec Francophone Education Centre, 简称 QFEC）专业法语教学与培训机构",
    keywords: "法语, 法语教育, QFEC, 魁北克, 法语培训, TEF考试, 法语考试",
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
        <html lang="en" suppressHydrationWarning>
        <head>
            <link rel="icon" href="/favicon.svg"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"/>
        </head>
        <body>
        <LanguageProvider>
            <DynamicLanguageHead />
            {children}
        </LanguageProvider>
        </body>
        </html>
    );
}
