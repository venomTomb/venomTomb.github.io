
// var minersAddr = '0xfc4f0eD0972e3f635c231f8e9DB10b47AF10b74A';
// var tokenAddr = '0x78867bbeef44f2326bf8ddd1941a4439382ef2a7';

var presaleAddr = '0x01B0F0691B621d491e654654c1D960AA50DfC0Fe';
var minersAddr = '0x01B0F0691B621d491e654654c1D960AA50DfC0Fe';
var tokenAddr = '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70';
var presaleAbi =
[
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "uint8",
		  "name": "version",
		  "type": "uint8"
		}
	  ],
	  "name": "Initialized",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [],
	  "name": "Pause",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [],
	  "name": "Unpause",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "address",
		  "name": "addr",
		  "type": "address"
		}
	  ],
	  "name": "WhitelistedAddressAdded",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "address",
		  "name": "addr",
		  "type": "address"
		}
	  ],
	  "name": "WhitelistedAddressRemoved",
	  "type": "event"
	},
	{
	  "inputs": [],
	  "name": "Buy",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "Claim",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "amount",
		  "type": "uint256"
		}
	  ],
	  "name": "WithdrawAVAX",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "amount",
		  "type": "uint256"
		}
	  ],
	  "name": "WithdrawDai",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "amount",
		  "type": "uint256"
		}
	  ],
	  "name": "WithdrawVenom",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "addr",
		  "type": "address"
		}
	  ],
	  "name": "addAddressToWhitelist",
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
		  "internalType": "address[]",
		  "name": "addrs",
		  "type": "address[]"
		}
	  ],
	  "name": "addAddressesToWhitelist",
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
		  "name": "",
		  "type": "address"
		}
	  ],
	  "name": "boughtAndPaid",
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
	  "name": "checkContractBalance",
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
	  "name": "dai",
	  "outputs": [
		{
		  "internalType": "contract IToken",
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
		  "name": "token_addr",
		  "type": "address"
		},
		{
		  "internalType": "address",
		  "name": "dai_addr",
		  "type": "address"
		}
	  ],
	  "name": "initialize",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "limitperwallet",
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
		  "internalType": "address payable",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "pause",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "paused",
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
	  "name": "token",
	  "outputs": [
		{
		  "internalType": "contract IToken",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "unpause",
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
	  "name": "whitelist",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	}
  ]

var minersAbi =
[
	{
		"constant": true,
		"inputs": [],
		"name": "ceoAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMyMiners",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "initialized",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "rt",
				"type": "uint256"
			},
			{
				"name": "rs",
				"type": "uint256"
			},
			{
				"name": "bs",
				"type": "uint256"
			}
		],
		"name": "calculateTrade",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "eth",
				"type": "uint256"
			},
			{
				"name": "contractBalance",
				"type": "uint256"
			}
		],
		"name": "calculateEggBuy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "marketEggs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "sellEggs",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "seedMarket",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "devFee",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ref",
				"type": "address"
			}
		],
		"name": "hatchEggs",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMyEggs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ref",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "buyEggs",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "lastHatch",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "claimedEggs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "hatcheryMiners",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "EGGS_TO_HATCH_1MINERS",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "eth",
				"type": "uint256"
			}
		],
		"name": "calculateEggBuySimple",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "eggs",
				"type": "uint256"
			}
		],
		"name": "calculateEggSell",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "referrals",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ceoAddress2",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "adr",
				"type": "address"
			}
		],
		"name": "getEggsSinceLastHatch",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]
