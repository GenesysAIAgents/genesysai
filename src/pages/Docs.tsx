import React from 'react';
import { useEffect } from 'react';

export const Docs = () => {
  useEffect(() => {
    window.location.href = 'https://genesysai.gitbook.io/';
  }, []);

  return (
    <div className="flex items-center justify-center py-12">
      <p className="text-terminal-text">Redirecting to documentation...</p>
    </div>
  );
};