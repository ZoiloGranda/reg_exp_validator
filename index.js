// var button = document.getElementById('btn');
// button.addEventListener('click', function () {
var inputChange = document.getElementById('input');
inputChange.addEventListener('change', function () {
  var input = document.getElementById('input').value;
  var output = document.getElementById('output')
  var pattern = /^(?=.*\d+.*)(?=.*[A-Z]+.*)\w{4,8}$/
  var result = pattern.test(input)
  output.innerHTML = result;
})


