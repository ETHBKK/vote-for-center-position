"use client"
import { ConnectButton } from "thirdweb/react";

import {
  generatePayload,
  isLoggedIn,
  login,
  logout,
} from "@/actions/auth";
import { scrollDevnet } from "@/const/chains";
import { useTwebContext } from '@/contexts/thirdweb'
import { connect } from "@wagmi/core";
import { config } from "@/config";
import { metaMask } from "@wagmi/connectors";

export function ConnectBtn() {
  const { client, wallets, setLoggedIn } = useTwebContext()

  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      chain={scrollDevnet}
      theme={"light"}
      connectModal={{
        size: "wide",
        showThirdwebBranding: false,
      }}
      showAllWallets={false} //TBC
      recommendedWallets={[wallets[0]]} //TBC
      auth={{
        isLoggedIn: async (address) => {
          console.log("checking if logged in!", { address });
          const status = await isLoggedIn();
          // console.log({status})
          setLoggedIn(status);
          const wagmiConnection = await connect(config, { connector: metaMask() })
          // console.log({wagmiConnection})
          return status;
        },
        doLogin: async (params) => {
          console.log("logging in!");
          await login(params);
          const wagmiConnection = await connect(config, { connector: metaMask() }) // Connect to wagmi so that we can "vote" - Thirdweb sendTx is not working with custom RPC for Scroll Devnet
          // console.log({wagmiConnection})
        },
        getLoginPayload: async ({ address }) =>
          generatePayload({ address, chainId: scrollDevnet.id }),
        doLogout: async () => {
          console.log("logging out!");
          await logout();
          setLoggedIn(false);
        },
      }}
    />
  );
}