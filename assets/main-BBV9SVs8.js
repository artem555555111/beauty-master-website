(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{console.log("Beauty Master Website loaded successfully! 🎉"),b(),E(),x(),S(),A(),T(),C(),k(),F(),O()});function b(){const n=document.getElementById("mobileMenuToggle"),e=document.getElementById("mainMenu"),o=document.getElementById("header");if(n&&e&&(n.addEventListener("click",()=>{const r=n.getAttribute("aria-expanded")==="true";e.classList.toggle("active"),n.classList.toggle("active"),n.setAttribute("aria-expanded",!r),document.body.style.overflow=e.classList.contains("active")?"hidden":""}),e.querySelectorAll("a").forEach(r=>{r.addEventListener("click",()=>{e.classList.remove("active"),n.classList.remove("active"),n.setAttribute("aria-expanded","false"),document.body.style.overflow=""})}),document.addEventListener("click",r=>{!e.contains(r.target)&&!n.contains(r.target)&&(e.classList.remove("active"),n.classList.remove("active"),n.setAttribute("aria-expanded","false"),document.body.style.overflow="")})),o){let r=0;window.addEventListener("scroll",()=>{const t=window.pageYOffset||document.documentElement.scrollTop;t>100?o.classList.add("header--sticky"):o.classList.remove("header--sticky"),t>r&&t>200?o.classList.add("header--hidden"):o.classList.remove("header--hidden"),r=t})}}function E(){const n={threshold:.1,rootMargin:"0px 0px -50px 0px"},e=new IntersectionObserver(t=>{t.forEach(s=>{if(s.isIntersecting){s.target.classList.add("is-visible");const i=s.target.dataset.delay;i&&setTimeout(()=>{s.target.classList.add("animate-delay-complete")},parseInt(i))}})},n);document.querySelectorAll(`
        .animate-fade-up, .animate-slide-left, .animate-slide-right, 
        .animate-scale-in, .animate-bounce, .hover-lift
    `).forEach(t=>{e.observe(t)}),document.querySelectorAll(".counter").forEach(t=>{const s=parseInt(t.dataset.target),a=s/(2e3/16);let l=0;const v=setInterval(()=>{l+=a,l>=s&&(l=s,clearInterval(v)),t.textContent=Math.floor(l)},16)})}function x(){const n=document.getElementById("contactForm");n&&n.addEventListener("submit",L);const e=document.getElementById("courseForm");e&&e.addEventListener("submit",w),q()}function L(n){n.preventDefault();const e=n.target;new FormData(e);const o=e.querySelector('button[type="submit"]');o.disabled=!0,o.innerHTML='<span class="loading-spinner"></span> Отправка...',setTimeout(()=>{g("Спасибо! Мы свяжемся с вами в ближайшее время."),e.reset(),o.disabled=!1,o.innerHTML="Отправить заявку"},1500)}function w(n){n.preventDefault();const e=n.target;new FormData(e);const o=e.querySelector('button[type="submit"]');o.disabled=!0,o.innerHTML='<span class="loading-spinner"></span> Запись...',setTimeout(()=>{p(),g("Спасибо! Мы свяжемся с вами для уточнения деталей курса."),e.reset(),o.disabled=!1,o.innerHTML="Записаться на курс"},1500)}function q(){document.querySelectorAll("form").forEach(e=>{e.querySelectorAll("input[required], textarea[required], select[required]").forEach(r=>{r.addEventListener("blur",m),r.addEventListener("input",u)})})}function m(n){const e=n.target,o=e.value.trim();return u(n),e.hasAttribute("required")&&!o?(d(e,"Это поле обязательно для заполнения"),!1):e.type==="email"&&o&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)?(d(e,"Введите корректный email адрес"),!1):e.type==="tel"&&o&&!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(o)?(d(e,"Введите корректный номер телефона"),!1):!0}function d(n,e){const o=document.createElement("div");o.className="field-error",o.textContent=e,n.classList.add("field-error--has-error"),n.parentNode.appendChild(o)}function u(n){const e=n.target,o=e.parentNode.querySelector(".field-error");o&&(o.remove(),e.classList.remove("field-error--has-error"))}function S(){document.addEventListener("click",n=>{if(n.target.classList.contains("modal__overlay")){const e=n.target.closest(".modal");e&&c(e)}}),document.addEventListener("keydown",n=>{if(n.key==="Escape"){const e=document.querySelector('.modal[aria-hidden="false"]');e&&c(e)}})}function f(n){const e=document.getElementById(n);if(e){e.setAttribute("aria-hidden","false"),e.style.display="flex",document.body.style.overflow="hidden";const o=e.querySelector("button, input, textarea, select, a");o&&o.focus()}}function c(n){n.setAttribute("aria-hidden","true"),n.style.display="none",document.body.style.overflow=""}function I(n){const e=document.getElementById("courseModal"),o=document.getElementById("modalTitle");if(e&&o){const r={basic:'Запись на курс "Основы оформления бровей"',advanced:'Запись на курс "Продвинутые техники"',individual:'Запись на курс "Индивидуальное обучение"'};o.textContent=r[n]||"Запись на курс",f("courseModal")}}function p(){c(document.getElementById("courseModal"))}function g(n){const o=document.getElementById("successModal").querySelector(".success-message");o&&(o.textContent=n),f("successModal")}function M(){c(document.getElementById("successModal"))}function A(){const n=document.querySelectorAll(".faq-item");n.forEach(e=>{const o=e.querySelector(".faq-question"),r=e.querySelector(".faq-answer"),t=e.querySelector(".faq-toggle");o&&r&&t&&o.addEventListener("click",()=>{const s=e.classList.contains("active");n.forEach(i=>{i.classList.remove("active");const a=i.querySelector(".faq-answer"),l=i.querySelector(".faq-toggle");a&&(a.style.maxHeight="0px"),l&&(l.textContent="+")}),s||(e.classList.add("active"),r.style.maxHeight=r.scrollHeight+"px",t.textContent="−")})})}function T(){const n=document.querySelectorAll(".filter-btn"),e=document.querySelectorAll(".portfolio-item");n.length&&e.length&&n.forEach(r=>{r.addEventListener("click",()=>{const t=r.getAttribute("data-filter");n.forEach(s=>s.classList.remove("filter-btn--active")),r.classList.add("filter-btn--active"),e.forEach(s=>{const i=s.getAttribute("data-category");t==="all"||i.includes(t)?(s.style.display="block",s.classList.add("animate-fade-up")):s.style.display="none"})})}),document.querySelectorAll('.portfolio-item[onclick*="openPortfolioModal"]').forEach((r,t)=>{r.addEventListener("click",()=>{y(t)})})}function y(n){const e=document.getElementById("portfolioModal"),o=document.getElementById("modalImage"),r=document.getElementById("modalTitle"),t=document.getElementById("modalDescription"),s=document.getElementById("modalCategory");if(e&&o&&r&&t&&s){const i=[{title:"Коррекция бровей",description:"До и после коррекции. Придание идеальной формы бровям с учетом особенностей лица клиента.",category:"Брови",image:"../images/portfolio/before-after-brows.jpg"},{title:"Ламинирование ресниц",description:"До и после ламинирования. Долговременная завивка и укрепление ресниц на 6-8 недель.",category:"Ресницы",image:"../images/portfolio/before-after-eyelashes.jpg"}];if(i[n]){const a=i[n];o.src=a.image,o.alt=a.title,r.textContent=a.title,t.textContent=a.description,s.textContent=a.category,f("portfolioModal")}}}function B(){c(document.getElementById("portfolioModal"))}function C(){const n=document.querySelector(".hero");n&&window.addEventListener("scroll",()=>{const s=window.pageYOffset*-.5;n.style.transform=`translateY(${s}px)`});const e={threshold:.1,rootMargin:"0px 0px -100px 0px"},o=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&s.target.classList.add("scroll-visible")})},e);document.querySelectorAll(".scroll-animate").forEach(t=>{o.observe(t)})}function k(){if("IntersectionObserver"in window){const n=new IntersectionObserver((o,r)=>{o.forEach(t=>{if(t.isIntersecting){const s=t.target;s.src=s.dataset.src,s.classList.remove("lazy"),n.unobserve(s)}})});document.querySelectorAll("img[data-src]").forEach(o=>n.observe(o))}}function F(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",o=>{var s;o.preventDefault();const r=e.getAttribute("href"),t=document.querySelector(r);if(t){const i=((s=document.querySelector(".header"))==null?void 0:s.offsetHeight)||0,a=t.offsetTop-i-20;window.scrollTo({top:a,behavior:"smooth"})}})})}function O(){const n=document.getElementById("contactForm");if(n){const e=n.querySelector('input[type="tel"]');e&&e.addEventListener("input",r=>{let t=r.target.value.replace(/\D/g,"");t.length>0&&(t.length<=3?t=`+7 (${t}`:t.length<=6?t=`+7 (${t.slice(0,3)}) ${t.slice(3)}`:t.length<=8?t=`+7 (${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6)}`:t=`+7 (${t.slice(0,3)}) ${t.slice(3,6)}-${t.slice(6,8)}-${t.slice(8,10)}`),r.target.value=t}),n.querySelectorAll("input, textarea, select").forEach(r=>{r.addEventListener("blur",m),r.addEventListener("input",u)})}}function D(n,e){let o;return function(...t){const s=()=>{clearTimeout(o),n(...t)};clearTimeout(o),o=setTimeout(s,e)}}function $(n,e){let o;return function(){const r=arguments,t=this;o||(n.apply(t,r),o=!0,setTimeout(()=>o=!1,e))}}window.addEventListener("resize",D(()=>{document.querySelectorAll(".modal").forEach(e=>{if(e.style.display==="flex"){const o=e.querySelector(".modal__content");o&&(o.style.top="50%",o.style.left="50%",o.style.transform="translate(-50%, -50%)")}})},250));window.addEventListener("scroll",$(()=>{const n=window.pageYOffset;document.querySelectorAll(".parallax").forEach(o=>{const r=o.dataset.speed||.5;o.style.transform=`translateY(${n*r}px)`})},16));window.openCourseModal=I;window.closeCourseModal=p;window.closeSuccessModal=M;window.openPortfolioModal=y;window.closePortfolioModal=B;window.toggleFAQ=function(n){const e=n.parentElement,o=e.classList.contains("active");if(document.querySelectorAll(".faq-item").forEach(r=>{r.classList.remove("active");const t=r.querySelector(".faq-answer"),s=r.querySelector(".faq-toggle");t&&(t.style.maxHeight="0px"),s&&(s.textContent="+")}),!o){e.classList.add("active");const r=e.querySelector(".faq-answer"),t=e.querySelector(".faq-toggle");r&&(r.style.maxHeight=r.scrollHeight+"px"),t&&(t.textContent="−")}};const h=document.createElement("style");h.textContent=`
    .loading-spinner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid #ffffff;
        border-radius: 50%;
        border-top-color: transparent;
        animation: spin 1s ease-in-out infinite;
        margin-right: 8px;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    
    .field-error {
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    }
    
    .field-error--has-error {
        border-color: #dc3545 !important;
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        animation: slideInRight 0.3s ease-out;
    }
    
    .notification--success {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
    }
    
    .notification--error {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
    }
    
    .notification--info {
        background-color: #d1ecf1;
        color: #0c5460;
        border: 1px solid #bee5eb;
    }
    
    .notification__content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification__close {
        background: none;
        border: none;
        font-size: 1.25rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .header--sticky {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        animation: slideDown 0.3s ease-out;
    }
    
    .header--hidden {
        transform: translateY(-100%);
        transition: transform 0.3s ease-out;
    }
    
    @keyframes slideDown {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
        }
    }
    
    .scroll-visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .scroll-animate {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .animate-delay-complete {
        animation-play-state: running;
    }
`;document.head.appendChild(h);console.log("Beauty Master Website JavaScript initialized successfully! 🚀");
