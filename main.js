/* Funtion for scrolling to top*/
function someFunction() {
    //In a snap
    /* window.scrollTo(0, 0); */

    // With some animation
    /* $('html, body').animate({ scrollTop: 0 }, 'slow'); */

    // Smooth scroll behaviour
    window.scrollTo({ top: 0, behavior: `smooth` })
}