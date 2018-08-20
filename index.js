// var button = document.getElementById('btn');
// button.addEventListener('click', function () {
var inputChange = document.getElementById('input');
inputChange.addEventListener('change', function () {
  var input = document.getElementById('input').value;
  var output = document.getElementById('output')
  var price =5;
  function increase(match, amount, fruit){
    amount = parseInt(amount)*price;
    return fruit +': $' + amount + '<br>';
  }
  var result = input.replace(/(\d+) (\w+),?/g, increase)
  output.innerHTML = result;
})


