"use client";

import Input from "@/components/login/Input";
import useInput from "@/hooks/useInput";
import { validateEmail, validatePassword } from "@/utils/validate";

export default function Login() {
  const {
    isValidate: emailIsValidate,
    onChange: onChangeEmail,
    value: email,
  } = useInput(validateEmail);

  const {
    isValidate: passwordIsValidate,
    onChange: onChangePassword,
    value: password,
  } = useInput(validatePassword);

  return (
    <div className="flex h-full justify-center items-center">
      <div className="w-96">
        <h1 className="text-4xl font-bold mb-8 text-center">LOGIN</h1>
        <form className="flex flex-col gap-4">
          <Input
            name="Email"
            type="email"
            onChange={onChangeEmail}
            value={email}
            isValidate={emailIsValidate}
            errorMassage="이메일 형식을 확인해주세요."
          />
          <Input
            name="Password"
            type="password"
            onChange={onChangePassword}
            value={password}
            isValidate={passwordIsValidate}
            errorMassage="패스워드는 최소 6자 이상이어야 합니다."
          />
          <button
            disabled={
              !emailIsValidate || !passwordIsValidate || !email || !password
            }
            className="bg-slate-500 text-white rounded-md p-2 disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
