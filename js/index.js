 $( document ).ready(function() {
   
   $('.tutorial-start').on('click', function() {
     $('.tutorial').slideToggle('fast');
   });
   
   $('.service').on('click', function() {
     $(this).next('.nested').slideToggle('fast');
     $(this).prevAll('.nested').slideUp('fast');
   });
   $('.close').on('click', function() {
     $(this).parents('.nested').slideUp('fast');
   });
  $('.codebox-exp').on('click', function() {
    $('.color-options').slideToggle('fast'); 
    if (Modernizr.inputtypes.color === false) {
      $('.nocolor-explain').show();
    }
  });
  
 $('form').on('submit', function(e) {
   e.preventDefault();
   var image = $('.image-url').val().trim();
   if (image.indexOf('http') == -1 || image.indexOf('.') == -1) {
      $('.img-error').show(); 
    }
   else {
     $('.img-error').hide();  
   }
   
   var blog = $('.blog-url').val().trim();
   if (blog.indexOf('http') == -1 || blog.indexOf('.') == -1) {
       $('.blog-error').show();    
     }
   else {
     $('.blog-error').hide();
   }
   
   var rawname = $('.blog-name').val().trim();
   var spacename = rawname.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+\']/g, '');
   var dashname = spacename.replace(/\s+/g, '-').toLowerCase();
   
   var width = $('.img-width').val().trim();
   if (width < 1) {
     $('.width-error').show();
     
   }
   else {
     $('.width-error').hide();
    
   }

   var height = $('.img-height').val().trim();
   if (height < 1) {
     $('.height-error').show();
   }
   else {
     $('.height-error').hide();
   }
 
   var color = $('.bordercolor').val().trim();
   var bgcolor = $('.bgcolor').val().trim();
   var textcolor = $('.textcolor').val().trim();
   var boxheight = $('.box-height').val().trim();
   var codeheight;
   if (boxheight === ('')) {
     codeheight = height;
}
   else {
     codeheight = boxheight;
   }
   var target;
   if ($('#yes').is(':checked')) {
    target = (' target="_blank"');
   }
   else {
     target = ('');
   }
   
  
var coderesult = ('<div class="grab-button" style="width: ' + width + 'px; margin: 0 auto;">\n<img src="'+image+'" alt="grab button for '+ rawname +'" width="'+width+'" height="'+height+'">\n<div style="margin: 0;\npadding: 0;\nborder: 1px solid '+color+';\nbackground-color: '+bgcolor+';\ncolor: '+textcolor+';\nwidth: '+width+'px;\nheight: '+codeheight+'px;\noverflow: scroll;">\n&lt;div class="'+dashname+'-button" style="width: '+width+'px; margin: 0 auto;">\n&lt;a href="'+blog+'" rel="nofollow"' +target +'>\n&lt;img src="'+image+'" alt="'+rawname+'" width="'+width+'" height="'+height+'" />\n&lt;/a>\n&lt;/div>\n</div>\n</div>'
                    );
   $('.result pre').text(coderesult).addClass('show-code');
   $('.preview-button').html(coderesult);
   $('.preview-instruct').hide();
   $('.code-preamble').hide();
   $('.code-instruct').show();
 });
});