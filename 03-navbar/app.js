// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const NavToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

NavToggle.addEventListener('click', function(){
    // console.log(links.classList);
    // console.log(links.classList.contains('random')); //false
    // console.log(links.classList.contains('links')); //true

    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links')
    //     console.log(NavToggle.classList)
    // } else {
    //     links.classList.add('show-links')
    // }
    links.classList.toggle("show-links")
})
