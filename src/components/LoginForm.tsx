import { useState } from "react";
import DefaultTextFiled from "./DefaultTextField";
import Label from "./Label";
import PrimaryButton from "./PrimaryButton";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return ( 
        <div>
            <Label htmlFor="email">이메일</Label>
            <DefaultTextFiled
                id="email"
                errorMessage="이메일을 확인해주세요"
                iconPath="/icons/ic-close-dark.svg"
                iconAlt="delete"
                onIconClick={() => setEmail("")}
                placeholder="이메일을 입력해주세요"
                onChange={(e) => {setEmail(e.target.value)}}
                value={email}
                isError={false}
            />

            <Label htmlFor="password">패스워드</Label>
            <DefaultTextFiled
                id="password"
                errorMessage="패스워드를 확인해주세요"
                iconPath="/icons/ic-close-dark.svg"
                iconAlt="delete"
                onIconClick={() => setPassword("")}
                placeholder="패스워드를 입력해주세요"
                onChange={(e) => {setPassword(e.target.value)}}
                value={password}
                isError={false}
            />
            <PrimaryButton 
                theme="dark"
                disabled={!email || !password}
                onClick={() => {}
            }>로그인
            </PrimaryButton>
                
        </div>
    )
}