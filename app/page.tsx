'use client';

import { useState } from 'react';
import { CottonInput, CottonButton, CottonChip, CottonCard, CottonDropdown, CottonTextarea } from '@/components/cotton-ui';

// Icons for demo
const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const CloudIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const AgentIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function Home() {
  const [dropdownValue, setDropdownValue] = useState('option1');

  const dropdownItems = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Disabled', value: 'disabled', disabled: true },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8 cotton-bg-texture"
      style={{
        background: 'linear-gradient(180deg, #d4e6f0 0%, #c5dde8 30%, #b8d4e3 60%, #a8c9db 100%)',
      }}
    >
      {/* Component showcase */}
      <div className="w-full max-w-4xl relative z-10">
        <h2 className="text-2xl font-semibold text-cotton-gray-700 mb-8 text-center">
          Cotton UI Components
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buttons showcase */}
          <CottonCard padding="lg" withStitch>
            <h3 className="text-lg font-medium text-cotton-gray-700 mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <CottonButton variant="solid" withStitch>Solid</CottonButton>
              <CottonButton variant="soft" withStitch>Soft</CottonButton>
              <CottonButton variant="outline" withStitch>Outline</CottonButton>
              <CottonButton variant="ghost" withStitch>Ghost</CottonButton>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <CottonButton size="sm" variant="soft" withStitch>Small</CottonButton>
              <CottonButton size="md" variant="soft" withStitch>Medium</CottonButton>
              <CottonButton size="lg" variant="soft" withStitch>Large</CottonButton>
            </div>
          </CottonCard>

          {/* Inputs showcase */}
          <CottonCard padding="lg" withStitch>
            <h3 className="text-lg font-medium text-cotton-gray-700 mb-4">Inputs</h3>
            <div className="flex flex-col gap-3">
              <CottonInput placeholder="Default input" withStitch />
              <CottonInput
                startIcon={<PlusIcon />}
                placeholder="With icon"
                withStitch
              />
              <CottonInput
                placeholder="Disabled"
                disabled
              />
              <CottonTextarea
                placeholder="Auto-growing textarea..."
                withStitch
                minRows={2}
                maxRows={6}
              />
            </div>
          </CottonCard>

          {/* Chips showcase */}
          <CottonCard padding="lg" withStitch>
            <h3 className="text-lg font-medium text-cotton-gray-700 mb-4">Chips</h3>
            <div className="flex flex-wrap gap-2">
              <CottonChip withStitch>Default</CottonChip>
              <CottonChip selected withStitch>Selected</CottonChip>
              <CottonChip icon={<CloudIcon />} withStitch>With Icon</CottonChip>
              <CottonDropdown
                trigger={<CottonChip hasDropdown withStitch>Dropdown</CottonChip>}
                items={dropdownItems}
                value={dropdownValue}
                onSelect={(item) => setDropdownValue(item.value)}
                position="top"
                withStitch
              />
              <CottonDropdown
                trigger={<CottonChip icon={<AgentIcon />} selected hasDropdown withStitch>All Props</CottonChip>}
                items={dropdownItems}
                value={dropdownValue}
                onSelect={(item) => setDropdownValue(item.value)}
                position="top"
                align="right"
                withStitch
              />
            </div>
          </CottonCard>

          {/* Cards showcase */}
          <CottonCard padding="lg" withStitch>
            <h3 className="text-lg font-medium text-cotton-gray-700 mb-4">Cards</h3>
            <div className="flex flex-col gap-3">
              <CottonCard padding="sm" withStitch>
                <p className="text-sm text-cotton-gray-600">Small padding</p>
              </CottonCard>
              <CottonCard padding="md" withStitch>
                <p className="text-sm text-cotton-gray-600">Medium padding</p>
              </CottonCard>
              <CottonCard padding="lg" withStitch>
                <p className="text-sm text-cotton-gray-600">Large padding</p>
              </CottonCard>
            </div>
          </CottonCard>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-16 text-cotton-gray-600 text-sm relative z-10">
        Cotton UI — soft, fabric-inspired components
      </p>
    </div>
  );
}
