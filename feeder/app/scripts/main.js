$(window).load(function(){
    var $grid = $('.portfolio-grid').isotope({
      itemSelector: '.portfolio-item'
    });
    jQuery('.port-filter').click(function(e){
        e.preventDefault();
        jQuery('.port-filter').parent().removeClass('active');
        jQuery(this).parent().addClass('active');
        var category = jQuery(this).attr('data-category');
        jQuery('.portfolio-item').removeClass('active');
        $grid.isotope({ filter: category });
        jQuery(category).addClass('active');
    });
    jQuery('a[data-category=".feat-item"]').click();

    jQuery('.scroll-down').click(function(){
        $("html, body").animate({ scrollTop: $('#section-1').offset().top }, 600);
    });

    jQuery('.menu-toggle').click(function(){
        $("#main-nav").slideToggle();
    });
});