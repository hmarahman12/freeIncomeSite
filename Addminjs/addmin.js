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
        console.log("Yessssss");
        document.querySelector('b.admin-request').classList.add('display-block')
    }else{
        document.querySelector('b.Alladmin-request').classList.add('display-block')
        console.log('Nooooo');
    }
    

    db.ref('Addmin/' + 'AddminList/')
    .on('value', function(snapshot){
    var Admin_Request = snapshot.val();
    // var usersCount = Object.keys(Admin_Request).length;
    //users List
    for(Admin_Requests in Admin_Request){
        let Admin_RequestsList = Admin_Request[Admin_Requests];
        if(Admin_RequestsList.admin === 'Request'){
            console.log('Request');
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
    //users List
    for(userse in users){
        let usersList = users[userse];

        let allUsers = `<div class="allUsersProfile">
        <img id="img" src="${usersList.photoURL}" alt="userImage">
        <div class="name-email"">
            <div class="names">${usersList.uName}</div>
            <div class="email">${usersList.email}</div>
        </div>
        <div class="status-usersmass">
            <span class="span">Balance</span>
            <span class="Balance"">${usersList.Balance}</span>
        </div>
        </div>`;
        allUsersList.innerHTML += allUsers;
    }

});


db.ref('Addmin/' + 'LoginAddmin/')
    .on('value', function(snapshot){
    var usersStutase = snapshot.val();
    var stutaseCount = Object.keys(usersStutase).length;
    document.querySelector('b.userActive').innerHTML = stutaseCount;
});


db.ref('Addmin/' + 'Widrows')
    .on('value', function(snapshot){
    var Widrows = snapshot.val();
    document.querySelector('b.widthrow').innerHTML = Widrows.widrowAmount;

});






//widrow history
let widrowHistoryBoday = document.querySelector("div#addmin-withrow-ditels");
db.ref('Addmin/' + 'AddminWidrow/')
    .on('value', function(snapshot){
    var widrowhistory = snapshot.val();
    for(widrowhistorys in widrowhistory){
        // console.log(widrowhistory[widrowhistorys]);
        let widrowInformation = widrowhistory[widrowhistorys];
        // console.log(widrowInformation);
        localStorage.setItem('widrowStatuse',widrowInformation.widrowStatuse);

        let history = `
            <div class="name chang" id="name">
                <span class="sL">#001771</span>
                <span class="username">${widrowInformation.widrowUserName}</span>
                    <span class="date">${widrowInformation.widrowDate}</span>
                    <span class="amount dd">Tk : ${widrowInformation.widrowAmount}</span>
                <div class="button">
                    <input type="button" class="paid" value="Paid">
                    <input type="button" class="rijected" value="Rijected">
                </div>
            </div>
            `;
            
        widrowHistoryBoday.innerHTML += history;

        //paid pending rejected statuse
        document.querySelectorAll(".hstProfile").forEach((e)=>{
            let allButton = e.querySelector(".widrowButton");
                let newId = (allButton.getAttribute("data-itemid"));
                allButton.setAttribute('id',newId);
        })
        
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
        console.log("No Active Addmin ");
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