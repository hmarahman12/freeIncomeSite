'use strict'

setInterval (()=>{
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

    let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()];
    let date = clock.getDate();

    let monthly = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Des'][new Date().getDay()];
    // let month = clock.getMonth() + 1;

    let years = clock.getFullYear() ;
    document.querySelector(".colock").innerHTML = `${hour} :  ${Minutes} : ${Seconds} : ${ampm} : ${weekday} : ${monthly} : ${years}`;
    document.querySelector(".All-rights").innerHTML = '© ' + years + ' Earning . All rights reserved.';
},100) ;

// let rand = Math.floor(Math.random('fghfg' * 11111) * 50000);
// console.log(rand);
