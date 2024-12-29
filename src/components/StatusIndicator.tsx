import React from 'react';

export const StatusIndicator = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      <span className="text-sm text-terminal-text font-mono">System Online</span>
    </div>
  );
};