'use client';

import { useState } from 'react';
import { CottonInput, CottonButton, CottonChip, CottonCard, CottonDropdown, CottonTextarea, CottonToggle, CottonPromptInput, CottonCloudNavbar } from '@/components/cotton-ui';

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

const ImageIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const FigmaIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z" fill="#0ACF83"/>
    <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="#A259FF"/>
    <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="#F24E1E"/>
    <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" fill="#FF7262"/>
    <path d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12Z" fill="#1ABCFE"/>
  </svg>
);

const SupabaseIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 109 113" fill="none">
    <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint0_linear)"/>
    <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#paint1_linear)" fillOpacity="0.2"/>
    <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"/>
    <defs>
      <linearGradient id="paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
        <stop stopColor="#249361"/>
        <stop offset="1" stopColor="#3ECF8E"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
        <stop/>
        <stop offset="1" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const SoundOnIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
  </svg>
);

const SoundOffIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
  </svg>
);

const CottonLogo = () => (
  <span className="text-lg font-semibold text-cotton-gray-700">Cotton UI</span>
);

export default function Home() {
  const [dropdownValue, setDropdownValue] = useState('option1');
  const [toggleValue, setToggleValue] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [promptValue, setPromptValue] = useState('');
  const [modelValue, setModelValue] = useState('auto');
  const [providerValue, setProviderValue] = useState('cloud');
  const [modeValue, setModeValue] = useState('agent');

  const dropdownItems = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Disabled', value: 'disabled', disabled: true },
  ];

  const modelItems = [
    { label: 'Auto', value: 'auto', icon: <CheckIcon /> },
    { label: 'GPT-5 Codex', value: 'gpt5-codex' },
    { label: 'Gemini 2.5 Pro', value: 'gemini-2.5-pro' },
    { label: 'GPT-5', value: 'gpt5' },
    { label: 'Claude Sonnet 4', value: 'claude-sonnet-4' },
    { label: 'Claude Sonnet 4.5', value: 'claude-sonnet-4.5' },
    { label: 'GPT-4.1', value: 'gpt-4.1' },
  ];

  const providerItems = [
    { label: 'Cloud', value: 'cloud', icon: <CloudIcon /> },
    { label: 'GitHub', value: 'github', icon: <GitHubIcon /> },
  ];

  const modeItems = [
    { label: 'Agent', value: 'agent', icon: <AgentIcon /> },
    { label: 'Ask', value: 'ask', icon: <CloudIcon /> },
  ];

  const attachmentItems = [
    { label: 'Add photos', value: 'photos', icon: <ImageIcon /> },
    { label: 'Import from Figma', value: 'figma', icon: <FigmaIcon /> },
    { label: 'Connect Supabase', value: 'supabase', icon: <SupabaseIcon /> },
  ];

  const navItems = [
    { label: 'Home', href: '#', active: true },
    { label: 'Components', href: '#components' },
    { label: 'GitHub', href: 'https://github.com/AlemzhanJ/cotton-ui' },
  ];

  return (
    <div className="min-h-screen bg-[#aed2e6]">
      {/* Cloud Navbar */}
      <CottonCloudNavbar
        logo={<CottonLogo />}
        items={navItems}
        ctaButton={
          <a href="https://github.com/AlemzhanJ/cotton-ui" target="_blank" rel="noopener noreferrer">
            <CottonButton variant="solid" size="sm" withStitch>
              Get Started
            </CottonButton>
          </a>
        }
      />

      {/* Component showcase */}
      <div className="w-full max-w-4xl mx-auto px-8 py-12 relative z-10" id="components">
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

          {/* Toggle showcase */}
          <CottonCard padding="lg" withStitch className="md:col-span-2">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-cotton-gray-700">Toggle</h3>
              <CottonButton
                variant="soft"
                size="sm"
                withStitch
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <SoundOffIcon /> : <SoundOnIcon />}
              </CottonButton>
            </div>
            <div className="flex justify-center pb-8">
              <CottonToggle
                checked={toggleValue}
                onCheckedChange={setToggleValue}
                muted={isMuted}
              />
            </div>
          </CottonCard>

          {/* Prompt Input Panel */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-medium text-cotton-gray-700 mb-4">Prompt Input</h3>
            <CottonPromptInput
              value={promptValue}
              onChange={setPromptValue}
              onSubmit={(value) => console.log('Submit:', value)}
              attachmentItems={attachmentItems}
              onAttachmentSelect={(item) => console.log('Selected:', item.value)}
              leftChips={[
                {
                  label: modelValue === 'auto' ? 'Auto' : modelItems.find(m => m.value === modelValue)?.label || 'Auto',
                  items: modelItems.map(item => ({
                    ...item,
                    icon: item.value === modelValue ? <CheckIcon /> : undefined
                  })),
                  value: modelValue,
                  onSelect: (item) => setModelValue(item.value),
                },
              ]}
              rightChips={[
                {
                  label: providerValue === 'cloud' ? 'Cloud' : 'GitHub',
                  icon: <CloudIcon />,
                  selected: true,
                  items: providerItems.map(item => ({
                    ...item,
                    icon: item.value === providerValue ? <CheckIcon /> : item.icon
                  })),
                  value: providerValue,
                  onSelect: (item) => setProviderValue(item.value),
                },
                {
                  label: modeValue === 'agent' ? 'Agent' : 'Ask',
                  icon: <AgentIcon />,
                  selected: true,
                  items: modeItems.map(item => ({
                    ...item,
                    icon: item.value === modeValue ? <CheckIcon /> : item.icon
                  })),
                  value: modeValue,
                  onSelect: (item) => setModeValue(item.value),
                },
              ]}
            />
          </div>

          {/* Cloud Navbar Info */}
          <CottonCard padding="lg" withStitch className="md:col-span-2">
            <h3 className="text-lg font-medium text-cotton-gray-700">Cloud Navbar</h3>
            <p className="text-cotton-gray-500">Look up — the navbar has soft blurred edges</p>
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
