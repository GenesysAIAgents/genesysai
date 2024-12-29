import React from 'react';
import { Terminal } from '../components/Terminal';

const testAgent = {
  name: "Genesis-001",
  status: "Active",
  type: "Analysis Agent",
  uptime: "24h 13m",
};

export const Agents = () => {
  return (
    <Terminal>
      <div className="space-y-4">
        <h2 className="text-xl text-terminal-accent mb-4">Active Agents</h2>
        <div className="bg-terminal-bg/50 p-4 rounded border border-terminal-accent/20">
          <div className="grid grid-cols-4 gap-4 overflow-hidden whitespace-nowrap">
            {Object.entries(testAgent).map(([key, value], index) => (
              <div key={key}>
                <p className="text-terminal-purple">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                <p className="animate-typewriter" 
                   style={{ 
                     animationDelay: "0ms",
                     width: "100%",
                     animationFillMode: "both"
                   }}>
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