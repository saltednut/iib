(function ($) {
    Drupal.behaviors.iib = {
      attach : function (context, settings) {
        $('#toolbar #iib-toolbar-link', context).click(function() {
          if ($(this).hasClass('active')) {
            // Toggle to hidden/inactive
            $(this).removeClass('active');
            $('.page-iib', context).addClass('iib-hidden');
          }
          else {
            $(this).addClass('active');
            $('.page-iib', context).removeClass('iib-hidden');
          }

          return false;
        });
      }
    };
})(jQuery);
