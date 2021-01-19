

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets


  /*-------------------------------------------------------------------------------
    MODAL IMAGE PORTFOLIO
  -------------------------------------------------------------------------------*/

    // Get the modal
    var modal = document.getElementById("myModal");
    var modal2 = document.getElementById("myModal2");
     
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img1 = document.getElementById("myImg");
    var img2 = document.getElementById("myImg2");
    var img3 = document.getElementById("myImg3");
    var img4 = document.getElementById("myImg4");
    var img5 = document.getElementById("myImg5");
    var img6 = document.getElementById("myImg6");

    var modalImg = document.getElementById("img01");
    var modalImg2 = document.getElementById("img02");
    var modalImg3 = document.getElementById("img03");
    var modalImg4 = document.getElementById("img04");
    var modalImg5 = document.getElementById("img05");
    var modalImg6 = document.getElementById("img06");

    //var captionText1 = document.getElementById("caption");

    img1.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      //captionText1.innerHTML = this.alt;
    }

    img2.onclick = function(){
      modal2.style.display = "block";
      modalImg2.src = this.src;
      //captionText1.innerHTML = this.alt;
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementById("closeBtn");
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
		  $(this).parent().fadeOut(400);
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == '') {
        $('.modal').fadeOut(400);
      }
    }

  /*-------------------------------------------------------------------------------
    AJAX CONTACT FORM
  -------------------------------------------------------------------------------*/

  $(function(){
    // Get the form.
    var form = $('#ajax-contact');
    
    // Get the messages div.
    var formMessages = $('#form-messages');
    
    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
      // Stop the browser from submitting the form.
      e.preventDefault();
      
      // Serialize the form data.
      var formData = $(form).serialize();
      
      // Submit the form using AJAX.
      $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
      })
      
      .done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');
        
        // Set the message text.
        $(formMessages).text(response);
        
        // Clear the form.
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
      })
      
      .fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');
        
        // Set the message text.
        if (data.responseText !== '') {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
      });
    
    });
  });

  /*-------------------------------------------------------------------------------
    Light Gallery
  -------------------------------------------------------------------------------*/


  lightGallery(document.getElementById('lightgallery'));


});