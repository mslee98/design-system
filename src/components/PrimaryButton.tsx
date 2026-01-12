type PrimaryButtonTheme = "dark" | "light" | "social" | "text";

interface IPrimaryButtonProps {
    theme: PrimaryButtonTheme;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: string;
    isDisabled: boolean;
}


const dark = "bg-primary text-white";
const light = "bg-white";
const social = "bg-social text-white";
const text = "bg-transparent text-white";
const disabledStyle = "disabled:bg-alternative disabled:text-neutral";

const color: Record<PrimaryButtonTheme, string> = {
    dark,
    light,
    social,
    text,
}

export default function PrimaryButton({ theme, children, onClick, isDisabled }: IPrimaryButtonProps) {
    return (
        <button className={`w-full h-[59px] ${disabledStyle}${color[theme]} rounded-primary-button`} 
            onClick={onClick} 
            disabled={isDisabled}
        >
            {children}
        </button>
    )   
}