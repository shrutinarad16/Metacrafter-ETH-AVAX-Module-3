# Metacrafter-ETH-AVAX-Module-3
This is 3rd project of Metacrafter, Etherium+AVAX (Intermediate)

## Commands used in this project in terminals
1) Use to install Hardhat
   '''
   npm install --save-dev "hardhat@^2.16.1" "@nomicfoundation/hardhat-toolbox@^2.0.0"
   '''
2) Check version of hardhat and start the project by creating javascript file
   '''
   npx hardhat
   '''
3) Now check, Hardhat is successfully installed or not by placing same code
   '''
   npx hardhat
   '''
4) If this is showing error: HH801 the try this command, this will successfully install hardhat
   '''
   npm install --save-dev "@nomicfoundation/hardhat-network-helpers@^1.0.0" "@nomicfoundation/hardhat-chai-matchers@^1.0.0" "@nomiclabs/hardhat-ethers@^2.0.0" "@nomiclabs/hardhat-etherscan@^3.0.0" "@types/chai@^4.2.0" "@types/mocha@^9.1.0" "@typechain/ethers-v5@^10.1.0" "@typechain/hardhat@^6.1.2" "chai@^4.2.0" "hardhat-gas-reporter@^1.0.8" "solidity-coverage@^0.7.21" "ts-node@>=8.0.0" "typechain@^8.1.0" "typescript@>=4.5.0"
   '''
5) clear the hardhat, it has arctifact file
   '''
   npx hardhat clean
   '''
6) Compile the hardhat
   '''
   npx hardhat compile
   '''
7) Get the account info and private keys
   '''
   npx hardhat node
   '''
8) Install remix
   '''
   npm install -g @remix-project/remixd
   '''
9) Set the environment and connect local host to remix
    '''
   remixd -s ./ --remix-ide https://remix.ethereum.org
   '''
### Follow the procedures after this command
1) Now, click on site present on terminal after completing these processes one by one
2) This will get you in remix ide, now connect it with local host by connecting metamask
3) Change the environment to injected provider by going to deploy option
4) This will bring you with your account of metamask
5) Now you are ready with transfer, burn and mint your tokens from one account to another

## Code Explaination
### MyToken.sol File
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyToken {
    string public name = "My Token";
    string public symbol = "MT";
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event Mint(address indexed to, uint256 value);
    event Burn(address indexed from, uint256 value);

    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor(uint256 initialSupply) {
        totalSupply = initialSupply;
        balanceOf[msg.sender] = initialSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 value) external returns (bool) {
        require(balanceOf[msg.sender] >= value, "Insufficient balance");

        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;

        emit Transfer(msg.sender, to, value);
        return true;
    }

    function approve(address spender, uint256 value) external returns (bool) {
        allowance[msg.sender][spender] = value;

        emit Approval(msg.sender, spender, value);
        return true;
    }

    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external returns (bool) {
        require(balanceOf[from] >= value, "Insufficient balance");
        require(allowance[from][msg.sender] >= value, "Insufficient allowance");

        balanceOf[from] -= value;
        balanceOf[to] += value;
        allowance[from][msg.sender] -= value;

        emit Transfer(from, to, value);
        return true;
    }

    function mint(address to, uint256 value) external onlyOwner {
        totalSupply += value;
        balanceOf[to] += value;

        emit Mint(to, value);
    }

    function burn(uint256 value) external {
        require(balanceOf[msg.sender] >= value, "Insufficient balance");

        balanceOf[msg.sender] -= value;
        totalSupply -= value;

        emit Burn(msg.sender, value);
    }
}

### Line by line explaination
#### Code
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract MyToken {

This Contract name as MyToken

#### Code
string public name = "My Token";
string public symbol = "MT";
uint256 public totalSupply;

Set String Public Variable name as MY Token and symbol as MT.
Set unsigned integer whixh public variable totalSupply.

#### Code
mapping(address => uint256) public balanceOf;
mapping(address => mapping(address => uint256)) public allowance;

This will map address to balanceOf and allowamce.
In the first line, it issimply mapping address with their token balance.
In second line, mapping is done with another mapping, which maps the allowances.

#### Code
event Transfer(address indexed from, address indexed to, uint256 value);
event Approval(address indexed owner, address indexed spender, uint256 value);
event Mint(address indexed to, uint256 value);
event Burn(address indexed from, uint256 value);

1) **Transfer**: Transfer Token from one account to another.
2) **Approval**: When allowance for spending tokens get approved then it will be emitted.
3) **Mint**: When new tokens are minted and added to total supply, then it will be emitted.
4) **Burn**: Deduction has done.

#### Code
address public owner;
modifier onlyOwner() {
    require(msg.sender == owner, "Only the owner can call this function");
    _;
}

Set public variable "owner" which represent address of owner.
Set Modifier name as onlyOwner which having a condition which depicts if msg sender is owner then and then only this modifir work.

**modifier:** The keyword that modifies the behaviour of function. In this example, modifier restrict this transaction only forr owner.

#### Code
constructor(uint256 initialSupply) {
    totalSupply = initialSupply;
    balanceOf[msg.sender] = initialSupply;
    owner = msg.sender;
}

Constructor is generated which takes paramaeter as initialSupply from user.
It sets the totalSupply to the initialSupply, assigns the initialSupply to the balanceOf the contract deployer (msg.sender), and sets the owner to the contract deployer.

Constructor: Function that initializes contract.

#### Code
function transfer(address to, uint256 value) external returns (bool) {
    require(balanceOf[msg.sender] >= value, "Insufficient balance");

    balanceOf[msg.sender] -= value;
    balanceOf[to] += value;

    emit Transfer(msg.sender, to, value);
    return true;
}

Function Transfer, transfers tokens to another addresswhich specifies a condition which checks sufficient balance. 
If it has sufficient balance then amount will be deducted and added, otherwise it will shows error.

#### Code
function approve(address spender, uint256 value) external returns (bool) {
    allowance[msg.sender][spender] = value;

    emit Approval(msg.sender, spender, value);
    return true;
}

Approve function, allows approval for another address to spend their tokens.

#### Code
function transferFrom(address from, address to, uint256 value) external returns (bool) {
    require(balanceOf[from] >= value, "Insufficient balance");
    require(allowance[from][msg.sender] >= value, "Insufficient allowance");

    balanceOf[from] -= value;
    balanceOf[to] += value;
    allowance[from][msg.sender] -= value;

    emit Transfer(from, to, value);
    return true;
}

Function TransferFrom, approved tkens transferred from sender's account to receiver account.
It has two conditions which need to satisfies: Sufficient Balance and sufficient allowance.
If both the conditions get approved then this will work as balance deduction from sender's account and addition of tokens in receiver's account.
If the transactions have done successfully, it will emit as "TRUE".

#### Code
function mint(address to, uint256 value) external onlyOwner {
    totalSupply += value;
    balanceOf[to] += value;

    emit Mint(to, value);
}

Mint Function, creates new tokens which will add or deduct from specific address.

#### Code
function burn(uint256 value) external {
    require(balanceOf[msg.sender] >= value, "Insufficient balance");

    balanceOf[msg.sender] -= value;
    totalSupply -= value;

    emit Burn(msg.sender, value);
}

Burn Function, this function burn (deduct) tokens.
It has condition which checks the sufficient balance or not. If this condition becomes true then amount will be deducted.





























