//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title ProtoSBT
 * @dev There're mainly two characters in this contract, Creator & Souls.
 * Creator is the owner of the contract, while Souls are individuals who
 * wish to `make a contract` with Creator. 
 * 
 * The almighty Creator controls which Soul could live. Creator is able
 * to create, transfer, destroy souls. However, Creator can transfer soul only when
 * Soul requests to do so.
 * 
 * The fortunate Souls are created to experience the wonderfulness of living.
 * Souls cannot create, destroy other souls. In the case when Soul wants to 
 * switch its container or its container is compromised, Soul is able to 
 * request for transferring soul.
 * 
 */

/**
 * Notes:
 * 
 * - Do we need approve? (approve contract to transfer from your soul?)
 * - The interface is designed under the premise of every wallet can have ONE soul
 * from a single contract at a time. Does the premise hold TRUE?
 */
interface IProtoSBT {

    /**
     * @dev Emitted when a soul is created to `to`.
     */
    event Create(address indexed to);

    /**
     * @dev Emitted when a soul is requested to transfer from `from` to `to`.
     */
    event Request(address indexed from, address indexed to, bool delegateTransfer);

    /**
     * @dev Emitted when a soul-transfer request is permitted to `to`.
     * 
     * Note: Not necessary in permit2 case.
     */
    event Permit(address indexed to);

    /**
     * @dev Emitted when a soul is transferred from `from` to `to`.
     */
    event Transfer(address indexed from, address indexed to);

    /**
     * @dev Emitted when a soul is destroyed from `from`.
     */
    event Destroy(address indexed from);

    /**
     * @dev Creates a soul representing an on-chain individual.
     * 
     * Requirements:
     * 
     * - The caller must be the owner or have owner-like authority (e.g. admin).
     * - `to` cannot be the zero address.
     * 
     * Emits a {Create} event.
     */
    function create(address to) external;

    /**
     * @dev Requests for soul-transfer.
     * 
     * Requirements:
     * 
     * - The caller must be Soul itself.
     * 
     * Emits a {Request} event.
     * 
     * Idea 1) Creator (e.g. Centralized Authority) could listen to the Request event
     * and record them in the db.
     */
    function request(address to, bool delegateTransfer) external;

    /**
     * @dev Permits a soul-transfer request.
     * 
     * Requirements:
     * 
     * - 
     * 
     * Idea 2) Permission could be conducted off-chain with Chainlink to 
     * the db of Creator(e.g. Centralized Authority). This could save gas. (permit2)
     * 
     * Emits a {Permit} event in permit2
     */
    function permit1(address to) external;
    function permit2() external view returns (bool);

    /**
     * @dev Transfers soul.
     * 
     * Requirements:
     * 
     * - `to` cannot be the zero address, or contract address. (or it could be? like DAO? Does DAO need a soul?)
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to) external;

    /**
     * @dev Executes soul-transfer delegate to Soul.
     * 
     * Requirements:
     * 
     * - The caller must be the owner or have owner-like authority (e.g. admin).
     * - `from` must have had requested for delegateTransfer.
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(address from, address to) external;

    /**
     * @dev Destroys a soul.
     * 
     * Requirements:
     * 
     * - The caller must be the owner or have owner-like authority (e.g. admin).
     * 
     * Emits a {Destroy} event.
     */
    function destroy(address soul) external;

    /**
     * @dev Returns the status of Soul.
     * 
     * Cannot know if the soul had been created or destroyed.
     */
    function isLiving(address soul) external view returns (bool);
}