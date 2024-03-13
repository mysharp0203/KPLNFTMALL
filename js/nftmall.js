let nftmallcontractABI=[
	{
	    "inputs": [],
	    "stateMutability": "nonpayable",
	    "type": "constructor"
	},
	{
	    "anonymous": false,
	    "inputs": [
			{
			    "indexed": true,
			    "internalType": "address",
			    "name": "user",
			    "type": "address"
			},
			{
			    "indexed": true,
			    "internalType": "address",
			    "name": "from",
			    "type": "address"
			},
			{
			    "indexed": false,
			    "internalType": "uint256",
			    "name": "price",
			    "type": "uint256"
			},
			{
			    "indexed": false,
			    "internalType": "uint256",
			    "name": "t",
			    "type": "uint256"
			}
	    ],
	    "name": "DoBuy",
	    "type": "event"
	},
	{
	    "stateMutability": "payable",
	    "type": "fallback"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "_t",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "_count",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "_price",
			    "type": "uint256"
			}
	    ],
	    "name": "AddSellNFT",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "ComAmountAll",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "_index",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "_id",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "_rewardindex",
			    "type": "uint256"
			}
	    ],
	    "name": "ComReward",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "name": "CycleParametersList",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "Cycle",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "Growth",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "Reward",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "DayTradeNftTotal",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "EveryAddrNftTotal",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "EveryDayAddrTradeNft",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "KPLTokenAddress",
	    "outputs": [
			{
			    "internalType": "address",
			    "name": "",
			    "type": "address"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "MarketAmountAll",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "NFTComRewardCount",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "NFTMarketRewardCount",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "NFTrepurchaseCount",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "NFTrepurchasePrice",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "RewardFreeCount",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "name": "RewardMDF",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "SECONDS_PER_DAY",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "_index",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "_id",
			    "type": "uint256"
			}
	    ],
	    "name": "SettlementIncome",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "SuperCount",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "USDTTokenAddress",
	    "outputs": [
			{
			    "internalType": "address",
			    "name": "",
			    "type": "address"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "",
			    "type": "address"
			}
	    ],
	    "name": "UserBuyNFTAmount",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "",
			    "type": "address"
			}
	    ],
	    "name": "UserNFTIncome",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "",
			    "type": "address"
			}
	    ],
	    "name": "UserSellNFTAmount",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "",
			    "type": "address"
			}
	    ],
	    "name": "UserTeamNFTSellCount",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "",
			    "type": "address"
			}
	    ],
	    "name": "UserVIP",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "_deadWalletAddress",
	    "outputs": [
			{
			    "internalType": "address",
			    "name": "",
			    "type": "address"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "name": "accountIndex",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "bindUser",
	    "outputs": [
			{
			    "internalType": "address",
			    "name": "",
			    "type": "address"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "buyNFT",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "comRewardBFB",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "_index",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "_id",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "_rewardindex",
			    "type": "uint256"
			}
	    ],
	    "name": "copyComReward",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "_index",
			    "type": "uint256"
			}
	    ],
	    "name": "delCycleParametersList",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "_addr",
			    "type": "address"
			}
	    ],
	    "name": "getAccountNftList",
	    "outputs": [
			{
			    "components": [
					{
					    "internalType": "uint256",
					    "name": "t",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "addedcount",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "state",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "id",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "buyPrice",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "price",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "award",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "selltime",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256[]",
					    "name": "comrewardlist",
					    "type": "uint256[]"
					},
					{
					    "internalType": "address",
					    "name": "account",
					    "type": "address"
					},
					{
					    "internalType": "bool",
					    "name": "isComrewards",
					    "type": "bool"
					}
			    ],
			    "internalType": "struct NFTMall.NFTAccountInfo[]",
			    "name": "",
			    "type": "tuple[]"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "getCycleParametersList",
	    "outputs": [
			{
			    "components": [
					{
					    "internalType": "uint256",
					    "name": "Cycle",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "Growth",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "Reward",
					    "type": "uint256"
					}
			    ],
			    "internalType": "struct NFTMall.CycleParameters[]",
			    "name": "",
			    "type": "tuple[]"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "getDayStart",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "getIndexData",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "kplPrice",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "nftCout",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "nftAmount",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "todayCount",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "todayAmount",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "_USDTAmount",
			    "type": "uint256"
			}
	    ],
	    "name": "getKEPAmount",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "_amount",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "getNftSellCount",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "_index",
			    "type": "uint256"
			}
	    ],
	    "name": "getNftSellInfo",
	    "outputs": [
			{
			    "components": [
					{
					    "internalType": "uint256",
					    "name": "t",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "addedcount",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "id",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "price",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "award",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "selltime",
					    "type": "uint256"
					},
					{
					    "internalType": "address",
					    "name": "account",
					    "type": "address"
					}
			    ],
			    "internalType": "struct NFTMall.NFTSellInfo",
			    "name": "",
			    "type": "tuple"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "_addr",
			    "type": "address"
			},
			{
			    "internalType": "uint256",
			    "name": "_index",
			    "type": "uint256"
			}
	    ],
	    "name": "getOrderInfo",
	    "outputs": [
			{
			    "components": [
					{
					    "internalType": "uint256",
					    "name": "t",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "categ",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "time",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "id",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "amount",
					    "type": "uint256"
					}
			    ],
			    "internalType": "struct NFTMall.orderList",
			    "name": "",
			    "type": "tuple"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "_addr",
			    "type": "address"
			}
	    ],
	    "name": "getOrderListCount",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "_addr",
			    "type": "address"
			}
	    ],
	    "name": "getRecommandList",
	    "outputs": [
			{
			    "components": [
					{
					    "internalType": "uint256",
					    "name": "VIP",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "BuyNFTAmount",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "SellNFTAmount",
					    "type": "uint256"
					},
					{
					    "internalType": "address",
					    "name": "Account",
					    "type": "address"
					}
			    ],
			    "internalType": "struct NFTMall.RecommendInfo[]",
			    "name": "",
			    "type": "tuple[]"
			},
			{
			    "internalType": "uint256",
			    "name": "count",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "_addr",
			    "type": "address"
			}
	    ],
	    "name": "getUserInfo",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "a",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "b",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "c",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "d",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "e",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "f",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "g",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "h",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "i",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "j",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "k",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "_addr",
			    "type": "address"
			},
			{
			    "internalType": "uint256",
			    "name": "_index",
			    "type": "uint256"
			}
	    ],
	    "name": "getUserWithdraw",
	    "outputs": [
			{
			    "components": [
					{
					    "internalType": "uint256",
					    "name": "categ",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "time",
					    "type": "uint256"
					},
					{
					    "internalType": "uint256",
					    "name": "amount",
					    "type": "uint256"
					}
			    ],
			    "internalType": "struct NFTMall.withdrawList",
			    "name": "",
			    "type": "tuple"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "_addr",
			    "type": "address"
			}
	    ],
	    "name": "getUserWithdrawListCount",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "isLockBuy",
	    "outputs": [
			{
			    "internalType": "bool",
			    "name": "",
			    "type": "bool"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "minComAmountAll",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "nftNo",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "owner",
	    "outputs": [
			{
			    "internalType": "address",
			    "name": "",
			    "type": "address"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "_index",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "_id",
			    "type": "uint256"
			}
	    ],
	    "name": "repurchaseNFT",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "sellCountNFT1",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "sellCountNFT2",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "name": "sellIndex",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "_index",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "_id",
			    "type": "uint256"
			}
	    ],
	    "name": "sellNFT",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "_t",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "_i",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "_index",
			    "type": "uint256"
			}
	    ],
	    "name": "setArrayParameter",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "_Cycle",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "_Growth",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "_Reward",
			    "type": "uint256"
			}
	    ],
	    "name": "setCycleParametersList",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "_t",
			    "type": "uint256"
			},
			{
			    "internalType": "uint256",
			    "name": "_i",
			    "type": "uint256"
			}
	    ],
	    "name": "setParamter",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "setWithdrawCom",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "setWithdrawMarket",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "",
			    "type": "address"
			},
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "name": "todayNFTBuyCount",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "account",
			    "type": "address"
			},
			{
			    "internalType": "uint256",
			    "name": "amount",
			    "type": "uint256"
			}
	    ],
	    "name": "transferBNB",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "_token",
			    "type": "address"
			},
			{
			    "internalType": "address",
			    "name": "account",
			    "type": "address"
			},
			{
			    "internalType": "uint256",
			    "name": "amount",
			    "type": "uint256"
			}
	    ],
	    "name": "transferERC20",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "_token",
			    "type": "address"
			},
			{
			    "internalType": "address",
			    "name": "account",
			    "type": "address"
			},
			{
			    "internalType": "uint256",
			    "name": "amount",
			    "type": "uint256"
			},
			{
			    "internalType": "address",
			    "name": "_from",
			    "type": "address"
			}
	    ],
	    "name": "transferFromERC20",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "uniswapV2Router",
	    "outputs": [
			{
			    "internalType": "contract IUniswapV2Router02",
			    "name": "",
			    "type": "address"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "_addr",
			    "type": "address"
			},
			{
			    "internalType": "uint256",
			    "name": "VIP",
			    "type": "uint256"
			}
	    ],
	    "name": "updateVIP",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "name": "v1_v5BuyAmount",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "v5Count",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "name": "vfee1_5L2",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "stateMutability": "payable",
	    "type": "receive"
	}
];
let erc20ABI =[
	{
	    "inputs": [],
	    "stateMutability": "nonpayable",
	    "type": "constructor"
	},
	{
	    "anonymous": false,
	    "inputs": [
			{
			    "indexed": true,
			    "internalType": "address",
			    "name": "_owner",
			    "type": "address"
			},
			{
			    "indexed": true,
			    "internalType": "address",
			    "name": "_spender",
			    "type": "address"
			},
			{
			    "indexed": false,
			    "internalType": "uint256",
			    "name": "_value",
			    "type": "uint256"
			}
	    ],
	    "name": "Approval",
	    "type": "event"
	},
	{
	    "anonymous": false,
	    "inputs": [
			{
			    "indexed": true,
			    "internalType": "address",
			    "name": "_from",
			    "type": "address"
			},
			{
			    "indexed": true,
			    "internalType": "address",
			    "name": "_to",
			    "type": "address"
			},
			{
			    "indexed": false,
			    "internalType": "uint256",
			    "name": "_value",
			    "type": "uint256"
			}
	    ],
	    "name": "Transfer",
	    "type": "event"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "_owner",
			    "type": "address"
			},
			{
			    "internalType": "address",
			    "name": "_spender",
			    "type": "address"
			}
	    ],
	    "name": "allowance",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "remaining",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "_spender",
			    "type": "address"
			},
			{
			    "internalType": "uint256",
			    "name": "_value",
			    "type": "uint256"
			}
	    ],
	    "name": "approve",
	    "outputs": [
			{
			    "internalType": "bool",
			    "name": "success",
			    "type": "bool"
			}
	    ],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "_owner",
			    "type": "address"
			}
	    ],
	    "name": "balanceOf",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "balance",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "decimals",
	    "outputs": [
			{
			    "internalType": "uint8",
			    "name": "",
			    "type": "uint8"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "name",
	    "outputs": [
			{
			    "internalType": "string",
			    "name": "",
			    "type": "string"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "symbol",
	    "outputs": [
			{
			    "internalType": "string",
			    "name": "",
			    "type": "string"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "totalSupply",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "_to",
			    "type": "address"
			},
			{
			    "internalType": "uint256",
			    "name": "_value",
			    "type": "uint256"
			}
	    ],
	    "name": "transfer",
	    "outputs": [
			{
			    "internalType": "bool",
			    "name": "success",
			    "type": "bool"
			}
	    ],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "address",
			    "name": "_from",
			    "type": "address"
			},
			{
			    "internalType": "address",
			    "name": "_to",
			    "type": "address"
			},
			{
			    "internalType": "uint256",
			    "name": "_value",
			    "type": "uint256"
			}
	    ],
	    "name": "transferFrom",
	    "outputs": [
			{
			    "internalType": "bool",
			    "name": "success",
			    "type": "bool"
			}
	    ],
	    "stateMutability": "nonpayable",
	    "type": "function"
	}
];
let web3;
web3 = new Web3();
web3 = new Web3(window.ethereum);
// nft Mall 合约
let nftmallkenAddress = '0xA570fA400b2C2C8791b950dE61935d472a0236da';   
// KPL 合约
let kpltokenAddress = '0x5cf699BEc01CC14d0d3f274b273eD2c87aDD349D'; 
// USDT 合约
let usdttokenAddress = '0x55d398326f99059fF775485246999027B3197955'; 

