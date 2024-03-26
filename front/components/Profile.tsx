"use client"

import { useAccount } from 'wagmi';

export default function Profile() {
  const { address } = useAccount()
  return (
      <div>ENS name: {address}</div>
  );
  
}
