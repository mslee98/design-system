
interface ICategoryButtonProps {
    iconPath: string;
    iconAlt: string;
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function CategoryButton({
    iconPath,
    iconAlt,
    text,
    onClick
}: ICategoryButtonProps) {
    return (
        <button className={`
            flex
            flex-col
            items-center
            rounded-md
            border
            border-primary
            font-bold
            pl-[22px]
            pr-[21px]
            py-4
            `} 
            onClick={onClick}
        >
            <img src={iconPath} alt={iconAlt}/>
            <p>{text}</p>
        </button>
    )
}