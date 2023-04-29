const firebaseConfig = {
    apiKey: "AIzaSyDxjw0mMDA6CB7RVVlac5eWHR6WDf5cQfw",
    authDomain: "earnig-site-91cb9.firebaseapp.com",
    databaseURL: "https://earnig-site-91cb9-default-rtdb.firebaseio.com",
    projectId: "earnig-site-91cb9",
    storageBucket: "earnig-site-91cb9.appspot.com",
    messagingSenderId: "236262336739",
    appId: "1:236262336739:web:1e79157898ccf8a6debdd6"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();


//Addmin Login system
function loginUser() {
    if(true){
        let localStorageuName = localStorage.getItem('AddminUserName');
        var user_ref = db.ref('Addmin/' + 'AddminList/' + localStorageuName)
        user_ref.on('value', function(snapshot){
            var user = snapshot.val();

            //vew profile && edit profile
            document.querySelector("span#dysplyName").innerHTML = user.displayName;
            document.querySelector("img#img").src = user.photoURL;
            //vew profile && edit profile

            //signup date set localStorage
            localStorage.setItem("date", user.date);
            
        });
    }
}

//Addmin requst accept
function Addmin_Requst_Accept(){
    let localStorageuName = localStorage.getItem('AddminUserName');
    db.ref('Addmin/' + 'AddminList/' + localStorageuName)
        .on('value', function(snapshot){
        var allPostViwAddmin = snapshot.val();
        var postCount = allPostViwAddmin.admin;

        if(Request === 'Accept'){
            window.location = "/Addmin";
        }else if(postCount === 'Request'){
            window.location = "/AddminLogin";
        }
    });

    if(localStorageuName === 'AddminFreelancer'){
        // console.log("Yessssss");
        document.querySelector('b.admin-request').classList.add('display-block')
    }else{
        document.querySelector('b.Alladmin-request').classList.add('display-block')
        // console.log('Nooooo');
    }
    

    db.ref('Addmin/' + 'AddminList/')
    .on('value', function(snapshot){
    var Admin_Request = snapshot.val();
    // var usersCount = Object.keys(Admin_Request).length;
    //users List
    for(Admin_Requests in Admin_Request){
        let Admin_RequestsList = Admin_Request[Admin_Requests];
        if(Admin_RequestsList.admin === 'Request'){
            // console.log('Request');
            document.querySelector('p#admin-request-notifi').classList.add('display-block');
        }
    }

    });

}
Addmin_Requst_Accept();

//Addmin section
db.ref('Addmin/' + 'AddminList/')
    .on('value', function(snapshot){
    var stutas = snapshot.val();
    var stutasCount = Object.keys(stutas).length;
    document.querySelector('b#allAddmin').innerHTML = stutasCount;
});
db.ref('Addmin/' + 'AddminActive/')
    .on('value', function(snapshot){
    var stutas = snapshot.val();
    var stutasCount = Object.keys(stutas).length;
    document.querySelector('b#AddminActive').innerHTML = stutasCount;
});

//all users list
let allUsersList = document.querySelector('.allUsers');
db.ref('users/')
    .on('value', function(snapshot){
    var users = snapshot.val();
    var usersCount = Object.keys(users).length;
    document.querySelector('b.totalUsers').innerHTML = usersCount;
    allUsersList.innerHTML = '';
    //users List
    for(userse in users){
        let usersList = users[userse];

        allUsersList.innerHTML += `<div class="allUsersProfile">
        <img id="img" src="${usersList.photoURL}" alt="userImage">
        <div class="name-email"">
            <div class="names">${usersList.uName}</div>
            <div class="email">${usersList.email}</div>
        </div>
        <div class="UserIp">
        <span class="UserIPname">IP :</span>
        <span class="UIP">${usersList.ip}</span>
        </div>
        <div class="dvice">
            <span class="UserDvice">Dvice : </span>
            <span class="User-Dvice"><i class="${usersList.DviceWidth} fas"></i></span>
        </div>
        <div class="status-usersmass">
            <span class="span">Balance</span>
            <span class="Balance"">${usersList.Balance}</span>
        </div>
        </div>`;
        function dviceActiveAddmin(){
            if(usersList.DviceWidth){
                document.querySelectorAll('i.mobile').forEach((e)=>{
                    e.classList.add('fa-mobile');
                });
                document.querySelectorAll('i.tablet').forEach((e)=>{
                    e.classList.add('fa-laptop');
                });
                document.querySelectorAll('i.desktop').forEach((e)=>{
                    e.classList.add('fa-desktop');
                })
            }
        }dviceActiveAddmin()
    }

});

//all users list Active
let allUsersListActive = document.querySelector('.allUsersActive');
db.ref('Addmin/' + 'LoginAddmin/')
    .on('value', function(snapshot){
    var activeUsersList = snapshot.val();
    var stutaseCount = Object.keys(activeUsersList).length;
    document.querySelector('b.userActive').innerHTML = stutaseCount;
    allUsersListActive.innerHTML = '';
    for(activeUsersLists in activeUsersList){
        let usersActiveList = activeUsersList[activeUsersLists];

        allUsersListActive.innerHTML += `<div class="allUsersProfile">
        <img id="img" src="${usersActiveList.profilePick}" alt="userImage">
        <div class="name-email"">
            <div class="names">${usersActiveList.userName}</div>
            <div class="email">${usersActiveList.userEmail}</div>
        </div>
        <div class="UserIp">
            <span class="UserIPname">IP :</span>
            <span class="UIP">${usersActiveList.ip_address}</span>
        </div>
        <div class="dvice">
            <span class="UserDvice"></span>
            <span class="User-Dvice"><i class="${usersActiveList.dviceActive} fas "></i></span>
        </div>
        <span class="active-cercle1"></span>
        <div class="status-usersmass">
            <span class="span">Balance</span>
            <span class="Balance"">${usersActiveList.Balance}</span>
        </div>
        </div>`;

        function dviceActiveAddmin(){
            if(usersActiveList.DviceWidth){
                document.querySelectorAll('i.mobile').forEach((e)=>{
                    e.classList.add('fa-mobile');
                });
                document.querySelectorAll('i.tablet').forEach((e)=>{
                    e.classList.add('fa-laptop');
                });
                document.querySelectorAll('i.desktop').forEach((e)=>{
                    e.classList.add('fa-desktop');
                })
            }
        }dviceActiveAddmin()

        if(usersActiveList.activeStatus == 'active'){
            document.querySelectorAll('span.active-cercle1').forEach((e)=>{
                e.classList.add('active-cercle2');
            })
        }else if(usersActiveList.activeStatus == 'No-active'){
            document.querySelectorAll('span.active-cercle1').forEach((e)=>{
                e.classList.remove('active-cercle2');
            })
        }
    }
    

});


db.ref('Addmin/' + 'Widrows')
    .on('value', function(snapshot){
    var Widrows = snapshot.val();
    document.querySelector('b.widthrow').innerHTML = Widrows.widrowAmount;

});

//Users widrow history
let widrowHistoryBoday = document.querySelector("div#addmin-withrow-ditels");
db.ref('Addmin/' + 'AddminWidrow/')
    .on('value', function(snapshot){
    var widrowhistory = snapshot.val();
    let serial = 1;
    widrowHistoryBoday.innerHTML = '';
    for(widrowhistorys in widrowhistory){
        let widrowInformation = widrowhistory[widrowhistorys];

        widrowHistoryBoday.innerHTML +=`
            <div class="name chang" id="allName" data-itemid="${serial}">
                <span class="sL">${serial}</span>
                <input class='usersNameInput' id="paidUname" value="${widrowInformation.widrowUserName}" data-itemid="${serial}" hidden/>
                <span class="username">${widrowInformation.widrowUserName}</span>
                <input id="paidnumber" value="${widrowInformation.widrowNumber}" data-itemid="${serial}" hidden/>
                <span class="number">${widrowInformation.widrowNumber}</span>
                <input id="paidpmMethod" value="${widrowInformation.paymentMethod}" data-itemid="${serial}" hidden/>
                <span class="pmMethod">${widrowInformation.paymentMethod}</span>
                <input id="paidDate" value="${widrowInformation.widrowDate}" data-itemid="${serial}" hidden/>
                <span class="date">${widrowInformation.widrowDate}</span>
                <input id="paidamount" value="${widrowInformation.widrowAmount}" data-itemid="${serial}" hidden/>
                <span class="amount dd">Tk : ${widrowInformation.widrowAmount}</span>
                <input id="APIKay" value="${widrowhistorys}" data-itemid="${serial}" hidden/>
                <div class="button">
                    <input type="button" class="paid" id="tkPaid" value="Paid">
                    <input type="button" class="rijected" id="rijected" value="Rijected">
                </div>
            </div>`;
        serial++;
        
        //paid amount is ready
        function paidAmountIsReady(){
            let AllnameButton = document.querySelectorAll('#allName');
                AllnameButton.forEach((singleName)=>{
                    singleName.querySelector("#tkPaid").addEventListener('click',function(){
                        function amountIspaidRady(){
                            let paidUName = singleName.querySelector("#paidUname").value;
                            let paidNumber = singleName.querySelector("#paidnumber").value;
                            let paidPM = singleName.querySelector("#paidpmMethod").value;
                            let paidDate = singleName.querySelector("#paidDate").value;
                            let paidAmount = singleName.querySelector("#paidamount").value;
                            //widrow update function//////
                            function widrowUpdateList(){
                                let allnumber = singleName.querySelector("input#APIKay").value;
                                db.ref('Addmin/' + 'AddminWidrow/' + allnumber).remove()
                                
                            }widrowUpdateList()
                            //widrow update users function////
                            function widrowUpdateUsersFunction(){
                                db.ref('Addmin/' + 'Widrow/' + paidUName)
                                .on('value', function(snapshot){
                                var widrowpaidhistory = snapshot.val();
                                document.querySelector('div#addmin-withrow-ditels-paid-reject').innerHTML = '';
                                let serial = 1;
                                    for(widrowpaidhistorys in widrowpaidhistory){
                                        document.querySelector('div#addmin-withrow-ditels-paid-reject').innerHTML +=`<div class="widrowsTest">
                                            <span class="sL">${serial}</span>
                                            <input id="APIKays" value="${widrowpaidhistorys}" data-itemid="${serial}" readonly />
                                            <div class="button">
                                                <input type="button" class="paid" id="tkPaid2" value="Paid">
                                            </div>
                                        </div>`;
                                        serial++;

                                        //widrow update function//////
                                        function widrowUpdateListt(){
                                            let widrowsTest1 = document.querySelectorAll('.widrowsTest');
                                                widrowsTest1.forEach((singlewidrows) => {
                                                    singlewidrows.querySelector('#tkPaid2').addEventListener('click',function(){
                                                        let allAPIKay = singlewidrows.querySelector("input#APIKays").value;
                                                        db.ref('Addmin/' + 'Widrow/' + paidUName + '/' + allAPIKay).update({
                                                        widrowStatuse : 'Paid'
                                                        });
                                                    })
                                                    
                                                })
                                            
                                        }widrowUpdateListt();

                                    }
                                })

                            }widrowUpdateUsersFunction()
                            //widrow paid function//////
                            db.ref('Addmin/' + 'AddminWidrowPaid/').push({
                                UName : paidUName,
                                Number : paidNumber,
                                paymentMethod : paidPM,
                                Amount : paidAmount,
                                Date : paidDate
                            })

                        }amountIspaidRady();
                    })


                    singleName.querySelector("#rijected").addEventListener('click',function(){
                        function amountIspaidRady2(){
                            let paidUName = singleName.querySelector("#paidUname").value;
                            //widrow update function//////
                            function widrowUpdateList(){
                                let allnumber = singleName.querySelector("input#APIKay").value;
                                db.ref('Addmin/' + 'AddminWidrow/' + allnumber).remove()
                                
                            }widrowUpdateList()
                            //widrow update users function////
                            function widrowUpdateUsersFunction(){
                                db.ref('Addmin/' + 'Widrow/' + paidUName)
                                .on('value', function(snapshot){
                                var widrowpaidhistory = snapshot.val();
                                document.querySelector('div#addmin-withrow-ditels-paid-reject').innerHTML = '';
                                let serial = 1;
                                    for(widrowpaidhistorys in widrowpaidhistory){
                                        document.querySelector('div#addmin-withrow-ditels-paid-reject').innerHTML +=`<div class="widrowsTest">
                                            <span class="sL">${serial}</span>
                                            <input id="APIKays" value="${widrowpaidhistorys}" data-itemid="${serial}" readonly />
                                            <div class="button">
                                            <input type="button" class="rijected" id="rijected2" value="Rijected">
                                            </div>
                                        </div>`;
                                        serial++;

                                        //widrow update function//////
                                        function widrowUpdateListt(){
                                            let widrowsTest1 = document.querySelectorAll('.widrowsTest');
                                                widrowsTest1.forEach((singlewidrows) => {
                                                    singlewidrows.querySelector('#rijected2').addEventListener('click',function(){
                                                        let allAPIKay = singlewidrows.querySelector("input#APIKays").value;
                                                        db.ref('Addmin/' + 'Widrow/' + paidUName + '/' + allAPIKay).update({
                                                        widrowStatuse : 'Rejected'
                                                        });
                                                    })
                                                    
                                                })
                                            
                                        }widrowUpdateListt();
                                    }
                                })

                            }widrowUpdateUsersFunction()

                        }amountIspaidRady2();
                    })
                });
        }paidAmountIsReady();

    }
});
//widrow history Paid
let widrowHistoryPaidBoday = document.querySelector("div#addmin-withrow-ditels-paid");
db.ref('Addmin/' + 'AddminWidrowPaid/')
    .on('value', function(snapshot){
    var widrowhistoryPaid = snapshot.val();
    let serial = 1;
    widrowHistoryPaidBoday.innerHTML = '';
    for(widrowhistoryPaids in widrowhistoryPaid){
        let widrowhistoryPaidInfo = widrowhistoryPaid[widrowhistoryPaids];

        widrowHistoryPaidBoday.innerHTML +=`
            <div class="name chang" id="name">
                <span class="sL">${serial}</span>
                <span class="username">${widrowhistoryPaidInfo.UName}</span>
                <span class="number">${widrowhistoryPaidInfo.Number}</span>
                <span class="method">${widrowhistoryPaidInfo.paymentMethod}</span>
                <span class="date">${widrowhistoryPaidInfo.Date}</span>
                <span class="amount d">${widrowhistoryPaidInfo.Amount}</span>
                <div class="button">
                    <input type="button" class="paid" value="Paid">
                </div>
            </div>`;
        serial++;
    }
});


//Addmin login chack
function ActiveAddmin(){
    let localStorageuName = localStorage.getItem('AddminUserName');
    db.ref('Addmin/' + 'AddminActive/' + localStorageuName).set({
        userName : localStorageuName
    })
}
function InActiveAddmin(){
    let localStorageuName = localStorage.getItem('AddminUserName');
    db.ref('Addmin/' + 'AddminActive/' + localStorageuName).remove().then(
        function(){
            console.log(localStorageuName);
        }
    )
}

//onAuthStateChanged
auth.onAuthStateChanged(function(user){
    if(user){
        loginUser();
        ActiveAddmin();
    }else{
        // console.log("No Active Addmin ");
        window.location = "/AddminLogin";
    }
})

//sign out
function SignOut(){
    auth.signOut();
    InActiveAddmin();
    localStorage.clear();
    alert("Sign Out");
}
document.querySelector('div#addminLoguot').addEventListener('click',function(){
    SignOut();
})
//Addmin section
