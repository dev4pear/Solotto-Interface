interface ButtonProps {
    primary?: boolean;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ primary, className, children, onClick }) => {
    return (
        <button onClick={onClick} className={`${className} ${primary ? 'bg-primary' : 'none border border-primary text-primary'}` }>
            {children}
        </button>
    )
};

export default Button;