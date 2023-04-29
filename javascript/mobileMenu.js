let sideBar = document.querySelector('.onMobileMenu');


document.querySelector("i#onMobileMenusideBar").addEventListener('click', function(){
    sideBar.classList.remove('active')
});

function mobileMenuRemove(){
    sideBar.classList.add('active')
}
document.querySelector("i#onMobileMenusideBarCloase").addEventListener('click', function(){
    mobileMenuRemove()
});

let allmobileMenu = document.querySelectorAll('.onMobileMenu a');
allmobileMenu.forEach((e)=>{
    e.addEventListener('click', function(){
        mobileMenuRemove()
    })
});