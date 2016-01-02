(function($){

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		$('#contact-form').submit(function(e) {
			e.preventDefault();
		    if($('#contact-phone').val().trim() === '') {
					$('#contact-phone').addClass('contact-error');
					return;
				}

				if($('#cname').val().trim() === '') {
					$('#cname').addClass('contact-error');
					return;
				}

				$('#contact-form input[type="text"], #contact-form form textarea').removeClass('contact-error');
				$('.btn-contact').attr('disabled', 'disabled');

		    var postdata = $('#contact-form').serialize();
		    $.ajax({
		        type: 'POST',
		        url: 'http://actmob-api.heyookapp.com/api/send/adc9bc6', //http://actmob.ngrok.com/api/send/def | https://actmob-api.heyookapp.com/api/send/adc9bc6
		        data: postdata,
		        dataType: 'json',
	          crossDomain:true,
		        success: function(json) {
								$('.btn-contact').attr('disabled', null);

		            if(json.emailMessage !== '') {
		                $('#contact-form .contact-email').addClass('contact-error');
		            }
		            if(json.phoneMessage !== '') {
		                $('#contact-form .contact-subject').addClass('contact-error');
		            }
		            if(json.messageMessage !== '') {
		                $('#contact-form textarea').addClass('contact-error');
		            }
		            if(json.success) {
		                $('#contact-form').fadeOut('fast', function() {
		                    $('#contact .row .form-wrapper').append('<div class="font-lang text-center"><h3>預約已經發送，謝謝您！</h3></div>');
		                });
		            }
		        }
		    });
		});

	});

})(jQuery);
