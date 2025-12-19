'use client';

import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

export interface CottonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Icon to display at the start of the input */
  startIcon?: ReactNode;
  /** Icon/button to display at the end of the input */
  endIcon?: ReactNode;
  /** Additional wrapper className */
  wrapperClassName?: string;
}

export const CottonInput = forwardRef<HTMLInputElement, CottonInputProps>(
  ({ startIcon, endIcon, wrapperClassName = '', className = '', ...props }, ref) => {
    return (
      <div
        className={`
          relative flex items-center gap-3
          bg-cotton-white
          rounded-[var(--cotton-radius-lg)]
          shadow-[var(--cotton-shadow)]
          border border-cotton-gray-100
          px-4 py-3
          transition-all duration-200 ease-out
          hover:shadow-[var(--cotton-shadow-md)]
          focus-within:shadow-[var(--cotton-shadow-md)]
          focus-within:border-cotton-gray-200
          cotton-texture
          ${wrapperClassName}
        `}
      >
        {startIcon && (
          <span className="text-cotton-gray-400 flex-shrink-0">
            {startIcon}
          </span>
        )}
        <input
          ref={ref}
          className={`
            flex-1 bg-transparent outline-none
            text-cotton-gray-700
            placeholder:text-cotton-gray-400
            text-base
            ${className}
          `}
          {...props}
        />
        {endIcon && (
          <span className="text-cotton-gray-400 flex-shrink-0">
            {endIcon}
          </span>
        )}
      </div>
    );
  }
);

CottonInput.displayName = 'CottonInput';

export default CottonInput;
