'use client';

import { forwardRef, useState, useRef, useEffect, ReactNode } from 'react';

export interface CottonDropdownItem {
  label: string;
  value: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface CottonDropdownProps {
  /** Trigger element or text */
  trigger: ReactNode;
  /** Dropdown items */
  items: CottonDropdownItem[];
  /** Called when an item is selected */
  onSelect?: (item: CottonDropdownItem) => void;
  /** Currently selected value */
  value?: string;
  /** Alignment of dropdown */
  align?: 'left' | 'right' | 'center';
  /** Position of dropdown */
  position?: 'bottom' | 'top';
  /** Show stitched border */
  withStitch?: boolean;
  /** Custom class name */
  className?: string;
}

export const CottonDropdown = forwardRef<HTMLDivElement, CottonDropdownProps>(
  ({ trigger, items, onSelect, value, align = 'left', position = 'bottom', withStitch = false, className = '' }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close on escape
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    const handleSelect = (item: CottonDropdownItem) => {
      if (item.disabled) return;
      onSelect?.(item);
      setIsOpen(false);
    };

    const alignmentClasses = {
      left: 'left-0',
      right: 'right-0',
      center: 'left-1/2 -translate-x-1/2',
    };

    const positionClasses = {
      bottom: 'top-full mt-2',
      top: 'bottom-full mb-2',
    };

    return (
      <div ref={dropdownRef} className={`relative inline-block ${className}`}>
        {/* Trigger */}
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          {trigger}
        </div>

        {/* Dropdown menu */}
        <div
          ref={ref}
          className={`
            absolute z-[100]
            min-w-[180px]
            ${positionClasses[position]}
            ${alignmentClasses[align]}
            cotton-dropdown-menu
            ${position === 'top' ? 'cotton-dropdown-top' : ''}
            ${isOpen ? 'cotton-dropdown-open' : 'cotton-dropdown-closed'}
          `}
        >
          <div
            className={`
              bg-cotton-gray-50
              rounded-[var(--cotton-radius-lg)]
              overflow-hidden
              cotton-fabric
              ${withStitch ? 'cotton-dropdown-stitched' : ''}
            `}
          >
            <div className="p-3 relative z-10 flex flex-col gap-1">
              {items.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleSelect(item)}
                  disabled={item.disabled}
                  className={`
                    w-full px-3 py-2.5
                    flex items-center gap-3
                    text-sm text-left
                    rounded-[var(--cotton-radius)]
                    transition-all duration-150
                    ${item.disabled
                      ? 'text-cotton-gray-300 cursor-not-allowed'
                      : value === item.value
                        ? 'bg-cotton-gray-200 text-cotton-gray-700 font-medium cotton-texture cotton-btn-stitched cotton-dropdown-selected'
                        : 'text-cotton-gray-600 cotton-dropdown-item'
                    }
                  `}
                >
                  {item.icon && (
                    <span className="flex-shrink-0 text-cotton-gray-400">
                      {item.icon}
                    </span>
                  )}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

CottonDropdown.displayName = 'CottonDropdown';

export default CottonDropdown;
