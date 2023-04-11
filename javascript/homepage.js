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

//-------------------refrenc----------------------------//
const signout = document.querySelector('.Signout');

//----------------------aouthentication process----------//

function loginUser() {
    if(true){
        let localStorageuName = localStorage.getItem('userName');
        var user_ref = db.ref('users/' + localStorageuName)
        user_ref.on('value', function(snapshot){
            var user = snapshot.val();


            //vew profile && edit profile
            document.querySelector("input#name").value = user.displayName;
            document.querySelector("input#uname").value = user.uName;
            document.querySelector("input#email").value = user.email;
            document.querySelector("input#number").value = user.phoneNumber;
            document.querySelector("input#password").value = user.password;
            //password set localstorage
            localStorage.setItem('password',user.password);
            sessionStorage.setItem('password',user.password);
            document.querySelector("img#select-img").src = user.photoURL;
            document.querySelector("input#reffarelCode").value += user.reffarelCode;
            //vew profile && edit profile
            

            //get database data use
            document.querySelector(".RefarelCode").innerHTML = user.reffarelCode;
            document.querySelector(".userNam").innerHTML = user.uName;
            localStorage.setItem('minBalance',user.Balance);
            //
            document.querySelector(".balanc").innerHTML = user.Balance;
            document.querySelector(".profilePick img").src = user.photoURL;
            localStorage.setItem('profilePick',user.photoURL);
            localStorage.setItem('userPhoto',user.photoURL);
            localStorage.setItem('userEmail',user.email);

            //signup date set localStorage
            localStorage.setItem("date", user.date);
            //minimum balance chack sistems
            let minimumBalance = document.querySelector(".minimum");
            let minBalance = user.Balance;
            if(minBalance >= 1000.00){
                minimumBalance.classList.add('active');
            }

            //widrow alwo sistems
            let refarelAccountCounter = localStorage.getItem("refarelAccountCounter");
            if(minBalance >= 1000.00 && refarelAccountCounter >= '2'){
                document.querySelector(".chack").classList.add("active");
            }
            
        });

        //refarel account counter
        let localSfarelCode = localStorage.getItem('userreffarelCode');
        var user_ref = db.ref('refarel/'+ localSfarelCode)
        user_ref.on('value', function(snapshot){
            var refarel = snapshot.val();
            //get database refarel data use
            if(refarel === null){
                // console.log("Null");
            }else{
                // console.log("Yes");
                var refarelCount = Object.keys(refarel).length;
                localStorage.setItem("refarelAccountCounter",refarelCount);
                // console.log(refarelCount);
                document.querySelector(".Affilate-Acount-count").innerHTML = refarelCount;
                
                if(refarelCount >= 2){
                    // console.log('Yes');
                    document.querySelector(".refarel-link").classList.add("active");

                    //minimum refarel 5 account cearted chack
                document.querySelector(".refarel").classList.add('active');
                }else{
                    // console.log('No');
                }
                for(refareluser in refarel){
                    // console.log(refareluser);
                    
                }
            }
            
        });

        var user_earn = db.ref('refarelBalance/' + localSfarelCode)
        user_earn.on('value', function(snapshot){
            var user_earnadd = snapshot.val();
            if(user_earnadd === null){
                // console.log("Null");
            }else{
                // console.log("Yes");
                // console.log(user_earnadd.Balance);

                let earnBalance = Number(user_earnadd.Balance);
                if(earnBalance === null){
                    // console.log("Null");
                }else{
                    // console.log("Yes");
                    if(earnBalance === null){
                        // console.log("No Earn Balance");
                        localStorage.removeItem("updateBalance");
                    }else{
                        let updateBalance = Number(localStorage.getItem('minBalance'));
                        let newBalance = earnBalance + updateBalance;
                        localStorage.setItem("updateBalance",newBalance);

                        //Earn Balance update
                        setTimeout(() => {
                            db.ref('refarelBalance/' + localSfarelCode).update({
                                Balance : '0.00'
                            })
                        }, 5000);

                        db.ref('users/' + localStorageuName).update({
                            Balance : Number(newBalance)
                        });
                    }
                }

                
            }
            
        });
    }
}

