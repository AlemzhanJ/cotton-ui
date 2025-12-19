'use client';

import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

export interface CottonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Icon to display at the start of the input */
  startIcon?: ReactNode;
  /** Icon/button to display at the end of the input */
  endIcon?: ReactNode;
  /** Additional wrapper className */
  wrapperClassName?: string;
  /** Show stitched border */
  withStitch?: boolean;
}

export const CottonInput = forwardRef<HTMLInputElement, CottonInputProps>(
  ({ startIcon, endIcon, wrapperClassName = '', className = '', withStitch = false, ...props }, ref) => {
    return (
      <div
        className={`
          relative flex items-center gap-3
          bg-cotton-gray-50
          rounded-[var(--cotton-radius)]
          px-4 py-3
          transition-all duration-200 ease-out
          cotton-texture
          cotton-input
          ${withStitch ? 'cotton-btn-stitched' : ''}
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
