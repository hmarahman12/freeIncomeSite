///////////////////////////////income box All 1_12/////////////////////
function all_income_box1_12(){
    ///////////////////////////////income box 1/////////////////////
    function incomeBox1(){
        let Earn_Now_1 = document.querySelector(".Earn-Now-1");
        let income_box1_coundown = document.querySelector('.income-box1-coundown');
        let box1_coundownbg = document.querySelector(".income-box1-coundownbg");
        let income_box_1 = document.querySelector('div#income-box-1');
        let income_box1_Claim_Now_1 = document.querySelector('div#income-box1-Claim-Now-1');

        income_box1_Claim_Now_1.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_1.classList.add('displayNone');
            localStorage.setItem('claim1',1);
        });

        let claimed = localStorage.getItem("claim1");
            if(claimed == 1){
                setTimeout(()=>{
                    income_box_1.classList.add('displayNone');
                },1000)
            }
        

        //coundown
        // coundowndisplayblock
        function box1_coundowndisplayblock(){
            income_box1_coundown.classList.add('displayblock');
        }

        // coundowndisplayNone
        function box1_coundowndisplayNone(){
            income_box1_coundown.classList.add('displayNone')
        }
        box1_coundowndisplayNone();

        // starTime
        function box1_open_Time(){
            // let startminit = 59;
            let time =  10;
            setInterval(box1_updatecoundown, 1000);

            function box1_updatecoundown(){
                const minuts = Math.floor(time / 60);

                var second = time % 60;

                if(second){
                    income_box1_coundown.innerHTML = `${second}`;
                    time--;
                }else if(second == -0){
                    income_box1_coundown.innerHTML = `${second}`;
                    time;
                    
                }
                if(second <= 0){
                    // console.log(second);
                    income_box1_coundown.classList.remove('displayblock')
                    box1_coundowndisplayNone();
                }

            }
        }

        //////Earn Now 1 //////////////////
        Earn_Now_1.addEventListener('click',function(){

            setInterval(()=>{
                box1_coundownbg.classList.remove('zindex1');
                box1_coundownbg.classList.add('zindex1');
                Earn_Now_1.classList.add('zindex-1');
                localStorage.setItem("income_box1_earn",'income_box1_earn');
                window.location = incomeLinks.links_1;
            },12000)
            box1_coundowndisplayblock()
            box1_open_Time()
            Earn_Now_1.classList.add('zindex-1');
        })
        
        //Box open
        let income_box1_earn = localStorage.getItem("income_box1_earn");
        if(income_box1_earn){
            box1_coundownbg.classList.add('zindex8');
            Earn_Now_1.classList.add('zindex0');
            income_box1_Claim_Now_1.classList.add('zindex1');
        }
        
    }incomeBox1();
    ///////////////////////////////income box 2/////////////////////
    function incomeBox2(){
        let Earn_Now_2 = document.querySelector(".Earn-Now-2");
        let income_box2_coundown = document.querySelector('.income-box2-coundown');
        let box2_coundownbg = document.querySelector(".income-box2-coundownbg");
        let income_box_2 = document.querySelector('div#income-box-2');
        let income_box2_Claim_Now_2 = document.querySelector('div#income-box2-Claim-Now-2');

        income_box2_Claim_Now_2.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_2.classList.add('displayNone');
            localStorage.setItem('claim2',1);
        });

        let claimed = localStorage.getItem("claim2");
            if(claimed == 1){
                setTimeout(()=>{
                    income_box_2.classList.add('displayNone');
                },1000)
            }
        
        //////Earn Now 2 //////////////////
        Earn_Now_2.addEventListener('click',function(){

            setInterval(()=>{
                box2_coundownbg.classList.remove('zindex1');
                box2_coundownbg.classList.add('zindex1');
                Earn_Now_2.classList.add('zindex-1');
                localStorage.setItem("income_box2_earn",'income_box2_earn');
                window.location = incomeLinks.links_2;
            },12000)
            box2_coundowndisplayblock()
            box2_open_Time()
            Earn_Now_2.classList.add('zindex-1');
        })
        
        //Box open
        let income_box2_earn = localStorage.getItem("income_box2_earn");
        if(income_box2_earn){
            box2_coundownbg.classList.add('zindex8');
            Earn_Now_2.classList.add('zindex0');
            income_box2_Claim_Now_2.classList.add('zindex1');
        }
        //coundown
        // coundowndisplayblock
        function box2_coundowndisplayblock(){
            income_box2_coundown.classList.add('displayblock');
        }

        // coundowndisplayNone
        function box2_coundowndisplayNone(){
            income_box2_coundown.classList.add('displayNone')
        }
        box2_coundowndisplayNone();

        // starTime
        function box2_open_Time(){
            // let startminit = 59;
            let time =  10;
            setInterval(box2_updatecoundown, 1000);

            function box2_updatecoundown(){
                const minuts = Math.floor(time / 60);

                var second = time % 60;

                if(second){
                    income_box2_coundown.innerHTML = `${second}`;
                    time--;
                }else if(second == -0){
                    income_box2_coundown.innerHTML = `${second}`;
                    time;
                    
                }
                if(second <= 0){
                    // console.log(second);
                    income_box2_coundown.classList.remove('displayblock')
                    box2_coundowndisplayNone();
                }

            }
        }
    }incomeBox2();
    ///////////////////////////////income box 3/////////////////////
    function incomeBox3(){
        let Earn_Now_3 = document.querySelector(".Earn-Now-3");
        let income_box3_coundown = document.querySelector('.income-box3-coundown');
        let box3_coundownbg = document.querySelector(".income-box3-coundownbg");
        let income_box_3 = document.querySelector('div#income-box-3');
        let income_box3_Claim_Now_3 = document.querySelector('div#income-box3-Claim-Now-3');

        income_box3_Claim_Now_3.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_3.classList.add('displayNone');
            localStorage.setItem('claim3',1);
        });

        let claimed = localStorage.getItem("claim3");
            if(claimed == 1){
                setTimeout(()=>{
                    income_box_3.classList.add('displayNone');
                },1000)
            }

        //coundown
        // coundowndisplayblock
        function box3_coundowndisplayblock(){
            income_box3_coundown.classList.add('displayblock');
        }

        // coundowndisplayNone
        function box3_coundowndisplayNone(){
            income_box3_coundown.classList.add('displayNone')
        }
        box3_coundowndisplayNone();

        // starTime
        function box3_open_Time(){
            // let startminit = 59;
            let time =  10;
            setInterval(box3_updatecoundown, 1000);

            function box3_updatecoundown(){
                const minuts = Math.floor(time / 60);

                var second = time % 60;

                if(second){
                    income_box3_coundown.innerHTML = `${second}`;
                    time--;
                }else if(second == -0){
                    income_box3_coundown.innerHTML = `${second}`;
                    time;
                    
                }
                if(second <= 0){
                    // console.log(second);
                    income_box3_coundown.classList.remove('displayblock')
                    box3_coundowndisplayNone();
                }

            }
        }

        //////Earn Now////////////
        Earn_Now_3.addEventListener('click',function(){

            setInterval(()=>{
                box3_coundownbg.classList.remove('zindex1');
                box3_coundownbg.classList.add('zindex1');
                Earn_Now_3.classList.add('zindex-1');
                localStorage.setItem("income_box3_earn",'income_box3_earn');
                window.location = incomeLinks.links_3;
            },12000)
            box3_coundowndisplayblock()
            box3_open_Time()
            Earn_Now_3.classList.add('zindex-1');
        })

        let income_box3_earn = localStorage.getItem("income_box3_earn");
        if(income_box3_earn){
            box3_coundownbg.classList.add('zindex8');
            Earn_Now_3.classList.add('zindex0');
            income_box3_Claim_Now_3.classList.add('zindex1');
        }

    }incomeBox3();
    ///////////////////////////////income box 4/////////////////////
    function incomeBox4(){
        let Earn_Now_4 = document.querySelector(".Earn-Now-4");
        let income_box4_coundown = document.querySelector('.income-box4-coundown');
        let box4_coundownbg = document.querySelector(".income-box4-coundownbg");
        let income_box_4 = document.querySelector('div#income-box-4');
        let income_box4_Claim_Now_4 = document.querySelector('div#income-box4-Claim-Now-4');

        income_box4_Claim_Now_4.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_4.classList.add('displayNone');
            localStorage.setItem('claim4',1);
        });

        let claimed = localStorage.getItem("claim4");
            if(claimed == 1){
                setTimeout(()=>{
                    income_box_4.classList.add('displayNone');
                },1000)
            }

        //coundown
        // coundowndisplayblock
        function box4_coundowndisplayblock(){
            income_box4_coundown.classList.add('displayblock');
        }

        // coundowndisplayNone
        function box4_coundowndisplayNone(){
            income_box4_coundown.classList.add('displayNone')
        }
        box4_coundowndisplayNone();

        // starTime
        function box4_open_Time(){
            // let startminit = 59;
            let time =  10;
            setInterval(box4_updatecoundown, 1000);

            function box4_updatecoundown(){
                const minuts = Math.floor(time / 60);

                var second = time % 60;

                if(second){
                    income_box4_coundown.innerHTML = `${second}`;
                    time--;
                }else if(second == -0){
                    income_box4_coundown.innerHTML = `${second}`;
                    time;
                    
                }
                if(second <= 0){
                    // console.log(second);
                    income_box4_coundown.classList.remove('displayblock')
                    box4_coundowndisplayNone();
                }

            }
        }

        //////Earn Now////////////
        Earn_Now_4.addEventListener('click',function(){

            setInterval(()=>{
                box4_coundownbg.classList.remove('zindex1');
                box4_coundownbg.classList.add('zindex1');
                Earn_Now_4.classList.add('zindex-1');
                localStorage.setItem("income_box4_earn",'income_box4_earn');
                window.location = incomeLinks.links_4;
            },12000)
            box4_coundowndisplayblock()
            box4_open_Time()
            Earn_Now_4.classList.add('zindex-1');
        })

        let income_box4_earn = localStorage.getItem("income_box4_earn");
        if(income_box4_earn){
            box4_coundownbg.classList.add('zindex8');
            Earn_Now_4.classList.add('zindex0');
            income_box4_Claim_Now_4.classList.add('zindex1');
        }
    }incomeBox4();
    ///////////////////////////////income box 5/////////////////////
    function incomeBox5(){
        let Earn_Now_5 = document.querySelector(".Earn-Now-5");
        let income_box5_coundown = document.querySelector('.income-box5-coundown');
        let box5_coundownbg = document.querySelector(".income-box5-coundownbg");
        let income_box_5 = document.querySelector('div#income-box-5');
        let income_box5_Claim_Now_5 = document.querySelector('div#income-box5-Claim-Now-5');

        income_box5_Claim_Now_5.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_5.classList.add('displayNone');
            localStorage.setItem('claim5',1);
        });

        let claimed = localStorage.getItem("claim5");
            if(claimed == 1){
                setTimeout(()=>{
                    income_box_5.classList.add('displayNone');
                },1000)
            }

        //coundown
        // coundowndisplayblock
        function box5_coundowndisplayblock(){
            income_box5_coundown.classList.add('displayblock');
        }

        // coundowndisplayNone
        function box5_coundowndisplayNone(){
            income_box5_coundown.classList.add('displayNone')
        }
        box5_coundowndisplayNone();

        // starTime
        function box5_open_Time(){
            // let startminit = 59;
            let time =  10;
            setInterval(box5_updatecoundown, 1000);

            function box5_updatecoundown(){
                const minuts = Math.floor(time / 60);

                var second = time % 60;

                if(second){
                    income_box5_coundown.innerHTML = `${second}`;
                    time--;
                }else if(second == -0){
                    income_box5_coundown.innerHTML = `${second}`;
                    time;
                    
                }
                if(second <= 0){
                    // console.log(second);
                    income_box5_coundown.classList.remove('displayblock')
                    box5_coundowndisplayNone();
                }

            }
        }

        //////Earn Now////////////
        Earn_Now_5.addEventListener('click',function(){

            setInterval(()=>{
                box5_coundownbg.classList.remove('zindex1');
                box5_coundownbg.classList.add('zindex1');
                Earn_Now_5.classList.add('zindex-1');
                localStorage.setItem("income_box5_earn",'income_box5_earn');
                window.location = incomeLinks.links_5;
            },12000)
            box5_coundowndisplayblock()
            box5_open_Time()
            Earn_Now_5.classList.add('zindex-1');
        })

        let income_box5_earn = localStorage.getItem("income_box5_earn");
        if(income_box5_earn){
            box5_coundownbg.classList.add('zindex8');
            Earn_Now_5.classList.add('zindex0');
            income_box5_Claim_Now_5.classList.add('zindex1');
        }
    }incomeBox5();
    ///////////////////////////////income box 6/////////////////////
    function incomeBox6(){
        let Earn_Now_6 = document.querySelector(".Earn-Now-6");
        let income_box6_coundown = document.querySelector('.income-box6-coundown');
        let box6_coundownbg = document.querySelector(".income-box6-coundownbg");
        let income_box_6 = document.querySelector('div#income-box-6');
        let income_box6_Claim_Now_6 = document.querySelector('div#income-box6-Claim-Now-6');

        income_box6_Claim_Now_6.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_6.classList.add('displayNone');
            localStorage.setItem('claim6',1);
        });

        let claimed = localStorage.getItem("claim6");
            if(claimed == 1){
                setTimeout(()=>{
                    income_box_6.classList.add('displayNone');
                },1000)
            }

        //coundown
        // coundowndisplayblock
        function box6_coundowndisplayblock(){
            income_box6_coundown.classList.add('displayblock');
        }

        // coundowndisplayNone
        function box6_coundowndisplayNone(){
            income_box6_coundown.classList.add('displayNone')
        }
        box6_coundowndisplayNone();

        // starTime
        function box6_open_Time(){
            // let startminit = 59;
            let time =  10;
            setInterval(box6_updatecoundown, 1000);

            function box6_updatecoundown(){
                const minuts = Math.floor(time / 60);

                var second = time % 60;

                if(second){
                    income_box6_coundown.innerHTML = `${second}`;
                    time--;
                }else if(second == -0){
                    income_box6_coundown.innerHTML = `${second}`;
                    time;
                    
                }
                if(second <= 0){
                    // console.log(second);
                    income_box6_coundown.classList.remove('displayblock')
                    box6_coundowndisplayNone();
                }

            }
        }

        //////Earn Now////////////
        Earn_Now_6.addEventListener('click',function(){

            setInterval(()=>{
                box6_coundownbg.classList.remove('zindex1');
                box6_coundownbg.classList.add('zindex1');
                Earn_Now_6.classList.add('zindex-1');
                localStorage.setItem("income_box6_earn",'income_box6_earn');
                window.location = incomeLinks.links_6;
            },12000)
            box6_coundowndisplayblock()
            box6_open_Time()
            Earn_Now_6.classList.add('zindex-1');
        })

        let income_box6_earn = localStorage.getItem("income_box6_earn");
        if(income_box6_earn){
            box6_coundownbg.classList.add('zindex8');
            Earn_Now_6.classList.add('zindex0');
            income_box6_Claim_Now_6.classList.add('zindex1');
        }
    }incomeBox6();
    ///////////////////////////////income box 7/////////////////////
    function incomeBox7(){
        let Earn_Now_7 = document.querySelector(".Earn-Now-7");
        let income_box7_coundown = document.querySelector('.income-box7-coundown');
        let box7_coundownbg = document.querySelector(".income-box7-coundownbg");
        let income_box_7 = document.querySelector('div#income-box-7');
        let income_box7_Claim_Now_7 = document.querySelector('div#income-box7-Claim-Now-7');

        income_box7_Claim_Now_7.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_7.classList.add('displayNone');
            localStorage.setItem('claim7',1);
        });

        let claimed = localStorage.getItem("claim7");
            if(claimed == 1){
                setTimeout(()=>{
                    income_box_7.classList.add('displayNone');
                },1000)
            }

        //coundown
        // coundowndisplayblock
        function box7_coundowndisplayblock(){
            income_box7_coundown.classList.add('displayblock');
        }

        // coundowndisplayNone
        function box7_coundowndisplayNone(){
            income_box7_coundown.classList.add('displayNone')
        }
        box7_coundowndisplayNone();

        // starTime
        function box7_open_Time(){
            // let startminit = 59;
            let time =  10;
            setInterval(box7_updatecoundown, 1000);

            function box7_updatecoundown(){
                const minuts = Math.floor(time / 60);

                var second = time % 60;

                if(second){
                    income_box7_coundown.innerHTML = `${second}`;
                    time--;
                }else if(second == -0){
                    income_box7_coundown.innerHTML = `${second}`;
                    time;
                    
                }
                if(second <= 0){
                    // console.log(second);
                    income_box7_coundown.classList.remove('displayblock')
                    box7_coundowndisplayNone();
                }

            }
        }

                //////Earn Now////////////
        Earn_Now_7.addEventListener('click',function(){

            setInterval(()=>{
                box7_coundownbg.classList.remove('zindex1');
                box7_coundownbg.classList.add('zindex1');
                Earn_Now_7.classList.add('zindex-1');
                localStorage.setItem("income_box7_earn",'income_box7_earn');
                window.location = incomeLinks.links_7;
            },12000)
            box7_coundowndisplayblock()
            box7_open_Time()
            Earn_Now_7.classList.add('zindex-1');
        })

        let income_box7_earn = localStorage.getItem("income_box7_earn");
        if(income_box7_earn){
            box7_coundownbg.classList.add('zindex8');
            Earn_Now_7.classList.add('zindex0');
            income_box7_Claim_Now_7.classList.add('zindex1');
        }
    }incomeBox7();
    ///////////////////////////////income box 8/////////////////////
    function incomeBox8(){
        let Earn_Now_8 = document.querySelector(".Earn-Now-8");
        let income_box8_coundown = document.querySelector('.income-box8-coundown');
        let box8_coundownbg = document.querySelector(".income-box8-coundownbg");
        let income_box_8 = document.querySelector('div#income-box-8');
        let income_box8_Claim_Now_8 = document.querySelector('div#income-box8-Claim-Now-8');

        income_box8_Claim_Now_8.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_8.classList.add('displayNone');
            localStorage.setItem('claim8',1);
        });

        let claimed = localStorage.getItem("claim8");
            if(claimed == 1){
                setTimeout(()=>{
                    income_box_8.classList.add('displayNone');
                },1000)
            }

        //coundown
        // coundowndisplayblock
        function box8_coundowndisplayblock(){
            income_box8_coundown.classList.add('displayblock');
        }

        // coundowndisplayNone
        function box8_coundowndisplayNone(){
            income_box8_coundown.classList.add('displayNone')
        }
        box8_coundowndisplayNone();

        // starTime
        function box8_open_Time(){
            // let startminit = 59;
            let time =  10;
            setInterval(box8_updatecoundown, 1000);

            function box8_updatecoundown(){
                const minuts = Math.floor(time / 60);

                var second = time % 60;

                if(second){
                    income_box8_coundown.innerHTML = `${second}`;
                    time--;
                }else if(second == -0){
                    income_box8_coundown.innerHTML = `${second}`;
                    time;
                    
                }
                if(second <= 0){
                    // console.log(second);
                    income_box8_coundown.classList.remove('displayblock')
                    box8_coundowndisplayNone();
                }

            }
        }

                //////Earn Now////////////
        Earn_Now_8.addEventListener('click',function(){

            setInterval(()=>{
                box8_coundownbg.classList.remove('zindex1');
                box8_coundownbg.classList.add('zindex1');
                Earn_Now_8.classList.add('zindex-1');
                localStorage.setItem("income_box8_earn",'income_box8_earn');
                window.location = incomeLinks.links_8;
            },12000)
            box8_coundowndisplayblock()
            box8_open_Time()
            Earn_Now_8.classList.add('zindex-1');
        })

        let income_box8_earn = localStorage.getItem("income_box8_earn");
        if(income_box8_earn){
            box8_coundownbg.classList.add('zindex8');
            Earn_Now_8.classList.add('zindex0');
            income_box8_Claim_Now_8.classList.add('zindex1');
        }
    }incomeBox8();
    ///////////////////////////////income box 9/////////////////////
    function incomeBox9(){
        let Earn_Now_9 = document.querySelector(".Earn-Now-9");
        let income_box9_coundown = document.querySelector('.income-box9-coundown');
        let box9_coundownbg = document.querySelector(".income-box9-coundownbg");
        let income_box_9 = document.querySelector('div#income-box-9');
        let income_box9_Claim_Now_9 = document.querySelector('div#income-box9-Claim-Now-9');

        income_box9_Claim_Now_9.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_9.classList.add('displayNone');
            localStorage.setItem('claim9',1);
        });

        let claimed = localStorage.getItem("claim9");
            if(claimed == 1){
                setTimeout(()=>{
                    income_box_9.classList.add('displayNone');
                },1000)
            }

        //coundown
        // coundowndisplayblock
        function box9_coundowndisplayblock(){
            income_box9_coundown.classList.add('displayblock');
        }

        // coundowndisplayNone
        function box9_coundowndisplayNone(){
            income_box9_coundown.classList.add('displayNone')
        }
        box9_coundowndisplayNone();

        // starTime
        function box9_open_Time(){
            // let startminit = 59;
            let time =  10;
            setInterval(box9_updatecoundown, 1000);

            function box9_updatecoundown(){
                const minuts = Math.floor(time / 60);

                var second = time % 60;

                if(second){
                    income_box9_coundown.innerHTML = `${second}`;
                    time--;
                }else if(second == -0){
                    income_box9_coundown.innerHTML = `${second}`;
                    time;
                    
                }
                if(second <= 0){
                    // console.log(second);
                    income_box9_coundown.classList.remove('displayblock')
                    box9_coundowndisplayNone();
                }

            }
        }

                //////Earn Now////////////
        Earn_Now_9.addEventListener('click',function(){

            setInterval(()=>{
                box9_coundownbg.classList.remove('zindex1');
                box9_coundownbg.classList.add('zindex1');
                Earn_Now_9.classList.add('zindex-1');
                localStorage.setItem("income_box9_earn",'income_box9_earn');
                window.location = incomeLinks.links_9;
            },12000)
            box9_coundowndisplayblock()
            box9_open_Time()
            Earn_Now_9.classList.add('zindex-1');
        })

        let income_box9_earn = localStorage.getItem("income_box9_earn");
        if(income_box9_earn){
            box9_coundownbg.classList.add('zindex8');
            Earn_Now_9.classList.add('zindex0');
            income_box9_Claim_Now_9.classList.add('zindex1');
        }
    }incomeBox9();
    ///////////////////////////////income box 10/////////////////////
    function incomeBox10(){
        let Earn_Now_10 = document.querySelector(".Earn-Now-10");
        let income_box10_coundown = document.querySelector('.income-box10-coundown');
        let box10_coundownbg = document.querySelector(".income-box10-coundownbg");
        let income_box_10 = document.querySelector('div#income-box-10');
        let income_box10_Claim_Now_10 = document.querySelector('div#income-box10-Claim-Now-10');

        income_box10_Claim_Now_10.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_10.classList.add('displayNone');
            localStorage.setItem('claim10',1);
        });

        let claimed = localStorage.getItem("claim10");
            if(claimed == 1){
                setTimeout(()=>{
                    income_box_10.classList.add('displayNone');
                },1000)
            }

        //coundown
        // coundowndisplayblock
        function box10_coundowndisplayblock(){
            income_box10_coundown.classList.add('displayblock');
        }

        // coundowndisplayNone
        function box10_coundowndisplayNone(){
            income_box10_coundown.classList.add('displayNone')
        }
        box10_coundowndisplayNone();

        // starTime
        function box10_open_Time(){
            // let startminit = 59;
            let time =  10;
            setInterval(box10_updatecoundown, 1000);

            function box10_updatecoundown(){
                const minuts = Math.floor(time / 60);

                var second = time % 60;

                if(second){
                    income_box10_coundown.innerHTML = `${second}`;
                    time--;
                }else if(second == -0){
                    income_box10_coundown.innerHTML = `${second}`;
                    time;
                    
                }
                if(second <= 0){
                    // console.log(second);
                    income_box10_coundown.classList.remove('displayblock')
                    box10_coundowndisplayNone();
                }

            }
        }

                //////Earn Now////////////
        Earn_Now_10.addEventListener('click',function(){

            setInterval(()=>{
                box10_coundownbg.classList.remove('zindex1');
                box10_coundownbg.classList.add('zindex1');
                Earn_Now_10.classList.add('zindex-1');
                localStorage.setItem("income_box10_earn",'income_box10_earn');
                window.location = incomeLinks.links_10;
            },12000)
            box10_coundowndisplayblock()
            box10_open_Time()
            Earn_Now_10.classList.add('zindex-1');
        })

        let income_box10_earn = localStorage.getItem("income_box10_earn");
        if(income_box10_earn){
            box10_coundownbg.classList.add('zindex8');
            Earn_Now_10.classList.add('zindex0');
            income_box10_Claim_Now_10.classList.add('zindex1');
        }
    }incomeBox10()
    ///////////////////////////////income box 11/////////////////////
    function incomeBox11(){
        let Earn_Now_11 = document.querySelector(".Earn-Now-11");
        let income_box11_coundown = document.querySelector('.income-box11-coundown');
        let box11_coundownbg = document.querySelector(".income-box11-coundownbg");
        let income_box_11 = document.querySelector('div#income-box-11');
        let income_box11_Claim_Now_11 = document.querySelector('div#income-box11-Claim-Now-11');

        income_box11_Claim_Now_11.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_11.classList.add('displayNone');
            localStorage.setItem('claim11',1);
        });

        let claimed = localStorage.getItem("claim11");
            if(claimed == 1){
                setTimeout(()=>{
                    income_box_11.classList.add('displayNone');
                },1000)
            }

        //coundown
        // coundowndisplayblock
        function box11_coundowndisplayblock(){
            income_box11_coundown.classList.add('displayblock');
        }

        // coundowndisplayNone
        function box11_coundowndisplayNone(){
            income_box11_coundown.classList.add('displayNone')
        }
        box11_coundowndisplayNone();

        // starTime
        function box11_open_Time(){
            // let startminit = 59;
            let time =  10;
            setInterval(box11_updatecoundown, 1000);

            function box11_updatecoundown(){
                const minuts = Math.floor(time / 60);

                var second = time % 60;

                if(second){
                    income_box11_coundown.innerHTML = `${second}`;
                    time--;
                }else if(second == -0){
                    income_box11_coundown.innerHTML = `${second}`;
                    time;
                    
                }
                if(second <= 0){
                    // console.log(second);
                    income_box11_coundown.classList.remove('displayblock')
                    box11_coundowndisplayNone();
                }

            }
        }

                //////Earn Now////////////
        Earn_Now_11.addEventListener('click',function(){

            setInterval(()=>{
                box11_coundownbg.classList.remove('zindex1');
                box11_coundownbg.classList.add('zindex1');
                Earn_Now_11.classList.add('zindex-1');
                localStorage.setItem("income_box11_earn",'income_box11_earn');
                window.location = incomeLinks.links_11;
            },12000)
            box11_coundowndisplayblock()
            box11_open_Time()
            Earn_Now_11.classList.add('zindex-1');
        })

        let income_box11_earn = localStorage.getItem("income_box11_earn");
        if(income_box11_earn){
            box11_coundownbg.classList.add('zindex8');
            Earn_Now_11.classList.add('zindex0');
            income_box11_Claim_Now_11.classList.add('zindex1');
        }
    }incomeBox11()
    ///////////////////////////////income box 12/////////////////////
    function incomeBox12(){
        let Earn_Now_12 = document.querySelector(".Earn-Now-12");
        let income_box12_coundown = document.querySelector('.income-box12-coundown');
        let box12_coundownbg = document.querySelector(".income-box12-coundownbg");
        let income_box_12 = document.querySelector('div#income-box-12');
        let income_box12_Claim_Now_12 = document.querySelector('div#income-box12-Claim-Now-12');

        income_box12_Claim_Now_12.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_12.classList.add('displayNone');
            localStorage.setItem('claim12',1);
        });

        let claimed = localStorage.getItem("claim12");
            if(claimed == 1){
                setTimeout(()=>{
                    income_box_12.classList.add('displayNone');
                },1000)
            }

        //coundown
        // coundowndisplayblock
        function box12_coundowndisplayblock(){
            income_box12_coundown.classList.add('displayblock');
        }

        // coundowndisplayNone
        function box12_coundowndisplayNone(){
            income_box12_coundown.classList.add('displayNone')
        }
        box12_coundowndisplayNone();

        // starTime
        function box12_open_Time(){
            // let startminit = 59;
            let time =  10;
            setInterval(box12_updatecoundown, 1000);

            function box12_updatecoundown(){
                const minuts = Math.floor(time / 60);

                var second = time % 60;

                if(second){
                    income_box12_coundown.innerHTML = `${second}`;
                    time--;
                }else if(second == -0){
                    income_box12_coundown.innerHTML = `${second}`;
                    time;
                    
                }
                if(second <= 0){
                    // console.log(second);
                    income_box12_coundown.classList.remove('displayblock')
                    box12_coundowndisplayNone();
                }

            }
        }

                //////Earn Now////////////
        Earn_Now_12.addEventListener('click',function(){

            setInterval(()=>{
                box12_coundownbg.classList.remove('zindex1');
                box12_coundownbg.classList.add('zindex1');
                Earn_Now_12.classList.add('zindex-1');
                localStorage.setItem("income_box12_earn",'income_box12_earn');
                window.location = incomeLinks.links_12;
            },12000)
            box12_coundowndisplayblock()
            box12_open_Time()
            Earn_Now_12.classList.add('zindex-1');
        })

        let income_box12_earn = localStorage.getItem("income_box12_earn");
        if(income_box12_earn){
            box12_coundownbg.classList.add('zindex8');
            Earn_Now_12.classList.add('zindex0');
            income_box12_Claim_Now_12.classList.add('zindex1');
        }
    }incomeBox12();
}
//work links input object
//links changes every hour

