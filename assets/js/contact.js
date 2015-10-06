(function($){

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		$('#contact-form').submit(function(e) {
			e.preventDefault();
		    $('#contact-form input[type="text"], #contact-form form textarea').removeClass('contact-error');
				$('.btn-contact').attr('disabled', 'disabled');
		    var postdata = $('#contact-form').serialize();
		    $.ajax({
		        type: 'POST',
		        url: 'http://actmob.ngrok.com/api/send/def', //http://actmob.ngrok.com/api/send/def |
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
		                    $('#contact .row .form-wrapper').append('<div class="col-sm-6 col-md-offset-1 font-lang"><h3>預約已經發送，謝謝您！</h3></div>');
		                });
		            }
		        }
		    });
		});

	});

})(jQuery);
