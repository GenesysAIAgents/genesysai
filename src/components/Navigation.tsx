import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';

const tabs = [
  { name: 'Agents', path: '/' },
  { name: 'Deploy', path: '/deploy' },
  { name: 'Docs', path: 'https://docs.genesys.build/', external: true },
  { name: 'FAQ', path: '/faq' },
];

export const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  return (
    <nav className={`flex ${isMobile ? 'flex-col' : 'flex-row'} ${isMobile ? 'space-y-2' : 'space-x-4'} mb-6`}>
      {tabs.map((tab) => (
        tab.external ? (
          <a
            key={tab.path}
            href={tab.path}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded transition-colors text-terminal-text hover:bg-terminal-accent/20 ${
              isMobile ? 'w-full text-left' : ''
            }`}
          >
            {tab.name}
          </a>
        ) : (
          <Link
            key={tab.path}
            to={tab.path}
            className={`px-4 py-2 rounded transition-colors ${
              location.pathname === tab.path
                ? 'bg-terminal-accent text-white'
                : 'text-terminal-text hover:bg-terminal-accent/20'
            } ${isMobile ? 'w-full text-left' : ''}`}
          >
            {tab.name}
          </Link>
        )
      ))}
    </nav>
  );
};