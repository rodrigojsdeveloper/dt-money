interface InputProps {
  placeholder: string;
  margin?: "mr-4";
  marginMedia?: "max-sm:mr-2";
  type?: React.HTMLInputTypeAttribute;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number | readonly string[];
}

const Input = ({
  placeholder,
  margin,
  marginMedia,
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
      } placeholder:text-normal placeholder:text-base placeholder:text-grey-5 focus:placeholder:text-transparent ${
        marginMedia ? marginMedia : ""
      }`}
      required={true}
      autoComplete="off"
      onChange={onChange}
      value={value}
    />
  );
};

export { Input };
