

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets

    // Get the modal
    var modal = document.getElementById("myModal");
     
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img1 = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText1 = document.getElementById("caption");

    img1.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
		  $(this).parent().fadeOut(400);
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        $('.modal').fadeOut(400);
      }
    }


    /* Contact Form
   * ------------------------------------------------------ */
   var ssContactForm1 = function() {   	

    /* local validation */   	
   $('#contactForm').validate({

     /* submit via ajax */
     submitHandler: function(form) {				
       var sLoader = $('#submit-loader');			

       $.ajax({   	
           type: "POST",
           url: "inc/sendEmail.php",
           data: $(form).serialize(),

           beforeSend: function() { 
             sLoader.fadeIn(); 
           },
           success: function(msg) {
               // Message was sent
               if (msg == 'OK') {
                 sLoader.fadeOut(); 
                  $('#message-warning').hide();
                  $('#contactForm').fadeOut();
                  $('#message-success').fadeIn();   
               }
               // There was an error
               else {
                 sLoader.fadeOut(); 
                  $('#message-warning').html(msg);
                 $('#message-warning').fadeIn();
               }
           },
           error: function() {
             sLoader.fadeOut(); 
             $('#message-warning').html("Something went wrong. Please try again.");
              $('#message-warning').fadeIn();
           }
         });    		
       }

   });
  };	

  (function ssInit() {	
		ssContactForm1();
  }

)()

});