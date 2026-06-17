import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import IdentityForm from '../components/IdentityForm';
import CryonIDCard from '../components/CryonIDCard';
import { useWallet } from '@solana/wallet-adapter-react';

export default function Home() {
  const { connected, publicKey } = useWallet();
  const [profile, setProfile] = useState(null);

  const handleSuccess = (newProfile) => {
    setProfile({
      ...newProfile,
      walletAddress: publicKey?.toString() || 'Unknown',
    });
  };

  return (
    <>
      <Head>
        <title>Cryon ID - Decentralized Identity Protocol</title>
        <meta name="description" content="Create your decentralized identity on Solana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="bg-cryon-navy min-h-screen py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Your Decentralized <span className="text-cryon-cyan">Identity</span>
            </h2>
            <p className="text-cryon-secondary-text text-lg max-w-2xl mx-auto">
              Create a verifiable, on-chain identity on the Solana blockchain. Your identity is secured by cryptography and stored immutably on the ledger.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <IdentityForm onSuccess={handleSuccess} />
            </div>

            <div>
              <div className="text-center lg:text-left mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Your Identity Card</h3>
                <p className="text-cryon-secondary-text">
                  {profile ? 'Your verified identity is displayed below.' : 'Create an identity to see your card here.'}
                </p>
              </div>
              <CryonIDCard profile={profile} />
            </div>
          </div>

          {connected && (
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="cryon-card">
                <h3 className="text-lg font-bold text-white mb-4">Wallet Information</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-cryon-secondary-text uppercase tracking-wider">
                      Connected Wallet
                    </p>
                    <p className="text-sm text-white font-mono break-all mt-1">
                      {publicKey?.toString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-cryon-secondary-text uppercase tracking-wider">
                      Network
                    </p>
                    <p className="text-sm text-cryon-cyan font-semibold mt-1">
                      Solana Devnet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-cryon-navy border-t border-cryon-secondary border-opacity-20 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-cryon-secondary-text text-sm">
          <p>© 2024 Cryon ID. Decentralized Identity Protocol on Solana.</p>
        </div>
      </footer>
    </>
  );
}
