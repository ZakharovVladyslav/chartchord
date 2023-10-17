export const cn = (...args: unknown[]): string => {
    const classes = [];

    for (const cssClass of args) {
        if (Array.isArray(cssClass)) {
            classes.push(cn(...cssClass));
        } else {
            classes.push(cssClass);
        }
    }

    return classes.filter(Boolean).join(" ");
};
