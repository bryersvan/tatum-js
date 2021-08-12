export const abi = [
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'previousOwner',
                'type': 'address'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'OwnershipTransferred',
        'type': 'event'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            },
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'name': 'onERC721Received',
        'outputs': [
            {
                'internalType': 'bytes4',
                'name': '',
                'type': 'bytes4'
            }
        ],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'owner',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'tokenAddress',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'contractType',
                'type': 'uint256'
            },
            {
                'internalType': 'address',
                'name': 'recipient',
                'type': 'address'
            },
            {
                'internalType': 'uint256',
                'name': 'amount',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': 'tokenId',
                'type': 'uint256'
            }
        ],
        'name': 'transfer',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address[]',
                'name': 'tokenAddress',
                'type': 'address[]'
            },
            {
                'internalType': 'uint256[]',
                'name': 'contractType',
                'type': 'uint256[]'
            },
            {
                'internalType': 'address[]',
                'name': 'recipient',
                'type': 'address[]'
            },
            {
                'internalType': 'uint256[]',
                'name': 'amount',
                'type': 'uint256[]'
            },
            {
                'internalType': 'uint256[]',
                'name': 'tokenId',
                'type': 'uint256[]'
            }
        ],
        'name': 'transferBatch',
        'outputs': [],
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'stateMutability': 'payable',
        'type': 'receive'
    }
];
export const bytecode = '0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b610a2e8061007d6000396000f3fe6080604052600436106100595760003560e01c8063150b7a0214610065578063715018a61461009b5780638da5cb5b146100b2578063966f197c146100d4578063f2881e21146100e7578063f2fde38b146100fa57610060565b3661006057005b600080fd5b34801561007157600080fd5b5061008561008036600461068e565b61011a565b60405161009291906108a6565b60405180910390f35b3480156100a757600080fd5b506100b061012a565b005b3480156100be57600080fd5b506100c76101bc565b604051610092919061085f565b6100b06100e2366004610793565b6101cb565b6100b06100f5366004610746565b61040a565b34801561010657600080fd5b506100b061011536600461066d565b6104c0565b630a85bd0160e11b949350505050565b610132610580565b6001600160a01b03166101436101bc565b6001600160a01b0316146101725760405162461bcd60e51b815260040161016990610938565b60405180910390fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b83518551146101d957600080fd5b83518351146101e757600080fd5b81518351146101f557600080fd5b815181511461020357600080fd5b60005b85518110156104025784818151811061022f57634e487b7160e01b600052603260045260246000fd5b60200260200101516001141561031b5785818151811061025f57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b031663b88d4fde3086848151811061029657634e487b7160e01b600052603260045260246000fd5b60200260200101518585815181106102be57634e487b7160e01b600052603260045260246000fd5b60200260200101516040518463ffffffff1660e01b81526004016102e493929190610873565b600060405180830381600087803b1580156102fe57600080fd5b505af1158015610312573d6000803e3d6000fd5b505050506103f0565b84818151811061033b57634e487b7160e01b600052603260045260246000fd5b6020026020010151600314156103d85783818151811061036b57634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166108fc84838151811061039f57634e487b7160e01b600052603260045260246000fd5b60200260200101519081150290604051600060405180830381858888f193505050501580156103d2573d6000803e3d6000fd5b506103f0565b60405162461bcd60e51b8152600401610169906108bb565b806103fa816109bb565b915050610206565b505050505050565b836001141561047a57604051635c46a7ef60e11b81526001600160a01b0386169063b88d4fde9061044390309087908690600401610873565b600060405180830381600087803b15801561045d57600080fd5b505af1158015610471573d6000803e3d6000fd5b505050506104b9565b83600314156103d8576040516001600160a01b0384169083156108fc029084906000818181858888f19350505050158015610402573d6000803e3d6000fd5b5050505050565b6104c8610580565b6001600160a01b03166104d96101bc565b6001600160a01b0316146104ff5760405162461bcd60e51b815260040161016990610938565b6001600160a01b0381166105255760405162461bcd60e51b8152600401610169906108f2565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b80356001600160a01b038116811461059b57600080fd5b919050565b600082601f8301126105b0578081fd5b813560206105c56105c083610997565b61096d565b82815281810190858301838502870184018810156105e1578586fd5b855b85811015610606576105f482610584565b845292840192908401906001016105e3565b5090979650505050505050565b600082601f830112610623578081fd5b813560206106336105c083610997565b828152818101908583018385028701840188101561064f578586fd5b855b8581101561060657813584529284019290840190600101610651565b60006020828403121561067e578081fd5b61068782610584565b9392505050565b600080600080608085870312156106a3578283fd5b6106ac85610584565b935060206106bb818701610584565b935060408601359250606086013567ffffffffffffffff808211156106de578384fd5b818801915088601f8301126106f1578384fd5b813581811115610703576107036109e2565b610715601f8201601f1916850161096d565b9150808252898482850101111561072a578485fd5b8084840185840137810190920192909252939692955090935050565b600080600080600060a0868803121561075d578081fd5b61076686610584565b94506020860135935061077b60408701610584565b94979396509394606081013594506080013592915050565b600080600080600060a086880312156107aa578081fd5b853567ffffffffffffffff808211156107c1578283fd5b6107cd89838a016105a0565b965060208801359150808211156107e2578283fd5b6107ee89838a01610613565b95506040880135915080821115610803578283fd5b61080f89838a016105a0565b94506060880135915080821115610824578283fd5b61083089838a01610613565b93506080880135915080821115610845578283fd5b5061085288828901610613565b9150509295509295909350565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260806060820181905260009082015260a00190565b6001600160e01b031991909116815260200190565b60208082526019908201527f556e737570706f7274656420636f6e7472616374207479706500000000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60405181810167ffffffffffffffff8111828210171561098f5761098f6109e2565b604052919050565b600067ffffffffffffffff8211156109b1576109b16109e2565b5060209081020190565b60006000198214156109db57634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fdfea26469706673582212206aa0fdd7e484a3afe2a7897f9294948e6b2cd3c2f87e545de1390efacc0781aa64736f6c63430008000033';