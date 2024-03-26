import { createClient } from 'viem'
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia, zkSyncSepoliaTestnet } from 'wagmi/chains'
import { walletConnect } from 'wagmi/connectors'


const projectId = process.env.WALLET_CONNECT_PROJECT_ID ?? ''

export const config = createConfig({
  chains: [mainnet, sepolia, zkSyncSepoliaTestnet],
  ssr: true, 
  connectors: [
    walletConnect({ projectId: projectId }),
  ],
  client({ chain }) {
    return createClient({ chain, transport: http() })
  }
})