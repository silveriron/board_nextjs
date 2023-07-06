import React, { useState } from "react";

export default function useInput(
  validate: (value: string) => boolean = () => true
) {
  const [value, setValue] = useState("");
  const [isValidate, setIsValidate] = useState(true);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!validate(e.target.value)) {
      setIsValidate(false);
    } else {
      setIsValidate(true);
    }
    setValue(e.target.value);
  };

  return {
    value,
    isValidate,
    onChange,
  };
}
