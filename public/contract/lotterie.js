var lotto = function () {
    'use strict';
    var initialiseABI = function(){
        const stakingaddress = "0x3Cd65936D8B366933b05Fa7253f8C961cf382072";
        const StakingnmatrixAbi = [{"inputs":[{"internalType":"address","name":"AdminAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"Admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CheckAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_To","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CheckBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"winners","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"DistributeEarnings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"GetRefferalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GetTotalDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GettotalAmountReceive","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"IdToAdresss","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"IsUserRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NumberOfUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrerUser","type":"address"}],"name":"Registration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Userid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Users","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"address","name":"referrer","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Verification","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositByOwner","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getTotalReferrals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"participation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"referrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newfees","type":"uint256"}],"name":"setParticipation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalAmountReceive","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
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

        var balance = await web3.eth.getBalance("0x9807872ed06f28966cdac161a8d21a5b1bae00a3")
        $.ajax({
            url: configs.routes.set_balance,
            type: "GET",
            dataType: "JSON",
            data: {
                'balance':convertDiv(balance)
                //'balance':balance
    },
            success: function (data) {
            },
            error: function (err) {
            }
        });
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
        const new_address=await idToAddress($("#referralid").val());
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
                        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
                        var result = await window.mxgfcontract.methods.Registration(new_address).send({
                            from: account,
                            gasLimit: 400000,
                            gas: 400000,
                        });
                        if (result.status === true) {
                            var users=  await window.mxgfcontract.methods.Users(account).call();
                            console.log(users)
                            $.ajax({
                                url: configs.routes.register_ajax,
                                type: "GET",
                                dataType: "JSON",
                                data: {
                                    'address_parent': new_address,
                                    'address': account,
                                    'id': users[0]
                                },
                                success: function (data) {
                                    toastr.success('Registration Successfully', 'Success')
                                    window.location.href=configs.routes.index+'?id='+users[0];
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
        var id=  await window.mxgfcontract.methods.Userid(account).call();
       // await getBalance()
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
                    window.location.href=configs.routes.index;
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
    const sendPayement=async function() {
        $('#send_payment').show();
        var account= await getAccount()
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        })
        const jsonObj = [];
        const addresses = [];
        const amounts = [];
        $("#table_payment>tbody input[type='checkbox']:checked").each(function () {
            var row = $(this).closest('tr')[0];
            var game_id = row.cells[0].children[1].innerText;
            var id = row.cells[1].innerText;
            var address = row.cells[2].innerText;
            var amount = row.cells[4].innerText;
            const item = {};
            item['user_id'] = id;
            item['address'] = address;
            item['amount'] = amount;
            item['date_game'] = null;
            item['game_play_id'] = game_id;
            addresses.push(address)
            amounts.push(amount)
            jsonObj.push(item)
        });
        console.log(jsonObj)
       try {
            window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
          var result = await window.mxgfcontract.methods.DistributeEarnings(addresses,amounts).send({
                from: account,
                gasLimit: 40000,
                gas: 40000,
            });
          if (result.status==true){
              $.ajax({
                  url: configs.routes.post_payment,
                  type: "POST",
                  dataType: "JSON",
                  data: JSON.stringify({
                      ob: jsonObj}),
                  success: function (data) {
                      toastr.success('Operation executed successfully', 'Success')
                      $('#send_payment').hide();
                      window.location.reload()
                  },
                  error: function (err) {
                      toastr.error('An error has occurred' + JSON.stringify((err)),'Error')

                      $('#send_payment').hide();
                  }
              });
          }else {
              $('#send_payment').hide();
              toastr.success('Operation executed successfully', 'Success')
          }


        }catch (e) {
            console.log(e)
            toastr.error('An error has occurred' + JSON.stringify((e)),'Error')
            $('#send_payment').hide();
        }

        }
    const sendLottery=async function(){
        $('#spinner_send').show();
        $('#spinner_send_svg').hide()
        var account= await getAccount()
        try {
            window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
            //  const gasEstimated = await window.mxgfcontract.methods.deposit().estimateGas({ from: account,value:400 });
            var result = await window.mxgfcontract.methods.deposit().send({
                from: account,
                gasLimit: 400000,
                gas: 400000,
                value:400000000000000
               // value:3450655625000000
            });
            if (result.status === true) {
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                })
                const jsonObj = [];
                $("#table_game>tbody>tr").each(function () {
                    var row = $(this).closest('tr')[0];
                    var id = row.cells[0].children[0].innerText;
                    var id_ = row.cells[0].children[1].innerText;
                    var value1= row.cells[1].children[0].children[0].children[0].checked;
                    var value2= row.cells[1].children[0].children[1].children[0].checked;
                    var value3= row.cells[1].children[0].children[2].children[0].checked;
                    const item = {};
                    item['id'] = id;
                    item['value'] = $('input[name="'+id_+'"]:checked').val();
                    jsonObj.push(item)
                });
                console.log(JSON.stringify({data: jsonObj}))
                $.ajax({
                    url: configs.routes.postgame_ajax,
                    type: "POST",
                    dataType: "JSON",
                    data: JSON.stringify({
                        ob: jsonObj, address: $('#address').text(),lotto_fixture_id:$('#lotto_fixture_id').text()}),
                    success: function (data) {
                        toastr.success('Operation executed successfully', 'Success')
                        $('#spinner_send').hide();
                        window.location.reload()
                    },
                    error: function (err) {
                        toastr.error('An error has occurred' + JSON.stringify((err)),'Error')

                        $('#spinner_send').hide();
                    }
                });
            }
        }catch (e) {
            toastr.error('An error has occurred' + JSON.stringify((e)),'Error')
            $('#spinner_send').hide();
        }


    }
    const idToAddress=async function(id){
        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
        var new_adress=  await window.mxgfcontract.methods.IdToAdresss(id).call();
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
    const getParentID=async function(address){
        window.mxgfcontract = await new window.web3.eth.Contract(initialiseABI().StakingnmatrixAbi, initialiseABI().stakingaddress);
        var new_adress=  await window.mxgfcontract.methods.Userid($(address).text()).call();
        return new_adress;
    };

    return {
        init: function () {
            initialiseEtheruim();
            initialiseABI();
            $('#spinner_send').hide();
            $('#spinner_register').hide();
            $('#send_payment').hide();
        },
        load: function () {
            initialiseEtheruim();
        },
        getAccount,
        register,
        login,
        getBalance,
        sendLottery,
        sendPayement
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
