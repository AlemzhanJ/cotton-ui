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

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
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
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-cotton-gray-100"
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
      <div className="mt-16 flex flex-col items-center gap-4 relative z-10">
        <a
          href="https://github.com/AlemzhanJ/cotton-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CottonButton variant="solid" withStitch>
            <GitHubIcon />
            <span>GitHub</span>
          </CottonButton>
        </a>
        <p className="text-cotton-gray-600 text-sm">
          Cotton UI — soft, fabric-inspired components
        </p>
      </div>
    </div>
  );
}
