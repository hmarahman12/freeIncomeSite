////////////////////////////Box2 start//////////////////////////////////


let box2_income1 = document.querySelector(".box2-income1");
let box2_ads1 = document.querySelector(".box2-ads1");
let box2_income2 = document.querySelector(".box2-income2");
let box2_ads2 = document.querySelector(".box2-ads2");
let box2_income3 = document.querySelector(".box2-income3");
let box2_ads3 = document.querySelector(".box2-ads3");
let box2_income4 = document.querySelector(".box2-income4");
let box2_ads4 = document.querySelector(".box2-ads4");
let box2_income5 = document.querySelector(".box2-income5");
let box2_ads5 = document.querySelector(".box2-ads5");
let box2_income6 = document.querySelector(".box2-income6");
let box2_ads6 = document.querySelector(".box2-ads6");
let box2_income7 = document.querySelector(".box2-income7");
let box2_ads7 = document.querySelector(".box2-ads7");
let box2_income8 = document.querySelector(".box2-income8");
let box2_ads8 = document.querySelector(".box2-ads8");
let box2_income9 = document.querySelector(".box2-income9");
let box2_ads9 = document.querySelector(".box2-ads9");
let box2_income10 = document.querySelector(".box2-income10");
let box2_ads10 = document.querySelector(".box2-ads10");
let box2_coundownbg = document.querySelector(".box2-coundownbg");


// document.getElementById("myDiv").style.borderBottom = "thick solid #0000FF";

let box2_minIncomebox1 = document.querySelector('div#box2-minIncome1box1');
let box2_incomefinished1 = document.querySelector('div#box2-incomefinished1');

box2_incomefinished1.addEventListener('click', function(){
    box2_minIncomebox1.classList.add('displayNone');
    sessionStorage.setItem('box2_minIncomebox1',1)
});
let box2_minIncomebox1getItm = sessionStorage.getItem('box2_minIncomebox1');
let box2_minIncomebox1getItms = 1;
if(box2_minIncomebox1getItm == 1 & box2_minIncomebox1getItms == 1){
    box2_minIncomebox1.classList.add('displayNone');
}
// console.log(box2_minIncomebox1getItm);





//coundown 

let box2_coundown = document.querySelector('.box2-coundown');

// coundowndisplayblock
function box2_coundowndisplayblock(){
    box2_coundown.classList.add('displayblock');
}

// coundowndisplayNone
function box2_coundowndisplayNone(){
    box2_coundown.classList.add('displayNone')
}
box2_coundowndisplayNone();

// starTime
function box2_starTime(){
    // let startminit = 59;
    let time =  10;
    setInterval(box2_updatecoundown, 1000);

    function box2_updatecoundown(){
        // const minuts = Math.floor(time / 60);

        

        var second = time % 60;

        if(second){
            box2_coundown.innerHTML = `${second}`;
            time--;
        }else if(second == -0){
            box2_coundown.innerHTML = `${second}`;
            time;
            
        }
        if(second <= 0){
            // console.log(second);
            box2_coundown.classList.remove('displayblock')
            box2_coundowndisplayNone();
        }
        
        
        

    }
}

// start button
let box2_start = sessionStorage.getItem('box2_start');
// console.log(start);
if(box2_start){
    box2_income1.classList.add('displayNone');
    box2_coundownbg.classList.add('zindex9');
}
box2_income1.addEventListener('click',function(){
    box2_income1.classList.add('displayNone');
    box2_coundownbg.classList.add('zindex11');
    setInterval(()=>{
        box2_coundownbg.classList.remove('zindex11');
        box2_coundownbg.classList.add('zindex9');
        // window.location = 'index.html';
        sessionStorage.setItem('box2_start','box2_start')
    },12000)
    
    box2_coundowndisplayblock()
    box2_starTime()
})
//ads1
let box2_ads11 = sessionStorage.getItem('box2_ads1');
if(box2_ads11){
    box2_ads1.classList.add('displayNone');
}
box2_ads1.addEventListener('click',function(){
    box2_ads1.classList.add('displayNone');
    sessionStorage.setItem('box2_ads1','box2_ads1')
})

//open button
let box2_open1 = sessionStorage.getItem('box2_open1');
// console.log(start);
if(box2_open1){
    box2_income2.classList.add('displayNone');
    box2_coundownbg.classList.add('zindex8');
}

