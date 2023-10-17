import "./Icons.scss";

export default function CrossMarkIcon({ classname }: { classname?: string }) {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`icon ${classname ? classname : ""}`}
        viewBox="0 0 16 17"
        fill="currentColor"
    >
        <path
            d="M15.1754 0.5L16 1.32464L0.82461 16.4994L0 15.6754L15.1754 0.5Z"
            fill="#CCCCCC"
        />
        <path
            d="M0.82461 0.5L16 15.6748L15.1754 16.5L0 1.32522L0.82461 0.5Z"
            fill="#CCCCCC"
        />
    </svg>;
}
