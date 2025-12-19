'use client';

import { forwardRef, InputHTMLAttributes } from 'react';

export interface CottonToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Whether the toggle is checked */
  checked?: boolean;
  /** Callback when toggle state changes */
  onCheckedChange?: (checked: boolean) => void;
  /** Show stitched border */
  withStitch?: boolean;
  /** Label for off state */
  offLabel?: string;
  /** Label for on state */
  onLabel?: string;
}

export const CottonToggle = forwardRef<HTMLInputElement, CottonToggleProps>(
  ({
    checked = false,
    onCheckedChange,
    withStitch = true,
    offLabel = 'OFF',
    onLabel = 'ON',
    className = '',
    onChange,
    ...props
  }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onCheckedChange?.(e.target.checked);
      onChange?.(e);
    };

    const teethCount = 40;

    return (
      <label
        className={`
          relative inline-flex items-center cursor-pointer select-none
          ${className}
        `}
      >
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="sr-only peer"
          {...props}
        />

        {/* Track */}
        <div
          className={`
            relative w-[180px] h-[72px]
            bg-cotton-gray-100
            rounded-full
            cotton-texture
            overflow-visible
            ${withStitch ? 'cotton-toggle-stitched' : ''}
          `}
          style={{
            boxShadow: `
              inset 2px 2px 6px rgba(0, 0, 0, 0.08),
              inset -2px -2px 6px rgba(255, 255, 255, 0.9),
              0 2px 8px rgba(0, 0, 0, 0.06)
            `
          }}
        >
          {/* ON label */}
          <span
            className="absolute right-[24px] bottom-[8px] text-[10px] font-medium text-cotton-gray-400 z-10 transition-opacity duration-300"
            style={{ opacity: checked ? 1 : 0.6 }}
          >
            {onLabel}
          </span>

          {/* OFF label */}
          <span
            className="absolute left-[24px] bottom-[8px] text-[10px] font-medium text-cotton-gray-400 z-10 transition-opacity duration-300"
            style={{ opacity: checked ? 0.4 : 1 }}
          >
            {offLabel}
          </span>

          {/* Zipper teeth - closed (interlocked) */}
          <div
            className="absolute left-[20px] top-1/2 -translate-y-1/2 h-[36px] flex items-center overflow-hidden"
            style={{
              width: '140px',
              clipPath: checked ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
              transition: 'clip-path 0.3s ease-out',
            }}
          >
            <div className="flex items-center h-full">
              {Array.from({ length: teethCount }).map((_, i) => (
                <img
                  key={i}
                  src="/zipper-tooth.png"
                  alt=""
                  className="h-[32px] w-auto object-contain flex-shrink-0"
                  style={{
                    marginLeft: i === 0 ? 0 : '-16px',
                    transform: i % 2 === 0 ? 'translateY(-3px)' : 'translateY(3px)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Zipper teeth - open top row */}
          <div
            className="absolute left-[14px] top-1/2 h-[36px] flex items-center overflow-hidden"
            style={{
              width: '140px',
              clipPath: checked ? 'inset(0 0 0 100%)' : 'inset(0 0 0 0)',
              transition: 'clip-path 0.3s ease-out, transform 0.3s ease-out',
              transform: checked ? 'translateY(-50%)' : 'translateY(-70%)',
            }}
          >
            <div className="flex items-center h-full">
              {Array.from({ length: teethCount / 2 }).map((_, i) => (
                <img
                  key={i}
                  src="/zipper-tooth.png"
                  alt=""
                  className="h-[32px] w-auto object-contain flex-shrink-0"
                  style={{
                    marginLeft: i === 0 ? 0 : '-8px',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Zipper teeth - open bottom row */}
          <div
            className="absolute left-[20px] top-1/2 h-[36px] flex items-center overflow-hidden"
            style={{
              width: '140px',
              clipPath: checked ? 'inset(0 0 0 100%)' : 'inset(0 0 0 0)',
              transition: 'clip-path 0.3s ease-out, transform 0.3s ease-out',
              transform: checked ? 'translateY(-50%)' : 'translateY(-30%)',
            }}
          >
            <div className="flex items-center h-full">
              {Array.from({ length: teethCount / 2 }).map((_, i) => (
                <img
                  key={i}
                  src="/zipper-tooth.png"
                  alt=""
                  className="h-[32px] w-auto object-contain flex-shrink-0"
                  style={{
                    marginLeft: i === 0 ? 0 : '-8px',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Zipper slider - outside track */}
        <div
          className="absolute z-20"
          style={{
            left: '20px',
            top: '50%',
            transform: checked ? 'translateX(70px) translateY(-35%)' : 'translateX(-50px) translateY(-35%)',
            transition: 'transform 0.3s ease-out',
          }}
        >
          <img
            src="/zipper-slider.png"
            alt=""
            width={120}
            height={320}
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.25))'
            }}
          />
        </div>
      </label>
    );
  }
);

CottonToggle.displayName = 'CottonToggle';

export default CottonToggle;
