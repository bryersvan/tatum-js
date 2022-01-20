/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChainBurnErc20KMS = {
    /**
     * Chain to work with.
     */
    chain: ChainBurnErc20KMS.chain;
    /**
     * Amount of tokens to be destroyed.
     */
    amount: string;
    /**
     * Address of ERC20 token
     */
    contractAddress: string;
    /**
     * Identifier of the private key associated in signing application. Private key, or signature Id must be present.
     */
    signatureId: string;
    /**
     * Nonce to be set to Celo transaction. If not present, last known nonce will be used.
     */
    nonce?: number;
}

export namespace ChainBurnErc20KMS {

    /**
     * Chain to work with.
     */
    export enum chain {
        ETH = 'ETH',
        BSC = 'BSC',
        XDC = 'XDC',
        ALGO = 'ALGO',
    }


}