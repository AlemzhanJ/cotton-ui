'use client';

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';

export interface CottonChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon to display before text */
  icon?: ReactNode;
  /** Whether the chip is selected/active */
  selected?: boolean;
  /** Show dropdown indicator */
  hasDropdown?: boolean;
}

export const CottonChip = forwardRef<HTMLButtonElement, CottonChipProps>(
  ({ icon, selected = false, hasDropdown = false, className = '', children, ...props }, ref) => {
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
          border
          ${
            selected
              ? 'bg-cotton-white text-cotton-gray-700 border-cotton-gray-200 shadow-[var(--cotton-shadow)]'
              : 'bg-cotton-gray-50 text-cotton-gray-500 border-cotton-gray-100 hover:bg-cotton-white hover:border-cotton-gray-200 hover:shadow-[var(--cotton-shadow-sm)]'
          }
          active:scale-[0.98]
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
