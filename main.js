 
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

 
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
 
    navLinks.classList.toggle("active");
    
 
    if(navLinks.classList.contains("active")){
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    } else {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    }
});

 
const navItems = document.querySelectorAll(".nav-links li a");
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    });
});










document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("newsEmail");
    const msg = document.getElementById("validationMsg");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailValue === "") {
            msg.textContent = "Email address is required!";
            msg.className = "validation-msg error";
            form.classList.add("error-border");
        } else if (!emailPattern.test(emailValue)) {
            msg.textContent = "Please enter a valid email address.";
            msg.className = "validation-msg error";
            form.classList.add("error-border");
        } else {
            msg.textContent = "Successfully Subscribed!";
            msg.className = "validation-msg success";
            form.classList.remove("error-border");
            emailInput.value = "";
            
            setTimeout(() => {
                msg.textContent = "";
                msg.className = "validation-msg";
                window.location.href = '404.html';
            }, 400);
        }
    });

    emailInput.addEventListener("input", () => {
        msg.textContent = "";
        form.classList.remove("error-border");
    });
});






document.addEventListener("DOMContentLoaded", () => {
    let progress = 0;
    const progressBar = document.getElementById('loader-progress');
    const percentageText = document.getElementById('loader-percentage');
    const preloader = document.getElementById('preloader');

    
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5; 
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            progressBar.style.width = "100%";
            percentageText.innerText = "100%";
            
            
            setTimeout(() => {
                if (typeof gsap !== 'undefined') {
                    gsap.to(preloader, {
                        opacity: 0,
                        y: -50,
                        duration: 0.8,
                        ease: "power3.inOut",
                        onComplete: () => {
                            preloader.style.display = "none";
                        }
                    });
                } else {
                    
                    preloader.style.transition = "opacity 0.8s ease";
                    preloader.style.opacity = "0";
                    setTimeout(() => preloader.style.display = "none", 800);
                }
            }, 300); 
            
        } else {
            progressBar.style.width = `${progress}%`;
            percentageText.innerText = `${progress}%`;
        }
    }, 150); 
});