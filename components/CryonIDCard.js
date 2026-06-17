export default function CryonIDCard({ profile }) {
  if (!profile) {
    return (
      <div className="cryon-card w-full max-w-md mx-auto">
        <div className="text-center text-cryon-secondary-text">
          No identity created yet.
        </div>
      </div>
    );
  }

  return (
    <div className="cryon-card w-full max-w-md mx-auto">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-sm font-semibold text-cryon-secondary-text uppercase tracking-wider">
            Cryon ID
          </h3>
          <p className="text-2xl font-bold text-white mt-2">{profile.name}</p>
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-cryon-cyan to-blue-500 rounded-cryon flex items-center justify-center">
          <span className="text-cryon-navy font-bold">C</span>
        </div>
      </div>

      <div className="border-t border-cryon-secondary opacity-20 my-4"></div>

      <div className="space-y-3">
        <div>
          <p className="text-xs font-semibold text-cryon-secondary-text uppercase tracking-wider">
            IPFS Hash
          </p>
          <p className="text-sm text-white font-mono break-all mt-1">
            {profile.ipfsHash.substring(0, 16)}...
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold text-cryon-secondary-text uppercase tracking-wider">
            Wallet Address
          </p>
          <p className="text-sm text-white font-mono break-all mt-1">
            {profile.walletAddress.substring(0, 16)}...
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold text-cryon-secondary-text uppercase tracking-wider">
            Status
          </p>
          <p className="text-sm text-cryon-cyan font-semibold mt-1">
            ✓ Verified
          </p>
        </div>
      </div>

      <div className="border-t border-cryon-secondary opacity-20 my-4"></div>

      <div className="text-xs text-cryon-secondary-text text-center">
        Decentralized Identity on Solana
      </div>
    </div>
  );
}
