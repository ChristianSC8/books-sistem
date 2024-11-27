interface HamburgerIconProps {
    className?: string;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ className }) => {
    return (
        <svg
            className={className}
            width="20px"
            height="20px"
            fill="none"
            viewBox="-.5 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m21.75 0.75h-19.5c-0.82843 0-1.5 0.67157-1.5 1.5v6c0 0.82843 0.67157 1.5 1.5 1.5h19.5c0.8284 0 1.5-0.67157 1.5-1.5v-6c0-0.82843-0.6716-1.5-1.5-1.5z"
                stroke="#71717A"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            />
            <path
                d="m21.75 14.25h-19.5c-0.82843 0-1.5 0.6716-1.5 1.5v6c0 0.8284 0.67157 1.5 1.5 1.5h19.5c0.8284 0 1.5-0.6716 1.5-1.5v-6c0-0.8284-0.6716-1.5-1.5-1.5z"
                stroke="#71717A"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            />
        </svg>

    );
};

export default HamburgerIcon;
