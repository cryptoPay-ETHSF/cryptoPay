// window.addEventListener("load", () => {
    var checklist = {};
    checklist.isMetaMaskInstalled = false;
    checklist.isLoggedIn = false;
    checklist.isSupportedNetwork = false;
    checklist.networkId = 0;

/* Code For checking width compatibility */

var account;
if (typeof web3 !== "undefined") {
    web3 = new Web3(web3.currentProvider);
    if (web3.currentProvider) {
        checklist.isMetaMaskInstalled = true;
        web3 = new Web3(web3.currentProvider);
        account = web3.eth.accounts[0];

        if (account.length != 0) {
          checklist.isLoggedIn = true; 
          console.log('Working Great');
        }
        
        var netId = web3.version.network;
        checklist.networkId = netId;
        if (netId === "1" || netId === "42" || netId === "3") {
          checklist.isSupportedNetwork = true;
        }
    } else {
        console.log('not conected via any client');
    }
}
