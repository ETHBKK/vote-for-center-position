import { defineChain, sepolia } from "thirdweb/chains";

export const L1CHAIN = sepolia;

export const scrollDevnet = defineChain({
  id: 2227728,
  name: "Scroll Devnet",
  nativeCurrency: { name: "Sepolia ETH", symbol: "ScrollETH", decimals: 18 },
  blockExplorers: [
    {
      name: "Blockscout",
      url: "https://l1sload-blockscout.scroll.io",
      apiUrl: "https://l1sload-rpc.scroll.io",
    },
  ],
  testnet: true,
});

