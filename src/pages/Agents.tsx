import React from 'react';
import { Terminal } from '../components/Terminal';
import { useIsMobile } from '../hooks/use-mobile';

const testAgent = {
  name: "Genesis-001",
  status: "Active",
  type: "Test Agent",
  uptime: "24h 13m",
};

export const Agents = () => {
  const isMobile = useIsMobile();

  return (
    <Terminal>
      <div className="space-y-4">
        <h2 className="text-xl text-terminal-accent mb-4">Active Agents</h2>
        <div className="bg-terminal-bg/50 p-4 rounded border border-terminal-accent/20">
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-y-4' : 'grid-cols-4 gap-4'}`}>
            {Object.entries(testAgent).map(([key, value]) => (
              <div key={key} className={`${isMobile ? 'flex justify-between items-center' : ''}`}>
                <p className="text-terminal-purple">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                <p className="text-terminal-text break-words">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Terminal>
  );
};