const stakeabi = '[ { "inputs": [], "name": "claimRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "contract IERC20", "name": "_agtToken", "type": "address" }, { "internalType": "contract IERC20", "name": "_usdtToken", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "address", "name": "token", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "recipient", "type": "address" } ], "name": "Recovered", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "tokenAddress", "type": "address" }, { "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }, { "internalType": "address", "name": "recipient", "type": "address" } ], "name": "recoverERC20", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "previousRevenue", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newRevenue", "type": "uint256" } ], "name": "RevenueUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "previousRewardPerSec", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newRewardPerSec", "type": "uint256" } ], "name": "RewardPerSecUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "previousRewardPerSecondPerToken", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newRewardPerSecondPerToken", "type": "uint256" } ], "name": "RewardPerSecondPerTokenUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "reward", "type": "uint256" } ], "name": "RewardsClaimed", "type": "event" }, { "inputs": [ { "internalType": "uint256", "name": "startTime", "type": "uint256" }, { "internalType": "uint256", "name": "endTime", "type": "uint256" } ], "name": "setStakingPeriod", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "stake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Staked", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "unstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "Unstaked", "type": "event" }, { "inputs": [ { "internalType": "uint256", "name": "_newRewardPerSecondPerToken", "type": "uint256" } ], "name": "updateRewardPerSecondPerToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "stakedAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "previousReward", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newReward", "type": "uint256" } ], "name": "userRewardUpdated", "type": "event" }, { "inputs": [], "name": "agtToken", "outputs": [ { "internalType": "contract IERC20", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "staker", "type": "address" } ], "name": "calculateReward", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "claimedRewards", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "hasStaked", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "lastClaimedTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "lastUpdateTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "revenueInUSDT", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rewardPerSecondPerToken", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "rewards", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SECONDS_IN_A_MONTH", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "stakedBalance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "stakedTokens", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "stakingEndTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "stakingStartTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalRewardsPaid", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalStaked", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "unclaimedRewards", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "unstakedTime", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "usdtToken", "outputs": [ { "internalType": "contract IERC20", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ]';
const tokenabi = '[ { "inputs": [], "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "uint256", "name": "amountCurrency", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountTokens", "type": "uint256" } ], "name": "AutoLiquify", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "internalType": "bool", "name": "enabled", "type": "bool" } ], "name": "ContractSwapEnabledUpdated", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DEAD", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_hasLiqBeenAdded", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_ratios", "outputs": [ { "internalType": "uint16", "name": "liquidity", "type": "uint16" }, { "internalType": "uint16", "name": "marketing", "type": "uint16" }, { "internalType": "uint16", "name": "totalSwap", "type": "uint16" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_taxRates", "outputs": [ { "internalType": "uint16", "name": "buyFee", "type": "uint16" }, { "internalType": "uint16", "name": "sellFee", "type": "uint16" }, { "internalType": "uint16", "name": "transferFee", "type": "uint16" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "approveContractContingency", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "contractSwapEnabled", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "dexRouter", "outputs": [ { "internalType": "contract IRouter02", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "enableTrading", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "router", "type": "address" }, { "internalType": "address", "name": "presale", "type": "address" } ], "name": "excludePresaleAddresses", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getCirculatingSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getMaxWallet", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getOwner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "priceImpactInHundreds", "type": "uint256" } ], "name": "getTokenAmountAtPriceImpact", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "isExcludedFromFees", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "isExcludedFromLimits", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "isExcludedFromProtection", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "launchStamp", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lockTaxes", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "lpPair", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "marketingWallet", "outputs": [ { "internalType": "address payable", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxBuyTaxes", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxRoundtripTax", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxSellTaxes", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxTransferTaxes", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "accounts", "type": "address[]" }, { "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" } ], "name": "multiSendTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "operator", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "originalDeployer", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "piContractSwapsEnabled", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "piSwapPercent", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "removeSniper", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOriginalDeployer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "swapEnabled", "type": "bool" }, { "internalType": "bool", "name": "priceImpactSwapEnabled", "type": "bool" } ], "name": "setContractSwapEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bool", "name": "enabled", "type": "bool" } ], "name": "setExcludedFromFees", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bool", "name": "enabled", "type": "bool" } ], "name": "setExcludedFromLimits", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bool", "name": "enabled", "type": "bool" } ], "name": "setExcludedFromProtection", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "initializer", "type": "address" } ], "name": "setInitializer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "pair", "type": "address" }, { "internalType": "bool", "name": "enabled", "type": "bool" } ], "name": "setLpPair", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "percent", "type": "uint256" }, { "internalType": "uint256", "name": "divisor", "type": "uint256" } ], "name": "setMaxWalletSize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newRouter", "type": "address" } ], "name": "setNewRouter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOperator", "type": "address" } ], "name": "setOperator", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "priceImpactSwapPercent", "type": "uint256" } ], "name": "setPriceImpactSwapAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "bool", "name": "_antiSnipe", "type": "bool" }, { "internalType": "bool", "name": "_antiBlock", "type": "bool" } ], "name": "setProtectionSettings", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint16", "name": "liquidity", "type": "uint16" }, { "internalType": "uint16", "name": "marketing", "type": "uint16" } ], "name": "setRatios", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "thresholdPercent", "type": "uint256" }, { "internalType": "uint256", "name": "thresholdDivisor", "type": "uint256" }, { "internalType": "uint256", "name": "amountPercent", "type": "uint256" }, { "internalType": "uint256", "name": "amountDivisor", "type": "uint256" } ], "name": "setSwapSettings", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint16", "name": "buyFee", "type": "uint16" }, { "internalType": "uint16", "name": "sellFee", "type": "uint16" }, { "internalType": "uint16", "name": "transferFee", "type": "uint16" } ], "name": "setTaxes", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "marketing", "type": "address" } ], "name": "setWallets", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "swapAmount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "swapThreshold", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sweepContingency", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "token", "type": "address" } ], "name": "sweepExternalTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "taxesAreLocked", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "tradingEnabled", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "newOwner", "type": "address" } ], "name": "transferOwner", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" } ]';
// const { ethers } = require("ethers");

