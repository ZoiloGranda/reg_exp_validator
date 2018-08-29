$(function() {
  //the fn object is where jquery functions are stored
  $.fn.email= function (customOptions) {
    var $this = $(this);
    //extend merges the objects given as parameters on the first object passed
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
  
  $.fn.fullName  = function (customOptions) {
    var options = $.extend({},$.fn.fullName.defaultOptions, customOptions)
    var $this = $(this);
    var pattern = options.pattern(options.minLenght, options.maxLenght);
    if (options.required===false) {
      return true
    } else {
      var input = $this.val();
      var result = pattern.test(input)
      if (result===false) {
        $this.css({
          'outline':'1px solid red'
        })
      }else {
        $this.css({
          'outline':''
        })
      }
      return result
    }
  }
  $.fn.fullName.defaultOptions={
    minLenght:5,
    maxLenght: 30,
    required: true,
    pattern:  function (minLenght, maxLenght) {
      //if the regexp needs to be generated dinamically, it has to be created like this
      var p = new RegExp('\^[a-zA-Z\\s]{'+minLenght+','+maxLenght+'}\$', 'i')
      return p; 
    }
  }
})

$('button').click(function(){
  var options = {
    pattern: /^\w{2,15}@\w{2,15}[.]\w{2,5}?$/
  }
  var isEmailValid = $('#email').email(options);
  console.log("is email valid: "+isEmailValid);
  var nameOptions = {
    minLenght: 10,
    maxLenght:30
  }
  var isNameValid = $('#full-name').fullName(nameOptions);
  console.log("is name valid: "+isNameValid);
})
