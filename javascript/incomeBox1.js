///////////////////////////////income box All 1_12/////////////////////
function all_income_box1_12(){
    ///////////////////////////////income box 1/////////////////////
    function incomeBox1(){
        let income_box1_open1 = document.querySelector(".income-box1-open-1");
        let Earn_Now_1 = document.querySelector(".Earn-Now-1");
        let income_box1_coundown = document.querySelector('.income-box1-coundown');
        let box1_coundownbg = document.querySelector(".income-box1-coundownbg");
        let income_box_1 = document.querySelector('div#income-box-1');
        let income_box1_Claim_Now_1 = document.querySelector('div#income-box1-Claim-Now-1');

        income_box1_Claim_Now_1.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_1.classList.add('displayNone');
            sessionStorage.setItem('claim1',1)
        });
        let claimed = sessionStorage.getItem('claim1');
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

        // Box open
        let income_box1_open = sessionStorage.getItem('income_box1_open');

        if(income_box1_open){
            income_box1_open1.classList.add('displayNone');
            box1_coundownbg.classList.add('zindex1');
            Earn_Now_1.classList.add('zindex1');
        }

        income_box1_open1.addEventListener('click',function(){
            income_box1_open1.classList.add('displayNone');
            box1_coundownbg.classList.add('zindex1');
            setInterval(()=>{
                box1_coundownbg.classList.remove('zindex1');
                box1_coundownbg.classList.add('zindex1');
                Earn_Now_1.classList.add('zindex1');
                sessionStorage.setItem('income_box1_open','income_box1_open')
            },12000)
            box1_coundowndisplayblock()
            box1_open_Time()
        })
        //////Earn Now 1 //////////////////
        Earn_Now_1.addEventListener('click',function(){
            window.location = incomeLinks.links_1;
            sessionStorage.setItem('income_box1_earn','income_box1_earn')
        })
        
        //Box open
        let income_box1_earn = sessionStorage.getItem('income_box1_earn');
        if(income_box1_earn){
            box1_coundownbg.classList.add('zindex8');
            Earn_Now_1.classList.add('zindex0');
            income_box1_Claim_Now_1.classList.add('zindex1');
        }
    }incomeBox1();
    ///////////////////////////////income box 2/////////////////////
    function incomeBox2(){
        let income_box2_open2 = document.querySelector(".income-box2-open-2");
        let Earn_Now_2 = document.querySelector(".Earn-Now-2");
        let income_box2_coundown = document.querySelector('.income-box2-coundown');
        let box2_coundownbg = document.querySelector(".income-box2-coundownbg");
        let income_box_2 = document.querySelector('div#income-box-2');
        let income_box2_Claim_Now_2 = document.querySelector('div#income-box2-Claim-Now-2');

        income_box2_Claim_Now_2.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_2.classList.add('displayNone');
            sessionStorage.setItem('claim2',2)
        });
        let claimed = sessionStorage.getItem('claim2');
        if(claimed == 2){
            setTimeout(()=>{
                income_box_2.classList.add('displayNone');
            },1000)
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

        // Box open
        let income_box2_open = sessionStorage.getItem('income_box2_open');

        if(income_box2_open){
            income_box2_open2.classList.add('displayNone');
            box2_coundownbg.classList.add('zindex1');
            Earn_Now_2.classList.add('zindex1');
        }

        income_box2_open2.addEventListener('click',function(){
            income_box2_open2.classList.add('displayNone');
            box2_coundownbg.classList.add('zindex1');
            setInterval(()=>{
                box2_coundownbg.classList.remove('zindex1');
                box2_coundownbg.classList.add('zindex1');
                Earn_Now_2.classList.add('zindex1');
                sessionStorage.setItem('income_box2_open','income_box2_open')
            },12000)
            box2_coundowndisplayblock()
            box2_open_Time()
        })
        //////Earn Now////////////
        Earn_Now_2.addEventListener('click',function(){
            window.location = incomeLinks.links_2;
            sessionStorage.setItem('income_box2_earn','income_box2_earn')
        })
        
        //Box open
        let income_box2_earn = sessionStorage.getItem('income_box2_earn');
        if(income_box2_earn){
            box2_coundownbg.classList.add('zindex8');
            Earn_Now_2.classList.add('zindex0');
            income_box2_Claim_Now_2.classList.add('zindex1');
        }
    }incomeBox2();
    ///////////////////////////////income box 3/////////////////////
    function incomeBox3(){
        let income_box3_open3 = document.querySelector(".income-box3-open-3");
        let Earn_Now_3 = document.querySelector(".Earn-Now-3");
        let income_box3_coundown = document.querySelector('.income-box3-coundown');
        let box3_coundownbg = document.querySelector(".income-box3-coundownbg");
        let income_box_3 = document.querySelector('div#income-box-3');
        let income_box3_Claim_Now_3 = document.querySelector('div#income-box3-Claim-Now-3');

        income_box3_Claim_Now_3.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_3.classList.add('displayNone');
            sessionStorage.setItem('claim3',3)
        });
        let claimed = sessionStorage.getItem('claim3');
        if(claimed == 3){
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

        // Box open
        let income_box3_open = sessionStorage.getItem('income_box3_open');

        if(income_box3_open){
            income_box3_open3.classList.add('displayNone');
            box3_coundownbg.classList.add('zindex1');
            Earn_Now_3.classList.add('zindex1');
        }

        income_box3_open3.addEventListener('click',function(){
            income_box3_open3.classList.add('displayNone');
            box3_coundownbg.classList.add('zindex1');
            setInterval(()=>{
                box3_coundownbg.classList.remove('zindex1');
                box3_coundownbg.classList.add('zindex1');
                Earn_Now_3.classList.add('zindex1');
                sessionStorage.setItem('income_box3_open','income_box3_open')
            },12000)
            box3_coundowndisplayblock()
            box3_open_Time()
        })
        //////Earn Now////////////
        Earn_Now_3.addEventListener('click',function(){
            window.location = incomeLinks.links_3;
            sessionStorage.setItem('income_box3_earn','income_box3_earn')
        })
        
        //Box open
        let income_box3_earn = sessionStorage.getItem('income_box3_earn');
        if(income_box3_earn){
            box3_coundownbg.classList.add('zindex8');
            Earn_Now_3.classList.add('zindex0');
            income_box3_Claim_Now_3.classList.add('zindex1');
        }
    }incomeBox3();
    ///////////////////////////////income box 4/////////////////////
    function incomeBox4(){
        let income_box4_open4 = document.querySelector(".income-box4-open-4");
        let Earn_Now_4 = document.querySelector(".Earn-Now-4");
        let income_box4_coundown = document.querySelector('.income-box4-coundown');
        let box4_coundownbg = document.querySelector(".income-box4-coundownbg");
        let income_box_4 = document.querySelector('div#income-box-4');
        let income_box4_Claim_Now_4 = document.querySelector('div#income-box4-Claim-Now-4');

        income_box4_Claim_Now_4.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_4.classList.add('displayNone');
            sessionStorage.setItem('claim4',4)
        });
        let claimed = sessionStorage.getItem('claim4');
        if(claimed == 4){
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

        // Box open
        let income_box4_open = sessionStorage.getItem('income_box4_open');

        if(income_box4_open){
            income_box4_open4.classList.add('displayNone');
            box4_coundownbg.classList.add('zindex1');
            Earn_Now_4.classList.add('zindex1');
        }

        income_box4_open4.addEventListener('click',function(){
            income_box4_open4.classList.add('displayNone');
            box4_coundownbg.classList.add('zindex1');
            setInterval(()=>{
                box4_coundownbg.classList.remove('zindex1');
                box4_coundownbg.classList.add('zindex1');
                Earn_Now_4.classList.add('zindex1');
                sessionStorage.setItem('income_box4_open','income_box4_open')
            },12000)
            box4_coundowndisplayblock()
            box4_open_Time()
        })
        //////Earn Now////////////
        Earn_Now_4.addEventListener('click',function(){
            window.location = incomeLinks.links_4;
            sessionStorage.setItem('income_box4_earn','income_box4_earn')
        })
        
        //Box open
        let income_box4_earn = sessionStorage.getItem('income_box4_earn');
        if(income_box4_earn){
            box4_coundownbg.classList.add('zindex8');
            Earn_Now_4.classList.add('zindex0');
            income_box4_Claim_Now_4.classList.add('zindex1');
        }
    }incomeBox4();
    ///////////////////////////////income box 5/////////////////////
    function incomeBox5(){
        let income_box5_open5 = document.querySelector(".income-box5-open-5");
        let Earn_Now_5 = document.querySelector(".Earn-Now-5");
        let income_box5_coundown = document.querySelector('.income-box5-coundown');
        let box5_coundownbg = document.querySelector(".income-box5-coundownbg");
        let income_box_5 = document.querySelector('div#income-box-5');
        let income_box5_Claim_Now_5 = document.querySelector('div#income-box5-Claim-Now-5');

        income_box5_Claim_Now_5.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_5.classList.add('displayNone');
            sessionStorage.setItem('claim5',5)
        });
        let claimed = sessionStorage.getItem('claim5');
        if(claimed == 5){
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

        // Box open
        let income_box5_open = sessionStorage.getItem('income_box5_open');

        if(income_box5_open){
            income_box5_open5.classList.add('displayNone');
            box5_coundownbg.classList.add('zindex1');
            Earn_Now_5.classList.add('zindex1');
        }

        income_box5_open5.addEventListener('click',function(){
            income_box5_open5.classList.add('displayNone');
            box5_coundownbg.classList.add('zindex1');
            setInterval(()=>{
                box5_coundownbg.classList.remove('zindex1');
                box5_coundownbg.classList.add('zindex1');
                Earn_Now_5.classList.add('zindex1');
                sessionStorage.setItem('income_box5_open','income_box5_open')
            },12000)
            box5_coundowndisplayblock()
            box5_open_Time()
        })
        //////Earn Now////////////
        Earn_Now_5.addEventListener('click',function(){
            window.location = incomeLinks.links_5;
            sessionStorage.setItem('income_box5_earn','income_box5_earn')
        })
        
        //Box open
        let income_box5_earn = sessionStorage.getItem('income_box5_earn');
        if(income_box5_earn){
            box5_coundownbg.classList.add('zindex8');
            Earn_Now_5.classList.add('zindex0');
            income_box5_Claim_Now_5.classList.add('zindex1');
        }
    }incomeBox5();
    ///////////////////////////////income box 6/////////////////////
    function incomeBox6(){
        let income_box6_open6 = document.querySelector(".income-box6-open-6");
        let Earn_Now_6 = document.querySelector(".Earn-Now-6");
        let income_box6_coundown = document.querySelector('.income-box6-coundown');
        let box6_coundownbg = document.querySelector(".income-box6-coundownbg");
        let income_box_6 = document.querySelector('div#income-box-6');
        let income_box6_Claim_Now_6 = document.querySelector('div#income-box6-Claim-Now-6');

        income_box6_Claim_Now_6.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_6.classList.add('displayNone');
            sessionStorage.setItem('claim6',6)
        });
        let claimed = sessionStorage.getItem('claim6');
        if(claimed == 6){
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

        // Box open
        let income_box6_open = sessionStorage.getItem('income_box6_open');

        if(income_box6_open){
            income_box6_open6.classList.add('displayNone');
            box6_coundownbg.classList.add('zindex1');
            Earn_Now_6.classList.add('zindex1');
        }

        income_box6_open6.addEventListener('click',function(){
            income_box6_open6.classList.add('displayNone');
            box6_coundownbg.classList.add('zindex1');
            setInterval(()=>{
                box6_coundownbg.classList.remove('zindex1');
                box6_coundownbg.classList.add('zindex1');
                Earn_Now_6.classList.add('zindex1');
                sessionStorage.setItem('income_box6_open','income_box6_open')
            },12000)
            box6_coundowndisplayblock()
            box6_open_Time()
        })
        //////Earn Now////////////
        Earn_Now_6.addEventListener('click',function(){
            window.location = incomeLinks.links_6;
            sessionStorage.setItem('income_box6_earn','income_box6_earn')
        })
        
        //Box open
        let income_box6_earn = sessionStorage.getItem('income_box6_earn');
        if(income_box6_earn){
            box6_coundownbg.classList.add('zindex8');
            Earn_Now_6.classList.add('zindex0');
            income_box6_Claim_Now_6.classList.add('zindex1');
        }
    }incomeBox6();
    ///////////////////////////////income box 7/////////////////////
    function incomeBox7(){
        let income_box7_open7 = document.querySelector(".income-box7-open-7");
        let Earn_Now_7 = document.querySelector(".Earn-Now-7");
        let income_box7_coundown = document.querySelector('.income-box7-coundown');
        let box7_coundownbg = document.querySelector(".income-box7-coundownbg");
        let income_box_7 = document.querySelector('div#income-box-7');
        let income_box7_Claim_Now_7 = document.querySelector('div#income-box7-Claim-Now-7');

        income_box7_Claim_Now_7.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_7.classList.add('displayNone');
            sessionStorage.setItem('claim7',7)
        });
        let claimed = sessionStorage.getItem('claim7');
        if(claimed == 7){
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

        // Box open
        let income_box7_open = sessionStorage.getItem('income_box7_open');

        if(income_box7_open){
            income_box7_open7.classList.add('displayNone');
            box7_coundownbg.classList.add('zindex1');
            Earn_Now_7.classList.add('zindex1');
        }

        income_box7_open7.addEventListener('click',function(){
            income_box7_open7.classList.add('displayNone');
            box7_coundownbg.classList.add('zindex1');
            setInterval(()=>{
                box7_coundownbg.classList.remove('zindex1');
                box7_coundownbg.classList.add('zindex1');
                Earn_Now_7.classList.add('zindex1');
                sessionStorage.setItem('income_box7_open','income_box7_open')
            },12000)
            box7_coundowndisplayblock()
            box7_open_Time()
        })
        //////Earn Now////////////
        Earn_Now_7.addEventListener('click',function(){
            window.location = incomeLinks.links_7;
            sessionStorage.setItem('income_box7_earn','income_box7_earn')
        })
        
        //Box open
        let income_box7_earn = sessionStorage.getItem('income_box7_earn');
        if(income_box7_earn){
            box7_coundownbg.classList.add('zindex8');
            Earn_Now_7.classList.add('zindex0');
            income_box7_Claim_Now_7.classList.add('zindex1');
        }
    }incomeBox7();
    ///////////////////////////////income box 8/////////////////////
    function incomeBox8(){
        let income_box8_open8 = document.querySelector(".income-box8-open-8");
        let Earn_Now_8 = document.querySelector(".Earn-Now-8");
        let income_box8_coundown = document.querySelector('.income-box8-coundown');
        let box8_coundownbg = document.querySelector(".income-box8-coundownbg");
        let income_box_8 = document.querySelector('div#income-box-8');
        let income_box8_Claim_Now_8 = document.querySelector('div#income-box8-Claim-Now-8');

        income_box8_Claim_Now_8.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_8.classList.add('displayNone');
            sessionStorage.setItem('claim8',8)
        });
        let claimed = sessionStorage.getItem('claim8');
        if(claimed == 8){
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

        // Box open
        let income_box8_open = sessionStorage.getItem('income_box8_open');

        if(income_box8_open){
            income_box8_open8.classList.add('displayNone');
            box8_coundownbg.classList.add('zindex1');
            Earn_Now_8.classList.add('zindex1');
        }

        income_box8_open8.addEventListener('click',function(){
            income_box8_open8.classList.add('displayNone');
            box8_coundownbg.classList.add('zindex1');
            setInterval(()=>{
                box8_coundownbg.classList.remove('zindex1');
                box8_coundownbg.classList.add('zindex1');
                Earn_Now_8.classList.add('zindex1');
                sessionStorage.setItem('income_box8_open','income_box8_open')
            },12000)
            box8_coundowndisplayblock()
            box8_open_Time()
        })
        //////Earn Now////////////
        Earn_Now_8.addEventListener('click',function(){
            window.location = incomeLinks.links_8;
            sessionStorage.setItem('income_box8_earn','income_box8_earn')
        })
        
        //Box open
        let income_box8_earn = sessionStorage.getItem('income_box8_earn');
        if(income_box8_earn){
            box8_coundownbg.classList.add('zindex8');
            Earn_Now_8.classList.add('zindex0');
            income_box8_Claim_Now_8.classList.add('zindex1');
        }
    }incomeBox8();
    ///////////////////////////////income box 9/////////////////////
    function incomeBox9(){
        let income_box9_open9 = document.querySelector(".income-box9-open-9");
        let Earn_Now_9 = document.querySelector(".Earn-Now-9");
        let income_box9_coundown = document.querySelector('.income-box9-coundown');
        let box9_coundownbg = document.querySelector(".income-box9-coundownbg");
        let income_box_9 = document.querySelector('div#income-box-9');
        let income_box9_Claim_Now_9 = document.querySelector('div#income-box9-Claim-Now-9');

        income_box9_Claim_Now_9.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_9.classList.add('displayNone');
            sessionStorage.setItem('claim9',9)
        });
        let claimed = sessionStorage.getItem('claim9');
        if(claimed == 9){
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

        // Box open
        let income_box9_open = sessionStorage.getItem('income_box9_open');

        if(income_box9_open){
            income_box9_open9.classList.add('displayNone');
            box9_coundownbg.classList.add('zindex1');
            Earn_Now_9.classList.add('zindex1');
        }

        income_box9_open9.addEventListener('click',function(){
            income_box9_open9.classList.add('displayNone');
            box9_coundownbg.classList.add('zindex1');
            setInterval(()=>{
                box9_coundownbg.classList.remove('zindex1');
                box9_coundownbg.classList.add('zindex1');
                Earn_Now_9.classList.add('zindex1');
                sessionStorage.setItem('income_box9_open','income_box9_open')
            },12000)
            box9_coundowndisplayblock()
            box9_open_Time()
        })
        //////Earn Now////////////
        Earn_Now_9.addEventListener('click',function(){
            window.location = incomeLinks.links_9;
            sessionStorage.setItem('income_box9_earn','income_box9_earn')
        })
        
        //Box open
        let income_box9_earn = sessionStorage.getItem('income_box9_earn');
        if(income_box9_earn){
            box9_coundownbg.classList.add('zindex8');
            Earn_Now_9.classList.add('zindex0');
            income_box9_Claim_Now_9.classList.add('zindex1');
        }
    }incomeBox9();
    ///////////////////////////////income box 10/////////////////////
    function incomeBox10(){
        let income_box10_open10 = document.querySelector(".income-box10-open-10");
        let Earn_Now_10 = document.querySelector(".Earn-Now-10");
        let income_box10_coundown = document.querySelector('.income-box10-coundown');
        let box10_coundownbg = document.querySelector(".income-box10-coundownbg");
        let income_box_10 = document.querySelector('div#income-box-10');
        let income_box10_Claim_Now_10 = document.querySelector('div#income-box10-Claim-Now-10');

        income_box10_Claim_Now_10.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_10.classList.add('displayNone');
            sessionStorage.setItem('claim10',10)
        });
        let claimed = sessionStorage.getItem('claim10');
        if(claimed == 10){
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

        // Box open
        let income_box10_open = sessionStorage.getItem('income_box10_open');

        if(income_box10_open){
            income_box10_open10.classList.add('displayNone');
            box10_coundownbg.classList.add('zindex1');
            Earn_Now_10.classList.add('zindex1');
        }

        income_box10_open10.addEventListener('click',function(){
            income_box10_open10.classList.add('displayNone');
            box10_coundownbg.classList.add('zindex1');
            setInterval(()=>{
                box10_coundownbg.classList.remove('zindex1');
                box10_coundownbg.classList.add('zindex1');
                Earn_Now_10.classList.add('zindex1');
                sessionStorage.setItem('income_box10_open','income_box10_open')
            },12000)
            box10_coundowndisplayblock()
            box10_open_Time()
        })
        //////Earn Now 1 //////////////////
        Earn_Now_10.addEventListener('click',function(){
            window.location = incomeLinks.links_10;
            sessionStorage.setItem('income_box10_earn','income_box10_earn')
        })
        
        //Box open
        let income_box10_earn = sessionStorage.getItem('income_box10_earn');
        if(income_box10_earn){
            box10_coundownbg.classList.add('zindex8');
            Earn_Now_10.classList.add('zindex0');
            income_box10_Claim_Now_10.classList.add('zindex1');
        }
    }incomeBox10();
    ///////////////////////////////income box 11/////////////////////
    function incomeBox11(){
        let income_box11_open11 = document.querySelector(".income-box11-open-11");
        let Earn_Now_11 = document.querySelector(".Earn-Now-11");
        let income_box11_coundown = document.querySelector('.income-box11-coundown');
        let box11_coundownbg = document.querySelector(".income-box11-coundownbg");
        let income_box_11 = document.querySelector('div#income-box-11');
        let income_box11_Claim_Now_11 = document.querySelector('div#income-box11-Claim-Now-11');

        income_box11_Claim_Now_11.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_11.classList.add('displayNone');
            sessionStorage.setItem('claim11',11)
        });
        let claimed = sessionStorage.getItem('claim11');
        if(claimed == 11){
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

        // Box open
        let income_box11_open = sessionStorage.getItem('income_box11_open');

        if(income_box11_open){
            income_box11_open11.classList.add('displayNone');
            box11_coundownbg.classList.add('zindex1');
            Earn_Now_11.classList.add('zindex1');
        }

        income_box11_open11.addEventListener('click',function(){
            income_box11_open11.classList.add('displayNone');
            box11_coundownbg.classList.add('zindex1');
            setInterval(()=>{
                box11_coundownbg.classList.remove('zindex1');
                box11_coundownbg.classList.add('zindex1');
                Earn_Now_11.classList.add('zindex1');
                sessionStorage.setItem('income_box11_open','income_box11_open')
            },12000)
            box11_coundowndisplayblock()
            box11_open_Time()
        })
        //////Earn Now 1 //////////////////
        Earn_Now_11.addEventListener('click',function(){
            window.location = incomeLinks.links_11;
            sessionStorage.setItem('income_box11_earn','income_box11_earn')
        })
        
        //Box open
        let income_box11_earn = sessionStorage.getItem('income_box11_earn');
        if(income_box11_earn){
            box11_coundownbg.classList.add('zindex8');
            Earn_Now_11.classList.add('zindex0');
            income_box11_Claim_Now_11.classList.add('zindex1');
        }
    }incomeBox11();
    ///////////////////////////////income box 12/////////////////////
    function incomeBox12(){
        let income_box12_open12 = document.querySelector(".income-box12-open-12");
        let Earn_Now_12 = document.querySelector(".Earn-Now-12");
        let income_box12_coundown = document.querySelector('.income-box12-coundown');
        let box12_coundownbg = document.querySelector(".income-box12-coundownbg");
        let income_box_12 = document.querySelector('div#income-box-12');
        let income_box12_Claim_Now_12 = document.querySelector('div#income-box12-Claim-Now-12');

        income_box12_Claim_Now_12.addEventListener('click', function(){
            window.location = 'https://www.highrevenuegate.com/k6pawzj3?key=8a41b357c3c75725af0800931d62fbd3';
            income_box_12.classList.add('displayNone');
            sessionStorage.setItem('claim12',12)
        });
        let claimed = sessionStorage.getItem('claim12');
        if(claimed == 12){
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

        // Box open
        let income_box12_open = sessionStorage.getItem('income_box12_open');

        if(income_box12_open){
            income_box12_open12.classList.add('displayNone');
            box12_coundownbg.classList.add('zindex1');
            Earn_Now_12.classList.add('zindex1');
        }

        income_box12_open12.addEventListener('click',function(){
            income_box12_open12.classList.add('displayNone');
            box12_coundownbg.classList.add('zindex1');
            setInterval(()=>{
                box12_coundownbg.classList.remove('zindex1');
                box12_coundownbg.classList.add('zindex1');
                Earn_Now_12.classList.add('zindex1');
                sessionStorage.setItem('income_box12_open','income_box12_open')
            },12000)
            box12_coundowndisplayblock()
            box12_open_Time()
        })
        //////Earn Now 1 //////////////////
        Earn_Now_12.addEventListener('click',function(){
            window.location = incomeLinks.links_12;
            sessionStorage.setItem('income_box12_earn','income_box12_earn')
        })
        
        //Box open
        let income_box12_earn = sessionStorage.getItem('income_box12_earn');
        if(income_box12_earn){
            box12_coundownbg.classList.add('zindex8');
            Earn_Now_12.classList.add('zindex0');
            income_box12_Claim_Now_12.classList.add('zindex1');
        }
    }incomeBox12();
}