// This returns the provider, or null if it wasn't detected.
// const provider = await detectEthereumProvider();
// const provider = new ethers.getDefaultProvider()
const provider = new ethers.providers.Web3Provider(window.ethereum);
// const provider = await detectEthereumProvider();
var accounts = window.ethereum.request({
    method: 'eth_accounts'
});
// const signer = provider.getSigner();
const signer = provider.getSigner();
const abi = stakeabi;
const contractAddress = "0x7717D8ac450491db645D6B33987F6DE3144CAb93";
const tokenAddress = "0xA9E22e82d5a497C764a9FCD566Bc8DF933b74fBe";

// ID DECLARATION 
const connectText = document.getElementById("connectText");
const approveBtn = document.getElementById("approve-btn");
const connectBtn = document.getElementById("connect-btn");
// const connectBtn2 = document.getElementById("connect-btn2");
const harvestbtn = document.getElementById("harvest-btn");
const unstakebtn = document.getElementById("unStake-btn");
const stakeBtn = document.getElementById("stake-btn");
const stakeBal = document.getElementById("stakeBal");
const pendingRewards = document.getElementById("pendingRewards");
const accbal = document.getElementById("acc-bal");

// WEB # FUNCTIONS 
async function getStakingContract() {
    const stakingContract = new ethers.Contract(contractAddress,abi,signer);
    return stakingContract;
}
async function approve(contractAddress, amount, options) {
    // Get the token instance
    const tokenContract = new ethers.Contract(tokenAddress,tokenabi,signer);
    await tokenContract.approve(contractAddress, amount, options);
}
async function stake(amount) {
    const stakingContract = await getStakingContract();

    // Get the token instance
    // const tokenContract = new ethers.Contract(tokenAddress, tokenabi, signer);

    // // Approve transfer of tokens from user's wallet to staking contract
    // await tokenContract.approve(contractAddress, amount);

    // Stake tokens
    await stakingContract.stake(amount);

    // Staking successful
}

// Balance
const balanceOf = async address=>{
    // Get the token instance
    const tokenContract = new ethers.Contract(tokenAddress,tokenabi,signer);
    return await tokenContract.balanceOf(address);
}
;

// Perform unstaking
async function unstake() {
    const stakingContract = await getStakingContract();
    await stakingContract.unstake();
    // Unstaking successful
}
// async function unstake(amount) {
//       const stakingContract = await getStakingContract();
//       await stakingContract.unstake(amount);
//       // Unstaking successful
//     }

// Claim rewards
async function claimReward() {
    const stakingContract = await getStakingContract();
    await stakingContract.claimReward();
    // Claiming rewards successful
}

// Get the total rewards
async function getTotalRewards() {
    const stakingContract = await getStakingContract();
    const rewards = await stakingContract.claimRewards();
    return rewards;
}

// Define the function to call calculateReward
async function getReward(address) {
    const stakingContract = await getStakingContract();
    const rewards = await stakingContract.calculateReward(address);
    return rewards;
}

// Export the getStakedBalance function
const getStakedBalance = async address=>{
    const stakingContract = await getStakingContract();
    return await stakingContract.stakedBalance(address);
}
;

// call balanceOf function and retrieve balance for given account
async function getTokenBalance(account) {
    // const provider = new Web3Provider(window.ethereum);
    const tokenContract = new ethers.Contract(tokenAddress,tokenabi,provider);
    const balance = await tokenContract.balanceOf(account);
    return balance;
}

