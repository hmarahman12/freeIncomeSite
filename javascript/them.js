let dark = document.querySelector("div#dark");
let lighte = document.querySelector("div#lighte");
let dark_light = localStorage.getItem('dark');
if(dark_light == null){
    localStorage.setItem('dark','light');
}else if(dark_light == 'dark'){
    function_dark();
}else if(dark_light == 'light'){
    function_lighte();
};

dark.addEventListener('click',function(){
    localStorage.setItem('dark','dark');
    function_dark();
});
function function_dark(){
    lighte.classList.add("active");
    dark.classList.add("disply-none");
    document.querySelector('body').classList.add('them');
    document.querySelector('nav').classList.add('them');
    document.querySelector('span a').classList.add('them');
    document.querySelector('a span').classList.add('them');
    document.querySelector('a.earn span').classList.add('them');
    document.querySelector('.profile-viw').classList.add('them');
    document.querySelector('.profile-ditels').classList.add('them');
    document.querySelector('span.Widrow-now').classList.add('them');
    document.querySelector('.Affilate-now a').classList.add('them');
    document.querySelector('.about a').classList.add('them');
    document.querySelector('.earne a').classList.add('them');
    document.querySelector('div#lighte').classList.add('them');
    document.querySelector('div#dark').classList.add('them');
    document.querySelector('span.history-now').classList.add('them');
    document.querySelector('.Signout').classList.add('them');
    document.querySelector('.mode').classList.add('them');
    document.querySelector('.from-widrow form').classList.add('them');
    document.querySelector('.from-widrow form span').classList.add('them');
    document.querySelector('.history').classList.add('them');
    document.querySelector('div#aoute').classList.add('them');
}
lighte.addEventListener('click',function(){
    localStorage.setItem('dark','light');
    function_lighte();
});
function function_lighte(){
    lighte.classList.remove("active");
    dark.classList.remove("disply-none");
    document.querySelector('body').classList.remove('them');
    document.querySelector('nav').classList.remove('them');
    document.querySelector('span a').classList.remove('them');
    document.querySelector('a span').classList.remove('them');
    document.querySelector('.profile-viw').classList.remove('them');
    document.querySelector('.profile-ditels').classList.remove('them');
    document.querySelector('span.Widrow-now').classList.remove('them');
    document.querySelector('.home2 span a').classList.remove('them');
    document.querySelector('.Affilate-now a').classList.remove('them');
    document.querySelector('.about a').classList.add('them');
    document.querySelector('a.earn span').classList.remove('them');
    document.querySelector('.earne a').classList.add('them');
    document.querySelector('div#lighte').classList.remove('them');
    document.querySelector('div#dark').classList.remove('them');
    document.querySelector('span.history-now').classList.remove('them');
    document.querySelector('.Signout').classList.remove('them');
    document.querySelector('.mode').classList.remove('them');
    document.querySelector('.from-widrow form').classList.remove('them');
    document.querySelector('.from-widrow form span').classList.remove('them');
    document.querySelector('.history').classList.remove('them');
    document.querySelector('div#aoute').classList.remove('them');
}

