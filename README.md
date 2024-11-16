## Overview 
🎤 🎤 Welcome to our project for the ETHGlobal Bangkok 2024 Hackathon, where we bring K-pop fans, blockchain tech, and a sprinkle of Web3 magic together! 🎉

What’s the big idea? We’re using Scroll’s L1SLOAD feature (a fancy tool that lets L2s read data from L1) to let fans vote for their favorite idol’s center position in a decentralized, secure, and undeniably fun way. 🚀✨

### Why This Project?
This whole thing started when we saw the amazing Scroll’s L1SLOAD proposal and the shiny CDP x HYBE prize for creator-economy projects. That’s when the lightbulb moment happened:

L1 has lots of trusted data, especially valuable membership NFTs such as CryptoPunks and Bored Ape Yacht Club! However, making use of these membership NFTs on L1 will require users spend more gas to perform any further actions. 
L2 is where all the fun happens—faster, cheaper, and cooler.
So, we asked ourselves: What if fans could use an L1 fandom NFT (proof they’re a real stan) to vote for their idol on L2? Suddenly, we were building a playground for K-pop fans and showing off how L2s can flex their muscles in practical, real-world use cases.

### How It Works
Get your qualification badge (NFT): Fans need a K-pop NFT on L1.
Hop onto L2: Thanks to L1SLOAD, we pull in that NFT data without making you break the bank on gas fees.
Vote for the center position: Fans can cast votes on L2 to decide who gets the spotlight. All the votes and interactions are securely stored on L2.
Results go live: The top idol earns their spot in the middle, because democracy never sounded so catchy! 🎶

### Why This Matters
K-pop stans are serious about their idols (and so are we). By combining L1’s trust with L2’s scalability, we’re creating a decentralized, gas-friendly way for fans to engage. But the real kicker? This is a proof of fun for what L2s can do when they use L1SLOAD creatively. Imagine a future where L2s are playgrounds for fun, engaging, and powerful Web3 applications. The possibilities are endless! 🚀


## Getting Started

First, create a `.env` file and clone the environmental variables from `.env.example` and fill them up. 

Then, run the frontend application development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contracts
All the contracts are in the [contracts folder](./contracts). 

## Future Work
- may make use of AI tool like CDP AgentKit to automate the smart contract deployment
- not limit to NFT as membership, we can read more data from L1 (eg: identity on L1, previous music album purchase transaction on L1 - airdrop the loyal fans some benefits or loyalty badges, and so on!)
- more fun decisions to be voted by the fandom (eg: merchandise on concert, theme of the next album, who goes SOLO next) 
