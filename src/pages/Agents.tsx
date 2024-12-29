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
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(testAgent).map(([key, value], index) => (
              <div key={key}>
                <p className="text-terminal-purple">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                <p className="overflow-hidden whitespace-nowrap" 
                   style={{ 
                     animation: `typewriter 2s steps(${value.length * 2}, end) forwards`,
                     animationDelay: `${index * 500}ms`,
                     width: "0%",
                     borderRight: "0.15em solid #1EAEDB"
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