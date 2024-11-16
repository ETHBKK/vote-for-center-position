# Overview

contracts for Vote for Center

## Contracts

- [MooDengFanNFT.sol](./src/MooDengFanNFT.sol)
- [LoadL1Storage.sol](./src/LoadL1Storage.sol)
- [Vote.sol](./src/Vote.sol)

MooDengFanNFT.sol is an ERC721Enumerable contract for minting NFTs that exists on L1.

There are two functions LoadL1Storage.sol:
- retrieveL1AddressToMapping (get data from balance mapping)
- retrieveL1AddressToNestMapping (get the data from mapping mapping(address => mapping(uint256 => uint256)))

Vote.sol is the contract for voting and record everyone's vote selection.

## Deployed Address

L1 (Ethereum Sepolia) MooDengFan NFT: 0xd68f2585797aec710e2759fe8c2ea69128337de4

LoadL1storage (Scroll devnet): 0xea093725e0aaf04522ad74466f3630c0a9404b09

Vote (Scroll devnet): 0xcD5380eD6512d28C66168C918ef7b4ab0D95fBA0
