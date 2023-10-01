import { UseFormRegister } from "react-hook-form";

interface InputProps {
  placeholder: string;
  margin?: "mr-4";
  marginMedia?: "max-sm:mr-2";
  type?: React.HTMLInputTypeAttribute;
  register: UseFormRegister<{
    description: string;
    price: number;
    category: string;
    created_at: Date;
    option?: "Entradas" | "Saídas" | undefined;
  }>;
  name: "option" | "description" | "price" | "category" | "created_at";
}

const Input = ({
  placeholder,
  margin,
  marginMedia,
  type,
  register,
  name,
}: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      className={`w-full max-w-957 h-54 bg-grey-1 p-4 rounded-def ${
        margin ? margin : ""
      } placeholder:text-normal placeholder:text-base placeholder:text-grey-5 focus:placeholder:text-transparent ${
        marginMedia ? marginMedia : ""
      }`}
      type={type}
      required={true}
      autoComplete="off"
      {...register(name)}
    />
  );
};

export { Input };