box2_income2.addEventListener('click',function(){
    box2_coundownbg.classList.add('zindex11');
    box2_income2.classList.add('displayNone');
    setInterval(()=>{
        box2_coundownbg.classList.remove('zindex11');
        box2_coundownbg.classList.add('zindex8');
        sessionStorage.setItem('box2_open1','box2_open1')
    },12000)
    
    box2_coundowndisplayblock()
    box2_starTime()
})
//ads2
let box2_ads22 = sessionStorage.getItem('box2_ads2');
if(box2_ads22){
    box2_ads2.classList.add('displayNone');
}
box2_ads2.addEventListener('click',function(){
    box2_ads2.classList.add('displayNone');
    sessionStorage.setItem('box2_ads2','box2_ads2')
})

//open button
let box2_open2 = sessionStorage.getItem('box2_open2');
// console.log(start);
if(box2_open2){
    box2_income3.classList.add('displayNone');
    box2_coundownbg.classList.add('zindex7');
}

box2_income3.addEventListener('click',function(){
    box2_coundownbg.classList.add('zindex11');
    box2_income3.classList.add('displayNone');
    setInterval(()=>{
        box2_coundownbg.classList.remove('zindex11');
        box2_coundownbg.classList.add('zindex7');
        sessionStorage.setItem('box2_open2','box2_open2')
    },12000)
    
    box2_coundowndisplayblock()
    box2_starTime()
})
//ads3
let box2_ads33 = sessionStorage.getItem('box2_ads3');
if(box2_ads33){
    box2_ads3.classList.add('displayNone');
}
box2_ads3.addEventListener('click',function(){
    box2_ads3.classList.add('displayNone');
    sessionStorage.setItem('box2_ads3','box2_ads3')
})

//open button
let box2_open3 = sessionStorage.getItem('box2_open3');
// console.log(start);
if(box2_open3){
    box2_income4.classList.add('displayNone');
    box2_coundownbg.classList.add('zindex6');
}

box2_income4.addEventListener('click',function(){
    box2_coundownbg.classList.add('zindex11');
    box2_income4.classList.add('displayNone');
    setInterval(()=>{
        box2_coundownbg.classList.remove('zindex11');
        box2_coundownbg.classList.add('zindex6');
        sessionStorage.setItem('box2_open3','box2_open3')
    },12000)
    
    box2_coundowndisplayblock()
    box2_starTime()
})
//ads4
let box2_ads44 = sessionStorage.getItem('box2_ads4');
if(box2_ads44){
    box2_ads4.classList.add('displayNone');
}
box2_ads4.addEventListener('click',function(){
    box2_ads4.classList.add('displayNone');
    sessionStorage.setItem('box2_ads4','box2_ads4')
})

//open button
let box2_open4 = sessionStorage.getItem('box1_open4');
// console.log(start);
if(box2_open4){
    box2_income5.classList.add('displayNone');
    box2_coundownbg.classList.add('zindex5');
}

box2_income5.addEventListener('click',function(){
    box2_coundownbg.classList.add('zindex11');
    box2_income5.classList.add('displayNone');
    setInterval(()=>{
        box2_coundownbg.classList.remove('zindex11');
        box2_coundownbg.classList.add('zindex5');
        sessionStorage.setItem('box2_open4','box2_open4')
    },12000)
    
    box2_coundowndisplayblock()
    box2_starTime()
})
//ads5
let box2_ads55 = sessionStorage.getItem('box2_ads5');
if(box2_ads55){
    box2_ads5.classList.add('displayNone');
}
box2_ads5.addEventListener('click',function(){
    box2_ads5.classList.add('displayNone');
    sessionStorage.setItem('box2_ads5','box2_ads5')
})

//open button
let box2_open5 = sessionStorage.getItem('box2_open5');
// console.log(start);
if(box2_open5){
    box2_income6.classList.add('displayNone');
    box2_coundownbg.classList.add('zindex4');
}

box2_income6.addEventListener('click',function(){
    box2_coundownbg.classList.add('zindex11');
    box2_income6.classList.add('displayNone');
    setInterval(()=>{
        box2_coundownbg.classList.remove('zindex11');
        box2_coundownbg.classList.add('zindex4');
        sessionStorage.setItem('box2_open5','box2_open5')
    },12000)
    
    box2_coundowndisplayblock()
    box2_starTime()
})
//ads5
let box2_ads66 = sessionStorage.getItem('box2_ads6');
if(box2_ads66){
    box2_ads6.classList.add('displayNone');
}
box2_ads6.addEventListener('click',function(){
    box2_ads6.classList.add('displayNone');
    sessionStorage.setItem('box2_ads6','box2_ads6')
})

