import { UUID } from "crypto";

interface TabContentProps {
    id: string;
    label: string | null;
    content: {
        title: string;
    }
}
