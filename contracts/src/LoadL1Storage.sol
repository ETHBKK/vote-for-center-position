// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract LoadL1Storage {
    address immutable L1SLOAD_PRECOMPILE = 0x0000000000000000000000000000000000000101;
    address immutable l1sloadContractAddress;

    constructor(address _l1sloadContractAddress) {
        l1sloadContractAddress = _l1sloadContractAddress;
    }

    // Retrieve mapping(address => uint256)
    function retrieveL1AddressToMapping(uint256 variableStorageSlot, address _mappingAddress)
        public
        view
        returns (uint256)
    {
        (bool success, bytes memory data) = L1SLOAD_PRECOMPILE.staticcall(
            abi.encodePacked(
                l1sloadContractAddress,
                uint256(keccak256(abi.encodePacked(uint256(uint160(_mappingAddress)), variableStorageSlot)))
            )
        );
        if (!success) {
            revert("Error extracting mapping data");
        }
        return abi.decode(data, (uint256));
    }

    // Retrieve mapping(address => mapping(uint256 => uint256))
    function retrieveL1AddressToNestMapping(
        uint256 variableStorageSlot,
        address _mappingAddress,
        uint256 _mappingUintIndex
    ) public view returns (uint256) {
        bytes32 initialSlot = keccak256(abi.encodePacked(uint256(uint160(_mappingAddress)), variableStorageSlot));
        bytes32 finalSlot = keccak256(abi.encodePacked(_mappingUintIndex, initialSlot));

        (bool success, bytes memory data) =
            L1SLOAD_PRECOMPILE.staticcall(abi.encodePacked(l1sloadContractAddress, finalSlot));
        if (!success) {
            revert("Error extracting nested mapping data");
        }
        return abi.decode(data, (uint256));
    }
}
