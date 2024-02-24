import { ButtonProps } from '@/interfaces'
import { Search } from 'lucide-react'
import { cn } from '@/utils/cn'

export const Button = ({
  type,
  text,
  className,
  isSearch,
  ariaLabel,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        'flex w-full items-center justify-center gap-2 rounded-def border border-solid border-colorPrimary-1 text-sm font-bold sm:p-3',
        className,
      )}
    >
      {isSearch && <Search className="size-5 text-[#00875F]" />}

      <p className={cn(isSearch && 'hidden sm:block')}>{text}</p>
    </button>
  )
}
