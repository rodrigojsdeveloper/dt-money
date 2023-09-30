interface InputProps {
  placeholder: string;
  margin?: "mr-4";
  marginMedia?: "max-sm:mr-2.5";
}

const Input = ({ placeholder, margin, marginMedia }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      className={`w-full max-w-957 h-54 bg-grey-1 p-4 rounded-def ${
        margin ? margin : ""
      } placeholder:text-normal placeholder:text-base placeholder:text-grey-5 focus:placeholder:text-transparent ${
        marginMedia ? marginMedia : ""
      }`}
    />
  );
};

export { Input };