var tokenAbi =
	[
			{
					"constant": true,
					"inputs": [],
					"name": "name",
					"outputs": [
							{
									"name": "",
									"type": "string"
							}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
			},
			{
					"constant": false,
					"inputs": [
							{
									"name": "_spender",
									"type": "address"
							},
							{
									"name": "_value",
									"type": "uint256"
							}
					],
					"name": "approve",
					"outputs": [
							{
									"name": "",
									"type": "bool"
							}
					],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
			},
			{
					"constant": true,
					"inputs": [],
					"name": "totalSupply",
					"outputs": [
							{
									"name": "",
									"type": "uint256"
							}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
			},
			{
					"constant": false,
					"inputs": [
							{
									"name": "_from",
									"type": "address"
							},
							{
									"name": "_to",
									"type": "address"
							},
							{
									"name": "_value",
									"type": "uint256"
							}
					],
					"name": "transferFrom",
					"outputs": [
							{
									"name": "",
									"type": "bool"
							}
					],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
			},
			{
					"constant": true,
					"inputs": [],
					"name": "decimals",
					"outputs": [
							{
									"name": "",
									"type": "uint8"
							}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
			},
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
			{
					"constant": true,
					"inputs": [],
					"name": "symbol",
					"outputs": [
							{
									"name": "",
									"type": "string"
							}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
			},
			{
					"constant": false,
					"inputs": [
							{
									"name": "_to",
									"type": "address"
							},
							{
									"name": "_value",
									"type": "uint256"
							}
					],
					"name": "transfer",
					"outputs": [
							{
									"name": "",
									"type": "bool"
							}
					],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
			},
			{
					"constant": true,
					"inputs": [
							{
									"name": "_owner",
									"type": "address"
							},
							{
									"name": "_spender",
									"type": "address"
							}
					],
					"name": "allowance",
					"outputs": [
							{
									"name": "",
									"type": "uint256"
							}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
			},
			{
					"payable": true,
					"stateMutability": "payable",
					"type": "fallback"
			},
			{
					"anonymous": false,
					"inputs": [
							{
									"indexed": true,
									"name": "owner",
									"type": "address"
							},
							{
									"indexed": true,
									"name": "spender",
									"type": "address"
							},
							{
									"indexed": false,
									"name": "value",
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
									"name": "from",
									"type": "address"
							},
							{
									"indexed": true,
									"name": "to",
									"type": "address"
							},
							{
									"indexed": false,
									"name": "value",
									"type": "uint256"
							}
					],
					"name": "Transfer",
					"type": "event"
			}
	]
var minersContract;
var tokenContract;
var presaleContract;

var canSell = true;
var canHatch = true;

function approveBUSD(trx) {
	  tokenContract.methods.approve(minersAddr, trx).send({ from: currentAddr });
}

function spendLimit(callback) {
  tokenContract.methods.allowance(currentAddr,minersAddr).call().then(result => {
        callback(result);
    }).catch((err) => {
        console.log(err)
    });
}

function contractBalance(callback){
    presaleContract.methods.checkContractBalance().call().then(result => {
			  var amt = web3.utils.fromWei(result)
				// console.log("balance" + amt)
        callback(amt);
    }).catch((err) => {
        console.log(err)
    });
}



function userBalance(callback){
    tokenContract.methods.balanceOf(currentAddr).call().then(result => {
			  var amt = web3.utils.fromWei(result)
				// console.log("balance" + amt)
        callback(amt);
				usrBal=amt;
    }).catch((err) => {
        console.log(err)
    });
}

function buyEggs(trx, callback){
	trx = "250"
	// if(+trx > +usrBal) {
	// 	alert("You don't have " + trx + " DAI in your wallet");
	// }
	// else if(+trx > +spend) {
	// 	alert("Approve spending " + trx + " DAI first");
	// } else {
			presaleContract.methods.Buy().send({ from:currentAddr }).then(result => {
        callback();
    }).catch((err) => {
        console.log(err)
    });
	// }
}


// function hatchEggs(ref,callback){
//     if (canHatch) {
//         canHatch = false;
//         minersContract.methods.hatchEggs(ref).send({from:currentAddr}).then(result => {
//             callback();
//         }).catch((err) => {
//             console.log(err)
//         });
//         setTimeout(function(){
//             canHatch = true;
//         },10000);
//     } else {
//         console.log('Cannot hatch yet...')
//     };
// }


// function sellEggs(callback){
//     if (canSell) {
//         canSell = false;
//         console.log('Selling');
//         minersContract.methods.sellEggs().send({from:currentAddr}).then(result => {
//             callback();
//         }).catch((err) => {
//             console.log(err)
//         });
//         setTimeout(function(){
//             canSell = true;
//         },10000);
//     } else {
//         console.log('Cannot sell yet...')
//     };
// }


// function calculateEggBuy(trx,contractBalance,callback){
//     minersContract.methods.calculateEggBuy(trx,contractBalance).call().then(result => {
//         callback(result);
//     }).catch((err) => {
//         console.log(err)
//     });
// }


// function calculateEggBuySimple(trx,callback){
//     minersContract.methods.calculateEggBuySimple(trx).call().then(result => {
//         callback(result);
//     }).catch((err) => {
//         console.log(err)
//     });
// }


// function calculateEggSell(eggs,callback){
//     minersContract.methods.calculateEggSell(eggs).call().then(result => {
//         callback(result);
//     }).catch((err) => {
//         console.log(err)
//     });
// }

// function claimedEggs(callback){
//     minersContract.methods.claimedEggs().call().then(result => {
//         callback(result);
//     }).catch((err) => {
//         console.log(err)
//     });
// }


// function devFee(amount,callback){
//     minersContract.methods.devFee(amount).call().then(result => {
//         callback(result);
//     }).catch((err) => {
//         console.log(err)
//     });
// }

// function getBalance(callback){
//     minersContract.methods.getBalance().call().then(result => {
//         callback(result);
//     }).catch((err) => {
//         console.log(err)
//     });
// }

// function getEggsSinceLastHatch(address,callback){
//     minersContract.methods.getEggsSinceLastHatch(address).call().then(result => {
//         callback(result);
//     }).catch((err) => {
//         console.log(err)
//     });
// }


// function getMyEggs(callback){
//     minersContract.methods.getMyEggs().call({from:currentAddr}).then(result => {
//         callback(result);
//     }).catch((err) => {
//         console.log(err)
//     });
// }

// function getMyMiners(callback){
//     minersContract.methods.getMyMiners().call({from:currentAddr}).then(result => {
//         if (result == '0x') {
//             result = 0;
//         }
//         callback(result);
//     }).catch((err) => {
//         console.log(err)
//     });
// }

// function lastHatch(address,callback){
//     minersContract.methods.lastHatch(address).call({from:currentAddr}).then(result => {
//         callback(result);
//     }).catch((err) => {
//         console.log(err)
//     });
// }

// function marketEggs(callback){
//     minersContract.methods.marketEggs().call().then(result => {
//         callback(result);
//     }).catch((err) => {
//         console.log(err)
//     });
// }
