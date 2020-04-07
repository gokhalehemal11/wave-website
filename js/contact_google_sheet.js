var $form = $('form#contactForm'),
    url = 'https://script.google.com/macros/s/AKfycbzp7J1-Y-0Ds9C7y1cy6PLrkhmjBvz-JZ--ZvHtiSx8NMQdwdZq/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "POST",
    dataType: "json",
    data: $form.serializeArray()
  }).success(
    alert("Thanks! We will soon get back to you")
  );
})