//work links input object
//links changes every hour

function incomeLink_7AM(){
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
function incomeLink_8AM(){
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
function incomeLink_4PM(){
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
function incomeLink_5PM(){
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
function incomeLink_8PM(){
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

//sessionStorage clear
function sessionStorageclear() {
    sessionStorage.clear();
}

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
        if((Minutes === 0)){
            console.log(Minutes,Seconds);
            sessionStorageclear()
        }
    },1000)
}

    if((hour === 1 & ampm == 'AM')){
        incomeLink_7AM()
        all_income_box1_12()
        Minutes()
    }else if(hour === 8 & ampm == 'AM'){
        incomeLink_8AM()
        all_income_box1_12()
        Minutes()
    }else if(hour === 4 & ampm == 'PM'){
        incomeLink_4PM()
        all_income_box1_12()
        Minutes()
    }else if(hour === 5 & ampm == 'PM'){
        incomeLink_5PM()
        all_income_box1_12()
        Minutes()
    }else if(hour === 8 & ampm == 'PM'){
        incomeLink_8PM()
        all_income_box1_12()
        Minutes()
    }
////////////////////////work present count/////////////////////////////

if(sessionStorage.getItem('claim1') == 1 && sessionStorage.getItem('claim2') == 2 && sessionStorage.getItem('claim3') == 3 && sessionStorage.getItem('claim4') == 4 && sessionStorage.getItem('claim5') == 5 && sessionStorage.getItem('claim6') == 6 && sessionStorage.getItem('claim7') == 7 && sessionStorage.getItem('claim8') == 8 && sessionStorage.getItem('claim9') == 9 && sessionStorage.getItem('claim10') == 10 && sessionStorage.getItem('claim11') == 11 && sessionStorage.getItem('claim12') == 12){
    document.querySelector('.workCount').innerHTML = 0;
}else if(sessionStorage.getItem('claim1') == 1 && sessionStorage.getItem('claim2') == 2 && sessionStorage.getItem('claim3') == 3 && sessionStorage.getItem('claim4') == 4 && sessionStorage.getItem('claim5') == 5 && sessionStorage.getItem('claim6') == 6 && sessionStorage.getItem('claim7') == 7 && sessionStorage.getItem('claim8') == 8 && sessionStorage.getItem('claim9') == 9 && sessionStorage.getItem('claim10') == 10 && sessionStorage.getItem('claim11') == 11){
    document.querySelector('.workCount').innerHTML = 1;
}else if(sessionStorage.getItem('claim1') == 1 && sessionStorage.getItem('claim2') == 2 && sessionStorage.getItem('claim3') == 3 && sessionStorage.getItem('claim4') == 4 && sessionStorage.getItem('claim5') == 5 && sessionStorage.getItem('claim6') == 6 && sessionStorage.getItem('claim7') == 7 && sessionStorage.getItem('claim8') == 8 && sessionStorage.getItem('claim9') == 9 && sessionStorage.getItem('claim10') == 10){
    document.querySelector('.workCount').innerHTML = 2;
}else if(sessionStorage.getItem('claim1') == 1 && sessionStorage.getItem('claim2') == 2 && sessionStorage.getItem('claim3') == 3 && sessionStorage.getItem('claim4') == 4 && sessionStorage.getItem('claim5') == 5 && sessionStorage.getItem('claim6') == 6 && sessionStorage.getItem('claim7') == 7 && sessionStorage.getItem('claim8') == 8 && sessionStorage.getItem('claim9') == 9){
    document.querySelector('.workCount').innerHTML = 3;
}else if(sessionStorage.getItem('claim1') == 1 && sessionStorage.getItem('claim2') == 2 && sessionStorage.getItem('claim3') == 3 && sessionStorage.getItem('claim4') == 4 && sessionStorage.getItem('claim5') == 5 && sessionStorage.getItem('claim6') == 6 && sessionStorage.getItem('claim7') == 7 && sessionStorage.getItem('claim8') == 8){
    document.querySelector('.workCount').innerHTML = 4;
}else if(sessionStorage.getItem('claim1') == 1 && sessionStorage.getItem('claim2') == 2 && sessionStorage.getItem('claim3') == 3 && sessionStorage.getItem('claim4') == 4 && sessionStorage.getItem('claim5') == 5 && sessionStorage.getItem('claim6') == 6 && sessionStorage.getItem('claim7') == 7){
    document.querySelector('.workCount').innerHTML = 5;
}else if(sessionStorage.getItem('claim1') == 1 && sessionStorage.getItem('claim2') == 2 && sessionStorage.getItem('claim3') == 3 && sessionStorage.getItem('claim4') == 4 && sessionStorage.getItem('claim5') == 5 && sessionStorage.getItem('claim6') == 6){
    document.querySelector('.workCount').innerHTML = 6;
}else if(sessionStorage.getItem('claim1') == 1 && sessionStorage.getItem('claim2') == 2 && sessionStorage.getItem('claim3') == 3 && sessionStorage.getItem('claim4') == 4 && sessionStorage.getItem('claim5') == 5){
    document.querySelector('.workCount').innerHTML = 7;
}else if(sessionStorage.getItem('claim1') == 1 && sessionStorage.getItem('claim2') == 2 && sessionStorage.getItem('claim3') == 3 && sessionStorage.getItem('claim4') == 4){
    document.querySelector('.workCount').innerHTML = 8;
}else if(sessionStorage.getItem('claim1') == 1 && sessionStorage.getItem('claim2') == 2 && sessionStorage.getItem('claim3') == 3){
    document.querySelector('.workCount').innerHTML = 9;
}else if(sessionStorage.getItem('claim1') == 1 && sessionStorage.getItem('claim2') == 2){
    document.querySelector('.workCount').innerHTML = 10;
}else if(sessionStorage.getItem('claim1') == 1){
    document.querySelector('.workCount').innerHTML = 11;
}else{
    document.querySelector('.workCount').innerHTML = 12;
}


//update news time
if(true){
    var dest = new Date ("may 30, 2023 12:00:00").getTime();

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