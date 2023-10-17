import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return [{ locale: "en" }, { locale: "de" }, { locale: "hu"}];
}

interface RootLayout {
    children: React.ReactNode;
    params: { locale: string };
}

export default async function LocaleLayout({ children, params: { locale } }: RootLayout) {
    let messages;
    try {
        messages = (await import(`../../locales/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