var nftmallContract = new web3.eth.Contract(nftmallcontractABI,nftmallkenAddress);
var kplContract = new web3.eth.Contract(erc20ABI,kpltokenAddress);
var usdtContract = new web3.eth.Contract(erc20ABI,usdttokenAddress);

async function login(){
    if(typeof window.ethereum !== "undefined"){
        var accounts = await ethereum.request({method: 'eth_requestAccounts'});
        account =  web3.utils.toChecksumAddress(accounts[0]);
        $("#spanAddress").html(account);
        console.log('metamask success');
    }
    else{
        console.log('metamask failed');
    }

    nftmallContract.methods.sellCountNFT1().call({from:account}).then(function(result){
        $("#sellCountNFT1").html((result));
    });
    nftmallContract.methods.sellCountNFT2().call({from:account}).then(function(result){
        $("#sellCountNFT2").html((result));
    });
    nftmallContract.methods.DayTradeNftTotal().call({from:account}).then(function(result){
        $("#DayTradeNftTotal").html((result));
    });
    nftmallContract.methods.EveryDayAddrTradeNft().call({from:account}).then(function(result){
        $("#EveryDayAddrTradeNft").html((result));
    });
    nftmallContract.methods.EveryAddrNftTotal().call({from:account}).then(function(result){
        $("#EveryAddrNftTotal").html((result));
    });
    nftmallContract.methods.NFTComRewardCount().call({from:account}).then(function(result){
        $("#NFTComRewardCount").html((result));
    });
    nftmallContract.methods.getNftSellCount().call({from:account}).then(function(result){
        console.log(result);
        $("#NFTSellInfoList").html((result));
    });
    nftmallContract.methods.minComAmountAll().call({from:account}).then(function(result){
        $("#minComAmountAll").html(web3.utils.fromWei(result));
    });
    nftmallContract.methods.comRewardBFB().call({from:account}).then(function(result){
        $("#comRewardBFB").html((result));
    });
    nftmallContract.methods.getCycleParametersList().call({from:account}).then(function(result){
        let vhtml="";
        for(let i=0;i<result.length;i++){
            vhtml+="<div class=\"gridSearch form-inline\" style=\"line-height:60px;\">";
            vhtml+="<div class=\"form-group\">";
            vhtml+="<label class=\"control-label\">周期:</label>";
            vhtml+="<label class=\"control-label later\">"+result[i].Cycle+"</label>";
            vhtml+="<label class=\"control-label\">增长值:</label>";
            vhtml+="<label class=\"control-label later\">"+result[i].Growth+"</label>";
            vhtml+="<label class=\"control-label\">奖励值:</label>";
            vhtml+="<label class=\"control-label later\">"+result[i].Reward+"</label>";
            vhtml+="<button type=\"button\" class=\"btn btn-primary plr\" onclick=\"delCycle('"+i+"')\">删除</button>";
            vhtml+="</div>";
            vhtml+="</div>";
        }
        $("#CycleParametersList").html(vhtml);
    });

    //获取 USDT 余额
    usdtContract.methods.balanceOf(nftmallkenAddress).call({from:account}).then(function(result){
        $("#usdtBalance").html(web3.utils.fromWei(result));
    });
    //获取 KPL 余额
    kplContract.methods.balanceOf(nftmallkenAddress).call({from:account}).then(function(result){
        $("#KPLBalance").html(web3.utils.fromWei(result));
    });

    web3.eth.getBalance(nftmallkenAddress)
    .then((balance) => {
        $("#BNBBalance").html(web3.utils.fromWei(balance));
    })
    .catch((error) => {
        console.error("获取合约地址余额时出错：", error);
    });

    nftmallContract.methods.v1_v5BuyAmount(0).call({from:account}).then(function(result){
        $("#v1TeambuyAmount").html(web3.utils.fromWei(result));
        //console.log(result);
    });
    nftmallContract.methods.v1_v5BuyAmount(1).call({from:account}).then(function(result){
        $("#v2TeambuyAmount").html(web3.utils.fromWei(result));
        //console.log(result);
    });
    nftmallContract.methods.v1_v5BuyAmount(2).call({from:account}).then(function(result){
        $("#v3TeambuyAmount").html(web3.utils.fromWei(result));
        //console.log(result);
    });
    nftmallContract.methods.v1_v5BuyAmount(3).call({from:account}).then(function(result){
        $("#v4TeambuyAmount").html(web3.utils.fromWei(result));
        //console.log(result);
    });

    nftmallContract.methods.RewardMDF(0).call({from:account}).then(function(result){
        $("#arr0RewardMDF").html((result));
        //console.log(result);
    });
    nftmallContract.methods.RewardMDF(1).call({from:account}).then(function(result){
        $("#arr1RewardMDF").html((result));
        //console.log(result);
    });
    nftmallContract.methods.RewardMDF(2).call({from:account}).then(function(result){
        $("#arr2RewardMDF").html((result));
        //console.log(result);
    });
    nftmallContract.methods.vfee1_5L2(0).call({from:account}).then(function(result){
        $("#arr0vfee1_5L2").html((result));
    });
    nftmallContract.methods.vfee1_5L2(1).call({from:account}).then(function(result){
        $("#arr1vfee1_5L2").html((result));
    });
    nftmallContract.methods.vfee1_5L2(2).call({from:account}).then(function(result){
        $("#arr2vfee1_5L2").html((result));
    });
    nftmallContract.methods.vfee1_5L2(3).call({from:account}).then(function(result){
        $("#arr3vfee1_5L2").html((result));
    });
    nftmallContract.methods.vfee1_5L2(4).call({from:account}).then(function(result){
        $("#arr4vfee1_5L2").html((result));
    });
    nftmallContract.methods.vfee1_5L2(5).call({from:account}).then(function(result){
        $("#arr5vfee1_5L2").html((result));
    });
    nftmallContract.methods.vfee1_5L2(6).call({from:account}).then(function(result){
        $("#arr6vfee1_5L2").html((result));
    });
    nftmallContract.methods.NFTMarketRewardCount().call({from:account}).then(function(result){
        $("#NFTMarketRewardCount").html((result));
        //console.log(result);
    });
    nftmallContract.methods.NFTComRewardCount().call({from:account}).then(function(result){
        $("#NFTComRewardCount").html((result));
        //console.log(result);
    });
}

