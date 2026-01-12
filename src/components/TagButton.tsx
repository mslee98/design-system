interface ITagButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: string;
    isChecked: boolean;
}

export default function TagButton({ onClick, children, isChecked }: ITagButtonProps) {


    const buttonStyle = isChecked ? 'bg-white' : 'bg-sky-900 border-white text-white';
    return (
        <button 
            onClick={onClick} 
            className={`
                rounded-tag-button 
                h-[33px] 
                px-[10px] 
                border border-white ${buttonStyle}`}>
            {children}
        </button>
    )
}