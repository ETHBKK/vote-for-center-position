import Link from 'next/link'

import { ConnectBtn } from '@/components/ui/thirdweb/connect-btn'

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="md:text-2xl text-lg font-bold text-gray-900">
              Vote for Center
            </Link>
          </div>
          <ConnectBtn />
        </div>
      </div>
    </header>
  )
}