function incomeLink_1(){
    incomeLinks = {
        links_1 : 'https://cashando.me/gm4QxF',
        links_2 : 'https://go.indiurl.in.net/lPObtLtL',
        links_3 : 'https://shrinke.me/TPwnjM',
        links_4 : 'https://v2links.in/194MNFsi',
        links_5 : 'https://clk.asia/GN89gbEj',
        links_6 : 'https://exe.io/5Rfv0CaR',
        links_7 : 'https://loptelink.com/AvmPKaXp',
        links_8 : 'https://oko.sh/SqtsTG',
        links_9 : 'https://shrx.in/xjQ56',
        links_10 : 'https://link1s.com/zUrvbvf',
        links_11 : 'https://vnshortener.com/vUn7X',
        links_12 : 'https://cuty.io/VZPdVMgTc'
    }
}
function incomeLink_2(){
    incomeLinks = {
        links_1 : 'https://cashando.me/gm4QxF',
        links_2 : 'https://go.indiurl.in.net/lPObtLtL',
        links_3 : 'https://shrinke.me/TPwnjM',
        links_4 : 'https://v2links.in/194MNFsi',
        links_5 : 'http://timepurse.top/7W6Qvk',
        links_6 : 'https://link.usalink.io/KH6x4G',
        links_7 : 'https://fc-lc.com/NvXKm1Ks',
        links_8 : 'https://ctr.sh/gZib',
        links_9 : 'http://megafly.in/FhKZ9K',
        links_10 : 'https://promo-visits.site/MevfadJ',
        links_11 : 'https://goo.st/pcPARvE',
        links_12 : 'https://tfly.link/iAJMUxT'
    }
}
function incomeLink_3(){
    incomeLinks = {
        links_1 : 'https://cashando.me/gm4QxF',
        links_2 : 'https://go.indiurl.in.net/lPObtLtL',
        links_3 : 'https://shrinke.me/TPwnjM',
        links_4 : 'https://v2links.in/194MNFsi',
        links_5 : 'https://clk.asia/GN89gbEj',
        links_6 : 'https://exe.io/5Rfv0CaR',
        links_7 : 'https://loptelink.com/AvmPKaXp',
        links_8 : 'https://oko.sh/SqtsTG',
        links_9 : 'https://shrx.in/xjQ56',
        links_10 : 'https://link1s.com/zUrvbvf',
        links_11 : 'https://vnshortener.com/vUn7X',
        links_12 : 'https://cuty.io/VZPdVMgTc'
    }
}
function incomeLink_4(){
    incomeLinks = {
        links_1 : 'https://cashando.me/gm4QxF',
        links_2 : 'https://go.indiurl.in.net/lPObtLtL',
        links_3 : 'https://shrinke.me/TPwnjM',
        links_4 : 'https://v2links.in/194MNFsi',
        links_5 : 'http://timepurse.top/7W6Qvk',
        links_6 : 'https://link.usalink.io/KH6x4G',
        links_7 : 'https://fc-lc.com/NvXKm1Ks',
        links_8 : 'https://ctr.sh/gZib',
        links_9 : 'http://megafly.in/FhKZ9K',
        links_10 : 'https://promo-visits.site/MevfadJ',
        links_11 : 'https://goo.st/pcPARvE',
        links_12 : 'https://tfly.link/iAJMUxT'
    }
}
function incomeLink_5(){
    incomeLinks = {
        links_1 : 'https://cashando.me/gm4QxF',
        links_2 : 'https://go.indiurl.in.net/lPObtLtL',
        links_3 : 'https://shrinke.me/TPwnjM',
        links_4 : 'https://v2links.in/194MNFsi',
        links_5 : 'http://timepurse.top/7W6Qvk',
        links_6 : 'https://link.usalink.io/KH6x4G',
        links_7 : 'https://fc-lc.com/NvXKm1Ks',
        links_8 : 'https://ctr.sh/gZib',
        links_9 : 'http://megafly.in/FhKZ9K',
        links_10 : 'https://promo-visits.site/MevfadJ',
        links_11 : 'https://goo.st/pcPARvE',
        links_12 : 'https://tfly.link/iAJMUxT'
    }
}
//Income Box clear
function incomeBoxClear(){
    localStorage.removeItem('income_box1_earn');
    localStorage.removeItem('claim1');
    
    localStorage.removeItem('income_box2_earn');
    localStorage.removeItem('claim2');

    localStorage.removeItem('income_box3_earn');
    localStorage.removeItem('claim3');

    localStorage.removeItem('income_box4_earn');
    localStorage.removeItem('claim4');

    localStorage.removeItem('income_box5_earn');
    localStorage.removeItem('claim5');

    localStorage.removeItem('income_box6_earn');
    localStorage.removeItem('claim6');

    localStorage.removeItem('income_box7_earn');
    localStorage.removeItem('claim7');

    localStorage.removeItem('income_box8_earn');
    localStorage.removeItem('claim8');

    localStorage.removeItem('income_box9_earn');
    localStorage.removeItem('claim9');

    localStorage.removeItem('income_box10_earn');
    localStorage.removeItem('claim10');

    localStorage.removeItem('income_box11_earn');
    localStorage.removeItem('claim11');

    localStorage.removeItem('income_box12_earn');
    localStorage.removeItem('claim12');
}

