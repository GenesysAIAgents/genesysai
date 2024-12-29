import React from 'react';
import { Terminal } from '../components/Terminal';

export const Deploy = () => {
  return (
    <Terminal>
      <div className="flex flex-col items-center justify-center py-12">
        <h2 className="text-2xl text-terminal-accent mb-4">AI Agent Creation</h2>
        <p className="text-terminal-text text-center max-w-md">
          AI agent creation is currently under development. Stay tuned for updates as we prepare to launch this feature.
        </p>
        <div className="mt-8 text-terminal-purple animate-pulse">
          Coming Soon...
        </div>
      </div>
    </Terminal>
  );
};