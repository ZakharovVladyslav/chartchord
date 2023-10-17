"use client";

import { useState } from "react";
import styles from "./TabContent.module.css";
import Loader from "@/components/Loader";
import { Tab } from "@headlessui/react";

interface TabContentProps {
    content: string;
}

export default function TabContent({ content }: TabContentProps) {
    const [loaded, setLoaded] = useState<boolean>(true);

    return <Tab.Panel>{loaded ? <>{content}</> : <Loader global />}</Tab.Panel>;
}
