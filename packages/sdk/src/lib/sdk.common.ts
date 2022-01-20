import { TatumBtcSDK } from '@tatumio/btc'
import { TatumCeloSDK } from '@tatumio/celo'
import { TatumEthSDK } from '@tatumio/eth'

export type SDKS = {
  btc: ReturnType<typeof TatumBtcSDK>
  eth: ReturnType<typeof TatumEthSDK>
  celo: ReturnType<typeof TatumCeloSDK>
}
