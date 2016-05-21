$('#buyNowModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data('product'); // Extract info from data-* attributes
  var productType = button.data('bottle');
  var price = button.data('price');

  $('.modal-inner-content').css('display', 'initial');
  $('.giphy-embed').css('display', 'none');

  $(this).find('.modal-sub-title').text('Add To Cart: ' + recipient);
  $(this).find('.price-input')[0].value = price;
  $('.cap-color-container').css('display', 'initial');

  if (!productType) {
    $('.cap-color-container').css('display', 'none');
  }
});

$('#icheckout-quantity').click(function(e) {
  console.log(e);
  console.log(this);

  $('.price-input')[0].value = (($('.price-input').val() / ($(this).val() - 1)) * $(this).val());
});

$('.checkout').click(function(e) {
  $('.modal-inner-content').css('display', 'none');
  $('.giphy-embed').css('display', 'initial');
});
