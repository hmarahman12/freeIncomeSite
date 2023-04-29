//profile
// document.querySelector('input#input-img').addEventListener('click',function(){
//     document.querySelector('.profile-viw').classList.toggle('active');
// });

const select_img = document.querySelector('#select-img');
const input_img = document.querySelector('#input-img');
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
});


////////update data////////
// let profileUpdate = document.querySelector("input#Update");
// document.querySelector(".profile-ditels").addEventListener('click', (e)=>{
//     profileUpdate.classList.toggle("active");
//     e.preventDefault();
// });

// //cancle button
// document.querySelector("input#cancel").addEventListener('click', (e)=>{
//     profileUpdate.classList.remove("active");
//     e.preventDefault();
// });

//Profile Update methode

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDatabase,ref,update } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
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
const db = firebase.database();

//update button
document.querySelector("input#Update").addEventListener('click', (e)=>{

    let localStorageuName = localStorage.getItem('userName');

    //vew profile && edit profile
    let updateName = document.querySelector("input#name").value;
    let updateUName = document.querySelector("input#uname").value;
    let updateemail = document.querySelector("input#email").value;
    let updateNumber = document.querySelector("input#number").value;
    let updatePass = document.querySelector("input#password").value;
    let updateImg = document.querySelector("img#select-img").src;

    db.ref('users/' + localStorageuName).update(
        {
        displayName : updateName,
        uName : updateUName,
        email : updateemail,
        phoneNumber : updateNumber,
        password : updatePass,
        photoURL : updateImg// profile_picture : imageUrl
    },(error)=>{
        if(error){
            console.log("error");
        }else{
            console.log("succsess");
        }
    }),
      
    e.preventDefault()
});