///////////Earn Balance Add And Update//////////////////////////////////////
function earnBalancAdd(){
    let localStorageuName = localStorage.getItem('userName');
    let earnBalance = 1;
    let updateBalance = Number(localStorage.getItem('minBalance'));
    let newEarnBalance = earnBalance + updateBalance;
    localStorage.setItem("updateBalance",newEarnBalance);
    // console.log(newEarnBalance);

    //Earn Balance update

    db.ref('users/' + localStorageuName).update({
        Balance : Number(newEarnBalance)
    });
}
document.querySelector('div#income-box1-Claim-Now-1').addEventListener('click',function(){
    earnBalancAdd()
});
document.querySelector('div#income-box2-Claim-Now-2').addEventListener('click',function(){
    earnBalancAdd()
});
document.querySelector('div#income-box3-Claim-Now-3').addEventListener('click',function(){
    earnBalancAdd()
});
document.querySelector('div#income-box4-Claim-Now-4').addEventListener('click',function(){
    earnBalancAdd()
});
document.querySelector('div#income-box5-Claim-Now-5').addEventListener('click',function(){
    earnBalancAdd()
});
document.querySelector('div#income-box6-Claim-Now-6').addEventListener('click',function(){
    earnBalancAdd()
});
document.querySelector('div#income-box7-Claim-Now-7').addEventListener('click',function(){
    earnBalancAdd()
});
document.querySelector('div#income-box8-Claim-Now-8').addEventListener('click',function(){
    earnBalancAdd()
});
document.querySelector('div#income-box9-Claim-Now-9').addEventListener('click',function(){
    earnBalancAdd()
});
document.querySelector('div#income-box10-Claim-Now-10').addEventListener('click',function(){
    earnBalancAdd()
});
document.querySelector('div#income-box11-Claim-Now-11').addEventListener('click',function(){
    earnBalancAdd()
});
document.querySelector('div#income-box12-Claim-Now-12').addEventListener('click',function(){
    earnBalancAdd()
});
///////////Earn Balance Add And Update/////////////////////////////

//widrow
let widrowUserName = document.querySelector("input#widrowUserName");
let widrowUserEmail = document.querySelector("input#widrowUserEmail");
let widrowNumber = document.querySelector("input#bkashRocketNumber");
let widrowAmount = document.querySelector("input#amunt");
let widrowSubmit = document.querySelector("input#widrow-submit");
let aleart = document.querySelector(".alaert");
let localStorageuName = localStorage.getItem('userName');
let localStorageuEmail = localStorage.getItem('userEmail');