//open button
let box2_open6 = sessionStorage.getItem('box2_open6');
// console.log(start);
if(box2_open6){
    box2_income7.classList.add('displayNone');
    box2_coundownbg.classList.add('zindex3');
}

box2_income7.addEventListener('click',function(){
    box2_coundownbg.classList.add('zindex11');
    box2_income7.classList.add('displayNone');
    setInterval(()=>{
        box2_coundownbg.classList.remove('zindex11');
        box2_coundownbg.classList.add('zindex3');
        sessionStorage.setItem('box2_open6','box2_open6')
    },12000)
    
    box2_coundowndisplayblock()
    box2_starTime()
})
//ads5
let box2_ads77 = sessionStorage.getItem('box2_ads7');
if(box2_ads77){
    box2_ads7.classList.add('displayNone');
}
box2_ads7.addEventListener('click',function(){
    box2_ads7.classList.add('displayNone');
    sessionStorage.setItem('box2_ads7','box2_ads7')
})

//open button
let box2_open7 = sessionStorage.getItem('box2_open7');
// console.log(start);
if(box2_open7){
    box2_income8.classList.add('displayNone');
    box2_coundownbg.classList.add('zindex2');
}

box2_income8.addEventListener('click',function(){
    box2_coundownbg.classList.add('zindex11');
    box2_income8.classList.add('displayNone');
    setInterval(()=>{
        box2_coundownbg.classList.remove('zindex11');
        box2_coundownbg.classList.add('zindex2');
        sessionStorage.setItem('box2_open7','box2_open7')
    },12000)
    
    box2_coundowndisplayblock()
    box2_starTime()
})
//ads5
let box2_ads88 = sessionStorage.getItem('box2_ads8');
if(box2_ads88){
    box2_ads8.classList.add('displayNone');
}
box2_ads8.addEventListener('click',function(){
    box2_ads8.classList.add('displayNone');
    sessionStorage.setItem('box2_ads8','box2_ads8')
})

//open button
let box2_open8 = sessionStorage.getItem('box2_open8');
// console.log(start);
if(box1_open8){
    box2_income9.classList.add('displayNone');
    box2_coundownbg.classList.add('zindex2');
}

box2_income9.addEventListener('click',function(){
    box2_coundownbg.classList.add('zindex11');
    box2_income9.classList.add('displayNone');
    setInterval(()=>{
        box2_coundownbg.classList.remove('zindex11');
        box2_coundownbg.classList.add('zindex1');
        sessionStorage.setItem('box2_open8','box2_open8')
    },12000)
    
    box2_coundowndisplayblock()
    box2_starTime()
})
//ads5
let box2_ads99 = sessionStorage.getItem('box2_ads9');
if(box2_ads99){
    box2_ads9.classList.add('displayNone');
    box2_coundownbg.classList.add('zindex1');
}
box2_ads9.addEventListener('click',function(){
    box2_ads9.classList.add('displayNone');
    sessionStorage.setItem('box2_ads9','box2_ads9')
})

//open button
let box2_open9 = sessionStorage.getItem('box2_open9');
// console.log(start);
if(box2_open9){
    box2_income10.classList.add('displayNone');
    box2_coundownbg.classList.add('zindex0');
}

box2_income10.addEventListener('click',function(){
    box2_coundownbg.classList.add('zindex11');
    box2_income10.classList.add('displayNone');
    setInterval(()=>{
        box2_coundownbg.classList.remove('zindex11');
        box2_coundownbg.classList.add('zindex0');
        box2_sessionStorage.setItem('box2_open9','box2_open9')
    },12000)
    
    box2_coundowndisplayblock()
    box2_starTime()
})
//ads5
let box2_ads100 = sessionStorage.getItem('box2_ads10');
if(box2_ads100){
    box2_ads10.classList.add('displayNone');
}
box2_ads10.addEventListener('click',function(){
    box2_ads10.classList.add('displayNone');
    sessionStorage.setItem('box2_ads10','box2_ads10')
})


