$(function() {
  //the fn object is where jquery functions are stored
  $.fn.email= function (customOptions) {
    var $this = $(this);
    var options = $.fn.extend({},$.fn.email.defaultOptions, customOptions);
    var pattern = options.pattern;
    if (options.required===false) {
      //required means if the password is mandatory, if it is false
      //then it simply returns true without validating the email address
      return true;
    }else {
      var input = $this.val();
      var result = pattern.test(input)
      if (result===false) {
        $this.css({
          'outline': '1px solid red'
        })
      } else {
        $this.css({
          'outline': ''
        })      
      }
      return result    
    }
  }
  $.fn.email.defaultOptions={
    required: true,
    pattern: /^\w{2,15}@\w{2,15}[.]\w{2,5}([.](us|cn|fr))?$/
  }
})

$('button').click(function(){
  var options = {
    pattern: /^\w{2,15}@\w{2,15}[.]\w{2,5}?$/
  }
  var isEmailValid = $('#email').email(options);
  console.log("is email valid: "+isEmailValid);
})
