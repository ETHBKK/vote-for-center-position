'use client'

import React, { useState, useEffect } from 'react'

type VoteButtonProps = {
  onClick?: () => void; // Optional onClick function prop
};

export default function VoteButton({ onClick }: VoteButtonProps) {
  const [ripple, setRipple] = useState({ x: -1, y: -1, show: false })

  useEffect(() => {
    if (ripple.show) {
      const timer = setTimeout(() => setRipple({ x: -1, y: -1, show: false }), 300)
      return () => clearTimeout(timer)
    }
  }, [ripple])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget
    const rect = button.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    setRipple({ x, y, show: true })
    if (onClick) {
      onClick();
    }
  }

  return (
    <button
      onClick={handleClick}
      className="relative overflow-hidden px-6 py-3 rounded-full text-white font-bold text-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      style={{
        background: 'linear-gradient(45deg, #ff00cc, #3333ff, #00ccff)',
        backgroundSize: '200% 200%',
        animation: 'gradient 2s ease infinite',
      }}
    >
      Vote
      {ripple.show && (
        <span
          className="absolute rounded-full bg-white opacity-75"
          style={{
            width: 100,
            height: 100,
            top: ripple.y - 50,
            left: ripple.x - 50,
            animation: 'ripple 0.1s linear',
          }}
        />
      )}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </button>
  )
}