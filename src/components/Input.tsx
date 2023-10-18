import { InputProps } from "@/interfaces";

const Input = ({
  placeholder,
  margin,
  type,
  name,
  onChange,
  value,
}: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`w-full max-w-957 h-54 bg-grey-1 p-4 rounded-def ${
        margin ? margin : ""
      } placeholder:text-normal placeholder:text-base placeholder:text-grey-5 focus:placeholder:text-transparent border border-solid border-grey-1 focus:border-colorPrimary-1`}
      required={true}
      autoComplete="off"
      onChange={onChange}
      value={value}
    />
  );
};

export { Input };
