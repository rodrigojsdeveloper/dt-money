import { InputProps } from '@/interfaces'

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
      className={`h-[3.375rem] w-full max-w-[59.813rem] rounded-def bg-grey-1 p-4 ${
        margin || ''
      } placeholder:text-normal border border-solid border-grey-1 placeholder:text-base placeholder:text-grey-5 focus:border-colorPrimary-1 focus:placeholder:text-transparent`}
      required={true}
      autoComplete="off"
      onChange={onChange}
      value={value}
    />
  )
}

export default Input
