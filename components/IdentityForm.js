import { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useCryon } from '../hooks/useCryon';

export default function IdentityForm({ onSuccess }) {
  const { connected } = useWallet();
  const { initializeProfile } = useCryon();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const handleCreate = async () => {
    if (!connected) {
      setMessage('Please connect your wallet first.');
      setMessageType('error');
      return;
    }

    if (!name.trim()) {
      setMessage('Please enter a name for your identity.');
      setMessageType('error');
      return;
    }

    setLoading(true);
    setMessage(null);
    setMessageType(null);

    try {
      setMessage('Pinning data to IPFS...');

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to pin to IPFS');
      }

      const { IpfsHash } = await res.json();
      setMessage(`Data pinned to IPFS! Saving to blockchain...`);

      await initializeProfile(IpfsHash);

      setMessage('Identity Created Successfully!');
      setMessageType('success');
      setName('');

      if (onSuccess) {
        onSuccess({ name, ipfsHash: IpfsHash });
      }

    } catch (error) {
      console.error('Error creating identity:', error);
      setMessage(`Error: ${error.message || 'An unknown error occurred.'}`);
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cryon-card w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold text-white mb-6">Create Your Identity</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-cryon-secondary-text uppercase tracking-wider mb-2">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="cryon-input w-full"
            disabled={loading}
          />
        </div>

        <button
          onClick={handleCreate}
          className="cryon-button w-full font-semibold"
          disabled={loading || !connected}
        >
          {loading ? 'Processing...' : 'Create Identity'}
        </button>
      </div>

      {message && (
        <div
          className={`mt-4 p-3 rounded-cryon text-sm font-medium ${
            messageType === 'success'
              ? 'bg-green-900 bg-opacity-30 text-green-300 border border-green-500 border-opacity-30'
              : 'bg-red-900 bg-opacity-30 text-red-300 border border-red-500 border-opacity-30'
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
