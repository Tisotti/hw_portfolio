$(function () {
  var mixer = mixitup('.work__gallery');

  $('.work__link').on('click', function (event) {
    event.preventDefault();
    var filterValue = $(this).attr('data-filter');
    mixer.filter(filterValue);
  });

});

