function initScrollSuave(){
const itensMenu = document.querySelectorAll('.js-menu a[href^="#"]')

    if(itensMenu.length){

    function scrolltoSection(event){
        event.preventDefault();

        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

    }



itensMenu.forEach((item) => {
    item.addEventListener('click', scrolltoSection);
});}
}
initScrollSuave();