////////////////////////////Box3 start//////////////////////////////////

let box3_income1 = document.querySelector(".box3-income1");
let box3_ads1 = document.querySelector(".box3-ads1");
let box3_income2 = document.querySelector(".box3-income2");
let box3_ads2 = document.querySelector(".box3-ads2");
let box3_income3 = document.querySelector(".box3-income3");
let box3_ads3 = document.querySelector(".box3-ads3");
let box3_income4 = document.querySelector(".box3-income4");
let box3_ads4 = document.querySelector(".box3-ads4");
let box3_income5 = document.querySelector(".box3-income5");
let box3_ads5 = document.querySelector(".box3-ads5");
let box3_income6 = document.querySelector(".box3-income6");
let box3_ads6 = document.querySelector(".box3-ads6");
let box3_income7 = document.querySelector(".box3-income7");
let box3_ads7 = document.querySelector(".box3-ads7");
let box3_income8 = document.querySelector(".box3-income8");
let box3_ads8 = document.querySelector(".box3-ads8");
let box3_income9 = document.querySelector(".box3-income9");
let box3_ads9 = document.querySelector(".box3-ads9");
let box3_income10 = document.querySelector(".box3-income10");
let box3_ads10 = document.querySelector(".box3-ads10");
let box3_coundownbg = document.querySelector(".box3-coundownbg");


// document.getElementById("myDiv").style.borderBottom = "thick solid #0000FF";

let box3_minIncomebox1 = document.querySelector('div#box3-minIncome1box1');
let box3_incomefinished1 = document.querySelector('div#box3-incomefinished1');

box3_incomefinished1.addEventListener('click', function(){
    box3_minIncomebox1.classList.add('displayNone');
    sessionStorage.setItem('box3_minIncomebox1',1)
});
let box3_minIncomebox1getItm = sessionStorage.getItem('box3_minIncomebox1');
let box3_minIncomebox1getItms = 1;
if(box3_minIncomebox1getItm == 1 & box3_minIncomebox1getItms == 1){
    box3_minIncomebox1.classList.add('displayNone');
}
// console.log(box2_minIncomebox1getItm);





//coundown 

let box3_coundown = document.querySelector('.box3-coundown');

// coundowndisplayblock
function box3_coundowndisplayblock(){
    box3_coundown.classList.add('displayblock');
}

// coundowndisplayNone
function box3_coundowndisplayNone(){
    box3_coundown.classList.add('displayNone')
}
box3_coundowndisplayNone();

// starTime
function box3_starTime(){
    // let startminit = 59;
    let time =  10;
    setInterval(box3_updatecoundown, 1000);

    function box3_updatecoundown(){
        // const minuts = Math.floor(time / 60);

        

        var second = time % 60;

        if(second){
            box3_coundown.innerHTML = `${second}`;
            time--;
        }else if(second == -0){
            box3_coundown.innerHTML = `${second}`;
            time;
            
        }
        if(second <= 0){
            // console.log(second);
            box3_coundown.classList.remove('displayblock')
            box3_coundowndisplayNone();
        }
        
        
        

    }
}

// start button
let box3_start = sessionStorage.getItem('box3_start');
// console.log(start);
if(box3_start){
    box3_income1.classList.add('displayNone');
    box3_coundownbg.classList.add('zindex9');
}
box3_income1.addEventListener('click',function(){
    box3_income1.classList.add('displayNone');
    box3_coundownbg.classList.add('zindex11');
    setInterval(()=>{
        box3_coundownbg.classList.remove('zindex11');
        box3_coundownbg.classList.add('zindex9');
        // window.location = 'index.html';
        sessionStorage.setItem('box3_start','box3_start')
    },12000)
    
    box3_coundowndisplayblock()
    box3_starTime()
})
//ads1
let box3_ads11 = sessionStorage.getItem('box3_ads1');
if(box3_ads11){
    box3_ads1.classList.add('displayNone');
}
box3_ads1.addEventListener('click',function(){
    box3_ads1.classList.add('displayNone');
    sessionStorage.setItem('box3_ads1','box3_ads1')
})

//open button
let box3_open1 = sessionStorage.getItem('box3_open1');
// console.log(start);
if(box3_open1){
    box3_income2.classList.add('displayNone');
    box3_coundownbg.classList.add('zindex8');
}

