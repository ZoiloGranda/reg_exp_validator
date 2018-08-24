$(function() {
  $.fn.email= function () {
    var $this = $(this);
    var pattern = /^\w{2,15}@\w{2,15}[.]\w{2,5}([.](us|cn|fr))?$/;
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
})

$('button').click(function(){
  var isEmailValid = $('#email').email();
  console.log("is email valid: "+isEmailValid);
})
