import styles from "./Loader.module.scss";
import cn from "classnames";

export default function Loader({ global }: { global?: boolean }): JSX.Element {
    return (
        <div className={cn(styles.loader, {
            [styles.global]: global
        })}>
            <div className={styles.spinner} />
        </div>
    );
}
