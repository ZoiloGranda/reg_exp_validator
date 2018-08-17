## Running

Just open `index.html` on the browser 

## Regular Expression and String methods
#### `regexp.exec()`
This method returns the matched text if it finds a match, otherwise it returns null.
```
var str = "The best things in life are free";
var patt = new RegExp("e");
var res = patt.exec(str);
//returns e
```
#### `regexp.test()` 
This method returns true if it finds a match, otherwise it returns false.
```
var str = "The best things in life are free";
var patt = new RegExp("e");
var res = patt.test(str);
//returns true

```
#### `string.match()` 
 This method searches a string for a match against a regular expression, and returns the matches, as an Array object. 
```
var str = "The rain in SPAIN stays mainly in the plain"; 
var res = str.match(/ain/g);
//returns ain,ain,ain
```
#### `string.replace()` 
 This method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

```
var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue/g, "red");
//returns "Mr Blue has a red house and a red car".
```
```
//replacing special characters from a string
var str = "thi!s ha/s sp#eci(a?l ch#ar{acte+rs";
var res = str.replace(/[^\w\s]/gi, '');
//returns "this has special characters"
```

The second parameter of the `replace()`, the matched elements can be accessed with `$`
```
var str = "Zoilo Granda"
var res = str.replace(/(\w+) (\w+)/, '$2 $1')
//Primero busca un grupo de caracteres de palabra, y lo almacena en $1 porque es el primer match
//Segundo busca otro grupo de caracteres de palabra, y lo almacena en $2 porque es el segundo match
//Los parametros del replace '$2 $1' invierten el orden del string
//returns Granda Zoilo
```

## Regular Expression tips

`/\d/` Matches any digit character from 0 to 9. Equivalent to `[0-9]`.

`^` Caret symbol. when inside and at the start of `[]`, like `[^...]`, means "not the following" . When it's inside `[]` but not at the start, it means the actual `^` character. When it's escaped `\^`, it also means the actual `^` character. In all other cases it means start of the string or line .

`$` Matches the end of the string

`s` Matches white spaces

`/^\d$/` Matches only one digit character

`/^\d*$/` Matches zero or any number of digits from the start of the string

`/^\d*$/` Matches one or more number of digits from the start of the string

`?` The optional operator. Matches zero or one of the preceding characters of the string

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