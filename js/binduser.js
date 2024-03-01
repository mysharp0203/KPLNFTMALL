let bindusercontractABI=[
	{
	    "inputs": [],
	    "stateMutability": "nonpayable",
	    "type": "constructor"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "_amount",
			    "type": "uint256"
			}
	    ],
	    "name": "SetBnb",
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
			}
	    ],
	    "name": "UserTeamTotalPeoPle",
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
			    "name": "_amount",
			    "type": "uint256"
			},
			{
			    "internalType": "address payable",
			    "name": "_addr",
			    "type": "address"
			}
	    ],
	    "name": "Withdraw",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "_amount",
			    "type": "uint256"
			},
			{
			    "internalType": "address",
			    "name": "_addr",
			    "type": "address"
			},
			{
			    "internalType": "address",
			    "name": "_token",
			    "type": "address"
			}
	    ],
	    "name": "WithdrawToken",
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
	    "name": "getUserTeamTotalPeoPle",
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
	    "name": "getrecommend",
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
			    "name": "_addr",
			    "type": "address"
			}
	    ],
	    "name": "getrecommendlist",
	    "outputs": [
			{
			    "internalType": "address[]",
			    "name": "",
			    "type": "address[]"
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
			    "internalType": "address",
			    "name": "",
			    "type": "address"
			}
	    ],
	    "name": "recommend",
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
			},
			{
			    "internalType": "uint256",
			    "name": "",
			    "type": "uint256"
			}
	    ],
	    "name": "recommendlist",
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
	    "name": "sendbnb",
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
			},
			{
			    "internalType": "address",
			    "name": "_leader",
			    "type": "address"
			}
	    ],
	    "name": "setRecommend",
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
	    "name": "setRecommender",
	    "outputs": [],
	    "stateMutability": "payable",
	    "type": "function"
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
// bindUser 合约
let bindusertokenAddress = '0x24EdcE09316799711a1D3C2D6A9728d3A9820c02';   
// KPL 合约
let kpltokenAddress = '0xCB129b27b45bEC2B3c38411A7d12a3a534A11Aaf'; 
// USDT 合约
let usdttokenAddress = '0x55d398326f99059fF775485246999027B3197955'; 

var binduserContract = new web3.eth.Contract(bindusercontractABI,bindusertokenAddress);
var kplContract = new web3.eth.Contract(erc20ABI,kpltokenAddress);
var usdtContract = new web3.eth.Contract(erc20ABI,usdttokenAddress);

async function login(){
    if(typeof window.ethereum !== "undefined"){
        var accounts = await ethereum.request({method: 'eth_requestAccounts'});
        account =  web3.utils.toChecksumAddress(accounts[0]);
        $("#spanAddress").html(account);
        
    }
    else{
        console.log('metamask failed');
    }

    web3.eth.getBalance(bindusertokenAddress)
        .then((balance) => {
            $("#bnbamount").html(web3.utils.fromWei(balance));
        })
        .catch((error) => {
            console.error("获取合约地址余额时出错：", error);
        });
}


$(function () {


    $("#btnSelectRecomm").click(function(){
        binduserContract.methods.getrecommend($("#txtUserAddress").val()).call({from:account}).then(function(result){
            $("#txtRecommaddress").html(result);
        });
    })

    $("#btnWDbnb").click(function(){
        idoContract.methods.Withdraw(web3.utils.toWei($("#txtbnbAmount").val()),$("#txtbnbAddress").val()).send({from:account})
        .on('receipt',function(receipt){
            console.log("receipt:"+receipt);
            $("#txtbnbAmount").val('');
            $("#txtbnbAddress").val('');
            layer.msg('提交成功', { time: 1500 });
        }).on('error',function(error,receipt){   // 如果交易被网络拒绝并带有交易收据，则第二个参数将是交易收据。
            console.log("error:"+error);
            console.log("receipt:"+receipt);
            layer.msg('提交失败',{time:1500});
        })
    });

})
ethereum.on("accountsChanged",function(accounts){
    login();
});
ethereum.on("chainChanged",function(){
    login();
})
login();