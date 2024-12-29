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
            <div>
              <p className="text-terminal-purple">Name</p>
              <p>{testAgent.name}</p>
            </div>
            <div>
              <p className="text-terminal-purple">Status</p>
              <p>{testAgent.status}</p>
            </div>
            <div>
              <p className="text-terminal-purple">Type</p>
              <p>{testAgent.type}</p>
            </div>
            <div>
              <p className="text-terminal-purple">Uptime</p>
              <p>{testAgent.uptime}</p>
            </div>
          </div>
        </div>
      </div>
    </Terminal>
  );
};