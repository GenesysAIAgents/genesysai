import React, { useState, useEffect } from 'react';
import { Terminal } from '../components/Terminal';
import { useIsMobile } from '../hooks/use-mobile';

const formatUptime = (startTime: Date) => {
  const now = new Date();
  const diff = now.getTime() - startTime.getTime();
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return `${hours}h ${minutes}m ${seconds}s`;
};

export const Agents = () => {
  const isMobile = useIsMobile();
  const [uptime, setUptime] = useState('');
  const [startTime] = useState(() => {
    const savedTime = localStorage.getItem('agentStartTime');
    if (savedTime) {
      return new Date(parseInt(savedTime));
    }
    // If no saved time exists, set current time - 8h and save it
    const initialTime = new Date(Date.now() - 8 * 60 * 60 * 1000);
    localStorage.setItem('agentStartTime', initialTime.getTime().toString());
    return initialTime;
  });
  
  useEffect(() => {
    const updateUptime = () => {
      const formattedUptime = formatUptime(startTime);
      console.log('Updating uptime:', formattedUptime); // Debug log
      setUptime(formattedUptime);
    };
    
    // Initial update
    updateUptime();
    
    // Update every second
    const interval = setInterval(updateUptime, 1000);
    
    return () => clearInterval(interval);
  }, [startTime]);

  const testAgent = {
    name: "Genesis-001",
    status: "Active",
    type: "Test Agent",
    uptime: uptime,
  };

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