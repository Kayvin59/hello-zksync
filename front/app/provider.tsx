"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from "wagmi";
import { config } from './config';

const queryClient = new QueryClient() 

type Props = {
    children: React.ReactNode;
}

export function Providers({ children }: Props) {  
    return (
        <WagmiProvider config={config}> 
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </WagmiProvider>
    )
  }