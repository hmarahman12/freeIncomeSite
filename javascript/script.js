//Affilate active
const Affilate_now = document.querySelector(".Affilate-now");
const from_Affilate = document.querySelector(".from-Affilate");
Affilate_now.addEventListener('click', e => {
    if(e.target == e.currentTarget){
        from_Affilate.classList.toggle("active");
    }
    
});

//widrow active
const widrow_now = document.querySelector(".Widrow-now");
const from_widrow = document.querySelector(".from-widrow");
widrow_now.addEventListener('click', e => {
    if(e.target == e.currentTarget){
        from_widrow.classList.toggle("active");
    }
    
});

//histry active
const history_now = document.querySelector(".history-now");
const history = document.querySelector(".history");
history_now.addEventListener('click', e => {
    if(e.target == e.currentTarget){
        history.classList.toggle("active");
    }
    
});
