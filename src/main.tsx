import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiConfig, createConfig } from 'wagmi';
import { filecoin } from 'wagmi/chains';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { http } from 'viem';
import App from './App';
import './index.css';

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

const config = createConfig({
  autoConnect: true,
  publicClient: {
    chain: filecoin,
    transport: http(),
  },
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains: [filecoin],
  themeMode: 'dark',
  themeVariables: {
    '--w3m-font-family': 'Inter, sans-serif',
    '--w3m-accent-color': '#6366f1',
    '--w3m-background-color': '#1f2937',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
);