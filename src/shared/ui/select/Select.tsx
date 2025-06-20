'use client'

import { FC, SelectHTMLAttributes, useState } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  mode?: 'primary' | 'secondary' | 'danger' | 'ghost'
  className?: string
  label?: string
  error?: string
  options: { value: string; label?: string }[] | string[]
  floatingLabel?: boolean
}

export const Select: FC<SelectProps> = ({
  mode = 'primary',
  className = '',
  label,
  error,
  options,
  id,
  floatingLabel = false,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHasValue(!!e.target.value)
    if (rest.onChange) rest.onChange(e)
  }

  const modeStyles = {
    primary: `
      border-gray-300 
      focus:border-green-500 
      focus:ring-green-500
      ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
    `,
    secondary: `
      border-gray-300 
      focus:border-blue-500 
      focus:ring-blue-500
      ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
    `,
    danger: `
      border-red-300 
      focus:border-red-500 
      focus:ring-red-500
    `,
    ghost: `
      border-transparent 
      bg-gray-100
      focus:bg-white
      focus:border-gray-300 
      focus:ring-gray-500
      ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
    `
  }

  const floatingLabelStyles = `
    absolute 
    left-3 
    transition-all 
    duration-200 
    ease-in-out 
    pointer-events-none
    ${
      isFocused || hasValue
        ? 'top-0.5 text-xs text-gray-500 bg-white px-1'
        : 'top-1/2 -translate-y-1/2 text-gray-400'
    }
  `

  return (
    <div className={`relative mb-6 ${className}`}>
      {floatingLabel ? (
        <label htmlFor={id} className={floatingLabelStyles}>
          {label}
        </label>
      ) : (
        label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )
      )}

      <select
        id={id}
        className={`
          w-full 
          px-4 
          py-3 
          border 
          rounded-lg 
          focus:outline-none 
          focus:ring-2 
          transition-all 
          duration-200 
          appearance-none
          bg-white
          bg-[url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")]
          bg-no-repeat
          bg-[center_right_1rem]
          bg-[length:1.25rem]
          ${modeStyles[mode]}
          ${floatingLabel ? 'pt-4 pb-2' : ''}
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
        `}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
        {...rest}>
        {options.map((option, index) => (
          <option
            value={typeof option === 'string' ? option : option.value}
            key={index}
            className="py-2">
            {typeof option === 'string' ? option : option.label || option.value}
          </option>
        ))}
      </select>

      {error && (
        <p className="absolute -bottom-5 left-0 text-red-500 text-xs mt-1 flex items-center">
          <svg
            className="w-3 h-3 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}
