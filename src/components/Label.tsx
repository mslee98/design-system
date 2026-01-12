
interface ILabelProps {
    htmlFor: string;
    /**
     * htmlFor 타입의 경우 username | password 이런식으로 두면 확장성이 너무 떨어진다.
     * 따라서 string으로 받는것을 추천
     */
    children: string;
}

export default function Label({htmlFor, children}: ILabelProps) {
    return (<label className="text-sm" htmlFor={htmlFor}>{children}</label>)
} 