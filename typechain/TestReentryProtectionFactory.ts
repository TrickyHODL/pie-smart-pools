/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TestReentryProtection } from "./TestReentryProtection";

export class TestReentryProtectionFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<TestReentryProtection> {
    return super.deploy() as Promise<TestReentryProtection>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): TestReentryProtection {
    return super.attach(address) as TestReentryProtection;
  }
  connect(signer: Signer): TestReentryProtectionFactory {
    return super.connect(signer) as TestReentryProtectionFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestReentryProtection {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestReentryProtection;
  }
}

const _abi = [
  {
    inputs: [],
    name: "reenter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "rpSlot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "test",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101c1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063830df85214610046578063a0fe97e314610060578063f8a8fd6d1461006a575b600080fd5b61004e610072565b60408051918252519081900360200190f35b61006861008d565b005b6100686100f2565b60405180602261016a82396022019050604051809103902081565b61009561011a565b8054600101905560006100a661011a565b5490506100b161011a565b5481146100ef5760405162461bcd60e51b815260040180806020018281038252602d81526020018061013d602d913960400191505060405180910390fd5b50565b6100fa61011a565b80546001019055600061010b61011a565b54905061011661008d565b6100b15b600080604051808061016a60229139604051908190036022019020939250505056fe5265656e74727950726f74656374696f6e2e6e6f5265656e7472793a207265656e7472792064657465637465645265656e74727950726f74656374696f6e2e73746f726167652e6c6f636174696f6ea2646970667358221220c29b0ef8236fe604b0a50144876c17dbb41dd97e3bc79cd801e86c0af00680f564736f6c63430006040033";