box3_income2.addEventListener('click',function(){
    box3_coundownbg.classList.add('zindex11');
    box3_income2.classList.add('displayNone');
    setInterval(()=>{
        box3_coundownbg.classList.remove('zindex11');
        box3_coundownbg.classList.add('zindex8');
        sessionStorage.setItem('box3_open1','box3_open1')
    },12000)
    
    box3_coundowndisplayblock()
    box3_starTime()
})
//ads2
let box3_ads22 = sessionStorage.getItem('box3_ads2');
if(box3_ads22){
    box3_ads2.classList.add('displayNone');
}
box3_ads2.addEventListener('click',function(){
    box3_ads2.classList.add('displayNone');
    sessionStorage.setItem('box3_ads2','box3_ads2')
})

//open button
let box3_open2 = sessionStorage.getItem('box3_open2');
// console.log(start);
if(box3_open2){
    box3_income3.classList.add('displayNone');
    box3_coundownbg.classList.add('zindex7');
}

box3_income3.addEventListener('click',function(){
    box3_coundownbg.classList.add('zindex11');
    box3_income3.classList.add('displayNone');
    setInterval(()=>{
        box3_coundownbg.classList.remove('zindex11');
        box3_coundownbg.classList.add('zindex7');
        sessionStorage.setItem('box3_open2','box3_open2')
    },12000)
    
    box3_coundowndisplayblock()
    box3_starTime()
})
//ads3
let box3_ads33 = sessionStorage.getItem('box3_ads3');
if(box3_ads33){
    box3_ads3.classList.add('displayNone');
}
box3_ads3.addEventListener('click',function(){
    box3_ads3.classList.add('displayNone');
    sessionStorage.setItem('box3_ads3','box3_ads3')
})

//open button
let box3_open3 = sessionStorage.getItem('box3_open3');
// console.log(start);
if(box3_open3){
    box3_income4.classList.add('displayNone');
    box3_coundownbg.classList.add('zindex6');
}

box3_income4.addEventListener('click',function(){
    box3_coundownbg.classList.add('zindex11');
    box3_income4.classList.add('displayNone');
    setInterval(()=>{
        box3_coundownbg.classList.remove('zindex11');
        box3_coundownbg.classList.add('zindex6');
        sessionStorage.setItem('box3_open3','box3_open3')
    },12000)
    
    box3_coundowndisplayblock()
    box3_starTime()
})
//ads4
let box3_ads44 = sessionStorage.getItem('box3_ads4');
if(box3_ads44){
    box3_ads4.classList.add('displayNone');
}
box3_ads4.addEventListener('click',function(){
    box3_ads4.classList.add('displayNone');
    sessionStorage.setItem('box3_ads4','box3_ads4')
})

//open button
let box3_open4 = sessionStorage.getItem('box3_open4');
// console.log(start);
if(box3_open4){
    box3_income5.classList.add('displayNone');
    box3_coundownbg.classList.add('zindex5');
}

box3_income5.addEventListener('click',function(){
    box3_coundownbg.classList.add('zindex11');
    box3_income5.classList.add('displayNone');
    setInterval(()=>{
        box3_coundownbg.classList.remove('zindex11');
        box3_coundownbg.classList.add('zindex5');
        sessionStorage.setItem('box3_open4','box3_open4')
    },12000)
    
    box3_coundowndisplayblock()
    box3_starTime()
})
//ads5
let box3_ads55 = sessionStorage.getItem('box3_ads5');
if(box3_ads55){
    box3_ads5.classList.add('displayNone');
}
box3_ads5.addEventListener('click',function(){
    box3_ads5.classList.add('displayNone');
    sessionStorage.setItem('box3_ads5','box3_ads5')
})

//open button
let box3_open5 = sessionStorage.getItem('box3_open5');
// console.log(start);
if(box3_open5){
    box3_income6.classList.add('displayNone');
    box3_coundownbg.classList.add('zindex4');
}

box3_income6.addEventListener('click',function(){
    box3_coundownbg.classList.add('zindex11');
    box3_income6.classList.add('displayNone');
    setInterval(()=>{
        box3_coundownbg.classList.remove('zindex11');
        box3_coundownbg.classList.add('zindex4');
        sessionStorage.setItem('box3_open5','box3_open5')
    },12000)
    
    box3_coundowndisplayblock()
    box3_starTime()
})
//ads5
let box3_ads66 = sessionStorage.getItem('box3_ads6');
if(box3_ads66){
    box3_ads6.classList.add('displayNone');
}
box3_ads6.addEventListener('click',function(){
    box3_ads6.classList.add('displayNone');
    sessionStorage.setItem('box3_ads6','box3_ads6')
})

