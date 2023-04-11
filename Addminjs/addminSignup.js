const name = document.querySelector('#name');
const uName = document.querySelector('#uname');
const youtname = document.querySelector('#youtname');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const password = document.querySelector('#password');
const select_img = document.querySelector('#select-img');
const input_img = document.querySelector('#input-img');
const sinUp = document.querySelector('#submit');
const aleart = document.querySelector('.aleart');
sinUp.addEventListener('click',function(e){
    let nameValue = name.value;
    let uNameValue = uName.value;
    let youtnameValue = youtname.value;
    let emailValue = email.value;
    let numberValue = number.value;
    let passwordValue = password.value;
    if(nameValue === '' || uNameValue === '' || emailValue === '' || numberValue === '' || passwordValue === ''){
        aleart.innerHTML = "Emetay anay filde!";
        aleart.classList.add("activ");
    }else{
        aleart.innerHTML = "Sin Up Succsess";
        aleart.classList.add("active");
    }
    setTimeout(() => {
        valueEmtey()
    }, 3000);
    register();
    e.preventDefault();
})

function valueEmtey(){
    name.value = '';
    uName.value = '';
    youtname.value = '';
    email.value = '';
    number.value = '';
    password.value = '';
    select_img.src = `/pick/profile.png`;
    aleart.innerHTML = "";
    aleart.classList.remove("active");
}

//imgs Show mathode
var files = [];
var reader = new FileReader();
select_img.addEventListener('click', function(){
    input_img.onchange = e =>{
        files = e.target.files;
        reader = new FileReader();

        reader.onload = function(){
            select_img.src = reader.result;
        }
        reader.readAsDataURL(files[0]);
    }
})



//sign up methode

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyDxjw0mMDA6CB7RVVlac5eWHR6WDf5cQfw",
    authDomain: "earnig-site-91cb9.firebaseapp.com",
    databaseURL: "https://earnig-site-91cb9-default-rtdb.firebaseio.com",
    projectId: "earnig-site-91cb9",
    storageBucket: "earnig-site-91cb9.appspot.com",
    messagingSenderId: "236262336739",
    appId: "1:236262336739:web:1e79157898ccf8a6debdd6"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase();
//sign up date 
// function setITime(){
//   const clock = new Date();
//   let hour = clock.getHours();

//   let ampm = hour <= 12 ? 'PM' : 'AM' ;
//       hour = hour % 12 ;
//       hour = hour ? hour : 12 ;

//   let Minutes = clock.getMinutes();
//       Minutes = Minutes < 10 ? '0' + Minutes : Minutes ;
//   let Seconds = clock.getSeconds();
//   Seconds = Seconds < 10 ? '0' + Seconds : Seconds ;
//   let date = clock.getDate();
//   let month = clock.getMonth() + 1;
//   let years = clock.getFullYear() ;

//   console.log('Time'+hour+':',Minutes+':',Seconds+':',ampm+' Date',date+'/',month+'/',years);

//   var setDate = ' Date : '+ date;
//   console.log(setDate);
// } ;

function register(){
    let nameValue = name.value;
    let uNameValue = uName.value;
    let youtnameValue = youtname.value;
    let emailValue = email.value;
    let numberValue = number.value;
    let passValue = password.value;
    let select_imgValue = select_img.src;
    
    createUserWithEmailAndPassword(auth, emailValue, passValue)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    //set signup date
    const clock = new Date();
    let date = clock.getDate();
    var setDate = 'Date : ' + date;
    // console.log('signup date'+setDate);
    // ...Data set 
    set(ref(database, 'Addmin/' + 'AddminList/' + uNameValue), {
        displayName : nameValue,
        uName : uNameValue,
        ChannelName : youtnameValue,
        email : emailValue,
        phoneNumber : numberValue,
        password : passValue,
        admin : 'Request',
        date : setDate,
        photoURL : select_imgValue// profile_picture : imageUrl
      })
      .then(() => {
        // Data saved successfully!
        // console.log("successfully");
        window.location = "/AddminLogin";
      })
      .catch((error) => {
        // The write failed...
        console.log(error);
        aleart.innerHTML = error;
        aleart.classList.add("activ");
      });

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    // console.log(errorMessage);
    aleart.innerHTML = "Email All ready exixt!";
    aleart.classList.add("activ");
  });
}