function widrow(){
    widrowSubmit.addEventListener('click', function(e){
        let widrowUserNameValue = widrowUserName.value;
        let widrowUserEmailValue = widrowUserEmail.value;
        let widrowNumberValue = widrowNumber.value;
        let widrowAmountValue = widrowAmount.value;

        if(widrowUserNameValue == ''){
            aleart.innerHTML = "widrow UserName is emtay!";
            aleart.classList.remove("active")
        }else if(widrowUserEmailValue == ''){
            aleart.innerHTML = "widrow UserEmail is emtay!";
            aleart.classList.remove("active")
        }else if(widrowNumberValue == ''){
            aleart.innerHTML = "widrow Number is emtay!";
            aleart.classList.remove("active")
        }else if(widrowAmountValue == ''){
            aleart.innerHTML = "widrow Amount is emtay!";
            aleart.classList.remove("active")
        }else{

            if(widrowUserNameValue === localStorageuName){
                if(widrowUserEmailValue === localStorageuEmail){
                    //widrow value is emtay
                    setTimeout(() => {
                        widrowUserName.value = '';
                        widrowUserEmailValue = '';
                        widrowAmount.value = '';
                        widrowNumber.value = '';
                        aleart.innerHTML = "";
                    }, 3000);

                    //alaert
                    let updateBalance = Number(localStorage.getItem('minBalance'));
                    let widrowAmountupdate = Number(widrowAmountValue);
                    let newUpdateBalance = updateBalance - widrowAmountupdate;
                    //users minBalance - widrow balance update
                    //users widrow statuse update
                    let widrowStatuse = localStorage.getItem('widrowStatuse');
                    // console.log("Paide");
                    if(updateBalance < widrowAmountupdate){
                        aleart.innerHTML = "Balance is Short";
                        // console.log("Not Balance");
                    }else{

/////////////////////////////widrow time set////////////////////
                    setInterval (()=>{
                    },1000) ;
                        /////////widrow time set///////////////
                        const clock = new Date();
                        let hour = clock.getHours();
                        // let date = clock.getDate();

                        let ampm = hour <= 12 ? 'AM' : 'PM' ;
                            hour = hour % 12 ;
                            hour = hour ? hour : 12 ;

                        let Minutes = clock.getMinutes();
                            Minutes = Minutes < 10 ? '0' + Minutes : Minutes ;
                        let Seconds = clock.getSeconds();
                        Seconds = Seconds < 10 ? '0' + Seconds : Seconds ;

                        let widroTime = hour+':'+Minutes+':'+Seconds+':'+ampm;
                        // let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()];
                        let date = clock.getDate();

                        // let monthly = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Des'][new Date().getDay()];
                        let month = clock.getMonth() + 1;

                        let years = clock.getFullYear() ;
                        let widrowDate = date+'/'+month+'/'+years;

                        aleart.innerHTML = "Widrow Succsess";
                        aleart.classList.add("active")
                        db.ref('users/' + localStorageuName).update({
                            Balance : newUpdateBalance
                        });
                        //set widrow balance addmin pannele
                        db.ref('Addmin/' + 'Widrow/' + localStorageuName).push({
                            widrowUserName : widrowUserNameValue,
                            widrowUserEmail : widrowUserEmailValue,
                            widrowNumber : widrowNumberValue,
                            widrowAmount : widrowAmountValue,
                            widrowTime : widroTime,
                            widrowDate : widrowDate,
                            widrowStatuse : 'Pending'
                        })
                        db.ref('Addmin/' + 'AddminWidrow/').push({
                            widrowUserName : widrowUserNameValue,
                            widrowUserEmail : widrowUserEmailValue,
                            widrowNumber : widrowNumberValue,
                            widrowAmount : widrowAmountValue,
                            widrowTime : widroTime,
                            widrowDate : widrowDate,
                            widrowStatuse : 'Pending'
                        })

                        db.ref('Addmin/' + 'Widrows')
                            .on('value', function(snapshot){
                            var Widrows = snapshot.val();
                            if(Widrows.widrowAmount == 0){
                                // console.log("0",Widrows);
                                db.ref('Addmin/' + 'Widrows/').set({
                                     widrowAmount : widrowAmountValue
                                })
                            }else{
                                // console.log("Others",Widrows);
                                let widthrow = Number(Widrows.widrowAmount);
                                localStorage.setItem('widthrow',widthrow);
                                // console.log(widthrow);
                            }
                            

                        })
                        
                        
                    }
                    
                }else{
                    aleart.innerHTML = "Not Match UserEmail!";
                    aleart.classList.remove("active")
                }
            }else{
                aleart.innerHTML = "Not Match UserName!";
                aleart.classList.remove("active")
            }
            
        }
        let localWidthrow = localStorage.getItem('widthrow')
        console.log(typeof(Number(localWidthrow)),typeof(Number(widrowAmountValue)));
        
        db.ref('Addmin/' + 'Widrows/').update({widrowAmount : Number(localWidthrow) + Number(widrowAmountValue)})
        
        console.log(widrowUserName.value);
        e.preventDefault();
    })
}


