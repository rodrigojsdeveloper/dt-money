import { IButtonProps } from '@/interfaces'
import { cn } from '@/utils/cn'
import { Search } from 'lucide-react'

export const Button = ({
  isSearch,
  text,
  type,
  maxWidth,
  height,
  color,
  background,
  hoverBackground,
  hoverBorder,
  active,
  media,
  mediaGrey,
  isGrey,
  onClick,
  ariaLabel,
}: IButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        'flex w-full items-center justify-center gap-2 rounded-def border border-solid border-colorPrimary-1 p-3 text-sm font-bold',
        maxWidth || 'max-w-none',
        height || 'h-[3.125rem]',
        background || 'bg-colorPrimary-1',
        color || 'text-white',
        hoverBackground || 'hover:bg-colorPrimary-2',
        hoverBorder || '',
        active || '',
        media || '',
        mediaGrey || '',
      )}
    >
      {isSearch ? <Search className="size-5 text-[#00875F]" /> : null}

      <p className={cn(isGrey ? 'hidden sm:block' : '')}>{text}</p>
    </button>
  )
}
