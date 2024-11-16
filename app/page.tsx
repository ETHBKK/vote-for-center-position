"use client";

import { useActiveAccount } from "thirdweb/react";

import { ConnectBtn } from "@/components/ui/thirdweb/connect-btn";
import { useTwebContext } from "@/contexts/thirdweb";

export default function Home() {
  const { loggedIn } = useTwebContext();
  const activeAccount = useActiveAccount();
  console.log({ activeAccount })

  if (!loggedIn) {
    return (
      <section>
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Oops! Login to vote for your favourite Moo Deng member to stand in center!</h3>
            <ConnectBtn />
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        HOME
      </main>
    </div>
  );
}
