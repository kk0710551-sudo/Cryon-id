import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Program, AnchorProvider } from '@coral-xyz/anchor';
import { CRYON_PROGRAM_ID } from '../constants/programId';
import idl from '../constants/idl.json';

export const useCryon = () => {
  const { connection } = useConnection();
  const wallet = useWallet();

  const getProvider = () => {
    if (!wallet || !wallet.publicKey) {
      return null;
    }
    return new AnchorProvider(connection, wallet, { commitment: 'confirmed' });
  };

  const getProgram = () => {
    const provider = getProvider();
    if (!provider) return null;
    return new Program(idl, CRYON_PROGRAM_ID, provider);
  };

  const initializeProfile = async (ipfsHash) => {
    const program = getProgram();
    if (!program || !wallet.publicKey) {
      throw new Error('Wallet not connected or program not initialized');
    }

    try {
      const tx = await program.methods
        .initializeProfile(ipfsHash)
        .accounts({ user: wallet.publicKey })
        .rpc();
      return tx;
    } catch (error) {
      console.error('Error initializing profile:', error);
      throw error;
    }
  };

  return {
    initializeProfile,
    program: getProgram(),
    provider: getProvider(),
    isConnected: !!wallet?.publicKey,
  };
};
