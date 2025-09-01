// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Scroll animation
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 100);
});

// Tab functionality for all sections
document.addEventListener('DOMContentLoaded', function() {
    // Projects tabs
    const projectTabBtns = document.querySelectorAll('.project-tab-btn');
    const projectTabContents = document.querySelectorAll('.project-tab-content');

    projectTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            projectTabBtns.forEach(b => b.classList.remove('active'));
            projectTabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });

    // Research tabs
    const researchTabBtns = document.querySelectorAll('.research-tab-btn');
    const researchTabContents = document.querySelectorAll('.research-tab-content');

    researchTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            researchTabBtns.forEach(b => b.classList.remove('active'));
            researchTabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });

    // Blog tabs
    const blogTabBtns = document.querySelectorAll('.blog-tab-btn');
    const blogTabContents = document.querySelectorAll('.blog-tab-content');

    blogTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            blogTabBtns.forEach(b => b.classList.remove('active'));
            blogTabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });

    // Form submission for FormSubmit
    const form = document.querySelector('form[action*="formsubmit.co"]');

    if (form) {
        form.addEventListener('submit', function(e) {
            setTimeout(function() {
                alert('Thank you for your message! I will get back to you soon.');
                form.reset();
            }, 100);
        });
    }
});
