const headerItem = document.getElementById('header_item');
const headerList = document.getElementById('header_list');
const headerIcon = document.getElementById('header_icon') ;
const length = headerIcon.offsetHeight + 13;

console.log(length);

window.addEventListener('scroll',function(){
    if(window.scrollY >= length){
        headerItem.setAttribute('style','position: fixed; top: 0; right: 0; left: 0; box-shadow: 1px 1px 1px solid');
        headerIcon.style.marginBottom= 100+"px";
    }
    else{
        headerItem.setAttribute('style','position: sticky; top: 0');
        headerIcon.style.marginBottom= 0;

    }
});
