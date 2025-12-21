'use client';

import { forwardRef, HTMLAttributes, ReactNode } from 'react';

export interface CottonCloudNavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface CottonCloudNavbarProps extends HTMLAttributes<HTMLElement> {
  logo?: ReactNode;
  items?: CottonCloudNavItem[];
  ctaButton?: ReactNode;
}

export const CottonCloudNavbar = forwardRef<HTMLElement, CottonCloudNavbarProps>(
  ({ logo, items = [], ctaButton, className = '', ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={`sticky top-0 z-50 -mb-4 px-4 pb-4 ${className}`}
        {...props}
      >
        {/* Blur background with faded bottom edge */}
        <div className="cloud-fade-bottom absolute left-0 h-24 w-full bg-white/60 backdrop-blur-xl" />

        {/* Content */}
        <div className="relative mx-auto max-w-6xl">
          <nav className="flex items-center justify-between py-4">
            {/* Left: Logo */}
            {logo && (
              <div className="flex-shrink-0">
                {logo}
              </div>
            )}

            {/* Center: Navigation */}
            {items.length > 0 && (
              <div className="hidden md:flex items-center gap-1">
                {items.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`
                      px-4 py-2 rounded-full text-sm font-medium
                      transition-colors duration-200
                      ${item.active
                        ? 'text-cotton-gray-800'
                        : 'text-cotton-gray-500 hover:text-cotton-gray-700'
                      }
                    `}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}

            {/* Right: CTA */}
            {ctaButton && (
              <div className="flex-shrink-0">
                {ctaButton}
              </div>
            )}
          </nav>
        </div>
      </header>
    );
  }
);

CottonCloudNavbar.displayName = 'CottonCloudNavbar';

export default CottonCloudNavbar;
