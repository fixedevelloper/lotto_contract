var lotto = function () {
    'use strict';
    var initialiseABI = function(){
        const stakingaddress = "0x5f8E4C1d0a132D5040d2c7FCE3eFC0ec8bde1c7f";
        const StakingnmatrixAbi = [{"inputs":[{"internalType":"address","name":"AdminAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"Admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"_To","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CheckBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"winners","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"DistributeEarnings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"GetRefferalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GetTotalDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GettotalAmountReceive","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"IsUserRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NumberOfUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrerUser","type":"address"}],"name":"Registration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Userid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Users","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"address","name":"referrer","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Verification","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getTotalReferrals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"participation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"referrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newfees","type":"uint256"}],"name":"setParticipation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalAmountReceive","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        var balance_MAIN = "1000000000000000000000000";
        return {
            'stakingaddress':stakingaddress,
            'StakingnmatrixAbi':StakingnmatrixAbi,
            'balance_MAIN':balance_MAIN,
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
    const register=async function(){
        const account=await getAccount();
      //  const new_address=await idToAddress();
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
                    try {
                        const addr="0x20102e21237e7f70f6237e7f6Aa104CC3e5beb59"
                        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
                        var result = await window.mxgfcontract.methods.Registration(addr).send({
                            from: account,
                        });
                        if (result.status === true) {
                            var users=  await window.mxgfcontract.methods.Users(account).call();
                            console.log(users)
                            $.ajax({
                                url: configs.routes.register_ajax,
                                type: "GET",
                                dataType: "JSON",
                                data: {
                                    'address_parent': users[2],
                                    'address': account,
                                    'id': users[0]
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
                        toastr.error('Registration failed2' + JSON.stringify((e)),'Error')
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
    const getParentID=async function(){
        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
        var new_adress=  await window.mxgfcontract.methods.userIDs($('#parent_address').text()).call();
        $('#invited_by').text(new_adress)
    };

    return {
        init: function () {
            initialiseEtheruim();
            initialiseABI();
            $('#spinner_register').hide();
        },
        load: function () {
            initialiseEtheruim();
        },
        getAccount,
        register,
        login,
        getBalance,
        getParentID,
    }
}();
jQuery(document).ready(function() {
    'use strict';
    lotto.init();
});
jQuery(window).on('load',function () {
    'use strict';
    lotto.load();
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