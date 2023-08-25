import React, { useState } from "react";

import { Eye, EyeSlash } from "@/assets/svg";

interface Props {
  type: "email" | "password" | "text" | "date" | "number" | "time";
  label: string;
  value?: string | number;
  placeholder?: string;
  className?: string;
  required?: boolean;
  name?: string;
  // defaultValue?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const TextInput = ({
  type,
  label,
  value = "",
  placeholder,
  className,
  required = false,
  name = "",
  // defaultValue,
  onChange,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const renderTypeInput = (
    <input
      id={type + name}
      type={type}
      required={required}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      // defaultValue={+62}
      className="p-3 rounded-md border border-neutral-300 text-neutral-700 text-sm lg:text-base placeholder:text-xs placeholder:text-neutral-500 lg:placeholder:text-sm"
    />
  );

  const renderTypePassword = (
    <div className="relative flex items-center">
      <input
        id={type + name}
        type={showPassword ? "text" : type}
        required={required}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="p-3 w-full rounded-md border border-neutral-300 text-neutral-700 text-sm lg:text-base placeholder:text-xs placeholder:text-neutral-500 lg:placeholder:text-sm"
      />
      <a
        onClick={(e) => handleShowPassword(e)}
        className="absolute cursor-pointer right-3"
      >
        {showPassword ? <Eye width="24px" /> : <EyeSlash width="24px" />}
      </a>
    </div>
  );

  const renderInput = () => {
    if (type == "password") return renderTypePassword;
    return renderTypeInput;
  };

  return (
    <div className={`flex flex-col text-left ${className}`}>
      {label && (
        <label
          htmlFor={type + name}
          className="text-sm text-neutral-700 lg:text-base mb-2"
        >
          {label}
        </label>
      )}
      {renderInput()}
    </div>
  );
};

export default TextInput;
