import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Header() {
  return (
    <header className="bg-cryon-navy border-b border-cryon-secondary border-opacity-20">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Cryon <span className="text-cryon-cyan">ID</span>
          </h1>
          <p className="text-sm text-cryon-secondary-text mt-1">
            Decentralized Identity Protocol on Solana
          </p>
        </div>
        <div className="flex items-center">
          <WalletMultiButton />
        </div>
      </div>
    </header>
  );
}
