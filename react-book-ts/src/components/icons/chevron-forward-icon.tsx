interface ChevronForwardIconProps {
    className?: string;
}

const ChevronForwardIcon: React.FC<ChevronForwardIconProps> = ({ className = '' }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M184 112l144 144-144 144"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
            />
        </svg>
    );
};

export default ChevronForwardIcon;