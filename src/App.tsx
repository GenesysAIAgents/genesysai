import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { WalletButton } from './components/WalletButton';
import { Agents } from './pages/Agents';
import { Deploy } from './pages/Deploy';
import { FAQ } from './pages/FAQ';
import { Twitter, Github } from 'lucide-react';
import { useIsMobile } from './hooks/use-mobile';

const App = () => {
  const endpoint = clusterApiUrl('mainnet-beta');
  const wallets = [new PhantomWalletAdapter()];
  const isMobile = useIsMobile();

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-terminal-bg p-6 flex flex-col">
            <div className="max-w-7xl mx-auto flex-grow w-full">
              <div className={`${isMobile ? 'flex flex-col items-center' : 'flex justify-between items-center'} mb-8`}>
                <div className="flex items-center gap-4">
                  <img src="/lovable-uploads/f01e1cf4-6bd0-4499-a264-f04ae080ff5f.png" alt="Genesys Logo" className="w-12 h-12" />
                  <h1 className="text-3xl font-mono text-terminal-text">Genesys AI</h1>
                </div>
                <div className={isMobile ? 'mt-4' : ''}>
                  <WalletButton />
                </div>
              </div>
              <p className="text-terminal-text text-lg mb-8 leading-relaxed">
                Genesys AI integrates the foundational principles of Eliza, the pioneering chatbot framework, and the power of Swarm technology to enable seamless interaction and dynamic cooperation among AI entities.
              </p>
              <Navigation />
              <Routes>
                <Route path="/" element={<Agents />} />
                <Route path="/deploy" element={<Deploy />} />
                <Route path="/faq" element={<FAQ />} />
              </Routes>
            </div>
            <footer className="mt-12 max-w-7xl mx-auto w-full">
              <div className="flex justify-between items-center py-4 border-t border-terminal-accent/20">
                <p className="text-terminal-text text-sm">
                  Powered by Eliza and SWARM technology
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-terminal-text mr-2">Genesys Socials</span>
                  <a
                    href="https://x.com/GenesysAgents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-text hover:text-terminal-accent transition-colors"
                  >
                    <Twitter size={28} />
                  </a>
                  <a
                    href="https://github.com/GenesysTools"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-text hover:text-terminal-accent transition-colors"
                  >
                    <Github size={28} />
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;