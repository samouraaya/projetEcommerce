!function(o){Berserk.behaviors.slick_init={attach:function(e,i){if(void 0===o.fn.slick)return console.log("Waiting for the slick library"),void setTimeout(Berserk.behaviors.slick_init.attach,i.timeout_delay,e,i);function d(e,i){setTimeout(function(){o(e).removeClass("prev-slid-index next-slid-index"),o(i).prev().removeClass("next-slid-index").addClass("prev-slid-index"),o(i).next().removeClass("prev-slid-index").addClass("next-slid-index")},100)}o("document").ready(function(){o(this).find(".slick-slider").each(function(){o(this).slick("setPosition",0)})}),o(e).parent().find(".rotation-slider:not(.rendered)").addClass("rendered").each(function(){var e=o(this);e.slick({dots:!1,arrows:!1,infinite:!1,speed:800,adaptiveHeight:!0,focusOnSelect:!0,centerMode:!0,centerPadding:"75px",initialSlide:1,swipeToSlide:!0,responsive:[{breakpoint:576,settings:{focusOnSelect:!1,centerMode:!1,centerPadding:"0"}}]});var t=o(this).find(".slick-slide"),i=o(this).find(".slick-current");d(t,i),o(this).on("beforeChange",function(e,i,s,n){d(t,i.$slides[n])}),window.addEventListener("load",function(){e.slick("reinit")})}),o(e).parent().find(".rotation-slider-min:not(.rendered)").addClass("rendered").each(function(){o(this).slick({dots:!1,arrows:!1,infinite:!0,speed:800,swipeToSlide:!0,adaptiveHeight:!0})}),o(e).parent().find("div.slider-dark:not(.rendered)").addClass("rendered").each(function(){o(this).slick({dots:!1,arrows:!1,infinite:!0,speed:800,swipeToSlide:!0,adaptiveHeight:!0})}),o(e).parent().find("div.tiled-slider:not(.rendered)").addClass("rendered").each(function(){o(this).slick({dots:!1,arrows:!1,infinite:!0,speed:800,swipeToSlide:!0,adaptiveHeight:!0,swipe:!1,responsive:[{breakpoint:992,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:3}},{breakpoint:576,settings:{slidesToShow:2}}]})}),o(e).parent().find("div.triple-slider:not(.rendered)").addClass("rendered").each(function(){o(this).slick({slidesToShow:3,dots:!1,arrows:!0,infinite:!0,speed:800,swipeToSlide:!0,responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]})}),o(e).parent().find("div.slider-thumbnailed:not(.rendered)").addClass("rendered").each(function(e,i){o(i).addClass("sthumb-"+e);var s=".sthumb-"+e;o(s+" .slider-thumbnailed-for").on("init",function(e,i){o(s).removeClass("slick-loading")}),o(s+" .slider-thumbnailed-for").slick({dots:!1,arrows:!1,adaptiveHeight:!0,asNavFor:s+" .slider-thumbnailed-nav"}),o(s+" .slider-thumbnailed-nav").slick({asNavFor:s+" .slider-thumbnailed-for",focusOnSelect:!0,arrows:!1,swipeToSlide:!0,responsive:[{breakpoint:576,settings:{slidesToShow:5}},{breakpoint:480,settings:{slidesToShow:4}},{breakpoint:375,settings:{slidesToShow:3}}]})}),o(e).parent().find("div.slider-thumbnailed-full:not(.rendered)").addClass("rendered").each(function(e,i){o(i).addClass("forNav-"+e);var s=".forNav-"+e;o(s+" .slider-thumbnailed-full-for").on("init",function(e,i){o(s).removeClass("slick-loading")}),o(s+" .slider-thumbnailed-full-for").slick({dots:!1,arrows:!1,adaptiveHeight:!0,prevArrow:'<button type="button" class="slick-prev">Prev</button>',nextArrow:'<button type="button" class="slick-next">Next</button>',asNavFor:s+" .slider-thumbnailed-full-nav",responsive:[{breakpoint:768,settings:{arrows:!1}}]}),o(s+" .slider-thumbnailed-full-nav").slick({asNavFor:s+" .slider-thumbnailed-full-for",focusOnSelect:!0,arrows:!1,swipeToSlide:!0,responsive:[{breakpoint:768,settings:{slidesToShow:5}},{breakpoint:480,settings:{slidesToShow:4}},{breakpoint:375,settings:{slidesToShow:3}}]})}),o(e).parent().find(".default-slider:not(.rendered)").addClass("rendered").each(function(){o(this).slick({dots:!1,arrows:!1,infinite:!0,speed:800,swipeToSlide:!0,adaptiveHeight:!0})}),o(e).parent().find(".post-angle-slider:not(.rendered)").addClass("rendered").each(function(){o(this).slick({dots:!1,arrows:!1,infinite:!0,speed:800,swipeToSlide:!0,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:1e3,pauseOnHover:!0})}),o(e).parent().find("div.landscape-slider:not(.rendered)").addClass("rendered").each(function(e,i){o(i).addClass("landscape-"+e);var s=".landscape-"+e;o(s+" .landscape-slider-for").on("init",function(e,i){o(s).removeClass("slick-loading")}),o(s+" .landscape-slider-for").slick({dots:!1,arrows:!1,adaptiveHeight:!0,asNavFor:s+" .landscape-slider-nav"}),o(s+" .landscape-slider-nav").slick({asNavFor:s+" .landscape-slider-for",focusOnSelect:!0,arrows:!1})}),o(e).parent().find(".brk-brand-slider:not(.rendered)").addClass("rendered").each(function(e,i){o(this).on("init beforeChange afterChange",function(e,i){var s=0;i.$slideTrack.children().each(function(){o(this).find("img").height()>s&&(s=o(this).height())}),i.$slideTrack.children().each(function(){o(this).css("min-height",s)})}),o(this).slick({slidesToShow:6,slidesToScroll:1,arrows:!1,draggable:!0,swipeToSlide:!0,infinite:!0,autoplay:!0,autoplaySpeed:3e3,accessibility:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:4}},{breakpoint:600,settings:{slidesToShow:3}},{breakpoint:480,settings:{slidesToShow:2}}]})}),o(e).parent().find(".brk-slider-team:not(.rendered)").addClass("rendered").each(function(){o(this).slick({slidesToShow:8,slidesToScroll:1,arrows:!1,draggable:!0,swipeToSlide:!0,infinite:!0,autoplay:!0,autoplaySpeed:5e3,accessibility:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:5}},{breakpoint:600,settings:{slidesToShow:3}},{breakpoint:480,settings:{slidesToShow:2}}]});var i=o(this).find(".brk-img-zoom");i.each(function(e){o(this).on("mouseenter",function(){var e=o(this);i.each(function(){o(this).addClass("brk-img-zoom_not-hovered"),e.removeClass("brk-img-zoom_not-hovered")})}),o(this).on("mouseleave",function(){i.each(function(){o(this).removeClass("brk-img-zoom_not-hovered")})})})}),o(e).parent().find(".brk-services-slider__items:not(.rendered)").addClass("rendered").each(function(){o(this).slick({slidesToShow:3,slidesToScroll:1,swipeToSlide:!0,infinite:!0,accessibility:!1,autoplay:!0,autoplaySpeed:3e3,arrows:!1,dots:!0,draggable:!0,pauseOnHover:!0,responsive:[{breakpoint:1230,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]})}),o(e).parent().find(".brk-slider-shop:not(.rendered)").addClass("rendered").each(function(){var e=o(this).find(".brk-slider__nav-prev"),i=o(this).find(".brk-slider__nav-next"),s=o(this).find(".brk-slider__items");e.click(function(){s.slick("slickPrev")}),i.click(function(){s.slick("slickNext")}),s.slick({accessibility:!1,arrows:!1,dots:!1,slidesToShow:3,slidesToScroll:2,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]})}),o(e).parent().find(".brk-slider-cards:not(.rendered)").addClass("rendered").each(function(){var e=o(this).find(".brk-slider__control-next"),i=o(this).find(".brk-slider__control-prev"),s=o(this).find(".brk-slider__control");o(this).find(".brk-slider__items").slick({slidesToShow:4,infinite:!1,swipeToSlide:!0,arrow:!1,autoplay:!0,autoplaySpeed:3500,prevArrow:i,nextArrow:e,appendDots:s,dots:!0,dotsClass:"brk-slider__dots",responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]})}),o(document).ready(function(){setTimeout(function(){o(e).parent().find(".dots-base-skin:not(.dots-rendered), .dots-landscape-skin:not(.dots-rendered)").addClass("dots-rendered").each(function(e,i){o(i).find(".slick-dots").wrap('<div class="dots-wrap"></div>');var s=o(i).find(".dots-wrap");s.prepend('<button class="l-prev" type="button"><i class="fas fa-angle-left"></i></button>'),s.append('<button class="l-next" type="button"><i class="fas fa-angle-right"></i></button>');var n=s.find(".l-prev"),t=s.find(".l-next");n.on("click",function(){o(i).slick("slickPrev")}),t.on("click",function(){o(i).slick("slickNext")})})},100)})}}}(jQuery);