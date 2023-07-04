/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  BoardEligibilityVerifier,
  BoardEligibilityVerifierInterface,
} from "../BoardEligibilityVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[1]",
        name: "input",
        type: "uint256[1]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610e2f806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806343753b4d14610030575b600080fd5b61012c600480360361012081101561004757600080fd5b6040805180820182529183019291818301918390600290839083908082843760009201829052506040805180820190915293969594608081019493509150600290835b828210156100c8576040805180820182529080840286019060029083908390808284376000920191909152505050815260019091019060200161008a565b5050604080518082018252939695948181019493509150600290839083908082843760009201919091525050604080516020818101909252929594938181019392509060019083908390808284376000920191909152509194506101409350505050565b604080519115158252519081900360200190f35b600061014a610cce565b6040805180820182528751815260208089015181830152908352815160808101835287515181840190815288518301516060808401919091529082528351808501855289840180515182525184015181850152828401528483019190915282518084018452875181528783015181840152848401528251600180825281850190945290929091828101908036833701905050905060005b600181101561021a578481600181106101f657fe5b602002015182828151811061020757fe5b60209081029190910101526001016101e1565b506102258183610243565b6102345760019250505061023b565b6000925050505b949350505050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000161026e610d00565b61027661041f565b90508060800151518551600101146102ca576040805162461bcd60e51b81526020600482015260126024820152711d995c9a599a595c8b5898590b5a5b9c1d5d60721b604482015290519081900360640190fd5b6102d2610d47565b6040518060400160405280600081526020016000815250905060005b86518110156103a8578387828151811061030457fe5b60200260200101511061035e576040805162461bcd60e51b815260206004820152601f60248201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c6400604482015290519081900360640190fd5b61039e826103998560800151846001018151811061037857fe5b60200260200101518a858151811061038c57fe5b602002602001015161072d565b6107c2565b91506001016102ee565b506103cb8183608001516000815181106103be57fe5b60200260200101516107c2565b90506104016103dd8660000151610853565b8660200151846000015185602001518587604001518b6040015189606001516108df565b6104115760019350505050610419565b600093505050505b92915050565b610427610d00565b6040805180820182527f2d4d9aa7e302d9df41749d5507949d05dbea33fbb16c643b22f599a2be6df2e281527f14bedd503c37ceb061d8ec60209fe345ce89830a19230301f076caff004d19266020808301919091529083528151608080820184527f0967032fcbf776d1afc985f88877f182d38480a653f2decaa9794cbc3bf3060c8285019081527f0e187847ad4c798374d0d6732bf501847dd68bc0e071241e0213bc7fc13db7ab606080850191909152908352845180860186527f304cfbd1e08a704a99f5e847d93f8c3caafddec46b7a0d379da69a4d112346a781527f1739c1b1a457a8c7313123d24d2f9192f896b7c63eea05a9d57f06547ad0cec8818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186018181527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed838601819052908352865180880188527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b8082527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa8289018190528589019290925289890194909452875194850188528488019283528486019190915290835285518087018752918252818501528184015281850152825160028082529181019093529082015b610635610d47565b81526020019060019003908161062d57505060808201908152604080518082019091527f1c5319a5ae36944f35d8445dd95272338229b14cfef9d04b540a42a82703497781527f101f5042851251704dfd9462ea4726b542a7ea9d24a5d58fc413be0926d0fe136020820152905180516000906106ae57fe5b602002602001018190525060405180604001604052807f0d5a3a874d90195f887766f9b2c69100d3354af6b34e95bc20854b874aa4ac8081526020017f14f7ff8d3ec8e78315b2d7e73bd36c332415b56d1069455315edd9bbe73c38d4815250816080015160018151811061071f57fe5b602002602001018190525090565b610735610d47565b61073d610d61565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa905080801561077057610772565bfe5b50806107ba576040805162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b604482015290519081900360640190fd5b505092915050565b6107ca610d47565b6107d2610d7f565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa90508080156107705750806107ba576040805162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5859190b59985a5b195960721b604482015290519081900360640190fd5b61085b610d47565b81517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd479015801561088e57506020830151155b156108ae57505060408051808201909152600080825260208201526108da565b604051806040016040528084600001518152602001828560200151816108d057fe5b0683038152509150505b919050565b60408051600480825260a0820190925260009160609190816020015b610903610d47565b8152602001906001900390816108fb57505060408051600480825260a0820190925291925060609190602082015b610939610d9d565b8152602001906001900390816109315790505090508a8260008151811061095c57fe5b6020026020010181905250888260018151811061097557fe5b6020026020010181905250868260028151811061098e57fe5b602002602001018190525084826003815181106109a757fe5b602002602001018190525089816000815181106109c057fe5b602002602001018190525087816001815181106109d957fe5b602002602001018190525085816002815181106109f257fe5b60200260200101819052508381600381518110610a0b57fe5b6020026020010181905250610a208282610a2f565b9b9a5050505050505050505050565b60008151835114610a80576040805162461bcd60e51b81526020600482015260166024820152751c185a5c9a5b99cb5b195b99dd1a1ccb59985a5b195960521b604482015290519081900360640190fd5b82516006810260608167ffffffffffffffff81118015610a9f57600080fd5b50604051908082528060200260200182016040528015610ac9578160200160208202803683370190505b50905060005b83811015610c4e57868181518110610ae357fe5b602002602001015160000151828260060260000181518110610b0157fe5b602002602001018181525050868181518110610b1957fe5b602002602001015160200151828260060260010181518110610b3757fe5b602002602001018181525050858181518110610b4f57fe5b602090810291909101015151518251839060026006850201908110610b7057fe5b602002602001018181525050858181518110610b8857fe5b60209081029190910101515160016020020151828260060260030181518110610bad57fe5b602002602001018181525050858181518110610bc557fe5b602002602001015160200151600060028110610bdd57fe5b6020020151828260060260040181518110610bf457fe5b602002602001018181525050858181518110610c0c57fe5b602002602001015160200151600160028110610c2457fe5b6020020151828260060260050181518110610c3b57fe5b6020908102919091010152600101610acf565b50610c57610dbd565b6000602082602086026020860160086107d05a03fa9050808015610770575080610cc0576040805162461bcd60e51b81526020600482015260156024820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b604482015290519081900360640190fd5b505115159695505050505050565b6040518060600160405280610ce1610d47565b8152602001610cee610d9d565b8152602001610cfb610d47565b905290565b6040518060a00160405280610d13610d47565b8152602001610d20610d9d565b8152602001610d2d610d9d565b8152602001610d3a610d9d565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b6040518060400160405280610db0610ddb565b8152602001610cfb610ddb565b60405180602001604052806001906020820280368337509192915050565b6040518060400160405280600290602082028036833750919291505056fea2646970667358221220bf31b198aef0c3dd71f21d9c7cd8933c2f08a526cc190186ed83dcd17849f92b64736f6c634300060c0033";

type BoardEligibilityVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoardEligibilityVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BoardEligibilityVerifier__factory extends ContractFactory {
  constructor(...args: BoardEligibilityVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      BoardEligibilityVerifier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): BoardEligibilityVerifier__factory {
    return super.connect(runner) as BoardEligibilityVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoardEligibilityVerifierInterface {
    return new Interface(_abi) as BoardEligibilityVerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BoardEligibilityVerifier {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as BoardEligibilityVerifier;
  }
}