//user active login date
function userActive(){
    const clock = new Date();
    let date = clock.getDate();
    var setDate = 'Date : ' + date;
    db.ref('Addmin/' + 'Login/' + localStorageuName).update({
        login : setDate
    })
    db.ref('Addmin/' + 'Status/' + localStorageuName).update({
        status : 'Oneline'
    })
}

//login chack
function userActiveAddmin(){
    db.ref('Addmin/' + 'LoginAddmin/' + localStorageuName).set({
        userName : localStorageuName
    })
}
function userInActiveAddmin(){
    db.ref('Addmin/' + 'LoginAddmin/' + localStorageuName).remove().then(
        function(){
            console.log(localStorageuName);
        }
    )
}
//login chack

//user active in login date
function userInActive(){
    const clock = new Date();
    let date = clock.getDate();
    var setDate = 'Date : ' + date;
    db.ref('Addmin/' + 'Login/' + localStorageuName).update({
        login : setDate
    })
    db.ref('Addmin/' + 'Status/' + localStorageuName).update({
        status : 'Offline'
    })
}


//widrow history
let widrowHistoryBoday = document.querySelector(".history");
db.ref('Addmin/' + 'Widrow/' + localStorageuName)
    .on('value', function(snapshot){
    var widrowhistory = snapshot.val();
    for(widrowhistorys in widrowhistory){
        // console.log(widrowhistory[widrowhistorys]);
        let widrowInformation = widrowhistory[widrowhistorys];
        let userPhoto = localStorage.getItem('userPhoto');
        localStorage.setItem('widrowStatuse',widrowInformation.widrowStatuse);

        let history = `
            <div class="hstProfile">
                <img id="img" src="${userPhoto}" alt="userImage">
                <div class="name-email">
                    <div class="name">${widrowInformation.widrowUserName}</div>
                    <div class="email">${widrowInformation.widrowUserEmail}</div>
                </div>
                <div class="date">
                    <div class="time">${widrowInformation.widrowTime}</div>
                    <div class="date">${widrowInformation.widrowDate}</div>
                </div>
                <div class="amount-button">
                    <div class="amount">Tk :${widrowInformation.widrowAmount}</div>
                    <input type="text" hidden value="${widrowInformation.widrowStatuse}" id="hidden">
                    <div data-itemid="${widrowInformation.widrowStatuse}" class="widrowButton">${widrowInformation.widrowStatuse}</div>
                </div>
            </div>
            `;
        widrowHistoryBoday.innerHTML += history;

        ////them Change
        document.querySelectorAll(".hstProfile").forEach((e)=>{
            //them Change
            let dark = document.querySelector("div#dark");
            let lighte = document.querySelector("div#lighte");
            let dark_light = localStorage.getItem('dark');
            if(dark_light == null){
                localStorage.setItem('dark','light');
            }else if(dark_light == 'dark'){
                function_dark();
            }else if(dark_light == 'light'){
                function_lighte();
            };

            dark.addEventListener('click',function(){
                localStorage.setItem('dark','dark');
                function_dark();
            });
            function function_dark(){
                e.classList.add('them');
            };
            lighte.addEventListener('click',function(){
                localStorage.setItem('dark','light');
                function_lighte();
            });
            function function_lighte(){
                e.classList.remove('them');
            };

            let allButton = e.querySelector(".widrowButton");
                let newId = (allButton.getAttribute("data-itemid"));
                allButton.setAttribute('id',newId);
        })
        
    }
});

//onAuthStateChanged
auth.onAuthStateChanged(function(user){
    if(user){
        userActive();
        userActiveAddmin()
        loginUser();
        widrow();
    }else{
        console.log("No Active User ");
        window.location = "/register";
    }
})


//sign out
function SignOut(){
    auth.signOut();
    userInActiveAddmin();
    localStorage.clear();
    alert("Are You Sure Sign Out!");
    userInActive();
}
signout.addEventListener('click',function(){
    SignOut();
})