//Income Box set LocalStorage////////////

const clock = new Date();
let hour = clock.getHours();

let ampm = hour <= 12 ? 'AM' : 'PM' ;
    hour = hour % 12 ;
    hour = hour ? hour : 12 ;
setInterval(()=>{
    let Minutes = clock.getMinutes();
    Minutes = Minutes < 10 ? '0' + Minutes : Minutes ;
    let Seconds = clock.getSeconds();
    Seconds = Seconds < 10 ? '0' + Seconds : Seconds ;
},1000)

//sessionStorage clear Time
function Minutes(){
    setInterval(()=>{
        const clock = new Date();
        let Minutes = clock.getMinutes();
        Minutes = Minutes < 10 ? '0' + Minutes : Minutes ;
        let Seconds = clock.getSeconds();
        Seconds = Seconds < 10 ? '0' + Seconds : Seconds ;
        if((Minutes == 0)){
            incomeBoxClear()
        }
    },1000)
}

function boxUpdate(){
    if((hour === 12 & ampm == 'AM')){
        incomeLink_1()
        all_income_box1_12()
        Minutes()
    }else if((hour === 1 & ampm == 'AM')){
        incomeLink_1()
        all_income_box1_12()
        Minutes()
    }else if(hour === 2 & ampm == 'AM'){
        incomeLink_2()
        all_income_box1_12()
        Minutes()
    }else if(hour === 3 & ampm == 'AM'){
        incomeLink_3()
        all_income_box1_12()
        Minutes()
    }else if(hour === 3 & ampm == 'AM'){
        incomeLink_4()
        all_income_box1_12()
        Minutes()
    }else if(hour === 4 & ampm == 'AM'){
        incomeLink_5()
        all_income_box1_12()
        Minutes()
    }else if(hour === 5 & ampm == 'AM'){
        incomeLink_1()
        all_income_box1_12()
        Minutes()
    }else if(hour === 6 & ampm == 'AM'){
        incomeLink_2()
        all_income_box1_12()
        Minutes()
    }else if(hour === 7 & ampm == 'AM'){
        incomeLink_3()
        all_income_box1_12()
        Minutes()
    }else if(hour === 8 & ampm == 'AM'){
        incomeLink_4()
        all_income_box1_12()
        Minutes()
    }else if(hour === 9 & ampm == 'AM'){
        incomeLink_5()
        all_income_box1_12()
        Minutes()
    }else if(hour === 10 & ampm == 'AM'){
        incomeLink_1()
        all_income_box1_12()
        Minutes()
    }else if(hour === 11 & ampm == 'AM'){
        incomeLink_2()
        all_income_box1_12()
        Minutes()
    }else if(hour === 12 & ampm == 'PM'){
        incomeLink_3()
        all_income_box1_12()
        Minutes()
    }else if(hour === 1 & ampm == 'PM'){
        incomeLink_4()
        all_income_box1_12()
        Minutes()
    }else if(hour === 2 & ampm == 'PM'){
        incomeLink_5()
        all_income_box1_12()
        Minutes()
    }else if(hour === 3 & ampm == 'PM'){
        incomeLink_1()
        all_income_box1_12()
        Minutes()
    }else if(hour === 4 & ampm == 'PM'){
        incomeLink_2()
        all_income_box1_12()
        Minutes()
    }else if(hour === 5 & ampm == 'PM'){
        incomeLink_3()
        all_income_box1_12()
        Minutes()
    }else if(hour === 6 & ampm == 'PM'){
        incomeLink_4()
        all_income_box1_12()
        Minutes()
    }else if(hour === 7 & ampm == 'PM'){
        incomeLink_5()
        all_income_box1_12()
        Minutes()
    }else if(hour === 8 & ampm == 'PM'){
        incomeLink_1()
        all_income_box1_12()
        Minutes()
    }else if(hour === 9 & ampm == 'PM'){
        incomeLink_2()
        all_income_box1_12()
        Minutes()
    }else if(hour === 10 & ampm == 'PM'){
        incomeLink_3()
        all_income_box1_12()
        Minutes()
    }else if(hour === 11 & ampm == 'PM'){
        incomeLink_4()
        all_income_box1_12()
        Minutes()
    }else if(hour === 12 & ampm == 'PM'){
        incomeLink_5()
        all_income_box1_12()
        Minutes()
    }
}boxUpdate();

