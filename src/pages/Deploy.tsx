import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Terminal } from '../components/Terminal';

export const Deploy = () => {
  const { connected } = useWallet();
  const [showDialog, setShowDialog] = React.useState(false);

  const handleDeploy = () => {
    setShowDialog(true);
  };

  return (
    <Terminal>
      <div className="flex flex-col items-center justify-center py-12 space-y-6">
        <h2 className="text-2xl text-terminal-accent mb-4">Deploy AI Agent</h2>
        
        {!connected ? (
          <div className="flex flex-col items-center space-y-4">
            <p className="text-terminal-text text-center max-w-md mb-4">
              Connect your wallet to deploy your AI agent
            </p>
            <WalletMultiButton className="!bg-terminal-purple hover:!bg-terminal-accent transition-colors" />
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <p className="text-terminal-text text-center max-w-md mb-4">
              Ready to deploy your AI agent
            </p>
            <Button 
              onClick={handleDeploy}
              className="bg-terminal-accent hover:bg-terminal-accent/90 text-white"
            >
              Deploy Agent
            </Button>
          </div>
        )}

        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold">Coming Soon</DialogTitle>
              <DialogDescription>
                AI agent deployment functionality is currently under development. Stay tuned for updates as we prepare to launch this feature.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </Terminal>
  );
};