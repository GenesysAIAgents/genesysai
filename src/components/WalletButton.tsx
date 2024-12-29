import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

export const WalletButton = () => {
  const { wallet } = useWallet();

  return (
    <div className="font-mono">
      <WalletMultiButton className="!bg-terminal-purple hover:!bg-terminal-accent transition-colors" />
    </div>
  );
};