////////////////////////work present count/////////////////////////////
function workCountPresent(){
    if(localStorage.getItem('claim1') == 1 && localStorage.getItem('claim2') == 1 && localStorage.getItem('claim3') == 1 && localStorage.getItem('claim4') == 1 && localStorage.getItem('claim5') == 1 && localStorage.getItem('claim6') == 1 && localStorage.getItem('claim7') == 1 && localStorage.getItem('claim8') == 1 && localStorage.getItem('claim9') == 1 && localStorage.getItem('claim10') == 1 && localStorage.getItem('claim11') == 1 && localStorage.getItem('claim12') == 1 ){
        document.querySelector('.workCount').innerHTML = 0;
    }else if(localStorage.getItem('claim1') == 1 && localStorage.getItem('claim2') == 1 && localStorage.getItem('claim3') == 1 && localStorage.getItem('claim4') == 1 && localStorage.getItem('claim5') == 1 && localStorage.getItem('claim6') == 1 && localStorage.getItem('claim7') == 1 && localStorage.getItem('claim8') == 1 && localStorage.getItem('claim9') == 1 && localStorage.getItem('claim10') == 1 && localStorage.getItem('claim11') == 1){
        document.querySelector('.workCount').innerHTML = 1;
    }else if(localStorage.getItem('claim1') == 1 && localStorage.getItem('claim2') == 1 && localStorage.getItem('claim3') == 1 && localStorage.getItem('claim4') == 1 && localStorage.getItem('claim5') == 1 && localStorage.getItem('claim6') == 1 && localStorage.getItem('claim7') == 1 && localStorage.getItem('claim8') == 1 && localStorage.getItem('claim9') == 1 && localStorage.getItem('claim10') == 1){
        document.querySelector('.workCount').innerHTML = 2;
    }else if(localStorage.getItem('claim1') == 1 && localStorage.getItem('claim2') == 1 && localStorage.getItem('claim3') == 1 && localStorage.getItem('claim4') == 1 && localStorage.getItem('claim5') == 1 && localStorage.getItem('claim6') == 1 && localStorage.getItem('claim7') == 1 && localStorage.getItem('claim8') == 1 && localStorage.getItem('claim9') == 1){
        document.querySelector('.workCount').innerHTML = 3;
    }else if(localStorage.getItem('claim1') == 1 && localStorage.getItem('claim2') == 1 && localStorage.getItem('claim3') == 1 && localStorage.getItem('claim4') == 1 && localStorage.getItem('claim5') == 1 && localStorage.getItem('claim6') == 1 && localStorage.getItem('claim7') == 1 && localStorage.getItem('claim8') == 1){
        document.querySelector('.workCount').innerHTML = 4;
    }else if(localStorage.getItem('claim1') == 1 && localStorage.getItem('claim2') == 1 && localStorage.getItem('claim3') == 1 && localStorage.getItem('claim4') == 1 && localStorage.getItem('claim5') == 1 && localStorage.getItem('claim6') == 1 && localStorage.getItem('claim7') == 1){
        document.querySelector('.workCount').innerHTML = 5;
    }else if(localStorage.getItem('claim1') == 1 && localStorage.getItem('claim2') == 1 && localStorage.getItem('claim3') == 1 && localStorage.getItem('claim4') == 1 && localStorage.getItem('claim5') == 1 && localStorage.getItem('claim6') == 1){
        document.querySelector('.workCount').innerHTML = 6;
    }else if(localStorage.getItem('claim1') == 1 && localStorage.getItem('claim2') == 1 && localStorage.getItem('claim3') == 1 && localStorage.getItem('claim4') == 1 && localStorage.getItem('claim5') == 1){
        document.querySelector('.workCount').innerHTML = 7;
    }else if(localStorage.getItem('claim1') == 1 && localStorage.getItem('claim2') == 1 && localStorage.getItem('claim3') == 1 && localStorage.getItem('claim4') == 1){
        document.querySelector('.workCount').innerHTML = 8;
    }else if(localStorage.getItem('claim1') == 1 && localStorage.getItem('claim2') == 1 && localStorage.getItem('claim3') == 1){
        document.querySelector('.workCount').innerHTML = 9;
    }else if(localStorage.getItem('claim1') == 1 && localStorage.getItem('claim2') == 1){
        document.querySelector('.workCount').innerHTML = 10;
    }else if(localStorage.getItem('claim1') == 1 ){
        document.querySelector('.workCount').innerHTML = 11;
    }else{
        document.querySelector('.workCount').innerHTML = 12;
    }
}workCountPresent();
//update news time
if(true){
    var dest = new Date ("aug 07, 2023 12:00:00").getTime();

    setInterval(()=>{
        var now = new Date().getTime();
        var diff = dest-now;
        var days = Math.floor(diff/(1000*60*60*24));

        var hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.floor((diff % (1000 * 60)) / 1000 );
        document.querySelector('span.updateTime').innerHTML = days+'/'+hour+'/'+min+'/'+sec;
    },1000)
    
}