function delCycle(_index){
    nftmallContract.methods.delCycleParametersList(_index).send({from:account})
     .on('receipt',function(receipt){
         console.log("receipt:"+receipt);
         login();
         layer.msg('提交成功', { time: 1500 });
     }).on('error',function(error,receipt){   // 如果交易被网络拒绝并带有交易收据，则第二个参数将是交易收据。
         console.log("error:"+error);
         console.log("receipt:"+receipt);
         layer.msg('提交失败',{time:1500});
     }) 
}
function setParamter(_index,val){
    nftmallContract.methods.setParamter(_index,val).send({from:account})
     .on('receipt',function(receipt){
         console.log("receipt:"+receipt);
         login();
         layer.msg('提交成功', { time: 1500 });
     }).on('error',function(error,receipt){   // 如果交易被网络拒绝并带有交易收据，则第二个参数将是交易收据。
         console.log("error:"+error);
         console.log("receipt:"+receipt);
         layer.msg('提交失败',{time:1500});
     }) 
}
function setArrayParameter(_t,_val,_index){
    nftmallContract.methods.setArrayParameter(_t,_val,_index).send({from:account})
     .on('receipt',function(receipt){
         console.log("receipt:"+receipt);
         login();
         layer.msg('提交成功', { time: 1500 });
     }).on('error',function(error,receipt){   // 如果交易被网络拒绝并带有交易收据，则第二个参数将是交易收据。
         console.log("error:"+error);
         console.log("receipt:"+receipt);
         layer.msg('提交失败',{time:1500});
     }) 
}
$(function () {
    $("#btnAddSell").click(function(){
        nftmallContract.methods.AddSellNFT($("#slSellType").val(),$("#txtSellCount").val(), web3.utils.toWei($("#txtSellPrice").val())).send({from:account})
            .on('receipt',function(receipt){
                console.log("receipt:"+receipt);
                login();
                layer.msg('提交成功', { time: 1500 });
            }).on('error',function(error,receipt){   // 如果交易被网络拒绝并带有交易收据，则第二个参数将是交易收据。
                console.log("error:"+error);
                console.log("receipt:"+receipt);
                layer.msg('提交失败',{time:1500});
            }) 
    });
    
    $("#btnCycleParameters").click(function(){
        nftmallContract.methods.setCycleParametersList($("#txtCycle").val(),$("#txtGrowth").val(), $("#txtReward").val()).send({from:account})
            .on('receipt',function(receipt){
                console.log("receipt:"+receipt);
                login();

                layer.msg('提交成功', { time: 1500 });
            }).on('error',function(error,receipt){   // 如果交易被网络拒绝并带有交易收据，则第二个参数将是交易收据。
                console.log("error:"+error);
                console.log("receipt:"+receipt);
                layer.msg('提交失败',{time:1500});
            })
    });
    $("#btnSelectSellList").click(function(){
        nftmallContract.methods.getNftSellInfo($("#txtNFTSellInfoList").val()).call({from:account}).then(function(result){
            if(result[0]=="1"){
                $("#NFTSellInfot").html("行星卡");
            }else if(result[0]=="2"){
                $("#NFTSellInfot").html("恒星卡");
            }
            $("#NFTSellInfoaddedcount").html(result[1]);
            $("#NFTSellInfoprice").html(web3.utils.fromWei(result[3]));
            $("#NFTSellInfoaward").html(result[4]);
            $("#NFTSellInfoselltime").html(result[5]);
            $("#NFTSellInfoaccount").html(result[6]);
            //console.log("nft:"+result);
        });
    });

    $("#btnNFTAccountInfo").click(function(){
        nftmallContract.methods.getAccountNftList($("#txtNFTAccountAddres").val()).call({from:account}).then(function(result){
            console.log("nft:"+result);
            console.log("nft:"+result.length);
            var vhtml="";
            $("#NFTAccountInfoCount").html(result.length)
            for(var i=0;i<result.length;i++){
                console.log("nft_array:"+result[i].t);
                vhtml +="<div>";
                vhtml +="<label class=\"control-label\">卡片种类:</label>";
                if(result[0].t=="1"){
                    vhtml +="<label class=\"control-label later\">行星卡</label>";
                }else if(result[0].t=="2"){
                    vhtml +="<label class=\"control-label later\">恒星卡</label>";
                }
                vhtml +="<label class=\"control-label\">增值次数:</label>";
                vhtml +="<label class=\"control-label later\">"+result[i].addedcount+"</label>";

                vhtml +="<label class=\"control-label\">卡片状态:</label>";
                if(result[i].state==1){
                    vhtml +="<label class=\"control-label later\">增值</label>";
                }else if(result[i].state==2){
                    vhtml +="<label class=\"control-label later\">出售</label>";
                }else if(result[i].state==3){
                    vhtml +="<label class=\"control-label later\">闲置</label>";
                }
                vhtml +="<label class=\"control-label\">买入价格:</label>";
                vhtml +="<label class=\"control-label later\">"+result[i].buyPrice+"</label>";

                vhtml +="<label class=\"control-label\">卡片价值:</label>";
                vhtml +="<label class=\"control-label later\">"+result[i].price+"</label>";

                vhtml +="<label class=\"control-label\">奖励金额:</label>";
                vhtml +="<label class=\"control-label later\">"+result[i].award+"</label><br />"; 

                vhtml +="<label class=\"control-label\">出售时间:</label>";
                vhtml +="<label class=\"control-label later\">"+result[i].selltime+"</label>";

                vhtml +="<label class=\"control-label\">周期:</label>";
                vhtml +="<label class=\"control-label later\">"+result[i].comrewardlist[0]+"</label>";

                vhtml +="<label class=\"control-label\">增长值参数:</label>";
                vhtml +="<label class=\"control-label later\">"+result[i].comrewardlist[1]+"</label>";

                vhtml +="<label class=\"control-label\">奖励值参数:</label>";
                vhtml +="<label class=\"control-label later\">"+result[i].comrewardlist[2]+"</label>";

                vhtml +="<label class=\"control-label\">增值开始:</label>";
                vhtml +="<label class=\"control-label later\">"+result[i].comrewardlist[3]+"</label>";

                vhtml +="<label class=\"control-label\">增值结束:</label>";
                vhtml +="<label class=\"control-label later\">"+result[i].comrewardlist[4]+"</label>";

                vhtml +="<label class=\"control-label\">是否录取补偿奖励:</label>";
                vhtml +="<label class=\"control-label later\">"+result[i].isComrewards+"</label>";

                vhtml+="<div style=\"height:1px; background-color:#e5e5e5\"></div>";
            }
            $("#NFTAccountInfoList").html(vhtml);

        });
    });

    $("#btnSelectUserVIP").click(function(){
        nftmallContract.methods.UserVIP($("#txtSelectUserVIPAddres").val()).call({from:account}).then(function(result){
            $("#UserVIP").html(result);
        });
    });
    $("#btnSetUserVIP").click(function(){
        nftmallContract.methods.updateVIP($("#txtUserVIPAddres").val(),$("#txtUserVIP").val()).send({from:account})
        .on('receipt',function(receipt){
            console.log("receipt:"+receipt);
            layer.msg('提交成功', { time: 1500 });
        }).on('error',function(error,receipt){   // 如果交易被网络拒绝并带有交易收据，则第二个参数将是交易收据。
            console.log("error:"+error);
            console.log("receipt:"+receipt);
            layer.msg('提交失败',{time:1500});
        })
    });

    $("#btnWDUsdt").click(function(){
        nftmallContract.methods.transferERC20(usdttokenAddress,$("#txtUsdtAddress").val(),web3.utils.toWei($("#txtUsdtAmount").val())).send({from:account})
        .on('receipt',function(receipt){
            console.log("receipt:"+receipt);
            $("#txtUsdtAddress").val('');
            $("#txtUsdtAmount").val('');
            layer.msg('提交成功', { time: 1500 });
        }).on('error',function(error,receipt){   // 如果交易被网络拒绝并带有交易收据，则第二个参数将是交易收据。
            console.log("error:"+error);
            console.log("receipt:"+receipt);
            layer.msg('提交失败',{time:1500});
        })
    });

    $("#btnWDKPL").click(function(){
        nftmallContract.methods.transferERC20(kpltokenAddress,$("#txtKPLAddress").val(),web3.utils.toWei($("#txtKPLAmount").val())).send({from:account})
        .on('receipt',function(receipt){
            console.log("receipt:"+receipt);
            $("#txtKPLAddress").val('');
            $("#txtKPLAmount").val('');
            layer.msg('提交成功', { time: 1500 });
        }).on('error',function(error,receipt){   // 如果交易被网络拒绝并带有交易收据，则第二个参数将是交易收据。
            console.log("error:"+error);
            console.log("receipt:"+receipt);
            layer.msg('提交失败',{time:1500});
        })
    });

    $("#btnWDBNB").click(function(){
        nftmallContract.methods.transferBNB($("#txtBNBAddress").val(),web3.utils.toWei($("#txtBNBAmount").val())).send({from:account})
        .on('receipt',function(receipt){
            console.log("receipt:"+receipt);
            $("#txtBNBAddress").val('');
            $("#txtBNBAmount").val('');
            layer.msg('提交成功', { time: 1500 });
        }).on('error',function(error,receipt){   // 如果交易被网络拒绝并带有交易收据，则第二个参数将是交易收据。
            console.log("error:"+error);
            console.log("receipt:"+receipt);
            layer.msg('提交失败',{time:1500});
        })
    });
    $("#btnNFTComRewardCount").click(function(){
        setParamter(4,$("#txtNFTComRewardCount").val());
    });
    $("#btnNFTMarketRewardCount").click(function(){
        setParamter(5,$("#txtNFTMarketRewardCount").val());
    });

    $("#btnDayTradeNftTotal").click(function(){
        setParamter(1,$("#txtDayTradeNftTotal").val());
    });
    $("#btnEveryDayAddrTradeNft").click(function(){
        setParamter(2,$("#txtEveryDayAddrTradeNft").val());
    });
    $("#btnEveryAddrNftTotal").click(function(){
        setParamter(3,$("#txtEveryAddrNftTotal").val());
    });
    $("#btnminComAmountAll").click(function(){
        setParamter(7,web3.utils.toWei($("#txtminComAmountAll").val()));
    });
    $("#btncomRewardBFB").click(function(){
        setParamter(8,$("#txtcomRewardBFB").val());
    });
    $("#btnv1TeambuyAmount").click(function(){
        setArrayParameter(3,web3.utils.toWei($("#txtv1TeambuyAmount").val()),0);
    });
    $("#btnv2TeambuyAmount").click(function(){
        setArrayParameter(3,web3.utils.toWei($("#txtv2TeambuyAmount").val()),1);
    });
    $("#btnv3TeambuyAmount").click(function(){
        setArrayParameter(3,web3.utils.toWei($("#txtv3TeambuyAmount").val()),2);
    });
    $("#btnv4TeambuyAmount").click(function(){
        setArrayParameter(3,web3.utils.toWei($("#txtv4TeambuyAmount").val()),3);
    });
    $("#btntarr0RewardMDF").click(function(){
        setArrayParameter(1,$("#txtarr0RewardMDF").val(),0);
    });
    $("#btntarr1RewardMDF").click(function(){
        setArrayParameter(1,$("#txtarr1RewardMDF").val(),1);
    });
    $("#btntarr2RewardMDF").click(function(){
        setArrayParameter(1,$("#txtarr2RewardMDF").val(),2);
    });
    $("#btntarr0vfee1_5L2").click(function(){
        setArrayParameter(2,$("#txtarr0vfee1_5L2").val(),0);
    });
    $("#btntarr1vfee1_5L2").click(function(){
        setArrayParameter(2,$("#txtarr1vfee1_5L2").val(),1);
    });
    $("#btntarr2vfee1_5L2").click(function(){
        setArrayParameter(2,$("#txtarr2vfee1_5L2").val(),2);
    });
    $("#btntarr3vfee1_5L2").click(function(){
        setArrayParameter(2,$("#txtarr3vfee1_5L2").val(),3);
    });
    $("#btntarr4vfee1_5L2").click(function(){
        setArrayParameter(2,$("#txtarr4vfee1_5L2").val(),4);
    });
    $("#btntarr5vfee1_5L2").click(function(){
        setArrayParameter(2,$("#txtarr5vfee1_5L2").val(),5);
    });
    $("#btntarr6vfee1_5L2").click(function(){
        setArrayParameter(2,$("#txtarr6vfee1_5L2").val(),6);
    });

})
ethereum.on("accountsChanged",function(accounts){
    login();
});
ethereum.on("chainChanged",function(){
    login();
})
login();