'use client';

import { forwardRef, useState, ReactNode } from 'react';
import { CottonCard } from './CottonCard';
import { CottonButton } from './CottonButton';
import { CottonTextarea } from './CottonTextarea';
import { CottonChip } from './CottonChip';
import { CottonDropdown, CottonDropdownItem } from './CottonDropdown';

// Default icons
const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

export interface CottonPromptChip {
  label: string;
  icon?: ReactNode;
  selected?: boolean;
  items?: CottonDropdownItem[];
  value?: string;
  onSelect?: (item: CottonDropdownItem) => void;
}

export interface CottonPromptInputProps {
  /** Current value of the textarea */
  value?: string;
  /** Called when textarea value changes */
  onChange?: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Called when submit button is clicked */
  onSubmit?: (value: string) => void;
  /** Show stitched borders */
  withStitch?: boolean;
  /** Minimum rows for textarea */
  minRows?: number;
  /** Maximum rows for textarea */
  maxRows?: number;
  /** Custom icon for the add/attachment button */
  addIcon?: ReactNode;
  /** Custom icon for the submit button */
  submitIcon?: ReactNode;
  /** Items for the attachment dropdown menu */
  attachmentItems?: CottonDropdownItem[];
  /** Called when attachment item is selected */
  onAttachmentSelect?: (item: CottonDropdownItem) => void;
  /** Left side chips/dropdowns configuration */
  leftChips?: CottonPromptChip[];
  /** Right side chips/dropdowns configuration */
  rightChips?: CottonPromptChip[];
  /** Additional className for the card */
  className?: string;
}

export const CottonPromptInput = forwardRef<HTMLDivElement, CottonPromptInputProps>(
  (
    {
      value: controlledValue,
      onChange,
      placeholder = 'What would you like to build?',
      onSubmit,
      withStitch = true,
      minRows = 1,
      maxRows = 4,
      addIcon = <PlusIcon />,
      submitIcon = <ArrowUpIcon />,
      attachmentItems,
      onAttachmentSelect,
      leftChips = [],
      rightChips = [],
      className = '',
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState('');
    const value = controlledValue !== undefined ? controlledValue : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    const handleSubmit = () => {
      onSubmit?.(value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
    };

    const renderChip = (
      chip: CottonPromptChip,
      index: number,
      align: 'left' | 'right'
    ) => {
      if (chip.items && chip.items.length > 0) {
        return (
          <CottonDropdown
            key={index}
            trigger={
              <CottonChip icon={chip.icon} selected={chip.selected} hasDropdown withStitch={withStitch}>
                {chip.label}
              </CottonChip>
            }
            items={chip.items}
            value={chip.value}
            onSelect={chip.onSelect}
            position="top"
            align={align}
            withStitch={withStitch}
          />
        );
      }

      return (
        <CottonChip key={index} icon={chip.icon} selected={chip.selected} withStitch={withStitch}>
          {chip.label}
        </CottonChip>
      );
    };

    return (
      <CottonCard ref={ref} padding="md" withStitch={withStitch} className={className}>
        {/* Top row: attachment dropdown, textarea, and send button */}
        <div className="flex items-start gap-2 sm:gap-3">
          {attachmentItems && attachmentItems.length > 0 ? (
            <CottonDropdown
              trigger={
                <CottonButton variant="soft" size="md" withStitch={withStitch} className="flex-shrink-0">
                  {addIcon}
                </CottonButton>
              }
              items={attachmentItems}
              onSelect={onAttachmentSelect}
              position="top"
              align="left"
              withStitch={withStitch}
            />
          ) : (
            <CottonButton variant="soft" size="md" withStitch={withStitch} className="flex-shrink-0">
              {addIcon}
            </CottonButton>
          )}
          <CottonTextarea
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            minRows={minRows}
            maxRows={maxRows}
            withStitch={withStitch}
            wrapperClassName="flex-1 min-w-0"
          />
          <CottonButton
            variant="solid"
            size="md"
            className="rounded-full !p-2.5 cotton-stitch-rounded flex-shrink-0"
            withStitch={withStitch}
            onClick={handleSubmit}
          >
            {submitIcon}
          </CottonButton>
        </div>

        {/* Bottom row: chips with dropdowns */}
        {(leftChips.length > 0 || rightChips.length > 0) && (
          <div className="flex flex-wrap items-center justify-between gap-2 mt-3 sm:mt-4">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {leftChips.map((chip, index) => renderChip(chip, index, 'left'))}
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {rightChips.map((chip, index) => renderChip(chip, index, 'right'))}
            </div>
          </div>
        )}
      </CottonCard>
    );
  }
);

CottonPromptInput.displayName = 'CottonPromptInput';

export default CottonPromptInput;
