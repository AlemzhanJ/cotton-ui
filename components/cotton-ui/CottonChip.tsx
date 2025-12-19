'use client';

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';

export interface CottonChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon to display before text */
  icon?: ReactNode;
  /** Whether the chip is selected/active */
  selected?: boolean;
  /** Show dropdown indicator */
  hasDropdown?: boolean;
  /** Show stitched border */
  withStitch?: boolean;
}

export const CottonChip = forwardRef<HTMLButtonElement, CottonChipProps>(
  ({ icon, selected = false, hasDropdown = false, withStitch = false, className = '', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center gap-2
          px-4 py-2
          text-sm font-medium
          rounded-[var(--cotton-radius-full)]
          transition-all duration-200 ease-out
          cursor-pointer
          cotton-texture cotton-pillow
          ${selected
            ? 'bg-cotton-white text-cotton-gray-700'
            : 'bg-cotton-gray-100 text-cotton-gray-500 hover:bg-cotton-gray-200'
          }
          ${withStitch ? 'cotton-btn-stitched cotton-stitch-rounded' : ''}
          disabled:opacity-50 disabled:cursor-not-allowed
          ${className}
        `}
        {...props}
      >
        {icon && <span className="flex-shrink-0 text-cotton-gray-400">{icon}</span>}
        <span>{children}</span>
        {hasDropdown && (
          <svg
            className="w-3 h-3 text-cotton-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        )}
      </button>
    );
  }
);

CottonChip.displayName = 'CottonChip';

export default CottonChip;
