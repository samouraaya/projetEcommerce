!function(e){Berserk.behaviors.shop_components_flip={attach:function(o,r){if(e(".scrollbar-inner").length){if("function"!=typeof e.fn.scrollbar)return console.log("Waiting for the scrollbar library"),void setTimeout(Berserk.behaviors.shop_components_flip.attach,r.timeout_delay,o,r);e(".scrollbar-inner:not(.rendered)",o).each(function(){e(this).scrollbar()})}}}}(jQuery);


