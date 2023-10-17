import classNames from "classnames";
import CrossMarkIcon from "../Icons/CrossMarkIcon";
import styles from "./Tab.module.scss";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";

interface TabPanelProps {
    label?: string | null;
}

export default function ListTab({ label }: TabPanelProps) {
    return (
        <Tab className={styles.tabPanel} as="div">
            {({ selected }) => (
                <button
                    className={classNames(styles.tab, {
                        [styles.active]: selected,
                    })}
                >
                    <h1 className={styles.label}>{label ?? "New tab"}</h1>

                        <CrossMarkIcon classname={styles.crossMarkIcon} />
                </button>
            )}
        </Tab>
    );
}
