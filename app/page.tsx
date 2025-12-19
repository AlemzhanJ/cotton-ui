'use client';

import { useState } from 'react';
import { CottonInput, CottonButton, CottonChip, CottonCard } from '@/components/cotton-ui';

// Icons for demo
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
  const [selectedChip, setSelectedChip] = useState('auto');

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-8"
      style={{
        background: 'linear-gradient(180deg, #d4e6f0 0%, #c5dde8 30%, #b8d4e3 60%, #a8c9db 100%)',
      }}
    >
      {/* Main prompt card - like the reference image */}
      <CottonCard padding="lg" withStitch className="w-full max-w-xl">
        <div className="flex flex-col gap-4">
          {/* Input row */}
          <CottonInput
            startIcon={<PlusIcon />}
            endIcon={
              <button className="w-8 h-8 rounded-full bg-cotton-gray-400 text-cotton-white flex items-center justify-center hover:bg-cotton-gray-500 transition-colors">
                <ArrowUpIcon />
              </button>
            }
            placeholder="What would you like to build?"
            className="text-lg"
            wrapperClassName="border-none shadow-none hover:shadow-none focus-within:shadow-none bg-transparent"
          />

          {/* Chips row */}
          <div className="flex items-center gap-2 flex-wrap">
            <CottonChip
              selected={selectedChip === 'auto'}
              onClick={() => setSelectedChip('auto')}
              hasDropdown
            >
              Auto
            </CottonChip>
            <CottonChip
              icon={<CloudIcon />}
              selected={selectedChip === 'cloud'}
              onClick={() => setSelectedChip('cloud')}
              hasDropdown
            >
              Cloud
            </CottonChip>
            <CottonChip
              icon={<AgentIcon />}
              selected={selectedChip === 'agent'}
              onClick={() => setSelectedChip('agent')}
              hasDropdown
            >
              Agent
            </CottonChip>
          </div>
        </div>
      </CottonCard>

      {/* Component showcase below */}
      <div className="mt-16 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-cotton-gray-700 mb-8 text-center">
          Cotton UI Components
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buttons showcase */}
          <CottonCard padding="lg" withStitch>
            <h3 className="text-lg font-medium text-cotton-gray-700 mb-4">Buttons</h3>
            <div className="flex flex-wrap gap-3">
              <CottonButton variant="solid">Solid</CottonButton>
              <CottonButton variant="soft">Soft</CottonButton>
              <CottonButton variant="outline">Outline</CottonButton>
              <CottonButton variant="ghost">Ghost</CottonButton>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <CottonButton size="sm" variant="soft">Small</CottonButton>
              <CottonButton size="md" variant="soft">Medium</CottonButton>
              <CottonButton size="lg" variant="soft">Large</CottonButton>
            </div>
          </CottonCard>

          {/* Inputs showcase */}
          <CottonCard padding="lg" withStitch>
            <h3 className="text-lg font-medium text-cotton-gray-700 mb-4">Inputs</h3>
            <div className="flex flex-col gap-3">
              <CottonInput placeholder="Default input" />
              <CottonInput
                startIcon={<PlusIcon />}
                placeholder="With icon"
              />
              <CottonInput
                placeholder="Disabled"
                disabled
              />
            </div>
          </CottonCard>

          {/* Chips showcase */}
          <CottonCard padding="lg" withStitch>
            <h3 className="text-lg font-medium text-cotton-gray-700 mb-4">Chips</h3>
            <div className="flex flex-wrap gap-2">
              <CottonChip>Default</CottonChip>
              <CottonChip selected>Selected</CottonChip>
              <CottonChip icon={<CloudIcon />}>With Icon</CottonChip>
              <CottonChip hasDropdown>Dropdown</CottonChip>
              <CottonChip icon={<AgentIcon />} selected hasDropdown>All Props</CottonChip>
            </div>
          </CottonCard>

          {/* Cards showcase */}
          <CottonCard padding="lg" withStitch>
            <h3 className="text-lg font-medium text-cotton-gray-700 mb-4">Cards</h3>
            <div className="flex flex-col gap-3">
              <CottonCard padding="sm" className="bg-cotton-gray-50">
                <p className="text-sm text-cotton-gray-600">Small padding card</p>
              </CottonCard>
              <CottonCard padding="md" className="bg-cotton-gray-50">
                <p className="text-sm text-cotton-gray-600">Medium padding card</p>
              </CottonCard>
            </div>
          </CottonCard>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-16 text-cotton-gray-400 text-sm">
        Cotton UI — soft, fabric-inspired components
      </p>
    </div>
  );
}
