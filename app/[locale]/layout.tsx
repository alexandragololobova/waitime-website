import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../globals.css';

const locales = ['en', 'de'];

export const metadata: Metadata = {
    title: 'waiTime — Smart Cancellation Waitlist for Swiss Clinics',
    description:
        'waiTime automatically fills cancelled appointments by matching open slots with waitlisted patients via SMS and email. Built for Swiss outpatient clinics.',
    openGraph: {
        title: 'waiTime — Turn empty slots into active appointments',
        description:
            'Automatic cancellation slot recovery for Swiss medical practices. No staff involvement required.',
        url: 'https://waitime.ch',
        siteName: 'waiTime',
        type: 'website',
    },
};

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages({ locale });

    return (
        <html lang={locale}>
        <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}