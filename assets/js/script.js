const button = document.getElementById("topnav");
const wrapper = document.querySelector(".wrapper");

// button.attr('style', 'display: none')
button.addEventListener('click', function(){
    wrapper.scrollTo({top: 0, behavior: "smooth"});
});

wrapper.addEventListener('scroll', function (){
    if (wrapper.compareDocumentPosition(0, 1000)){
    button.setAttribute('style', 'visibility: visible')
}
    else {
        button.setAttribute('style', 'visibility: hidden')
    }
});