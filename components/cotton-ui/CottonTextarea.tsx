'use client';

import { forwardRef, TextareaHTMLAttributes, ReactNode, useRef, useEffect, useImperativeHandle } from 'react';

export interface CottonTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Icon to display at the start of the textarea */
  startIcon?: ReactNode;
  /** Icon/button to display at the end of the textarea */
  endIcon?: ReactNode;
  /** Additional wrapper className */
  wrapperClassName?: string;
  /** Show stitched border */
  withStitch?: boolean;
  /** Minimum number of rows */
  minRows?: number;
  /** Maximum number of rows (0 for unlimited) */
  maxRows?: number;
}

export const CottonTextarea = forwardRef<HTMLTextAreaElement, CottonTextareaProps>(
  ({ startIcon, endIcon, wrapperClassName = '', className = '', withStitch = false, minRows = 1, maxRows = 0, onChange, ...props }, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useImperativeHandle(ref, () => textareaRef.current!);

    const adjustHeight = () => {
      const textarea = textareaRef.current;
      if (!textarea) return;

      // Reset height to auto to get the correct scrollHeight
      textarea.style.height = 'auto';

      // Calculate line height
      const computedStyle = window.getComputedStyle(textarea);
      const lineHeight = parseFloat(computedStyle.lineHeight) || 24;

      // Calculate min and max heights
      const minHeight = lineHeight * minRows;
      const maxHeight = maxRows > 0 ? lineHeight * maxRows : Infinity;

      // Set the new height
      const newHeight = Math.min(Math.max(textarea.scrollHeight, minHeight), maxHeight);
      textarea.style.height = `${newHeight}px`;
    };

    useEffect(() => {
      adjustHeight();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.value, minRows, maxRows]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      adjustHeight();
      onChange?.(e);
    };

    return (
      <div
        className={`
          relative flex items-start gap-3
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
          <span className="text-cotton-gray-400 flex-shrink-0 mt-0.5">
            {startIcon}
          </span>
        )}
        <textarea
          ref={textareaRef}
          onChange={handleChange}
          className={`
            flex-1 bg-transparent outline-none
            text-cotton-gray-700
            placeholder:text-cotton-gray-400
            text-base
            resize-none
            overflow-hidden
            ${className}
          `}
          rows={minRows}
          {...props}
        />
        {endIcon && (
          <span className="text-cotton-gray-400 flex-shrink-0 mt-0.5">
            {endIcon}
          </span>
        )}
      </div>
    );
  }
);

CottonTextarea.displayName = 'CottonTextarea';

export default CottonTextarea;
