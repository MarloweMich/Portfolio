const button = document.getElementById("topnav");
const wrapper = document.querySelector(".wrapper");

// button.attr('style', 'display: none')
button.addEventListener('click', function(){
    wrapper.scrollTo(0, 0);
});

wrapper.addEventListener('scroll', function (){
    if (wrapper.scrollY > 1000){
    button.setAttribute('visibility', 'visible')
}
    else {
        button.setAttribute('visibility', 'hidden')
    }
});