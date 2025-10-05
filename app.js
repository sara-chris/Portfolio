// Hamburger menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle) {
    navToggle.onclick = function () {
        navMenu.classList.toggle('show-menu');
    }
}

// Typing effect
const typedSpan = document.querySelector('.typed-text');
const devName = "Alex John";
let typeIdx = 0;
let deleting = false;
function typeEffect() {
    if (!deleting) {
        typedSpan.textContent = devName.slice(0, typeIdx) + (typeIdx % 2 == 0 ? "|" : "");
        typeIdx++;
        if (typeIdx > devName.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        typedSpan.textContent = devName.slice(0, typeIdx) + (typeIdx % 2 == 0 ? "|" : "");
        typeIdx--;
        if (typeIdx < 0) {
            deleting = false;
            setTimeout(typeEffect, 600);
            return;
        }
    }
    setTimeout(typeEffect, deleting ? 70 : 130);
}
if (typedSpan) typeEffect();

// Animated skill bars when scrolled into view
function animateSkillBars() {
    document.querySelectorAll('.skill__progress').forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            bar.style.width = bar.dataset.width;
        }
    });
}
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('DOMContentLoaded', animateSkillBars);

// Prevent form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting me! I will get back to you soon.');
});