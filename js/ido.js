let idocontractABI=[
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
			    "indexed": false,
			    "internalType": "uint256",
			    "name": "amount",
			    "type": "uint256"
			}
	    ],
	    "name": "DoIDO",
	    "type": "event"
	},
	{
	    "inputs": [],
	    "name": "IDO",
	    "outputs": [],
	    "stateMutability": "payable",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "_amount",
			    "type": "uint256"
			}
	    ],
	    "name": "setAddressTotal",
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
	    "name": "setgasAddress",
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
			}
	    ],
	    "name": "setIDOAmount",
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
			}
	    ],
	    "name": "setIDOTotal",
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
	    "name": "setKPLTokenAddress",
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
			}
	    ],
	    "name": "setsendbnb",
	    "outputs": [],
	    "stateMutability": "nonpayable",
	    "type": "function"
	},
	{
	    "inputs": [
			{
			    "internalType": "uint256",
			    "name": "_state",
			    "type": "uint256"
			}
	    ],
	    "name": "setState",
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
	    "name": "setUSDTTokenAddress",
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
	    "anonymous": false,
	    "inputs": [
			{
			    "indexed": true,
			    "internalType": "address",
			    "name": "user",
			    "type": "address"
			},
			{
			    "indexed": false,
			    "internalType": "uint256",
			    "name": "amount",
			    "type": "uint256"
			}
	    ],
	    "name": "WithdrawIDO",
	    "type": "event"
	},
	{
	    "stateMutability": "payable",
	    "type": "fallback"
	},
	{
	    "inputs": [],
	    "name": "WithdrawIDOAmount",
	    "outputs": [],
	    "stateMutability": "payable",
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
	    "stateMutability": "payable",
	    "type": "receive"
	},
	{
	    "inputs": [],
	    "name": "AddressTotal",
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
	    "name": "gasAddress",
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
	    "name": "getBalance",
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
	    "name": "GetIDOAmount",
	    "outputs": [
			{
			    "internalType": "uint256",
			    "name": "amount",
			    "type": "uint256"
			}
	    ],
	    "stateMutability": "view",
	    "type": "function"
	},
	{
	    "inputs": [],
	    "name": "getKPLBalance",
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
	    "name": "getUSDTBalance",
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
	    "name": "IDOAmount",
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
	    "name": "IDOList",
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
	    "name": "IDOState",
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
	    "name": "IDOTotal",
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
// IDO 合约
let idotokenAddress = '0x3dc2CDc26D7e92B02807baa142798BA925E81fDb';   
// KPL 合约
let kpltokenAddress = '0xCB129b27b45bEC2B3c38411A7d12a3a534A11Aaf'; 
// USDT 合约
let usdttokenAddress = '0x55d398326f99059fF775485246999027B3197955'; 

var idoContract = new web3.eth.Contract(idocontractABI,idotokenAddress);
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
    //获取参与IDO 金额
    idoContract.methods.IDOAmount().call({from:account}).then(function(result){
        console.log(result)
        console.log(web3.utils.fromWei(result))  //转换为Ether
        console.log(web3.utils.toWei('10'))  //转换为Wei
        $("#idoamount").html(web3.utils.fromWei(result));
    });

    //获取 当前 IDO 状态余额
    idoContract.methods.IDOState().call({from:account}).then(function(result){
        if(result == 0){
            $("#idoState").html("关闭");
        }
        else if(result == 1){
            $("#idoState").html("开启");
        }
        else if(result == 2){
            $("#idoState").html("结束-会员可以提现KEP");
        }
        
    });
  
    //获取 USDT 余额
    usdtContract.methods.balanceOf(idotokenAddress).call({from:account}).then(function(result){
        $("#uamount").html(web3.utils.fromWei(result));
    });
    //获取 KPL 余额
    kplContract.methods.balanceOf(idotokenAddress).call({from:account}).then(function(result){
        $("#kplamount").html(web3.utils.fromWei(result));
    });
    //ido 参与人数
    idoContract.methods.AddressTotal().call({from:account}).then(function(result){
        $("#idocount").html(web3.utils.fromWei(result));
    });
    //ido 总量
    idoContract.methods.IDOTotal().call({from:account}).then(function(result){
        $("#txtIdoTotalAmount").html(web3.utils.fromWei(result));
    });
    web3.eth.getBalance(idotokenAddress)
        .then((balance) => {
            $("#bnbamount").html(web3.utils.fromWei(balance));
        })
        .catch((error) => {
            console.error("获取合约地址余额时出错：", error);
        });
}


$(function () {
    //设置IDO 的总量
    $("#btnSetIDOTotalAmount").click(function(){
        idoContract.methods.setIDOTotal(web3.utils.toWei($("#txtAmount").val())).send({from:account})
        .on('receipt',function(receipt){
            console.log("receipt:"+receipt);
            layer.msg('提交成功', { time: 1500 });
        }).on('error',function(error,receipt){   // 如果交易被网络拒绝并带有交易收据，则第二个参数将是交易收据。
            console.log("error:"+error);
            console.log("receipt:"+receipt);
            layer.msg('提交失败',{time:1500});
        }) 
    })

    //设置参与IDO 状态
    $("#btnSetIDOState").click(function () {
        var v = $("#slState").val();
        idoContract.methods.setState($("#slState").val()).send({from:account})
        .on('receipt',function(receipt){
            console.log("receipt:"+receipt);
            layer.msg('提交成功', { time: 1500 });
        }).on('error',function(error,receipt){   // 如果交易被网络拒绝并带有交易收据，则第二个参数将是交易收据。
            console.log("error:"+error);
            console.log("receipt:"+receipt);
            layer.msg('提交失败',{time:1500});
        }) 
    })
    //设置参与IDO USDT 金额
    $("#btnSetIDOAmount").click(function () {
        idoContract.methods.setIDOAmount(web3.utils.toWei($("#txtAmount").val())).send({from:account})
        .on('receipt',function(receipt){
            console.log("receipt:"+receipt);
            layer.msg('提交成功', { time: 1500 });
        }).on('error',function(error,receipt){   // 如果交易被网络拒绝并带有交易收据，则第二个参数将是交易收据。
        console.log("error:"+error);
        console.log("receipt:"+receipt);
        layer.msg('提交失败',{time:1500});
        }) 
        console.log(web3.utils.toWei($("#txtAmount").val()));
    })

    //提现USDT
    $("#btnWDUSDT").click(function () {
        idoContract.methods.WithdrawToken(web3.utils.toWei($("#txtUAmount").val()),$("#txtUAddress").val(),usdttokenAddress).send({from:account})
        .on('receipt',function(receipt){
            console.log("receipt:"+receipt);
            layer.msg('提交成功', { time: 1500 });
        }).on('error',function(error,receipt){   // 如果交易被网络拒绝并带有交易收据，则第二个参数将是交易收据。
            console.log("error:"+error);
            console.log("receipt:"+receipt);
            layer.msg('提交失败',{time:1500});
        }) 
    })
    //提现KPL
    $("#btnWDKPL").click(function () {
        idoContract.methods.WithdrawToken(web3.utils.toWei($("#txtKPLAmount").val()),$("#txtKPLAddress").val(),kpltokenAddress).send({from:account})
        .on('receipt',function(receipt){
            console.log("receipt:"+receipt);
            layer.msg('提交成功', { time: 1500 });
        }).on('error',function(error,receipt){   // 如果交易被网络拒绝并带有交易收据，则第二个参数将是交易收据。
            console.log("error:"+error);
            console.log("receipt:"+receipt);
            layer.msg('提交失败',{time:1500});
        }) 
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