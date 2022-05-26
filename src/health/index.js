'use strict';
const Web3 = require("web3")

const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/f060b10184b644e5a2967f280464b88d"))
//var total;
// Import the web3js library, set Infura as our provider

// Set the ERC-20 balanceOf() ABI
const balanceOfABI = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
];

const tokenContract = "0x16cc8367055ae7e9157dbcb9d86fd6ce82522b31"
const tokenHolder = "0xca978e7f14b6fb68deb9f3f894cd34c2e3e3b074"
const tokenHolder2 = "0xe2fe530c047f2d85298b07d9333c05737f1435fb"
const tokenHolder3 = "0xc8ab8bf5913412e08cb08f12df1e57b0c9a1ef5b"


// Define the ERC-20 token contract
const contract = new web3.eth.Contract(balanceOfABI, tokenContract)

async function getTokenBalance() {
    // Execute balanceOf() to retrieve the token balance
    const result = await contract.methods.balanceOf(tokenHolder).call(); 
    const result2 = await contract.methods.balanceOf(tokenHolder2).call(); 
    const result3 = await contract.methods.balanceOf(tokenHolder3).call(); 
    // Convert the value from Wei to Ether
    const formattedResult = +web3.utils.fromWei(result, "ether"); 
    const formattedResult2 = +web3.utils.fromWei(result2, "ether"); 
    const formattedResult3 = +web3.utils.fromWei(result3, "ether"); 

    console.log('formattedResult', formattedResult);
    console.log('formattedResult3', formattedResult3);
    console.log('formattedResult2', formattedResult2);

    return formattedResult+formattedResult2+formattedResult3
}




exports.status = async (req, res, next) => {
    const total = await getTokenBalance();
    console.log(`total=${total} TS=${Date.now()}`);
    
    res.status(200).json(500000000-total);
};
