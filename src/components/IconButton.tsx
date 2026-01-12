
interface IIconButtonProps {
    alt: string,
    iconPath: string,
    // onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onClick: React.MouseEventHandler<HTMLButtonElement> // 이벤트핸들러로 정의했으면 prop으로 함수를 꼭 받도록 설정해야한다.
}

export default function IconButton({alt, iconPath, onClick}: IIconButtonProps) {
    return <button onClick={onClick}>
        <img src={iconPath} alt={alt} />
    </button>
}