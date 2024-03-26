import { WalletOptions } from "@/components/WalletOption";
import { } from "ethers";
import { } from "zksync-ethers";
import Profile from "../components/Profile";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <h1>ZkSync Staking</h1>
      <div>
        <WalletOptions />
      </div>
      <Profile />
    </main>
  );
}
