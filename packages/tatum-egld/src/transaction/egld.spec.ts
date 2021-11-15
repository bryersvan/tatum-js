import {generateAddressFromPrivatekey} from '../wallet/address'
import { egldGetConfig, egldGetGasPrice } from './egld'

describe('Elrond EGLD tests', () => {

    jest.setTimeout(99999)

    it('should get address from private key', async () => {
        const address = await generateAddressFromPrivatekey('1da12bfa82725be308f79b2c313358be5a215ca6b405b00f28750560a1febb90')
        // console.log(address);
        expect(address.length).toBe(62)
        expect(address).toBe('erd17kyxnqn8hma5kdd5hd4mx08ynjvaz9q47tw7w2htygwmalt3959s2wvqmr')
    })

    it('should get network config', async () => {
        const {data} = await egldGetConfig()
        // console.log(data.config['erd_chain_id']);
        expect(data.config['erd_chain_id']).toBeDefined()
    })

    it.skip('should get gas price', async () => {
        const result = await egldGetGasPrice()
        // console.log(result);
        expect(result).toBeDefined()
    })
})