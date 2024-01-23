var subcription = function () {
    'use strict';
    var initialiseABIApprove = function(){
        const tokenaddress = "0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409";
        const tokennmatrixAbi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"Freeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"Unfreeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"freeze","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"frozen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"unfreeze","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        var balance_MAIN = "1000000000000000000000000";
        return {
            'tokenaddress':tokenaddress,
            'tokenmatrixAbi':tokennmatrixAbi,
            'balance_MAIN':balance_MAIN,
        }
    }
    var initialiseABI = function(){
        const stakingaddress = "0xB80A88737a27cEb19ec9874A61F4a7Ad9502e892";
        const StakingnmatrixAbi = [{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"}],"name":"LevelPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RandomRewardsDistributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"directReferrer","type":"address"}],"name":"Registration","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"RegistrationFeeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"}],"name":"RegistrationbyUser","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"directReferrer","type":"address"}],"name":"SponsorRewardsDistributed","type":"event"},{"inputs":[],"name":"Admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userToUpgrade","type":"address"},{"internalType":"uint256","name":"_level","type":"uint256"}],"name":"Buy_Qore_For","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userToUpgrade","type":"address"},{"internalType":"uint256","name":"_level","type":"uint256"}],"name":"Buy_Qore_ForByOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"DirectMETArewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Q10_Income","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"QORE_10_Income","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"QORE_4_Income","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"RandomRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"SetOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"UpgradeIncome","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"checkUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getDirectDownlineInfos","outputs":[{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getDirectPartnersCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getDirectReferrerReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getGlobalEarnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getInactiveUserGains","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getIndirectReferrerOfReferrerReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getIndirectReferrerReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastLevelBuyer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getLastLevelBuyerRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastLevelPurchase","outputs":[{"internalType":"address","name":"lastBuyer","type":"address"},{"internalType":"uint256","name":"levelPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastRegistration","outputs":[{"internalType":"uint256","name":"userID","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserCurrentLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserDirectReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserGains","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"idToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"inactiveUserGains","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"inactiveUsers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSystemlive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastLevelBuyer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastLevelBuyerRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"levelPrices","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberOfUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"paymentsMade","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"randomUser","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"referrerData","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"referrer","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newUser","type":"address"},{"internalType":"address","name":"directReferrer","type":"address"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newUser","type":"address"},{"internalType":"address","name":"directReferrer","type":"address"}],"name":"registerByOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"registrationFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newAdmin","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"setRegistrationFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setTokenContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"togglePause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"togglePaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalContributions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLevels","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalinvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"transferToReferrerRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"updateUserStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userDirectReferrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userGains","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userIDs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userQoreForCurrentLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userQoreForLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]
        var balance_MAIN = "1000000000000000000000000";
        return {
            'stakingaddress':stakingaddress,
            'StakingnmatrixAbi':StakingnmatrixAbi,
            'balance_MAIN':balance_MAIN,
        }
    }

    const approve= async function(){
        $('#spinner_approuve').show();
        const account=await getAccount();

        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABIApprove().tokenmatrixAbi, initialiseABIApprove().tokenaddress);
        const gasEstimated = await window.mxgfcontract.methods.approve(initialiseABI().stakingaddress, BigInt(initialiseABIApprove().balance_MAIN))
            .estimateGas({ from: account});
        console.log(gasEstimated)
        var balance = await window.mxgfcontract.methods.approve(initialiseABI().stakingaddress, BigInt(initialiseABI().balance_MAIN)).send({
            from: account,
            gasLimit: gasEstimated,
            gas: gasEstimated,

        });
        if (balance.transactionHash) {
            if (balance.transactionHash) {
                toastr.success('Wallet approve successfully', 'Success')
                $('#usdt_approve_id').addClass('list-group-item-success');
                $('#balance_id').addClass('list-group-item-success');
                $('#usdt_approve_id').removeClass('list-group-item-danger');
                $('#balance_id').removeClass('list-group-item-danger');

                // $('#balance_id').text(''+balance.transactionHash);
                $('#spinner_approuve').hide();
            }
            else {
                toastr.error('Wallet approve Failed!', 'Error')
                $('#spinner_approuve').hide();
            }

        }
    }
    const getAccount= async function(){
        const accounts = await window.web3.eth.getAccounts();
        return accounts[0];
    };
    const getBalance= async function(){
        const accounts = await getAccount();
        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABIApprove().tokenmatrixAbi, initialiseABIApprove().tokenaddress);
        const balance=  await window.mxgfcontract.methods.balanceOf(accounts).call();
        return balance;
    };
    const recuperation= async function(){
        var address=$("#new_address_recup").val();
        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
        var id=  await window.mxgfcontract.methods.userIDs(address).call();
        var addres_parent = await window.mxgfcontract.methods.getUserDirectReferrer(address).call();
        if (id>0){
            $.ajax({
                url: configs.routes.recuperation_ajax,
                type: "GET",
                dataType: "JSON",
                data: {
                    'address_parent': addres_parent,
                    'address': address,
                    'id': id
                },
                success: function (data) {
                    toastr.success('Registration Successfully', 'Success')
                    window.location.href=configs.routes.dashboard+'?id='+id;
                },
                error: function (err) {
                    $('#spinner_send_svg').show()
                    $('#spinner_send').hide();
                    toastr.error('An error ocurred while loading data ...!', 'Error')
                }
            });
        }else {
            toastr.error('User not exist', 'Error')
        }
    };
    const initialiseEtheruim = async function () {
        if (window.ethereum) {
            window.web3 = new Web3(ethereum);
            try {
                var networkid = await web3.eth.net.getId()
                if (networkid !== 56) {
                    alert('Connect to BNB Mainnet Network');
                } else {
                    var id_user = $('#id_user_smart').text();
                }
                console.log(networkid)
            } catch (error) {
                $('#spinner_dashboard').hide()
                alert('Error: Out of Gas: please reload this page')
                console.log(error)
            }
        } else if (window.web3) {
            window.web3 = new Web3(web3.currentProvider);
            web3.eth.sendTransaction({/* ... */});
        } else {
            alert('Requires ETH purse to interact smart contract You should consider trying MetaMask!');

        }
    };
    const activateLevel=async function(level){

        const balance=await getBalance();
        if (level===1 && convertDiv(balance)<10){
            toastr.error('Insufficient FDUSD on the balance', 'Error!')
            return ;
        }else if (level===2 && convertDiv(balance)<20){
            toastr.error('Insufficient FDUSD on the balance', 'Error!')
            return ;
        }else if (level===3 && convertDiv(balance)<30){
            toastr.error('Insufficient FDUSD on the balance', 'Error!')
            return ;
        }
        else if (level===4 && convertDiv(balance)<50){
            toastr.error('Insufficient FDUSD on the balance', 'Error!')
            return ;
        }
        else if (level===5 && convertDiv(balance)<100){
            toastr.error('Insufficient FDUSD on the balance', 'Error!')
            return ;
        }
        else if (level===6 && convertDiv(balance)<250){
            toastr.error('Insufficient FDUSD on the balance', 'Error!')
            return ;
        }else if (level===7 && convertDiv(balance)<500){
            toastr.error('Insufficient FDUSD on the balance', 'Error!')
            return ;
        }else if (level===8 && convertDiv(balance)<1250){
            toastr.error('Insufficient FDUSD on the balance', 'Error!')
            return ;
        }else if (level===9 && convertDiv(balance)<2500){
            toastr.error('Insufficient FDUSD on the balance', 'Error!')
            return ;
        }else if (level===10 && convertDiv(balance)<5000){
            toastr.error('Insufficient FDUSD on the balance', 'Error!')
            return ;
        }
        $('#_loading_dialog').show()

        const account=await getAccount()
        try {
            window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
            var result = await window.mxgfcontract.methods.Buy_Qore_For(account, Number.parseInt(level)).send({
                from: account,
                gasLimit: 600000,
                gas: 600000,
            });
            if (result.status === true) {
                $.ajax({
                    url: configs.routes.activate_level,
                    type: "GET",
                    dataType: "JSON",
                    data: {
                        'level': level,
                        'address': account
                    },
                    success: function (data) {
                        toastr.success('Activation Successfully!', 'Success')
                        $('#_loading_dialog').hide()
                        window.location.reload(true);
                    },
                    error: function (err) {
                        $('#_loading_dialog').hide()
                        toastr.error('An error ocurred while loading data ...!', 'Error')
                    }
                });
            } else {
                $('#_loading_dialog').hide()
            }
        }catch (e) {
            toastr.error('Insufficient FDUSD on the balance', 'Error!')
            $('#_loading_dialog').hide()
        }
    }
    const activateLevelByOwner=async function(){
        const account=await getAccount()
        $('#spinner_loader').show()
        const account_activate=$('#new_address').val();
        try {
            window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
            var result = await window.mxgfcontract.methods.Buy_Qore_ForByOwner(account_activate, Number.parseInt($('#level').val())).send({
                from: account,
                gasLimit: 600000,
                gas: 600000,
            });
            if (result.status === true) {
                $.ajax({
                    url: configs.routes.activate_level,
                    type: "GET",
                    dataType: "JSON",
                    data: {
                        'level': $('#level').val(),
                        'address': account_activate
                    },
                    success: function (data) {
                        toastr.success('Activation Successfully!', 'Success')
                        $('#spinner_loader').hide()
                        window.location.reload(true);
                    },
                    error: function (err) {
                        $('#spinner_loader').hide()
                        toastr.error('An error ocurred while loading data ...!', 'Error')
                    }
                });
            } else {
                $('#spinner_loader').hide()
            }
        }catch (e) {
            toastr.error('Server internal error', 'Error!')
            $('#spinner_loader').hide()
        }
    }
    const register=async function(){
        const account=await getAccount();
        const new_address=await idToAddress();
        $.ajax({
            url: configs.routes.check_register,
            type: "GET",
            dataType: "JSON",
            data: {
                'address':account
            },
            success: async function (data) {
                if (data.is_in===false){
                    $('#spinner_register').show();
                    console.log(new_address)
                    try {
                        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
                        /* const gasEstimated = await window.mxgfcontract.methods.register(account, new_address)
                             .estimateGas({ from: account});
                         console.log(gasEstimated)*/
                        var gasprice = await web3.eth.getGasPrice();
                        gasprice = Math.round(gasprice * 1.2);
                        var result = await window.mxgfcontract.methods.register(account, new_address).send({
                            from: account,
                            gasLimit: 1000000,
                            gas: 1000000,
                            //gasPrice:  web3.utils.toHex(gasprice),

                        });
                        if (result.status === true) {
                            var id=  await window.mxgfcontract.methods.userIDs(account).call();
                            $.ajax({
                                url: configs.routes.register_ajax,
                                type: "GET",
                                dataType: "JSON",
                                data: {
                                    'address_parent': new_address,
                                    'address': account,
                                    'id': id
                                },
                                success: function (data) {
                                    toastr.success('Registration Successfully', 'Success')
                                    window.location.href=configs.routes.dashboard+'?id='+id;
                                },
                                error: function (err) {
                                    $('#spinner_send_svg').show()
                                    $('#spinner_send').hide();
                                    toastr.error('An error ocurred while loading data ...!', 'Error')
                                }
                            });

                            $('#spinner_register').hide();
                            //  window.location.href = url;
                        } else {
                            toastr.error('Registration failed' + JSON.stringify((result)),'Error')
                            $('#spinner_register').hide();
                        }
                    }catch (e) {
                        toastr.error('Registration failed' + JSON.stringify((result)),'Error')
                        $('#spinner_register').hide();
                    }

                }else {
                    toastr.warning('You are already registered please login')
                }

            },
            error: function (err) {

            }
        });

    };
    const register_owner=async function(){
        const new_address=$('#new_address').val();
        const owner_address=$('#owner_address').val();
        $('#spinner_loader').show();
        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
        var result = await window.mxgfcontract.methods.registerByOwner(new_address, owner_address).send({
            from: owner_address,
            gasLimit: 600000,
            gas: 600000,

        });
        if (result.status === true) {
            var id=  await window.mxgfcontract.methods.userIDs(new_address).call();
            $.ajax({
                url: configs.routes.register_ajax,
                type: "GET",
                dataType: "JSON",
                data: {
                    'address_parent': owner_address,
                    'address': new_address,
                    'id': id
                },
                success: function (data) {
                    toastr.success('Registration Successfully', 'Success')
                    window.location.reload(true);
                    $('#spinner_loader').hide();
                },
                error: function (err) {
                    $('#spinner_loader').hide();
                    toastr.error('An error ocurred while loading data ...!', 'Error')
                }
            });

            $('#spinner_loader').hide();
        } else {
            toastr.error('Registration failed' + JSON.stringify((result)),'Error')
            $('#spinner_loader').hide();
        }


    };
    const login=async function(){
        var account= await getAccount();
        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
        var id=  await window.mxgfcontract.methods.userIDs(account).call();
        console.log(id)
        if (id>0){
            $.ajax({
                url: configs.routes.login_next,
                type: "GET",
                dataType: "JSON",
                data: {
                    'id':id,
                    'address':account
                },
                success: function (data) {
                    toastr.success('Login Successfully', 'Success')
                    window.location.href=configs.routes.dashboard + "?id=" + id;
                },
                error: function (err) {
                    $('#spinner_send_svg').show()
                    $('#spinner_send').hide();
                    toastr.error('Echec login', 'Error!')
                }
            });
        }else {
            //window.location.href=configs.routes.dashboard + "?id=" + id;
            toastr.error('Echec login', 'Error!')
        }

    };
    const sendLottery=async function(){
        $('#spinner_send').show();
        $('#spinner_send_svg').hide()
        var account= await lottery.getAccount()
        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().abi, initialiseABI().address);
        const gasEstimated = await window.mxgfcontract.methods.pick4Numbers(array[0],array[1],array[2],array[3]).estimateGas({ from: account,value:4000000000000000 });
        var result = await window.mxgfcontract.methods.pick4Numbers(array[0],array[1],array[2],array[3]).send({
            from: account,
            gasLimit: gasEstimated,
            gas: gasEstimated,
            value:4000000000000000
        });
        if (result.transactionHash) {
            $.ajax({
                url: configs.routes.sendLottory,
                type: "GET",
                dataType: "JSON",
                data: {
                    'numbers':array,
                    'address':account
                },
                success: function (data) {
                    console.log(data)
                    $('#spinner_send').hide();
                    $('#spinner_send_svg').show()
                    alert("Operation successful!")
                    window.location.reload(true);
                },
                error: function (err) {
                    $('#spinner_send_svg').show()
                    $('#spinner_send').hide();
                    alert("An error ocurred while loading data ...");
                }
            });
        }

    }
    const idToAddress=async function(){
        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
        var new_adress=  await window.mxgfcontract.methods.idToAddress(document.getElementById("referralid").value).call();
        console.log(new_adress)
        return new_adress;
    };
    const getAccountBy_id=async function(){
        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
        var new_adress=  await window.mxgfcontract.methods.idToAddress($('#user_id').text()).call();
        return new_adress;
    };
    const getTotalUsers=async function(){
        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
        try {
            var total_user=  await window.mxgfcontract.methods.numberOfUsers().call();
            $('#total_user').text(total_user)
        }catch (e) {
            console.log(e)
        }

    };
    const getTotalInvested=async function(){
        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
        try {
            var total_invest=  await window.mxgfcontract.methods.totalinvest().call();

            $('#total_invest').text(convertDiv(total_invest))
        }catch (e) {
            console.log(e)
        }

    };
    const getTeam= async function(){
        const account= await getAccountBy_id();
        const de =await calculateTotalTeam(account)
        $("#team_total").text(de)
    }
    const calculateTotalTeam= async function( userAddress,visited = new Set()){
        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
        if (visited.has(userAddress)) {
            return 0;
        }
        visited.add(userAddress);
        let totalCount =Number.parseInt( await window.mxgfcontract.methods.getDirectPartnersCount(userAddress).call());

        const partnersAddresses =  await window.mxgfcontract.methods.getDirectDownlineInfos(userAddress).call();
        for (const partnerAddress of filterAdresse(partnersAddresses[0])) {
            totalCount += Number.parseInt(await calculateTotalTeam( partnerAddress, visited)) ;
        }

        return totalCount;
    }
    const getParentID=async function(){
        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
        var new_adress=  await window.mxgfcontract.methods.userIDs($('#parent_address').text()).call();
        $('#invited_by').text(new_adress)
    };
    const profit=async function(){
        var account= await getAccountBy_id();
        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
        var s4_come=  await window.mxgfcontract.methods.QORE_4_Income(account).call();
        var s10_come=  await window.mxgfcontract.methods.QORE_10_Income(account).call();
        var direct_ic=  await window.mxgfcontract.methods.getDirectReferrerReward(account).call();
        const total=Number(convertDiv(s4_come))+Number(convertDiv(s10_come))+Number(convertDiv(direct_ic))
        $('#profit_1').text(total+" ")
        var last_review_layer=  await window.mxgfcontract.methods.getLastLevelBuyerRewards(account).call();
        var randon_rewars=  await window.mxgfcontract.methods.RandomRewards(account).call();
        var user_agin=  await window.mxgfcontract.methods.getUserGains(account).call();
        const total_free=Number(convertDiv(last_review_layer))+Number(convertDiv(randon_rewars))+Number(convertDiv(user_agin))

        $('#profit_free').text(roundDecimal(total_free,2)+" ")
        $('#qore').text(roundDecimal(total_free,2)+total)
    };
    const getPreviousNumber=async function(){
        var account= await lottery.getAccount()
        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().abi, initialiseABI().address);
        var current_balance=  await window.mxgfcontract.methods.getPreviousNumberPair().call();
        console.log(Object.values(current_balance))
        $('#previous_number').text("First:"+Object.values(current_balance)[0]+" Second:"+Object.values(current_balance)[1])
    };
    return {
        init: function () {
            initialiseEtheruim();
            initialiseABI();
            getTotalUsers()
            $('#spinner_register').hide();
            $('#spinner_approuve').hide();
            $('#spinner_loader').hide();
        },
        load: function () {
            initialiseEtheruim();
        },
        getAccount,
        register,
        login,
        approve,
        activateLevel,
        profit,
        getBalance,
        getParentID,
        register_owner,
        activateLevelByOwner,
        getTotalInvested,
        getTeam,
        recuperation
    }
}();
jQuery(document).ready(function() {
    'use strict';
    subcription.init();
});
jQuery(window).on('load',function () {
    'use strict';
    subcription.load();
});
function filterAdresse(tabs) {
    childs = tabs.filter(element => element !== "0x0000000000000000000000000000000000000000");
    return childs;
}
function convertDiv(amount) {
    if (amount>0){
        return amount/1000000000000000000;
    }
    return amount;
}
function roundDecimal(nombre, precision){
    var precision = precision || 2;
    var tmp = Math.pow(10, precision);
    return Math.round( nombre*tmp )/tmp;
}
