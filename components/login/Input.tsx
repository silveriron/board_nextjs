import React from "react";

interface InputProps {
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  isValidate?: boolean;
  errorMassage?: string;
}

export default function Input({
  name,
  type,
  onChange,
  isValidate = true,
  value,
  errorMassage,
}: InputProps) {
  return (
    <label className="flex flex-col gap-2">
      <span>{name}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={"border border-gray-300 rounded-md p-2 text-black"}
      />
      {isValidate ? (
        <p className="h-4"></p>
      ) : (
        <p className="h-4 text-sm text-red-400">{errorMassage}</p>
      )}
    </label>
  );
}
