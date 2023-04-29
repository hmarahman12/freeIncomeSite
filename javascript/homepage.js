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
const signout = document.querySelector('span.Logout');

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
            //ip set localstorage
            //IP Check////////////////////////
            function ipCheck(){
                setTimeout(()=>{
                fetch("https://api.ipify.org/?format=json").then(re=>re.json()).then(data=>{
                    localStorage.setItem('ip_address', data.ip);
                })
                },1000)
            }ipCheck();
            let userIP = localStorage.getItem('ip_address');
            setTimeout(() => {
                db.ref('users/' + localStorageuName).update({
                    ip : userIP
                });
            },1000);
            //vew profile && edit profile
            

            //get database data use
            document.querySelector(".RefarelCode").innerHTML = ' ' + user.reffarelCode + ' ';
            document.querySelector("input#reffarelCode").innerHTML = user.reffarelCode;
            localStorage.setItem('minBalance',user.Balance);
            //
            document.querySelector("span.balance").innerHTML ='Balance TK ' + user.Balance;
            document.querySelector("img#profilePick").src = user.photoURL;
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

                    // document.querySelector(".refarel-link").classList.add("active");

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
let paymentMethod = document.querySelector("select#paymentMethod");
let widrowSubmit = document.querySelector("input#widrow-submit");
let aleart = document.querySelector(".alaert");
let localStorageuName = localStorage.getItem('userName');
let localStorageuEmail = localStorage.getItem('userEmail');

function widrow(){
    widrowSubmit.addEventListener('click', function(e){
        let widrowUserNameValue = widrowUserName.value;
        let widrowUserEmailValue = widrowUserEmail.value;
        let paymentMethodValue = paymentMethod.value;
        let widrowNumberValue = widrowNumber.value;
        let widrowAmountValue = widrowAmount.value;

        if(widrowUserNameValue == ''){
            aleart.innerHTML = "widrow UserName is emtay!";
            aleart.classList.remove("active")
        }else if(widrowUserEmailValue == ''){
            aleart.innerHTML = "widrow UserEmail is emtay!";
            aleart.classList.remove("active")
        }else if(paymentMethodValue == 'Select-Payment-Method'){
            aleart.innerHTML = "Select-Payment-Method!";
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
                        aleart.innerHTML = "Balance is Short" + "Minimum 1000";
                        // console.log("Not Balance");
                    }else{

// /////////////////////////////widrow time set////////////////////
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
                            paymentMethod : paymentMethodValue,
                            widrowNumber : widrowNumberValue,
                            widrowAmount : widrowAmountValue,
                            widrowTime : widroTime,
                            widrowDate : widrowDate,
                            widrowStatuse : 'Pending'
                        })
                        db.ref('Addmin/' + 'AddminWidrow/').push({
                            widrowUserName : widrowUserNameValue,
                            widrowUserEmail : widrowUserEmailValue,
                            paymentMethod : paymentMethodValue,
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
        // console.log(typeof(Number(localWidthrow)),typeof(Number(widrowAmountValue)));
        
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

//active Useres addmin
let activeUName = localStorage.getItem('userName');
let activeBalance = localStorage.getItem('minBalance');
let activeProfile = localStorage.getItem('profilePick');
let activeEmail = localStorage.getItem('userEmail');
let activeIP = localStorage.getItem('ip_address');
let dviceActive = localStorage.getItem('dviceActive');
let activeStatus = localStorage.getItem('users-Active-NoActive');
function userActiveAddmin(){
    db.ref('Addmin/' + 'LoginAddmin/' + localStorageuName).set({
        userName : activeUName,
        Balance : activeBalance,
        userEmail : activeEmail,
        ip_address : activeIP,
        dviceActive : dviceActive,
        activeStatus : activeStatus,
        profilePick : activeProfile
    })
}userActiveAddmin();
//users active////////
function usersActiveAddmin1(){
    setTimeout(()=>{
      let usersActiveNoActive = localStorage.getItem('users-Active-NoActive');
      db.ref('Addmin/' + 'LoginAddmin/' + localStorageuName).update({
        activeStatus : usersActiveNoActive,
        dviceActive : dviceActive
      });
    },3000)
}usersActiveAddmin1();

function usersActiveAddmin2(){
    setTimeout(()=>{
      let usersActiveNoActive = localStorage.getItem('users-Active-NoActive');
      db.ref('Addmin/' + 'LoginAddmin/' + localStorageuName).update({
        activeStatus : usersActiveNoActive,
        dviceActive : dviceActive
      });
    },660000)
}usersActiveAddmin2();

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
    widrowHistoryBoday.innerHTML = '';
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
                <div class="payment">
                    <div class="paymentMethod">Payment Method</div>
                    <div class="paymentMethod-b-r-d">${widrowInformation.paymentMethod}</div>
                </div>
                <div class="date-time">
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
            let dark = document.querySelector("span.theem-dark-white");
            let lighte = document.querySelector("span.theem-white-dark");
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

//users active////////
function usersActive(){
  setTimeout(()=>{
    localStorage.setItem('users-Active-NoActive','active');
    let usersActiveNoActive = localStorage.getItem('users-Active-NoActive');
    db.ref('users/' + localStorageuName).update({
      usersActive : usersActiveNoActive
    });
  })
}usersActive();
//users No active 30 minit waite call back fungtion////////
function usersNoActive(){
    localStorage.setItem('users-Active-NoActive','No-active');
    let usersActiveNoActive = localStorage.getItem('users-Active-NoActive');
    db.ref('users/' + localStorageuName).update({
      usersActive : usersActiveNoActive
    });
}
setTimeout(()=>{
  usersNoActive()
},600000)

//sign out
function SignOut(){
    auth.signOut();
    userInActiveAddmin();
    alert("Are You Sure Sign Out!");
    userInActive();
    usersNoActive();
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('password');
    localStorage.removeItem('minBalance');
}
//defalt sihnout
signout.addEventListener('click',function(){
    SignOut();
});
document.querySelector('span.Logout.onMobile').addEventListener('click',function(){
    SignOut();
})
//aouto signout ///////////
setTimeout(()=>{
  SignOut();
},86400000);

//dviceActive2
function dviceActive2(){
    if(window.innerWidth <= 600){
      localStorage.setItem('dviceActive','mobile')
    }else if(window.innerWidth <= 1000){
      localStorage.setItem('dviceActive','tablet')
    }else if(window.innerWidth <= 2000){
      localStorage.setItem('dviceActive','desktop')
    }
}dviceActive2()
