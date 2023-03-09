import Link from 'next/link'
import { cn } from '../lib/utils'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
    green:
      'bg-teal-800 text-white hover:text-slate-100 hover:bg-emerald-500 active:bg-emerald-800 active:text-emerald-100 focus-visible:outline-emerald-600',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    green:
      'ring-emerald-700 text-emerald-500 hover:ring-emerald-500 active:ring-emerald-700 active:text-emerald-400 focus-visible:outline-emerald-600',
  },
}

export function Button({
  variant = 'solid',
  color = 'green',
  className,
  href,
  ...props
}) {
  className = cn(baseStyles[variant], variantStyles[variant][color], className)

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
