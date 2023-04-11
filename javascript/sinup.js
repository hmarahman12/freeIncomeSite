const name = document.querySelector('#name');
const uName = document.querySelector('#uname');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const password = document.querySelector('#password');
const select_img = document.querySelector('#select-img');
const input_img = document.querySelector('#input-img');
const sinUp = document.querySelector('#submit');
const aleart = document.querySelector('.aleart');
const reffarelCode = document.querySelector('input#reffarelCode');
const reffarelCodeset = document.querySelector('input#refarel');
sinUp.addEventListener('click',function(e){
    let nameValue = name.value;
    let uNameValue = uName.value;
    let emailValue = email.value;
    let numberValue = number.value;
    let passwordValue = password.value;
    let reffarelCodeValue = reffarelCode.value;
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
    getCapcha();
    e.preventDefault();
})

function valueEmtey(){
    name.value = '';
    uName.value = '';
    email.value = '';
    number.value = '';
    password.value = '';
    select_img.src = `/pick/profile.png`;
    aleart.innerHTML = "";
    reffarelCodeset.value = '';
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

function register(){
    let nameValue = name.value;
    let uNameValue = uName.value;
    let emailValue = email.value;
    let numberValue = number.value;
    let passValue = password.value;
    let select_imgValue = select_img.src;
    let reffarelCodeValue = reffarelCode.value;
    let Balance = '0.00';

    //if balance earn 10tk
    if(reffarelCodeset.value){
      Balance = '10.00';
      console.log(Balance);
    }else{
      Balance = '0.00';
      console.log(Balance);
    };
    
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
    set(ref(database, 'users/' + uNameValue), {
        displayName : nameValue,
        uName : uNameValue,
        email : emailValue,
        phoneNumber : numberValue,
        password : passValue,
        reffarelCode : reffarelCodeValue,
        Balance : Balance,
        date : setDate,
        photoURL : select_imgValue// profile_picture : imageUrl
      })
      .then(() => {
        // Data saved successfully!
        window.location = '/login';
      })
      .catch((error) => {
        // The write failed...
        console.log(error);
        aleart.innerHTML = error;
        aleart.classList.add("activ");
      });
      
      //refarel acount data set
      set(ref(database, 'refarel/' + reffarelCodeset.value + '/' + uNameValue),{
        UserEmail : emailValue,
        UserName : uNameValue
      })
      .then(() => {
        // Data saved successfully!
        window.location = '/login';
      })
      .catch((error) => {
        // The write failed...
        console.log(error);
      });

       //refarel acount data set
       set(ref(database, 'refarelBalance/' + reffarelCodeset.value),{
        Balance : Balance
      })
      .then(() => {
        // Data saved successfully!
        window.location = 'freeIncomeSite/login';
      })
      .catch((error) => {
        // The write failed...
        console.log(error);
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
