'use client';

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';

export type CottonButtonVariant = 'solid' | 'soft' | 'outline' | 'ghost';
export type CottonButtonSize = 'sm' | 'md' | 'lg';

export interface CottonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: CottonButtonVariant;
  /** Size of the button */
  size?: CottonButtonSize;
  /** Icon to display at the start */
  startIcon?: ReactNode;
  /** Icon to display at the end */
  endIcon?: ReactNode;
  /** Make button full width */
  fullWidth?: boolean;
  /** Show stitched border */
  withStitch?: boolean;
}

const variantStyles: Record<CottonButtonVariant, string> = {
  solid: `
    bg-cotton-gray-700 text-cotton-white
    hover:bg-cotton-gray-600
    active:bg-cotton-gray-800
    cotton-pillow cotton-pillow-dark cotton-texture
  `,
  soft: `
    bg-cotton-gray-100 text-cotton-gray-700
    hover:bg-cotton-gray-200
    active:bg-cotton-gray-300
    cotton-pillow cotton-texture
  `,
  outline: `
    bg-cotton-white text-cotton-gray-600
    border border-cotton-gray-200
    hover:bg-cotton-gray-50
    hover:border-cotton-gray-300
    active:bg-cotton-gray-100
    cotton-pillow cotton-texture
  `,
  ghost: `
    bg-transparent text-cotton-gray-600
    hover:bg-cotton-gray-100
    active:bg-cotton-gray-200
    cotton-texture
  `,
};

const sizeStyles: Record<CottonButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5 rounded-[var(--cotton-radius-sm)]',
  md: 'px-4 py-2 text-base gap-2 rounded-[var(--cotton-radius)]',
  lg: 'px-5 py-2.5 text-lg gap-2.5 rounded-[var(--cotton-radius-md)]',
};

export const CottonButton = forwardRef<HTMLButtonElement, CottonButtonProps>(
  (
    {
      variant = 'soft',
      size = 'md',
      startIcon,
      endIcon,
      fullWidth = false,
      withStitch = false,
      className = '',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center
          font-medium
          transition-all duration-200 ease-out
          cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${fullWidth ? 'w-full' : ''}
          ${withStitch ? 'cotton-btn-stitched' : ''}
          ${className}
        `}
        disabled={disabled}
        {...props}
      >
        {startIcon && <span className="flex-shrink-0">{startIcon}</span>}
        {children}
        {endIcon && <span className="flex-shrink-0">{endIcon}</span>}
      </button>
    );
  }
);

CottonButton.displayName = 'CottonButton';

export default CottonButton;