// Calling the functions
// const accounts = window.ethereum.request({ method: 'eth_requestAccounts' });

// const connectWlt = async (e) => {
//   console.log("wow");
//   return;
// }

// const connectWlt = async (e) => {
//   console.log("woww")
//   e.preventDefault();
//   var accounts = await window.ethereum.request({ method: 'eth_accounts' });

//   if(provider) {
//       try{
//           // Check if already connected
//           if (window.ethereum && window.ethereum.selectedAddress) {
//             console.log(accounts)
//             // connectText.textContent = accounts;
//             connectText.innerHTML= accounts[0]
//           alert("Your MetaMask account is already connected");

//           // connectText2.textContent = accounts[0];
//           // console.log(connectText2.textContent)

//           return;
//           }
//           const updatedAcc = await window.ethereum.request({method: "eth_requestAccounts"});
//           connectText.textContent = updatedAcc[0];
//           accounts = updatedAcc;
//           console.log(accounts)

//       } catch(err){
//           console.log(err)
//       }
//       window.location.reload();
//   } else {
//       alert("Install MetaMask");

//   }

// }

// const connectWlt = async () => {
//   try {
//     // Check if MetaMask is installed
//     // if (!window.ethereum) {
//     //   if(/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
//     //     window.location.href = "https://apps.apple.com/us/app/metamask/id1438144202";
//     //   } else if (/Android/i.test(navigator.userAgent)) {
//     //     window.location.href = "https://play.google.com/store/apps/details?id=io.metamask&hl=en_US";
//     //   } else {
//     //     window.location.href = "https://metamask.io/download.html";
//     //   }
//     //   return;
//     // }
//     if(!window.ethereum){
//       window.location.href = "https://metamask.io/download.html";
//     }

//     // Check if already connected
//     if (window.ethereum && window.ethereum.selectedAddress) {
//       const accounts = await window.ethereum.request({ method: 'eth_accounts' });
//       connectText.innerHTML = accounts[0];
//       alert("Your MetaMask account is already connected");
//       return;
//     }

//     // Request access to user's MetaMask wallet
//     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

//     // Display user's wallet address
//     const walletAddress = accounts[0];
//     connectText.innerHTML = walletAddress;

//     // Provide link to open MetaMask Mobile app or to app store
//     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//     if (isMobile) {
//       const deeplink = `metamask://open-url?url=ethereum:${walletAddress}`;
//       connectLink.href = deeplink;
//     } else {
//       connectLink.href = "https://metamask.io/download.html";
//     }

//     // Reload the page
//     location.reload();

//   } catch (error) {
//     console.log(error);
//     alert("Failed to connect to MetaMask");
//   }
// };

// const connectWlt = async () => {
//   try {
//     // Check if MetaMask is installed
//     if (!window.ethereum) {
//       if(/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
//         window.location.href = "https://apps.apple.com/us/app/metamask/id1438144202";
//       } else if (/Android/i.test(navigator.userAgent)) {
//         window.location.href = "https://play.google.com/store/apps/details?id=io.metamask&hl=en_US";
//       } else {
//         window.location.href = "https://metamask.io/download.html";
//       }
//       return;
//     }

//     // Request access to user's MetaMask wallet
//     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

//     // Display user's wallet address
//     const walletAddress = accounts[0];
//     connectText.innerHTML = walletAddress;

//     // Provide link to open MetaMask Mobile app or to app store
//     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//     if (isMobile) {
//       const deeplink = `metamask://open-url?url=ethereum:${walletAddress}`;
//       connectLink.href = deeplink;
//     } else {
//       connectLink.href = "https://metamask.io/download.html";
//     }

//   } catch (error) {
//     console.log(error);
//     alert("Failed to connect to MetaMask");
//   }
// };

const connectWlt = async e=>{
    e.preventDefault();
    var accounts = await window.ethereum.request({
        method: 'eth_accounts'
    });
    if (provider) {
        try {
            // Check if already connected
            if (window.ethereum && window.ethereum.selectedAddress) {
                console.log(accounts);
                // connectText.textContent = accounts;
                connectText.innerHTML = accounts[0];
                alert("Your MetaMask account is already connected");

                // connectText2.textContent = accounts[0];
                // console.log(connectText2.textContent)

                return;
            }
            const updatedAcc = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            connectText.textContent = updatedAcc[0];
            accounts = updatedAcc;
            console.log(accounts);
        } catch (err) {
            console.log(err);
        }
        window.location.reload();
    } else {
        alert("Install MetaMask");
    }
}
;
const inputt = document.getElementById("amt-input");
// const inputValue = inputt.value;

const unstaking = async e=>{
    try {
        await unstake();
    } catch (err) {
        alert(err);
        console.log(err);
    }
}
;

