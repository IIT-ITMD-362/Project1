// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

$(document).ready(function () {
            $("#submit").click(function () {
                alert("Thank you for signing up!");
            });
        });