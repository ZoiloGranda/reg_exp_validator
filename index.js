// var button = document.getElementById('btn');
// button.addEventListener('click', function () {
var inputChange = document.getElementById('input');
inputChange.addEventListener('change', function () {
  var input = document.getElementById('input').value;
  var output = document.getElementById('output')
  var result = input.replace(/(\w+) (\w+)/, '$2 $1')
  output.textContent = result + ' - index: '+ result.index;
})


