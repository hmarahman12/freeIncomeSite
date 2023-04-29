function valueEmtey(){
    uname_email.value = '';
    password.value = '';
    aleart.innerHTML = "";
    aleart.classList.remove("active");
}


        // Import the functions you need from the SDKs you need
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
        const uname = document.querySelector('#uName');
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');
        const sinIn = document.querySelector('#submit');
        const aleart = document.querySelector('span.aleart');
        


        //----------------------aouthentication process----------//
        function UserNameOrPasswordInValated(){
            if(uname.value == ''){
                aleart.innerHTML = "User Name is Emtay";
                aleart.classList.add("activ");
                aleart.classList.add("activered");
            }else if(email.value == ''){
                aleart.innerHTML = "User Email is Emtay";
                aleart.classList.add("activ");
                aleart.classList.add("activered");
            }else if(password.value == ''){
                aleart.innerHTML = "User Password is Emtay";
                aleart.classList.add("activ");
                aleart.classList.add("activered");
            }
        }


        function getUser() {
            const username =  uname.value;
            const passValue =  password.value;
            const emailValue =  email.value;
            //Not Alow Emtay Value
            if(username =='' || passValue ==''){
                // console.log("User Name Or Password In Valated!");
            }else{
                // console.log("User Name Or Password In Valated!");
                // aleart.innerHTML = "User Name Or Password In Valated!";
                // aleart.classList.add("activ");
                var user_ref = db.ref('users/' + username)
                user_ref.on('value', function(snapshot){
                    var user = snapshot.val();
                    //check password
                    if(passValue === user.password && emailValue === user.email){
                        localStorage.setItem('User Logdin', "True");
                        localStorage.setItem('userName', (user.uName));
                        localStorage.setItem('userreffarelCode', (user.reffarelCode));
                        
                        // console.log("Login Succsessfully");
                        aleart.classList.remove("activered");
                        aleart.innerHTML = "Login Succsessfully";
                        aleart.classList.add('activegreen');
                        // console.log("Password is Valated");
                    }else{
                        // console.log("Password In Valated!");
                        aleart.innerHTML = "User Name And Email Password Or Password In Valated!";
                        aleart.classList.add("activ");
                    }
            })
            }
        }

        //------------------login----------------------------------//
        function SignIn(){
            let email = document.querySelector("#email");
            let password = document.querySelector("#password");

            const promisee = auth.signInWithEmailAndPassword(email.value, password.value);
            promisee.catch(e => console.log(e.message));
        };
        //onAuthStateChanged
        function locationChange(){
            const emailValue =  email.value;
            auth.onAuthStateChanged(function(user){
                
                if(user){
                    // alert("Active User " + user.email);
                    // window.location = "/index.html";
    
                    if(emailValue == ''){
                        // window.location = "/index.html";
                        getUser();
                        console.log("Yes");
                        // console.log("Password is Valated");
                    }else{
                        getUser();
                        setInterval(() => {
                            window.location = "/index.html";
                        }, 3000);
                        
                    }
                }else{
                    // console.log("No Active User ");
                    // window.location = "/login";
                }
            })
        }locationChange();

        //--------------------------------------Assign the events------------//
        sinIn.addEventListener('click', function(e){
            UserNameOrPasswordInValated();
            SignIn();
            locationChange();
            e.preventDefault();
        });




//-----------------------gmail popUp funktion-----------------------//

      
        // // Initialize Firebase
        // const provider = new firebase.auth.GoogleAuthProvider();
      
      
      
        // document.querySelector("#google").addEventListener('click', function(e){
        // //   signInWithRedirect(auth, provider);
      
      
        // firebase.auth().signInWithPopup(provider)
        //     .then((result) => {
        //         // This gives you a Google Access Token. You can use it to access the Google API.
        //         var credential = result.credential;
        //         const token = credential.accessToken;
        //         // The signed-in user info.
        //         const user = result.user;

                
        //         if(user){
        //             // alert(user.displayName);
        //             let name = user.displayName;
        //             let email = user.email;
        //             let photo = user.photoURL;
        //             let userProfile = {name,email,photo}
        //             // console.log(userProfile);
        //             sessionStorage.setItem('userProfile', JSON.stringify(userProfile));
        //             window.location = "earnig-site/index.html";
        //         }
        //         // ...
        //     }).catch((error) => {
        //         // Handle Errors here.
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         // The email of the user's account used.
        //         const email = error.email;
        //         // The AuthCredential type that was used.
        //         // const credential = GoogleAuthProvider.credentialFromError(error);
        //         var credential = error.credential;
        //         // ...
        //         alert(errorMessage);
        //     });
        // })




////forgate password
function forgatepass(){
    let loginform = document.querySelector(".form.login");
    let forgateform = document.querySelector(".form.Forgotpassword");

    document.querySelector("a#Forgotpassword").addEventListener('click', function(){
        loginform.classList.add("activeForgatePass");
        forgateform.classList.add("active");
    });
    document.querySelector("a.login").addEventListener('click', function(){
        console.log("forgate password2");
        loginform.classList.remove("activeForgatePass");
        forgateform.classList.remove("active");
    });



    let forgateUname = document.querySelector('input#forgateuName');
    let forgatePass = document.querySelector('input#forgatepassword');
    let forgateSubmit = document.querySelector('input.forgate');

    forgateSubmit.addEventListener('click', function(){
        let forgateUnameValue = forgateUname.value;
        var user_forgate_pass = db.ref('users/' + forgateUnameValue)
        user_forgate_pass.on('value', function(snapshot){
            var forgatePassWord = snapshot.val();
            forgatePass.value = forgatePassWord.password;
        })
    })
}forgatepass()