// const approving = async (e) => {
//   try{
//     const amstr = inputt.value;
//     const amount = +amstr
//     if(!amount) {
//       alert("Please enter a valid amount.");
//       return; // stop execution of the function
//     }
//     await approve(contractAddress, amount)
//   }catch(err){
//     console.log(err)
//   }

// }

// const approving = async (e) => {
//   try{
//     const amstr = inputt.value;
//     const amount = +amstr * 10**18; // multiply the input amount by 10^18
//     if(!amount) {
//       alert("Please enter a valid amount.");
//       return; // stop execution of the function
//     }
//     await approve(contractAddress, amount)
//   }catch(err){
//     console.log(err)
//   }
// }

// const approving = async (e) => {
//   try {
//     const amstr = inputt.value;
//     const amount = BigInt(amstr) * BigInt(10**18); // multiply the input amount by 10^18 using BigInt
//     if(Number.isNaN(amount) || amount === 0n) {
//       alert("Please enter a valid amount.");
//       return; // stop execution of the function
//     }
//     const tokenContract = new ethers.Contract(tokenAddress, tokenabi, signer);
//     await tokenContract.approve(contractAddress, amount);
//   } catch(err) {
//     console.log(err)
//   }
// }  
const approving = async e=>{
    try {
        const amstr = inputt.value;
        if (!amstr) {
            alert("Please enter a valid amount.");
            return;
            // stop execution of the function
        }

        const amount = ethers.utils.parseUnits(amstr, 18);
        // parse the input amount to the base unit of the token
        const tokenContract = new ethers.Contract(tokenAddress,tokenabi,signer);
        const tx = await tokenContract.approve(contractAddress, amount, {gasLimit: 66112});
        await tx.wait();
        console.log('Approved successfully!');
    } catch (err) {
        console.log(err);
    }
}
;
const harvesting = async e=>{
    try {
        await getTotalRewards();
    } catch (err) {
        alert('No Rewards to Claim');
        console.log(err);
    }
}
;
const staking = async e=>{
    const accounts = await window.ethereum.request({
        method: 'eth_accounts'
    });
    try {
        const amstr = inputt.value;
        // const amount = BigInt(Math.floor(+amstr * 10 ** 18));
        // const amount = BigInt(Math.floor(Number(amstr) * 10**18));
        const amount = +amstr;
        if (!amount) {
            alert("Please enter an amount.");
            return;
        } else {
            await stake(amount);
            window.location.reload();
        }
    } catch (err) {
        // alert(err)
        console.log(err);
    }
    window.location.reload();
}
;
async function fetchData() {
    if (window.ethereum) {
        try {
            await window.ethereum.enable();
            const accounts = await window.ethereum.request({
                method: 'eth_accounts'
            });
            const sbal = await getStakedBalance(accounts[0]);
            const sbalNum = Number(sbal.toString()) / 10 ** 18;
            if (!sbalNum) {
                stakeBal.textContent = '0.000';
            } else {
                stakeBal.textContent = sbalNum;
            }
            const preward = await getReward(accounts[0]);
            const conReward = Number(preward.toString()) / 10 ** 18;
            pendingRewards.textContent = conReward;
            const balanceInWei = await balanceOf(accounts[0]);
            const balanceInEther = ethers.utils.formatEther(balanceInWei);
            accbal.textContent = balanceInEther;
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log('No Ethereum browser detected');
    }
}
window.addEventListener('load', async function() {
    if (window.ethereum) {
        try {
            // Check if already connected
            if (window.ethereum && window.ethereum.selectedAddress) {
                connectText.textContent = window.ethereum.selectedAddress;
                // Update accounts array with connected account address
                accounts = await window.ethereum.request({
                    method: 'eth_accounts'
                });
                return;
            }
            const updatedAcc = await window.ethereum.request({
                method: "eth_requestAccounts"
            });
            connectText.textContent = updatedAcc[0];
            // Update accounts array with connected account address
            accounts = updatedAcc;
        } catch (err) {
            console.log(err);
        }
    }
    // if (provider) {
    //   try {
    //     // Check if already connected
    //     if (window.ethereum && window.ethereum.selectedAddress) {
    //       // alert("Your MetaMask account is already connected");
    //       connectText.textContent = accounts[0];
    //       return;
    //     }
    //     const updatedAcc = await window.ethereum.request({method: "eth_requestAccounts"});
    //     connectText.textContent = accounts[0];
    //   } catch(err) {
    //     console.log(err);
    //   }
    //   // window.location.reload();
    // }
});

//   window.addEventListener('load', fetchData);

// ACTIONS 
window.addEventListener('load', fetchData);
approveBtn.addEventListener('click', approving);
connectBtn.addEventListener("click", connectWlt);
stakeBtn.addEventListener('click', staking);
harvestbtn.addEventListener("click", harvesting);
unstakebtn.addEventListener("click", unstaking);