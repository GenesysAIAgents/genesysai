import React from 'react';
import { Terminal } from '../components/Terminal';
import { useWallet } from '@solana/wallet-adapter-react';

const testAgent = {
  name: "Genesis-001",
  status: "Active",
  type: "Analysis Agent",
  uptime: "24h 13m",
};

export const Agents = () => {
  const { wallet, connect, connecting } = useWallet();
  
  console.log('Wallet status:', { wallet, connecting }); // Debug log

  return (
    <Terminal>
      <div className="space-y-4">
        <h2 className="text-xl text-terminal-accent mb-4">Active Agents</h2>
        <div className="bg-terminal-bg/50 p-4 rounded border border-terminal-accent/20">
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(testAgent).map(([key, value], index) => (
              <div key={key}>
                <p className="text-terminal-purple">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                <p className="text-terminal-text typewriter-text"
                   style={{ 
                     animation: `typewriter ${value.length * 0.1}s steps(${value.length}, end)`,
                     whiteSpace: 'nowrap',
                     overflow: 'hidden',
                     borderRight: '0.15em solid #1EAEDB'
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