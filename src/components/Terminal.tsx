import React from 'react';
import { StatusIndicator } from './StatusIndicator';

interface TerminalProps {
  children: React.ReactNode;
}

export const Terminal = ({ children }: TerminalProps) => {
  return (
    <div className="w-full h-full bg-terminal-bg rounded-lg border border-terminal-accent/20 p-4 font-mono text-terminal-text">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-terminal-accent/20">
        <StatusIndicator />
      </div>
      {children}
    </div>
  );
};