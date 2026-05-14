

let navLinks = document.querySelectorAll(".navbar ul li a");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(item => item.classList.remove("active"));
      this.classList.add("active");
    });
  });



let benefit = new Swiper(".career" , {
            
            loop : true,
            spaceBetween: 10,
            centeredSlides: true,
            speed : 1000,
            navigation:{
                
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
            },
            
            breakpoints:{
                0:{
                    slidesPerView:1.2,
                },
                480:{
                    slidesPerView :1.5,
                },
                768:{
                    slidesPerView:2,    
                },
                1024:{
                    slidesPerView:3,
                },
                1400:{
                    slidesPerView:4,
                },
            },
        });
let gallery = new Swiper(".lpswipe" , {
            slidesPerView: 'auto',
            loop : true,
            spaceBetween: 10,
            centeredSlides: true,
            speed : 1000,
            pagination:{
                el: "swiper-pagination",
                clickable:true,
            },
            navigation:{
                
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
            },
            
            breakpoints:{
                0:{
                    slidesPerView:1,
                },
                480:{
                    slidesPerView :1,
                },
                768:{
                    slidesPerView:2,    
                },
                1024:{
                    slidesPerView:3,
                },
                1400:{
                    slidesPerView:3.8,
                },
            }
        });
let Links = document.querySelectorAll(".links ul li a");

  Links.forEach(link => {
    link.addEventListener("click", function () {
      Links.forEach(item => item.classList.remove("active"));
      this.classList.add("active");
    });
  });
