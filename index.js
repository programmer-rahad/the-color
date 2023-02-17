import { setBorder } from "./utilities.js";
var nav = document.querySelector('header nav');
nav.innerHTML = '<span></span>' + nav.innerHTML;
const menuIcon = document.querySelector('label[for=menu-icon]');
const menuBorder = nav.firstChild;
var navLinks = document.querySelectorAll('nav a');
let current = navLinks[0];
const signupRight = document.querySelector('#sign-up .signup-right');

// Document Loaded Event:
document.addEventListener('DOMContentLoaded', function () {
    // Header
    setBorder(menuBorder, current);
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('mouseover', function () {
            if (i < navLinks.length - 1) {
                current = this;
                setBorder(menuBorder, current);
            }
        });
        navLinks[i].addEventListener('click', function () {
            if (window.innerWidth < 992) {
                nav.style.height = '0px';
            } else {
                if (i < navLinks.length - 1) {
                    setTimeout(function () {
                        setBorder(menuBorder, this);
                    }.bind(this), 1000)
                }

            }
        });
    }
    menuIcon.addEventListener('click', function () { 
        if (!nav.offsetHeight) {
            nav.style.height = nav.children[1].offsetHeight * nav.children.length + 15 + 'px';
        } else {
            nav.style.height = 0;
        }
    })

    // Sign up
    function setSignupRight() {
        if (innerWidth < 850) {
            signupRight.parentElement.prepend(signupRight);
        } else {
            signupRight.parentElement.append(signupRight);
        }
    }
    setSignupRight();

    // Window Resize Event
    window.addEventListener('resize', function () {
        if (innerWidth > 991.98) {
            setBorder(menuBorder, current);
        }
        setSignupRight();

    })

    // Window Scroll Event
    window.addEventListener('scroll', function () {
        if (innerWidth > 991.98) {
            var sections = document.querySelectorAll('section');
            for (let i = 0; i < sections.length - 1; i++) {
                const section = sections[i];
                var offsetTop = section.getBoundingClientRect().y;
                if (offsetTop < 0) {
                    console.log(section);
                    const current = document.querySelector('a[href="#' + section.id + '"]');
                    setBorder(menuBorder, current);
                }
            }
        }

    })
})
