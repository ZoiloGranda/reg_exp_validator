// var button = document.getElementById('btn');
// button.addEventListener('click', function () {
var inputChange = document.getElementById('input');
inputChange.addEventListener('change', function () {
  var input = document.getElementById('input').value;
  var output = document.getElementById('output')
  var pattern = /^\w{3,15}@\w{2,15}[.]\w{2,5}([.]\w{2,5})?$/;
  var result = pattern.test(input)
  output.textContent = result;
})


