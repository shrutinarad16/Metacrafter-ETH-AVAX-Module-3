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


























