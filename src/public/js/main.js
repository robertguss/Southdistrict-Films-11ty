$(function () {
  // Hide Commercial Films
  $('.commercial').hide();
  $('.commercial-filter').on('click', function () {
    $('.commercial').show();
    $('.documentary').hide();
    $('.branded').hide();
  });

  // Hide Documentary Films
  $('.documentary-filter').on('click', function () {
    $('.documentary').show();
    $('.branded').hide();
    $('.commercial').hide();
  });

  // Hide Branded Content Films
  $('.branded').hide();
  $('.branded-filter').on('click', function () {
    $('.branded').show();
    $('.documentary').hide();
    $('.commercial').hide();
  });

  // $('#video-gallery').lightGallery({
  //   selector: 'a'
  // });
});
