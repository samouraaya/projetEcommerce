!function(h){Berserk.behaviors.swiper_slider_init={attach:function(e,i){if("undefined"==typeof Swiper)return console.log("Waiting for the swiper library"),void setTimeout(Berserk.behaviors.swiper_slider_init.attach,i.timeout_delay,e,i);h(e).parent().find(".filmstrip-slider:not(.rendered)").addClass("rendered").each(function(){var e=h(this),i=e.find(".filmstrip-slider-container"),n=e.find(".brk-scrollbar"),t=n.find(".brk-scrollbar-track"),a=n.find(".brk-scrollbar-drag"),s=e.data("perwiew"),l=e.data("spacebetween");switch(s=s||"auto",!0){case 0<=e.attr("class").indexOf("timeline--strict"):case 0<=e.attr("class").indexOf("timeline--masonry"):var r="",d=0;void 0!==l&&""!==l||(l=76);var o=new Swiper(i,{init:!1,freeMode:!1,slidesPerView:s,resistance:!0,spaceBetween:l,resistanceRatio:0,dynamicBullets:!1,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0,renderBullet:function(e,i){return d++,r=h(this.slides[e]).data("caption")?"<strong>"+h(this.slides[e]).data("caption")+"</strong>":"",'<span class="'+i+'" style="width: '+100/this.slides.length+'%;">'+r+"</span>"}},on:{init:function(){w(this.slides)},setTranslate:function(){w(this.slides)},slideChangeTransitionEnd:function(){w(this.slides)},slideChange:function(){u()},resize:function(){p(this)}}}),c=h('<span class="swiper-progress__bar"></span>');function p(e){e.$el.find(".swiper-pagination > .swiper-pagination-bullet").each(function(){h(this).width(100/d+"%")})}function u(){o.pagination.bullets.each(function(e){h(this).hasClass("swiper-pagination-bullet-active")&&c.css("transform","translate3d("+(h(this).width()/2+h(this).offset().left-h(window).width()/2)+"px, 0px, 0px)")})}function w(e){e.each(function(){0<=h(this).offset().left&&0<=h(window).width()-(h(this).offset().left+h(this).width())?h(this).find(".timeline__item").addClass("active"):h(this).find(".timeline__item").removeClass("active")})}setTimeout(function(){o.init(),c.appendTo(o.pagination.$el)},200),setTimeout(function(){p(o)},200),setTimeout(function(){u()},200),h(window).on("resize",function(){p(o)});break;case 0<=e.attr("class").indexOf("slider--scroll"):void 0!==l&&""!==l||(l=0);var f=new Swiper(i,{init:!1,freeMode:!0,slidesPerView:s,spaceBetween:l,resistance:!1,resistanceRatio:0,scrollbar:{el:n,draggable:!0,snapOnRelease:!1,dragSize:8,dragClass:"brk-scrollbar-drag"},on:{setTranslate:function(){var e=this.progress;a.css("transition-duration");t.css({width:100*e+"%"})}}});setTimeout(function(){f.init()},2e3)}}),h(e).parent().find(".staff-slider:not(.rendered)").addClass("rendered").each(function(){var e=h(this),i=e.children(".staff-slider-container"),n=e.children(".dots-base-staff-skin"),t=e.data("perwiew"),a=n.children(".pagination"),s=n.children(".button-next"),l=n.children(".button-prev");t=t||"auto";var r=new Swiper(i,{init:!1,slidesPerView:t,spaceBetween:30,loop:!0,loopFillGroupWithBlank:!0,centeredSlides:!0,slidesPerGroup:3,speed:700,pagination:{el:a,clickable:!0,renderBullet:function(e,i){return'<li class="'+i+'"></li>'}},navigation:{nextEl:s,prevEl:l},breakpoints:{480:{slidesPerGroup:1,spaceBetween:10,slidesPerView:"auto"},992:{slidesPerGroup:1,slidesPerView:"auto"},1680:{slidesPerView:"auto"}}});window.addEventListener("load",function(e){r.init()})}),h(e).parent().find(".colored-slider:not(.rendered)").addClass("rendered").each(function(){var i,e=h(this);i=new Swiper(e,{init:!1,slidesPerView:3,spaceBetween:0,loop:!0,loopedSlides:4,speed:1e3,centeredSlides:!0,loopFillGroupWithBlank:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"},breakpoints:{991:{slidesPerView:2},767:{slidesPerView:1}}}),window.addEventListener("load",function(e){i.init()})}),h(e).parent().find(".dash-one-slider:not(.rendered)").addClass("rendered").each(function(){var e,i=h(this);e=new Swiper(i,{init:!1,slidesPerView:1,spaceBetween:0,loop:!0,speed:800,autoHeight:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"}}),h(document).ready(function(){e.init()})}),h(e).parent().find(".brk-testimonials-dash-two:not(.rendered)").addClass("rendered").each(function(){var e=h(this),i=e.children(".dash-two-slider"),a=e.children(".dash-two-pagination"),s=new Swiper(i,{init:!1,spaceBetween:0,speed:1e3,initialSlide:2,autoHeight:!0,pagination:{el:a,bulletClass:"dash-two-pagination-bullet",bulletActiveClass:"dash-two-pagination-bullet-active",clickable:!0,dynamicBullets:!0}});setTimeout(function(){s.init();var e=s.slides.children(".brk-testimonials-dash-two__text-reviews"),n=a.children(".dash-two-pagination-bullet"),t=0;e.each(function(){var e=h(this).data("img"),i=n[t];h(i).css("backgroundImage","url("+e+")"),t++})},300)}),h(e).parent().find(".dash-three-slider:not(.rendered)").addClass("rendered").each(function(){var e;e=h(this).hasClass("dash-three-slider_single")?new Swiper(h(this),{init:!1,slidesPerView:1,spaceBetween:10,centeredSlides:!0,loopedSlides:2,loop:!0,speed:800,autoplay:{delay:8e3},pagination:{el:".swiper-pagination-base",dynamicBullets:!0,clickable:!0},breakpoints:{992:{slidesPerView:1,loopedSlides:2,spaceBetween:0}}}):new Swiper(h(this),{init:!1,slidesPerView:3,spaceBetween:20,centeredSlides:!0,loopedSlides:5,loop:!0,speed:800,pagination:{el:".swiper-pagination-base",dynamicBullets:!0,clickable:!0},breakpoints:{992:{slidesPerView:1,loopedSlides:2,spaceBetween:0}}}),setTimeout(function(){e.init()},300)}),h(e).parent().find(".brk-testimonials-dash-four:not(.rendered)").addClass("rendered").each(function(){var e=h(this),i=e.children(".dash-four-slider"),n=e.children(".dash-four-pagination"),t=new Swiper(i,{spaceBetween:0,speed:800,pagination:{el:n,bulletClass:"dash-four-pagination-bullet",bulletActiveClass:"dash-four-pagination-bullet-active",clickable:!0}}).slides.children(".brk-testimonials-dash-four__item"),a=n.children(".dash-four-pagination-bullet"),s=0;t.each(function(){var e=h(this).data("img"),i=a[s];h(i).css("backgroundImage","url("+e+")"),s++})}),h(e).parent().find(".dash-five-slider:not(.rendered)").addClass("rendered").each(function(){var e=h(this);new Swiper(e,{slidesPerView:3,spaceBetween:30,loop:!0,loopedSlides:4,centeredSlides:!0,speed:1e3,pagination:{el:".pagination",clickable:!0,renderBullet:function(e,i){return'<li class="'+i+'"></li>'}},navigation:{nextEl:".button-next",prevEl:".button-prev"},breakpoints:{768:{slidesPerView:1,loopedSlides:2},992:{slidesPerView:2,loopedSlides:3}}})}),h(e).parent().find(".dash-six-slider:not(.rendered)").addClass("rendered").each(function(){var e=h(this);new Swiper(e,{slidesPerView:3,spaceBetween:0,speed:800,navigation:{nextEl:".dash-six-arrow-next",prevEl:".dash-six-arrow-prev"},breakpoints:{768:{slidesPerView:1},992:{slidesPerView:2}}})}),h(e).parent().find(".brk-testimonials-double__slider:not(.rendered)").addClass("rendered").each(function(){var e=h(this),i=e.find(".double-slider"),n=e.find(".double-pagination"),t=new Swiper(i,{init:!1,slidesPerView:1,spaceBetween:0,speed:800,autoplay:{delay:1e4},pagination:{el:n,clickable:!0,bulletClass:"double-pagination-bullet",bulletActiveClass:"double-pagination-bullet-active"}});window.addEventListener("load",function(){t.init()})}),h(e).parent().find(".brk-testimonials-layered-horizontal__container:not(.rendered)").addClass("rendered").each(function(){var e=h(this),i=e.children(".layered-horizontal-slider"),n=e.children(".button-prev"),t=e.children(".button-next"),a=e.children(".overlay-horizontal"),s=new Swiper(i,{init:!1,effect:"cube",spaceBetween:0,loop:!0,loopedSlides:2,autoHeight:!0,speed:900,cubeEffect:{shadow:!1,slideShadows:!1,shadowOffset:20,shadowScale:.94},navigation:{nextEl:t,prevEl:n}});window.addEventListener("load",function(){s.init(),s.on("touchStart",function(){a.hasClass("deactive")?a.removeClass("deactive"):(a.addClass("deactive"),setTimeout(function(){a.removeClass("deactive")},500))})}),h(n).on("click",function(){a.hasClass("deactive")?a.removeClass("deactive"):(a.addClass("deactive"),setTimeout(function(){a.removeClass("deactive")},500))}),h(t).on("click",function(){a.hasClass("deactive")?a.removeClass("deactive"):(a.addClass("deactive"),setTimeout(function(){a.removeClass("deactive")},500))})}),h(e).parent().find(".brk-testimonials-layered-vertical__container:not(.rendered)").addClass("rendered").each(function(){var e=h(this),i=e.children(".layered-vertical-slider"),n=e.children(".button-prev"),t=e.children(".button-next"),a=e.children(".overlay-vertical"),s=new Swiper(i,{init:!1,effect:"flip",direction:"vertical",spaceBetween:0,autoHeight:!0,loop:!0,speed:900,navigation:{nextEl:t,prevEl:n}});window.addEventListener("load",function(){s.init(),s.on("touchStart",function(){a.hasClass("deactive")?a.removeClass("deactive"):(a.addClass("deactive"),setTimeout(function(){a.removeClass("deactive")},400))})}),h(n).on("click",function(){a.hasClass("deactive")?a.removeClass("deactive"):(a.addClass("deactive"),setTimeout(function(){a.removeClass("deactive")},400))}),h(t).on("click",function(){a.hasClass("deactive")?a.removeClass("deactive"):(a.addClass("deactive"),setTimeout(function(){a.removeClass("deactive")},400))})}),h(e).parent().find(".brk-testimonials-circle:not(.rendered)").addClass("rendered").each(function(){var e=h(this),i=e.children(".circle-slider"),a=e.children(".circle-pagination"),s=new Swiper(i,{init:!1,spaceBetween:0,speed:800,parallax:!0,pagination:{el:a,bulletClass:"circle-pagination-bullet",bulletActiveClass:"circle-pagination-bullet-active",clickable:!0}});window.addEventListener("load",function(){s.init();var e=s.slides.children(".brk-testimonials-circle__item"),n=a.children(".circle-pagination-bullet"),t=0;e.each(function(){var e=h(this).data("img"),i=n[t];h(i).css("backgroundImage","url("+e+")"),t++})})}),h(e).parent().find(".brk-sc-row-three:not(.rendered)").addClass("rendered").each(function(){var e=h(this),i=e.find(".swiper-container"),n=e.find(".brk-sc-row-three__pagination");new Swiper(i,{slidesPerView:1,spaceBetween:0,speed:800,autoplay:{delay:5e3},pagination:{el:n,clickable:!0,renderBullet:function(e,i){return'<span class="'+i+'">0'+(e+1)+"</span>"}}})}),h(e).parent().find(".brk-sc-row-four:not(.rendered)").addClass("rendered").each(function(){var e=h(this),i=e.find(".swiper-container"),n=e.find(".brk-sc-row-four-pagination");new Swiper(i,{slidesPerView:1,spaceBetween:0,speed:1200,autoHeight:!0,autoplay:{delay:5e3},pagination:{el:n,clickable:!0,bulletClass:"brk-sc-row-four-pagination-bullet",bulletActiveClass:"brk-sc-row-four-pagination-bullet-active"}})}),h(e).parent().find(".brk-swiper-default:not(.rendered)").addClass("rendered").each(function(){var e=h(this),i=e.find(".swiper-container"),n=e.find(".brk-swiper-default-nav-next"),t=e.find(".brk-swiper-default-nav-prev"),a=e.find(".brk-swiper-default-pagination"),s=e.data("delay"),l={};l=s?{init:!1,slidesPerView:1,spaceBetween:0,speed:1e3,loop:!0,autoHeight:!0,autoplay:{delay:s},navigation:{nextEl:n,prevEl:t},pagination:{el:a,clickable:!0,bulletClass:"brk-swiper-default-pagination-bullet",bulletActiveClass:"brk-swiper-default-pagination-bullet-active"}}:{init:!1,slidesPerView:1,spaceBetween:0,speed:1e3,loop:!0,autoHeight:!0,navigation:{nextEl:n,prevEl:t},pagination:{el:a,clickable:!0,bulletClass:"brk-swiper-default-pagination-bullet",bulletActiveClass:"brk-swiper-default-pagination-bullet-active"}};var r=new Swiper(i,l);window.addEventListener("load",function(){r.init()})})}}}(jQuery);