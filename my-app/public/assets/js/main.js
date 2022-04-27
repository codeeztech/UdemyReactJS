(function () {
    window.onload = function () { window.setTimeout(fadeout, 500); }
    function fadeout() { document.querySelector('.preloader').style.opacity = '0'; document.querySelector('.preloader').style.display = 'none'; }
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area"); var sticky = header_navbar.offsetTop; if (window.pageYOffset > sticky) { header_navbar.classList.add("sticky"); } else { header_navbar.classList.remove("sticky"); }
        var backToTo = document.querySelector(".scroll-top"); if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) { backToTo.style.display = "flex"; } else { backToTo.style.display = "none"; }
    }; var pageLink = document.querySelectorAll('.page-scroll'); pageLink.forEach(elem => { elem.addEventListener('click', e => { e.preventDefault(); document.querySelector(elem.getAttribute('href')).scrollIntoView({ behavior: 'smooth', offsetTop: 1 - 60, }); }); }); let navbarToggler = document.querySelector(".navbar-toggler"); var navbarCollapse = document.querySelector(".navbar-collapse"); document.querySelectorAll(".page-scroll").forEach(e => e.addEventListener("click", () => { navbarToggler.classList.remove("active"); navbarCollapse.classList.remove('show') })); navbarToggler.addEventListener('click', function () { navbarToggler.classList.toggle("active"); })
})();