//open button
let box3_open6 = sessionStorage.getItem('box3_open6');
// console.log(start);
if(box3_open6){
    box3_income7.classList.add('displayNone');
    box3_coundownbg.classList.add('zindex3');
}

box3_income7.addEventListener('click',function(){
    box3_coundownbg.classList.add('zindex11');
    box3_income7.classList.add('displayNone');
    setInterval(()=>{
        box3_coundownbg.classList.remove('zindex11');
        box3_coundownbg.classList.add('zindex3');
        sessionStorage.setItem('box3_open6','box3_open6')
    },12000)
    
    box3_coundowndisplayblock()
    box3_starTime()
})
//ads5
let box3_ads77 = sessionStorage.getItem('box3_ads7');
if(box3_ads77){
    box3_ads7.classList.add('displayNone');
}
box3_ads7.addEventListener('click',function(){
    box3_ads7.classList.add('displayNone');
    sessionStorage.setItem('box3_ads7','box3_ads7')
})

//open button
let box3_open7 = sessionStorage.getItem('box3_open7');
// console.log(start);
if(box3_open7){
    box3_income8.classList.add('displayNone');
    box3_coundownbg.classList.add('zindex2');
}

box3_income8.addEventListener('click',function(){
    box3_coundownbg.classList.add('zindex11');
    box3_income8.classList.add('displayNone');
    setInterval(()=>{
        box3_coundownbg.classList.remove('zindex11');
        box3_coundownbg.classList.add('zindex2');
        sessionStorage.setItem('box3_open7','box3_open7')
    },12000)
    
    box3_coundowndisplayblock()
    box3_starTime()
})
//ads5
let box3_ads88 = sessionStorage.getItem('box3_ads8');
if(box3_ads88){
    box3_ads8.classList.add('displayNone');
}
box3_ads8.addEventListener('click',function(){
    box3_ads8.classList.add('displayNone');
    sessionStorage.setItem('box3_ads8','box3_ads8')
})

//open button
let box3_open8 = sessionStorage.getItem('box3_open8');
// console.log(start);
if(box3_open8){
    box3_income9.classList.add('displayNone');
    box3_coundownbg.classList.add('zindex2');
}

box3_income9.addEventListener('click',function(){
    box3_coundownbg.classList.add('zindex11');
    box3_income9.classList.add('displayNone');
    setInterval(()=>{
        box3_coundownbg.classList.remove('zindex11');
        box3_coundownbg.classList.add('zindex1');
        sessionStorage.setItem('box3_open8','box3_open8')
    },12000)
    
    box3_coundowndisplayblock()
    box3_starTime()
})
//ads5
let box3_ads99 = sessionStorage.getItem('box3_ads9');
if(box3_ads99){
    box3_ads9.classList.add('displayNone');
    box3_coundownbg.classList.add('zindex1');
}
box3_ads9.addEventListener('click',function(){
    box3_ads9.classList.add('displayNone');
    sessionStorage.setItem('box3_ads9','box3_ads9')
})

//open button
let box3_open9 = sessionStorage.getItem('box3_open9');
// console.log(start);
if(box3_open9){
    box3_income10.classList.add('displayNone');
    box3_coundownbg.classList.add('zindex0');
}

box3_income10.addEventListener('click',function(){
    box3_coundownbg.classList.add('zindex11');
    box3_income10.classList.add('displayNone');
    setInterval(()=>{
        box3_coundownbg.classList.remove('zindex11');
        box3_coundownbg.classList.add('zindex0');
        box3_sessionStorage.setItem('box3_open9','box3_open9')
    },12000)
    
    box3_coundowndisplayblock()
    box3_starTime()
})
//ads5
let box3_ads100 = sessionStorage.getItem('box3_ads10');
if(box3_ads100){
    box2_ads10.classList.add('displayNone');
}
box3_ads10.addEventListener('click',function(){
    box3_ads10.classList.add('displayNone');
    sessionStorage.setItem('box3_ads10','box3_ads10')
})

