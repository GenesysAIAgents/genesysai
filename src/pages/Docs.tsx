import React, { useEffect } from 'react';
import { Terminal } from '../components/Terminal';

export const Docs = () => {
  useEffect(() => {
    window.location.href = 'https://genesysai.gitbook.io/';
  }, []);

  return (
    <Terminal>
      <div className="flex items-center justify-center py-12">
        <p className="text-terminal-text">Redirecting to documentation...</p>
      </div>
    </Terminal>
  );
};