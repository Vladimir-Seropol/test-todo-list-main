'use client'

import { ButtonHTMLAttributes, FC, ReactNode, RefObject } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode: 'primary' | 'secondary' | 'danger' | 'ghost' | 'text'
  children: ReactNode
  className?: string
  ref?: RefObject<HTMLButtonElement | null>
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export const Button: FC<ButtonProps> = ({
  mode,
  children,
  className = '',
  ref,
  size = 'md',
  fullWidth = false,
  ...rest
}) => {
  const baseStyles = `
    rounded-lg
    font-medium
    transition-all
    duration-200
    ease-in-out
    transform
    active:scale-[0.98]
    focus-visible:ring-2
    focus-visible:ring-offset-2
    focus:outline-none
    flex
    items-center
    justify-center
    gap-2
    ${fullWidth ? 'w-full' : 'min-w-fit'}
  `

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  const modeStyles = {
    primary: `
      bg-green-600
      hover:bg-green-700
      active:bg-green-800
      text-white
      focus-visible:ring-green-300
      shadow-md
      hover:shadow-lg
    `,
    secondary: `
      bg-blue-600
      hover:bg-blue-700
      active:bg-blue-800
      text-white
      focus-visible:ring-blue-300
      shadow-md
      hover:shadow-lg
    `,
    danger: `
      bg-red-600
      hover:bg-red-700
      active:bg-red-800
      text-white
      focus-visible:ring-red-300
      shadow-md
      hover:shadow-lg
    `,
    ghost: `
      bg-transparent
      hover:bg-gray-100
      active:bg-gray-200
      text-gray-700
      border
      border-gray-300
      focus-visible:ring-gray-200
    `,
    text: `
      bg-transparent
      hover:bg-gray-100
      active:bg-gray-200
      text-gray-700
      focus-visible:ring-gray-200
      px-2
    `
  }

  return (
    <button
      ref={ref}
      type="button"
      className={`${baseStyles} ${sizeStyles[size]} ${modeStyles[mode]} ${className}`}
      {...rest}>
      {children}
    </button>
  )
}
