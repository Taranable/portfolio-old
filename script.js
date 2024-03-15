
document.addEventListener('DOMContentLoaded', function () {

    var downloadBtn = document.querySelector('.downloadcv');

    downloadBtn.addEventListener('click', function () {

        window.location.href = 'https://drive.google.com/file/d/1f-Mj_AsIH3us0pl34SM6Hn_uQJg-pRnr/view?usp=drive_link';
    });
});

$(document).ready(function(){
    $('.slider').slick({
         arrows:false,
         dots:true,
         appendDots: '.slider-dots',
         dotsClass:'dots'

    });

    let hamberger = document.querySelector('.hamberger');
    let cross = document.querySelector('.cross-img');
    let mobileNav = document.querySelector('.mobile-nav');

    hamberger.addEventListener('click',function(){
        mobileNav.classList.add('open');
        
    });
    
    cross.addEventListener('click',function(){
        mobileNav.classList.remove('open');
        
    });
});

