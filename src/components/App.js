import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';

class App extends Component {

    async componentWillMount() {
        await this.loadWeb3()
        await this.loadBlockchainData()
    }

    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        } else {
            window.alert("Non-Ethereum browser detected. You should consider trying Metamask!")
        }
    }

    async loadBlockchainData() {
        const web3 = window.web3
            //load account
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })

        // const networkId = await web3.eth.net.getId()
        // const networkData = Color.networks[networkId]
        const abi = [{
                "constant": true,
                "inputs": [{
                    "name": "interfaceId",
                    "type": "bytes4"
                }],
                "name": "supportsInterface",
                "outputs": [{
                    "name": "",
                    "type": "bool"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [{
                    "name": "",
                    "type": "string"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "tokenId",
                    "type": "uint256"
                }],
                "name": "getApproved",
                "outputs": [{
                    "name": "",
                    "type": "address"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "index",
                        "type": "uint256"
                    }
                ],
                "name": "tokenOfOwnerByIndex",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "index",
                    "type": "uint256"
                }],
                "name": "tokenByIndex",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "tokenId",
                    "type": "uint256"
                }],
                "name": "ownerOf",
                "outputs": [{
                    "name": "",
                    "type": "address"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "owner",
                    "type": "address"
                }],
                "name": "balanceOf",
                "outputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [{
                    "name": "",
                    "type": "string"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [{
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "name": "_data",
                        "type": "bytes"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "",
                    "type": "uint256"
                }],
                "name": "colors",
                "outputs": [{
                    "name": "",
                    "type": "string"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{
                    "name": "tokenId",
                    "type": "uint256"
                }],
                "name": "tokenURI",
                "outputs": [{
                    "name": "",
                    "type": "string"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [{
                    "name": "_color",
                    "type": "string"
                }],
                "name": "mint",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [{
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "operator",
                        "type": "address"
                    }
                ],
                "name": "isApprovedForAll",
                "outputs": [{
                    "name": "",
                    "type": "bool"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [{
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
                        "indexed": true,
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [{
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "approved",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [{
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "ApprovalForAll",
                "type": "event"
            }
        ]
        const address = '0xCED4435B92dc32Cc25D35693748eBfc8A42D09D8'
        const contract = new web3.eth.Contract(abi, address)
        this.setState({ contract })
        const totalSupply = await contract.methods.totalSupply().call()
        this.setState({ totalSupply })
            //Load colors
        for (var i = 1; i <= totalSupply; i++) {
            const color = await contract.methods.colors(i - 1).call()
            this.setState({
                colors: [...this.state.colors, color]
            })
        }
        console.log(this.state.colors)

    }

    mint = (color) => {
      console.log(color)
      this.state.contract.methods.mint(color).send({ from: this.state.account })
      .once('receipt', (receipt) => {
        this.setState({
          colors: [...this.state.colors, color]
        })
      })
    }

    constructor(props) {
        super(props)
        this.state = {
            account: '',
            contract: null,
            totalSupply: 0,
            colors: []
        }
    }

    render() {
        return ( <
            div >
            <
            nav className = "navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow" >
            <
            a className = "navbar-brand col-sm-3 col-md-2 mr-0"
            href = "http://www.dappuniversity.com/bootcamp"
            target = "_blank"
            rel = "noopener noreferrer" >
            BITS Ingeniería <
            /a> <
            ul className = "navbar-nav px-3" >
            <
            li className = "nav-item text-nowrap d-none d-sm-none d-sm-block" >
            <
            small className = "text-white" > < span id = "account" > { this.state.account } < /span></small >
            <
            /li> < /
            ul > <
            /nav> <
            div className = "container-fluid mt-5" >
            <
            div className = "row" >
            <
            main role = "main"
            className = "col-lg-12 d-flex text-center">
            <div className = "content mr-auto ml-auto">
            <h1>Emitir Token</h1> 
            <form onSubmit={(event)=>{
              event.preventDefault()
              const color = this.color.value
              this.mint(color)
            }}>
             <input 
               type='text'
               className='form-control mb-1'
               placeholder='ejemplo #FFFFFF'
               ref={(input)=>{ this.color = input }}
              />
              <input 
               type='submit'
               className='btn btn-block btn-primary'
               value='Crear'
              />
            </form>
            </div> 
            </main> 
            </div>
            <hr/>
            <div className = "row text-center">
            {this.state.colors.map((color, key)=>{
             return(
                <div key={key} className="col-md-3 mb-3">
                 <div className="token" style={{ backgroundColor: color }}></div>
                 <div>{color}</div>
                </div>
              )
            })}
            </div> 
            </div> 
            </div >
        );
    }
}

export default App;