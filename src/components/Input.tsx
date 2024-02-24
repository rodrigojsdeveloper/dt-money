import { InputProps } from '@/interfaces'
import { cn } from '@/utils/cn'

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
      className={cn(
        'placeholder:text-normal h-[3.375rem] w-full max-w-[59.813rem] rounded-def border border-solid border-grey-1 bg-grey-1 p-4 placeholder:text-base placeholder:text-grey-5 focus:border-colorPrimary-1 focus:placeholder:text-transparent',
        margin || '',
      )}
      required={true}
      autoComplete="off"
      onChange={onChange}
      value={value}
    />
  )
}

export default Input
