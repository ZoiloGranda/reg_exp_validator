## Running

Just open `index.html` on the browser 

## Regular Expression and String methods
#### `regexp.exec()`
This method returns the matched text if it finds a match, otherwise it returns null.
```javascript
var str = "The best things in life are free";
var patt = new RegExp("e");
var res = patt.exec(str);
//returns e
```
#### `regexp.test()` 
This method returns true if it finds a match, otherwise it returns false.
```javascript
var str = "The best things in life are free";
var patt = new RegExp("e");
var res = patt.test(str);
//returns true

```
#### `string.match()` 
 This method searches a string for a match against a regular expression, and returns the matches, as an Array object. 
```javascript
var str = "The rain in SPAIN stays mainly in the plain"; 
var res = str.match(/ain/g);
//returns ain,ain,ain
```
#### `string.replace()` 
 This method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

```javascript
var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue/g, "red");
//returns "Mr Blue has a red house and a red car".
```
```javascript
//replacing special characters from a string
var str = "thi!s ha/s sp#eci(a?l ch#ar{acte+rs";
var res = str.replace(/[^\w\s]/gi, '');
//returns "this has special characters"
```

On the second parameter of the `replace()`, the matched elements can be accessed with `$`
```javascript
var str = "Zoilo Granda"
var res = str.replace(/(\w+) (\w+)/, '$2 $1')
//First looks for a group of word character, and stores it on `$1` because is the first match
//Then looks for another group of word character, and stores it on `$2` because is the second match
//reverting the return parameters '$2 $1', returns the inverted string
//returns Granda Zoilo
```
The `replace` method can also take a function as a second parameter. The first parameter of the callback function is the matched substring for each match (`'1 arepa', '2 pizzas', '3 empanadas'`). The following parameters will be as many as the regexp group patterns are, in this case there are two group patterns `(\d+) (\w+)`, means one parameter will be the digits characters (`'1','2','3'`), and the other parameter the word characters(`'arepa','pizzas', 'empanadas'`)
```javascript
var price = 5;
var input = "1 arepa, 2 pizzas, 3 empanadas"
function increase(match, amount, food){
  amount = parseInt(amount)*price;
  return fruit +': $' + amount + '<br>';
}
var result = input.replace(/(\d+) (\w+),?/g, increase)
/*
arepa: $5
pizzas: $10
empanadas: $15
*/
```

## Regular Expression tips

`/\d/` Matches any digit character from 0 to 9. Equivalent to `[0-9]`.

`.` The dot matches any character except linebreaks.

`*` Matches 0 or more of the preceding token.

`^` Caret symbol. when inside and at the start of `[]`, like `[^...]`, means "not the following" . When it's inside `[]` but not at the start, it means the actual `^` character. When it's escaped `\^`, it also means the actual `^` character. In all other cases it means start of the string or line .

`$` Matches the end of the string

`s` Matches white spaces

`/^\d$/` Matches only one digit character

`/^\d*$/` Matches zero or any number of digits from the start of the string

`/^\d*$/` Matches one or more number of digits from the start of the string

`?` The optional operator. Matches zero or one of the preceding characters of the string. If used after a another quantifier or even itself, it switches the matching mode from Greedy to Lazy.

```javascript
var reg = /".+"/g;
var str = 'the "man" was trying to "help" her';
str.match(reg); //returns ["man" was trying to "help"]
```

Instead of returning two separate strings `"man"` and `"help"`, it returns a string from the first quote to the final quote. That's because the quantifier `+`, is Greedy, it will try to match the longest string to the regular expression given. If we add the `?`, we change the quantifier from Greedy to Lazy, it will return the two words inside the quotes, because the regular expression will try to match the minimun amount of characters on the result.

```javascript
var reg = /".+?"/g;
var str = 'the "man" was trying to "help" her';
str.match(reg); //returns ["man" ,"help]"
```

`/^\d{3}$/` Matches exactly three digits from the start of the string

`/^\d{3,5}$/` Matches three to five digits from the start of the string

`/^\d{3,}$/` Matches three or more digits from the start of the string

`/\w/` Matches word characters [a-z, 0-9, _ ] 

`/^\w{3,}$/` Matches three or more word characters 

`/^[5-9]{3}$/` Matches three numbers from 5 to 9

`/^[5-9A-D]{3}$/` Matches three characters from 5 to 9 or uppercase letters from A to D

`+` Matches 1 or more of the preceding token

`/^[1357ASDF]+$/` Matches a string with any of these characters

`/^[^fgv123]+$/` Rejects a string with any of these characters

`/^\d{3}-\d{3}-\d{4}$/` Matches three digits a dash (-) then three digits a dash (-) then four digits

`/^(\d{3}-)?\d{3}-\d{4}$/` With the optional (?) operator and the parenthesis for grouping, the string matches three digits dash four digits or three digits a dash (-) then three digits a dash (-) then four digits

`/^\w{3,15}@\w{2,15}[.]\w{2,5}$/` email validation, matches 3 to 15 word characters, then @, then 2 to 15 word characters then . then 2 to 5 word characters

`/^\w{3,15}@\w{2,15}[.]\w{2,5}([.]\w{2,5})?$/` email validation, matches 3 to 15 word characters, then @, then 2 to 15 word characters then a dot then 2 to 5 word characters, then an optional dot then 2 to 5 word characters

`/^(music|sport|movie|book)$/` Matches only one of those words

`/^is/` Matches if the string starts with `is`

`/is$/` Matches if the string ends with `is`

`/\bis\b/` Matches the whole word `is`. The `b` operator matches a word boundary position between a word character and non-word character or position 

`/^(?=ISBN)ISBN-\d{3}-\d{4}$/` The lookAhead `?=` searches from the matches before comparing it to the rest of the string, useful for perfomance reasons. First search for `'ISBN'`, and if found, searches the rest of the patterns

`/^(?=.*\d+.*)(?=.*[A-Z]+.*)\w{4,8}$/` Here the lookAhead `?=`, is used to check if the password has one or more digits, anywhere on the string `'.*\d+.*'`, then checks if it has an uppercase letter anywhere on the string `'.*[A-Z]+.*'`,and if both lookAheads are true, checks if the string has four to eight characters long `\w{4,8}$`

When the regular expression needs to be generated dinamically, it has to be created with the `new` keyword
```javascript
var minLenght: 10;
var maxLenght: 30;
var p = new RegExp('\^[a-zA-Z\\s]{'+minLenght+','+maxLenght+'}\$', 'i');
// the second parameter are the regexp flags, like 'i' for case insensitive
```
