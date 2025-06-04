import "../styles/index.scss";
import {LanguageProvider} from "@/contexts/LanguageContext";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.svg"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"/>
        </head>
        <body>
        <LanguageProvider>
            {children}
        </LanguageProvider>
        </body>
        </html>
    );
}
