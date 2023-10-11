'use client';

import { useTranslations } from "next-intl";

export default function Home() {
    const translate = useTranslations("Index");

    return (
        <div>
            <h1>{translate("hello")}</h1>
        </div>
    );
}
