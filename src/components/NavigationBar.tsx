import IconButton from "./IconButton";

interface INavigationBarProps {
    isDark: boolean;
    title?: string;
    showTitle: boolean;
    showBackButton: boolean;
    showCloseButton: boolean;
    onBackClick?: React.MouseEventHandler<HTMLButtonElement>;
    onCloseClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
    isDark,
    title = "", 
    showTitle, 
    showBackButton, 
    showCloseButton, 
    onBackClick = () => {}, 
    onCloseClick = () => {}
}: INavigationBarProps) {
        return (
        <div className="w-full flex justify-between">
            <div className="navigation-title-wrapper flex">
                {/* 뒤로가기 버튼 */}
                {showBackButton && <IconButton alt="prev button" iconPath={`/icons/ic-left-arrow${isDark ? "-white" : "-dark"}.svg`} onClick={onBackClick} />}
                {/* 페이지 제목 */}
                {showTitle && <h1 className={`text-2xl ${isDark ? 'text-white' : ''}`}>{title}</h1>}
            </div>
            {/* 닫기 버튼 */}
            {showCloseButton && <IconButton alt="prev button" iconPath={`/icons/ic-close${isDark ? "-white" : "-dark"}.svg`} onClick={onCloseClick} />}
        </div>
    )
}