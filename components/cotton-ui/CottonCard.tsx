'use client';

import { forwardRef, HTMLAttributes, ReactNode } from 'react';

export interface CottonCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether to apply the fabric texture */
  withTexture?: boolean;
  /** Whether to show stitched border */
  withStitch?: boolean;
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingStyles = {
  none: '',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

export const CottonCard = forwardRef<HTMLDivElement, CottonCardProps>(
  ({ withTexture = true, withStitch = false, padding = 'md', className = '', children, ...props }, ref) => {
    const textureClass = withTexture && withStitch
      ? 'cotton-fabric'
      : withTexture
        ? 'cotton-texture'
        : withStitch
          ? 'cotton-stitched'
          : '';

    return (
      <div
        ref={ref}
        className={`
          bg-cotton-white
          rounded-[var(--cotton-radius-xl)]
          shadow-[var(--cotton-shadow)]
          border border-cotton-gray-100
          ${paddingStyles[padding]}
          ${textureClass}
          ${className}
        `}
        {...props}
      >
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
);

CottonCard.displayName = 'CottonCard';

export default CottonCard;
