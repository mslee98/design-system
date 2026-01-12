import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";


interface IDefaultTextFieldProps {
    id: string;
    errorMessage: string;
    iconPath: string;
    iconAlt: string;
    onIconClick: React.MouseEventHandler<HTMLButtonElement>;
    placeholder: string;
    // onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onChange: React.ChangeEventHandler<HTMLInputElement>
    value: string;
    isError: boolean;
}

export default function DefaultTextFiled({
    id,
    errorMessage, 
    iconPath, 
    iconAlt,
    onIconClick,
    placeholder,
    onChange,
    value,
    isError
}: IDefaultTextFieldProps) {
    
    const [isFocused, setIsFocused] = useState(false);

    const borderColor = isFocused
        ? "border-primary" 
        : !value 
        ? "border-alternative" 
        : "border-neutral"

    return (
        <div className="relative">
            <div 
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`
                    border-b
                    ${borderColor}
            `}>
                <input 
                    id={id}
                    type="text" 
                    className="outline-none"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                
                {!!value && (
                    <IconButton 
                        onClick={onIconClick} 
                        alt={iconAlt} 
                        iconPath={iconPath}
                    />
                )}

            </div>
            {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
        

    )
}